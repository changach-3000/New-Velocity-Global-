/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "{{COURSE_ID}}");
    record0.set("title", "The Mindset Shift - Selling Access and Not Ownership");
    record0.set("description", "Explore the fundamental shift in modern business thinking from ownership to access. Learn why customers prefer leasing, understand CapEx vs OpEx, and master the sales messaging to close bigger deals.");
    record0.set("order", 1);
    record0.set("duration", 45);
    record0.set("content_type", "text");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})