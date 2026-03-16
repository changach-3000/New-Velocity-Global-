/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "pbc_quiz_1");
    record0.set("question_text", "What is the primary difference between IFRS 16 and ASC 842?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"IFRS 16 is for international companies, ASC 842 is for US companies\", \"IFRS 16 requires balance sheet recognition, ASC 842 does not\", \"IFRS 16 uses incremental borrowing rate, ASC 842 uses implicit rate\", \"IFRS 16 is for lessees, ASC 842 is for lessors\"]");
    record0.set("correct_answer", "IFRS 16 is for international companies, ASC 842 is for US companies");
    record0.set("explanation", "IFRS 16 is the international standard issued by IASB, while ASC 842 is the US GAAP standard issued by FASB. Both standards use similar accounting models.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "pbc_quiz_1");
    record1.set("question_text", "What is the discount rate difference between IFRS 16 and ASC 842?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"IFRS 16 uses implicit rate, ASC 842 uses incremental borrowing rate\", \"IFRS 16 uses incremental borrowing rate, ASC 842 uses implicit rate\", \"Both use the same discount rate\", \"IFRS 16 uses WACC, ASC 842 uses implicit rate\"]");
    record1.set("correct_answer", "Both use the same discount rate");
    record1.set("explanation", "Both IFRS 16 and ASC 842 use implicit rate if known, otherwise incremental borrowing rate. The discount rate selection is the same under both standards.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "pbc_quiz_1");
    record2.set("question_text", "What is the transition approach difference between IFRS 16 and ASC 842?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"IFRS 16 uses modified retrospective, ASC 842 uses full retrospective\", \"IFRS 16 uses full retrospective, ASC 842 uses modified retrospective\", \"Both use the same transition approach\", \"IFRS 16 uses prospective, ASC 842 uses modified retrospective\"]");
    record2.set("correct_answer", "IFRS 16 uses full retrospective, ASC 842 uses modified retrospective");
    record2.set("explanation", "IFRS 16 allows full retrospective or modified retrospective approach, while ASC 842 requires modified retrospective approach without restatement of prior periods.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "pbc_quiz_1");
    record3.set("question_text", "What is the primary similarity between IFRS 16 and ASC 842?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"Both use operating vs. finance lease distinction\", \"Both use single lease accounting model\", \"Both use off-balance sheet treatment\", \"Both use lessor-focused accounting\"]");
    record3.set("correct_answer", "Both use single lease accounting model");
    record3.set("explanation", "The primary similarity is that both IFRS 16 and ASC 842 use a single lease accounting model that requires recognition of ROU asset and lease liability for all leases.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "pbc_quiz_1");
    record4.set("question_text", "What is the primary convergence area between IFRS 16 and ASC 842?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"Discount rate selection\", \"Transition approach\", \"Core lease accounting model\", \"Practical expedients\"]");
    record4.set("correct_answer", "Core lease accounting model");
    record4.set("explanation", "The primary convergence area is the core lease accounting model, where both standards require recognition of ROU asset and lease liability on the balance sheet.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "pbc_quiz_1");
    record5.set("question_text", "What is the primary divergence area between IFRS 16 and ASC 842?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "[\"Lease definition\", \"ROU asset recognition\", \"Discount rate selection\", \"Lease liability measurement\"]");
    record5.set("correct_answer", "Discount rate selection");
    record5.set("explanation", "While both standards use similar discount rate selection, there are minor differences in how the implicit rate and incremental borrowing rate are applied in certain situations.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "pbc_quiz_1");
    record6.set("question_text", "What is the first phase of lease accounting implementation?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"Design\", \"Build\", \"Assessment\", \"Test\"]");
    record6.set("correct_answer", "Assessment");
    record6.set("explanation", "The assessment phase is the first phase where all leases are identified, current accounting is assessed, and gaps are identified. This results in a lease inventory.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "pbc_quiz_1");
    record7.set("question_text", "What is the primary deliverable of the assessment phase?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "[\"Accounting policies\", \"System design\", \"Lease inventory\", \"Test results\"]");
    record7.set("correct_answer", "Lease inventory");
    record7.set("explanation", "The primary deliverable of the assessment phase is a comprehensive lease inventory that documents all leases and their key terms.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "pbc_quiz_1");
    record8.set("question_text", "What is the primary impact of lease accounting implementation?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "[\"Decreases total assets\", \"Increases total liabilities\", \"Increases both assets and liabilities\", \"No impact on balance sheet\"]");
    record8.set("correct_answer", "Increases both assets and liabilities");
    record8.set("explanation", "The primary impact of implementing lease accounting standards is that both total assets (ROU assets) and total liabilities (lease liabilities) increase on the balance sheet.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "pbc_quiz_1");
    record9.set("question_text", "What is the primary benefit of implementing lease accounting standards?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "[\"Reduces lease costs\", \"Eliminates operating leases\", \"Ensures accurate financial reporting and transparency\", \"Increases lease flexibility\"]");
    record9.set("correct_answer", "Ensures accurate financial reporting and transparency");
    record9.set("explanation", "The primary benefit is ensuring accurate financial reporting and transparency by recognizing all leases on the balance sheet, providing stakeholders with complete information about lease obligations.");
    record9.set("order", 10);
  app.save(record9);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})