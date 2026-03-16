/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "Lease Accounting Standards (IFRS 16 & ASC 842)");
    record0.set("title", "Portfolio Management & Optimization");
    record0.set("description", "Comprehensive lesson on lease portfolio management, optimization strategies, financial impact analysis, risk management, technology solutions, reporting requirements, best practices, case studies, and future trends in lease accounting");
    record0.set("order", 5);
    record0.set("content_type", "text");
    record0.set("duration", 120);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})