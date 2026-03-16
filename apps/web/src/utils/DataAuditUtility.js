import pb from '@/lib/pocketbaseClient';

/**
 * Comprehensive Data Audit Utility
 * Queries PocketBase for all course-related data and logs integrity report to console.
 */
export const runDataAudit = async () => {
  console.group('🔍 STARTING SYSTEM DATA AUDIT');
  const report = {
    timestamp: new Date().toISOString(),
    counts: {},
    integrity: {
      orphanedLessons: [],
      orphanedQuizzes: [],
      orphanedGlossaries: [],
      orphanedCaseStudies: [],
      orphanedResources: [],
      lessonsWithoutContent: []
    },
    data: {}
  };

  try {
    // 1. Fetch Courses
    console.log('Fetching courses...');
    const courses = await pb.collection('courses').getFullList({ sort: 'title', $autoCancel: false });
    report.counts.courses = courses.length;
    report.data.courses = courses.map(c => ({ id: c.id, title: c.title, instructor: c.instructor_name }));
    
    const courseIds = new Set(courses.map(c => c.id));

    // 2. Fetch Lessons
    console.log('Fetching lessons...');
    const lessons = await pb.collection('lessons').getFullList({ sort: 'course_id,order', $autoCancel: false });
    report.counts.lessons = lessons.length;
    
    const lessonIds = new Set(lessons.map(l => l.id));

    // Check for orphaned lessons
    lessons.forEach(l => {
      if (!courseIds.has(l.course_id)) {
        report.integrity.orphanedLessons.push({ id: l.id, title: l.title, invalid_course_id: l.course_id });
      }
    });

    // 3. Fetch Lesson Content
    console.log('Fetching lesson content...');
    const content = await pb.collection('lesson_content').getFullList({ $autoCancel: false });
    report.counts.content = content.length;
    
    const contentLessonIds = new Set(content.map(c => c.lesson_id));
    
    // Check lessons without content
    lessons.forEach(l => {
      if (!contentLessonIds.has(l.id)) {
        report.integrity.lessonsWithoutContent.push({ id: l.id, title: l.title });
      }
    });

    // 4. Fetch Quizzes
    console.log('Fetching quizzes...');
    const quizzes = await pb.collection('quizzes').getFullList({ $autoCancel: false });
    report.counts.quizzes = quizzes.length;
    
    quizzes.forEach(q => {
      if (!lessonIds.has(q.lesson_id)) {
        report.integrity.orphanedQuizzes.push({ id: q.id, title: q.title, invalid_lesson_id: q.lesson_id });
      }
    });

    // 5. Fetch Glossaries
    console.log('Fetching glossaries...');
    try {
      const glossaries = await pb.collection('glossaries').getFullList({ $autoCancel: false });
      report.counts.glossaries = glossaries.length;
      
      glossaries.forEach(g => {
        // Note: Schema uses 'lessonId' (camelCase)
        if (!lessonIds.has(g.lessonId)) {
          report.integrity.orphanedGlossaries.push({ id: g.id, invalid_lesson_id: g.lessonId });
        }
      });
    } catch (e) {
      console.warn('Glossaries collection might not exist or is empty', e.message);
    }

    // 6. Fetch Case Studies
    console.log('Fetching case studies...');
    try {
      const caseStudies = await pb.collection('case_studies').getFullList({ $autoCancel: false });
      report.counts.caseStudies = caseStudies.length;
      
      caseStudies.forEach(cs => {
        // Note: Schema uses 'course_module' for lesson link
        if (!lessonIds.has(cs.course_module)) {
          report.integrity.orphanedCaseStudies.push({ id: cs.id, title: cs.title, invalid_lesson_id: cs.course_module });
        }
      });
    } catch (e) {
      console.warn('Case studies collection might not exist or is empty', e.message);
    }

    // 7. Fetch Resources
    console.log('Fetching resources...');
    try {
      const resources = await pb.collection('lesson_resources').getFullList({ $autoCancel: false });
      report.counts.resources = resources.length;
      
      resources.forEach(r => {
        if (!lessonIds.has(r.lesson_id)) {
          report.integrity.orphanedResources.push({ id: r.id, name: r.resource_name, invalid_lesson_id: r.lesson_id });
        }
      });
    } catch (e) {
      console.warn('Resources collection might not exist or is empty', e.message);
    }

    // Log Final Report
    console.log('📊 AUDIT REPORT SUMMARY:');
    console.table(report.counts);
    
    if (Object.values(report.integrity).some(arr => arr.length > 0)) {
      console.warn('⚠️ INTEGRITY ISSUES FOUND:', report.integrity);
    } else {
      console.log('✅ No integrity issues found. Data structure is healthy.');
    }
    
    console.groupEnd();
    return report;

  } catch (error) {
    console.error('❌ AUDIT FAILED:', error);
    console.groupEnd();
    throw error;
  }
};

export default runDataAudit;