/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Credit Analysis in Leasing");
    record0.set("description", "Master credit analysis techniques for leasing. Learn to assess creditworthiness, analyze financial statements, evaluate credit risk, and make informed credit decisions. Develop skills in credit scoring, risk assessment, and portfolio management to minimize default risk and maximize profitability.");
    record0.set("instructor_name", "Leasing Professionals Academy");
    record0.set("price", 1);
    record0.set("duration_hours", 7);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})