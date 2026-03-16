/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quizzes");

  const record0 = new Record(collection);
    record0.set("lesson_id", "advanced_lesson_8");
    record0.set("title", "Advanced Structures Quiz");
    record0.set("passing_score", 70);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("lesson_id", "advanced_lesson_8_quiz_2");
    record1.set("title", "Tax & Risk Quiz");
    record1.set("passing_score", 75);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("lesson_id", "lease_accounting_lesson_8");
    record2.set("title", "IFRS 16 Fundamentals");
    record2.set("passing_score", 75);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("lesson_id", "lease_accounting_lesson_8_quiz_2");
    record3.set("title", "ASC 842 Requirements");
    record3.set("passing_score", 75);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("lesson_id", "lease_accounting_lesson_8_quiz_3");
    record4.set("title", "Accounting & Compliance");
    record4.set("passing_score", 80);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("lesson_id", "practical_lesson_7");
    record5.set("title", "Lease Analysis Quiz");
    record5.set("passing_score", 70);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("lesson_id", "practical_lesson_7_quiz_2");
    record6.set("title", "Decision-Making Quiz");
    record6.set("passing_score", 70);
  app.save(record6);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})