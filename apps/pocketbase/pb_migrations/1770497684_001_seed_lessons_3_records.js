/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "PART 3: GROWTH & OPERATIONAL STRATEGIES");
    record0.set("description", "2.5-hour part covering growth and expansion strategies, operational excellence, and strategic implementation");
    record0.set("order", 3);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "pbc_9676646180");
    record1.set("title", "LESSON 3.1: Growth and Expansion Strategies");
    record1.set("description", "90-minute lesson on growth strategy development, market expansion approaches, new product development, and case study of GrowthLeasing Inc. implementing growth strategy to double revenue.");
    record1.set("order", 6);
    record1.set("content_type", "text");
    record1.set("duration", 90);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "pbc_9676646180");
    record2.set("title", "LESSON 3.2: Operational Excellence and Strategic Implementation");
    record2.set("description", "60-minute lesson on operational excellence principles, strategic implementation framework, change management, and case study of OperationalLeasing Inc. implementing operational excellence and growth strategy.");
    record2.set("order", 7);
    record2.set("content_type", "text");
    record2.set("duration", 60);
  app.save(record2);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})