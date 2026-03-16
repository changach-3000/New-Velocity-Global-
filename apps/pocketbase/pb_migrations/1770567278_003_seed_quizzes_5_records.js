/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quizzes");

  const record0 = new Record(collection);
    record0.set("lesson_id", "pbc_3963162141");
    record0.set("title", "Market Analysis & Trend Forecasting Quiz");
    record0.set("passing_score", 70);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("lesson_id", "pbc_3963162141");
    record1.set("title", "Strategic Lease Planning & Portfolio Management Quiz");
    record1.set("passing_score", 70);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("lesson_id", "pbc_3963162141");
    record2.set("title", "Lease Optimization Techniques Quiz");
    record2.set("passing_score", 70);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("lesson_id", "pbc_3963162141");
    record3.set("title", "Technology & Digital Solutions Quiz");
    record3.set("passing_score", 70);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("lesson_id", "pbc_3963162141");
    record4.set("title", "Global Leasing Markets & International Strategies Quiz");
    record4.set("passing_score", 70);
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})