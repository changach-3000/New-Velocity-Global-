/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("students");
  const record = new Record(collection);
  record.set("email", "student@test.com");
  record.setPassword("TestStudent123");
  record.set("full_name", "Test Student");
  return app.save(record);
}, (app) => {
  // Rollback: record ID not known, manual cleanup needed
})