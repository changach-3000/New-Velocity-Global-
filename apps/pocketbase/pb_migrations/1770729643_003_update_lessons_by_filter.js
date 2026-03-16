/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const records = app.findRecordsByFilter("lessons", "title ~ 'tax optimization' || title ~ 'depreciation' || title ~ 'tax benefits'");
  for (const record of records) {
    record.set("course_id", "tax_optimization_course_id");
    app.save(record);
  }
}, (app) => {
  // Rollback: original values not stored, manual restore needed
})