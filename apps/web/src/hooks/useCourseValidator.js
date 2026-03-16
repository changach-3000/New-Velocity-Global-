import { useState, useEffect, useCallback } from 'react';
import pb from '@/lib/pocketbaseClient';

export const useCourseValidator = () => {
  const [courses, setCourses] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    complete: 0,
    incomplete: 0,
    atRisk: 0,
    avgCompletion: 0
  });
  const [loading, setLoading] = useState(true);
  const [lastRun, setLastRun] = useState(null);
  const [error, setError] = useState(null);

  const runValidation = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // 1. Fetch all necessary data in parallel
      const [
        coursesData,
        lessonsData,
        quizzesData,
        questionsData,
        glossariesData,
        caseStudiesData,
        resourcesData,
        badgesData
      ] = await Promise.all([
        pb.collection('courses').getFullList({ sort: 'created', $autoCancel: false }),
        pb.collection('lessons').getFullList({ sort: 'lessonNumber', $autoCancel: false }),
        pb.collection('quizzes').getFullList({ $autoCancel: false }),
        pb.collection('quiz_questions').getFullList({ $autoCancel: false }),
        pb.collection('glossaries').getFullList({ $autoCancel: false }),
        pb.collection('case_studies').getFullList({ $autoCancel: false }),
        pb.collection('resources').getFullList({ $autoCancel: false }),
        pb.collection('badges').getFullList({ $autoCancel: false }),
      ]);

      // 2. Build lookup maps for efficiency
      const questionsByQuiz = {};
      questionsData.forEach(q => {
        if (!questionsByQuiz[q.quiz]) questionsByQuiz[q.quiz] = [];
        questionsByQuiz[q.quiz].push(q);
      });

      const quizzesByLesson = {};
      quizzesData.forEach(q => {
        if (!quizzesByLesson[q.lesson]) quizzesByLesson[q.lesson] = [];
        quizzesByLesson[q.lesson].push({
          ...q,
          questionCount: (questionsByQuiz[q.id] || []).length
        });
      });

      const glossariesByLesson = {};
      glossariesData.forEach(g => {
        if (!glossariesByLesson[g.lesson]) glossariesByLesson[g.lesson] = [];
        glossariesByLesson[g.lesson].push(g);
      });

      const caseStudiesByLesson = {};
      caseStudiesData.forEach(cs => {
        if (!caseStudiesByLesson[cs.lesson]) caseStudiesByLesson[cs.lesson] = [];
        caseStudiesByLesson[cs.lesson].push(cs);
      });

      const resourcesByLesson = {};
      resourcesData.forEach(r => {
        if (!resourcesByLesson[r.lesson]) resourcesByLesson[r.lesson] = [];
        resourcesByLesson[r.lesson].push(r);
      });

      const lessonsByCourse = {};
      lessonsData.forEach(l => {
        if (!lessonsByCourse[l.course]) lessonsByCourse[l.course] = [];
        lessonsByCourse[l.course].push({
          ...l,
          quizzes: quizzesByLesson[l.id] || [],
          glossaries: glossariesByLesson[l.id] || [],
          caseStudies: caseStudiesByLesson[l.id] || [],
          resources: resourcesByLesson[l.id] || []
        });
      });

      const badgesByCourse = {};
      badgesData.forEach(b => {
        if (!badgesByCourse[b.course]) badgesByCourse[b.course] = [];
        badgesByCourse[b.course].push(b);
      });

      // 3. Validate each course
      const validatedCourses = coursesData.map(course => {
        const courseLessons = lessonsByCourse[course.id] || [];
        const courseBadges = badgesByCourse[course.id] || [];
        const issues = [];
        const missingComponents = [];
        
        let totalComponents = 0;
        let completedComponents = 0;

        // Rule 1: Minimum 5 lessons
        totalComponents++;
        if (courseLessons.length >= 5) {
          completedComponents++;
        } else {
          issues.push(`Insufficient lessons: ${courseLessons.length}/5`);
          missingComponents.push({ type: 'Course', name: 'Lesson Count', current: courseLessons.length, required: 5 });
        }

        // Validate each lesson
        const lessonDetails = courseLessons.map(lesson => {
          const lessonIssues = [];
          let lessonScore = 0;
          const maxLessonScore = 4; // Quiz, Glossary, Case Study, Resources

          // Rule 2: At least 1 quiz with 10+ questions
          const validQuizzes = lesson.quizzes.filter(q => q.questionCount >= 10);
          if (validQuizzes.length > 0) {
            lessonScore++;
          } else {
            if (lesson.quizzes.length === 0) {
              lessonIssues.push('No quiz found');
              missingComponents.push({ type: 'Lesson', name: `${lesson.title} - Quiz`, current: 0, required: 1 });
            } else {
              const qCount = lesson.quizzes[0].questionCount;
              lessonIssues.push(`Quiz has insufficient questions (${qCount}/10)`);
              missingComponents.push({ type: 'Lesson', name: `${lesson.title} - Quiz Questions`, current: qCount, required: 10 });
            }
          }

          // Rule 3: 10+ glossary terms
          // Check if glossary has 'terms' JSON field or if we count records
          let termCount = 0;
          if (lesson.glossaries.length > 0) {
            lesson.glossaries.forEach(g => {
              if (g.terms) {
                try {
                  const terms = typeof g.terms === 'string' ? JSON.parse(g.terms) : g.terms;
                  termCount += Array.isArray(terms) ? terms.length : 0;
                } catch (e) {
                  // ignore parse error
                }
              } else {
                // If no terms field, count the record itself as a term
                termCount++;
              }
            });
          }
          
          if (termCount >= 10) {
            lessonScore++;
          } else {
            lessonIssues.push(`Insufficient glossary terms (${termCount}/10)`);
            missingComponents.push({ type: 'Lesson', name: `${lesson.title} - Glossary Terms`, current: termCount, required: 10 });
          }

          // Rule 4: 1+ Case Study
          if (lesson.caseStudies.length >= 1) {
            lessonScore++;
          } else {
            lessonIssues.push('No case study found');
            missingComponents.push({ type: 'Lesson', name: `${lesson.title} - Case Study`, current: 0, required: 1 });
          }

          // Rule 5: 3+ Resources
          if (lesson.resources.length >= 3) {
            lessonScore++;
          } else {
            lessonIssues.push(`Insufficient resources (${lesson.resources.length}/3)`);
            missingComponents.push({ type: 'Lesson', name: `${lesson.title} - Resources`, current: lesson.resources.length, required: 3 });
          }

          return {
            ...lesson,
            issues: lessonIssues,
            isComplete: lessonIssues.length === 0,
            termCount
          };
        });

        // Calculate overall completion
        // Base score on lessons being valid
        const totalLessonChecks = courseLessons.length * 4; // 4 checks per lesson
        const passedLessonChecks = lessonDetails.reduce((acc, l) => acc + (l.isComplete ? 4 : (4 - l.issues.length)), 0);
        
        // Add course-level checks (min 5 lessons)
        const totalChecks = totalLessonChecks + 1; 
        const passedChecks = passedLessonChecks + (courseLessons.length >= 5 ? 1 : 0);

        const completionPercentage = totalChecks > 0 ? Math.round((passedChecks / totalChecks) * 100) : 0;

        // Determine status
        let status = 'Incomplete';
        if (completionPercentage === 100) status = 'Complete';
        else if (completionPercentage < 75) status = 'At Risk';
        else status = 'Incomplete'; // 75-99%

        return {
          id: course.id,
          title: course.title,
          description: course.description,
          instructor: course.instructor || 'Unknown',
          lessonCount: courseLessons.length,
          badgeCount: courseBadges.length,
          completionPercentage,
          status,
          issues: [...issues, ...lessonDetails.flatMap(l => l.issues.map(i => `${l.title}: ${i}`))],
          missingComponents,
          lessons: lessonDetails
        };
      });

      // 4. Calculate Stats
      const newStats = {
        total: validatedCourses.length,
        complete: validatedCourses.filter(c => c.status === 'Complete').length,
        incomplete: validatedCourses.filter(c => c.status === 'Incomplete').length,
        atRisk: validatedCourses.filter(c => c.status === 'At Risk').length,
        avgCompletion: Math.round(validatedCourses.reduce((acc, c) => acc + c.completionPercentage, 0) / (validatedCourses.length || 1))
      };

      setCourses(validatedCourses);
      setStats(newStats);
      setLastRun(new Date());

    } catch (err) {
      console.error("Validation failed:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    runValidation();
  }, [runValidation]);

  return { courses, stats, loading, error, lastRun, refresh: runValidation };
};