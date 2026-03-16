/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "<COURSE_ID>");
    record0.set("title", "Industry-Specific Value Propositions");
    record0.set("description", "Understand industry-specific pain points and solutions, master industry-specific value propositions, develop tailored pitches for different industries, and build credibility through industry expertise");
    record0.set("order", 6);
    record0.set("duration", 90);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "<COURSE_ID>");
    record1.set("title", "Overcoming Objections & Closing the Deal");
    record1.set("description", "Master common objections and responses, develop strategies to overcome objections, build closing techniques, and practice negotiation and deal closure");
    record1.set("order", 7);
    record1.set("duration", 60);
    record1.set("content_type", "text");
  app.save(record1);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})