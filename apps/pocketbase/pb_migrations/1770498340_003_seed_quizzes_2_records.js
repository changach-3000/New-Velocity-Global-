/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quizzes");

  const record0 = new Record(collection);
    record0.set("lesson_id", "<LESSON_3_1_ID>");
    record0.set("title", "Advanced Lease Analysis Techniques Quiz");
    record0.set("passing_score", 70);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("lesson_id", "<LESSON_3_2_ID>");
    record1.set("title", "Compliance, Reporting, and Best Practices Quiz");
    record1.set("passing_score", 70);
  app.save(record1);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})