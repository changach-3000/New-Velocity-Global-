/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "pbc_1349215296");
    record0.set("question_text", "Under IFRS 16, a lease is defined as a contract that conveys the right to use an asset for a period of time in exchange for consideration. Which of the following is NOT a key component of this definition?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "A) Right to control the use of an identified asset, B) For a period of time, C) In exchange for consideration, D) Guaranteed residual value");
    record0.set("correct_answer", "D) Guaranteed residual value");
    record0.set("explanation", "IFRS 16 defines a lease based on the right to control the use of an identified asset for a period of time in exchange for consideration. Guaranteed residual value is not a defining characteristic of a lease under IFRS 16.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "pbc_1349215296");
    record1.set("question_text", "What is the primary difference between IFRS 16 and ASC 842 regarding the recognition of leases on the balance sheet?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "A) IFRS 16 requires all leases on the balance sheet; ASC 842 only requires finance leases, B) Both require all leases on the balance sheet with minimal exceptions, C) ASC 842 requires all leases; IFRS 16 only requires finance leases, D) Neither standard requires lease recognition");
    record1.set("correct_answer", "B) Both require all leases on the balance sheet with minimal exceptions");
    record1.set("explanation", "Both IFRS 16 and ASC 842 converged on the lessee accounting model, requiring recognition of right-of-use (ROU) assets and lease liabilities for all leases except short-term leases and low-value assets.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "pbc_1349215296");
    record2.set("question_text", "Under IFRS 16, the right-of-use (ROU) asset is initially measured at:");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "A) Fair value of the leased asset, B) The lease liability plus initial direct costs and prepaid lease payments, C) The present value of lease payments only, D) The fair value of the asset minus residual value");
    record2.set("correct_answer", "B) The lease liability plus initial direct costs and prepaid lease payments");
    record2.set("explanation", "IFRS 16 requires the ROU asset to be measured as the lease liability adjusted for initial direct costs, prepaid lease payments, and lease incentives received.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "pbc_1349215296");
    record3.set("question_text", "Which discount rate should be used first when measuring the lease liability under ASC 842?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "A) Incremental borrowing rate, B) Implicit rate in the lease if readily determinable, C) Weighted average cost of capital, D) Risk-free rate");
    record3.set("correct_answer", "B) Implicit rate in the lease if readily determinable");
    record3.set("explanation", "ASC 842 requires using the implicit rate in the lease if readily determinable. If not readily determinable, the lessee uses its incremental borrowing rate.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "pbc_1349215296");
    record4.set("question_text", "Under IFRS 16, which of the following is NOT included in the measurement of lease payments?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "A) Fixed payments, B) Variable payments linked to an index or rate, C) Residual value guarantees, D) Estimated maintenance costs");
    record4.set("correct_answer", "D) Estimated maintenance costs");
    record4.set("explanation", "IFRS 16 includes fixed payments, variable payments linked to indices/rates, residual guarantees, and termination penalties in lease payments. Maintenance costs are typically excluded unless they are part of the lease payment.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "pbc_1349215296");
    record5.set("question_text", "What is the key difference between ASC 842's treatment of operating leases and finance leases?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "A) Operating leases are not recognized on the balance sheet, B) Finance leases require depreciation of the ROU asset; operating leases use straight-line lease expense, C) Operating leases have no ROU asset, D) Finance leases are not subject to disclosure requirements");
    record5.set("correct_answer", "B) Finance leases require depreciation of the ROU asset; operating leases use straight-line lease expense");
    record5.set("explanation", "Under ASC 842, both operating and finance leases are recognized on the balance sheet. The key difference is in the expense recognition pattern: finance leases use depreciation plus interest, while operating leases use straight-line lease expense.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "pbc_1349215296");
    record6.set("question_text", "Under IFRS 16, how is the lease liability remeasured after initial recognition?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "A) It is not remeasured; it remains constant, B) It is remeasured for changes in lease payments and discount rate, C) It is remeasured only for changes in lease payments, not discount rate, D) It is remeasured annually at fair value");
    record6.set("correct_answer", "C) It is remeasured only for changes in lease payments, not discount rate");
    record6.set("explanation", "IFRS 16 requires remeasurement of the lease liability for changes in lease payments (e.g., changes in variable payments, residual value estimates) but not for changes in the discount rate.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "pbc_1349215296");
    record7.set("question_text", "Which of the following lease terms would be excluded from recognition under both IFRS 16 and ASC 842?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "A) 12-month lease, B) 6-month lease, C) 24-month lease, D) 36-month lease");
    record7.set("correct_answer", "B) 6-month lease");
    record7.set("explanation", "Both IFRS 16 and ASC 842 provide an exemption for short-term leases (typically 12 months or less). A 6-month lease would qualify for this exemption.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "pbc_1349215296");
    record8.set("question_text", "Under ASC 842, what is the definition of a 'readily determinable' implicit rate?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "A) Any rate provided by the lessor, B) A rate that can be determined from publicly available information, C) The rate that equates the present value of lease payments to the fair value of the asset, D) The lessor's cost of capital");
    record8.set("correct_answer", "C) The rate that equates the present value of lease payments to the fair value of the asset");
    record8.set("explanation", "ASC 842 defines the implicit rate as the rate that, when used to discount lease payments and residual value, equals the sum of the fair value of the leased asset and any initial direct costs incurred by the lessor.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "pbc_1349215296");
    record9.set("question_text", "How does IFRS 16 treat variable lease payments that are NOT linked to an index or rate?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "A) They are included in the lease liability, B) They are excluded from the lease liability and recognized as expense when incurred, C) They are capitalized as part of the ROU asset, D) They are recognized as a contingent liability");
    record9.set("correct_answer", "B) They are excluded from the lease liability and recognized as expense when incurred");
    record9.set("explanation", "IFRS 16 excludes variable lease payments not linked to an index or rate from the lease liability. These are recognized as an expense in the period incurred.");
    record9.set("order", 10);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("quiz_id", "pbc_1349215296");
    record10.set("question_text", "Under both IFRS 16 and ASC 842, what is the primary journal entry to record a lease at inception?");
    record10.set("question_type", "multiple_choice");
    record10.set("options", "A) Debit Lease Expense, Credit Cash, B) Debit ROU Asset, Credit Lease Liability, C) Debit Lease Liability, Credit ROU Asset, D) Debit Prepaid Lease, Credit Lease Liability");
    record10.set("correct_answer", "B) Debit ROU Asset, Credit Lease Liability");
    record10.set("explanation", "At lease inception, both standards require recognition of a right-of-use asset and a corresponding lease liability on the balance sheet.");
    record10.set("order", 11);
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("quiz_id", "pbc_1349215296");
    record11.set("question_text", "What is a key similarity between IFRS 16 and ASC 842 regarding lease classification?");
    record11.set("question_type", "multiple_choice");
    record11.set("options", "A) Both use a bright-line test based on lease term, B) Both use a control-based approach to determine if a contract is a lease, C) Both classify leases as operating or finance based on transfer of ownership, D) Both allow off-balance-sheet treatment for certain leases");
    record11.set("correct_answer", "B) Both use a control-based approach to determine if a contract is a lease");
    record11.set("explanation", "Both IFRS 16 and ASC 842 converged on a control-based approach to identify leases, focusing on whether the customer has the right to control the use of an identified asset.");
    record11.set("order", 12);
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("quiz_id", "pbc_1349215296");
    record12.set("question_text", "Under IFRS 16, how is the ROU asset depreciated?");
    record12.set("question_type", "multiple_choice");
    record12.set("options", "A) Over the lease term using straight-line method, B) Over the useful life of the asset using accelerated depreciation, C) Over the lease term using the same depreciation method as owned assets, D) It is not depreciated; it is amortized");
    record12.set("correct_answer", "A) Over the lease term using straight-line method");
    record12.set("explanation", "IFRS 16 requires the ROU asset to be depreciated over the lease term on a straight-line basis, unless the lease transfers ownership or contains a purchase option, in which case it is depreciated over the asset's useful life.");
    record12.set("order", 13);
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("quiz_id", "pbc_1349215296");
    record13.set("question_text", "What is the primary advantage of ASC 842's distinction between operating and finance leases?");
    record13.set("question_type", "multiple_choice");
    record13.set("options", "A) Operating leases are not recognized on the balance sheet, B) It provides different expense recognition patterns that better reflect the economic substance of the lease, C) It eliminates the need for lease disclosures, D) It allows companies to avoid recognizing lease liabilities");
    record13.set("correct_answer", "B) It provides different expense recognition patterns that better reflect the economic substance of the lease");
    record13.set("explanation", "ASC 842 distinguishes between operating and finance leases to provide different expense recognition patterns: finance leases show depreciation and interest separately, while operating leases show a single lease expense.");
    record13.set("order", 14);
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("quiz_id", "pbc_1349215296");
    record14.set("question_text", "Under both IFRS 16 and ASC 842, what is the impact of a lease modification on the accounting treatment?");
    record14.set("question_type", "multiple_choice");
    record14.set("options", "A) The lease is derecognized and a new lease is recognized, B) The ROU asset and lease liability are remeasured based on the modified terms, C) No accounting adjustment is required, D) The modification is treated as a contingent liability");
    record14.set("correct_answer", "B) The ROU asset and lease liability are remeasured based on the modified terms");
    record14.set("explanation", "Both standards require remeasurement of the ROU asset and lease liability when a lease is modified, unless the modification is accounted for as a separate lease.");
    record14.set("order", 15);
  app.save(record14);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})