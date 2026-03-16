/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "vendor-leasing-101");
    record0.set("order", 1);
    record0.set("title", "Introduction to Vendor Leasing");
    record0.set("description", "Fundamentals of vendor leasing, key concepts, and industry overview");
    record0.set("content_type", "video");
    record0.set("duration", 45);
    record0.set("learning_objectives", ["Understand vendor leasing basics", "Identify key stakeholders", "Recognize lease types"]);
    record0.set("prerequisites", []);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "vendor-leasing-101");
    record1.set("order", 2);
    record1.set("title", "Lease Agreement Structures");
    record1.set("description", "Deep dive into lease agreement components, terms, and conditions");
    record1.set("content_type", "text");
    record1.set("duration", 60);
    record1.set("learning_objectives", ["Analyze lease agreements", "Identify critical clauses", "Understand payment terms"]);
    record1.set("prerequisites", ["Lesson 1"]);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "vendor-leasing-101");
    record2.set("order", 3);
    record2.set("title", "Financial Analysis and Valuation");
    record2.set("description", "Methods for analyzing lease costs and determining fair value");
    record2.set("content_type", "text");
    record2.set("duration", 50);
    record2.set("learning_objectives", ["Calculate lease costs", "Perform NPV analysis", "Evaluate lease vs buy"]);
    record2.set("prerequisites", ["Lesson 1", "Lesson 2"]);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("course_id", "vendor-leasing-101");
    record3.set("order", 4);
    record3.set("title", "Risk Management in Leasing");
    record3.set("description", "Identifying and mitigating risks in vendor leasing transactions");
    record3.set("content_type", "video");
    record3.set("duration", 55);
    record3.set("learning_objectives", ["Identify lease risks", "Develop mitigation strategies", "Manage counterparty risk"]);
    record3.set("prerequisites", ["Lesson 2", "Lesson 3"]);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("course_id", "vendor-leasing-101");
    record4.set("order", 5);
    record4.set("title", "Regulatory Compliance and Accounting");
    record4.set("description", "ASC 842, IFRS 16, and compliance requirements for lease accounting");
    record4.set("content_type", "text");
    record4.set("duration", 65);
    record4.set("learning_objectives", ["Understand ASC 842 requirements", "Apply IFRS 16 standards", "Ensure regulatory compliance"]);
    record4.set("prerequisites", ["Lesson 1", "Lesson 3"]);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("course_id", "vendor-leasing-101");
    record5.set("order", 6);
    record5.set("title", "Vendor Negotiation Strategies");
    record5.set("description", "Effective negotiation techniques and best practices for lease terms");
    record5.set("content_type", "text");
    record5.set("duration", 50);
    record5.set("learning_objectives", ["Develop negotiation skills", "Identify leverage points", "Achieve favorable terms"]);
    record5.set("prerequisites", ["Lesson 2", "Lesson 4"]);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("course_id", "vendor-leasing-101");
    record6.set("order", 7);
    record6.set("title", "Technology and Lease Management Systems");
    record6.set("description", "Modern tools and systems for managing lease portfolios");
    record6.set("content_type", "video");
    record6.set("duration", 55);
    record6.set("learning_objectives", ["Evaluate lease management software", "Implement tracking systems", "Automate lease processes"]);
    record6.set("prerequisites", ["Lesson 1", "Lesson 5"]);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("course_id", "vendor-leasing-101");
    record7.set("order", 8);
    record7.set("title", "Case Studies and Real-World Applications");
    record7.set("description", "Practical applications and lessons from real vendor leasing scenarios");
    record7.set("content_type", "text");
    record7.set("duration", 70);
    record7.set("learning_objectives", ["Apply concepts to real scenarios", "Analyze complex transactions", "Develop strategic solutions"]);
    record7.set("prerequisites", ["Lesson 1", "Lesson 2", "Lesson 3", "Lesson 4", "Lesson 5", "Lesson 6", "Lesson 7"]);
  app.save(record7);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})