/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "Fundamentals of Equipment Leasing and Tax Treatment");
    record0.set("description", "Understand operating vs. capital leases, tax treatment, ASC 842/IFRS 16 impact, and tax planning opportunities");
    record0.set("order", 1);
    record0.set("duration", 60);
    record0.set("content_type", "video");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "pbc_9676646180");
    record1.set("title", "Depreciation Strategies and Bonus Depreciation");
    record1.set("description", "Master MACRS depreciation, bonus depreciation rules, Section 179 expensing, and depreciation timing strategies");
    record1.set("order", 2);
    record1.set("duration", 60);
    record1.set("content_type", "video");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "pbc_9676646180");
    record2.set("title", "Interest Deduction Optimization");
    record2.set("description", "Understand interest deduction rules, Section 163(j) limitations, and optimize financing structure");
    record2.set("order", 3);
    record2.set("duration", 60);
    record2.set("content_type", "video");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("course_id", "pbc_9676646180");
    record3.set("title", "Lease Classification and Accounting Treatment");
    record3.set("description", "Master lease classification criteria, operating vs. finance lease accounting, and tax vs. accounting differences");
    record3.set("order", 4);
    record3.set("duration", 60);
    record3.set("content_type", "video");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("course_id", "pbc_9676646180");
    record4.set("title", "Sale-Leaseback Transactions and Tax Planning");
    record4.set("description", "Understand sale-leaseback transactions, tax treatment, and optimization strategies");
    record4.set("order", 5);
    record4.set("duration", 60);
    record4.set("content_type", "video");
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("course_id", "pbc_9676646180");
    record5.set("title", "Pass-Through Entity Considerations");
    record5.set("description", "Master pass-through entity taxation, QBI deduction, passive activity limitations, and entity structure optimization");
    record5.set("order", 6);
    record5.set("duration", 60);
    record5.set("content_type", "video");
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("course_id", "pbc_9676646180");
    record6.set("title", "Compliance, Documentation, and Audit Considerations");
    record6.set("description", "Understand tax compliance requirements, documentation best practices, audit risk factors, and uncertain tax positions");
    record6.set("order", 7);
    record6.set("duration", 60);
    record6.set("content_type", "video");
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("course_id", "pbc_9676646180");
    record7.set("title", "Advanced Tax Strategies and Case Studies (Bonus)");
    record7.set("description", "Explore advanced tax strategies including leveraged leases, cross-border leases, synthetic leases, and real-world case studies");
    record7.set("order", 8);
    record7.set("duration", 30);
    record7.set("content_type", "video");
  app.save(record7);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})