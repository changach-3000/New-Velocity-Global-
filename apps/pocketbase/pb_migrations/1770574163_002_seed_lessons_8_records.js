/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "course_1");
    record0.set("title", "Introduction to Lease Structures");
    record0.set("order", 1);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "course_1");
    record1.set("title", "Financial Modeling Fundamentals");
    record1.set("order", 2);
    record1.set("content_type", "text");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "course_1");
    record2.set("title", "Risk Assessment in Leasing");
    record2.set("order", 3);
    record2.set("content_type", "text");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("course_id", "course_1");
    record3.set("title", "Advanced Structuring Strategies");
    record3.set("order", 4);
    record3.set("content_type", "text");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("course_id", "course_2");
    record4.set("title", "Valuation Methods Overview");
    record4.set("order", 1);
    record4.set("content_type", "text");
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("course_id", "course_2");
    record5.set("title", "Economic Modeling Techniques");
    record5.set("order", 2);
    record5.set("content_type", "text");
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("course_id", "course_2");
    record6.set("title", "NPV and IRR Analysis");
    record6.set("order", 3);
    record6.set("content_type", "text");
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("course_id", "course_2");
    record7.set("title", "Comparative Lease Analysis");
    record7.set("order", 4);
    record7.set("content_type", "text");
  app.save(record7);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})