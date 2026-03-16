/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "Lease vs Buy Overview and Key Concepts");
    record0.set("description", "Understand lease vs buy decision fundamentals, key concepts and terminology, decision drivers, and how to apply knowledge to equipment acquisition. Covers leasing vs buying options, key decision drivers (financial, operational, strategic, market factors), decision framework overview, and case study.");
    record0.set("order", 1);
    record0.set("duration", 60);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "pbc_9676646180");
    record1.set("title", "Financial Analysis Fundamentals");
    record1.set("description", "Understand financial analysis concepts, key financial metrics, time value of money, and how to apply financial analysis to lease vs buy decisions. Covers time value of money, NPV analysis, cost of capital, cash flow analysis, sensitivity analysis, and case study.");
    record1.set("order", 2);
    record1.set("duration", 60);
    record1.set("content_type", "text");
  app.save(record1);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})