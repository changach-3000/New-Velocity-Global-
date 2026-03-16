/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "<FINANCE_LEASE_ANALYSIS_COURSE_ID>");
    record0.set("title", "Lease Valuation Methods and Calculations");
    record0.set("description", "Master lease valuation techniques, understand present value calculations, develop valuation models, and apply valuation methods to leases");
    record0.set("order", 3);
    record0.set("duration", 60);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "<FINANCE_LEASE_ANALYSIS_COURSE_ID>");
    record1.set("title", "Financial Statement Impact and Analysis");
    record1.set("description", "Understand financial statement impact, analyze lease effects on financial statements, develop financial analysis skills, and interpret lease accounting results");
    record1.set("order", 4);
    record1.set("duration", 60);
    record1.set("content_type", "text");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "<FINANCE_LEASE_ANALYSIS_COURSE_ID>");
    record2.set("title", "Lease vs. Buy Financial Analysis");
    record2.set("description", "Master lease vs. buy analysis, understand financial comparison, develop decision frameworks, and make informed acquisition decisions");
    record2.set("order", 5);
    record2.set("duration", 30);
    record2.set("content_type", "text");
  app.save(record2);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})