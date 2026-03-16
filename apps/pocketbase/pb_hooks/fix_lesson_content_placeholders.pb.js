/// <reference path="../pb_data/types.d.ts" />
// This hook will help identify and log lesson_content records with placeholder lesson_ids
// Run this to understand the data structure before making updates

onRecordsListRequest((e) => {
  if (e.collection.name === "lesson_content") {
    console.log("=== LESSON_CONTENT RECORDS ===");
    // This will be logged when the collection is queried
  }
  e.next();
}, "lesson_content");

onRecordsListRequest((e) => {
  if (e.collection.name === "lessons") {
    console.log("=== LESSONS RECORDS ===");
    // This will be logged when the collection is queried
  }
  e.next();
}, "lessons");