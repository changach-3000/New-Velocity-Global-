/// <reference path="../pb_data/types.d.ts" />
// This hook provides guidance for fixing the lesson_progress migration
// The down() function should safely drop the collection without errors

// CORRECT DOWN MIGRATION PATTERN:
// down() {
//   return this.db.dropCollection("lesson_progress").catch(() => {
//     // Silently ignore if collection doesn't exist
//     return null;
//   });
// }

// OR with explicit existence check:
// down() {
//   return this.db.findCollectionByNameOrId("lesson_progress")
//     .then(() => {
//       return this.db.dropCollection("lesson_progress");
//     })
//     .catch(() => {
//       // Collection doesn't exist, which is fine for down migration
//       return null;
//     });
// }

// The issue occurs because:
// 1. The down() function tries to query/delete from lesson_progress
// 2. If the collection was already dropped or never created, it fails
// 3. PocketBase throws "sql: no rows in result set" error

// Solution: Use .catch() to handle the error gracefully
// This allows the migration to complete successfully even if the collection doesn't exist