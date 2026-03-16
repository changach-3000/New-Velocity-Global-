import pb from '@/lib/pocketbaseClient';

export const runAudit = async () => {
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalLessons: 0,
      completionPercentage: 0,
      totalIssues: 0,
      missingItems: 0,
      dataInconsistencies: 0,
    },
    lessons: {},
    orphanedRecords: {
      quizzes: [],
      caseStudies: [],
      resources: []
    },
    globalIssues: []
  };

  try {
    // 1. Fetch all data in parallel
    const [lessons, quizzes, caseStudies, resources] = await Promise.all([
      pb.collection('vendor_leasing_lessons').getFullList({ sort: 'lessonNumber', $autoCancel: false }),
      pb.collection('vendor_leasing_quizzes').getFullList({ $autoCancel: false }),
      pb.collection('vendor_leasing_case_studies').getFullList({ $autoCancel: false }),
      pb.collection('vendor_leasing_resources').getFullList({ $autoCancel: false }),
    ]);

    report.summary.totalLessons = lessons.length;
    
    // Map for quick lookup
    const lessonMap = new Map(lessons.map(l => [l.id, l]));

    // Initialize lesson reports
    lessons.forEach(lesson => {
      report.lessons[lesson.id] = {
        id: lesson.id,
        number: lesson.lessonNumber,
        title: lesson.title,
        status: 'incomplete', // complete, incomplete, warning
        components: {
          metadata: { status: 'missing', issues: [] },
          quiz: { status: 'missing', issues: [] },
          caseStudy: { status: 'missing', issues: [] },
          resources: { status: 'missing', issues: [] }
        },
        score: 0 // 0-100 based on component completeness
      };
    });

    // 2. Check Lesson Metadata
    lessons.forEach(lesson => {
      const issues = [];
      if (!lesson.title) issues.push('Missing title');
      if (!lesson.description) issues.push('Missing description');
      if (!lesson.contentBody) issues.push('Missing content body');
      if (!lesson.learningOutcomes) issues.push('Missing learning outcomes');
      
      report.lessons[lesson.id].components.metadata = {
        status: issues.length === 0 ? 'complete' : 'incomplete',
        issues
      };
    });

    // 3. Check Quizzes
    quizzes.forEach(quiz => {
      if (!lessonMap.has(quiz.lessonId)) {
        report.orphanedRecords.quizzes.push(quiz.id);
        return;
      }

      const lessonReport = report.lessons[quiz.lessonId];
      const issues = [];
      
      // Parse questions
      let questions = [];
      try {
        questions = typeof quiz.questions === 'string' ? JSON.parse(quiz.questions) : quiz.questions;
      } catch (e) {
        issues.push('Failed to parse questions JSON');
      }

      if (!Array.isArray(questions)) {
        issues.push('Questions field is not an array');
      } else {
        if (questions.length < 10) issues.push(`Insufficient questions: ${questions.length}/10`);
        
        // Check for correct answers
        const missingAnswers = questions.some(q => !q.options || q.options.length === 0);
        if (missingAnswers) issues.push('Some questions missing options');
      }

      lessonReport.components.quiz = {
        status: issues.length === 0 ? 'complete' : 'warning',
        issues,
        details: { questionCount: Array.isArray(questions) ? questions.length : 0 }
      };
    });

    // 4. Check Case Studies
    caseStudies.forEach(cs => {
      if (!lessonMap.has(cs.lessonId)) {
        report.orphanedRecords.caseStudies.push(cs.id);
        return;
      }

      const lessonReport = report.lessons[cs.lessonId];
      const issues = [];
      
      if (!cs.title) issues.push('Missing title');
      if (!cs.scenario) issues.push('Missing scenario content');
      if (!cs.requirements) issues.push('Missing requirements');
      if (!cs.analysisFramework) issues.push('Missing analysis framework');

      lessonReport.components.caseStudy = {
        status: issues.length === 0 ? 'complete' : 'incomplete',
        issues
      };
    });

    // 5. Check Resources
    // Group resources by lesson first
    const resourcesByLesson = {};
    resources.forEach(r => {
      if (!lessonMap.has(r.lessonId)) {
        report.orphanedRecords.resources.push(r.id);
        return;
      }
      if (!resourcesByLesson[r.lessonId]) resourcesByLesson[r.lessonId] = [];
      resourcesByLesson[r.lessonId].push(r);
    });

    Object.keys(report.lessons).forEach(lessonId => {
      const lessonResources = resourcesByLesson[lessonId] || [];
      const issues = [];
      const types = new Set(lessonResources.map(r => r.resourceType));
      
      const requiredTypes = ['study_guide', 'checklist', 'template', 'worksheet'];
      const missingTypes = requiredTypes.filter(t => !types.has(t));
      
      if (missingTypes.length > 0) {
        issues.push(`Missing resource types: ${missingTypes.join(', ')}`);
      }

      report.lessons[lessonId].components.resources = {
        status: issues.length === 0 ? 'complete' : 'warning',
        issues,
        details: { count: lessonResources.length, types: Array.from(types) }
      };
    });

    // 6. Calculate Scores and Global Stats
    let totalScore = 0;
    let totalComponents = 0;

    Object.values(report.lessons).forEach(l => {
      let lessonScore = 0;
      const comps = l.components;
      
      // Weighting: Metadata (25%), Quiz (25%), Case Study (25%), Resources (25%)
      if (comps.metadata.status === 'complete') lessonScore += 25;
      if (comps.quiz.status === 'complete') lessonScore += 25;
      else if (comps.quiz.status === 'warning') lessonScore += 10;
      
      if (comps.caseStudy.status === 'complete') lessonScore += 25;
      
      if (comps.resources.status === 'complete') lessonScore += 25;
      else if (comps.resources.status === 'warning') lessonScore += 10;

      l.score = lessonScore;
      l.status = lessonScore === 100 ? 'complete' : lessonScore > 50 ? 'warning' : 'incomplete';

      totalScore += lessonScore;
      totalComponents += 4;

      // Count issues
      Object.values(comps).forEach(c => {
        if (c.status === 'missing') report.summary.missingItems++;
        if (c.status === 'warning' || c.status === 'incomplete') report.summary.dataInconsistencies += c.issues.length;
      });
    });

    report.summary.completionPercentage = Math.round(totalScore / (lessons.length * 100) * 100) || 0;
    report.summary.totalIssues = report.summary.missingItems + report.summary.dataInconsistencies;

    // Check for broken references (orphans)
    const orphanCount = Object.values(report.orphanedRecords).reduce((acc, arr) => acc + arr.length, 0);
    if (orphanCount > 0) {
      report.globalIssues.push(`Found ${orphanCount} orphaned records not linked to any active lesson.`);
    }

    if (lessons.length < 8) {
      report.globalIssues.push(`Expected 8 lessons, found ${lessons.length}.`);
    }

  } catch (error) {
    console.error("Audit failed:", error);
    report.globalIssues.push(`Audit failed to run: ${error.message}`);
  }

  return report;
};