/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "ASC 840 vs. ASC 842");
    record0.set("description", "Master differences between ASC 840 and ASC 842, Understand transition from ASC 840 to ASC 842, Develop comparative analysis skills, Apply knowledge to US scenarios");
    record0.set("order", 6);
    record0.set("duration", 60);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "pbc_9676646180");
    record1.set("title", "ASC 842 Implementation in US");
    record1.set("description", "Master ASC 842 implementation in US, Understand public vs. private company timelines, Develop implementation strategies, Apply knowledge to US scenarios");
    record1.set("order", 7);
    record1.set("duration", 60);
    record1.set("content_type", "text");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "pbc_9676646180");
    record2.set("title", "US GAAP Specific Considerations");
    record2.set("description", "Master US GAAP specific lease accounting considerations, Understand SEC requirements, Develop knowledge of US-specific issues, Apply knowledge to US scenarios");
    record2.set("order", 8);
    record2.set("duration", 30);
    record2.set("content_type", "text");
  app.save(record2);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})