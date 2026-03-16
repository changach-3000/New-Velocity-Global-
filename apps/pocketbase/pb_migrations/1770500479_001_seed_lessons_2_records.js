/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "Negotiation Principles and Psychology");
    record0.set("description", "Master fundamental negotiation principles, understand negotiation psychology, develop emotional intelligence, and apply principles to lease sales. Covers core negotiation principles, negotiation psychology, emotional intelligence components, negotiation styles, and real-world case studies.");
    record0.set("order", 1);
    record0.set("duration", 60);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "pbc_9676646180");
    record1.set("title", "Lease Sales Process and Stakeholders");
    record1.set("description", "Understand lease sales process, identify key stakeholders, understand stakeholder motivations, and apply knowledge to lease sales. Covers sales process stages, key stakeholders, stakeholder mapping, multi-stakeholder negotiation, and real-world case studies.");
    record1.set("order", 2);
    record1.set("duration", 60);
    record1.set("content_type", "text");
  app.save(record1);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})