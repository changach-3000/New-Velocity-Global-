/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("title", "Risk Mitigation Strategies");
    record0.set("course_id", "cly8q5h2k000008l8g5z5g5z5");
    record0.set("description", "Insurance options, guarantees and warranties, collateral management, portfolio diversification, hedging strategies, contingency planning");
    record0.set("order", 4);
    record0.set("content_type", "text");
    record0.set("duration", 60);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})