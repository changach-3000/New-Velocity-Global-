/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quizzes");

  const record0 = new Record(collection);
    record0.set("lesson_id", "pbc_lesson_7");
    record0.set("title", "IFRS 16 vs. ASC 842 Comparison Quiz");
    record0.set("passing_score", 70);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})