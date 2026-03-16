/// <reference path="../pb_data/types.d.ts" />
// Migration: Rename student_id to user_id in enrollments collection
// This hook runs once during migration setup

onRecordCreate((e) => {
  // This is a placeholder hook to ensure the migration system is initialized
  e.next();
}, "enrollments");