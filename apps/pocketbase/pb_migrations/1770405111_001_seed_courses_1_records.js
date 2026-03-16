/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Advanced Leasing Strategies");
    record0.set("description", "A comprehensive advanced course covering strategic capital management, tax optimization, risk mitigation, and next-generation leasing strategies for enterprise-level asset management.");
    record0.set("instructor_name", "Corporate Finance Expert");
    record0.set("price", 99.99);
    record0.set("duration_hours", 12);
    record0.set("learning_outcomes", "Master advanced lease vs. buy analysis, synthetic lease engineering, and sale-leaseback strategies for enterprise asset management");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})