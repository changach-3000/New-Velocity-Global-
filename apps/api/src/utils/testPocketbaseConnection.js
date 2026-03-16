import PocketBase from 'pocketbase';

/**
 * Task 5: Test script to diagnose PocketBase connection issues
 * Can be run manually or called from health endpoint
 */

const getTimestamp = () => new Date().toISOString();

/**
 * Test PocketBase connection with detailed diagnostics
 * @returns {Promise<Object>} Detailed status object
 */
export const testConnection = async () => {
  const pbUrl = process.env.POCKETBASE_URL;
  const adminEmail = process.env.POCKETBASE_ADMIN_EMAIL;
  const adminPassword = process.env.POCKETBASE_ADMIN_PASSWORD;

  const result = {
    timestamp: new Date().toISOString(),
    environment: {
      pbUrl: pbUrl || 'UNDEFINED',
      adminEmail: adminEmail || 'UNDEFINED',
      adminPasswordSet: !!adminPassword
    },
    connectivity: {
      httpReachable: false,
      healthCheckPassed: false,
      error: null
    },
    authentication: {
      adminAuthSuccess: false,
      adminId: null,
      error: null
    },
    collections: {},
    summary: {
      allTestsPassed: false,
      issues: []
    }
  };

  console.log(`[${getTimestamp()}] [TestConnection] Starting PocketBase connection test...`);
  console.log(`[${getTimestamp()}] [TestConnection] POCKETBASE_URL: ${result.environment.pbUrl}`);
  console.log(`[${getTimestamp()}] [TestConnection] Admin Email: ${result.environment.adminEmail}`);
  console.log(`[${getTimestamp()}] [TestConnection] Admin Password Set: ${result.environment.adminPasswordSet}`);

  // Validate environment variables
  if (!pbUrl) {
    const msg = 'POCKETBASE_URL environment variable is not set';
    console.error(`[${getTimestamp()}] [TestConnection] ERROR: ${msg}`);
    result.summary.issues.push(msg);
    result.connectivity.error = msg;
    return result;
  }

  if (!adminEmail || !adminPassword) {
    const msg = 'POCKETBASE_ADMIN_EMAIL or POCKETBASE_ADMIN_PASSWORD not set';
    console.error(`[${getTimestamp()}] [TestConnection] ERROR: ${msg}`);
    result.summary.issues.push(msg);
    result.authentication.error = msg;
    return result;
  }

  try {
    // Initialize PocketBase client
    const pb = new PocketBase(pbUrl);
    pb.autoCancellation(false);

    // Test 1: Basic HTTP connectivity
    console.log(`[${getTimestamp()}] [TestConnection] Testing basic HTTP connectivity to ${pbUrl}...`);
    try {
      const health = await pb.health.check();
      result.connectivity.httpReachable = true;
      result.connectivity.healthCheckPassed = health.code === 200;
      console.log(`[${getTimestamp()}] [TestConnection] HTTP connectivity OK. Health check status: ${health.code}`);
    } catch (connectErr) {
      console.error(`[${getTimestamp()}] [TestConnection] HTTP connectivity failed: ${connectErr.message}`);
      console.error(`[${getTimestamp()}] [TestConnection] Error status: ${connectErr.status}`);
      console.error(`[${getTimestamp()}] [TestConnection] Error type: ${connectErr.constructor.name}`);
      result.connectivity.httpReachable = false;
      result.connectivity.error = connectErr.message;
      result.summary.issues.push(`HTTP connectivity failed: ${connectErr.message}`);

      // Determine if network-related or auth-related
      if (connectErr.status === undefined || connectErr.message.includes('ECONNREFUSED') || connectErr.message.includes('ENOTFOUND')) {
        result.summary.issues.push('Network error - PocketBase server may not be running or URL is incorrect');
      }
    }

    // Test 2: Admin authentication
    console.log(`[${getTimestamp()}] [TestConnection] Attempting admin authentication for ${adminEmail}...`);
    try {
      const authResult = await pb.admins.authWithPassword(adminEmail, adminPassword);
      result.authentication.adminAuthSuccess = true;
      result.authentication.adminId = authResult.admin.id;
      console.log(`[${getTimestamp()}] [TestConnection] Admin authentication successful. Admin ID: ${authResult.admin.id}`);
    } catch (authErr) {
      console.error(`[${getTimestamp()}] [TestConnection] Admin authentication failed: ${authErr.message}`);
      console.error(`[${getTimestamp()}] [TestConnection] Error status: ${authErr.status}`);
      console.error(`[${getTimestamp()}] [TestConnection] Error response:`, authErr.data);
      result.authentication.adminAuthSuccess = false;
      result.authentication.error = authErr.message;
      result.summary.issues.push(`Admin authentication failed: ${authErr.message}`);

      // Determine error type
      if (authErr.status === 401 || authErr.status === 403) {
        result.summary.issues.push('Authentication error - Invalid email or password');
      } else if (authErr.status === 404) {
        result.summary.issues.push('Admin endpoint not found - PocketBase may not be properly configured');
      }
    }

    // Test 3: Collection access (only if authenticated)
    if (result.authentication.adminAuthSuccess) {
      console.log(`[${getTimestamp()}] [TestConnection] Testing collection access...`);
      const testCollections = ['courses', 'lessons', 'lesson_content', 'quizzes', 'quiz_questions'];

      for (const col of testCollections) {
        try {
          console.log(`[${getTimestamp()}] [TestConnection] Testing collection '${col}'...`);
          const collectionResult = await pb.collection(col).getList(1, 1);
          result.collections[col] = {
            accessible: true,
            totalItems: collectionResult.totalItems
          };
          console.log(`[${getTimestamp()}] [TestConnection] Collection '${col}' accessible. Total items: ${collectionResult.totalItems}`);
        } catch (colErr) {
          console.warn(`[${getTimestamp()}] [TestConnection] Collection '${col}' access failed: ${colErr.message}`);
          result.collections[col] = {
            accessible: false,
            error: colErr.message,
            status: colErr.status
          };
          if (colErr.status === 404) {
            result.summary.issues.push(`Collection '${col}' not found (404)`);
          } else {
            result.summary.issues.push(`Collection '${col}' access error: ${colErr.message}`);
          }
        }
      }
    }

    // Determine overall success
    result.summary.allTestsPassed = 
      result.connectivity.healthCheckPassed && 
      result.authentication.adminAuthSuccess &&
      Object.values(result.collections).every(c => c.accessible !== false);

  } catch (error) {
    console.error(`[${getTimestamp()}] [TestConnection] Critical error: ${error.message}`);
    console.error(`[${getTimestamp()}] [TestConnection] Stack trace:`, error.stack);
    result.summary.issues.push(`Critical error: ${error.message}`);
  }

  console.log(`[${getTimestamp()}] [TestConnection] Test complete. All tests passed: ${result.summary.allTestsPassed}`);
  if (result.summary.issues.length > 0) {
    console.log(`[${getTimestamp()}] [TestConnection] Issues found:`, result.summary.issues);
  }

  return result;
};

// Allow running as CLI script
if (import.meta.url === `file://${process.argv[1]}`) {
  const result = await testConnection();
  console.log('\n=== PocketBase Connection Test Results ===');
  console.log(JSON.stringify(result, null, 2));
  process.exit(result.summary.allTestsPassed ? 0 : 1);
}