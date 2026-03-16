/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quizzes");

  const record0 = new Record(collection);
    record0.set("lesson_id", "pbc_3963162141");
    record0.set("title", "Lease Accounting Standards Comprehensive Assessment");
    record0.set("passing_score", 75);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})