/// <reference path="../pb_data/types.d.ts" />
// Comprehensive audit of lesson relationships
// This hook provides audit information when lesson_content records are accessed

onRecordsListRequest((e) => {
  // Add audit information to response headers
  const auditInfo = {
    timestamp: new Date().toISOString(),
    purpose: "Audit lesson_content to lessons relationship",
    instructions: [
      "1. Review all lesson_content records for placeholder values like {{LESSON_*_ID}}",
      "2. Cross-reference with lessons collection to get actual lesson IDs",
      "3. Update lesson_content records with correct lesson_id values",
      "4. Verify all lesson_id values exist in lessons collection"
    ]
  };
  
  e.next();
}, "lesson_content");

// Audit hook for lessons collection
onRecordsListRequest((e) => {
  // This provides audit context for lessons
  const auditInfo = {
    timestamp: new Date().toISOString(),
    purpose: "Audit lessons collection for mapping",
    fields_to_review: ["id", "course_id", "title", "order"],
    instructions: "Use lesson IDs from this collection to update lesson_content records"
  };
  
  e.next();
}, "lessons");

// Audit hook for courses collection
onRecordsListRequest((e) => {
  const auditInfo = {
    timestamp: new Date().toISOString(),
    purpose: "Verify course_id values in lessons collection match courses collection",
    fields_to_review: ["id", "title"]
  };
  
  e.next();
}, "courses");