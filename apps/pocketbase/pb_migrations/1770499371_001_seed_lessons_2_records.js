/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "Pre-2019 Lease Accounting Standards");
    record0.set("description", "Understand historical lease accounting standards, Master IAS 17 and ASC 840 frameworks, Identify key characteristics of pre-2019 standards, Apply historical standards to lease transactions");
    record0.set("order", 1);
    record0.set("duration", 60);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "pbc_9676646180");
    record1.set("title", "Evolution to Modern Standards");
    record1.set("description", "Understand the evolution from IAS 17 to IFRS 16, Master the evolution from ASC 840 to ASC 842, Identify key drivers of change, Apply knowledge to transition scenarios");
    record1.set("order", 2);
    record1.set("duration", 60);
    record1.set("content_type", "text");
  app.save(record1);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})