/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("study_guides");

  const record0 = new Record(collection);
    record0.set("title", "Lesson 1: Introduction to Lease Portfolio Risk - Study Guide");
    record0.set("lesson_id", "pbc_3963162141");
    record0.set("part_number", 1);
    record0.set("content_type", "study_guide");
    record0.set("description", "Comprehensive study guide for Lesson 1");
    record0.set("file_type", "PDF");
    record0.set("is_downloadable", true);
    record0.set("content_summary", "Study guide covering risk types, measurement frameworks, and importance of risk pricing models. Includes learning objectives, key concepts, practice problems, and review questions.");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("title", "Lesson 2: Credit Risk Modeling for Leases - Study Guide");
    record1.set("lesson_id", "pbc_3963162141");
    record1.set("part_number", 2);
    record1.set("content_type", "study_guide");
    record1.set("description", "Comprehensive study guide for Lesson 2");
    record1.set("file_type", "PDF");
    record1.set("is_downloadable", true);
    record1.set("content_summary", "Study guide covering PD, LGD, EAD estimation, credit rating methodologies, and portfolio aggregation. Includes formulas, examples, and practice problems.");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("title", "Lesson 3: Prepayment Risk and Modeling - Study Guide");
    record2.set("lesson_id", "pbc_3963162141");
    record2.set("part_number", 3);
    record2.set("content_type", "study_guide");
    record2.set("description", "Comprehensive study guide for Lesson 3");
    record2.set("file_type", "PDF");
    record2.set("is_downloadable", true);
    record2.set("content_summary", "Study guide covering prepayment behavior, CPR/SMM models, behavioral modeling, and impact analysis. Includes case studies and calculation examples.");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("title", "Lesson 4: Interest Rate Risk and Duration Analysis - Study Guide");
    record3.set("lesson_id", "pbc_3963162141");
    record3.set("part_number", 4);
    record3.set("content_type", "study_guide");
    record3.set("description", "Comprehensive study guide for Lesson 4");
    record3.set("file_type", "PDF");
    record3.set("is_downloadable", true);
    record3.set("content_summary", "Study guide covering duration, convexity, key rate durations, and hedging strategies. Includes mathematical derivations and practical examples.");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("title", "Lesson 5: Liquidity Risk and Portfolio Liquidity - Study Guide");
    record4.set("lesson_id", "pbc_3963162141");
    record4.set("part_number", 1);
    record4.set("content_type", "part_study_guide");
    record4.set("description", "Comprehensive study guide for Lesson 5");
    record4.set("file_type", "PDF");
    record4.set("is_downloadable", true);
    record4.set("content_summary", "Study guide covering market and funding liquidity, liquidity metrics, and regulatory requirements. Includes stress scenarios and measurement techniques.");
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("title", "Lesson 6: Portfolio Valuation Models - Study Guide");
    record5.set("lesson_id", "pbc_3963162141");
    record5.set("part_number", 2);
    record5.set("content_type", "part_study_guide");
    record5.set("description", "Comprehensive study guide for Lesson 6");
    record5.set("file_type", "PDF");
    record5.set("is_downloadable", true);
    record5.set("content_summary", "Study guide covering DCF, OAS, and Monte Carlo models. Includes model calibration, validation techniques, and comparison frameworks.");
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("title", "Lesson 7: Credit Spread Modeling and Analysis - Study Guide");
    record6.set("lesson_id", "pbc_3963162141");
    record6.set("part_number", 3);
    record6.set("content_type", "part_study_guide");
    record6.set("description", "Comprehensive study guide for Lesson 7");
    record6.set("file_type", "PDF");
    record6.set("is_downloadable", true);
    record6.set("content_summary", "Study guide covering spread decomposition, dynamics, and modeling approaches. Includes empirical analysis and forecasting techniques.");
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("title", "Lesson 8: Portfolio Risk Aggregation and Concentration - Study Guide");
    record7.set("lesson_id", "pbc_3963162141");
    record7.set("part_number", 4);
    record7.set("content_type", "part_study_guide");
    record7.set("description", "Comprehensive study guide for Lesson 8");
    record7.set("file_type", "PDF");
    record7.set("is_downloadable", true);
    record7.set("content_summary", "Study guide covering risk aggregation, concentration metrics, and diversification analysis. Includes optimization techniques and regulatory frameworks.");
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("title", "Master Study Guide - Lease Portfolio Risk Pricing");
    record8.set("lesson_id", "pbc_3963162141");
    record8.set("part_number", 1);
    record8.set("content_type", "master_glossary");
    record8.set("description", "Comprehensive master study guide covering all 10 lessons");
    record8.set("file_type", "PDF");
    record8.set("is_downloadable", true);
    record8.set("content_summary", "Master study guide with integrated concepts, comprehensive glossary, and cross-lesson connections. Includes advanced practice problems and synthesis exercises.");
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("title", "Comprehensive Glossary - Lease Portfolio Risk Terms");
    record9.set("lesson_id", "pbc_3963162141");
    record9.set("part_number", 2);
    record9.set("content_type", "master_glossary");
    record9.set("description", "Master glossary of all key terms and concepts");
    record9.set("file_type", "PDF");
    record9.set("is_downloadable", true);
    record9.set("content_summary", "Comprehensive glossary covering all technical terms, formulas, and concepts used throughout the course. Includes definitions, examples, and cross-references.");
  app.save(record9);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})