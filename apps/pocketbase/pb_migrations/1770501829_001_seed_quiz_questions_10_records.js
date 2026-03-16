/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "<QUIZ_1_ID>");
    record0.set("question_text", "What is securitization?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"Selling leases to banks\",\"Converting illiquid assets into tradeable securities\",\"Borrowing money from investors\",\"Leasing equipment to customers\"]");
    record0.set("correct_answer", "Converting illiquid assets into tradeable securities");
    record0.set("explanation", "Securitization is the process of converting illiquid assets (like leases) into tradeable securities backed by cash flows.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "<QUIZ_1_ID>");
    record1.set("question_text", "What is the primary benefit of securitization for originators?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"Increases debt\",\"Frees up capital and improves ROE\",\"Reduces lease originations\",\"Increases risk\"]");
    record1.set("correct_answer", "Frees up capital and improves ROE");
    record1.set("explanation", "Securitization frees up capital tied in lease portfolios and improves return on equity by allowing originators to originate new leases.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "<QUIZ_1_ID>");
    record2.set("question_text", "What is an SPV in securitization?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"Special Purpose Vehicle created for securitization\",\"Servicer Payment Vehicle\",\"Security Price Valuation\",\"Subordinated Payment Vehicle\"]");
    record2.set("correct_answer", "Special Purpose Vehicle created for securitization");
    record2.set("explanation", "An SPV (Special Purpose Vehicle) is a separate legal entity created for securitization that holds assets and issues securities.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "<QUIZ_1_ID>");
    record3.set("question_text", "What is the primary role of the servicer?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"Rates securities\",\"Collects lease payments and manages portfolio\",\"Sells securities\",\"Approves leases\"]");
    record3.set("correct_answer", "Collects lease payments and manages portfolio");
    record3.set("explanation", "The servicer collects lease payments from lessees and manages the lease portfolio on behalf of the SPV.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "<QUIZ_1_ID>");
    record4.set("question_text", "What is a tranche in securitization?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"A lease agreement\",\"A portion of securities with different risk/return\",\"A payment schedule\",\"A credit rating\"]");
    record4.set("correct_answer", "A portion of securities with different risk/return");
    record4.set("explanation", "A tranche is a portion of securities issued in a securitization with different risk and return characteristics.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "<QUIZ_1_ID>");
    record5.set("question_text", "What is subordination in securitization?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "[\"Lower tranches absorb losses first\",\"Senior tranches absorb losses first\",\"All tranches absorb losses equally\",\"No losses absorbed\"]");
    record5.set("correct_answer", "Lower tranches absorb losses first");
    record5.set("explanation", "Subordination means lower-rated tranches absorb losses first, protecting senior tranches from credit losses.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "<QUIZ_1_ID>");
    record6.set("question_text", "What is overcollateralization?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"Assets exceed liabilities, providing cushion\",\"Liabilities exceed assets\",\"Equal assets and liabilities\",\"No collateral\"]");
    record6.set("correct_answer", "Assets exceed liabilities, providing cushion");
    record6.set("explanation", "Overcollateralization means the asset pool exceeds the securities issued, providing a cushion against losses.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "<QUIZ_1_ID>");
    record7.set("question_text", "What is the primary role of the trustee?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "[\"Originates leases\",\"Holds assets and distributes cash flows\",\"Rates securities\",\"Sells securities\"]");
    record7.set("correct_answer", "Holds assets and distributes cash flows");
    record7.set("explanation", "The trustee holds the lease assets on behalf of investors and distributes cash flows according to the waterfall.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "<QUIZ_1_ID>");
    record8.set("question_text", "What is a cash flow waterfall?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "[\"Waterfall in the office\",\"Sequence of cash flow distribution to tranches\",\"Lease payment schedule\",\"Equipment depreciation\"]");
    record8.set("correct_answer", "Sequence of cash flow distribution to tranches");
    record8.set("explanation", "A cash flow waterfall is the sequence in which collected cash flows are distributed to different tranches and parties.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "<QUIZ_1_ID>");
    record9.set("question_text", "What is the primary benefit of securitization for investors?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "[\"Guaranteed returns\",\"Yield enhancement and diversification\",\"No risk\",\"Ownership of leases\"]");
    record9.set("correct_answer", "Yield enhancement and diversification");
    record9.set("explanation", "Investors benefit from higher yields than comparable bonds and diversification of their portfolios.");
    record9.set("order", 10);
  app.save(record9);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})