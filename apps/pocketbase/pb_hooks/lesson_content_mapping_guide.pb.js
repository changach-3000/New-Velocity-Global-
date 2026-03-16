/// <reference path="../pb_data/types.d.ts" />
// Lesson Content Mapping Guide and Audit Report
// This hook provides comprehensive audit information

onRecordEnrich((e) => {
  // Add audit metadata to lesson_content records
  const lessonId = e.record.get("lesson_id");
  
  // Check if this is a placeholder
  const placeholderPattern = /\{\{LESSON_\d+_ID\}\}/;
  const isPlaceholder = placeholderPattern.test(lessonId);
  
  if (isPlaceholder) {
    // Extract lesson number from placeholder
    const match = lessonId.match(/LESSON_(\d+)_ID/);
    const lessonNumber = match ? match[1] : "unknown";
    
    // Add audit information
    e.record.set("_audit_status", "PLACEHOLDER_DETECTED");
    e.record.set("_placeholder_lesson_number", lessonNumber);
    e.record.set("_action_required", "Replace with actual lesson ID from lessons collection");
  } else if (lessonId && lessonId.trim() !== "") {
    e.record.set("_audit_status", "VALID_LESSON_ID");
    
    // Try to validate the lesson exists
    try {
      const lesson = $app.findRecordById("lessons", lessonId);
      if (lesson) {
        e.record.set("_lesson_title", lesson.get("title"));
        e.record.set("_lesson_course_id", lesson.get("course_id"));
        e.record.set("_validation_status", "VERIFIED");
      } else {
        e.record.set("_validation_status", "LESSON_NOT_FOUND");
        e.record.set("_action_required", "Lesson ID does not exist in lessons collection");
      }
    } catch (err) {
      e.record.set("_validation_status", "ERROR_VALIDATING");
      e.record.set("_error_message", err.message);
    }
  } else {
    e.record.set("_audit_status", "MISSING_LESSON_ID");
    e.record.set("_action_required", "lesson_id field is empty");
  }
  
  e.next();
}, "lesson_content");

// Audit enrichment for lessons collection
onRecordEnrich((e) => {
  // Add audit metadata to lesson records
  const lessonId = e.record.get("id");
  const courseId = e.record.get("course_id");
  const title = e.record.get("title");
  const order = e.record.get("order");
  
  // Add audit information
  e.record.set("_audit_info", {
    lesson_id: lessonId,
    course_id: courseId,
    title: title,
    order: order,
    mapping_key: "LESSON_" + order + "_ID",
    usage: "Use this lesson_id in lesson_content.lesson_id field"
  });
  
  e.next();
}, "lessons");