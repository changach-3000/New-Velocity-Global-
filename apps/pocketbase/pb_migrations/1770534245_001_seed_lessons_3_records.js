/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "COURSE_ID_FOR_ADVANCED_LEASING_STRATEGIES");
    record0.set("title", "Strategic Lease Planning Framework");
    record0.set("description", "Comprehensive approach to lease decisions aligned with business strategy. Covers strategic planning fundamentals, lease planning process, strategic objectives, stakeholder analysis, decision framework, and real-world case study.");
    record0.set("order", 1);
    record0.set("content_type", "text");
    record0.set("duration", 60);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "COURSE_ID_FOR_ADVANCED_LEASING_STRATEGIES");
    record1.set("title", "Financial Analysis and Lease Evaluation");
    record1.set("description", "Comprehensive financial analysis of lease options. Covers lease evaluation fundamentals, NPV analysis, IRR analysis, cash flow analysis, sensitivity analysis, and financial case study.");
    record1.set("order", 2);
    record1.set("content_type", "text");
    record1.set("duration", 60);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "COURSE_ID_FOR_ADVANCED_LEASING_STRATEGIES");
    record2.set("title", "Lease vs Buy Decision Framework");
    record2.set("description", "Comparison of leasing vs purchasing equipment. Covers lease vs buy fundamentals, financial comparison, qualitative factors, risk comparison, strategic considerations, and comprehensive case study.");
    record2.set("order", 3);
    record2.set("content_type", "text");
    record2.set("duration", 60);
  app.save(record2);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})