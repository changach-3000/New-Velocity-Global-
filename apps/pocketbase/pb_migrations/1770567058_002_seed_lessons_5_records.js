/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "{{course_id_1}}");
    record0.set("title", "Lease Fundamentals & Legal Framework");
    record0.set("description", "Understanding lease definitions, types, and legal requirements");
    record0.set("order", 1);
    record0.set("duration", 8);
    record0.set("content_type", "video");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "{{course_id_1}}");
    record1.set("title", "Financial Analysis & Valuation Methods");
    record1.set("description", "Master NPV, IRR, and lease valuation techniques");
    record1.set("order", 2);
    record1.set("duration", 8);
    record1.set("content_type", "video");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "{{course_id_1}}");
    record2.set("title", "Negotiation Strategies & Deal Structuring");
    record2.set("description", "Advanced negotiation tactics and deal structure optimization");
    record2.set("order", 3);
    record2.set("duration", 8);
    record2.set("content_type", "video");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("course_id", "{{course_id_1}}");
    record3.set("title", "Tax Implications & Accounting Treatment");
    record3.set("description", "Tax planning strategies and ASC 842 compliance");
    record3.set("order", 4);
    record3.set("duration", 8);
    record3.set("content_type", "video");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("course_id", "{{course_id_1}}");
    record4.set("title", "Risk Management & Dispute Resolution");
    record4.set("description", "Identifying risks and resolving lease disputes");
    record4.set("order", 5);
    record4.set("duration", 8);
    record4.set("content_type", "video");
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})