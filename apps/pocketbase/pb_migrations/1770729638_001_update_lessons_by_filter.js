/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const records = app.findRecordsByFilter("lessons", "title ~ 'mindset' || title ~ 'ownership' || title ~ 'access' || title ~ 'creative financing' || title ~ 'psychology' || title ~ 'sales'");
  for (const record of records) {
    record.set("course_id", "zo6kbu5h9wwy3ga");
    app.save(record);
  }
}, (app) => {
  // Rollback: original values not stored, manual restore needed
})