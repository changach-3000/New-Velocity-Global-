/// <reference path="../pb_data/types.d.ts" />
// Data Integrity Verification Hook
// This hook provides comprehensive data verification across all collections

onRecordsListRequest((e) => {
  // Only run for authenticated users (instructors/admins)
  if (!e.auth || e.auth.collectionName !== 'users') {
    e.next();
    return;
  }

  const collection = e.collection.name;
  let report = {};

  try {
    if (collection === 'courses') {
      // Query all courses
      const courses = $app.findAllRecords('courses', { sort: 'created' });
      report.total_courses = courses.length;
      report.courses = courses.map(c => ({
        id: c.id,
        title: c.get('title'),
        instructor: c.get('instructor_name'),
        price: c.get('price'),
        created: c.get('created')
      }));

      // Count lessons per course
      report.lessons_per_course = {};
      courses.forEach(course => {
        const lessons = $app.findAllRecords('lessons', { filter: `course_id = '${course.id}'` });
        report.lessons_per_course[course.id] = {
          course_title: course.get('title'),
          lesson_count: lessons.length,
          lesson_ids: lessons.map(l => l.id)
        };
      });

      console.log('COURSES REPORT:', JSON.stringify(report, null, 2));
    }

    else if (collection === 'lessons') {
      // Query all lessons
      const lessons = $app.findAllRecords('lessons', { sort: 'order' });
      report.total_lessons = lessons.length;
      report.lessons = lessons.map(l => ({
        id: l.id,
        title: l.get('title'),
        course_id: l.get('course_id'),
        order: l.get('order'),
        content_type: l.get('content_type')
      }));

      // Check for orphaned lessons (course_id doesn't exist)
      report.orphaned_lessons = [];
      lessons.forEach(lesson => {
        const courseId = lesson.get('course_id');
        try {
          const course = $app.findRecordById('courses', courseId);
          if (!course) {
            report.orphaned_lessons.push({
              lesson_id: lesson.id,
              lesson_title: lesson.get('title'),
              missing_course_id: courseId
            });
          }
        } catch (err) {
          report.orphaned_lessons.push({
            lesson_id: lesson.id,
            lesson_title: lesson.get('title'),
            missing_course_id: courseId,
            error: 'Course not found'
          });
        }
      });

      // Count quizzes per lesson
      report.quizzes_per_lesson = {};
      lessons.forEach(lesson => {
        const quizzes = $app.findAllRecords('quizzes', { filter: `lesson_id = '${lesson.id}'` });
        report.quizzes_per_lesson[lesson.id] = {
          lesson_title: lesson.get('title'),
          quiz_count: quizzes.length,
          quiz_ids: quizzes.map(q => q.id)
        };
      });

      console.log('LESSONS REPORT:', JSON.stringify(report, null, 2));
    }

    else if (collection === 'quizzes') {
      // Query all quizzes
      const quizzes = $app.findAllRecords('quizzes', { sort: 'created' });
      report.total_quizzes = quizzes.length;
      report.quizzes = quizzes.map(q => ({
        id: q.id,
        title: q.get('title'),
        lesson_id: q.get('lesson_id'),
        passing_score: q.get('passing_score')
      }));

      // Check for orphaned quizzes
      report.orphaned_quizzes = [];
      quizzes.forEach(quiz => {
        const lessonId = quiz.get('lesson_id');
        try {
          const lesson = $app.findRecordById('lessons', lessonId);
          if (!lesson) {
            report.orphaned_quizzes.push({
              quiz_id: quiz.id,
              quiz_title: quiz.get('title'),
              missing_lesson_id: lessonId
            });
          }
        } catch (err) {
          report.orphaned_quizzes.push({
            quiz_id: quiz.id,
            quiz_title: quiz.get('title'),
            missing_lesson_id: lessonId,
            error: 'Lesson not found'
          });
        }
      });

      // Count questions per quiz
      report.questions_per_quiz = {};
      quizzes.forEach(quiz => {
        const questions = $app.findAllRecords('quiz_questions', { filter: `quiz_id = '${quiz.id}'` });
        report.questions_per_quiz[quiz.id] = {
          quiz_title: quiz.get('title'),
          question_count: questions.length,
          question_ids: questions.map(q => q.id)
        };
      });

      console.log('QUIZZES REPORT:', JSON.stringify(report, null, 2));
    }

    else if (collection === 'glossaries') {
      // Query all glossaries
      const glossaries = $app.findAllRecords('glossaries', { sort: 'created' });
      report.total_glossaries = glossaries.length;
      report.glossaries = glossaries.map(g => ({
        id: g.id,
        lesson_id: g.get('lessonId'),
        term_count: g.get('termCount')
      }));

      // Check for orphaned glossaries
      report.orphaned_glossaries = [];
      glossaries.forEach(glossary => {
        const lessonId = glossary.get('lessonId');
        if (lessonId) {
          try {
            const lesson = $app.findRecordById('lessons', lessonId);
            if (!lesson) {
              report.orphaned_glossaries.push({
                glossary_id: glossary.id,
                missing_lesson_id: lessonId
              });
            }
          } catch (err) {
            report.orphaned_glossaries.push({
              glossary_id: glossary.id,
              missing_lesson_id: lessonId,
              error: 'Lesson not found'
            });
          }
        }
      });

      console.log('GLOSSARIES REPORT:', JSON.stringify(report, null, 2));
    }

    else if (collection === 'case_studies') {
      // Query all case studies
      const caseStudies = $app.findAllRecords('case_studies', { sort: 'created' });
      report.total_case_studies = caseStudies.length;
      report.case_studies = caseStudies.map(cs => ({
        id: cs.id,
        title: cs.get('title'),
        course_module: cs.get('course_module'),
        difficulty_level: cs.get('difficulty_level')
      }));

      console.log('CASE STUDIES REPORT:', JSON.stringify(report, null, 2));
    }

    else if (collection === 'lesson_resources') {
      // Query all lesson resources
      const resources = $app.findAllRecords('lesson_resources', { sort: 'created' });
      report.total_resources = resources.length;
      report.resources = resources.map(r => ({
        id: r.id,
        lesson_id: r.get('lesson_id'),
        resource_name: r.get('resource_name'),
        resource_type: r.get('resource_type')
      }));

      // Check for orphaned resources
      report.orphaned_resources = [];
      resources.forEach(resource => {
        const lessonId = resource.get('lesson_id');
        try {
          const lesson = $app.findRecordById('lessons', lessonId);
          if (!lesson) {
            report.orphaned_resources.push({
              resource_id: resource.id,
              resource_name: resource.get('resource_name'),
              missing_lesson_id: lessonId
            });
          }
        } catch (err) {
          report.orphaned_resources.push({
            resource_id: resource.id,
            resource_name: resource.get('resource_name'),
            missing_lesson_id: lessonId,
            error: 'Lesson not found'
          });
        }
      });

      console.log('LESSON RESOURCES REPORT:', JSON.stringify(report, null, 2));
    }

    else if (collection === 'badges') {
      // Query all badges
      const badges = $app.findAllRecords('badges', { sort: 'created' });
      report.total_badges = badges.length;
      report.badges = badges.map(b => ({
        id: b.id,
        name: b.get('name'),
        course_id: b.get('course_id'),
        competency_level: b.get('competency_level')
      }));

      // Check for orphaned badges
      report.orphaned_badges = [];
      badges.forEach(badge => {
        const courseId = badge.get('course_id');
        if (courseId) {
          try {
            const course = $app.findRecordById('courses', courseId);
            if (!course) {
              report.orphaned_badges.push({
                badge_id: badge.id,
                badge_name: badge.get('name'),
                missing_course_id: courseId
              });
            }
          } catch (err) {
            report.orphaned_badges.push({
              badge_id: badge.id,
              badge_name: badge.get('name'),
              missing_course_id: courseId,
              error: 'Course not found'
            });
          }
        }
      });

      console.log('BADGES REPORT:', JSON.stringify(report, null, 2));
    }

    else if (collection === 'lesson_content') {
      // Query all lesson content
      const contents = $app.findAllRecords('lesson_content', { sort: 'created' });
      report.total_content_records = contents.length;
      report.content_summary = {
        with_video_url: 0,
        with_content_body: 0,
        with_both: 0,
        with_neither: 0
      };
      report.content_records = [];

      contents.forEach(content => {
        const videoUrl = content.get('video_url');
        const contentBody = content.get('content_body');
        const lessonId = content.get('lesson_id');

        let hasVideo = !!videoUrl && videoUrl.trim().length > 0;
        let hasBody = !!contentBody && contentBody.trim().length > 0;

        if (hasVideo && hasBody) report.content_summary.with_both++;
        else if (hasVideo) report.content_summary.with_video_url++;
        else if (hasBody) report.content_summary.with_content_body++;
        else report.content_summary.with_neither++;

        report.content_records.push({
          id: content.id,
          lesson_id: lessonId,
          has_video_url: hasVideo,
          has_content_body: hasBody,
          created: content.get('created')
        });

        // Check for orphaned content
        if (!hasVideo && !hasBody) {
          if (!report.empty_content) report.empty_content = [];
          report.empty_content.push({
            content_id: content.id,
            lesson_id: lessonId
          });
        }
      });

      console.log('LESSON CONTENT REPORT:', JSON.stringify(report, null, 2));
    }

  } catch (error) {
    console.error('Data Integrity Verification Error:', error.message);
    report.error = error.message;
  }

  e.next();
}, 'courses');

onRecordsListRequest((e) => {
  if (!e.auth || e.auth.collectionName !== 'users') {
    e.next();
    return;
  }
  e.next();
}, 'lessons');

onRecordsListRequest((e) => {
  if (!e.auth || e.auth.collectionName !== 'users') {
    e.next();
    return;
  }
  e.next();
}, 'quizzes');

onRecordsListRequest((e) => {
  if (!e.auth || e.auth.collectionName !== 'users') {
    e.next();
    return;
  }
  e.next();
}, 'glossaries');

onRecordsListRequest((e) => {
  if (!e.auth || e.auth.collectionName !== 'users') {
    e.next();
    return;
  }
  e.next();
}, 'case_studies');

onRecordsListRequest((e) => {
  if (!e.auth || e.auth.collectionName !== 'users') {
    e.next();
    return;
  }
  e.next();
}, 'lesson_resources');

onRecordsListRequest((e) => {
  if (!e.auth || e.auth.collectionName !== 'users') {
    e.next();
    return;
  }
  e.next();
}, 'badges');

onRecordsListRequest((e) => {
  if (!e.auth || e.auth.collectionName !== 'users') {
    e.next();
    return;
  }
  e.next();
}, 'lesson_content');