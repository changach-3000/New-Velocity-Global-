/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "pbc_quiz_2");
    record0.set("question_text", "What is the effective date of IFRS 16?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"January 1, 2018\", \"January 1, 2019\", \"January 1, 2020\", \"January 1, 2021\"]");
    record0.set("correct_answer", "January 1, 2019");
    record0.set("explanation", "IFRS 16 became effective on January 1, 2019, replacing IAS 17 (Leases). This date applies to public and private companies using IFRS.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "pbc_quiz_2");
    record1.set("question_text", "What is the primary principle of IFRS 16?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"Operating vs. finance lease distinction\", \"Single lease accounting model with ROU asset and liability\", \"Off-balance sheet treatment of operating leases\", \"Lessor-focused accounting\"]");
    record1.set("correct_answer", "Single lease accounting model with ROU asset and liability");
    record1.set("explanation", "The primary principle of IFRS 16 is the single lease accounting model that requires recognition of a right-of-use asset and lease liability for all leases on the balance sheet.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "pbc_quiz_2");
    record2.set("question_text", "What is the short-term lease exemption in IFRS 16?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"Leases < 6 months\", \"Leases < 12 months\", \"Leases < 24 months\", \"Leases < 36 months\"]");
    record2.set("correct_answer", "Leases < 12 months");
    record2.set("explanation", "IFRS 16 provides an optional exemption for short-term leases with a lease term of 12 months or less and no purchase option. Lessees can elect not to recognize these leases.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "pbc_quiz_2");
    record3.set("question_text", "What is the low-value asset exemption in IFRS 16?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"Assets < $1,000\", \"Assets < $3,000\", \"Assets < $5,000\", \"Assets < $10,000\"]");
    record3.set("correct_answer", "Assets < $5,000");
    record3.set("explanation", "IFRS 16 provides an optional exemption for low-value assets with a value less than $5,000. Lessees can elect not to recognize these leases.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "pbc_quiz_2");
    record4.set("question_text", "What is the discount rate used in IFRS 16?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"Implicit rate only\", \"Incremental borrowing rate only\", \"Implicit rate if known, otherwise incremental borrowing rate\", \"Weighted average cost of capital\"]");
    record4.set("correct_answer", "Implicit rate if known, otherwise incremental borrowing rate");
    record4.set("explanation", "IFRS 16 requires using the implicit rate in the lease if known. If the implicit rate is not known, the lessee uses the incremental borrowing rate to discount lease payments.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "pbc_quiz_2");
    record5.set("question_text", "What is the ROU asset in IFRS 16?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "[\"The equipment being leased\", \"The lessee's right to use the asset\", \"The lessor's ownership of the asset\", \"The residual value of the asset\"]");
    record5.set("correct_answer", "The lessee's right to use the asset");
    record5.set("explanation", "The right-of-use (ROU) asset represents the lessee's right to use the underlying asset for the lease term. It is recognized on the balance sheet and depreciated over the lease term.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "pbc_quiz_2");
    record6.set("question_text", "What is the lease liability in IFRS 16?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"The lessee's obligation to pay lease payments\", \"The lessor's obligation to maintain the asset\", \"The equipment cost\", \"The residual value guarantee\"]");
    record6.set("correct_answer", "The lessee's obligation to pay lease payments");
    record6.set("explanation", "The lease liability represents the lessee's obligation to pay lease payments. It is measured at the present value of lease payments and recognized on the balance sheet.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "pbc_quiz_2");
    record7.set("question_text", "What is the depreciation method for ROU assets in IFRS 16?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "[\"Accelerated depreciation\", \"Straight-line depreciation\", \"Units of production\", \"Sum-of-years-digits\"]");
    record7.set("correct_answer", "Straight-line depreciation");
    record7.set("explanation", "IFRS 16 requires straight-line depreciation of the ROU asset over the lease term. This is the standard depreciation method for lease accounting.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "pbc_quiz_2");
    record8.set("question_text", "What is a finance lease in IFRS 16 (lessor perspective)?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "[\"A lease that does not transfer ownership\", \"A lease that transfers substantially all risks and rewards\", \"A short-term lease\", \"A lease with variable payments\"]");
    record8.set("correct_answer", "A lease that transfers substantially all risks and rewards");
    record8.set("explanation", "A finance lease is a lease that transfers substantially all the risks and rewards of ownership to the lessee. The lessor recognizes a lease receivable and finance income.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "pbc_quiz_2");
    record9.set("question_text", "What is the primary impact of IFRS 16 on financial statements?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "[\"Decreases total assets\", \"Increases total liabilities\", \"Increases both assets and liabilities\", \"No impact on balance sheet\"]");
    record9.set("correct_answer", "Increases both assets and liabilities");
    record9.set("explanation", "The primary impact of IFRS 16 is that both total assets (ROU assets) and total liabilities (lease liabilities) increase on the balance sheet, as operating leases are now recognized.");
    record9.set("order", 10);
  app.save(record9);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})