/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "<COURSE_ID_FROM_PREVIOUS_CREATION>");
    record0.set("title", "From \"Debt\" to \"Utility\" - Shifting Client Mindset");
    record0.set("description", "Understand the psychological barriers to leasing adoption, master the language of utility vs. debt, reframe leasing as a strategic business decision, and identify and address client misconceptions");
    record0.set("order", 1);
    record0.set("duration", 60);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "<COURSE_ID_FROM_PREVIOUS_CREATION>");
    record1.set("title", "Identifying and Overcoming Psychological Barriers");
    record1.set("description", "Recognize common psychological barriers to leasing, develop strategies to address each barrier, build confidence in presenting leasing as a strategic solution, and master the art of reframing objections");
    record1.set("order", 2);
    record1.set("duration", 60);
    record1.set("content_type", "text");
  app.save(record1);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})