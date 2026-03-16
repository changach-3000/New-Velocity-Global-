/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const records = app.findRecordsByFilter("courses", "title='Introduction to Leasing'");
  for (const record of records) {
    record.set("title", "Introduction to Leasing");
    record.set("description", "Master the fundamentals of leasing, from understanding why businesses shift from ownership to access, through lease types, financial considerations, and navigating the global leasing platform.");
    record.set("duration_hours", 4.5);
    record.set("learning_outcomes", "New platform users, SMB owners, and procurement professionals");
    app.save(record);
  }
}, (app) => {
  // Rollback: original values not stored, manual restore needed
})