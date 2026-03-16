/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "advanced_lease_structuring");
    record0.set("title", "Leveraged Lease Mechanics");
    record0.set("description", "Understanding debt provider vs equity participant roles and non-recourse debt structures");
    record0.set("order", 1);
    record0.set("content_type", "text");
    record0.set("duration", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "advanced_lease_structuring");
    record1.set("title", "Synthetic Leases");
    record1.set("description", "Tax ownership vs operating lease treatment and off-balance-sheet benefits");
    record1.set("order", 2);
    record1.set("content_type", "text");
    record1.set("duration", 1);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "advanced_lease_structuring");
    record2.set("title", "Sale and Leaseback (Advanced)");
    record2.set("description", "Asset liquidity and FMV appraisals in advanced transactions");
    record2.set("order", 3);
    record2.set("content_type", "text");
    record2.set("duration", 1);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("course_id", "advanced_lease_structuring");
    record3.set("title", "Jurisdictional Optimization");
    record3.set("description", "SPVs and Double Taxation Treaties for cross-border structures");
    record3.set("order", 4);
    record3.set("content_type", "text");
    record3.set("duration", 1);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("course_id", "advanced_lease_structuring");
    record4.set("title", "Withholding Taxes & VAT");
    record4.set("description", "Gross-up clauses and VAT/GST recovery strategies");
    record4.set("order", 5);
    record4.set("content_type", "text");
    record4.set("duration", 1);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("course_id", "advanced_lease_structuring");
    record5.set("title", "Currency & Hedging");
    record5.set("description", "FX risk management in international leases");
    record5.set("order", 6);
    record5.set("content_type", "text");
    record5.set("duration", 1);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("course_id", "advanced_lease_structuring");
    record6.set("title", "Pricing for Profitability");
    record6.set("description", "IRR calculations and sensitivity analysis for lease pricing");
    record6.set("order", 7);
    record6.set("content_type", "text");
    record6.set("duration", 1);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("course_id", "advanced_lease_structuring");
    record7.set("title", "Residual Value Insurance (RVI)");
    record7.set("description", "RVI mechanisms and secondary markets for residual management");
    record7.set("order", 8);
    record7.set("content_type", "text");
    record7.set("duration", 1);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("course_id", "advanced_lease_structuring");
    record8.set("title", "Lease Modifications (IFRS 16/ASC 842)");
    record8.set("description", "Accounting treatment of lease modifications under modern standards");
    record8.set("order", 9);
    record8.set("content_type", "text");
    record8.set("duration", 1);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("course_id", "advanced_lease_structuring");
    record9.set("title", "Green Leasing");
    record9.set("description", "Sustainability-linked leases and renewable energy financing");
    record9.set("order", 10);
    record9.set("content_type", "text");
    record9.set("duration", 1);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("course_id", "advanced_lease_structuring");
    record10.set("title", "Circular Economy Models");
    record10.set("description", "Usage-based models and end-of-life management strategies");
    record10.set("order", 11);
    record10.set("content_type", "text");
    record10.set("duration", 1);
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("course_id", "advanced_lease_structuring");
    record11.set("title", "The Big Deal Simulation");
    record11.set("description", "Capstone case study: Structure a $50M cross-border aircraft lease");
    record11.set("order", 12);
    record11.set("content_type", "assignment");
    record11.set("duration", 1);
  app.save(record11);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})