/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "Evaluating Lease Opportunities");
    record0.set("description", "Understand how to evaluate lease opportunities, compare options, and make informed leasing decisions. Learn financial analysis techniques and decision criteria.");
    record0.set("order", 6);
    record0.set("duration", 60);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "pbc_9676646180");
    record1.set("title", "Lease Process and Documentation");
    record1.set("description", "Understand the lease process from application to funding. Learn about documentation requirements and key sections of lease agreements.");
    record1.set("order", 7);
    record1.set("duration", 60);
    record1.set("content_type", "text");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "pbc_9676646180");
    record2.set("title", "Common Mistakes and Best Practices");
    record2.set("description", "Learn common leasing mistakes to avoid and best practices for successful leasing. Understand risk mitigation strategies and negotiation tips.");
    record2.set("order", 8);
    record2.set("duration", 30);
    record2.set("content_type", "text");
  app.save(record2);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})