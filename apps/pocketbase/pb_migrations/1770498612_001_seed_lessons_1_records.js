/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "IFRS 16 Overview and Scope");
    record0.set("description", "Understand IFRS 16 framework, scope, applicability, key definitions and concepts. Learn how to identify and apply IFRS 16 to lease transactions.");
    record0.set("order", 1);
    record0.set("duration", 60);
    record0.set("content_type", "text");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})