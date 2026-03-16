/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "Leasing for Businesses and Organizations");
    record0.set("description", "Understand business leasing applications, organizational benefits, and how different industries use leasing. Learn why businesses lease and how to apply leasing to business decisions.");
    record0.set("order", 3);
    record0.set("duration", 60);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "pbc_9676646180");
    record1.set("title", "Leasing for Consumers and Individuals");
    record1.set("description", "Understand consumer leasing applications, personal benefits, and how to make informed leasing decisions. Learn why consumers lease and how to evaluate leasing vs buying.");
    record1.set("order", 4);
    record1.set("duration", 60);
    record1.set("content_type", "text");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "pbc_9676646180");
    record2.set("title", "Leasing Industry Overview and Careers");
    record2.set("description", "Understand the leasing industry, career opportunities, and industry trends. Learn about different career paths in the leasing industry and required skills.");
    record2.set("order", 5);
    record2.set("duration", 30);
    record2.set("content_type", "text");
  app.save(record2);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})