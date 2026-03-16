/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "advanced_lease_structuring_course_id");
    record0.set("title", "Lease Documentation and Legal Structures");
    record0.set("description", "Understand lease documentation requirements, key agreement sections, and legal structures");
    record0.set("order", 4);
    record0.set("content_type", "text");
    record0.set("duration", 60);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "advanced_lease_structuring_course_id");
    record1.set("title", "Accounting Treatment and Compliance");
    record1.set("description", "Understand ASC 842 and IFRS 16 treatment, lease classification, and financial statement impact");
    record1.set("order", 5);
    record1.set("content_type", "text");
    record1.set("duration", 60);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "advanced_lease_structuring_course_id");
    record2.set("title", "Risk Management and Structuring Best Practices");
    record2.set("description", "Understand risk identification, assessment, mitigation strategies, and structuring best practices");
    record2.set("order", 6);
    record2.set("content_type", "text");
    record2.set("duration", 60);
  app.save(record2);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})