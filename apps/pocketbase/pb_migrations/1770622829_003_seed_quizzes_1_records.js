/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quizzes");

  const record0 = new Record(collection);
    record0.set("lesson_id", "cly8q5h2k000008l8g5z5g5z5");
    record0.set("title", "Residual Value Risk Management Quiz");
    record0.set("passing_score", 60);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})