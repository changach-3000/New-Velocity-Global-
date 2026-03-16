/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Lease Sales Negotiation Mastery");
    record0.set("description", "Master the art and science of lease sales negotiation. Learn proven negotiation principles, psychology, strategies, and tactics to close more deals and maximize profitability. Includes preparation techniques, objection handling, value creation, closing strategies, and real-world case studies. Develop skills to negotiate with confidence, build strong client relationships, and achieve win-win outcomes in every lease transaction.");
    record0.set("instructor_name", "Leasing Professionals Academy");
    record0.set("price", 1);
    record0.set("duration_hours", 7);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})