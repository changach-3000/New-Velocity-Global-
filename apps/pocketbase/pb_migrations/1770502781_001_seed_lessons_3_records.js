/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "Net Present Value (NPV) Analysis");
    record0.set("description", "Master NPV analysis for lease vs buy decisions. Understand cash flow projections, NPV calculation and interpretation, and how to apply NPV to lease vs buy decisions. Covers NPV analysis framework, lease and buy cash flows, NPV calculation process, and case study.");
    record0.set("order", 3);
    record0.set("duration", 60);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "pbc_9676646180");
    record1.set("title", "Cost Comparison and Break-Even Analysis");
    record1.set("description", "Master cost comparison techniques and break-even analysis. Understand total cost of ownership, cost comparison methods, break-even analysis, and sensitivity analysis. Learn how to apply these techniques to lease vs buy decisions.");
    record1.set("order", 4);
    record1.set("duration", 60);
    record1.set("content_type", "text");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "pbc_9676646180");
    record2.set("title", "Tax Implications and Incentives");
    record2.set("description", "Understand tax implications of lease vs buy decisions. Learn tax incentives and deductions available for equipment acquisition. Develop tax analysis skills and apply tax knowledge to lease vs buy decisions.");
    record2.set("order", 5);
    record2.set("duration", 30);
    record2.set("content_type", "text");
  app.save(record2);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})