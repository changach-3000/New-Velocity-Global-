
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import paystackRoutes from './routes/paystack.js';

const app = express();
const PORT = process.env.PORT || 3001;

// PocketBase connection debugging
const pbUrl = process.env.POCKETBASE_URL;
console.log(`[PocketBase] URL: ${pbUrl || 'UNDEFINED'}`);

if (!pbUrl) {
  console.warn('[PocketBase] WARNING: POCKETBASE_URL is not defined in .env file');
} else {
  console.log('[PocketBase] Attempting connection...');
  console.log(`[PocketBase] Connection status: pending (will be tested on first request)`);
}

// CORS configuration
const corsOptions = {
  origin: [
    'https://74009ab1-2c88-4fc5-a76e-4ac0524cf476.app-preview.com',
    'https://velocitygloballeasing.com',
    'http://localhost:5173',
    'http://localhost:3000'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200
};

// CRITICAL: CORS must be configured BEFORE routes are mounted
app.use(cors(corsOptions));

// CRITICAL: express.json() must be configured BEFORE routes are mounted
app.use(express.json());

// Register Paystack routes
app.use('/api/paystack', paystackRoutes);
console.log('Paystack routes registered at /api/paystack');

// Register other routes
app.use('/api', routes());
console.log('Main routes registered at /api');

// NOTE: Database migration execution has been explicitly disabled/removed
// to ensure the server starts without attempting to run any migrations on startup.
// All migration files in apps/pocketbase/pb_hooks/ remain intact but will not be executed by this Express server.

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});
