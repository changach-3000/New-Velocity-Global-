/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "pbc_quiz_1");
    record0.set("question_text", "What is the primary principle of IAS 17?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"Single lease accounting model\",\"Dual lease accounting model (finance vs. operating)\",\"Off-balance sheet treatment of all leases\",\"Lessor-focused accounting\"]");
    record0.set("correct_answer", "Dual lease accounting model (finance vs. operating)");
    record0.set("explanation", "IAS 17 uses a dual lease accounting model that distinguishes between finance leases (on balance sheet) and operating leases (off balance sheet).");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "pbc_quiz_1");
    record1.set("question_text", "What is the effective date of IFRS 16?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"January 1, 2018\",\"January 1, 2019\",\"January 1, 2020\",\"January 1, 2021\"]");
    record1.set("correct_answer", "January 1, 2019");
    record1.set("explanation", "IFRS 16 became effective on January 1, 2019, replacing IAS 17 for all IFRS reporters.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "pbc_quiz_1");
    record2.set("question_text", "What is the effective date of ASC 842 for public companies?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"January 1, 2018\",\"January 1, 2019\",\"January 1, 2020\",\"January 1, 2021\"]");
    record2.set("correct_answer", "January 1, 2019");
    record2.set("explanation", "ASC 842 became effective on January 1, 2019 for public companies (SEC registrants).");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "pbc_quiz_1");
    record3.set("question_text", "What is the effective date of ASC 842 for private companies?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"January 1, 2019\",\"January 1, 2020\",\"January 1, 2021\",\"January 1, 2022\"]");
    record3.set("correct_answer", "January 1, 2022");
    record3.set("explanation", "ASC 842 became effective on January 1, 2022 for private companies, providing a 3-year delay from public companies.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "pbc_quiz_1");
    record4.set("question_text", "What is the primary driver of change from IAS 17 to IFRS 16?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"Increased lease costs\",\"Off-balance sheet financing concerns\",\"Lessor accounting changes\",\"Reduced transparency\"]");
    record4.set("correct_answer", "Off-balance sheet financing concerns");
    record4.set("explanation", "The primary driver was the concern that operating leases were kept off the balance sheet, hiding true liabilities from investors and regulators.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "pbc_quiz_1");
    record5.set("question_text", "What is the primary difference between IAS 17 and IFRS 16?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "[\"IAS 17 uses single model, IFRS 16 uses dual model\",\"IAS 17 uses dual model, IFRS 16 uses single model\",\"Both use the same model\",\"IAS 17 is for lessors, IFRS 16 is for lessees\"]");
    record5.set("correct_answer", "IAS 17 uses dual model, IFRS 16 uses single model");
    record5.set("explanation", "IAS 17 uses a dual model (finance vs. operating), while IFRS 16 uses a single model where all leases are recognized on the balance sheet.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "pbc_quiz_1");
    record6.set("question_text", "What is the primary difference between ASC 840 and ASC 842?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"ASC 840 uses single model, ASC 842 uses dual model\",\"ASC 840 uses dual model, ASC 842 uses single model\",\"Both use the same model\",\"ASC 840 is for lessors, ASC 842 is for lessees\"]");
    record6.set("correct_answer", "ASC 840 uses dual model, ASC 842 uses single model");
    record6.set("explanation", "ASC 840 uses a dual model (finance vs. operating), while ASC 842 uses a single model where all leases are recognized on the balance sheet.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "pbc_quiz_1");
    record7.set("question_text", "What is the convergence effort between IASB and FASB?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "[\"Align lease accounting standards\",\"Separate lease accounting standards\",\"Eliminate lease accounting\",\"Increase lease complexity\"]");
    record7.set("correct_answer", "Align lease accounting standards");
    record7.set("explanation", "The IASB and FASB worked together in a joint project to align international (IFRS 16) and US (ASC 842) lease accounting standards.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "pbc_quiz_1");
    record8.set("question_text", "What is the primary impact of IFRS 16 on financial statements?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "[\"Decreases total assets\",\"Increases total liabilities\",\"Increases both assets and liabilities\",\"No impact on balance sheet\"]");
    record8.set("correct_answer", "Increases both assets and liabilities");
    record8.set("explanation", "IFRS 16 brings operating leases onto the balance sheet, increasing both ROU assets and lease liabilities.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "pbc_quiz_1");
    record9.set("question_text", "What is the primary impact of ASC 842 on financial statements?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "[\"Decreases total assets\",\"Increases total liabilities\",\"Increases both assets and liabilities\",\"No impact on balance sheet\"]");
    record9.set("correct_answer", "Increases both assets and liabilities");
    record9.set("explanation", "ASC 842 brings operating leases onto the balance sheet, increasing both ROU assets and lease liabilities.");
    record9.set("order", 10);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("quiz_id", "pbc_quiz_2");
    record10.set("question_text", "What is the primary similarity between IAS 17 and IFRS 16?");
    record10.set("question_type", "multiple_choice");
    record10.set("options", "[\"Both use dual lease accounting model\",\"Both use single lease accounting model\",\"Both define lease similarly\",\"Both treat operating leases off-balance sheet\"]");
    record10.set("correct_answer", "Both define lease similarly");
    record10.set("explanation", "Both IAS 17 and IFRS 16 define a lease as a contract conveying the right to use an asset for a period of time.");
    record10.set("order", 1);
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("quiz_id", "pbc_quiz_2");
    record11.set("question_text", "What is the primary difference between IAS 17 and IFRS 16 for lessees?");
    record11.set("question_type", "multiple_choice");
    record11.set("options", "[\"IAS 17 uses single model, IFRS 16 uses dual model\",\"IAS 17 uses dual model, IFRS 16 uses single model\",\"Both use the same model\",\"IAS 17 is for lessors, IFRS 16 is for lessees\"]");
    record11.set("correct_answer", "IAS 17 uses dual model, IFRS 16 uses single model");
    record11.set("explanation", "IAS 17 uses a dual model for lessees (finance vs. operating), while IFRS 16 uses a single model where all leases are on the balance sheet.");
    record11.set("order", 2);
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("quiz_id", "pbc_quiz_2");
    record12.set("question_text", "What is the impact of IFRS 16 on operating leases?");
    record12.set("question_type", "multiple_choice");
    record12.set("options", "[\"Operating leases remain off-balance sheet\",\"Operating leases move to balance sheet\",\"Operating leases are eliminated\",\"Operating leases are combined with finance leases\"]");
    record12.set("correct_answer", "Operating leases move to balance sheet");
    record12.set("explanation", "IFRS 16 requires all operating leases to be recognized on the balance sheet as ROU assets and lease liabilities.");
    record12.set("order", 3);
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("quiz_id", "pbc_quiz_2");
    record13.set("question_text", "What is the primary challenge of IFRS 16 global implementation?");
    record13.set("question_type", "multiple_choice");
    record13.set("options", "[\"Lease identification\",\"Lease valuation\",\"System implementation\",\"All of the above\"]");
    record13.set("correct_answer", "All of the above");
    record13.set("explanation", "IFRS 16 implementation involves multiple challenges including identifying all leases, valuing them correctly, updating systems, and meeting disclosure requirements.");
    record13.set("order", 4);
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("quiz_id", "pbc_quiz_2");
    record14.set("question_text", "What is the IFRS 16 adoption timeline?");
    record14.set("question_type", "multiple_choice");
    record14.set("options", "[\"January 1, 2018\",\"January 1, 2019\",\"January 1, 2020\",\"January 1, 2021\"]");
    record14.set("correct_answer", "January 1, 2019");
    record14.set("explanation", "IFRS 16 became effective on January 1, 2019 for all IFRS reporters.");
    record14.set("order", 5);
  app.save(record14);

  const record15 = new Record(collection);
    record15.set("quiz_id", "pbc_quiz_2");
    record15.set("question_text", "What is the primary characteristic of Japanese GAAP lease accounting?");
    record15.set("question_type", "multiple_choice");
    record15.set("options", "[\"Single lease accounting model\",\"Dual lease accounting model\",\"Off-balance sheet treatment of all leases\",\"Lessor-focused accounting\"]");
    record15.set("correct_answer", "Dual lease accounting model");
    record15.set("explanation", "Japanese GAAP uses a dual lease accounting model similar to IAS 17, distinguishing between finance and operating leases.");
    record15.set("order", 6);
  app.save(record15);

  const record16 = new Record(collection);
    record16.set("quiz_id", "pbc_quiz_2");
    record16.set("question_text", "What is the primary characteristic of Chinese GAAP lease accounting?");
    record16.set("question_type", "multiple_choice");
    record16.set("options", "[\"Single lease accounting model\",\"Dual lease accounting model\",\"Off-balance sheet treatment of all leases\",\"Lessor-focused accounting\"]");
    record16.set("correct_answer", "Dual lease accounting model");
    record16.set("explanation", "Chinese GAAP uses a dual lease accounting model similar to IAS 17, distinguishing between finance and operating leases.");
    record16.set("order", 7);
  app.save(record16);

  const record17 = new Record(collection);
    record17.set("quiz_id", "pbc_quiz_2");
    record17.set("question_text", "What is the primary characteristic of Indian GAAP lease accounting?");
    record17.set("question_type", "multiple_choice");
    record17.set("options", "[\"Single lease accounting model (Ind AS 116)\",\"Dual lease accounting model\",\"Off-balance sheet treatment of all leases\",\"Lessor-focused accounting\"]");
    record17.set("correct_answer", "Single lease accounting model (Ind AS 116)");
    record17.set("explanation", "Indian GAAP (Ind AS 116) is based on IFRS 16 and uses a single lease accounting model where all leases are on the balance sheet.");
    record17.set("order", 8);
  app.save(record17);

  const record18 = new Record(collection);
    record18.set("quiz_id", "pbc_quiz_2");
    record18.set("question_text", "What is the primary impact of IFRS 16 on debt-to-equity ratio?");
    record18.set("question_type", "multiple_choice");
    record18.set("options", "[\"Decreases ratio\",\"Increases ratio\",\"No impact on ratio\",\"Eliminates ratio\"]");
    record18.set("correct_answer", "Increases ratio");
    record18.set("explanation", "IFRS 16 increases liabilities (lease liabilities) on the balance sheet, which increases the debt-to-equity ratio.");
    record18.set("order", 9);
  app.save(record18);

  const record19 = new Record(collection);
    record19.set("quiz_id", "pbc_quiz_2");
    record19.set("question_text", "What is the primary impact of IFRS 16 on asset turnover ratio?");
    record19.set("question_type", "multiple_choice");
    record19.set("options", "[\"Increases ratio\",\"Decreases ratio\",\"No impact on ratio\",\"Eliminates ratio\"]");
    record19.set("correct_answer", "Decreases ratio");
    record19.set("explanation", "IFRS 16 increases assets (ROU assets) on the balance sheet, which decreases the asset turnover ratio (revenue / assets).");
    record19.set("order", 10);
  app.save(record19);

  const record20 = new Record(collection);
    record20.set("quiz_id", "pbc_quiz_3");
    record20.set("question_text", "What is the primary similarity between ASC 840 and ASC 842?");
    record20.set("question_type", "multiple_choice");
    record20.set("options", "[\"Both use dual lease accounting model\",\"Both use single lease accounting model\",\"Both define lease similarly\",\"Both treat operating leases off-balance sheet\"]");
    record20.set("correct_answer", "Both define lease similarly");
    record20.set("explanation", "Both ASC 840 and ASC 842 define a lease as a contract conveying the right to use an asset for a period of time.");
    record20.set("order", 1);
  app.save(record20);

  const record21 = new Record(collection);
    record21.set("quiz_id", "pbc_quiz_3");
    record21.set("question_text", "What is the primary difference between ASC 840 and ASC 842 for lessees?");
    record21.set("question_type", "multiple_choice");
    record21.set("options", "[\"ASC 840 uses single model, ASC 842 uses dual model\",\"ASC 840 uses dual model, ASC 842 uses single model\",\"Both use the same model\",\"ASC 840 is for lessors, ASC 842 is for lessees\"]");
    record21.set("correct_answer", "ASC 840 uses dual model, ASC 842 uses single model");
    record21.set("explanation", "ASC 840 uses a dual model for lessees (finance vs. operating), while ASC 842 uses a single model where all leases are on the balance sheet.");
    record21.set("order", 2);
  app.save(record21);

  const record22 = new Record(collection);
    record22.set("quiz_id", "pbc_quiz_3");
    record22.set("question_text", "What is the impact of ASC 842 on operating leases?");
    record22.set("question_type", "multiple_choice");
    record22.set("options", "[\"Operating leases remain off-balance sheet\",\"Operating leases move to balance sheet\",\"Operating leases are eliminated\",\"Operating leases are combined with finance leases\"]");
    record22.set("correct_answer", "Operating leases move to balance sheet");
    record22.set("explanation", "ASC 842 requires all operating leases to be recognized on the balance sheet as ROU assets and lease liabilities.");
    record22.set("order", 3);
  app.save(record22);

  const record23 = new Record(collection);
    record23.set("quiz_id", "pbc_quiz_3");
    record23.set("question_text", "What is the ASC 842 adoption timeline for public companies?");
    record23.set("question_type", "multiple_choice");
    record23.set("options", "[\"January 1, 2018\",\"January 1, 2019\",\"January 1, 2020\",\"January 1, 2021\"]");
    record23.set("correct_answer", "January 1, 2019");
    record23.set("explanation", "ASC 842 became effective on January 1, 2019 for public companies (SEC registrants).");
    record23.set("order", 4);
  app.save(record23);

  const record24 = new Record(collection);
    record24.set("quiz_id", "pbc_quiz_3");
    record24.set("question_text", "What is the ASC 842 adoption timeline for private companies?");
    record24.set("question_type", "multiple_choice");
    record24.set("options", "[\"January 1, 2019\",\"January 1, 2020\",\"January 1, 2021\",\"January 1, 2022\"]");
    record24.set("correct_answer", "January 1, 2022");
    record24.set("explanation", "ASC 842 became effective on January 1, 2022 for private companies, providing a 3-year delay from public companies.");
    record24.set("order", 5);
  app.save(record24);

  const record25 = new Record(collection);
    record25.set("quiz_id", "pbc_quiz_3");
    record25.set("question_text", "What is the primary difference between IFRS 16 and ASC 842 transition approach?");
    record25.set("question_type", "multiple_choice");
    record25.set("options", "[\"IFRS 16 uses modified retrospective, ASC 842 uses full retrospective\",\"IFRS 16 uses full retrospective, ASC 842 uses modified retrospective\",\"Both use the same transition approach\",\"IFRS 16 uses prospective, ASC 842 uses modified retrospective\"]");
    record25.set("correct_answer", "IFRS 16 uses full retrospective, ASC 842 uses modified retrospective");
    record25.set("explanation", "IFRS 16 allows both full and modified retrospective approaches, while ASC 842 requires modified retrospective (no restatement of prior periods).");
    record25.set("order", 6);
  app.save(record25);

  const record26 = new Record(collection);
    record26.set("quiz_id", "pbc_quiz_3");
    record26.set("question_text", "What is the primary practical expedient available under ASC 842?");
    record26.set("question_type", "multiple_choice");
    record26.set("options", "[\"Hindsight in determining lease term\",\"Combining lease and non-lease components\",\"Short-term lease exemption\",\"All of the above\"]");
    record26.set("correct_answer", "All of the above");
    record26.set("explanation", "ASC 842 provides multiple practical expedients including hindsight, combining components, short-term lease exemption, and low-value asset exemption.");
    record26.set("order", 7);
  app.save(record26);

  const record27 = new Record(collection);
    record27.set("quiz_id", "pbc_quiz_3");
    record27.set("question_text", "What is the primary SEC disclosure requirement for public companies?");
    record27.set("question_type", "multiple_choice");
    record27.set("options", "[\"Lease accounting policies\",\"Lease payment schedules\",\"ROU asset and liability disclosures\",\"All of the above\"]");
    record27.set("correct_answer", "All of the above");
    record27.set("explanation", "SEC requires comprehensive disclosures including lease accounting policies, payment schedules, ROU assets, liabilities, and MD&A discussion.");
    record27.set("order", 8);
  app.save(record27);

  const record28 = new Record(collection);
    record28.set("quiz_id", "pbc_quiz_3");
    record28.set("question_text", "What is the primary challenge of ASC 842 implementation?");
    record28.set("question_type", "multiple_choice");
    record28.set("options", "[\"Lease identification\",\"Lease valuation\",\"System implementation\",\"All of the above\"]");
    record28.set("correct_answer", "All of the above");
    record28.set("explanation", "ASC 842 implementation involves multiple challenges including identifying all leases, valuing them correctly, updating systems, and meeting disclosure requirements.");
    record28.set("order", 9);
  app.save(record28);

  const record29 = new Record(collection);
    record29.set("quiz_id", "pbc_quiz_3");
    record29.set("question_text", "What is the primary impact of ASC 842 on debt-to-equity ratio?");
    record29.set("question_type", "multiple_choice");
    record29.set("options", "[\"Decreases ratio\",\"Increases ratio\",\"No impact on ratio\",\"Eliminates ratio\"]");
    record29.set("correct_answer", "Increases ratio");
    record29.set("explanation", "ASC 842 increases liabilities (lease liabilities) on the balance sheet, which increases the debt-to-equity ratio.");
    record29.set("order", 10);
  app.save(record29);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})