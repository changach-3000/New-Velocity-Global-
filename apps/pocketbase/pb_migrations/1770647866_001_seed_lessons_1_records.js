/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "crs_creative_financing_001");
    record0.set("title", "The Closing Pitch - Integrating Leasing into the Proposal");
    record0.set("order", 5);
    record0.set("content_type", "text");
    record0.set("description", "Learn the mechanics of the closing pitch, multi-option proposals, credit streamlining, and the upgrade hook to create lifetime customers");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})