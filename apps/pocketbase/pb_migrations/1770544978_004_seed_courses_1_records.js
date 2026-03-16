/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Vendor Leasing: Comprehensive Guide to Vendor-Provided Equipment Financing");
    record0.set("description", "Complete guide to vendor leasing, financing structures, evaluation, accounting, compliance, and best practices");
    record0.set("duration_hours", 8);
    record0.set("instructor_name", "Finance Expert");
    record0.set("level", "intermediate");
    record0.set("price", 99.99);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})