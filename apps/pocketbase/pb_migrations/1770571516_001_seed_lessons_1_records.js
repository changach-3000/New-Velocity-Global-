/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_1014568348");
    record0.set("title", "Advanced Lease Structuring");
    record0.set("description", "Comprehensive guide to advanced lease structuring fundamentals, including triple net leases, percentage leases, ground leases, and master leases. Learn lease term optimization, rent escalation strategies, tenant improvement allowances, renewal options, and default remedies.");
    record0.set("order", 1);
    record0.set("duration", 120);
    record0.set("content_type", "text");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})