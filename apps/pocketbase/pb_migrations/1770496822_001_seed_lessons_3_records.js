/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "Lease vs. Buy Analysis");
    record0.set("description", "Master lease vs. buy decision framework, understand total cost of ownership, develop comparative financial analysis skills, and make data-driven equipment acquisition decisions");
    record0.set("order", 3);
    record0.set("duration", 60);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "pbc_9676646180");
    record1.set("title", "ROI Optimization Strategies");
    record1.set("description", "Master ROI optimization techniques, understand leverage and efficiency strategies, develop optimization frameworks, and implement ROI improvement initiatives");
    record1.set("order", 4);
    record1.set("duration", 60);
    record1.set("content_type", "text");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "pbc_9676646180");
    record2.set("title", "Advanced ROI Metrics and Analysis");
    record2.set("description", "Master advanced ROI metrics, understand risk-adjusted returns, develop advanced analysis techniques, and apply metrics to portfolio management");
    record2.set("order", 5);
    record2.set("duration", 30);
    record2.set("content_type", "text");
  app.save(record2);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})