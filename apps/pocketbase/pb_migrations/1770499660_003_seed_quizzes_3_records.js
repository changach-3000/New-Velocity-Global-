/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quizzes");

  const record0 = new Record(collection);
    record0.set("lesson_id", "pbc_lesson_1");
    record0.set("title", "Part 1 Quiz: Historical Evolution of Lease Accounting");
    record0.set("passing_score", 70);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("lesson_id", "pbc_lesson_3");
    record1.set("title", "Part 2 Quiz: International Lease Accounting Standards");
    record1.set("passing_score", 70);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("lesson_id", "pbc_lesson_6");
    record2.set("title", "Part 3 Quiz: US GAAP Lease Accounting Standards");
    record2.set("passing_score", 70);
  app.save(record2);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})