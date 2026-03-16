/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("users");
  const record = new Record(collection);
  record.set("email", "admin@example.com");
  record.setPassword("1234567890");
  record.set("role", "admin");
  return app.save(record);
}, (app) => {
  // Rollback: record ID not known, manual cleanup needed
})