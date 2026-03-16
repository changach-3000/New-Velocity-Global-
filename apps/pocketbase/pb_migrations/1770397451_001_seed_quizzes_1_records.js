/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quizzes");

  const record0 = new Record(collection);
    record0.set("title", "Introduction to Leasing - Final Assessment");
    record0.set("lesson_id", "final_quiz_lesson");
    record0.set("passing_score", 80);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})