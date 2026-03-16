/**
 * Utility to log data flow for debugging PocketBase relationships
 * Helps identify where chains break between Course -> Lesson -> Content
 */

export const logDataFlow = (stage, data, context = {}) => {
  const timestamp = new Date().toISOString();
  const logStyle = "background: #22c55e; color: #fff; padding: 2px 5px; border-radius: 2px;";
  
  console.groupCollapsed(`%cDataFlow: ${stage}`, logStyle);
  console.log(`Timestamp: ${timestamp}`);
  console.log('Context:', context);
  console.log('Data:', data);
  
  if (data === null || data === undefined) {
    console.error('❌ Data is null or undefined!');
  } else if (Array.isArray(data) && data.length === 0) {
    console.warn('⚠️ Data is an empty array');
  } else {
    console.log('✅ Data present');
  }
  
  console.groupEnd();
};

export const validateCourseData = (course) => {
  if (!course) return { valid: false, error: 'Course object is null' };
  if (!course.id) return { valid: false, error: 'Course ID is missing' };
  if (!course.title) return { valid: false, error: 'Course title is missing' };
  return { valid: true };
};

export const validateLessonData = (lesson) => {
  if (!lesson) return { valid: false, error: 'Lesson object is null' };
  if (!lesson.id) return { valid: false, error: 'Lesson ID is missing' };
  if (!lesson.course_id) return { valid: false, error: 'Lesson course_id is missing' };
  return { valid: true };
};

export const validateContentData = (content) => {
  if (!content) return { valid: false, error: 'Content object is null' };
  if (!content.lesson_id) return { valid: false, error: 'Content lesson_id is missing' };
  if (!content.content_body && !content.video_url) return { valid: false, error: 'Content body and video URL are missing' };
  return { valid: true };
};