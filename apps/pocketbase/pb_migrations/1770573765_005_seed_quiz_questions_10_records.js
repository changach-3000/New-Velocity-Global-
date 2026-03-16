/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "quiz_1");
    record0.set("question_text", "What is the role of negotiation in lease structuring?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"To reach mutually beneficial terms for both parties\", \"To maximize lessor profits only\", \"To minimize lessee costs only\", \"To simplify documentation\"]");
    record0.set("correct_answer", "To reach mutually beneficial terms for both parties");
    record0.set("explanation", "Effective negotiation in lease structuring aims to create mutually beneficial terms that satisfy both lessor and lessee objectives.");
    record0.set("order", 9);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "quiz_1");
    record1.set("question_text", "What is a master lease agreement?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"An umbrella agreement covering multiple individual leases\", \"A single lease for one asset\", \"A lease with multiple lessees\", \"A temporary lease arrangement\"]");
    record1.set("correct_answer", "An umbrella agreement covering multiple individual leases");
    record1.set("explanation", "A master lease agreement is an umbrella contract that establishes terms and conditions for multiple individual leases under a single framework.");
    record1.set("order", 10);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "quiz_2");
    record2.set("question_text", "What is the implicit rate in a lease?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"The discount rate that makes the present value of lease payments equal to the asset's fair value\", \"The lessor's cost of capital\", \"The lessee's borrowing rate\", \"The inflation rate\"]");
    record2.set("correct_answer", "The discount rate that makes the present value of lease payments equal to the asset's fair value");
    record2.set("explanation", "The implicit rate is the discount rate at which the present value of lease payments equals the fair value of the leased asset from the lessor's perspective.");
    record2.set("order", 9);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "quiz_2");
    record3.set("question_text", "How does the lease term affect valuation?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"Longer terms reduce the present value of payments\", \"Longer terms increase the present value of payments\", \"Lease term has no impact on valuation\", \"Lease term only affects operating leases\"]");
    record3.set("correct_answer", "Longer terms reduce the present value of payments");
    record3.set("explanation", "Longer lease terms spread payments over more periods, reducing the present value of total payments when discounted at the same rate.");
    record3.set("order", 10);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "quiz_3");
    record4.set("question_text", "What is the purpose of insurance requirements in lease agreements?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"To protect the lessor's interest in the asset\", \"To reduce lease payments\", \"To simplify accounting\", \"To increase lessee costs\"]");
    record4.set("correct_answer", "To protect the lessor's interest in the asset");
    record4.set("explanation", "Insurance requirements protect the lessor's interest by ensuring the asset is insured against loss or damage during the lease term.");
    record4.set("order", 9);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "quiz_3");
    record5.set("question_text", "What is the impact of lessee financial distress on lease risk?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "[\"It increases the risk of payment default\", \"It has no impact on lease risk\", \"It decreases residual value risk\", \"It only affects operating leases\"]");
    record5.set("correct_answer", "It increases the risk of payment default");
    record5.set("explanation", "Lessee financial distress significantly increases the risk that lease payments will not be made, requiring enhanced monitoring and risk management.");
    record5.set("order", 10);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "quiz_4");
    record6.set("question_text", "What is the lease commencement date?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"The date when the lessee obtains control of the asset\", \"The date the lease agreement is signed\", \"The date the first payment is made\", \"The date the asset is delivered\"]");
    record6.set("correct_answer", "The date when the lessee obtains control of the asset");
    record6.set("explanation", "Under IFRS 16 and ASC 842, the lease commencement date is when the lessee obtains the right to use the asset, which triggers recognition of the right-of-use asset.");
    record6.set("order", 9);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "quiz_4");
    record7.set("question_text", "How should variable lease payments be treated under IFRS 16?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "[\"They are excluded from the lease liability\", \"They are included in the lease liability if they depend on an index or rate\", \"They are always included in the lease liability\", \"They are treated as operating expenses\"]");
    record7.set("correct_answer", "They are included in the lease liability if they depend on an index or rate");
    record7.set("explanation", "Variable lease payments that depend on an index or rate (e.g., CPI adjustments) are included in the lease liability; other variable payments are expensed as incurred.");
    record7.set("order", 10);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "quiz_5");
    record8.set("question_text", "What is the purpose of portfolio reporting?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "[\"To communicate portfolio performance and risk to stakeholders\", \"To reduce administrative burden\", \"To increase portfolio size\", \"To minimize tax obligations\"]");
    record8.set("correct_answer", "To communicate portfolio performance and risk to stakeholders");
    record8.set("explanation", "Portfolio reporting provides stakeholders with information about portfolio performance, risk levels, and compliance with investment objectives.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "quiz_5");
    record9.set("question_text", "What metrics should be included in portfolio reports?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "[\"Return metrics, risk metrics, and portfolio composition\", \"Only return metrics\", \"Only risk metrics\", \"Only portfolio size\"]");
    record9.set("correct_answer", "Return metrics, risk metrics, and portfolio composition");
    record9.set("explanation", "Comprehensive portfolio reports include return metrics (yield, ROA), risk metrics (default rates, concentration), and composition details (asset types, industries).");
    record9.set("order", 10);
  app.save(record9);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})