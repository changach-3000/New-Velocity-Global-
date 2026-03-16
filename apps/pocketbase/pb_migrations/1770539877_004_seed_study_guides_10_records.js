/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("study_guides");

  const record0 = new Record(collection);
    record0.set("title", "Lesson 1: Introduction to Lease Portfolio Risk - Study Guide");
    record0.set("lesson_id", "lesson_1");
    record0.set("part_number", 1);
    record0.set("content_type", "study_guide");
    record0.set("description", "8 practice problems covering lease portfolio risk types, risk metrics, and measurement frameworks");
    record0.set("is_downloadable", true);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("title", "Lesson 2: Credit Risk Modeling - Study Guide");
    record1.set("lesson_id", "lesson_2");
    record1.set("part_number", 2);
    record1.set("content_type", "study_guide");
    record1.set("description", "8 practice problems on PD estimation, LGD calculation, and credit risk aggregation");
    record1.set("is_downloadable", true);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("title", "Lesson 3: Prepayment Risk - Study Guide");
    record2.set("lesson_id", "lesson_3");
    record2.set("part_number", 3);
    record2.set("content_type", "study_guide");
    record2.set("description", "8 practice problems on prepayment modeling, duration analysis, and OAS calculation");
    record2.set("is_downloadable", true);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("title", "Lesson 4: Interest Rate Risk - Study Guide");
    record3.set("lesson_id", "lesson_4");
    record3.set("part_number", 1);
    record3.set("content_type", "study_guide");
    record3.set("description", "8 practice problems on duration, convexity, and interest rate hedging");
    record3.set("is_downloadable", true);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("title", "Lesson 5: Liquidity Risk - Study Guide");
    record4.set("lesson_id", "lesson_5");
    record4.set("part_number", 2);
    record4.set("content_type", "study_guide");
    record4.set("description", "8 practice problems on market and funding liquidity assessment");
    record4.set("is_downloadable", true);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("title", "Lesson 6: Portfolio Valuation - Study Guide");
    record5.set("lesson_id", "lesson_6");
    record5.set("part_number", 3);
    record5.set("content_type", "study_guide");
    record5.set("description", "8 practice problems on DCF, OAS, and Monte Carlo valuation");
    record5.set("is_downloadable", true);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("title", "Lesson 7: Credit Spread Modeling - Study Guide");
    record6.set("lesson_id", "lesson_7");
    record6.set("part_number", 1);
    record6.set("content_type", "study_guide");
    record6.set("description", "8 practice problems on spread decomposition and spread risk management");
    record6.set("is_downloadable", true);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("title", "Lesson 8: Concentration Risk - Study Guide");
    record7.set("lesson_id", "lesson_8");
    record7.set("part_number", 2);
    record7.set("content_type", "study_guide");
    record7.set("description", "8 practice problems on concentration metrics and diversification analysis");
    record7.set("is_downloadable", true);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("title", "Lesson 9: Stress Testing - Study Guide");
    record8.set("lesson_id", "lesson_9");
    record8.set("part_number", 3);
    record8.set("content_type", "study_guide");
    record8.set("description", "8 practice problems on scenario design and stress testing");
    record8.set("is_downloadable", true);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("title", "Lesson 10: Advanced Topics - Study Guide");
    record9.set("lesson_id", "lesson_10");
    record9.set("part_number", 1);
    record9.set("content_type", "study_guide");
    record9.set("description", "8 practice problems on machine learning, climate risk, and emerging risks");
    record9.set("is_downloadable", true);
  app.save(record9);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})