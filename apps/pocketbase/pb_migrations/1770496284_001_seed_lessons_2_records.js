/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "Credit Scoring and Decision Models");
    record0.set("description", "Master credit scoring methodologies, understand decision models and frameworks, develop credit decision processes, and apply scoring models to real-world scenarios");
    record0.set("order", 6);
    record0.set("duration", 90);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "pbc_9676646180");
    record1.set("title", "Credit Monitoring and Portfolio Management");
    record1.set("description", "Master credit monitoring techniques, understand portfolio risk management, develop early warning systems, and implement portfolio optimization strategies");
    record1.set("order", 7);
    record1.set("duration", 60);
    record1.set("content_type", "text");
  app.save(record1);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})