/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "<PART_2_COURSE_ID>");
    record0.set("title", "Tax Optimization Strategies");
    record0.set("description", "Master tax-efficient lease structuring including operating vs finance lease optimization, international tax considerations, and case studies. Learn strategies to minimize tax liability and maximize deductions.");
    record0.set("order", 1);
    record0.set("content_type", "text");
    record0.set("duration", 60);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "<PART_2_COURSE_ID>");
    record1.set("title", "Accounting Optimization and Financial Engineering");
    record1.set("description", "Explore ASC 842 and IFRS 16 optimization techniques, financial ratio management, and advanced financial engineering strategies including synthetic leases and securitization.");
    record1.set("order", 2);
    record1.set("content_type", "text");
    record1.set("duration", 60);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "<PART_2_COURSE_ID>");
    record2.set("title", "Advanced Structuring and Financial Strategies");
    record2.set("description", "Learn leveraged lease structures, syndication approaches, securitization techniques, and residual value management strategies for complex multi-investor lease portfolios.");
    record2.set("order", 3);
    record2.set("content_type", "text");
    record2.set("duration", 60);
  app.save(record2);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})