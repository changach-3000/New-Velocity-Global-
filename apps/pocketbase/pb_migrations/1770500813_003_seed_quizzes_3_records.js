/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quizzes");

  const record0 = new Record(collection);
    record0.set("lesson_id", "LESSON_6_ID");
    record0.set("title", "Part 1 Quiz: Negotiation Fundamentals");
    record0.set("passing_score", 70);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("lesson_id", "LESSON_7_ID");
    record1.set("title", "Part 2 Quiz: Negotiation Strategies and Tactics");
    record1.set("passing_score", 70);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("lesson_id", "LESSON_8_ID");
    record2.set("title", "Part 3 Quiz: Advanced Negotiation and Closing");
    record2.set("passing_score", 70);
  app.save(record2);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})