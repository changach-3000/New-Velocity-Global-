/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "{{course_id}}");
    record0.set("title", "What is Leasing?");
    record0.set("description", "Introduction to leasing concepts, history, and importance");
    record0.set("order", 1);
    record0.set("duration", 15);
    record0.set("content_type", "video");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "{{course_id}}");
    record1.set("title", "Types of Leases");
    record1.set("description", "Operating leases vs. Finance leases, comparison table");
    record1.set("order", 2);
    record1.set("duration", 20);
    record1.set("content_type", "text");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "{{course_id}}");
    record2.set("title", "Lease Accounting Basics");
    record2.set("description", "Introduction to lease accounting standards (IFRS 16, ASC 842)");
    record2.set("order", 3);
    record2.set("duration", 25);
    record2.set("content_type", "video");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("course_id", "{{course_id}}");
    record3.set("title", "Lease Valuation & Analysis");
    record3.set("description", "How to calculate lease payments, present value, and analyze lease terms");
    record3.set("order", 4);
    record3.set("duration", 30);
    record3.set("content_type", "text");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("course_id", "{{course_id}}");
    record4.set("title", "Real-World Lease Structures");
    record4.set("description", "Examples of different lease structures in various industries");
    record4.set("order", 5);
    record4.set("duration", 20);
    record4.set("content_type", "video");
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("course_id", "{{course_id}}");
    record5.set("title", "Compliance & Regulatory Requirements");
    record5.set("description", "Regulatory landscape, disclosure requirements, audit considerations");
    record5.set("order", 6);
    record5.set("duration", 15);
    record5.set("content_type", "text");
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("course_id", "{{course_id}}");
    record6.set("title", "Lease Negotiation & Best Practices");
    record6.set("description", "Tips for negotiating favorable lease terms, red flags, best practices");
    record6.set("order", 7);
    record6.set("duration", 20);
    record6.set("content_type", "text");
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("course_id", "{{course_id}}");
    record7.set("title", "Common Mistakes & Pitfalls");
    record7.set("description", "Common errors in lease accounting and analysis");
    record7.set("order", 8);
    record7.set("duration", 15);
    record7.set("content_type", "video");
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("course_id", "{{course_id}}");
    record8.set("title", "Practical Exercise - Full Lease Analysis");
    record8.set("description", "Comprehensive assignment analyzing a complete lease scenario");
    record8.set("order", 9);
    record8.set("duration", 45);
    record8.set("content_type", "assignment");
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("course_id", "{{course_id}}");
    record9.set("title", "Course Summary & Next Steps");
    record9.set("description", "Review of key concepts, resources for further learning");
    record9.set("order", 10);
    record9.set("duration", 10);
    record9.set("content_type", "text");
  app.save(record9);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})