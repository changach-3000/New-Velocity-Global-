/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quizzes");

  const record0 = new Record(collection);
    record0.set("lesson_id", "lesson_3_1");
    record0.set("title", "Securitization Fundamentals");
    record0.set("passing_score", 70);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("lesson_id", "lesson_3_2");
    record1.set("title", "Lease Securitization Mechanics");
    record1.set("passing_score", 70);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("lesson_id", "lesson_3_3");
    record2.set("title", "Advanced Topics and Implementation");
    record2.set("passing_score", 70);
  app.save(record2);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})