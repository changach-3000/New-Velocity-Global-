/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "tax-optimization");
    record0.set("title", "Lesson 1: Fundamentals of Equipment Leasing");
    record0.set("description", "Introduction to equipment leasing basics, types of leases, and tax implications");
    record0.set("order", 1);
    record0.set("duration", 5);
    record0.set("content_type", "video");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "tax-optimization");
    record1.set("title", "Lesson 2: Depreciation Optimization Strategies");
    record1.set("description", "Advanced depreciation methods, bonus depreciation, and Section 179 deductions");
    record1.set("order", 2);
    record1.set("duration", 5);
    record1.set("content_type", "video");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "tax-optimization");
    record2.set("title", "Lesson 3: Interest Deduction Maximization");
    record2.set("description", "Strategies for maximizing interest deductions in lease financing");
    record2.set("order", 3);
    record2.set("duration", 5);
    record2.set("content_type", "video");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("course_id", "tax-optimization");
    record3.set("title", "Lesson 4: Lease Classification and Accounting");
    record3.set("description", "ASC 842 compliance, operating vs capital leases, and tax classification");
    record3.set("order", 4);
    record3.set("duration", 5);
    record3.set("content_type", "video");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("course_id", "tax-optimization");
    record4.set("title", "Lesson 5: Sale-Leaseback Transactions");
    record4.set("description", "Tax-efficient sale-leaseback structures and planning considerations");
    record4.set("order", 5);
    record4.set("duration", 5);
    record4.set("content_type", "video");
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("course_id", "tax-optimization");
    record5.set("title", "Lesson 6: Pass-Through Entity Considerations");
    record5.set("description", "S-Corp, LLC, and partnership implications in equipment leasing");
    record5.set("order", 6);
    record5.set("duration", 5);
    record5.set("content_type", "video");
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("course_id", "tax-optimization");
    record6.set("title", "Lesson 7: Compliance and Documentation");
    record6.set("description", "IRS requirements, documentation standards, and audit defense strategies");
    record6.set("order", 7);
    record6.set("duration", 5);
    record6.set("content_type", "video");
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("course_id", "tax-optimization");
    record7.set("title", "Lesson 8: Advanced Strategies and Case Studies");
    record7.set("description", "Complex scenarios, multi-jurisdictional planning, and real-world applications");
    record7.set("order", 8);
    record7.set("duration", 5);
    record7.set("content_type", "video");
  app.save(record7);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})