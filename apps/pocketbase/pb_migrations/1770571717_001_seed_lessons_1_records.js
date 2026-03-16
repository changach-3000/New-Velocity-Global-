/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "Advanced Lease Structuring");
    record0.set("description", "Master the fundamentals of structuring commercial real estate leases, including triple net leases, percentage leases, and optimization strategies");
    record0.set("order", 1);
    record0.set("duration", 120);
    record0.set("content_type", "text");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})