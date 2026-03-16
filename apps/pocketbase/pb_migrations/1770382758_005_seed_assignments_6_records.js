/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("assignments");

  const record0 = new Record(collection);
    record0.set("lesson_id", "advanced_lesson_9");
    record0.set("title", "Case Study Analysis");
    record0.set("description", "Analyze a complex lease transaction");
    record0.set("instructions", "Review the provided case study and analyze the lease structure, tax implications, and risk factors. Provide recommendations for optimization.");
    record0.set("due_date", "2026-03-15");
    record0.set("max_score", 100);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("lesson_id", "advanced_lesson_9_assign_2");
    record1.set("title", "Portfolio Review");
    record1.set("description", "Review and optimize a lease portfolio");
    record1.set("instructions", "Evaluate the provided lease portfolio, identify optimization opportunities, and develop a restructuring strategy.");
    record1.set("due_date", "2026-03-22");
    record1.set("max_score", 100);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("lesson_id", "lease_accounting_lesson_9");
    record2.set("title", "Lease Classification Exercise");
    record2.set("description", "Classify leases under IFRS 16 and ASC 842");
    record2.set("instructions", "Classify the provided lease scenarios under both IFRS 16 and ASC 842, explaining your reasoning and noting any differences.");
    record2.set("due_date", "2026-03-15");
    record2.set("max_score", 100);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("lesson_id", "lease_accounting_lesson_9_assign_2");
    record3.set("title", "Accounting Calculations");
    record3.set("description", "Perform lease accounting calculations");
    record3.set("instructions", "Complete the lease accounting calculations including ROU asset, lease liability, and journal entries for the provided scenarios.");
    record3.set("due_date", "2026-03-22");
    record3.set("max_score", 100);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("lesson_id", "practical_lesson_7_assign_1");
    record4.set("title", "Lease vs Buy Analysis");
    record4.set("description", "Analyze a lease vs buy scenario");
    record4.set("instructions", "Perform a comprehensive lease vs buy analysis for the provided scenario, including financial metrics and recommendations.");
    record4.set("due_date", "2026-03-15");
    record4.set("max_score", 100);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("lesson_id", "practical_lesson_7_assign_2");
    record5.set("title", "Negotiation Strategy");
    record5.set("description", "Develop a lease negotiation strategy");
    record5.set("instructions", "Develop a negotiation strategy for the provided lease scenario, identifying key terms, priorities, and negotiation tactics.");
    record5.set("due_date", "2026-03-22");
    record5.set("max_score", 100);
  app.save(record5);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})