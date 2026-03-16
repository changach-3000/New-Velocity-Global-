/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "pbc_quiz_1");
    record0.set("question_text", "What is the primary advantage of leasing over buying?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"Lower upfront capital requirements\", \"Ownership of the asset\", \"Unlimited usage rights\", \"No maintenance responsibilities\"]");
    record0.set("correct_answer", "Lower upfront capital requirements");
    record0.set("explanation", "Leasing requires significantly lower upfront capital compared to purchasing, making it attractive for businesses with limited capital.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "pbc_quiz_1");
    record1.set("question_text", "Which of the following best describes renting?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"Short-term use with no ownership transfer\", \"Long-term commitment with ownership transfer\", \"Permanent asset ownership\", \"Lease with buyout option\"]");
    record1.set("correct_answer", "Short-term use with no ownership transfer");
    record1.set("explanation", "Renting is typically a short-term arrangement where the renter never gains ownership of the asset.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "pbc_quiz_1");
    record2.set("question_text", "In a lease agreement, who typically bears the risk of asset obsolescence?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"The lessee\", \"The lessor\", \"Both equally\", \"A third-party insurer\"]");
    record2.set("correct_answer", "The lessor");
    record2.set("explanation", "In most lease arrangements, the lessor bears the risk of asset obsolescence, which is one reason lessees prefer leasing.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "pbc_quiz_1");
    record3.set("question_text", "What is the main difference between an operating lease and a capital lease?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"Operating leases are short-term; capital leases transfer ownership\", \"Operating leases are more expensive\", \"Capital leases have no residual value\", \"Operating leases require more documentation\"]");
    record3.set("correct_answer", "Operating leases are short-term; capital leases transfer ownership");
    record3.set("explanation", "Operating leases are typically short-term with the asset returned at end of term, while capital leases are longer-term and may result in ownership transfer.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "pbc_quiz_1");
    record4.set("question_text", "Which scenario would benefit most from leasing rather than buying?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"A company needing equipment for a short project\", \"A company with excess capital\", \"A company wanting permanent asset ownership\", \"A company with no cash flow concerns\"]");
    record4.set("correct_answer", "A company needing equipment for a short project");
    record4.set("explanation", "Leasing is ideal for short-term needs where purchasing would be inefficient and costly.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "pbc_quiz_2");
    record5.set("question_text", "What does IFRS 16 require regarding lease accounting?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "[\"All leases must be recorded on the balance sheet\", \"Only operating leases are recorded\", \"Leases are treated as off-balance-sheet items\", \"IFRS 16 does not apply to leases\"]");
    record5.set("correct_answer", "All leases must be recorded on the balance sheet");
    record5.set("explanation", "IFRS 16 requires lessees to recognize a right-of-use asset and lease liability on the balance sheet for all leases.");
    record5.set("order", 1);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "pbc_quiz_2");
    record6.set("question_text", "Under ASC 842, what is the primary change from previous accounting standards?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"Operating leases are now recognized on the balance sheet\", \"Capital leases are no longer recognized\", \"Lease accounting has been simplified\", \"Lessors no longer report leases\"]");
    record6.set("correct_answer", "Operating leases are now recognized on the balance sheet");
    record6.set("explanation", "ASC 842 requires operating leases to be recognized on the balance sheet, similar to IFRS 16.");
    record6.set("order", 2);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "pbc_quiz_2");
    record7.set("question_text", "What is a right-of-use (ROU) asset?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "[\"The lessee's right to use the asset for the lease term\", \"The lessor's ownership interest\", \"A depreciation expense\", \"An intangible asset only\"]");
    record7.set("correct_answer", "The lessee's right to use the asset for the lease term");
    record7.set("explanation", "The ROU asset represents the lessee's right to use the underlying asset during the lease term.");
    record7.set("order", 3);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "pbc_quiz_2");
    record8.set("question_text", "How is the lease liability calculated under IFRS 16 and ASC 842?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "[\"Present value of future lease payments\", \"Total lease payments without discounting\", \"Annual lease payment amount\", \"Residual value of the asset\"]");
    record8.set("correct_answer", "Present value of future lease payments");
    record8.set("explanation", "The lease liability is the present value of all future lease payments discounted at the incremental borrowing rate.");
    record8.set("order", 4);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "pbc_quiz_2");
    record9.set("question_text", "What impact does IFRS 16/ASC 842 have on financial ratios?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "[\"Increases debt-to-equity ratios and decreases asset turnover\", \"Decreases debt ratios\", \"No impact on financial ratios\", \"Only affects cash flow statements\"]");
    record9.set("correct_answer", "Increases debt-to-equity ratios and decreases asset turnover");
    record9.set("explanation", "By bringing leases onto the balance sheet, IFRS 16 and ASC 842 increase liabilities and assets, affecting key financial ratios.");
    record9.set("order", 5);
  app.save(record9);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})