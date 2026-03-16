/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("assignments");

  const record0 = new Record(collection);
    record0.set("lesson_id", "lesson4");
    record0.set("title", "Lease Valuation Exercise");
    record0.set("description", "Calculate lease payments and present value for a sample scenario");
    record0.set("instructions", "You will receive a lease scenario with: lease term (5 years), annual payment ($50,000), discount rate (6%), and residual value ($10,000). Calculate: (1) Present value of lease payments, (2) Total lease cost, (3) Implicit interest rate. Show all calculations and explain your methodology.");
    record0.set("due_date", "2026-03-06");
    record0.set("max_score", 100);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("lesson_id", "lesson9");
    record1.set("title", "Comprehensive Lease Analysis");
    record1.set("description", "Analyze a complete lease scenario including classification, valuation, and accounting treatment");
    record1.set("instructions", "Analyze the provided lease agreement and prepare a comprehensive analysis including: (1) Lease classification (operating vs. finance) with justification, (2) Calculation of present value of lease payments, (3) Determination of right-of-use asset and lease liability, (4) Accounting journal entries under IFRS 16/ASC 842, (5) Disclosure notes for financial statements, (6) Assessment of lease favorability. Provide detailed explanations for all conclusions.");
    record1.set("due_date", "2026-03-20");
    record1.set("max_score", 100);
  app.save(record1);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})