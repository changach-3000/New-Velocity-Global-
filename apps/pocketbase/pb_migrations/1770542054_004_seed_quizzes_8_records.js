/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quizzes");

  const record0 = new Record(collection);
    record0.set("lesson_id", "lesson-1-fundamentals");
    record0.set("title", "Lesson 1: Fundamentals of Equipment Leasing Quiz");
    record0.set("passing_score", 70);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("lesson_id", "lesson-2-depreciation");
    record1.set("title", "Lesson 2: Depreciation Optimization Quiz");
    record1.set("passing_score", 70);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("lesson_id", "lesson-3-interest");
    record2.set("title", "Lesson 3: Interest Deduction Maximization Quiz");
    record2.set("passing_score", 70);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("lesson_id", "lesson-4-classification");
    record3.set("title", "Lesson 4: Lease Classification and Accounting Quiz");
    record3.set("passing_score", 70);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("lesson_id", "lesson-5-sale-leaseback");
    record4.set("title", "Lesson 5: Sale-Leaseback Transactions Quiz");
    record4.set("passing_score", 70);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("lesson_id", "lesson-6-pass-through");
    record5.set("title", "Lesson 6: Pass-Through Entity Considerations Quiz");
    record5.set("passing_score", 70);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("lesson_id", "lesson-7-compliance");
    record6.set("title", "Lesson 7: Compliance and Documentation Quiz");
    record6.set("passing_score", 70);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("lesson_id", "lesson-8-advanced");
    record7.set("title", "Lesson 8: Advanced Strategies and Case Studies Quiz");
    record7.set("passing_score", 70);
  app.save(record7);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})