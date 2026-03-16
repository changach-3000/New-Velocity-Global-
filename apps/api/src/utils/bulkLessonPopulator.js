import PocketBase from 'pocketbase';
import { 
  generateLessonTitles, 
  generateQuizQuestions, 
  generateGlossaryTerms, 
  generateCaseStudy, 
  generateResources 
} from './bulkLessonGenerator.js';

// Task 4: Fix PocketBase connection and add validation
// Initialize PocketBase client with environment variable
const pbUrl = process.env.POCKETBASE_URL || 'http://localhost:8090';
const pb = new PocketBase(pbUrl);

// Disable auto-cancellation for server-side requests
pb.autoCancellation(false);

/**
 * Get current timestamp for logging
 */
const getTimestamp = () => new Date().toISOString();

/**
 * Retry wrapper for async operations with exponential backoff
 */
const retryOperation = async (operation, maxRetries = 3, delay = 1000) => {
  let lastError;
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      const backoffDelay = delay * Math.pow(2, i);
      console.warn(`[${getTimestamp()}] [Retry] Attempt ${i + 1}/${maxRetries} failed: ${error.message}. Retrying in ${backoffDelay}ms...`);
      console.warn(`[${getTimestamp()}] [Retry] Error status: ${error.status}, Error type: ${error.constructor.name}`);
      console.warn(`[${getTimestamp()}] [Retry] Stack:`, error.stack);
      await new Promise(resolve => setTimeout(resolve, backoffDelay));
    }
  }
  console.error(`[${getTimestamp()}] [Retry] All ${maxRetries} attempts failed for operation. Final error: ${lastError.message}`);
  throw lastError;
};

/**
 * Task 3: Validates connection to PocketBase, Admin Auth, and Collection Access
 * Includes detailed error logging
 */
export const validateConnection = async () => {
  const adminEmail = process.env.POCKETBASE_ADMIN_EMAIL;
  const adminPassword = process.env.POCKETBASE_ADMIN_PASSWORD;

  const status = {
    url: pbUrl,
    connected: false,
    authenticated: false,
    collections: {},
    errors: []
  };

  console.log(`[${getTimestamp()}] [Connection Check] Testing connection to ${pbUrl}...`);
  console.log(`[${getTimestamp()}] [Connection Check] Admin email: ${adminEmail || 'UNDEFINED'}`);

  try {
    // Task 4: Verify POCKETBASE_URL is not undefined
    if (!pbUrl || pbUrl === 'http://localhost:8090') {
      console.warn(`[${getTimestamp()}] [Connection Check] WARNING: Using default PocketBase URL. Ensure POCKETBASE_URL is set in .env`);
    }

    // 1. Test Basic Connectivity (Health Check)
    try {
      console.log(`[${getTimestamp()}] [Connection Check] Performing health check...`);
      const health = await pb.health.check();
      status.connected = (health.code === 200);
      console.log(`[${getTimestamp()}] [Connection Check] Health check passed. Status code: ${health.code}`);
    } catch (e) {
      console.error(`[${getTimestamp()}] [Connection Check] Health check failed: ${e.message}`);
      console.error(`[${getTimestamp()}] [Connection Check] Error status: ${e.status}`);
      console.error(`[${getTimestamp()}] [Connection Check] Error type: ${e.constructor.name}`);
      console.error(`[${getTimestamp()}] [Connection Check] Stack trace:`, e.stack);
      status.errors.push(`Health check failed: ${e.message}`);
      // Continue to try auth anyway, sometimes health check endpoint is restricted
    }

    // 2. Test Admin Authentication
    // Task 4: Verify admin email/password are set
    if (!adminEmail || !adminPassword) {
      const missingEnvError = 'Missing POCKETBASE_ADMIN_EMAIL or POCKETBASE_ADMIN_PASSWORD in .env';
      console.error(`[${getTimestamp()}] [Connection Check] ${missingEnvError}`);
      console.error(`[${getTimestamp()}] [Connection Check] Admin email set: ${!!adminEmail}`);
      console.error(`[${getTimestamp()}] [Connection Check] Admin password set: ${!!adminPassword}`);
      status.errors.push(missingEnvError);
      throw new Error(missingEnvError);
    }

    console.log(`[${getTimestamp()}] [Connection Check] Attempting admin authentication for ${adminEmail}...`);
    try {
      // Task 4: Use pb.admins.authWithPassword() for admin auth (NOT pb.collection('users').authWithPassword())
      const authResult = await pb.admins.authWithPassword(adminEmail, adminPassword);
      status.authenticated = true;
      console.log(`[${getTimestamp()}] [Connection Check] Admin authentication successful. Admin ID: ${authResult.admin.id}`);
    } catch (authErr) {
      console.error(`[${getTimestamp()}] [Connection Check] Admin authentication failed: ${authErr.message}`);
      console.error(`[${getTimestamp()}] [Connection Check] Error status: ${authErr.status}`);
      console.error(`[${getTimestamp()}] [Connection Check] Error type: ${authErr.constructor.name}`);
      console.error(`[${getTimestamp()}] [Connection Check] Error details:`, authErr.data);
      console.error(`[${getTimestamp()}] [Connection Check] Stack trace:`, authErr.stack);
      
      // Task 3: Determine if error is network-related or auth-related
      if (authErr.status === 401 || authErr.status === 403) {
        console.error(`[${getTimestamp()}] [Connection Check] ERROR TYPE: Authentication error (invalid credentials)`);
        status.errors.push(`Admin authentication failed: Invalid email or password (${authErr.status})`);
      } else if (authErr.status === undefined || authErr.message.includes('ECONNREFUSED') || authErr.message.includes('ENOTFOUND')) {
        console.error(`[${getTimestamp()}] [Connection Check] ERROR TYPE: Network error (PocketBase server unreachable)`);
        status.errors.push(`Network error: Cannot reach PocketBase at ${pbUrl}`);
      } else {
        console.error(`[${getTimestamp()}] [Connection Check] ERROR TYPE: Other error (${authErr.status})`);
        status.errors.push(`Admin authentication failed: ${authErr.message}`);
      }
      
      // If auth fails, we can't check collections properly
      return status;
    }

    // 3. Verify Collection Access
    const requiredCollections = [
      'courses', 
      'lessons', 
      'lesson_content', 
      'quizzes', 
      'quiz_questions', 
      'glossaries', 
      'case_studies', 
      'lesson_resources'
    ];

    console.log(`[${getTimestamp()}] [Connection Check] Verifying access to ${requiredCollections.length} collections...`);
    for (const col of requiredCollections) {
      try {
        // Try to fetch 1 item to verify read access
        console.log(`[${getTimestamp()}] [Connection Check] Testing access to collection '${col}'...`);
        const result = await pb.collection(col).getList(1, 1);
        status.collections[col] = 'ok';
        console.log(`[${getTimestamp()}] [Connection Check] Collection '${col}' accessible. Total items: ${result.totalItems}`);
      } catch (e) {
        console.warn(`[${getTimestamp()}] [Connection Check] Warning: Could not access collection '${col}': ${e.message}`);
        console.warn(`[${getTimestamp()}] [Connection Check] Error status: ${e.status}`);
        console.warn(`[${getTimestamp()}] [Connection Check] Error type: ${e.constructor.name}`);
        console.warn(`[${getTimestamp()}] [Connection Check] Stack trace:`, e.stack);
        status.collections[col] = `error: ${e.message}`;
        // 404 means collection doesn't exist
        if (e.status === 404) {
          status.errors.push(`Collection '${col}' not found (404).`);
        } else {
          status.errors.push(`Access error for '${col}': ${e.message}`);
        }
      }
    }

  } catch (error) {
    console.error(`[${getTimestamp()}] [Connection Check] Critical failure: ${error.message}`);
    console.error(`[${getTimestamp()}] [Connection Check] Error type: ${error.constructor.name}`);
    console.error(`[${getTimestamp()}] [Connection Check] Stack trace:`, error.stack);
    status.errors.push(`Critical: ${error.message}`);
  }

  console.log(`[${getTimestamp()}] [Connection Check] Validation complete. Authenticated: ${status.authenticated}`);
  return status;
};

export const populateCoursesWithLessons = async (courseIds = [], batchSize = 10, onProgress) => {
  console.log(`[${getTimestamp()}] [Bulk Populate] Starting population process...`);
  console.log(`[${getTimestamp()}] [Bulk Populate] PocketBase URL: ${pbUrl}`);
  console.log(`[${getTimestamp()}] [Bulk Populate] Batch size: ${batchSize}`);
  
  // 1. Validate Connection First
  console.log(`[${getTimestamp()}] [Bulk Populate] Validating PocketBase connection...`);
  const connectionStatus = await validateConnection();
  
  if (!connectionStatus.authenticated) {
    const errorMsg = `PocketBase authentication failed. Errors: ${connectionStatus.errors.join(', ')}`;
    console.error(`[${getTimestamp()}] [Bulk Populate] ${errorMsg}`);
    throw new Error(errorMsg);
  }
  console.log(`[${getTimestamp()}] [Bulk Populate] Connection validated successfully.`);

  // Check if critical collections are missing
  const criticalCollections = ['courses', 'lessons'];
  const missingCollections = criticalCollections.filter(c => connectionStatus.collections[c]?.startsWith('error'));
  if (missingCollections.length > 0) {
    const errorMsg = `Critical collections missing or inaccessible: ${missingCollections.join(', ')}`;
    console.error(`[${getTimestamp()}] [Bulk Populate] ${errorMsg}`);
    throw new Error(errorMsg);
  }

  let coursesToProcess = [];
  
  // 2. Fetch courses
  try {
    if (!courseIds || courseIds.length === 0) {
      console.log(`[${getTimestamp()}] [Bulk Populate] Fetching all courses from PocketBase...`);
      coursesToProcess = await pb.collection('courses').getFullList({ sort: '-created' });
      console.log(`[${getTimestamp()}] [Bulk Populate] Successfully fetched ${coursesToProcess.length} courses.`);
    } else {
      console.log(`[${getTimestamp()}] [Bulk Populate] Fetching ${courseIds.length} specific courses...`);
      const allCourses = await pb.collection('courses').getFullList();
      coursesToProcess = allCourses.filter(c => courseIds.includes(c.id));
      console.log(`[${getTimestamp()}] [Bulk Populate] Found ${coursesToProcess.length} matching courses.`);
    }
  } catch (err) {
    const errorMsg = `Failed to fetch courses: ${err.message}`;
    console.error(`[${getTimestamp()}] [Bulk Populate] ${errorMsg}`);
    console.error(`[${getTimestamp()}] [Bulk Populate] Error status: ${err.status}`);
    console.error(`[${getTimestamp()}] [Bulk Populate] Stack trace:`, err.stack);
    throw new Error(errorMsg);
  }

  const totalCourses = coursesToProcess.length;
  let completedCourses = 0;
  let totalLessonsCreated = 0;
  let errors = [];

  console.log(`[${getTimestamp()}] [Bulk Populate] Found ${totalCourses} courses to process.`);

  // 3. Process in batches
  for (let i = 0; i < totalCourses; i += batchSize) {
    const batch = coursesToProcess.slice(i, i + batchSize);
    const batchNumber = Math.floor(i/batchSize) + 1;
    console.log(`[${getTimestamp()}] [Bulk Populate] Processing batch ${batchNumber} (${batch.length} courses)...`);
    
    await Promise.all(batch.map(async (course) => {
      try {
        console.log(`[${getTimestamp()}] [Bulk Populate] Processing course: ${course.title} (ID: ${course.id})`);
        
        // Check for existing lessons
        try {
          const existingLessons = await retryOperation(() => 
            pb.collection('lessons').getList(1, 1, { filter: `course_id="${course.id}"` })
          );

          if (existingLessons.totalItems > 0) {
            console.log(`[${getTimestamp()}] [Bulk Populate] Skipping ${course.title} - already has ${existingLessons.totalItems} lessons`);
            if (onProgress) onProgress({ 
              type: 'skip', 
              message: `Skipping ${course.title} - already has lessons` 
            });
            completedCourses++;
            return;
          }
        } catch (checkErr) {
          console.error(`[${getTimestamp()}] [Bulk Populate] Error checking existing lessons for ${course.title}: ${checkErr.message}`);
          throw checkErr;
        }

        // Generate Content
        const lessonTitles = generateLessonTitles(course.title);
        console.log(`[${getTimestamp()}] [Bulk Populate] Generated ${lessonTitles.length} lesson titles for ${course.title}`);
        
        // Create Lessons sequentially
        for (let idx = 0; idx < lessonTitles.length; idx++) {
          const title = lessonTitles[idx];
          console.log(`[${getTimestamp()}] [Bulk Populate] Creating lesson ${idx + 1}/${lessonTitles.length}: ${title}`);
          
          try {
            // Create Lesson Record with Retry
            const lesson = await retryOperation(() => pb.collection('lessons').create({
              course_id: course.id,
              title: title,
              description: `Comprehensive lesson about ${title}`,
              order: idx + 1,
              duration: 45,
              content_type: 'text'
            }));
            console.log(`[${getTimestamp()}] [Bulk Populate] Created lesson: ${lesson.id}`);

            // Create Content with Retry
            try {
              await retryOperation(() => pb.collection('lesson_content').create({
                lesson_id: lesson.id,
                content_body: `<h1>${title}</h1><p>Welcome to this lesson on ${title}. In this module, we will explore the fundamental principles of ${course.title}...</p>`
              }));
              console.log(`[${getTimestamp()}] [Bulk Populate] Created lesson content for lesson: ${lesson.id}`);
            } catch (contentErr) {
              console.error(`[${getTimestamp()}] [Bulk Populate] Error creating lesson content: ${contentErr.message}`);
              throw contentErr;
            }

            // Create Quiz
            try {
              const quiz = await retryOperation(() => pb.collection('quizzes').create({
                lesson_id: lesson.id,
                title: `${title} Quiz`,
                passing_score: 70
              }));
              console.log(`[${getTimestamp()}] [Bulk Populate] Created quiz: ${quiz.id}`);

              // Create Questions
              const questions = generateQuizQuestions(title, course.title);
              console.log(`[${getTimestamp()}] [Bulk Populate] Creating ${questions.length} quiz questions...`);
              for (const q of questions) {
                try {
                  await retryOperation(() => pb.collection('quiz_questions').create({
                    ...q,
                    quiz_id: quiz.id
                  }));
                } catch (qErr) {
                  console.error(`[${getTimestamp()}] [Bulk Populate] Error creating quiz question: ${qErr.message}`);
                  throw qErr;
                }
              }
              console.log(`[${getTimestamp()}] [Bulk Populate] Successfully created ${questions.length} quiz questions`);
            } catch (quizErr) {
              console.error(`[${getTimestamp()}] [Bulk Populate] Error creating quiz: ${quizErr.message}`);
              throw quizErr;
            }

            // Create Glossary
            try {
              const glossaryData = generateGlossaryTerms(title, course.title);
              await retryOperation(() => pb.collection('glossaries').create({
                lessonId: lesson.id,
                ...glossaryData
              }));
              console.log(`[${getTimestamp()}] [Bulk Populate] Created glossary for lesson: ${lesson.id}`);
            } catch (glossErr) {
              console.error(`[${getTimestamp()}] [Bulk Populate] Error creating glossary: ${glossErr.message}`);
              throw glossErr;
            }

            // Create Case Study
            try {
              const caseStudyData = generateCaseStudy(title, course.title);
              await retryOperation(() => pb.collection('case_studies').create({
                course_module: lesson.id,
                ...caseStudyData
              }));
              console.log(`[${getTimestamp()}] [Bulk Populate] Created case study for lesson: ${lesson.id}`);
            } catch (caseErr) {
              console.error(`[${getTimestamp()}] [Bulk Populate] Error creating case study: ${caseErr.message}`);
              throw caseErr;
            }

            // Create Resources
            try {
              const resources = generateResources(title);
              console.log(`[${getTimestamp()}] [Bulk Populate] Creating ${resources.length} resources...`);
              for (const r of resources) {
                try {
                  await retryOperation(() => pb.collection('lesson_resources').create({
                    lesson_id: lesson.id,
                    ...r
                  }));
                } catch (rErr) {
                  console.error(`[${getTimestamp()}] [Bulk Populate] Error creating resource: ${rErr.message}`);
                  throw rErr;
                }
              }
              console.log(`[${getTimestamp()}] [Bulk Populate] Successfully created ${resources.length} resources`);
            } catch (resErr) {
              console.error(`[${getTimestamp()}] [Bulk Populate] Error creating resources: ${resErr.message}`);
              throw resErr;
            }
            
            totalLessonsCreated++;
          } catch (lessonErr) {
            console.error(`[${getTimestamp()}] [Bulk Populate] Error creating lesson "${title}": ${lessonErr.message}`);
            console.error(`[${getTimestamp()}] [Bulk Populate] Stack trace:`, lessonErr.stack);
            throw lessonErr;
          }
        }

        completedCourses++;
        console.log(`[${getTimestamp()}] [Bulk Populate] Successfully populated ${course.title} with ${lessonTitles.length} lessons`);
        if (onProgress) onProgress({ 
          type: 'success', 
          message: `Populated ${course.title} with ${lessonTitles.length} lessons and content` 
        });

      } catch (err) {
        console.error(`[${getTimestamp()}] [Bulk Populate] Error processing course ${course.id} (${course.title}): ${err.message}`);
        console.error(`[${getTimestamp()}] [Bulk Populate] Error status: ${err.status}`);
        console.error(`[${getTimestamp()}] [Bulk Populate] Stack trace:`, err.stack);
        errors.push({ courseId: course.id, title: course.title, error: err.message });
        if (onProgress) onProgress({ 
          type: 'error', 
          message: `Failed to populate ${course.title}: ${err.message}` 
        });
      }
    }));

    // Update progress after batch
    if (onProgress) onProgress({
      type: 'progress',
      total: totalCourses,
      completed: completedCourses,
      errors: errors.length
    });
    console.log(`[${getTimestamp()}] [Bulk Populate] Batch ${batchNumber} complete. Progress: ${completedCourses}/${totalCourses}`);
  }

  const summary = {
    totalCourses,
    completedCourses,
    totalLessonsCreated,
    errors,
    connectionStatus
  };

  console.log(`[${getTimestamp()}] [Bulk Populate] Process complete.`);
  console.log(`[${getTimestamp()}] [Bulk Populate] Summary:`, JSON.stringify(summary, null, 2));
  return summary;
};