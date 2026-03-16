/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lesson_content");

  const record0 = new Record(collection);
    record0.set("lesson_id", "Lesson 4");
    record0.set("content_body", "## 5. Subsequent Measurement\n\n### Depreciation and Interest Patterns\n- IFRS 16: Straight-line depreciation of ROU asset; interest on liability\n- ASC 842: Similar patterns but different for operating vs finance leases\n- Different expense recognition over lease term\n\n### Lease Modification Accounting\n- IFRS 16: Remeasure ROU asset and liability for modifications\n- ASC 842: Similar approach with specific guidance\n- Treatment of modification payments differs\n\n### Remeasurement Triggers\n- IFRS 16: Changes in lease payments, lease term, or discount rate\n- ASC 842: Similar triggers with specific criteria\n- Different timing of remeasurement\n\n### Expense Recognition\n- IFRS 16: Depreciation + interest expense\n- ASC 842: Operating leases - single lease expense; Finance leases - depreciation + interest\n- Different P&L presentation\n\n---\n\n## 6. Disclosure Requirements\n\n### IFRS 16 Requirements\n- Qualitative disclosures about leasing activities\n- Quantitative disclosures of lease assets and liabilities\n- Maturity analysis of lease payments\n- Sensitivity analysis for key judgments\n\n### ASC 842 Requirements\n- Specific quantitative tables for lease assets and liabilities\n- Detailed maturity analysis\n- Weighted-average lease term and discount rate\n- Operating and finance lease disclosures");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})