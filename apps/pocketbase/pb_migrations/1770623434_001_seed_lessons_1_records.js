/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "ASC 842 Requirements");
    record0.set("description", "US GAAP lease classification, operating vs finance leases, measurement principles, lease liability calculation, right-of-use asset recognition, discount rate determination, lease term and payments");
    record0.set("order", 2);
    record0.set("duration", 105);
    record0.set("content_type", "video");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})