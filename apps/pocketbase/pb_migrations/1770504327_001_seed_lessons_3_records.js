/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "Equipment Selection and Scalability Planning");
    record0.set("description", "Learn equipment selection criteria including business requirements, growth projections, technology requirements, reliability, maintenance, and vendor support. Understand scalability planning with capacity expansion, modular design, multi-unit deployment, and technology upgrades. Explore growth scenarios and equipment lifecycle planning with real-world case studies.");
    record0.set("content_type", "text");
    record0.set("order", 3);
    record0.set("duration", 60);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "pbc_9676646180");
    record1.set("title", "Cost Management and Financial Optimization");
    record1.set("description", "Understand operational leasing costs including lease payments, maintenance, insurance, and operational costs. Learn cost optimization strategies such as lease vs buy analysis, maintenance inclusion, volume discounts, lease term optimization, and upgrade options. Master financial optimization, ROI analysis, and financial metrics for lease decisions.");
    record1.set("content_type", "text");
    record1.set("order", 4);
    record1.set("duration", 60);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "pbc_9676646180");
    record2.set("title", "Flexibility and Upgrade Strategies");
    record2.set("description", "Understand flexibility benefits including equipment changes, capacity adjustments, technology updates, and market responsiveness. Learn upgrade strategies such as planned upgrades, technology refresh, capacity scaling, and equipment replacement. Master upgrade options and technology management for competitive advantage.");
    record2.set("content_type", "text");
    record2.set("order", 5);
    record2.set("duration", 30);
  app.save(record2);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})