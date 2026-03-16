/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const records = app.findRecordsByFilter("courses", "title='Lease Securitization & Structured Finance'");
  for (const record of records) {
    record.set("estimated_hours", 4.5);
    record.set("curriculum", "PART 1: Fundamentals of Lease Securitization (Lessons 1.1-1.3, 2.5 hours)\n- 1.1: Introduction to Lease Securitization\n- 1.2: Lease Securitization Structures\n- 1.3: Key Players and Market Overview\n\nPART 2: Advanced Structures and Valuation (Lessons 2.1-2.3, 2 hours)\n- 2.1: Advanced Securitization Structures\n- 2.2: Valuation and Pricing Models\n- 2.3: Performance Analytics\n\nPART 3: Risk Management and Compliance (Lessons 3.1-3.3, 2.5 hours)\n- 3.1: Risk Management in Securitization\n- 3.2: Regulatory and Accounting Considerations\n- 3.3: Case Studies and Market Trends");
    app.save(record);
  }
}, (app) => {
  // Rollback: original values not stored, manual restore needed
})