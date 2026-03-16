/// <reference path="../pb_data/types.d.ts" />
// Hook to validate and fix lesson_content records with placeholder lesson_ids
// This runs when lesson_content records are created or updated

onRecordCreate((e) => {
  const lessonId = e.record.get("lesson_id");
  
  // Check if lesson_id is a placeholder (contains brackets, braces, or template syntax)
  const placeholderPatterns = [
    /\[.*_ID\]/,           // [LESSON_1_ID]
    /\{\{.*_ID\}\}/,       // {{LESSON_1_ID}}
    /\{.*_ID\}/,           // {LESSON_1_ID}
    /^[A-Z_]+$/,           // ALL_CAPS_WITH_UNDERSCORES
    /placeholder/i,        // contains "placeholder"
    /todo/i,               // contains "todo"
    /temp/i                // contains "temp"
  ];
  
  const isPlaceholder = placeholderPatterns.some(pattern => pattern.test(lessonId));
  
  if (isPlaceholder) {
    console.log("WARNING: lesson_content record " + e.record.id + " has placeholder lesson_id: " + lessonId);
    // This will be logged for manual review
  }
  
  e.next();
}, "lesson_content");

onRecordUpdate((e) => {
  const lessonId = e.record.get("lesson_id");
  
  // Same validation for updates
  const placeholderPatterns = [
    /\[.*_ID\]/,
    /\{\{.*_ID\}\}/,
    /\{.*_ID\}/,
    /^[A-Z_]+$/,
    /placeholder/i,
    /todo/i,
    /temp/i
  ];
  
  const isPlaceholder = placeholderPatterns.some(pattern => pattern.test(lessonId));
  
  if (isPlaceholder) {
    console.log("WARNING: lesson_content record " + e.record.id + " has placeholder lesson_id: " + lessonId);
  }
  
  e.next();
}, "lesson_content");