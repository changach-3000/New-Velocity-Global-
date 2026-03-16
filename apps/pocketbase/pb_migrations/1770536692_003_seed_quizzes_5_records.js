/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quizzes");

  const record0 = new Record(collection);
    record0.set("lesson_id", "LESSON_1_ID_PLACEHOLDER");
    record0.set("title", "Lease Accounting Fundamentals Quiz");
    record0.set("passing_score", 70);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("lesson_id", "LESSON_2_ID_PLACEHOLDER");
    record1.set("title", "Financial Analysis and Decision-Making Quiz");
    record1.set("passing_score", 70);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("lesson_id", "LESSON_3_ID_PLACEHOLDER");
    record2.set("title", "Financial Statement Management and Reporting Quiz");
    record2.set("passing_score", 70);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("lesson_id", "LESSON_4_ID_PLACEHOLDER");
    record3.set("title", "Tax Planning and Optimization Quiz");
    record3.set("passing_score", 70);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("lesson_id", "LESSON_5_ID_PLACEHOLDER");
    record4.set("title", "Practical Implementation and Best Practices Quiz");
    record4.set("passing_score", 70);
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})