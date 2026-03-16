/// <reference path="../pb_data/types.d.ts" />
// Audit and fix lesson_content records with placeholder values
// This hook runs on lesson_content record operations to validate and correct lesson_id references

onRecordCreate((e) => {
  const lessonId = e.record.get("lesson_id");
  
  // Check for placeholder patterns
  const placeholderPattern = /\{\{LESSON_\d+_ID\}\}/;
  if (placeholderPattern.test(lessonId)) {
    throw new BadRequestError(
      "Cannot create lesson_content with placeholder lesson_id: " + lessonId + 
      ". Please provide an actual lesson ID from the lessons collection."
    );
  }
  
  // Validate that lesson_id references an actual lesson
  if (lessonId && lessonId.trim() !== "") {
    try {
      const lesson = $app.findRecordById("lessons", lessonId);
      if (!lesson) {
        throw new BadRequestError(
          "lesson_id '" + lessonId + "' does not reference a valid lesson in the lessons collection."
        );
      }
    } catch (err) {
      throw new BadRequestError(
        "lesson_id '" + lessonId + "' does not reference a valid lesson in the lessons collection."
      );
    }
  }
  
  e.next();
}, "lesson_content");

onRecordUpdate((e) => {
  const lessonId = e.record.get("lesson_id");
  
  // Check for placeholder patterns
  const placeholderPattern = /\{\{LESSON_\d+_ID\}\}/;
  if (placeholderPattern.test(lessonId)) {
    throw new BadRequestError(
      "Cannot update lesson_content with placeholder lesson_id: " + lessonId + 
      ". Please provide an actual lesson ID from the lessons collection."
    );
  }
  
  // Validate that lesson_id references an actual lesson
  if (lessonId && lessonId.trim() !== "") {
    try {
      const lesson = $app.findRecordById("lessons", lessonId);
      if (!lesson) {
        throw new BadRequestError(
          "lesson_id '" + lessonId + "' does not reference a valid lesson in the lessons collection."
        );
      }
    } catch (err) {
      throw new BadRequestError(
        "lesson_id '" + lessonId + "' does not reference a valid lesson in the lessons collection."
      );
    }
  }
  
  e.next();
}, "lesson_content");