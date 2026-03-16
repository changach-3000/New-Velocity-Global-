/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "Lesson 4 Quiz");
    record0.set("question_text", "What are the key differences between IFRS 16 and ASC 842 lease definitions?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "IFRS 16 uses a control-based approach while ASC 842 uses a right-of-use approach; IFRS 16 has broader definition of lease; ASC 842 requires assessment of control over identified asset");
    record0.set("correct_answer", "IFRS 16 uses a control-based approach while ASC 842 uses a right-of-use approach; IFRS 16 has broader definition of lease; ASC 842 requires assessment of control over identified asset");
    record0.set("explanation", "IFRS 16 and ASC 842 have different lease definitions that impact lease identification. IFRS 16 uses a control-based approach focusing on whether the customer has the right to direct the use and obtain substantially all benefits, while ASC 842 uses a right-of-use approach with more specific criteria. IFRS 16's definition is broader and captures more arrangements as leases.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "Lesson 4 Quiz");
    record1.set("question_text", "How does the lease classification approach differ between IFRS 16 and ASC 842?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "IFRS 16 uses single model for all leases; ASC 842 uses dual model (operating vs finance); IFRS 16 eliminates operating lease classification");
    record1.set("correct_answer", "IFRS 16 uses single model for all leases; ASC 842 uses dual model (operating vs finance); IFRS 16 eliminates operating lease classification");
    record1.set("explanation", "IFRS 16 single model recognizes ROU asset and liability for all leases without distinguishing between operating and finance leases. ASC 842 maintains the traditional operating/finance distinction, though both types now recognize ROU assets and liabilities. IFRS 16 eliminates the operating lease classification entirely.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "Lesson 4 Quiz");
    record2.set("question_text", "What are the differences in initial measurement of ROU assets under IFRS 16 vs ASC 842?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "IFRS 16 excludes initial direct costs from ROU asset; ASC 842 includes initial direct costs; Different treatment of lease incentives");
    record2.set("correct_answer", "IFRS 16 excludes initial direct costs from ROU asset; ASC 842 includes initial direct costs; Different treatment of lease incentives");
    record2.set("explanation", "Initial measurement approaches differ significantly. IFRS 16 excludes initial direct costs from the ROU asset (they are expensed), while ASC 842 includes them. Additionally, IFRS 16 reduces the ROU asset by lease incentives, while ASC 842 reduces the lease liability instead.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "Lesson 4 Quiz");
    record3.set("question_text", "How do disclosure requirements differ between IFRS 16 and ASC 842?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "IFRS 16 requires more detailed qualitative disclosures; ASC 842 requires specific quantitative tables; Different maturity analysis formats");
    record3.set("correct_answer", "IFRS 16 requires more detailed qualitative disclosures; ASC 842 requires specific quantitative tables; Different maturity analysis formats");
    record3.set("explanation", "Disclosure requirements vary in format and detail between standards. IFRS 16 emphasizes qualitative disclosures about leasing activities and sensitivity analysis, while ASC 842 requires more specific quantitative tables and detailed maturity analyses. The maturity analysis formats also differ between the standards.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "Lesson 4 Quiz");
    record4.set("question_text", "What are the practical implications of IFRS 16 vs ASC 842 for multinational companies?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "Multinational companies must maintain dual reporting systems; Different financial ratios impact; Debt covenant compliance varies; Transition strategies needed");
    record4.set("correct_answer", "Multinational companies must maintain dual reporting systems; Different financial ratios impact; Debt covenant compliance varies; Transition strategies needed");
    record4.set("explanation", "Multinational companies face significant practical challenges in managing dual reporting requirements. They must maintain separate systems for IFRS 16 (typically for international operations) and ASC 842 (for US operations). This impacts financial ratios differently under each standard, affects debt covenant compliance, and requires comprehensive transition strategies.");
    record4.set("order", 5);
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})