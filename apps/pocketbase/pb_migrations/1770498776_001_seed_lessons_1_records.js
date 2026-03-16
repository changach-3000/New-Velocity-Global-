/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "ASC 842 Lessee Accounting");
    record0.set("description", "Master ASC 842 lessee accounting including ROU asset and liability recognition, measurement, amortization, and lease modifications. Apply lessee accounting to complex scenarios.");
    record0.set("order", 5);
    record0.set("duration", 60);
    record0.set("content_type", "text");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})