/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("assignments");

  const record0 = new Record(collection);
    record0.set("title", "Lease Payment Calculation & TCO Analysis");
    record0.set("lesson_id", "pbc_lesson_10");
    record0.set("description", "Calculate lease payments and total cost of ownership for a sample scenario");
    record0.set("max_score", 100);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})