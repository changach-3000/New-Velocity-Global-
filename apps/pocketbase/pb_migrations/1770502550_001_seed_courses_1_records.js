/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Lease vs Buy: Strategic Decision Framework");
    record0.set("description", "Master the lease vs buy decision framework. Learn comprehensive financial analysis techniques including NPV analysis, cost comparison, tax implications, and break-even analysis. Understand operational factors, strategic considerations, and risk assessment. Develop expertise in evaluating equipment acquisition options, optimizing capital allocation, and making data-driven decisions. Includes detailed case studies, decision matrices, and practical frameworks for evaluating lease vs buy scenarios across different industries and equipment types.");
    record0.set("instructor_name", "Leasing Professionals Academy");
    record0.set("price", 1);
    record0.set("duration_hours", 7);
    record0.set("image_url", "");
    record0.set("curriculum", "");
    record0.set("estimated_hours", 7);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})