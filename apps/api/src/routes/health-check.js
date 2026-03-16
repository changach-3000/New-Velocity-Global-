import express from 'express';
import PocketBase from 'pocketbase';

const router = express.Router();

/**
 * Get current timestamp for logging
 */
const getTimestamp = () => new Date().toISOString();

// Task 2: Health check endpoint with comprehensive PocketBase testing
router.get('/', async (req, res) => {
  const pbUrl = process.env.POCKETBASE_URL || 'http://localhost:8090';
  const adminEmail = process.env.POCKETBASE_ADMIN_EMAIL;
  const adminPassword = process.env.POCKETBASE_ADMIN_PASSWORD;

  const response = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    pocketbaseUrl: pbUrl,
    pocketbaseConnected: false,
    adminAuthStatus: 'unknown',
    error: null,
    details: {}
  };

  try {
    console.log(`[${getTimestamp()}] [Health Check] Starting health check...`);
    console.log(`[${getTimestamp()}] [Health Check] PocketBase URL: ${pbUrl}`);

    // Initialize PocketBase client
    const pb = new PocketBase(pbUrl);
    pb.autoCancellation(false);

    // 1. Test basic connectivity
    console.log(`[${getTimestamp()}] [Health Check] Testing PocketBase connectivity...`);
    try {
      const health = await pb.health.check();
      response.pocketbaseConnected = health.code === 200;
      response.details.healthCheck = {
        code: health.code,
        message: 'Health check passed'
      };
      console.log(`[${getTimestamp()}] [Health Check] PocketBase connectivity OK. Status code: ${health.code}`);
    } catch (healthErr) {
      console.error(`[${getTimestamp()}] [Health Check] Health check failed: ${healthErr.message}`);
      console.error(`[${getTimestamp()}] [Health Check] Error status: ${healthErr.status}`);
      console.error(`[${getTimestamp()}] [Health Check] Stack trace:`, healthErr.stack);
      response.pocketbaseConnected = false;
      response.details.healthCheck = {
        error: healthErr.message,
        status: healthErr.status
      };
      // Continue to try authentication anyway
    }

    // 2. Test admin authentication
    if (!adminEmail || !adminPassword) {
      const envError = 'Missing POCKETBASE_ADMIN_EMAIL or POCKETBASE_ADMIN_PASSWORD environment variables';
      console.error(`[${getTimestamp()}] [Health Check] ${envError}`);
      response.adminAuthStatus = 'failed';
      response.error = envError;
      response.details.authentication = {
        error: envError
      };
      return res.status(503).json(response);
    }

    console.log(`[${getTimestamp()}] [Health Check] Attempting admin authentication for ${adminEmail}...`);
    try {
      const authResult = await pb.admins.authWithPassword(adminEmail, adminPassword);
      response.adminAuthStatus = 'authenticated';
      response.details.authentication = {
        success: true,
        adminId: authResult.admin.id,
        adminEmail: authResult.admin.email,
        message: 'Admin authentication successful'
      };
      console.log(`[${getTimestamp()}] [Health Check] Admin authentication successful. Admin ID: ${authResult.admin.id}`);
    } catch (authErr) {
      console.error(`[${getTimestamp()}] [Health Check] Admin authentication failed: ${authErr.message}`);
      console.error(`[${getTimestamp()}] [Health Check] Error status: ${authErr.status}`);
      console.error(`[${getTimestamp()}] [Health Check] Error data:`, authErr.data);
      console.error(`[${getTimestamp()}] [Health Check] Stack trace:`, authErr.stack);
      response.adminAuthStatus = 'failed';
      response.error = `Authentication failed: ${authErr.message}`;
      response.details.authentication = {
        error: authErr.message,
        status: authErr.status,
        details: authErr.data
      };
      return res.status(503).json(response);
    }

    // 3. Test collection access
    console.log(`[${getTimestamp()}] [Health Check] Testing collection access...`);
    const testCollections = ['courses', 'lessons'];
    response.details.collections = {};

    for (const col of testCollections) {
      try {
        console.log(`[${getTimestamp()}] [Health Check] Testing access to collection '${col}'...`);
        const result = await pb.collection(col).getList(1, 1);
        response.details.collections[col] = {
          accessible: true,
          totalItems: result.totalItems,
          message: `Collection accessible with ${result.totalItems} total items`
        };
        console.log(`[${getTimestamp()}] [Health Check] Collection '${col}' accessible. Total items: ${result.totalItems}`);
      } catch (colErr) {
        console.warn(`[${getTimestamp()}] [Health Check] Collection '${col}' access failed: ${colErr.message}`);
        console.warn(`[${getTimestamp()}] [Health Check] Error status: ${colErr.status}`);
        response.details.collections[col] = {
          accessible: false,
          error: colErr.message,
          status: colErr.status
        };
      }
    }

    // Determine overall status
    if (response.pocketbaseConnected && response.adminAuthStatus === 'authenticated') {
      response.status = 'ok';
      console.log(`[${getTimestamp()}] [Health Check] Health check completed successfully`);
      return res.json(response);
    } else {
      response.status = 'degraded';
      console.warn(`[${getTimestamp()}] [Health Check] Health check completed with issues`);
      return res.status(503).json(response);
    }

  } catch (error) {
    console.error(`[${getTimestamp()}] [Health Check] Critical health check failure: ${error.message}`);
    console.error(`[${getTimestamp()}] [Health Check] Stack trace:`, error.stack);
    response.status = 'error';
    response.adminAuthStatus = 'failed';
    response.error = `Health check failed: ${error.message}`;
    response.details.criticalError = {
      message: error.message,
      stack: error.stack
    };
    return res.status(500).json(response);
  }
});

export default router;