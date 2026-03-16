/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "Advanced Negotiation Strategies");
    record0.set("description", "Master advanced negotiation techniques. Develop win-win negotiation strategies. Handle difficult negotiations and objections. Build long-term relationships through negotiation.");
    record0.set("order", 6);
    record0.set("duration", 90);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "pbc_9676646180");
    record1.set("title", "Documentation and Deal Closure");
    record1.set("description", "Master lease documentation requirements. Develop comprehensive lease agreements. Ensure legal compliance and risk protection. Execute smooth deal closure.");
    record1.set("order", 7);
    record1.set("duration", 60);
    record1.set("content_type", "text");
  app.save(record1);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})