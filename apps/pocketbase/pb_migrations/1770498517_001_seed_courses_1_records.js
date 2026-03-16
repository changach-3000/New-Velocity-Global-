/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Lease Accounting Deep Dive (IFRS 16 & ASC 842)");
    record0.set("description", "Master IFRS 16 and ASC 842 lease accounting standards in depth. Learn comprehensive lessee and lessor accounting, detailed calculations, complex scenarios, and practical implementation. Understand key differences between standards and develop expertise in lease accounting compliance and reporting.");
    record0.set("instructor_name", "Leasing Professionals Academy");
    record0.set("price", 1);
    record0.set("duration_hours", 7);
    record0.set("learning_outcomes", "Master IFRS 16 and ASC 842 standards, Comprehensive lessee and lessor accounting, Detailed lease calculations, Complex scenario analysis, Practical implementation strategies, Lease accounting compliance, Financial reporting expertise");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})