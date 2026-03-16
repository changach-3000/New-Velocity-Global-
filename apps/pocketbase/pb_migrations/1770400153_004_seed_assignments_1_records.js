/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("assignments");

  const record0 = new Record(collection);
    record0.set("lesson_id", "lesson_5_1");
    record0.set("title", "The Big Deal Simulation - $50M Cross-Border Aircraft Lease");
    record0.set("description", "Capstone case study requiring students to structure a complex international aircraft lease");
    record0.set("instructions", "You are a lease structuring advisor tasked with structuring a $50M cross-border aircraft lease. The scenario includes: Aircraft: Boeing 787-9 Dreamliner; Lessee: European airline (revenue in EUR); Lessor: US-based leasing company; Lease term: 12 years; Residual value: 15% of original cost; Tax considerations: US lessor, EU lessee, potential double taxation; ESG requirement: Lessee wants sustainability-linked pricing. Your deliverables: (1) Financial Model: Calculate IRR with tax benefits, perform 20% asset value sensitivity analysis, model cash flows; (2) Risk Assessment: Identify residual value risk, currency risk, regulatory risk, and mitigation strategies; (3) Structuring Memo: Recommend optimal structure (leveraged vs synthetic vs traditional), justify SPV jurisdiction choice, address withholding taxes; (4) Tax Strategy: Optimize using DTT, address VAT/GST, structure gross-up clauses; (5) Accounting Analysis: Apply IFRS 16 treatment, address lease modifications, document accounting impact. Grading: Financial accuracy (25%), Risk analysis (25%), Structuring logic (25%), Tax optimization (15%), Presentation (10%)");
    record0.set("due_date", "2026-03-20");
    record0.set("max_score", 100);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})