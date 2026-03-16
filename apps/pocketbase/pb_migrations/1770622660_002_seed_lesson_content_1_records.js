/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lesson_content");

  const record0 = new Record(collection);
    record0.set("lesson_id", "cly8q5h2k000008l8g5z5g5z5");
    record0.set("content_body", "Overview of credit risk, residual risk, operational risk, and market risk in equipment leasing. This lesson covers: 1) Credit Risk - the risk of borrower default, 2) Residual Risk - uncertainty in equipment value at lease end, 3) Operational Risk - risks from equipment maintenance and downtime, 4) Market Risk - risks from market fluctuations affecting equipment value");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})