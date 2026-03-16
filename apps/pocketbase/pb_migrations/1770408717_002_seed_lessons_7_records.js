/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "{{COURSE_ID}}");
    record0.set("title", "From Debt to Utility - Shifting Client Mindset");
    record0.set("order", 1);
    record0.set("duration", 60);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "{{COURSE_ID}}");
    record1.set("title", "Identifying and Overcoming Psychological Barriers");
    record1.set("order", 2);
    record1.set("duration", 60);
    record1.set("content_type", "text");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "{{COURSE_ID}}");
    record2.set("title", "Financial Value - Cash Flow, Capital, and WACC");
    record2.set("order", 3);
    record2.set("duration", 60);
    record2.set("content_type", "text");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("course_id", "{{COURSE_ID}}");
    record3.set("title", "Operational Value - Simplifying the Asset Lifecycle");
    record3.set("order", 4);
    record3.set("duration", 60);
    record3.set("content_type", "text");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("course_id", "{{COURSE_ID}}");
    record4.set("title", "Strategic Value - Scaling, Agility, and Competitive Advantage");
    record4.set("order", 5);
    record4.set("duration", 30);
    record4.set("content_type", "text");
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("course_id", "{{COURSE_ID}}");
    record5.set("title", "Industry-Specific Value Propositions");
    record5.set("order", 6);
    record5.set("duration", 90);
    record5.set("content_type", "text");
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("course_id", "{{COURSE_ID}}");
    record6.set("title", "Overcoming Objections & Closing the Deal");
    record6.set("order", 7);
    record6.set("duration", 60);
    record6.set("content_type", "text");
  app.save(record6);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})