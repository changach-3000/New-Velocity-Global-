/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "What is Leasing and Why It Matters");
    record0.set("description", "Understand what leasing is, why it matters, key benefits, and how to apply leasing concepts to real situations. Learn the difference between leasing and buying, explore key benefits, and see real-world examples.");
    record0.set("order", 1);
    record0.set("duration", 60);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "pbc_9676646180");
    record1.set("title", "Types of Leases and Key Concepts");
    record1.set("description", "Understand different types of leases including operating leases, capital leases, and consumer leases. Learn key leasing concepts and terminology to make informed leasing decisions.");
    record1.set("order", 2);
    record1.set("duration", 60);
    record1.set("content_type", "text");
  app.save(record1);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})