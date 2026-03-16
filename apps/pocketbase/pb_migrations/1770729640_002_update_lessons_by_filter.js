/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const records = app.findRecordsByFilter("lessons", "title ~ 'practical leasing' || title ~ 'finance professionals' || title ~ 'equipment leasing'");
  for (const record of records) {
    record.set("course_id", "5gbthmvwue7zpz6");
    app.save(record);
  }
}, (app) => {
  // Rollback: original values not stored, manual restore needed
})