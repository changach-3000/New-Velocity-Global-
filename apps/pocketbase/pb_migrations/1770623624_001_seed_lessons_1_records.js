/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "Practical Implementation");
    record0.set("description", "Journal entries for lease recognition, financial statement presentation, balance sheet impact, income statement impact, cash flow statement treatment, transition guidance, implementation timeline, common pitfalls");
    record0.set("order", 3);
    record0.set("duration", 105);
    record0.set("content_type", "video");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})