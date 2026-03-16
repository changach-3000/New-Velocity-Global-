/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "<FINANCE_LEASE_ANALYSIS_COURSE_ID>");
    record0.set("title", "Advanced Lease Analysis Techniques");
    record0.set("description", "Master advanced lease analysis, understand complex lease scenarios, develop sophisticated analysis models, and apply advanced techniques to real-world leases");
    record0.set("order", 6);
    record0.set("duration", 90);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "<FINANCE_LEASE_ANALYSIS_COURSE_ID>");
    record1.set("title", "Compliance, Reporting, and Best Practices");
    record1.set("description", "Master lease compliance requirements, understand reporting and disclosure, develop best practices, and ensure regulatory compliance");
    record1.set("order", 7);
    record1.set("duration", 60);
    record1.set("content_type", "text");
  app.save(record1);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})