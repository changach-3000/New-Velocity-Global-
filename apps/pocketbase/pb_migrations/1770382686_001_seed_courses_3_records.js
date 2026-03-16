/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Advanced Leasing Strategies");
    record0.set("description", "Master advanced lease structures, tax implications, and portfolio management");
    record0.set("instructor_name", "Finance Expert");
    record0.set("price", 199);
    record0.set("duration_hours", 5.5);
    record0.set("estimated_hours", 5.5);
    record0.set("learning_outcomes", "Understand sale-leaseback transactions, lease modifications, international leasing, risk analysis");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("title", "Lease Accounting Deep Dive (IFRS 16 & ASC 842)");
    record1.set("description", "Master IFRS 16 and ASC 842 lease accounting standards");
    record1.set("instructor_name", "Accounting Expert");
    record1.set("price", 249);
    record1.set("duration_hours", 4.5);
    record1.set("estimated_hours", 4.5);
    record1.set("learning_outcomes", "Understand lease classification, recognition, measurement, and compliance");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("title", "Practical Leasing for Finance Professionals");
    record2.set("description", "Apply leasing concepts to real-world finance decisions");
    record2.set("instructor_name", "Finance Professional");
    record2.set("price", 149);
    record2.set("duration_hours", 3.5);
    record2.set("estimated_hours", 3.5);
    record2.set("learning_outcomes", "Master lease vs buy analysis, negotiation, and industry-specific applications");
  app.save(record2);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})