/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Advanced Lease Structuring");
    record0.set("description", "Master advanced lease structuring techniques and strategies. Learn how to structure complex leases for optimal financial outcomes. Understand residual value management, payment optimization, tax-efficient structures, sale-leaseback transactions, leveraged leases, syndication, and international leasing. Explore specialized structures, documentation requirements, accounting treatment, compliance, and risk management. Includes real-world case studies, financial modeling, and best practices for structuring sophisticated lease transactions. Perfect for professionals seeking to advance their lease structuring expertise.");
    record0.set("instructor_name", "Leasing Professionals Academy");
    record0.set("price", 1);
    record0.set("duration_hours", 12);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})