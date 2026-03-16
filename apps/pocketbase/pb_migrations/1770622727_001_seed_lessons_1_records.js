/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("title", "Credit Analysis & Tenant Evaluation");
    record0.set("course_id", "cly8q5h2k000008l8g5z5g5z5");
    record0.set("description", "Financial statement analysis, credit scoring, tenant creditworthiness assessment, debt-to-income ratios, payment history evaluation");
    record0.set("order", 2);
    record0.set("content_type", "text");
    record0.set("duration", 50);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})