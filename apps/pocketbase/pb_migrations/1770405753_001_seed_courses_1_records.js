/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Advanced Leasing Strategies");
    record0.set("description", "A comprehensive advanced course covering strategic capital management, tax optimization, risk mitigation, and next-generation leasing strategies for enterprise-level asset management.");
    record0.set("instructor_name", "Dr. Michael Chen");
    record0.set("instructor_bio", "Expert in corporate finance and advanced leasing strategies with 20+ years of experience in capital management and tax optimization for Fortune 500 companies.");
    record0.set("price", 499);
    record0.set("duration_hours", 12);
    record0.set("learning_outcomes", "Master NPV and IRR analysis, understand synthetic lease structures, evaluate sale and leaseback transactions, analyze tax and accounting implications, make data-driven capital allocation decisions");
    record0.set("estimated_hours", 12);
    record0.set("curriculum", "Part 1: Strategic Capital Management (3 Hours) - Lesson 1.1: The Lease vs. Buy Decision (Advanced), Lesson 1.2: Synthetic Lease Engineering, Lesson 1.3: Sale and Leaseback (SLB) for Liquidity");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})