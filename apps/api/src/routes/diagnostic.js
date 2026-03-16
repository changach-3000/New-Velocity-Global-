import express from 'express';
import PocketBase from 'pocketbase';

const router = express.Router();

router.post('/', async (req, res) => {
  const results = [];
  let passedCount = 0;
  let failedCount = 0;
  let firstFailedTest = null;

  const addResult = (name, status, message, error = null, duration = 0) => {
    const result = { name, status, message, error, duration };
    results.push(result);
    if (status === 'passed') passedCount++;
    if (status === 'failed') {
      failedCount++;
      if (!firstFailedTest) firstFailedTest = name;
    }
    return status === 'passed';
  };

  const runStep = async (name, fn) => {
    const start = Date.now();
    try {
      const msg = await fn();
      const duration = Date.now() - start;
      return addResult(name, 'passed', msg, null, duration);
    } catch (err) {
      const duration = Date.now() - start;
      return addResult(name, 'failed', 'Test failed', err.message || String(err), duration);
    }
  };

  // 1. Check Environment Variables
  const envCheck = await runStep('Environment Configuration', async () => {
    if (!process.env.POCKETBASE_URL) throw new Error('POCKETBASE_URL is missing in .env');
    if (!process.env.POCKETBASE_ADMIN_EMAIL) throw new Error('POCKETBASE_ADMIN_EMAIL is missing in .env');
    if (!process.env.POCKETBASE_ADMIN_PASSWORD) throw new Error('POCKETBASE_ADMIN_PASSWORD is missing in .env');
    return `Configured URL: ${process.env.POCKETBASE_URL}`;
  });

  // Initialize PB for subsequent tests
  const pb = new PocketBase(process.env.POCKETBASE_URL);
  pb.autoCancellation(false);

  // 2. Network Connectivity (only if env check passed)
  if (envCheck) {
    await runStep('Network Connectivity', async () => {
      try {
        // Try a simple fetch to the root or health endpoint
        const response = await fetch(`${process.env.POCKETBASE_URL}/api/health`);
        if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        return 'Successfully reached PocketBase server';
      } catch (e) {
        throw new Error(`Network error: ${e.message}`);
      }
    });

    // 3. PocketBase Health Check
    await runStep('PocketBase Health Service', async () => {
      const health = await pb.health.check();
      if (health.code !== 200) throw new Error(`Health check returned code ${health.code}`);
      return 'PocketBase health service is responding (200 OK)';
    });

    // 4. Admin Authentication
    let authSuccess = false;
    await runStep('Admin Authentication', async () => {
      await pb.admins.authWithPassword(
        process.env.POCKETBASE_ADMIN_EMAIL,
        process.env.POCKETBASE_ADMIN_PASSWORD
      );
      authSuccess = true;
      return `Authenticated as ${process.env.POCKETBASE_ADMIN_EMAIL}`;
    });

    // 5. Collection Access (only if auth passed)
    if (authSuccess) {
      await runStep('Collection Access (Courses)', async () => {
        try {
          await pb.collection('courses').getList(1, 1);
          return 'Successfully accessed "courses" collection';
        } catch (e) {
          if (e.status === 404) throw new Error('Collection "courses" not found');
          if (e.status === 403) throw new Error('Access denied (403) to "courses" collection');
          throw e;
        }
      });

      // 6. Sample Data Retrieval
      await runStep('Sample Data Retrieval', async () => {
        const list = await pb.collection('courses').getList(1, 1);
        if (list.totalItems === 0) {
          return 'Connection successful, but "courses" collection is empty';
        }
        return `Successfully retrieved sample course: "${list.items[0].title}"`;
      });
    } else {
      addResult('Collection Access (Courses)', 'skipped', 'Skipped due to auth failure');
      addResult('Sample Data Retrieval', 'skipped', 'Skipped due to auth failure');
    }
  } else {
    // Skip remaining if env failed
    ['Network Connectivity', 'PocketBase Health Service', 'Admin Authentication', 'Collection Access (Courses)', 'Sample Data Retrieval'].forEach(name => {
      addResult(name, 'skipped', 'Skipped due to missing configuration');
    });
  }

  res.json({
    tests: results,
    summary: {
      total: results.length,
      passed: passedCount,
      failed: failedCount,
      firstFailedTest
    }
  });
});

export default router;