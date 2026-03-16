/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quizzes");

  const record0 = new Record(collection);
    record0.set("lesson_id", "LESSON_1_ID");
    record0.set("title", "Lease Structures Quiz");
    record0.set("passing_score", 70);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("lesson_id", "LESSON_2_ID");
    record1.set("title", "Financial Modeling Quiz");
    record1.set("passing_score", 70);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("lesson_id", "LESSON_3_ID");
    record2.set("title", "Complex Arrangements Quiz");
    record2.set("passing_score", 70);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("lesson_id", "LESSON_4_ID");
    record3.set("title", "Deal Structuring Quiz");
    record3.set("passing_score", 70);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("lesson_id", "LESSON_5_ID");
    record4.set("title", "Valuation Fundamentals Quiz");
    record4.set("passing_score", 70);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("lesson_id", "LESSON_6_ID");
    record5.set("title", "Advanced Valuation Quiz");
    record5.set("passing_score", 70);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("lesson_id", "LESSON_7_ID");
    record6.set("title", "Economic Analysis Quiz");
    record6.set("passing_score", 70);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("lesson_id", "LESSON_8_ID");
    record7.set("title", "Benchmarking Quiz");
    record7.set("passing_score", 70);
  app.save(record7);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})