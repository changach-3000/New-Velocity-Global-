/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("reading_lists");

  const record0 = new Record(collection);
    record0.set("title", "Lesson 1: Introduction to Lease Portfolio Risk - Reading List");
    record0.set("lesson_id", "lesson_1");
    record0.set("part_number", 1);
    record0.set("core_readings", "Credit Risk Modeling: Theory and Applications by David Lando; Risk Management and Financial Institutions by John Hull; The Handbook of Fixed Income Securities by Frank Fabozzi");
    record0.set("advanced_readings", "Lease Accounting and Financial Analysis by PwC; Journal articles on lease portfolio risk management");
    record0.set("is_downloadable", true);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("title", "Lesson 2: Credit Risk Modeling - Reading List");
    record1.set("lesson_id", "lesson_2");
    record1.set("part_number", 2);
    record1.set("core_readings", "Credit Risk Modeling by David Lando; The Merton Model by Robert Merton; Reduced-Form Credit Risk Models by Darrell Duffie");
    record1.set("advanced_readings", "Industry research on lease default rates; Academic papers on credit risk estimation");
    record1.set("is_downloadable", true);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("title", "Lesson 3: Prepayment Risk - Reading List");
    record2.set("lesson_id", "lesson_3");
    record2.set("part_number", 3);
    record2.set("core_readings", "Prepayment Risk in Mortgage-Backed Securities by Andrew Davidson; Option-Adjusted Spread Analysis by Frank Fabozzi; Modeling Prepayment Behavior by academic research");
    record2.set("advanced_readings", "Industry reports on lease prepayment trends; Case studies on prepayment risk management");
    record2.set("is_downloadable", true);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("title", "Lesson 4: Interest Rate Risk - Reading List");
    record3.set("lesson_id", "lesson_4");
    record3.set("part_number", 4);
    record3.set("core_readings", "Fixed Income Analysis by Frank Fabozzi; Interest Rate Risk Management by John Hull; Duration and Convexity by academic research");
    record3.set("advanced_readings", "Hedging Strategies by industry practitioners; Case studies on interest rate risk management");
    record3.set("is_downloadable", true);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("title", "Lesson 5: Liquidity Risk - Reading List");
    record4.set("lesson_id", "lesson_5");
    record4.set("part_number", 5);
    record4.set("core_readings", "Liquidity Risk Management by regulatory guidance; Funding Liquidity by academic research; Securitization and Secondary Markets by industry reports");
    record4.set("advanced_readings", "Stress Testing Frameworks by central banks; Case studies on liquidity crises");
    record4.set("is_downloadable", true);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("title", "Lesson 6: Portfolio Valuation - Reading List");
    record5.set("lesson_id", "lesson_6");
    record5.set("part_number", 6);
    record5.set("core_readings", "Fixed Income Valuation by Frank Fabozzi; Option-Adjusted Spread Analysis by academic research; Monte Carlo Methods in Finance by Paul Glasserman");
    record5.set("advanced_readings", "Valuation Models by industry practitioners; Case studies on portfolio valuation");
    record5.set("is_downloadable", true);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("title", "Lesson 7: Credit Spread Modeling - Reading List");
    record6.set("lesson_id", "lesson_7");
    record6.set("part_number", 7);
    record6.set("core_readings", "Credit Spread Analysis by academic research; Spread Dynamics by industry practitioners; Spread Modeling by quantitative finance");
    record6.set("advanced_readings", "Spread Risk Management by case studies; Journal articles on credit spreads");
    record6.set("is_downloadable", true);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("title", "Lesson 8: Concentration Risk - Reading List");
    record7.set("lesson_id", "lesson_8");
    record7.set("part_number", 8);
    record7.set("core_readings", "Portfolio Concentration Risk by academic research; Diversification Benefits by industry practitioners; Risk Aggregation by regulatory guidance");
    record7.set("advanced_readings", "Concentration Limits by case studies; Journal articles on portfolio risk");
    record7.set("is_downloadable", true);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("title", "Lesson 9: Stress Testing - Reading List");
    record8.set("lesson_id", "lesson_9");
    record8.set("part_number", 9);
    record8.set("core_readings", "Stress Testing Frameworks by regulatory guidance; Scenario Analysis by academic research; Stress Testing Implementation by industry practitioners");
    record8.set("advanced_readings", "Reverse Stress Testing by case studies; Journal articles on stress testing");
    record8.set("is_downloadable", true);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("title", "Lesson 10: Advanced Topics - Reading List");
    record9.set("lesson_id", "lesson_10");
    record9.set("part_number", 10);
    record9.set("core_readings", "Machine Learning in Finance by academic research; Climate Risk Assessment by regulatory guidance; Cyber Risk Management by industry practitioners");
    record9.set("advanced_readings", "ESG Integration by case studies; Journal articles on emerging risks");
    record9.set("is_downloadable", true);
  app.save(record9);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})