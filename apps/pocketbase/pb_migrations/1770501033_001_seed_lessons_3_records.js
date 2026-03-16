/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "Lease Sales Negotiation Mastery");
    record0.set("title", "Value Creation and Win-Win Solutions");
    record0.set("description", "Master value creation techniques and win-win negotiation strategies");
    record0.set("order", 7);
    record0.set("duration", 60);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "Lease Sales Negotiation Mastery");
    record1.set("title", "Closing Techniques and Deal Finalization");
    record1.set("description", "Master closing techniques and deal finalization process");
    record1.set("order", 8);
    record1.set("duration", 60);
    record1.set("content_type", "text");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "Lease Sales Negotiation Mastery");
    record2.set("title", "Post-Negotiation and Relationship Management");
    record2.set("description", "Master post-negotiation follow-up and long-term relationship management");
    record2.set("order", 9);
    record2.set("duration", 30);
    record2.set("content_type", "text");
  app.save(record2);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})