/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("title", "ESG-Linked Leasing");
    record0.set("course_id", "Advanced_Leasing_Strategies");
    record0.set("content_type", "text");
    record0.set("order", 10);
    record0.set("duration", 60);
    record0.set("description", "Learn about ESG-linked lease structures, sustainability metrics, green lease pricing, and financial impact of ESG performance targets");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("title", "Usage-Based & As-a-Service Models");
    record1.set("course_id", "Advanced_Leasing_Strategies");
    record1.set("content_type", "text");
    record1.set("order", 11);
    record1.set("duration", 60);
    record1.set("description", "Master usage-based and pay-per-use lease models, as-a-service business models, outcome-based pricing mechanisms, and financial impact calculations");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("title", "Digital Asset Tracking & IoT");
    record2.set("course_id", "Advanced_Leasing_Strategies");
    record2.set("content_type", "text");
    record2.set("order", 12);
    record2.set("duration", 60);
    record2.set("description", "Understand IoT and digital asset tracking technologies, real-time telematics, predictive maintenance, and financial impact of IoT-enabled leasing");
  app.save(record2);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})