/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quizzes");

  const record0 = new Record(collection);
    record0.set("lesson_id", "pbc_3963162141");
    record0.set("title", "Credit Fundamentals & Assessment Quiz");
    record0.set("passing_score", 70);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("lesson_id", "pbc_3963162141");
    record1.set("title", "Financial Analysis & Metrics Quiz");
    record1.set("passing_score", 70);
  app.save(record1);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})