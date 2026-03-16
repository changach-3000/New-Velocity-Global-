/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "IFRS 16 Fundamentals");
    record0.set("description", "Lease definition, recognition criteria, right-of-use assets, lease liabilities");
    record0.set("order", 1);
    record0.set("duration", 105);
    record0.set("content_type", "video");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "pbc_9676646180");
    record1.set("title", "ASC 842 Requirements");
    record1.set("description", "US GAAP lease accounting, classification, measurement, operating vs finance leases");
    record1.set("order", 2);
    record1.set("duration", 105);
    record1.set("content_type", "video");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "pbc_9676646180");
    record2.set("title", "Practical Implementation");
    record2.set("description", "Journal entries, financial statement impact, transition guidance");
    record2.set("order", 3);
    record2.set("duration", 105);
    record2.set("content_type", "video");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("course_id", "pbc_9676646180");
    record3.set("title", "IFRS 16 vs ASC 842 Comparison");
    record3.set("description", "Key differences, similarities, reconciliation approaches");
    record3.set("order", 4);
    record3.set("duration", 105);
    record3.set("content_type", "video");
  app.save(record3);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})