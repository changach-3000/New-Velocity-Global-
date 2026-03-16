/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "<COURSE_ID_FROM_PREVIOUS_CREATION>");
    record0.set("title", "Introduction to Securitization");
    record0.set("description", "Understand securitization concept, history, benefits, market participants, and the securitization process overview. Learn how illiquid lease assets are converted into tradeable securities and the roles of key market participants.");
    record0.set("order", 1);
    record0.set("duration", 60);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "<COURSE_ID_FROM_PREVIOUS_CREATION>");
    record1.set("title", "Securitization Process and Structure");
    record1.set("description", "Understand the legal structure of securitizations, securitization mechanics, cash flow waterfalls, and credit enhancement mechanisms. Learn how SPVs work and how cash flows are distributed to investors.");
    record1.set("order", 2);
    record1.set("duration", 60);
    record1.set("content_type", "text");
  app.save(record1);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})