/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_1014568348");
    record0.set("title", "Handling Objections - The Total Cost Rebuttal");
    record0.set("description", "Understanding common objections in equipment leasing and mastering rebuttal techniques");
    record0.set("order", 4);
    record0.set("content_type", "text");
    record0.set("duration", 120);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})