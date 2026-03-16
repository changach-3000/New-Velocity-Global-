/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "{{courses_0}}");
    record0.set("title", "Fundamentals of Equipment Leasing and Tax Treatment");
    record0.set("description", "Operating vs. Capital Leases, Tax Treatment, ASC 842 Impact, Tax Planning Opportunities");
    record0.set("order", 1);
    record0.set("duration", 60);
    record0.set("content_type", "video");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "{{courses_0}}");
    record1.set("title", "Depreciation Strategies and Bonus Depreciation");
    record1.set("description", "MACRS Depreciation System, Bonus Depreciation, Section 179 Expensing, Depreciation Timing Strategies");
    record1.set("order", 2);
    record1.set("duration", 60);
    record1.set("content_type", "video");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "{{courses_0}}");
    record2.set("title", "Interest Deduction Optimization");
    record2.set("description", "Interest Deduction Fundamentals, Section 163(j) Limitation, Optimization Strategies, Debt vs. Equity");
    record2.set("order", 3);
    record2.set("duration", 60);
    record2.set("content_type", "video");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("course_id", "{{courses_0}}");
    record3.set("title", "Lease Classification and Accounting Treatment");
    record3.set("description", "Lease Classification Criteria, Operating Lease Accounting, Finance Lease Accounting, Tax vs. Accounting Differences");
    record3.set("order", 4);
    record3.set("duration", 60);
    record3.set("content_type", "video");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("course_id", "{{courses_0}}");
    record4.set("title", "Sale-Leaseback Transactions and Tax Planning");
    record4.set("description", "Sale-Leaseback Overview, Tax Treatment, Tax Planning Opportunities, Regulatory Considerations");
    record4.set("order", 5);
    record4.set("duration", 60);
    record4.set("content_type", "video");
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("course_id", "{{courses_0}}");
    record5.set("title", "Pass-Through Entity Considerations");
    record5.set("description", "Pass-Through Entity Taxation, QBI Deduction, Passive Activity Limitations, Entity Structure Optimization");
    record5.set("order", 6);
    record5.set("duration", 60);
    record5.set("content_type", "video");
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("course_id", "{{courses_0}}");
    record6.set("title", "Compliance, Documentation, and Audit Considerations");
    record6.set("description", "Tax Compliance Requirements, Documentation Requirements, Audit Risk Factors, Uncertain Tax Positions");
    record6.set("order", 7);
    record6.set("duration", 60);
    record6.set("content_type", "video");
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("course_id", "{{courses_0}}");
    record7.set("title", "Advanced Tax Strategies and Case Studies (Bonus)");
    record7.set("description", "Advanced Strategies, Real-World Case Studies, Emerging Issues, Comprehensive Tax Strategy Development");
    record7.set("order", 8);
    record7.set("duration", 30);
    record7.set("content_type", "video");
  app.save(record7);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})