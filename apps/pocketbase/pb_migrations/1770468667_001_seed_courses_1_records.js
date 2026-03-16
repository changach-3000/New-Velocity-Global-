/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Crafting Winning Leases");
    record0.set("description", "Master the art of structuring, pricing, and negotiating winning lease deals. Learn lease fundamentals, financial modeling, pricing strategies, and advanced negotiation techniques to close profitable leases that satisfy both lessor and lessee.");
    record0.set("instructor_name", "Leasing Professionals Academy");
    record0.set("price", 1);
    record0.set("duration_hours", 7);
    record0.set("image_url", "");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})