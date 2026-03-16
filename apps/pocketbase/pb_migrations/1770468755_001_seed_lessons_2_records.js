/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "Understanding Lease Types and Structures");
    record0.set("description", "Understand different lease types and their characteristics. Master lease structure fundamentals. Identify appropriate lease types for different scenarios. Understand accounting and tax implications.");
    record0.set("order", 1);
    record0.set("duration", 60);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "pbc_9676646180");
    record1.set("title", "Key Lease Terms and Conditions");
    record1.set("description", "Master critical lease terms and their implications. Understand negotiation points and trade-offs. Develop lease documentation best practices. Identify risk allocation strategies.");
    record1.set("order", 2);
    record1.set("duration", 60);
    record1.set("content_type", "text");
  app.save(record1);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})