/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("title", "Risk Identification & Classification");
    record0.set("course_id", "cly8q5h2k000008l8g5z5g5z5");
    record0.set("description", "Overview of credit risk, residual risk, operational risk, and market risk in equipment leasing");
    record0.set("order", 1);
    record0.set("content_type", "text");
    record0.set("duration", 45);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})