import express from 'express';
import Stripe from 'stripe';
import PocketBase from 'pocketbase';

const router = express.Router();

// Initialize Stripe with secret key from environment variables
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Initialize PocketBase client for admin operations
const pb = new PocketBase(process.env.POCKETBASE_URL || 'http://localhost:8090');

// Disable auto-cancellation to prevent race conditions in backend
pb.autoCancellation(false);

// Helper to authenticate as admin/superuser
const authenticatePocketBase = async () => {
  try {
    // Only authenticate if not already valid
    if (!pb.authStore.isValid) {
      console.log('[Stripe] Authenticating as superuser...');
      
      // In PocketBase v0.23+, admins are in the '_superusers' collection
      await pb.collection('_superusers').authWithPassword(
        process.env.POCKETBASE_ADMIN_EMAIL,
        process.env.POCKETBASE_ADMIN_PASSWORD
      );
      
      console.log('[Stripe] Superuser authentication successful');
    }
  } catch (error) {
    console.error('[Stripe] PocketBase authentication failed:', error.message);
    console.error('[Stripe] Auth Error Details:', error.data);
    // Throw error to prevent continuing with unauthenticated client
    throw new Error('Database authentication failed: ' + error.message);
  }
};

/**
 * POST /stripe/create-checkout
 * Creates a Stripe Checkout Session for a single course purchase
 */
router.post('/create-checkout', async (req, res) => {
  console.log('[Stripe] Received create-checkout request (single)');
  
  try {
    const { courseId, amount, courseName, userId, successUrl, cancelUrl } = req.body;

    // 1. Validation
    if (!courseId) return res.status(400).json({ error: 'Missing courseId' });
    if (!userId) return res.status(400).json({ error: 'Missing userId' });

    // Authenticate before fetching data
    await authenticatePocketBase();

    // Fetch course details to ensure price accuracy
    let finalAmount = amount;
    let finalName = courseName;
    
    try {
      const course = await pb.collection('courses').getOne(courseId);
      finalAmount = course.price;
      finalName = course.title;
    } catch (e) {
      console.warn(`[Stripe] Could not fetch course ${courseId} details:`, e.message);
      // If we can't fetch the course, we might still proceed if we trust the client, 
      // but for security it's better to fail or be very careful. 
      // Here we'll fail if we can't verify price.
      if (!amount) return res.status(400).json({ error: 'Invalid course details and verification failed' });
    }

    console.log(`[Stripe] Creating session for Course: ${finalName} (${courseId}), User: ${userId}, Amount: ${finalAmount}`);

    // 2. Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: finalName,
              metadata: { courseId: courseId }
            },
            unit_amount: Math.round(finalAmount * 100),
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: successUrl || `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}&courseId=${courseId}`,
      cancel_url: cancelUrl || `${req.headers.origin}/course/${courseId}`,
      metadata: {
        courseId: courseId,
        userId: userId,
        type: 'course_purchase'
      },
    });

    console.log(`[Stripe] Session created successfully: ${session.id}`);
    res.json({ url: session.url });

  } catch (error) {
    console.error('[Stripe] Create checkout error:', error);
    res.status(500).json({ error: 'Failed to create checkout session', details: error.message });
  }
});

/**
 * POST /stripe/create-checkout-session-cart
 * Endpoint for cart checkout
 */
router.post('/create-checkout-session-cart', async (req, res) => {
  console.log('[Stripe] Received create-checkout-session-cart request');
  
  try {
    const { courseIds, userId } = req.body;

    if (!courseIds || !Array.isArray(courseIds) || courseIds.length === 0) {
      return res.status(400).json({ error: 'Invalid or missing courseIds' });
    }
    if (!userId) return res.status(400).json({ error: 'Missing userId' });

    await authenticatePocketBase();

    // 1. Fetch course details from PocketBase to get trusted prices
    const lineItems = [];
    const validCourseIds = [];

    for (const id of courseIds) {
      try {
        const course = await pb.collection('courses').getOne(id);
        if (course) {
          lineItems.push({
            price_data: {
              currency: 'usd',
              product_data: {
                name: course.title,
                metadata: { courseId: course.id }
              },
              unit_amount: Math.round(course.price * 100),
            },
            quantity: 1,
          });
          validCourseIds.push(course.id);
        }
      } catch (err) {
        console.error(`[Stripe] Failed to fetch course ${id}:`, err.message);
      }
    }

    if (lineItems.length === 0) {
      return res.status(400).json({ error: 'No valid courses found for checkout' });
    }

    console.log(`[Stripe] Creating cart session for ${lineItems.length} items. User: ${userId}`);

    // 2. Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cart`,
      metadata: {
        userId: userId,
        courseIds: JSON.stringify(validCourseIds),
        type: 'cart_purchase'
      },
    });

    console.log(`[Stripe] Cart session created: ${session.id}`);
    res.json({ url: session.url });

  } catch (error) {
    console.error('[Stripe] Cart checkout error:', error);
    res.status(500).json({ error: 'Failed to create cart checkout session', details: error.message });
  }
});

/**
 * POST /stripe/verify-session
 * Verifies the session status with Stripe
 */
router.post('/verify-session', async (req, res) => {
  try {
    const { sessionId } = req.body;
    if (!sessionId) return res.status(400).json({ error: 'Missing sessionId' });

    const session = await stripe.checkout.sessions.retrieve(sessionId);
    
    res.json({
      payment_status: session.payment_status,
      customer_email: session.customer_details?.email,
      metadata: session.metadata
    });
  } catch (error) {
    console.error('[Stripe] Verify session error:', error);
    res.status(500).json({ error: error.message });
  }
});

export default router;