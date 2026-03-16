/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quizzes");

  const record0 = new Record(collection);
    record0.set("lesson_id", "<LESSON_1_1_ID>");
    record0.set("title", "Securitization Fundamentals Quiz");
    record0.set("passing_score", 70);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("lesson_id", "<LESSON_2_2_ID>");
    record1.set("title", "Lease Securitization Mechanics Quiz");
    record1.set("passing_score", 70);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("lesson_id", "<LESSON_3_2_ID>");
    record2.set("title", "Advanced Topics and Implementation Quiz");
    record2.set("passing_score", 70);
  app.save(record2);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})