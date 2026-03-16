/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "<COURSE_ID>");
    record0.set("title", "Financial Value - Cash Flow, Capital, and WACC");
    record0.set("description", "Understand the financial benefits of leasing, master cash flow analysis and optimization, explain WACC and capital structure optimization, and demonstrate financial value through quantitative analysis");
    record0.set("order", 3);
    record0.set("duration", 60);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "<COURSE_ID>");
    record1.set("title", "Operational Value - Simplifying the Asset Lifecycle");
    record1.set("description", "Understand operational benefits of leasing, master lifecycle management and cost reduction, demonstrate operational value through case studies, and build compelling operational value propositions");
    record1.set("order", 4);
    record1.set("duration", 60);
    record1.set("content_type", "text");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "<COURSE_ID>");
    record2.set("title", "Strategic Value - Scaling, Agility, and Competitive Advantage");
    record2.set("description", "Understand strategic benefits of leasing, master scaling and agility strategies, demonstrate competitive advantage through leasing, and build compelling strategic value propositions");
    record2.set("order", 5);
    record2.set("duration", 60);
    record2.set("content_type", "text");
  app.save(record2);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})