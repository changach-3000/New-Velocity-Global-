/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("vendor_leasing_lessons");

  const record0 = new Record(collection);
    record0.set("lessonNumber", 1);
    record0.set("title", "Introduction to Vendor Leasing");
    record0.set("description", "Learn vendor leasing fundamentals, types, and market overview");
    record0.set("duration", 1);
    record0.set("contentType", "video");
    record0.set("learningOutcomes", "Define vendor leasing, compare types, identify key players, understand market overview");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("lessonNumber", 2);
    record1.set("title", "Vendor Financing Programs and Structures");
    record1.set("description", "Understand captive finance, lease structures, and promotional financing");
    record1.set("duration", 1);
    record1.set("contentType", "video");
    record1.set("learningOutcomes", "Understand captive finance, analyze lease structures, evaluate promotional financing");
  app.save(record1);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})