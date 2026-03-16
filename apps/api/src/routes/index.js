import express from 'express';
import paystackRouter from './paystack.js';
import bulkLessonsRouter from './bulkLessons.js';
import healthCheckRouter from './health-check.js';
import diagnosticRouter from './diagnostic.js';
import contactRouter from './contact.js';
import membershipRouter from './membership.js';

export default function routes() {
  const router = express.Router();
  
  router.use('/paystack', paystackRouter);
  router.use('/bulk-lessons', bulkLessonsRouter);
  router.use('/health', healthCheckRouter);
  router.use('/diagnostic', diagnosticRouter);
  router.use('/contact', contactRouter);
  router.use('/membership', membershipRouter);
  
  return router;
}
