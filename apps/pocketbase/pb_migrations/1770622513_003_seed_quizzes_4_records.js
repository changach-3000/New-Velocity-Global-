/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quizzes");

  const record0 = new Record(collection);
    record0.set("lesson_id", "lesson_1_id_placeholder");
    record0.set("title", "Risk Identification & Classification Quiz");
    record0.set("passing_score", 70);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("lesson_id", "lesson_2_id_placeholder");
    record1.set("title", "Credit Analysis & Tenant Evaluation Quiz");
    record1.set("passing_score", 70);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("lesson_id", "lesson_3_id_placeholder");
    record2.set("title", "Residual Value Risk Management Quiz");
    record2.set("passing_score", 70);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("lesson_id", "lesson_4_id_placeholder");
    record3.set("title", "Risk Mitigation Strategies Quiz");
    record3.set("passing_score", 70);
  app.save(record3);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})