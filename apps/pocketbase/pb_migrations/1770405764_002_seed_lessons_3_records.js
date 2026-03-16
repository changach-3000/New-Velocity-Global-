/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "{{COURSE_ID}}");
    record0.set("title", "The Lease vs. Buy Decision (Advanced)");
    record0.set("description", "Master NPV and IRR analysis for lease vs. buy decisions, evaluate opportunity cost of tied-up capital, compare financing options quantitatively");
    record0.set("order", 1);
    record0.set("duration", 60);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "{{COURSE_ID}}");
    record1.set("title", "Synthetic Lease Engineering");
    record1.set("description", "Understand synthetic lease structures and dual benefits, analyze tax ownership vs. accounting ownership, evaluate risk/reward of off-balance-sheet debt");
    record1.set("order", 2);
    record1.set("duration", 60);
    record1.set("content_type", "text");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "{{COURSE_ID}}");
    record2.set("title", "Sale and Leaseback (SLB) for Liquidity");
    record2.set("description", "Understand SLB mechanics and liquidity benefits, evaluate SLB for funding M&A transactions, analyze financial impact on balance sheet and cash flow");
    record2.set("order", 3);
    record2.set("duration", 60);
    record2.set("content_type", "text");
  app.save(record2);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})