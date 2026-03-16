/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "Value Creation and Win-Win Solutions");
    record0.set("description", "Master value creation techniques, understand win-win negotiation, develop creative problem-solving, and apply value creation to lease sales. Covers understanding value in lease sales, value creation strategies, win-win negotiation principles, creative problem-solving techniques, and real-world case studies.");
    record0.set("order", 6);
    record0.set("duration", 60);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "pbc_9676646180");
    record1.set("title", "Closing Techniques and Deal Finalization");
    record1.set("description", "Master closing techniques, understand deal finalization process, develop closing skills, and apply closing to lease sales. Covers recognizing buying signals, closing techniques, deal finalization process, and real-world case studies.");
    record1.set("order", 7);
    record1.set("duration", 60);
    record1.set("content_type", "text");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "pbc_9676646180");
    record2.set("title", "Post-Negotiation and Relationship Management");
    record2.set("description", "Master post-negotiation follow-up, understand relationship management, develop long-term client strategies, and apply relationship management to lease sales. Covers post-negotiation follow-up, relationship management principles, upselling and cross-selling, and real-world case studies.");
    record2.set("order", 8);
    record2.set("duration", 30);
    record2.set("content_type", "text");
  app.save(record2);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})