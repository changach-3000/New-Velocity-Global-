/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Finance Lease Analysis");
    record0.set("description", "Master finance lease analysis and accounting. Learn lease accounting standards (IFRS 16, ASC 842), lease valuation methods, financial statement impact, and advanced analysis techniques. Develop skills to analyze leases, prepare financial statements, and ensure compliance with accounting standards.");
    record0.set("instructor_name", "Leasing Professionals Academy");
    record0.set("price", 1);
    record0.set("duration_hours", 7);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})