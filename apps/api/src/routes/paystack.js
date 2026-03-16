import express from 'express';
import axios from 'axios';
import crypto from 'crypto';
import PocketBase from 'pocketbase';

const router = express.Router();
const POCKETBASE_URL = 'https://velocity-global-db-v2.onrender.com';
const pb = new PocketBase(POCKETBASE_URL);
// Initialize PocketBase client for enrollment operations
// const pb = new PocketBase(process.env.POCKETBASE_URL || 'http://localhost:8090');
pb.autoCancellation(false);

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;
const PAYSTACK_WEBHOOK_SECRET = process.env.PAYSTACK_WEBHOOK_SECRET;
const PAYSTACK_API_BASE = 'https://api.paystack.co';

const getTimestamp = () => new Date().toISOString();

// Helper to authenticate as admin/superuser
const authenticatePocketBase = async () => {
  try {
    if (!pb.authStore.isValid) {
      console.log(`[${getTimestamp()}] [Paystack] Authenticating as superuser...`);
      await pb.admins.authWithPassword(
        process.env.POCKETBASE_ADMIN_EMAIL,
        process.env.POCKETBASE_ADMIN_PASSWORD
      );
      console.log(`[${getTimestamp()}] [Paystack] Superuser authentication successful`);
    }
  } catch (error) {
    console.error(`[${getTimestamp()}] [Paystack] PocketBase authentication failed:`, error.message);
    throw new Error('Database authentication failed: ' + error.message);
  }
};

/**
 * POST /paystack/initialize
 * Initializes a Paystack transaction for course(s) purchase
 */
router.post('/initialize', async (req, res) => {
  console.log(`[${getTimestamp()}] [Paystack] Received initialize request`);

  try {
    const { courseId, cartItems, userId, userEmail, amount } = req.body;

    // Validation
    if (!userId) {
      console.warn(`[${getTimestamp()}] [Paystack] Validation failed: Missing userId`);
      return res.status(400).json({ error: 'Missing userId' });
    }

    if (!userEmail) {
      console.warn(`[${getTimestamp()}] [Paystack] Validation failed: Missing userEmail`);
      return res.status(400).json({ error: 'Missing userEmail' });
    }

    if (!amount || amount <= 0) {
      console.warn(`[${getTimestamp()}] [Paystack] Validation failed: Invalid amount`);
      return res.status(400).json({ error: 'Invalid amount' });
    }

    // Determine courses to purchase
    const coursesToPurchase = cartItems && Array.isArray(cartItems) && cartItems.length > 0
      ? cartItems
      : (courseId ? [courseId] : []);

    if (coursesToPurchase.length === 0) {
      console.warn(`[${getTimestamp()}] [Paystack] Validation failed: No courses specified`);
      return res.status(400).json({ error: 'Missing courseId or cartItems' });
    }

    console.log(`[${getTimestamp()}] [Paystack] Initializing transaction for ${coursesToPurchase.length} course(s), User: ${userId}, Amount: ${amount}`);

    // Convert amount to kobo (Paystack uses kobo, 1 USD = 100 kobo)
    const amountInKobo = Math.round(amount * 100);

    // Prepare metadata
    const metadata = {
      userId,
      courseId: courseId || null,
      cartItems: cartItems || [],
      itemCount: coursesToPurchase.length
    };

    console.log(`[${getTimestamp()}] [Paystack] Amount in kobo: ${amountInKobo}`);
    console.log(`[${getTimestamp()}] [Paystack] Metadata:`, JSON.stringify(metadata));

    // Call Paystack API
    console.log(`[${getTimestamp()}] [Paystack] Calling Paystack API...`);
    const response = await axios.post(
      `${PAYSTACK_API_BASE}/transaction/initialize`,
      {
        email: userEmail,
        amount: amountInKobo,
      },
      {
        headers: {
          'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!response.data.status) {
      console.error(`[${getTimestamp()}] [Paystack] API returned error: ${response.data.message}`);
      return res.status(400).json({ error: response.data.message });
    }

    const { authorization_url, access_code, reference } = response.data.data;

    console.log(`[${getTimestamp()}] [Paystack] Transaction initialized successfully. Reference: ${reference}`);

    return res.status(200).json({
      authorization_url,
      reference
    });

  } catch (error) {
    console.error(`[${getTimestamp()}] [Paystack] Initialize error: ${error.message}`);

    if (error.response?.data) {
      console.error(`[${getTimestamp()}] [Paystack] API error details:`, error.response.data);
    }

    if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
      console.error(`[${getTimestamp()}] [Paystack] Network error - Paystack unreachable`);
      return res.status(503).json({
        error: 'Paystack service unavailable',
        details: error.message
      });
    }

    return res.status(500).json({
      error: 'Failed to initialize transaction',
      details: error.message
    });
  }
});

/**
 * POST /paystack/verify
 * Verifies a Paystack transaction and creates enrollment records
 */
router.post('/verify', async (req, res) => {
  console.log(`[${getTimestamp()}] [Paystack] Received verify request`);

  try {
    const { reference } = req.body;

    if (!reference) {
      console.warn(`[${getTimestamp()}] [Paystack] Validation failed: Missing reference`);
      return res.status(400).json({ error: 'Missing reference' });
    }

    console.log(`[${getTimestamp()}] [Paystack] Verifying transaction: ${reference}`);

    // Call Paystack API to verify
    console.log(`[${getTimestamp()}] [Paystack] Calling Paystack verify API...`);
    const response = await axios.get(
      `${PAYSTACK_API_BASE}/transaction/verify/${reference}`,
      {
        headers: {
          'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`
        }
      }
    );

    if (!response.data.status) {
      console.error(`[${getTimestamp()}] [Paystack] Verification failed: ${response.data.message}`);
      return res.status(400).json({ success: false, message: 'Payment verification failed' });
    }

    const transaction = response.data.data;

    if (transaction.status !== 'success') {
      console.log(`[${getTimestamp()}] [Paystack] Transaction status: ${transaction.status}`);
      return res.status(400).json({ success: false, message: 'Payment verification failed' });
    }

    console.log(`[${getTimestamp()}] [Paystack] Transaction verified successfully. Reference: ${reference}`);

    // Extract metadata
    const metadata = transaction.metadata || {};
    const { userId, courseId, cartItems } = metadata;

    if (!userId) {
      console.error(`[${getTimestamp()}] [Paystack] Missing userId in metadata`);
      return res.status(400).json({ success: false, message: 'Invalid transaction metadata' });
    }

    // Determine courses to enroll
    const coursesToEnroll = (cartItems && Array.isArray(cartItems) && cartItems.length > 0)
      ? cartItems
      : (courseId ? [courseId] : []);

    if (coursesToEnroll.length === 0) {
      console.error(`[${getTimestamp()}] [Paystack] No courses found in metadata`);
      return res.status(400).json({ success: false, message: 'No courses to enroll' });
    }

    console.log(`[${getTimestamp()}] [Paystack] Creating enrollments for ${coursesToEnroll.length} course(s)`);

    // Authenticate with PocketBase
    await authenticatePocketBase();

    // Create enrollment records
    const enrollments = [];
    const enrollmentErrors = [];

    for (const cId of coursesToEnroll) {
      try {
        console.log(`[${getTimestamp()}] [Paystack] Creating enrollment for user ${userId}, course ${cId}`);

        // Check if enrollment already exists to avoid duplicates
        try {
          const existing = await pb.collection('enrollments').getFirstListItem(
            `user_id="${userId}" && course_id="${cId}"`
          );
          if (existing) {
            console.log(`[${getTimestamp()}] [Paystack] Enrollment already exists: ${existing.id}`);
            enrollments.push({
              courseId: cId,
              userId: userId,
              enrollmentId: existing.id,
              status: 'existing'
            });
            continue;
          }
        } catch (e) {
          // Not found, proceed to create
        }

        const enrollment = await pb.collection('enrollments').create({
          user_id: userId,
          course_id: cId,
          enrollment_date: new Date().toISOString(),
          status: 'active',
          payment_reference: reference
        });

        console.log(`[${getTimestamp()}] [Paystack] Enrollment created successfully: ${enrollment.id}`);
        enrollments.push({
          courseId: cId,
          userId: userId,
          enrollmentId: enrollment.id,
          status: 'new'
        });

      } catch (enrollmentErr) {
        console.error(`[${getTimestamp()}] [Paystack] Failed to create enrollment for course ${cId}: ${enrollmentErr.message}`);
        enrollmentErrors.push({
          courseId: cId,
          error: enrollmentErr.message
        });
      }
    }

    // Return success if at least one enrollment was created or found
    if (enrollments.length > 0) {
      console.log(`[${getTimestamp()}] [Paystack] Successfully processed ${enrollments.length} enrollment(s)`);
      return res.status(200).json({
        success: true,
        enrollments: enrollments,
        errors: enrollmentErrors.length > 0 ? enrollmentErrors : undefined
      });
    } else {
      console.error(`[${getTimestamp()}] [Paystack] Failed to create any enrollments`);
      return res.status(500).json({
        success: false,
        message: 'Failed to create enrollments',
        errors: enrollmentErrors
      });
    }

  } catch (error) {
    console.error(`[${getTimestamp()}] [Paystack] Verify error: ${error.message}`);

    if (error.response?.data) {
      console.error(`[${getTimestamp()}] [Paystack] API error details:`, error.response.data);
    }

    return res.status(500).json({
      success: false,
      message: 'Failed to verify transaction',
      details: error.message
    });
  }
});

export default router;