/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quizzes");

  const record0 = new Record(collection);
    record0.set("lesson_id", "{{lesson_id_1}}");
    record0.set("title", "Lease Fundamentals Quiz");
    record0.set("passing_score", 70);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("lesson_id", "{{lesson_id_2}}");
    record1.set("title", "Financial Analysis & Valuation Quiz");
    record1.set("passing_score", 70);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("lesson_id", "{{lesson_id_3}}");
    record2.set("title", "Negotiation Strategies Quiz");
    record2.set("passing_score", 70);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("lesson_id", "{{lesson_id_4}}");
    record3.set("title", "Tax & Accounting Treatment Quiz");
    record3.set("passing_score", 70);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("lesson_id", "{{lesson_id_5}}");
    record4.set("title", "Risk Management Quiz");
    record4.set("passing_score", 70);
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})