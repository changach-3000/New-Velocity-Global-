/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "advanced_quiz_1");
    record0.set("question_text", "What is the primary advantage of a sale-leaseback transaction?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"Immediate cash flow\", \"Tax benefits\", \"Operational flexibility\", \"All of the above\"]");
    record0.set("correct_answer", "All of the above");
    record0.set("explanation", "Sale-leaseback transactions provide multiple benefits including immediate cash flow, tax advantages, and operational flexibility.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "advanced_quiz_1");
    record1.set("question_text", "Sale-leaseback transactions are only suitable for real estate assets.");
    record1.set("question_type", "true_false");
    record1.set("options", "[\"True\", \"False\"]");
    record1.set("correct_answer", "False");
    record1.set("explanation", "Sale-leaseback transactions can apply to various asset types including equipment, vehicles, and real estate.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "advanced_quiz_1");
    record2.set("question_text", "Which factor is most critical in lease modification analysis?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"Original lease terms\", \"Changes in economic circumstances\", \"Accounting treatment impact\", \"Lessor preferences\"]");
    record2.set("correct_answer", "Changes in economic circumstances");
    record2.set("explanation", "Economic changes drive the need for lease modifications and determine their accounting treatment.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "advanced_quiz_1");
    record3.set("question_text", "International leasing requires understanding multiple regulatory frameworks.");
    record3.set("question_type", "true_false");
    record3.set("options", "[\"True\", \"False\"]");
    record3.set("correct_answer", "True");
    record3.set("explanation", "Different countries have varying lease accounting standards, tax implications, and regulatory requirements.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "advanced_quiz_2");
    record4.set("question_text", "What is the primary tax benefit of leasing versus buying?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"Depreciation deductions\", \"Lease payment deductibility\", \"Capital cost allowance\", \"Interest expense reduction\"]");
    record4.set("correct_answer", "Lease payment deductibility");
    record4.set("explanation", "Lease payments are typically fully deductible as operating expenses, providing tax benefits.");
    record4.set("order", 1);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "advanced_quiz_2");
    record5.set("question_text", "Portfolio risk in leasing is primarily driven by counterparty credit risk.");
    record5.set("question_type", "true_false");
    record5.set("options", "[\"True\", \"False\"]");
    record5.set("correct_answer", "True");
    record5.set("explanation", "Counterparty credit risk is a major component of portfolio risk in leasing arrangements.");
    record5.set("order", 2);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "advanced_quiz_2");
    record6.set("question_text", "Which risk mitigation strategy is most effective for large lease portfolios?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"Diversification\", \"Hedging\", \"Insurance\", \"All of the above\"]");
    record6.set("correct_answer", "All of the above");
    record6.set("explanation", "Effective portfolio risk management uses multiple strategies including diversification, hedging, and insurance.");
    record6.set("order", 3);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "advanced_quiz_2");
    record7.set("question_text", "Lease restructuring always improves financial outcomes.");
    record7.set("question_type", "true_false");
    record7.set("options", "[\"True\", \"False\"]");
    record7.set("correct_answer", "False");
    record7.set("explanation", "Restructuring must be carefully analyzed to ensure it improves outcomes and doesn't create new risks.");
    record7.set("order", 4);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "lease_accounting_quiz_1");
    record8.set("question_text", "Under IFRS 16, what is the primary criterion for lease classification?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "[\"Lease term length\", \"Whether the lessee obtains control of the asset\", \"Payment amount\", \"Lessor type\"]");
    record8.set("correct_answer", "Whether the lessee obtains control of the asset");
    record8.set("explanation", "IFRS 16 focuses on whether the lessee controls the asset during the lease term.");
    record8.set("order", 1);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "lease_accounting_quiz_1");
    record9.set("question_text", "IFRS 16 requires recognition of a right-of-use asset and lease liability for all leases.");
    record9.set("question_type", "true_false");
    record9.set("options", "[\"True\", \"False\"]");
    record9.set("correct_answer", "True");
    record9.set("explanation", "IFRS 16 requires recognition of ROU assets and lease liabilities for all leases except short-term and low-value leases.");
    record9.set("order", 2);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("quiz_id", "lease_accounting_quiz_1");
    record10.set("question_text", "How is the lease liability initially measured under IFRS 16?");
    record10.set("question_type", "multiple_choice");
    record10.set("options", "[\"Present value of lease payments\", \"Fair value of asset\", \"Lease term value\", \"Lessor's cost\"]");
    record10.set("correct_answer", "Present value of lease payments");
    record10.set("explanation", "The lease liability is measured as the present value of lease payments discounted at the incremental borrowing rate.");
    record10.set("order", 3);
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("quiz_id", "lease_accounting_quiz_1");
    record11.set("question_text", "The right-of-use asset is depreciated over the lease term under IFRS 16.");
    record11.set("question_type", "true_false");
    record11.set("options", "[\"True\", \"False\"]");
    record11.set("correct_answer", "True");
    record11.set("explanation", "The ROU asset is depreciated over the lease term using the straight-line method.");
    record11.set("order", 4);
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("quiz_id", "lease_accounting_quiz_2");
    record12.set("question_text", "What is the key difference between ASC 842 and IFRS 16 regarding lease classification?");
    record12.set("question_type", "multiple_choice");
    record12.set("options", "[\"ASC 842 has more categories\", \"IFRS 16 is simpler\", \"ASC 842 distinguishes between operating and finance leases\", \"No significant difference\"]");
    record12.set("correct_answer", "ASC 842 distinguishes between operating and finance leases");
    record12.set("explanation", "ASC 842 maintains the distinction between operating and finance leases, while IFRS 16 uses a single model.");
    record12.set("order", 1);
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("quiz_id", "lease_accounting_quiz_2");
    record13.set("question_text", "Under ASC 842, operating leases require recognition of a lease liability and ROU asset.");
    record13.set("question_type", "true_false");
    record13.set("options", "[\"True\", \"False\"]");
    record13.set("correct_answer", "True");
    record13.set("explanation", "ASC 842 requires recognition of lease liabilities and ROU assets for both operating and finance leases.");
    record13.set("order", 2);
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("quiz_id", "lease_accounting_quiz_2");
    record14.set("question_text", "What is the incremental borrowing rate used for in lease accounting?");
    record14.set("question_type", "multiple_choice");
    record14.set("options", "[\"Determining lease term\", \"Discounting lease payments\", \"Calculating depreciation\", \"Measuring residual value\"]");
    record14.set("correct_answer", "Discounting lease payments");
    record14.set("explanation", "The incremental borrowing rate is used to discount lease payments to present value.");
    record14.set("order", 3);
  app.save(record14);

  const record15 = new Record(collection);
    record15.set("quiz_id", "lease_accounting_quiz_2");
    record15.set("question_text", "ASC 842 requires the same disclosure requirements as IFRS 16.");
    record15.set("question_type", "true_false");
    record15.set("options", "[\"True\", \"False\"]");
    record15.set("correct_answer", "False");
    record15.set("explanation", "While similar, ASC 842 and IFRS 16 have different disclosure requirements tailored to their respective frameworks.");
    record15.set("order", 4);
  app.save(record15);

  const record16 = new Record(collection);
    record16.set("quiz_id", "lease_accounting_quiz_3");
    record16.set("question_text", "Which of the following is NOT a required disclosure under IFRS 16?");
    record16.set("question_type", "multiple_choice");
    record16.set("options", "[\"Lease payment schedule\", \"Lessor's profit margin\", \"Lease liability maturity analysis\", \"ROU asset depreciation\"]");
    record16.set("correct_answer", "Lessor's profit margin");
    record16.set("explanation", "Lessor's profit margin is not a required disclosure; focus is on lease obligations and asset information.");
    record16.set("order", 1);
  app.save(record16);

  const record17 = new Record(collection);
    record17.set("quiz_id", "lease_accounting_quiz_3");
    record17.set("question_text", "Compliance with lease accounting standards requires regular review and updates.");
    record17.set("question_type", "true_false");
    record17.set("options", "[\"True\", \"False\"]");
    record17.set("correct_answer", "True");
    record17.set("explanation", "Lease accounting requires ongoing monitoring for modifications, reassessments, and changes in circumstances.");
    record17.set("order", 2);
  app.save(record17);

  const record18 = new Record(collection);
    record18.set("quiz_id", "lease_accounting_quiz_3");
    record18.set("question_text", "What is the primary purpose of lease accounting standards?");
    record18.set("question_type", "multiple_choice");
    record18.set("options", "[\"Reduce lessor profits\", \"Provide transparent financial reporting\", \"Simplify lease documentation\", \"Eliminate lease transactions\"]");
    record18.set("correct_answer", "Provide transparent financial reporting");
    record18.set("explanation", "Lease accounting standards aim to provide users with transparent and comparable financial information.");
    record18.set("order", 3);
  app.save(record18);

  const record19 = new Record(collection);
    record19.set("quiz_id", "lease_accounting_quiz_3");
    record19.set("question_text", "Short-term leases are exempt from IFRS 16 recognition requirements.");
    record19.set("question_type", "true_false");
    record19.set("options", "[\"True\", \"False\"]");
    record19.set("correct_answer", "True");
    record19.set("explanation", "IFRS 16 provides an exemption for short-term leases (12 months or less) and low-value leases.");
    record19.set("order", 4);
  app.save(record19);

  const record20 = new Record(collection);
    record20.set("quiz_id", "practical_quiz_1");
    record20.set("question_text", "What is the primary goal of lease vs buy analysis?");
    record20.set("question_type", "multiple_choice");
    record20.set("options", "[\"Minimize costs\", \"Maximize flexibility\", \"Make optimal financial decision\", \"Reduce accounting complexity\"]");
    record20.set("correct_answer", "Make optimal financial decision");
    record20.set("explanation", "Lease vs buy analysis aims to determine which option provides the best overall financial outcome.");
    record20.set("order", 1);
  app.save(record20);

  const record21 = new Record(collection);
    record21.set("quiz_id", "practical_quiz_1");
    record21.set("question_text", "Lease vs buy analysis should only consider financial factors.");
    record21.set("question_type", "true_false");
    record21.set("options", "[\"True\", \"False\"]");
    record21.set("correct_answer", "False");
    record21.set("explanation", "Analysis should consider financial, operational, and strategic factors.");
    record21.set("order", 2);
  app.save(record21);

  const record22 = new Record(collection);
    record22.set("quiz_id", "practical_quiz_1");
    record22.set("question_text", "Which metric is most important in lease vs buy decisions?");
    record22.set("question_type", "multiple_choice");
    record22.set("options", "[\"Net present value\", \"Internal rate of return\", \"Payback period\", \"All are important\"]");
    record22.set("correct_answer", "All are important");
    record22.set("explanation", "Multiple metrics should be evaluated to make comprehensive lease vs buy decisions.");
    record22.set("order", 3);
  app.save(record22);

  const record23 = new Record(collection);
    record23.set("quiz_id", "practical_quiz_1");
    record23.set("question_text", "Tax implications are a critical factor in lease vs buy analysis.");
    record23.set("question_type", "true_false");
    record23.set("options", "[\"True\", \"False\"]");
    record23.set("correct_answer", "True");
    record23.set("explanation", "Tax benefits and implications significantly impact the financial outcome of lease vs buy decisions.");
    record23.set("order", 4);
  app.save(record23);

  const record24 = new Record(collection);
    record24.set("quiz_id", "practical_quiz_2");
    record24.set("question_text", "What is the most effective negotiation strategy for lease agreements?");
    record24.set("question_type", "multiple_choice");
    record24.set("options", "[\"Aggressive demands\", \"Understanding lessor's position\", \"Accepting first offer\", \"Avoiding discussions\"]");
    record24.set("correct_answer", "Understanding lessor's position");
    record24.set("explanation", "Effective negotiation requires understanding the lessor's constraints and finding mutually beneficial solutions.");
    record24.set("order", 1);
  app.save(record24);

  const record25 = new Record(collection);
    record25.set("quiz_id", "practical_quiz_2");
    record25.set("question_text", "Industry-specific leasing practices have minimal impact on lease decisions.");
    record25.set("question_type", "true_false");
    record25.set("options", "[\"True\", \"False\"]");
    record25.set("correct_answer", "False");
    record25.set("explanation", "Industry practices, standards, and norms significantly influence leasing decisions and terms.");
    record25.set("order", 2);
  app.save(record25);

  const record26 = new Record(collection);
    record26.set("quiz_id", "practical_quiz_2");
    record26.set("question_text", "Which factor is most critical in lease decision-making for finance professionals?");
    record26.set("question_type", "multiple_choice");
    record26.set("options", "[\"Lessor reputation\", \"Financial impact on statements\", \"Lease term length\", \"Payment frequency\"]");
    record26.set("correct_answer", "Financial impact on statements");
    record26.set("explanation", "Finance professionals must prioritize understanding the financial and accounting impact of lease decisions.");
    record26.set("order", 3);
  app.save(record26);

  const record27 = new Record(collection);
    record27.set("quiz_id", "practical_quiz_2");
    record27.set("question_text", "Lease documentation should be reviewed by legal and finance teams.");
    record27.set("question_type", "true_false");
    record27.set("options", "[\"True\", \"False\"]");
    record27.set("correct_answer", "True");
    record27.set("explanation", "Comprehensive review by both legal and finance teams ensures all risks and implications are understood.");
    record27.set("order", 4);
  app.save(record27);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})