/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quizzes");

  const record0 = new Record(collection);
    record0.set("title", "Leasing vs. Buying vs. Renting");
    record0.set("lesson_id", "pbc_lesson_5");
    record0.set("passing_score", 70);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("title", "IFRS 16 & ASC 842 Compliance");
    record1.set("lesson_id", "pbc_lesson_12");
    record1.set("passing_score", 70);
  app.save(record1);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})