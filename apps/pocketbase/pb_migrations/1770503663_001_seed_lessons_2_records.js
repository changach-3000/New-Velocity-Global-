/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "Lease Agreement Basics and Legal Requirements");
    record0.set("description", "Understand lease agreement fundamentals, legal requirements, key legal concepts, and apply knowledge to lease compliance");
    record0.set("order", 1);
    record0.set("duration", 60);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "pbc_9676646180");
    record1.set("title", "Regulatory Framework and Compliance Overview");
    record1.set("description", "Understand regulatory framework for leases, key compliance requirements, regulatory agencies, and apply regulatory knowledge to leases");
    record1.set("order", 2);
    record1.set("duration", 60);
    record1.set("content_type", "text");
  app.save(record1);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})