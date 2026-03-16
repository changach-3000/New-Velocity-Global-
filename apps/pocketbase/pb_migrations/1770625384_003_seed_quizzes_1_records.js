/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quizzes");

  const record0 = new Record(collection);
    record0.set("lesson_id", "Practical Implementation");
    record0.set("title", "Practical Implementation Quiz");
    record0.set("passing_score", 70);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})