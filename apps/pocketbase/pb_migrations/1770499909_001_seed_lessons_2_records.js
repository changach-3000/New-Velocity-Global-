/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "ASC 842 Overview and Scope");
    record0.set("description", "Understand ASC 842 framework, scope, applicability, key definitions, and concepts. Learn the single lease accounting model, ROU assets, lease liabilities, and how to apply ASC 842 to lease transactions.");
    record0.set("order", 1);
    record0.set("duration", 60);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "pbc_9676646180");
    record1.set("title", "Lease Definition and Identification");
    record1.set("description", "Master lease definition under ASC 842, develop lease identification skills, understand control assessment, and apply lease identification to various contracts.");
    record1.set("order", 2);
    record1.set("duration", 60);
    record1.set("content_type", "text");
  app.save(record1);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})