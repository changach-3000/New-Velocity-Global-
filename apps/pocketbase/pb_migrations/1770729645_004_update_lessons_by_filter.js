/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const records = app.findRecordsByFilter("lessons", "title ~ 'vendor leasing' || title ~ 'vendor financing'");
  for (const record of records) {
    record.set("course_id", "vendor_leasing_course_id");
    app.save(record);
  }
}, (app) => {
  // Rollback: original values not stored, manual restore needed
})