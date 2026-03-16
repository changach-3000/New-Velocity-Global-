/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("study_guides");

  const record0 = new Record(collection);
    record0.set("title", "Lease Fundamentals Glossary");
    record0.set("lesson_id", "{{lesson_id_1}}");
    record0.set("part_number", 1);
    record0.set("content_type", "glossary");
    record0.set("description", "Key terms and definitions for lease fundamentals");
    record0.set("content_summary", "Comprehensive glossary covering lease definitions, types, and legal framework");
    record0.set("terms_count", 15);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("title", "Financial Analysis Glossary");
    record1.set("lesson_id", "{{lesson_id_2}}");
    record1.set("part_number", 2);
    record1.set("content_type", "glossary");
    record1.set("description", "Key terms for financial analysis and valuation");
    record1.set("content_summary", "Glossary of financial analysis terms and valuation methods");
    record1.set("terms_count", 15);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("title", "Negotiation Strategies Glossary");
    record2.set("lesson_id", "{{lesson_id_3}}");
    record2.set("part_number", 3);
    record2.set("content_type", "glossary");
    record2.set("description", "Key terms for negotiation and deal structuring");
    record2.set("content_summary", "Glossary of negotiation strategies and deal structure terms");
    record2.set("terms_count", 15);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("title", "Tax & Accounting Glossary");
    record3.set("lesson_id", "{{lesson_id_4}}");
    record3.set("part_number", 4);
    record3.set("content_type", "glossary");
    record3.set("description", "Key terms for tax and accounting treatment");
    record3.set("content_summary", "Glossary of tax and accounting terms for lease treatment");
    record3.set("terms_count", 15);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("title", "Risk Management Glossary");
    record4.set("lesson_id", "{{lesson_id_5}}");
    record4.set("part_number", 1);
    record4.set("content_type", "glossary");
    record4.set("description", "Key terms for risk management and dispute resolution");
    record4.set("content_summary", "Glossary of risk management and dispute resolution terms");
    record4.set("terms_count", 15);
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})