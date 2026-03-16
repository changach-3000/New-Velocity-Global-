/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "<FINANCE_LEASE_ANALYSIS_COURSE_ID>");
    record0.set("title", "Introduction to Lease Accounting Standards");
    record0.set("description", "Understand lease accounting standards, master IFRS 16 and ASC 842 requirements, identify key accounting principles, and apply standards to lease transactions");
    record0.set("order", 1);
    record0.set("duration", 60);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "<FINANCE_LEASE_ANALYSIS_COURSE_ID>");
    record1.set("title", "Lease Classification and Recognition");
    record1.set("description", "Master lease classification, understand recognition requirements, apply classification criteria, and prepare lease accounting entries");
    record1.set("order", 2);
    record1.set("duration", 60);
    record1.set("content_type", "text");
  app.save(record1);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})