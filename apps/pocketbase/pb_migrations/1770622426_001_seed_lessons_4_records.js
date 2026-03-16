/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "Risk Identification & Classification");
    record0.set("order", 1);
    record0.set("content_type", "text");
    record0.set("duration", 90);
    record0.set("description", "Overview of credit risk, residual risk, operational risk, and market risk in equipment leasing");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "pbc_9676646180");
    record1.set("title", "Credit Analysis & Tenant Evaluation");
    record1.set("order", 2);
    record1.set("content_type", "text");
    record1.set("duration", 90);
    record1.set("description", "Financial statement analysis, credit scoring, and tenant creditworthiness assessment");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "pbc_9676646180");
    record2.set("title", "Residual Value Risk Management");
    record2.set("order", 3);
    record2.set("content_type", "text");
    record2.set("duration", 90);
    record2.set("description", "Residual value estimation, obsolescence risk, and market volatility factors");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("course_id", "pbc_9676646180");
    record3.set("title", "Risk Mitigation Strategies");
    record3.set("order", 4);
    record3.set("content_type", "text");
    record3.set("duration", 90);
    record3.set("description", "Insurance, guarantees, collateral, and diversification strategies");
  app.save(record3);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})