/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "Lease Accounting Standards (IFRS 16 & ASC 842)");
    record0.set("title", "IFRS 16 vs ASC 842 - Comparative Analysis");
    record0.set("description", "Comprehensive comparative analysis of IFRS 16 and ASC 842 lease accounting standards");
    record0.set("order", 4);
    record0.set("content_type", "text");
    record0.set("duration", 120);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})