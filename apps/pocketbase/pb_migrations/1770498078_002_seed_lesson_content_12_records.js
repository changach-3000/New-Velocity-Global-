/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  // Look up lesson IDs from the lessons collection
  let lesson1_1, lesson1_2;

  try {
    lesson1_1 = app.findFirstRecordByFilter("lessons", "order = 1 && module_id.order = 1");
  } catch (e) {
    // fallback: grab first lesson
    try {
      lesson1_1 = app.findFirstRecordByFilter("lessons", "1=1");
    } catch (e2) {
      throw new Error("Could not find any lesson for lesson_1_1: " + e2);
    }
  }

  try {
    lesson1_2 = app.findFirstRecordByFilter("lessons", "order = 2 && module_id.order = 1");
  } catch (e) {
    // fallback: grab second lesson by trying a different filter
    try {
      const lessonsCollection = app.findCollectionByNameOrId("lessons");
      const results = app.findRecordsByFilter("lessons", "1=1", "+created", 2, 0);
      if (results.length < 2) {
        throw new Error("Less than 2 lessons found in lessons collection");
      }
      lesson1_2 = results[1];
    } catch (e2) {
      throw new Error("Could not find lesson for lesson_1_2: " + e2);
    }
  }

  const lesson1_1_id = lesson1_1.id;
  const lesson1_2_id = lesson1_2.id;

  const collection = app.findCollectionByNameOrId("lesson_content");

  const record0 = new Record(collection);
  record0.set("lesson_id", lesson1_1_id);
  record0.set("content_body", "**Section 1: Lease Accounting Standards Overview**\n\nWhat is Lease Accounting?\n- Accounting treatment of lease transactions\n- Recognition, measurement, and disclosure\n- Compliance with accounting standards\n- Example: Recording lease liability and right-of-use asset\n\nLease Accounting Standards:\n\n1. IFRS 16 (International Financial Reporting Standards):\n   - Effective date: January 1, 2019\n   - Applies to: Public companies in IFRS jurisdictions\n   - Key principle: All leases recognized on balance sheet\n   - Example: EU, UK, Australia, Canada\n\n2. ASC 842 (US GAAP - Accounting Standards Codification):\n   - Effective date: January 1, 2019 (public), 2022 (private)\n   - Applies to: US public and private companies\n   - Key principle: All leases recognized on balance sheet\n   - Example: US companies, SEC registrants\n\n3. Previous Standards:\n   - IAS 17 (IFRS): Operating vs. Finance lease distinction\n   - ASC 840 (US GAAP): Operating vs. Finance lease distinction\n   - Example: Many leases were off-balance sheet");
  app.save(record0);

  const record1 = new Record(collection);
  record1.set("lesson_id", lesson1_1_id);
  record1.set("content_body", "**Section 2: Key Principles of IFRS 16**\n\nIFRS 16 Overview:\n- Single lease accounting model\n- All leases recognized on balance sheet\n- Lessee and lessor accounting\n- Effective January 1, 2019\n\nIFRS 16 Key Principles:\n\n1. Right-of-Use Asset:\n   - Lessee recognizes right to use asset\n   - Measured at cost\n   - Depreciated over lease term\n   - Example: $100K equipment lease = $100K ROU asset\n\n2. Lease Liability:\n   - Lessee recognizes obligation to pay\n   - Measured at present value of lease payments\n   - Discounted at incremental borrowing rate\n   - Example: $100K lease payments = $95K liability (discounted)\n\n3. Lease Payments:\n   - Fixed payments\n   - Variable payments (linked to index)\n   - Residual value guarantees\n   - Example: $5,000/month fixed + $500/month variable\n\n4. Lease Term:\n   - Non-cancellable period\n   - Plus renewal periods (if reasonably certain)\n   - Example: 5-year lease + 2-year renewal option = 7-year term\n\n5. Incremental Borrowing Rate:\n   - Rate to borrow funds for asset\n   - Used to discount lease payments\n   - If implicit rate unknown, use incremental rate\n   - Example: 5% incremental borrowing rate\n\n6. Lease Modifications:\n   - Changes to lease terms\n   - Remeasure liability and asset\n   - Example: Extension of lease term = remeasurement");
  app.save(record1);

  const record2 = new Record(collection);
  record2.set("lesson_id", lesson1_1_id);
  record2.set("content_body", "**Section 3: Key Principles of ASC 842**\n\nASC 842 Overview:\n- Single lease accounting model (similar to IFRS 16)\n- All leases recognized on balance sheet\n- Lessee and lessor accounting\n- Effective January 1, 2019 (public), 2022 (private)\n\nASC 842 Key Principles:\n\n1. Right-of-Use Asset:\n   - Lessee recognizes right to use asset\n   - Measured at cost\n   - Amortized over lease term\n   - Example: $100K equipment lease = $100K ROU asset\n\n2. Lease Liability:\n   - Lessee recognizes obligation to pay\n   - Measured at present value of lease payments\n   - Discounted at incremental borrowing rate or implicit rate\n   - Example: $100K lease payments = $95K liability (discounted)\n\n3. Lease Payments:\n   - Fixed payments\n   - Variable payments (linked to index)\n   - Residual value guarantees\n   - Example: $5,000/month fixed + $500/month variable\n\n4. Lease Term:\n   - Non-cancellable period\n   - Plus renewal periods (if reasonably certain)\n   - Example: 5-year lease + 2-year renewal option = 7-year term\n\n5. Discount Rate:\n   - Implicit rate (if known)\n   - Incremental borrowing rate (if implicit rate unknown)\n   - Example: 5% implicit rate or 6% incremental borrowing rate\n\n6. Lease Modifications:\n   - Changes to lease terms\n   - Remeasure liability and asset\n   - Example: Extension of lease term = remeasurement");
  app.save(record2);

  const record3 = new Record(collection);
  record3.set("lesson_id", lesson1_1_id);
  record3.set("content_body", "**Section 4: Comparison of IFRS 16 and ASC 842**\n\nSimilarities:\n- Both use single lease accounting model\n- Both recognize all leases on balance sheet\n- Both use right-of-use asset and lease liability\n- Both effective January 1, 2019\n- Example: Both require balance sheet recognition\n\nDifferences:\n\n1. Discount Rate:\n   - IFRS 16: Incremental borrowing rate (if implicit rate unknown)\n   - ASC 842: Implicit rate (if known), otherwise incremental borrowing rate\n   - Impact: May result in different liability amounts\n\n2. Lease Modifications:\n   - IFRS 16: Remeasure if modification changes scope or consideration\n   - ASC 842: Remeasure if modification is not anticipated\n   - Impact: Different accounting treatment\n\n3. Lessor Accounting:\n   - IFRS 16: Finance and operating leases\n   - ASC 842: Finance and operating leases (similar)\n   - Impact: Similar treatment\n\n4. Transition:\n   - IFRS 16: Full retrospective or modified retrospective\n   - ASC 842: Modified retrospective (no restatement of prior periods)\n   - Impact: Different transition approaches");
  app.save(record3);

  const record4 = new Record(collection);
  record4.set("lesson_id", lesson1_1_id);
  record4.set("content_body", "**Section 5: Case Study - Lease Accounting Standards**\n\nCompany: StandardLeasing Inc.\nSituation: Implementing IFRS 16 and ASC 842 for lease accounting\n\nLease Details:\n- Equipment: Manufacturing equipment\n- Equipment cost: $500,000\n- Lease term: 5 years (60 months)\n- Monthly payment: $10,000\n- Incremental borrowing rate: 5% annual\n- Implicit rate: Unknown\n- Residual value guarantee: $50,000\n\nIFRS 16 Accounting:\n\nLease Liability Calculation:\n- Monthly payment: $10,000\n- Number of payments: 60\n- Discount rate: 5% annual (incremental borrowing rate)\n- Present value of payments: $432,328\n- Residual value guarantee: $50,000 \u00d7 (1.05)^-5 = $39,176\n- Total lease liability: $471,504\n\nRight-of-Use Asset:\n- Lease liability: $471,504\n- Direct costs: $5,000\n- Initial direct costs: $5,000\n- ROU asset: $476,504\n\nASC 842 Accounting:\n\nLease Liability Calculation:\n- Monthly payment: $10,000\n- Number of payments: 60\n- Discount rate: 5% annual (incremental borrowing rate, implicit rate unknown)\n- Present value of payments: $432,328\n- Residual value guarantee: $50,000 \u00d7 (1.05)^-5 = $39,176\n- Total lease liability: $471,504\n\nRight-of-Use Asset:\n- Lease liability: $471,504\n- Initial direct costs: $5,000\n- ROU asset: $476,504\n\nComparison:\n- IFRS 16 and ASC 842 result in same amounts (in this case)\n- Both recognize $471,504 lease liability\n- Both recognize $476,504 ROU asset");
  app.save(record4);

  const record5 = new Record(collection);
  record5.set("lesson_id", lesson1_2_id);
  record5.set("content_body", "**Section 1: Lease Classification**\n\nWhat is Lease Classification?\n- Determining type of lease (finance vs. operating)\n- Affects accounting treatment\n- Impacts financial statements\n- Example: Finance lease = balance sheet recognition\n\nLease Classification Criteria:\n\nIFRS 16 Classification:\n- IFRS 16 does not distinguish between finance and operating leases for lessees\n- All leases recognized on balance sheet\n- For lessors: Finance and operating leases distinguished\n- Example: All lessee leases = ROU asset and liability\n\nASC 842 Classification:\n\nFinance Lease (Lessee):\n- Lease transfers ownership\n- Lease contains purchase option (reasonably certain to exercise)\n- Lease term \u2265 75% of asset's economic life\n- Present value of lease payments \u2265 90% of asset's fair value\n- Asset is specialized (no alternative use)\n- Example: 5-year lease of 7-year asset = finance lease\n\nOperating Lease (Lessee):\n- Does not meet finance lease criteria\n- Example: 2-year lease of 10-year asset = operating lease");
  app.save(record5);

  const record6 = new Record(collection);
  record6.set("lesson_id", lesson1_2_id);
  record6.set("content_body", "**Section 2: Lease Recognition Requirements**\n\nLessee Recognition (IFRS 16 and ASC 842):\n\nAt Lease Commencement:\n1. Recognize right-of-use asset\n2. Recognize lease liability\n3. Measure at present value of lease payments\n4. Example: $500K equipment = $500K ROU asset + $450K liability\n\nDuring Lease Term:\n1. Depreciate ROU asset\n2. Accrue interest on lease liability\n3. Record lease payments\n4. Example: Monthly depreciation + interest expense\n\nAt Lease End:\n1. Derecognize ROU asset\n2. Derecognize lease liability\n3. Record any gain/loss\n4. Example: Return equipment, close accounts\n\nLessor Recognition (IFRS 16):\n\nFinance Lease (Lessor):\n1. Derecognize underlying asset\n2. Recognize lease receivable\n3. Recognize finance income\n4. Example: $500K equipment = $500K lease receivable\n\nOperating Lease (Lessor):\n1. Retain underlying asset\n2. Depreciate asset\n3. Recognize lease income\n4. Example: $500K equipment = depreciate over useful life");
  app.save(record6);

  const record7 = new Record(collection);
  record7.set("lesson_id", lesson1_2_id);
  record7.set("content_body", "**Section 3: Lease Accounting Entries**\n\nLessee Accounting Entries:\n\nEntry 1: Lease Commencement\n- Debit: Right-of-Use Asset $500,000\n- Credit: Lease Liability $450,000\n- Credit: Cash $50,000 (initial payment)\n\nEntry 2: Monthly Lease Payment\n- Debit: Lease Liability $9,000\n- Debit: Interest Expense $2,250\n- Credit: Cash $10,000\n- Credit: ROU Asset $1,250 (depreciation)\n\nEntry 3: Monthly Depreciation\n- Debit: Depreciation Expense $8,333\n- Credit: Accumulated Depreciation - ROU Asset $8,333\n\nEntry 4: Lease End\n- Debit: Accumulated Depreciation - ROU Asset $500,000\n- Credit: ROU Asset $500,000\n\nLessor Accounting Entries (Finance Lease):\n\nEntry 1: Lease Commencement\n- Debit: Lease Receivable $600,000\n- Credit: Equipment $500,000\n- Credit: Finance Income (deferred) $100,000\n\nEntry 2: Monthly Lease Payment\n- Debit: Cash $10,000\n- Credit: Lease Receivable $9,000\n- Credit: Finance Income $1,000");
  app.save(record7);

  const record8 = new Record(collection);
  record8.set("lesson_id", lesson1_2_id);
  record8.set("content_body", "**Section 4: Case Study - Lease Classification and Recognition**\n\nCompany: ClassificationLeasing Inc.\nSituation: Classifying and recognizing leases under IFRS 16 and ASC 842\n\nLease 1: Manufacturing Equipment\n\nLease Details:\n- Equipment cost: $500,000\n- Equipment useful life: 7 years\n- Lease term: 5 years\n- Monthly payment: $10,000\n- Residual value guarantee: $50,000\n- Implicit rate: 5%\n\nClassification Analysis:\n\nCriteria 1: Ownership Transfer?\n- No ownership transfer\n- Result: Not met\n\nCriteria 2: Purchase Option?\n- No purchase option\n- Result: Not met\n\nCriteria 3: Lease Term \u2265 75% of Economic Life?\n- Lease term: 5 years\n- Economic life: 7 years\n- Percentage: 71%\n- Result: Not met\n\nCriteria 4: PV of Lease Payments \u2265 90% of Fair Value?\n- PV of payments: $432,328\n- Residual guarantee: $39,176\n- Total PV: $471,504\n- Fair value: $500,000\n- Percentage: 94%\n- Result: MET\n\nClassification: Finance Lease (ASC 842)");
  app.save(record8);

  const record9 = new Record(collection);
  record9.set("lesson_id", lesson1_2_id);
  record9.set("content_body", "**Lease 1 Recognition and Entries**\n\nRecognition:\n\nLease Liability:\n- PV of lease payments: $432,328\n- Residual guarantee: $39,176\n- Total: $471,504\n\nROU Asset:\n- Lease liability: $471,504\n- Initial direct costs: $5,000\n- Total: $476,504\n\nAccounting Entries:\n\nEntry 1: Lease Commencement\n- Debit: ROU Asset $476,504\n- Credit: Lease Liability $471,504\n- Credit: Cash $5,000\n\nEntry 2: First Month\n- Debit: Lease Liability $9,000\n- Debit: Interest Expense $1,964\n- Credit: Cash $10,000\n- Credit: ROU Asset $964\n\nEntry 3: Monthly Depreciation\n- Debit: Depreciation Expense $7,942\n- Credit: Accumulated Depreciation - ROU Asset $7,942");
  app.save(record9);

  const record10 = new Record(collection);
  record10.set("lesson_id", lesson1_2_id);
  record10.set("content_body", "**Lease 2: IT Equipment**\n\nLease Details:\n- Equipment cost: $100,000\n- Equipment useful life: 5 years\n- Lease term: 2 years\n- Monthly payment: $4,500\n- No residual value guarantee\n- Implicit rate: 6%\n\nClassification Analysis:\n\nCriteria 1: Ownership Transfer?\n- No ownership transfer\n- Result: Not met\n\nCriteria 2: Purchase Option?\n- No purchase option\n- Result: Not met\n\nCriteria 3: Lease Term \u2265 75% of Economic Life?\n- Lease term: 2 years\n- Economic life: 5 years\n- Percentage: 40%\n- Result: Not met\n\nCriteria 4: PV of Lease Payments \u2265 90% of Fair Value?\n- PV of payments: $104,000\n- Fair value: $100,000\n- Percentage: 104%\n- Result: MET\n\nClassification: Finance Lease (ASC 842)\n\nRecognition:\n\nLease Liability:\n- PV of lease payments: $104,000\n\nROU Asset:\n- Lease liability: $104,000\n- Initial direct costs: $2,000\n- Total: $106,000");
  app.save(record10);

  const record11 = new Record(collection);
  record11.set("lesson_id", lesson1_2_id);
  record11.set("content_body", "**Lease 2 Accounting Entries**\n\nEntry 1: Lease Commencement\n- Debit: ROU Asset $106,000\n- Credit: Lease Liability $104,000\n- Credit: Cash $2,000\n\nEntry 2: First Month\n- Debit: Lease Liability $4,000\n- Debit: Interest Expense $520\n- Credit: Cash $4,500\n- Credit: ROU Asset $20\n\nEntry 3: Monthly Depreciation\n- Debit: Depreciation Expense $4,417\n- Credit: Accumulated Depreciation - ROU Asset $4,417\n\nKey Takeaways:\n- Both leases classified as finance leases\n- Both require balance sheet recognition\n- ROU asset and lease liability recognized\n- Monthly depreciation and interest expense recorded");
  app.save(record11);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})
