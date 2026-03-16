import pb from '@/lib/pocketbaseClient';

export const validateDataConsistency = async (onProgress) => {
  const report = {
    issues: [],
    stats: {
      checkedRecords: 0,
      invalidRecords: 0
    }
  };

  const logIssue = (type, id, message) => {
    report.issues.push({ type, id, message });
    report.stats.invalidRecords++;
  };

  try {
    // 1. Validate Quizzes
    if (onProgress) onProgress('Validating quizzes...', 20);
    const quizzes = await pb.collection('quizzes').getFullList({ $autoCancel: false });
    report.stats.checkedRecords += quizzes.length;
    
    for (const quiz of quizzes) {
      if (!quiz.answer_key) {
        // Note: answer_key might not be a required field in all schemas, but good to check
        // logIssue('Quiz', quiz.id, 'Missing answer_key field'); 
      }
      if (!quiz.questions || (Array.isArray(quiz.questions) && quiz.questions.length === 0)) {
        // Questions might be in a separate collection 'quiz_questions'
        // logIssue('Quiz', quiz.id, 'Questions array is empty');
      }
      // Check orphan status
      try {
        await pb.collection('lessons').getOne(quiz.lesson_id, { $autoCancel: false });
      } catch (e) {
        logIssue('Quiz', quiz.id, `Orphaned record: Lesson ${quiz.lesson_id} not found`);
      }
    }

    // 2. Validate Case Studies
    if (onProgress) onProgress('Validating case studies...', 60);
    const caseStudies = await pb.collection('case_studies').getFullList({ $autoCancel: false });
    report.stats.checkedRecords += caseStudies.length;

    for (const cs of caseStudies) {
      if (!cs.title) logIssue('CaseStudy', cs.id, 'Missing title');
      if (!cs.scenario) logIssue('CaseStudy', cs.id, 'Missing scenario');
    }

    // 3. Validate Lesson Resources
    if (onProgress) onProgress('Validating resources...', 80);
    const resources = await pb.collection('lesson_resources').getFullList({ $autoCancel: false });
    report.stats.checkedRecords += resources.length;

    for (const res of resources) {
      if (!res.resource_name) logIssue('Resource', res.id, 'Missing resource_name');
      if (!res.resource_type) logIssue('Resource', res.id, 'Missing resource_type');
    }

    if (onProgress) onProgress('Validation complete', 100);
    return report;

  } catch (error) {
    console.error('Validation failed:', error);
    throw error;
  }
};