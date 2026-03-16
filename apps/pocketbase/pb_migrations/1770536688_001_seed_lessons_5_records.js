/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "COURSE_ID_PLACEHOLDER");
    record0.set("title", "Lease Accounting Fundamentals for Finance Professionals");
    record0.set("description", "Master ASC 842 requirements, ROU assets, lease liabilities, and financial statement impact");
    record0.set("order", 1);
    record0.set("duration", 60);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "COURSE_ID_PLACEHOLDER");
    record1.set("title", "Financial Analysis and Decision-Making");
    record1.set("description", "Perform lease vs buy analysis, cash flow analysis, sensitivity analysis, and financial metrics");
    record1.set("order", 2);
    record1.set("duration", 60);
    record1.set("content_type", "text");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "COURSE_ID_PLACEHOLDER");
    record2.set("title", "Financial Statement Management and Reporting");
    record2.set("description", "Manage lease impact on balance sheet, income statement, cash flow, and financial ratios");
    record2.set("order", 3);
    record2.set("duration", 60);
    record2.set("content_type", "text");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("course_id", "COURSE_ID_PLACEHOLDER");
    record3.set("title", "Tax Planning and Optimization");
    record3.set("description", "Optimize lease tax treatment, understand tax vs accounting differences, and maximize tax savings");
    record3.set("order", 4);
    record3.set("duration", 60);
    record3.set("content_type", "text");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("course_id", "COURSE_ID_PLACEHOLDER");
    record4.set("title", "Practical Implementation and Best Practices");
    record4.set("description", "Implement lease portfolio management, controls, technology, and stay current with trends");
    record4.set("order", 5);
    record4.set("duration", 60);
    record4.set("content_type", "text");
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})