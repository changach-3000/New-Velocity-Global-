import express from 'express';
import { populateCoursesWithLessons, validateConnection } from '../utils/bulkLessonPopulator.js';

const router = express.Router();

// Simple in-memory job status
let currentJob = {
  status: 'idle', // idle, running, completed, failed
  progress: {
    total: 0,
    completed: 0,
    errors: 0,
    percentage: 0
  },
  logs: [],
  result: null
};

// Task 5: Fix PocketBase connection handling in route
router.post('/start', async (req, res) => {
  if (currentJob.status === 'running') {
    return res.status(409).json({ error: 'A bulk population job is already running' });
  }

  const { courseIds, batchSize = 10 } = req.body;

  console.log(`[API] Starting bulk lesson population job. Batch size: ${batchSize}`);

  // Reset job state
  currentJob = {
    status: 'running',
    progress: { total: 0, completed: 0, errors: 0, percentage: 0 },
    logs: [],
    result: null
  };

  // Add initial log
  currentJob.logs.push({
    timestamp: new Date().toISOString(),
    type: 'info',
    message: 'Job initialized. Validating connection...'
  });

  // Start processing asynchronously
  // We don't await this so the request returns immediately
  (async () => {
    try {
      // Validate connection before starting
      const connectionStatus = await validateConnection();
      
      if (!connectionStatus.authenticated) {
        throw new Error(`Connection failed: ${connectionStatus.errors.join(', ')}`);
      }
      
      currentJob.logs.push({
        timestamp: new Date().toISOString(),
        type: 'info',
        message: 'Connection validated. Starting population...'
      });

      await populateCoursesWithLessons(courseIds, batchSize, (update) => {
        // Handle progress updates
        if (update.type === 'progress') {
          currentJob.progress.total = update.total;
          currentJob.progress.completed = update.completed;
          currentJob.progress.errors = update.errors;
          currentJob.progress.percentage = update.total > 0 
            ? Math.round((update.completed / update.total) * 100) 
            : 0;
        } else {
          // Add log entry
          currentJob.logs.push({
            timestamp: new Date().toISOString(),
            type: update.type,
            message: update.message
          });
          // Keep log size manageable
          if (currentJob.logs.length > 1000) currentJob.logs.shift();
        }
      });

      console.log('[API] Job completed successfully.');
      currentJob.status = 'completed';
      currentJob.progress.percentage = 100;
      currentJob.logs.push({
        timestamp: new Date().toISOString(),
        type: 'success',
        message: `Job completed successfully.`
      });

    } catch (err) {
      console.error('[API] Job failed:', err);
      currentJob.status = 'failed';
      currentJob.logs.push({
        timestamp: new Date().toISOString(),
        type: 'error',
        message: `Critical Job Failure: ${err.message}`
      });
    }
  })();

  return res.status(202).json({ message: 'Bulk population job started', jobId: Date.now() });
});

router.get('/status', (req, res) => {
  res.json(currentJob);
});

export default router;