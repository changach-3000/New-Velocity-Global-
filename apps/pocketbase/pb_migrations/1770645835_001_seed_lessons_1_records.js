/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "Structuring the Deal - Creating Lease Models");
    record0.set("description", "Learn how to structure lease deals effectively by understanding FMV vs $1 buyout options, step-up and step-down payment structures, and deferred commencement strategies. Master the art of customizing leases to match client needs and business cycles.");
    record0.set("order", 3);
    record0.set("content_type", "text");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})