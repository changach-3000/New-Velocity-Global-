import 'dotenv/config';
import express from 'express';
import axios from 'axios';
import crypto from 'crypto';
import PocketBase from 'pocketbase';

const router = express.Router();

// Initialize PocketBase
const pb = new PocketBase(process.env.POCKETBASE_URL || 'http://localhost:8090');
pb.autoCancellation(false);

// Paystack configuration
const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;
const PAYSTACK_WEBHOOK_SECRET = process.env.PAYSTACK_WEBHOOK_SECRET;
const PAYSTACK_API_BASE = 'https://api.paystack.co';

// Membership tiers configuration
const MEMBERSHIP_TIERS = {
  'Standard': { price: 500, amount_cents: 50000 },
  'Premium': { price: 999, amount_cents: 99900 },
  'Elite': { price: 1499, amount_cents: 149900 }
};

const REFUND_WINDOW_DAYS = 7;

const getTimestamp = () => new Date().toISOString();

/**
 * Authenticate PocketBase as admin
 */
const authenticatePocketBase = async () => {
  if (!pb.authStore.isValid) {
    console.log(`[${getTimestamp()}] [Membership] Authenticating as admin...`);
    await pb.admins.authWithPassword(
      process.env.POCKETBASE_ADMIN_EMAIL,
      process.env.POCKETBASE_ADMIN_PASSWORD
    );
    console.log(`[${getTimestamp()}] [Membership] Admin authentication successful`);
  }
};

/**
 * Verify Paystack webhook signature
 */
const verifyPaystackSignature = (payload, signature) => {
  const hash = crypto
    .createHmac('sha512', PAYSTACK_WEBHOOK_SECRET)
    .update(JSON.stringify(payload))
    .digest('hex');
  return hash === signature;
};

/**
 * Calculate days remaining in refund window
 */
const calculateRefundEligibility = (purchaseDate) => {
  const now = new Date();
  const purchase = new Date(purchaseDate);
  const diffTime = now - purchase;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const daysRemaining = Math.max(0, REFUND_WINDOW_DAYS - diffDays);
  const eligible = diffDays < REFUND_WINDOW_DAYS;

  return {
    eligible,
    daysRemaining,
    daysSincePurchase: diffDays
  };
};

/**
 * POST /membership/initiate-payment
 * Initializes a Paystack payment for membership tier
 */
router.post('/initiate-payment', async (req, res) => {
  console.log(`[${getTimestamp()}] [Membership] Received initiate-payment request`);

  const { tier } = req.body;

  // Validate authentication
  if (!req.auth || !req.auth.id) {
    console.warn(`[${getTimestamp()}] [Membership] Validation failed: User not authenticated`);
    return res.status(401).json({ error: 'User not authenticated' });
  }

  const userId = req.auth.id;

  // Validate tier
  if (!tier) {
    console.warn(`[${getTimestamp()}] [Membership] Validation failed: Missing tier`);
    return res.status(400).json({ error: 'Missing tier parameter' });
  }

  if (!MEMBERSHIP_TIERS[tier]) {
    console.warn(`[${getTimestamp()}] [Membership] Validation failed: Invalid tier: ${tier}`);
    return res.status(400).json({
      error: 'Invalid tier. Must be one of: Standard, Premium, Elite',
      validTiers: Object.keys(MEMBERSHIP_TIERS)
    });
  }

  // Authenticate with PocketBase
  await authenticatePocketBase();

  // Fetch user email from users collection
  const user = await pb.collection('users').getOne(userId);
  const userEmail = user.email;

  if (!userEmail) {
    console.error(`[${getTimestamp()}] [Membership] User ${userId} has no email address`);
    throw new Error('User email not found');
  }

  const tierData = MEMBERSHIP_TIERS[tier];
  console.log(`[${getTimestamp()}] [Membership] Initiating payment for tier: ${tier}, Amount: $${tierData.price}, User: ${userId}`);

  // Prepare metadata
  const metadata = {
    userId,
    tier,
    type: 'membership'
  };

  console.log(`[${getTimestamp()}] [Membership] Calling Paystack API...`);
  const response = await axios.post(
    `${PAYSTACK_API_BASE}/transaction/initialize`,
    {
      email: userEmail,
      amount: tierData.amount_cents,
      metadata,
      callback_url: 'https://velocitygloballeasing.com/payment-success'
    },
    {
      headers: {
        'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json'
      }
    }
  );

  if (!response.data.status) {
    console.error(`[${getTimestamp()}] [Membership] Paystack API error: ${response.data.message}`);
    throw new Error(response.data.message);
  }

  const { authorization_url } = response.data.data;

  console.log(`[${getTimestamp()}] [Membership] Payment initialized successfully`);

  return res.status(200).json({
    authorization_url
  });
});

/**
 * POST /membership/webhook
 * Receives and processes Paystack webhook events
 */
router.post('/webhook', async (req, res) => {
  console.log(`[${getTimestamp()}] [Membership] Received webhook request`);

  const signature = req.headers['x-paystack-signature'];
  const payload = req.body;

  // Verify webhook signature
  if (!signature || !verifyPaystackSignature(payload, signature)) {
    console.warn(`[${getTimestamp()}] [Membership] Webhook signature verification failed`);
    return res.status(200).json({ message: 'Event received' });
  }

  console.log(`[${getTimestamp()}] [Membership] Webhook signature verified`);

  const event = payload.event;
  console.log(`[${getTimestamp()}] [Membership] Processing webhook event: ${event}`);

  // Only process charge.success events
  if (event !== 'charge.success') {
    console.log(`[${getTimestamp()}] [Membership] Ignoring non-success event: ${event}`);
    return res.status(200).json({ message: 'Event received' });
  }

  const data = payload.data;
  const { reference, status, amount, metadata } = data;

  if (status !== 'success') {
    console.log(`[${getTimestamp()}] [Membership] Payment status is not success: ${status}`);
    return res.status(200).json({ message: 'Event received' });
  }

  console.log(`[${getTimestamp()}] [Membership] Processing successful payment. Reference: ${reference}`);

  // Extract metadata
  const { userId, tier } = metadata || {};

  if (!userId || !tier) {
    console.error(`[${getTimestamp()}] [Membership] Missing userId or tier in metadata`);
    return res.status(200).json({ message: 'Event received' });
  }

  // Authenticate with PocketBase
  await authenticatePocketBase();

  // Check if membership already exists
  let existingMembership = null;
  try {
    existingMembership = await pb.collection('user_memberships').getFirstListItem(
      `user_id="${userId}" && payment_reference="${reference}"`
    );
  } catch (e) {
    // Not found, proceed to create
  }

  if (existingMembership) {
    console.log(`[${getTimestamp()}] [Membership] Membership already exists for this payment: ${existingMembership.id}`);
    return res.status(200).json({ message: 'Event received' });
  }

  // Create membership record
  const tierData = MEMBERSHIP_TIERS[tier];
  const membershipData = {
    user_id: userId,
    tier,
    purchase_date: new Date().toISOString(),
    status: 'active',
    payment_reference: reference,
    refund_eligible: true,
    refund_processed: false,
    amount_paid: amount / 100 // Convert from cents to dollars
  };

  const membership = await pb.collection('user_memberships').create(membershipData);
  console.log(`[${getTimestamp()}] [Membership] Membership record created: ${membership.id}`);

  // Fetch user email
  const user = await pb.collection('users').getOne(userId);
  const userEmail = user.email;

  // Send confirmation email
  if (userEmail) {
    const emailSubject = `Welcome to ${tier} Membership - Velocity Global Leasing`;
    const emailBody = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #2c3e50; color: white; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
    .header h2 { margin: 0; }
    .content { margin-bottom: 20px; }
    .field { margin-bottom: 15px; }
    .field-label { font-weight: bold; color: #2c3e50; margin-bottom: 5px; }
    .field-value { background-color: #f8f9fa; padding: 10px; border-left: 3px solid #3498db; }
    .benefits { background-color: #ecf0f1; padding: 15px; border-radius: 5px; margin-top: 20px; }
    .benefits h3 { margin-top: 0; color: #2c3e50; }
    .benefits ul { margin: 10px 0; padding-left: 20px; }
    .benefits li { margin-bottom: 8px; }
    .cta-button { display: inline-block; background-color: #3498db; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin-top: 20px; }
    .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #7f8c8d; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Welcome to ${tier} Membership!</h2>
    </div>
    
    <div class="content">
      <p>Thank you for upgrading to our ${tier} membership tier. Your account is now active and you have full access to all ${tier} features.</p>
      
      <div class="field">
        <div class="field-label">Membership Tier:</div>
        <div class="field-value">${tier}</div>
      </div>
      
      <div class="field">
        <div class="field-label">Amount Paid:</div>
        <div class="field-value">$${tierData.price}</div>
      </div>
      
      <div class="field">
        <div class="field-label">Purchase Date:</div>
        <div class="field-value">${new Date().toLocaleDateString()}</div>
      </div>
      
      <div class="field">
        <div class="field-label">Cancellation Deadline:</div>
        <div class="field-value">${new Date(Date.now() + REFUND_WINDOW_DAYS * 24 * 60 * 60 * 1000).toLocaleDateString()}</div>
      </div>
      
      <p style="color: #e74c3c; font-weight: bold;">You have 7 days from the purchase date to cancel your membership and receive a full refund.</p>
      
      <div class="benefits">
        <h3>Your ${tier} Membership Includes:</h3>
        <ul>
          <li>Access to exclusive seminars and webinars</li>
          <li>Private Slack community with industry experts</li>
          <li>Weekly industry reports and market analysis</li>
          <li>Special discounts on premium courses</li>
          <li>Priority support from our team</li>
        </ul>
      </div>
      
      <a href="https://velocitygloballeasing.com/dashboard" class="cta-button">Go to Dashboard</a>
    </div>
    
    <div class="footer">
      <p>This email was sent from Velocity Global Leasing.</p>
      <p>If you have any questions, please contact our support team at support@velocitygloballeasing.com</p>
    </div>
  </div>
</body>
</html>
    `.trim();

    try {
      // Use PocketBase mail client to send email
      await pb.sendSuperuserEmail(userEmail, emailSubject, emailBody);
      console.log(`[${getTimestamp()}] [Membership] Confirmation email sent to ${userEmail}`);
    } catch (emailErr) {
      console.warn(`[${getTimestamp()}] [Membership] Failed to send confirmation email: ${emailErr.message}`);
    }
  }

  return res.status(200).json({ success: true });
});

/**
 * GET /membership/status
 * Fetches user's current membership status
 */
router.get('/status', async (req, res) => {
  console.log(`[${getTimestamp()}] [Membership] Received status request`);

  // Validate authentication
  if (!req.auth || !req.auth.id) {
    console.warn(`[${getTimestamp()}] [Membership] Validation failed: User not authenticated`);
    return res.status(401).json({ error: 'User not authenticated' });
  }

  const userId = req.auth.id;
  console.log(`[${getTimestamp()}] [Membership] Fetching membership for user: ${userId}`);

  // Authenticate with PocketBase
  await authenticatePocketBase();

  // Fetch user's membership
  let membership = null;
  try {
    membership = await pb.collection('user_memberships').getFirstListItem(
      `user_id="${userId}" && status="active"`,
      { sort: '-purchase_date' }
    );
  } catch (e) {
    console.log(`[${getTimestamp()}] [Membership] No active membership found for user: ${userId}`);
    return res.status(200).json({ hasMembership: false });
  }

  // Calculate refund eligibility
  const refundInfo = calculateRefundEligibility(membership.purchase_date);

  const response = {
    hasMembership: true,
    tier: membership.tier,
    purchase_date: membership.purchase_date,
    status: membership.status,
    refund_eligible: refundInfo.eligible,
    days_remaining: refundInfo.daysRemaining
  };

  console.log(`[${getTimestamp()}] [Membership] Membership status retrieved for user: ${userId}`);
  return res.status(200).json(response);
});

/**
 * GET /membership/refund-eligible
 * Checks if user's membership is eligible for refund
 */
router.get('/refund-eligible', async (req, res) => {
  console.log(`[${getTimestamp()}] [Membership] Received refund-eligible request`);

  // Validate authentication
  if (!req.auth || !req.auth.id) {
    console.warn(`[${getTimestamp()}] [Membership] Validation failed: User not authenticated`);
    return res.status(401).json({ error: 'User not authenticated' });
  }

  const userId = req.auth.id;
  console.log(`[${getTimestamp()}] [Membership] Checking refund eligibility for user: ${userId}`);

  // Authenticate with PocketBase
  await authenticatePocketBase();

  // Fetch user's membership
  let membership = null;
  try {
    membership = await pb.collection('user_memberships').getFirstListItem(
      `user_id="${userId}" && status="active"`,
      { sort: '-purchase_date' }
    );
  } catch (e) {
    console.log(`[${getTimestamp()}] [Membership] No active membership found for user: ${userId}`);
    return res.status(200).json({
      eligible: false,
      days_remaining: 0,
      refund_amount: 0,
      tier: null
    });
  }

  // Calculate refund eligibility
  const refundInfo = calculateRefundEligibility(membership.purchase_date);
  const tierData = MEMBERSHIP_TIERS[membership.tier];

  const response = {
    eligible: refundInfo.eligible,
    days_remaining: refundInfo.daysRemaining,
    refund_amount: refundInfo.eligible ? tierData.price : 0,
    tier: membership.tier
  };

  console.log(`[${getTimestamp()}] [Membership] Refund eligibility checked for user: ${userId}. Eligible: ${refundInfo.eligible}`);
  return res.status(200).json(response);
});

/**
 * POST /membership/cancel
 * Cancels membership and processes refund if eligible
 */
router.post('/cancel', async (req, res) => {
  console.log(`[${getTimestamp()}] [Membership] Received cancel request`);

  // Validate authentication
  if (!req.auth || !req.auth.id) {
    console.warn(`[${getTimestamp()}] [Membership] Validation failed: User not authenticated`);
    return res.status(401).json({ error: 'User not authenticated' });
  }

  const userId = req.auth.id;
  console.log(`[${getTimestamp()}] [Membership] Processing cancellation for user: ${userId}`);

  // Authenticate with PocketBase
  await authenticatePocketBase();

  // Fetch user's membership
  let membership = null;
  try {
    membership = await pb.collection('user_memberships').getFirstListItem(
      `user_id="${userId}" && status="active"`,
      { sort: '-purchase_date' }
    );
  } catch (e) {
    console.log(`[${getTimestamp()}] [Membership] No active membership found for user: ${userId}`);
    return res.status(400).json({ error: 'No active membership found' });
  }

  // Check refund eligibility
  const refundInfo = calculateRefundEligibility(membership.purchase_date);
  const tierData = MEMBERSHIP_TIERS[membership.tier];
  const refundAmount = refundInfo.eligible ? tierData.price : 0;

  let refundProcessed = false;

  // Process refund if eligible
  if (refundInfo.eligible) {
    console.log(`[${getTimestamp()}] [Membership] User is eligible for refund. Processing refund...`);
    try {
      console.log(`[${getTimestamp()}] [Membership] Calling Paystack refund API for reference: ${membership.payment_reference}`);
      const refundResponse = await axios.post(
        `${PAYSTACK_API_BASE}/refund`,
        {
          transaction: membership.payment_reference,
          amount: tierData.amount_cents
        },
        {
          headers: {
            'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (refundResponse.data.status) {
        refundProcessed = true;
        console.log(`[${getTimestamp()}] [Membership] Refund processed successfully`);
      } else {
        console.error(`[${getTimestamp()}] [Membership] Refund API error: ${refundResponse.data.message}`);
      }
    } catch (refundErr) {
      console.error(`[${getTimestamp()}] [Membership] Refund processing error: ${refundErr.message}`);
    }
  }

  // Update membership status
  await pb.collection('user_memberships').update(membership.id, {
    status: 'cancelled',
    cancellation_date: new Date().toISOString(),
    refund_eligible: refundInfo.eligible,
    refund_processed: refundProcessed
  });
  console.log(`[${getTimestamp()}] [Membership] Membership updated to cancelled status`);

  // Fetch user email
  const user = await pb.collection('users').getOne(userId);
  const userEmail = user.email;

  // Send cancellation email
  if (userEmail) {
    const emailSubject = 'Membership Cancelled - Velocity Global Leasing';
    const refundMessage = refundProcessed
      ? `<p>Your membership has been cancelled and a refund of <strong>$${refundAmount}</strong> has been processed to your original payment method. Please allow 5-7 business days for the refund to appear in your account.</p>`
      : `<p>Your membership has been cancelled. Unfortunately, the refund period has expired (more than 7 days since purchase), so no refund will be issued.</p>`;

    const emailBody = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #e74c3c; color: white; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
    .header h2 { margin: 0; }
    .content { margin-bottom: 20px; }
    .field { margin-bottom: 15px; }
    .field-label { font-weight: bold; color: #2c3e50; margin-bottom: 5px; }
    .field-value { background-color: #f8f9fa; padding: 10px; border-left: 3px solid #e74c3c; }
    .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #7f8c8d; }
    .cta-button { display: inline-block; background-color: #3498db; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Membership Cancelled</h2>
    </div>
    
    <div class="content">
      ${refundMessage}
      
      <div class="field">
        <div class="field-label">Membership Tier:</div>
        <div class="field-value">${membership.tier}</div>
      </div>
      
      <div class="field">
        <div class="field-label">Cancellation Date:</div>
        <div class="field-value">${new Date().toLocaleDateString()}</div>
      </div>
      
      ${refundProcessed ? `
      <div class="field">
        <div class="field-label">Refund Amount:</div>
        <div class="field-value">$${refundAmount}</div>
      </div>
      ` : ''}
      
      <p>We'd love to have you back! If you'd like to rejoin or have any questions, please don't hesitate to contact our support team.</p>
      
      <a href="https://velocitygloballeasing.com/membership" class="cta-button">View Membership Plans</a>
    </div>
    
    <div class="footer">
      <p>This email was sent from Velocity Global Leasing.</p>
      <p>If you have any questions, please contact our support team at support@velocitygloballeasing.com</p>
    </div>
  </div>
</body>
</html>
    `.trim();

    try {
      // Use PocketBase mail client to send email
      await pb.sendSuperuserEmail(userEmail, emailSubject, emailBody);
      console.log(`[${getTimestamp()}] [Membership] Cancellation email sent to ${userEmail}`);
    } catch (emailErr) {
      console.warn(`[${getTimestamp()}] [Membership] Failed to send cancellation email: ${emailErr.message}`);
    }
  }

  return res.status(200).json({
    success: true,
    message: refundProcessed
      ? 'Membership cancelled. Refund processed.'
      : 'Membership cancelled. Refund period expired.',
    refund_amount: refundAmount
  });
});

export default router;
