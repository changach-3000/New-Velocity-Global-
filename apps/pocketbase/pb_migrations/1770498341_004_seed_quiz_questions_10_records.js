/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "<QUIZ_3_1_ID>");
    record0.set("question_text", "What is a lease modification?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"A change to lease terms or conditions\", \"A change to the equipment\", \"A change to the lessor\", \"A change to the lessee\"]");
    record0.set("correct_answer", "A change to lease terms or conditions");
    record0.set("explanation", "A lease modification is a change to lease terms or conditions that requires remeasurement of the lease liability and ROU asset.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "<QUIZ_3_1_ID>");
    record1.set("question_text", "What is the primary impact of a lease modification?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"No impact on accounting\", \"Remeasurement of lease liability and ROU asset\", \"Change in lease classification\", \"Change in lease payment\"]");
    record1.set("correct_answer", "Remeasurement of lease liability and ROU asset");
    record1.set("explanation", "A lease modification requires remeasurement of the lease liability and ROU asset to reflect the changes in lease terms.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "<QUIZ_3_1_ID>");
    record2.set("question_text", "What are variable lease payments?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"Lease payments that vary based on index or rate\", \"Lease payments that are fixed\", \"Lease payments that decrease over time\", \"Lease payments that increase over time\"]");
    record2.set("correct_answer", "Lease payments that vary based on index or rate");
    record2.set("explanation", "Variable lease payments are lease payments that vary based on an index (such as CPI) or rate (such as LIBOR).");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "<QUIZ_3_1_ID>");
    record3.set("question_text", "What is the accounting treatment of variable lease payments?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"Included in lease liability\", \"Not included in lease liability, recognized as expense when incurred\", \"Capitalized as asset\", \"Deferred as liability\"]");
    record3.set("correct_answer", "Not included in lease liability, recognized as expense when incurred");
    record3.set("explanation", "Variable lease payments that are truly variable are not included in the lease liability but are recognized as an expense when incurred.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "<QUIZ_3_1_ID>");
    record4.set("question_text", "What is a lease termination?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"Early termination of lease\", \"End of lease term\", \"Renewal of lease\", \"Modification of lease\"]");
    record4.set("correct_answer", "Early termination of lease");
    record4.set("explanation", "A lease termination is the early termination of a lease before the end of the lease term, which may include a termination penalty.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "<QUIZ_3_1_ID>");
    record5.set("question_text", "What is the primary impact of lease termination?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "[\"No impact on accounting\", \"Derecognition of ROU asset and liability, record gain/loss\", \"Remeasurement of lease liability\", \"Change in lease classification\"]");
    record5.set("correct_answer", "Derecognition of ROU asset and liability, record gain/loss");
    record5.set("explanation", "Lease termination results in derecognition of the ROU asset and lease liability, with any gain or loss recorded in the income statement.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "<QUIZ_3_1_ID>");
    record6.set("question_text", "What is the primary purpose of lease disclosures?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"To determine lease payments\", \"To provide information about leases to financial statement users\", \"To reduce lease costs\", \"To eliminate operating leases\"]");
    record6.set("correct_answer", "To provide information about leases to financial statement users");
    record6.set("explanation", "Lease disclosures provide important information about leases to financial statement users to help them understand the financial impact of leases.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "<QUIZ_3_1_ID>");
    record7.set("question_text", "What is the primary component of lease accounting policies?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "[\"Lease payment calculation\", \"Lease classification criteria\", \"How leases are recognized, measured, and disclosed\", \"Residual value estimation\"]");
    record7.set("correct_answer", "How leases are recognized, measured, and disclosed");
    record7.set("explanation", "Lease accounting policies describe how leases are recognized, measured, and disclosed in the financial statements.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "<QUIZ_3_1_ID>");
    record8.set("question_text", "What is the primary purpose of lease audit procedures?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "[\"To determine lease payments\", \"To verify correct lease accounting and compliance\", \"To reduce lease costs\", \"To eliminate operating leases\"]");
    record8.set("correct_answer", "To verify correct lease accounting and compliance");
    record8.set("explanation", "Lease audit procedures are designed to verify that leases are correctly accounted for and that the company is in compliance with lease accounting standards.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "<QUIZ_3_1_ID>");
    record9.set("question_text", "What is the primary benefit of implementing lease accounting compliance?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "[\"Reduces lease costs\", \"Eliminates operating leases\", \"Ensures accurate financial reporting and regulatory compliance\", \"Increases lease flexibility\"]");
    record9.set("correct_answer", "Ensures accurate financial reporting and regulatory compliance");
    record9.set("explanation", "Implementing lease accounting compliance ensures that the company accurately reports leases in its financial statements and complies with applicable accounting standards.");
    record9.set("order", 10);
  app.save(record9);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})