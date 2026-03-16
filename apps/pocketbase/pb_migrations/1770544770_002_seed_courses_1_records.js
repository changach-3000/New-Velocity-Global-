/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Vendor Leasing: Comprehensive Guide to Vendor-Provided Equipment Financing");
    record0.set("description", "8-hour comprehensive course on vendor leasing, captive finance, lease evaluation, accounting, risk management, negotiation, and best practices");
    record0.set("duration", 8);
    record0.set("level", "Intermediate");
    record0.set("targetAudience", "Equipment managers, procurement specialists, finance professionals, business owners, vendor managers");
    record0.set("courseCode", "VL-101");
    record0.set("instructor_name", "Vendor Leasing Expert");
    record0.set("price", 299);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})