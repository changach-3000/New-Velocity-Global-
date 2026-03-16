/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "COURSE_1_ID");
    record0.set("title", "Introduction to Lease Structures");
    record0.set("description", "Overview of different lease types, NNN vs. gross leases, triple net responsibilities");
    record0.set("order", 1);
    record0.set("duration", 120);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "COURSE_1_ID");
    record1.set("title", "Financial Modeling for Leases");
    record1.set("description", "NPV calculations, IRR analysis, lease valuation methods");
    record1.set("order", 2);
    record1.set("duration", 120);
    record1.set("content_type", "text");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "COURSE_1_ID");
    record2.set("title", "Complex Lease Arrangements");
    record2.set("description", "Ground leases, master leases, percentage leases, tenant improvement allowances");
    record2.set("order", 3);
    record2.set("duration", 120);
    record2.set("content_type", "text");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("course_id", "COURSE_1_ID");
    record3.set("title", "Deal Structuring & Negotiation");
    record3.set("description", "Structuring lease deals, negotiation strategies, risk allocation");
    record3.set("order", 4);
    record3.set("duration", 120);
    record3.set("content_type", "text");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("course_id", "COURSE_2_ID");
    record4.set("title", "Lease Valuation Fundamentals");
    record4.set("description", "Present value analysis, discount rates, cash flow projections");
    record4.set("order", 1);
    record4.set("duration", 105);
    record4.set("content_type", "text");
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("course_id", "COURSE_2_ID");
    record5.set("title", "Advanced Valuation Methods");
    record5.set("description", "Residual value analysis, obsolescence factors, market comparables");
    record5.set("order", 2);
    record5.set("duration", 105);
    record5.set("content_type", "text");
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("course_id", "COURSE_2_ID");
    record6.set("title", "Economic Analysis & Sensitivity");
    record6.set("description", "Sensitivity analysis, scenario modeling, break-even analysis");
    record6.set("order", 3);
    record6.set("duration", 105);
    record6.set("content_type", "text");
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("course_id", "COURSE_2_ID");
    record7.set("title", "Comparative Analysis & Benchmarking");
    record7.set("description", "Industry benchmarks, competitive analysis, market trends");
    record7.set("order", 4);
    record7.set("duration", 105);
    record7.set("content_type", "text");
  app.save(record7);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})