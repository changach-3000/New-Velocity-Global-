/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "[COURSE_ID_for_Mastering_Creative_Financing_to_Close_Bigger_Deals]");
    record0.set("title", "Speaking 'CFO' The Financial Mechanics");
    record0.set("description", "Understanding CFO language, financial metrics, and how equipment leasing impacts financial decision-making");
    record0.set("order", 2);
    record0.set("content_type", "text");
    record0.set("duration", 120);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})