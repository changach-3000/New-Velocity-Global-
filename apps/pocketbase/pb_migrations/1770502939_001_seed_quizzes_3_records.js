/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quizzes");

  const record0 = new Record(collection);
    record0.set("lesson_id", "LESSON_6_ID");
    record0.set("title", "Fundamentals of Lease vs Buy Decision Quiz");
    record0.set("passing_score", 70);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("lesson_id", "LESSON_7_ID");
    record1.set("title", "Financial Analysis and Comparison Quiz");
    record1.set("passing_score", 70);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("lesson_id", "LESSON_8_ID");
    record2.set("title", "Strategic Considerations and Decision Framework Quiz");
    record2.set("passing_score", 70);
  app.save(record2);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})