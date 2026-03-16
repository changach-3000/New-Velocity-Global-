/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quizzes");

  const record0 = new Record(collection);
    record0.set("lesson_id", "lesson_1_1");
    record0.set("title", "Quiz 1.1: Lease Fundamentals and Types");
    record0.set("passing_score", 70);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("lesson_id", "lesson_1_2");
    record1.set("title", "Quiz 1.2: Lease Accounting and Financial Analysis");
    record1.set("passing_score", 70);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("lesson_id", "lesson_2_1");
    record2.set("title", "Quiz 2.1: Lease Structuring Fundamentals");
    record2.set("passing_score", 70);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("lesson_id", "lesson_2_2");
    record3.set("title", "Quiz 2.2: Advanced Structuring Techniques");
    record3.set("passing_score", 70);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("lesson_id", "lesson_3_1");
    record4.set("title", "Quiz 3.1: Specialized Lease Structures");
    record4.set("passing_score", 70);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("lesson_id", "lesson_3_2");
    record5.set("title", "Quiz 3.2: International and Complex Leasing");
    record5.set("passing_score", 70);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("lesson_id", "lesson_4_1");
    record6.set("title", "Quiz 4.1: Lease Documentation and Compliance");
    record6.set("passing_score", 70);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("lesson_id", "lesson_4_2");
    record7.set("title", "Quiz 4.2: Accounting, Risk Management and Best Practices");
    record7.set("passing_score", 70);
  app.save(record7);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})