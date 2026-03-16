/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "Detailed Comparison and Differences");
    record0.set("description", "Master differences between IFRS 16 and ASC 842. Understand convergence and divergence areas, develop comparative analysis skills, and apply knowledge to complex scenarios.");
    record0.set("order", 7);
    record0.set("duration", 60);
    record0.set("content_type", "text");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})