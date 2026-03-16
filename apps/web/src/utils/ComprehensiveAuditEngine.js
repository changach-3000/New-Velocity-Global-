import pb from '@/lib/pocketbaseClient';

export const runComprehensiveAudit = async (onProgress) => {
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalCourses: 0,
      totalLessons: 0,
      totalQuizzes: 0,
      totalCaseStudies: 0,
      totalResources: 0,
      totalIssues: 0,
      coursesFullyComplete: 0,
      coursesNeedingWork: 0,
      totalMissingComponents: 0,
    },
    courses: [],
    healthScore: 0
  };

  try {
    // 1. Fetch Courses
    if (onProgress) onProgress('Fetching courses...', 5);
    const courses = await pb.collection('courses').getFullList({ sort: '-created', $autoCancel: false });
    report.summary.totalCourses = courses.length;

    let processedCourses = 0;

    for (const course of courses) {
      if (onProgress) onProgress(`Auditing course: ${course.title}`, 10 + Math.floor((processedCourses / courses.length) * 85));
      
      const courseReport = {
        id: course.id,
        name: course.title,
        lessonCount: 0,
        quizCount: 0,
        caseStudyCount: 0,
        resourceCount: 0,
        hasBadges: false,
        hasProgressTracking: false,
        missingComponents: [],
        lessons: [],
        isHealthy: true,
        completionPercentage: 0
      };

      let totalPoints = 0;
      let earnedPoints = 0;

      // 2. Fetch Lessons
      const lessons = await pb.collection('lessons').getFullList({
        filter: `course_id="${course.id}"`,
        sort: 'order',
        $autoCancel: false
      });
      courseReport.lessonCount = lessons.length;
      report.summary.totalLessons += lessons.length;

      // Point 1: Min 5 lessons
      totalPoints++;
      if (lessons.length >= 5) {
        earnedPoints++;
      } else {
        courseReport.missingComponents.push(`Minimum 5 lessons (found ${lessons.length})`);
        courseReport.isHealthy = false;
      }

      // 3. Check Lesson Components
      for (const lesson of lessons) {
        const lessonReport = {
          id: lesson.id,
          title: lesson.title,
          hasQuiz: false,
          hasCaseStudy: false,
          resourceCount: 0,
          issues: []
        };

        // Points per lesson: Quiz, Case Study, Resources (Glossary removed)
        totalPoints += 3;

        // Quizzes
        const quizzes = await pb.collection('quizzes').getFullList({
          filter: `lesson_id="${lesson.id}"`,
          $autoCancel: false
        });
        
        let quizValid = false;
        if (quizzes.length > 0) {
          courseReport.quizCount += quizzes.length;
          report.summary.totalQuizzes += quizzes.length;
          
          // Check question count
          const quiz = quizzes[0];
          const questions = await pb.collection('quiz_questions').getFullList({
            filter: `quiz_id="${quiz.id}"`,
            $autoCancel: false
          });

          if (questions.length >= 10) {
            quizValid = true;
            lessonReport.hasQuiz = true;
          } else {
            lessonReport.issues.push(`Quiz has ${questions.length}/10 questions`);
          }
        } else {
          lessonReport.issues.push('Missing Quiz');
        }
        if (quizValid) earnedPoints++;

        // Case Studies
        // Checking case_studies collection using course_module as lesson_id
        const caseStudies = await pb.collection('case_studies').getFullList({
          filter: `course_module="${lesson.id}"`,
          $autoCancel: false
        });
        
        if (caseStudies.length > 0) {
          lessonReport.hasCaseStudy = true;
          courseReport.caseStudyCount += caseStudies.length;
          report.summary.totalCaseStudies += caseStudies.length;
          earnedPoints++;
        } else {
          lessonReport.issues.push('Missing Case Study');
        }

        // Resources
        const resources = await pb.collection('lesson_resources').getFullList({
          filter: `lesson_id="${lesson.id}"`,
          $autoCancel: false
        });
        lessonReport.resourceCount = resources.length;
        courseReport.resourceCount += resources.length;
        report.summary.totalResources += resources.length;

        if (resources.length > 0) {
          earnedPoints++;
        } else {
          lessonReport.issues.push('No resources found');
        }

        if (lessonReport.issues.length > 0) {
          courseReport.isHealthy = false;
          courseReport.missingComponents.push(`Lesson "${lesson.title}": ${lessonReport.issues.join(', ')}`);
        }

        courseReport.lessons.push(lessonReport);
      }

      // 4. Check Badges
      totalPoints++;
      const badges = await pb.collection('badges').getFullList({
        filter: `course_id="${course.id}"`,
        $autoCancel: false
      });
      if (badges.length > 0) {
        courseReport.hasBadges = true;
        earnedPoints++;
      } else {
        courseReport.missingComponents.push('Missing Course Badge');
        courseReport.isHealthy = false;
      }

      // 5. Check Progress Tracking
      totalPoints++;
      try {
        // Checking if any progress exists for this course's lessons
        if (lessons.length > 0) {
            const progress = await pb.collection('lesson_progress').getList(1, 1, {
                filter: `lesson_id="${lessons[0].id}"`,
                $autoCancel: false
            });
            courseReport.hasProgressTracking = progress.totalItems > 0;
        } else {
            courseReport.hasProgressTracking = false;
        }

        if (courseReport.hasProgressTracking) {
          earnedPoints++;
        } else {
          courseReport.missingComponents.push('No active progress tracking records found');
        }
      } catch (e) {
        courseReport.hasProgressTracking = false;
        courseReport.missingComponents.push('Progress tracking check failed');
      }

      // Calculate Completion Percentage
      courseReport.completionPercentage = totalPoints > 0 
        ? Math.round((earnedPoints / totalPoints) * 100) 
        : 0;

      if (courseReport.completionPercentage === 100) {
        report.summary.coursesFullyComplete++;
      } else {
        report.summary.coursesNeedingWork++;
      }

      report.summary.totalMissingComponents += courseReport.missingComponents.length;
      report.courses.push(courseReport);
      processedCourses++;
    }

    // Calculate Health Score
    const healthyCourses = report.courses.filter(c => c.isHealthy).length;
    report.healthScore = report.courses.length > 0 
      ? Math.round((healthyCourses / report.courses.length) * 100) 
      : 0;

    report.summary.totalIssues = report.courses.reduce((acc, c) => acc + c.missingComponents.length, 0);

    if (onProgress) onProgress('Audit complete!', 100);
    return report;

  } catch (error) {
    console.error('Audit Engine Error:', error);
    throw error;
  }
};