/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lesson_resources");

  const record0 = new Record(collection);
    record0.set("lesson_id", "lesson1");
    record0.set("resource_name", "Leasing Fundamentals Guide");
    record0.set("resource_type", "guide");
    record0.set("description", "Comprehensive PDF guide covering leasing basics, history, and importance");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("lesson_id", "lesson2");
    record1.set("resource_name", "Operating vs Finance Lease Comparison Chart");
    record1.set("resource_type", "reference");
    record1.set("description", "Detailed comparison chart of operating and finance lease characteristics");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("lesson_id", "lesson3");
    record2.set("resource_name", "IFRS 16 & ASC 842 Summary");
    record2.set("resource_type", "guide");
    record2.set("description", "Summary of key accounting standards for lease recognition and measurement");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("lesson_id", "lesson4");
    record3.set("resource_name", "Lease Valuation Calculator Template");
    record3.set("resource_type", "template");
    record3.set("description", "Excel template for calculating lease payments and present value");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("lesson_id", "lesson5");
    record4.set("resource_name", "Real-World Case Studies");
    record4.set("resource_type", "reference");
    record4.set("description", "Case studies showing lease structures across different industries");
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("lesson_id", "lesson6");
    record5.set("resource_name", "Regulatory Compliance Checklist");
    record5.set("resource_type", "guide");
    record5.set("description", "Checklist of compliance requirements and disclosure obligations");
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("lesson_id", "lesson7");
    record6.set("resource_name", "Lease Negotiation Checklist");
    record6.set("resource_type", "template");
    record6.set("description", "Practical checklist for negotiating favorable lease terms");
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("lesson_id", "lesson8");
    record7.set("resource_name", "Common Mistakes Reference Guide");
    record7.set("resource_type", "guide");
    record7.set("description", "Guide highlighting common errors and how to avoid them");
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("lesson_id", "lesson9");
    record8.set("resource_name", "Lease Analysis Template");
    record8.set("resource_type", "template");
    record8.set("description", "Template for comprehensive lease analysis and documentation");
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("lesson_id", "lesson10");
    record9.set("resource_name", "Course Study Guide & Glossary");
    record9.set("resource_type", "guide");
    record9.set("description", "Complete study guide with key terms, concepts, and recommended reading");
  app.save(record9);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})