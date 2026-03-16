/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "PART 1: STRATEGIC FOUNDATIONS & MARKET ANALYSIS");
    record0.set("description", "2-hour part covering leasing strategy fundamentals and market analysis");
    record0.set("order", 1);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "pbc_9676646180");
    record1.set("title", "LESSON 1.1: Leasing Strategy Fundamentals");
    record1.set("description", "60-minute lesson on strategic planning in leasing, strategy development frameworks, types of leasing strategies (cost leadership, differentiation, focus, growth), SWOT analysis, and building competitive advantage. Includes case study of StrategyLeasing Inc.");
    record1.set("order", 1);
    record1.set("content_type", "text");
    record1.set("duration", 60);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "pbc_9676646180");
    record2.set("title", "LESSON 1.2: Market Analysis and Competitive Positioning");
    record2.set("description", "60-minute lesson on market analysis framework, competitive positioning strategies, market segmentation approaches, and case study of MarketLeasing Inc. developing positioning strategy.");
    record2.set("order", 2);
    record2.set("content_type", "text");
    record2.set("duration", 60);
  app.save(record2);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})