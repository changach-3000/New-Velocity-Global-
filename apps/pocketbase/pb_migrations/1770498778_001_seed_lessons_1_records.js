/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "ASC 842 Lessor Accounting");
    record0.set("description", "Master ASC 842 lessor accounting including finance and operating lease classification, recognition, and measurement. Apply lessor accounting to lease transactions.");
    record0.set("order", 6);
    record0.set("duration", 30);
    record0.set("content_type", "text");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})