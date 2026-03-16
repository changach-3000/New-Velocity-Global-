/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Advanced Lease Structuring");
    record0.set("instructor_name", "Dr. Sarah Chen");
    record0.set("price", 29900);
    record0.set("duration_hours", 12);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("title", "Financial Lease Analysis");
    record1.set("instructor_name", "Michael Rodriguez");
    record1.set("price", 34900);
    record1.set("duration_hours", 15);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("title", "Lease Accounting Standards");
    record2.set("instructor_name", "Jennifer Park");
    record2.set("price", 24900);
    record2.set("duration_hours", 10);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("title", "Equipment Leasing Strategies");
    record3.set("instructor_name", "David Thompson");
    record3.set("price", 39900);
    record3.set("duration_hours", 18);
  app.save(record3);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})