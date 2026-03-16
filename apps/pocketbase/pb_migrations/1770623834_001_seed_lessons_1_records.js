/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "IFRS 16 vs ASC 842 - Comparative Analysis");
    record0.set("description", "Key differences between IFRS 16 and ASC 842, lease definition differences, recognition and measurement differences, disclosure requirements comparison, convergence efforts, practical implications for multinational companies, transition strategies");
    record0.set("order", 4);
    record0.set("duration", 105);
    record0.set("content_type", "video");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})