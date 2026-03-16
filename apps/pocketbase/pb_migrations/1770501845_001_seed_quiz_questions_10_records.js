/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "<QUIZ_2_ID>");
    record0.set("question_text", "What is WAL in securitization?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"Weighted Average Life of securities\",\"Weighted Average Lease term\",\"Weighted Average Loss\",\"Weighted Average Liability\"]");
    record0.set("correct_answer", "Weighted Average Life of securities");
    record0.set("explanation", "WAL (Weighted Average Life) is the average time to principal repayment, weighted by payment amounts.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "<QUIZ_2_ID>");
    record1.set("question_text", "What is WAC in securitization?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"Weighted Average Coupon on leases\",\"Weighted Average Cost\",\"Weighted Average Credit\",\"Weighted Average Collateral\"]");
    record1.set("correct_answer", "Weighted Average Coupon on leases");
    record1.set("explanation", "WAC (Weighted Average Coupon) is the average interest rate on leases, weighted by lease balance.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "<QUIZ_2_ID>");
    record2.set("question_text", "What is the primary purpose of due diligence?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"Verify lease quality and assess credit risk\",\"Price securities\",\"Rate securities\",\"Sell securities\"]");
    record2.set("correct_answer", "Verify lease quality and assess credit risk");
    record2.set("explanation", "Due diligence verifies lease quality, assesses credit risk, and ensures portfolio suitability for securitization.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "<QUIZ_2_ID>");
    record3.set("question_text", "What is the primary criterion for portfolio selection?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"Lease quality and diversification\",\"Lease size\",\"Lease term\",\"Lease payment amount\"]");
    record3.set("correct_answer", "Lease quality and diversification");
    record3.set("explanation", "Portfolio selection focuses on lease quality (credit quality, payment history) and diversification (geographic, industry, lessee).");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "<QUIZ_2_ID>");
    record4.set("question_text", "What is sequential pay tranching?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"All tranches paid equally\",\"Senior tranche paid first, then mezzanine, then subordinated\",\"Subordinated tranche paid first\",\"Random payment order\"]");
    record4.set("correct_answer", "Senior tranche paid first, then mezzanine, then subordinated");
    record4.set("explanation", "Sequential pay means senior tranches receive payments first, followed by mezzanine, then subordinated tranches.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "<QUIZ_2_ID>");
    record5.set("question_text", "What is pro-rata pay tranching?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "[\"All tranches paid sequentially\",\"All tranches paid proportionally based on size\",\"Senior tranche paid first\",\"Subordinated tranche paid first\"]");
    record5.set("correct_answer", "All tranches paid proportionally based on size");
    record5.set("explanation", "Pro-rata pay means all tranches receive payments proportionally based on their size in the deal.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "<QUIZ_2_ID>");
    record6.set("question_text", "What is the primary purpose of stress testing?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"Test investor stress\",\"Test under adverse scenarios to verify protection\",\"Test equipment stress\",\"Test lease stress\"]");
    record6.set("correct_answer", "Test under adverse scenarios to verify protection");
    record6.set("explanation", "Stress testing verifies that tranches are protected under adverse scenarios like higher default rates.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "<QUIZ_2_ID>");
    record7.set("question_text", "What is the primary factor in pricing securities?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "[\"Lease payment amount\",\"Base rate, credit spread, liquidity spread, complexity spread\",\"Equipment type\",\"Lessee location\"]");
    record7.set("correct_answer", "Base rate, credit spread, liquidity spread, complexity spread");
    record7.set("explanation", "Pricing includes base rate (LIBOR/SOFR), credit spread (for rating), liquidity spread, and complexity spread.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "<QUIZ_2_ID>");
    record8.set("question_text", "What is the primary purpose of credit enhancement?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "[\"Increase credit risk\",\"Protect senior tranches from losses\",\"Reduce investor returns\",\"Increase leverage\"]");
    record8.set("correct_answer", "Protect senior tranches from losses");
    record8.set("explanation", "Credit enhancement protects senior tranches through subordination, overcollateralization, and reserve accounts.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "<QUIZ_2_ID>");
    record9.set("question_text", "What is the primary rating methodology?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "[\"Structural analysis, scenario analysis, comparative analysis\",\"Random rating\",\"Investor preference\",\"Originator preference\"]");
    record9.set("correct_answer", "Structural analysis, scenario analysis, comparative analysis");
    record9.set("explanation", "Rating agencies use structural analysis (portfolio quality), scenario analysis (stress tests), and comparative analysis (similar deals).");
    record9.set("order", 10);
  app.save(record9);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})