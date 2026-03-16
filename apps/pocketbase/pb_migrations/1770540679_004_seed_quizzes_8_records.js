/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quizzes");

  const record0 = new Record(collection);
    record0.set("lesson_id", "pbc_3963162141");
    record0.set("title", "Lesson 1: Fundamentals Quiz");
    record0.set("passing_score", 70);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("lesson_id", "pbc_3963162141");
    record1.set("title", "Lesson 2: Depreciation Strategies Quiz");
    record1.set("passing_score", 70);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("lesson_id", "pbc_3963162141");
    record2.set("title", "Lesson 3: Interest Deduction Quiz");
    record2.set("passing_score", 70);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("lesson_id", "pbc_3963162141");
    record3.set("title", "Lesson 4: Lease Classification Quiz");
    record3.set("passing_score", 70);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("lesson_id", "pbc_3963162141");
    record4.set("title", "Lesson 5: Sale-Leaseback Quiz");
    record4.set("passing_score", 70);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("lesson_id", "pbc_3963162141");
    record5.set("title", "Lesson 6: Pass-Through Entity Quiz");
    record5.set("passing_score", 70);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("lesson_id", "pbc_3963162141");
    record6.set("title", "Lesson 7: Compliance Quiz");
    record6.set("passing_score", 70);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("lesson_id", "pbc_3963162141");
    record7.set("title", "Lesson 8: Advanced Strategies Quiz");
    record7.set("passing_score", 70);
  app.save(record7);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})