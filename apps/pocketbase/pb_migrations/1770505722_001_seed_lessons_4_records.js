/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "Advanced Lease Structuring");
    record0.set("title", "PART 2: ADVANCED STRUCTURING STRATEGIES");
    record0.set("description", "Part 2 of Advanced Lease Structuring course covering residual value management and risk, payment structures and optimization, and tax-efficient lease structures");
    record0.set("order", 2);
    record0.set("content_type", "text");
    record0.set("duration", 180);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "Advanced Lease Structuring");
    record1.set("title", "LESSON 2.1: Residual Value Management and Risk");
    record1.set("description", "Understand residual value concepts, management strategies, and risk mitigation. Covers residual value fundamentals (definition, key concepts), estimation methods (historical data, market analysis, equipment condition, technology analysis, expert opinion), risk management (obsolescence, condition, market, demand, regulatory risks), strategies (conservative estimates, guarantees, insurance, sharing, buyout), pricing impact, and includes a comprehensive case study on residual value management.");
    record1.set("order", 4);
    record1.set("content_type", "text");
    record1.set("duration", 60);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "Advanced Lease Structuring");
    record2.set("title", "LESSON 2.2: Payment Structures and Optimization");
    record2.set("description", "Understand payment structure options and optimization strategies. Covers payment structure types (level, escalating, declining, seasonal, stepped), payment frequency options (monthly, quarterly, semi-annual, annual, advance), optimization strategies (cash flow matching, return optimization, risk mitigation, competitive positioning, tax optimization), impact on returns, payment structure examples, and includes a case study on payment structure optimization for manufacturing company.");
    record2.set("order", 5);
    record2.set("content_type", "text");
    record2.set("duration", 60);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("course_id", "Advanced Lease Structuring");
    record3.set("title", "LESSON 2.3: Tax-Efficient Lease Structures");
    record3.set("description", "Understand tax lease classification and tax-efficient structuring strategies. Covers tax lease classification and requirements, tax benefits of leasing (depreciation, interest, investment tax credits, accelerated depreciation, Section 179), tax-efficient structuring strategies, tax lease vs non-tax lease comparison, tax lease structuring considerations, and includes a case study on tax-efficient lease structure with detailed tax benefit analysis.");
    record3.set("order", 6);
    record3.set("content_type", "text");
    record3.set("duration", 60);
  app.save(record3);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})