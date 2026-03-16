/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "pbc_1349215296");
    record0.set("question_text", "What is market segmentation in the context of leasing analysis?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "A) Dividing the market into distinct groups with different characteristics\nB) Analyzing only the largest market segments\nC) Focusing on a single market segment\nD) Eliminating smaller market segments");
    record0.set("correct_answer", "A) Dividing the market into distinct groups with different characteristics");
    record0.set("explanation", "Market segmentation involves dividing the overall market into distinct groups or segments with different characteristics, needs, and behaviors. This allows for targeted analysis and strategy development.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "pbc_1349215296");
    record1.set("question_text", "Which of the following is a key market indicator for leasing trends?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "A) Interest rates and credit spreads\nB) Only historical lease prices\nC) Competitor names\nD) Marketing budgets");
    record1.set("correct_answer", "A) Interest rates and credit spreads");
    record1.set("explanation", "Interest rates and credit spreads are critical market indicators that directly impact leasing costs, demand, and market dynamics. They help forecast future market movements.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "pbc_1349215296");
    record2.set("question_text", "True or False: Trend analysis can predict market movements with 100% accuracy.");
    record2.set("question_type", "true_false");
    record2.set("options", "True\nFalse");
    record2.set("correct_answer", "False");
    record2.set("explanation", "While trend analysis is valuable, it cannot predict market movements with 100% accuracy. Markets are influenced by numerous unpredictable factors, and trends can change unexpectedly.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "pbc_1349215296");
    record3.set("question_text", "What is the primary purpose of forecasting models in market analysis?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "A) To predict future market conditions based on historical data and trends\nB) To eliminate all market risks\nC) To guarantee profitable investments\nD) To replace human judgment");
    record3.set("correct_answer", "A) To predict future market conditions based on historical data and trends");
    record3.set("explanation", "Forecasting models use historical data, trends, and statistical methods to estimate future market conditions, helping organizations make informed strategic decisions.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "pbc_1349215296");
    record4.set("question_text", "Which economic cycle phase typically shows increased leasing demand?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "A) Expansion phase\nB) Recession phase\nC) Contraction phase\nD) Stagnation phase");
    record4.set("correct_answer", "A) Expansion phase");
    record4.set("explanation", "During the expansion phase of the economic cycle, businesses grow, capital investment increases, and leasing demand typically rises as companies expand their asset base.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "pbc_1349215296");
    record5.set("question_text", "What does demand elasticity measure in leasing markets?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "A) The responsiveness of lease demand to price changes\nB) The total number of leases in the market\nC) The age of leased assets\nD) The location of leased properties");
    record5.set("correct_answer", "A) The responsiveness of lease demand to price changes");
    record5.set("explanation", "Demand elasticity measures how sensitive lease demand is to price changes. High elasticity means demand changes significantly with price changes, while low elasticity means demand is relatively stable.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "pbc_1349215296");
    record6.set("question_text", "True or False: Supply dynamics have no impact on lease pricing.");
    record6.set("question_type", "true_false");
    record6.set("options", "True\nFalse");
    record6.set("correct_answer", "False");
    record6.set("explanation", "Supply dynamics significantly impact lease pricing. When supply is limited, prices tend to increase; when supply is abundant, prices tend to decrease.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "pbc_1349215296");
    record7.set("question_text", "What is market saturation?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "A) A market condition where supply equals or exceeds demand\nB) A market with only one competitor\nC) A market with no growth potential\nD) A market with perfect information");
    record7.set("correct_answer", "A) A market condition where supply equals or exceeds demand");
    record7.set("explanation", "Market saturation occurs when the supply of leased assets meets or exceeds the demand for them, typically resulting in increased competition and price pressure.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "pbc_1349215296");
    record8.set("question_text", "How does competitive landscape analysis help in market forecasting?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "A) It identifies competitor strategies and market positioning to inform forecasts\nB) It eliminates all competition\nC) It guarantees market dominance\nD) It has no impact on forecasting");
    record8.set("correct_answer", "A) It identifies competitor strategies and market positioning to inform forecasts");
    record8.set("explanation", "Analyzing the competitive landscape helps understand how competitors are positioned, what strategies they employ, and how these factors might influence future market movements.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "pbc_1349215296");
    record9.set("question_text", "True or False: Market volatility is always negative for leasing businesses.");
    record9.set("question_type", "true_false");
    record9.set("options", "True\nFalse");
    record9.set("correct_answer", "False");
    record9.set("explanation", "While market volatility presents challenges, it can also create opportunities for well-prepared organizations to gain market share and negotiate favorable terms.");
    record9.set("order", 10);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("quiz_id", "pbc_1349215296");
    record10.set("question_text", "What is the relationship between regulatory impacts and leasing markets?");
    record10.set("question_type", "multiple_choice");
    record10.set("options", "A) Regulatory changes can significantly affect lease accounting, tax treatment, and market dynamics\nB) Regulations have no impact on leasing\nC) Only international regulations matter\nD) Regulations only affect large companies");
    record10.set("correct_answer", "A) Regulatory changes can significantly affect lease accounting, tax treatment, and market dynamics");
    record10.set("explanation", "Regulatory changes, such as new accounting standards (like ASC 842) or tax regulations, can substantially impact how leases are structured, priced, and accounted for in the market.");
    record10.set("order", 11);
  app.save(record10);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})