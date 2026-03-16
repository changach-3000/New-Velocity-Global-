/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "IAS 17 vs. IFRS 16");
    record0.set("description", "Master differences between IAS 17 and IFRS 16, Understand transition from IAS 17 to IFRS 16, Develop comparative analysis skills, Apply knowledge to international scenarios");
    record0.set("order", 3);
    record0.set("duration", 60);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "pbc_9676646180");
    record1.set("title", "IFRS 16 Global Implementation");
    record1.set("description", "Master IFRS 16 implementation globally, Understand jurisdiction-specific considerations, Develop implementation strategies, Apply knowledge to global scenarios");
    record1.set("order", 4);
    record1.set("duration", 60);
    record1.set("content_type", "text");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "pbc_9676646180");
    record2.set("title", "Other International Standards");
    record2.set("description", "Understand other international lease accounting standards, Master jurisdiction-specific standards, Develop knowledge of non-IFRS standards, Apply knowledge to diverse scenarios");
    record2.set("order", 5);
    record2.set("duration", 30);
    record2.set("content_type", "text");
  app.save(record2);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})