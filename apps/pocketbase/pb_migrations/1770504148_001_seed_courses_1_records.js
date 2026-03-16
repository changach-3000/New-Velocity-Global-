/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Operational Leasing for Business Growth");
    record0.set("description", "Master operational leasing strategies to accelerate business growth. Learn how to leverage operational leases for scalability, flexibility, and cost optimization. Understand equipment selection, portfolio management, technology integration, and growth metrics. Develop expertise in managing lease portfolios, optimizing operational efficiency, and measuring growth impact. Includes detailed case studies, growth frameworks, and practical strategies for using operational leasing to drive business expansion across industries.");
    record0.set("instructor_name", "Leasing Professionals Academy");
    record0.set("price", 1);
    record0.set("duration_hours", 7);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})