/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "pbc_3963162141");
    record0.set("question_text", "What is credit risk in leasing?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"The risk that a lessee will fail to meet their financial obligations\", \"The risk that the lessor will fail to pay\", \"The risk that the equipment will become obsolete\", \"The risk that interest rates will change\"]");
    record0.set("correct_answer", "The risk that a lessee will fail to meet their financial obligations");
    record0.set("explanation", "Credit risk in leasing is the risk that a borrower (lessee) will fail to meet their financial obligations, including failure to pay principal, interest, or lease payments.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "pbc_3963162141");
    record1.set("question_text", "Which of the Five C's of Credit refers to the lessee's payment history and integrity?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"Capacity\", \"Character\", \"Capital\", \"Collateral\"]");
    record1.set("correct_answer", "Character");
    record1.set("explanation", "Character refers to the lessee's payment history and track record, management quality and reputation, and industry experience and expertise.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "pbc_3963162141");
    record2.set("question_text", "What is the primary purpose of creditworthiness assessment?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"To determine the lessee's credit rating\", \"To assess the lessee's ability and willingness to meet financial obligations\", \"To calculate the lease payment\", \"To determine the residual value\"]");
    record2.set("correct_answer", "To assess the lessee's ability and willingness to meet financial obligations");
    record2.set("explanation", "Creditworthiness assessment evaluates the lessee's ability and willingness to meet financial obligations, which is a combination of financial capacity and character/integrity.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "pbc_3963162141");
    record3.set("question_text", "Which of the following is a quantitative credit risk factor?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"Management quality\", \"Business model\", \"Debt-to-equity ratio\", \"Competitive position\"]");
    record3.set("correct_answer", "Debt-to-equity ratio");
    record3.set("explanation", "Debt-to-equity ratio is a quantitative credit risk factor that measures financial leverage. Management quality, business model, and competitive position are qualitative factors.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "pbc_3963162141");
    record4.set("question_text", "What does a credit rating of 'A' indicate?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"High credit quality, low risk\", \"Medium credit quality, moderate risk\", \"Low credit quality, high risk\", \"Very low credit quality, very high risk\"]");
    record4.set("correct_answer", "High credit quality, low risk");
    record4.set("explanation", "A credit rating of A indicates upper-medium credit quality with low risk. It is part of the investment grade category.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "pbc_3963162141");
    record5.set("question_text", "What is the CAMEL framework used for?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "[\"Calculating lease payments\", \"Assessing creditworthiness using five dimensions\", \"Determining residual value\", \"Calculating interest rates\"]");
    record5.set("correct_answer", "Assessing creditworthiness using five dimensions");
    record5.set("explanation", "The CAMEL framework assesses creditworthiness using five dimensions: Capital Adequacy, Asset Quality, Management Quality, Earnings Quality, and Liquidity Position.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "pbc_3963162141");
    record6.set("question_text", "What is the Altman Z-Score used for?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"Calculating profitability\", \"Predicting bankruptcy risk\", \"Determining leverage\", \"Assessing liquidity\"]");
    record6.set("correct_answer", "Predicting bankruptcy risk");
    record6.set("explanation", "The Altman Z-Score is a formula that predicts bankruptcy risk using five financial ratios. A Z-score > 2.99 indicates low bankruptcy risk, while < 1.81 indicates high risk.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "pbc_3963162141");
    record7.set("question_text", "What is the primary purpose of trend analysis in credit assessment?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "[\"To calculate current ratios\", \"To identify improving or declining financial performance\", \"To determine industry averages\", \"To calculate debt service coverage\"]");
    record7.set("correct_answer", "To identify improving or declining financial performance");
    record7.set("explanation", "Trend analysis examines historical financial data to identify whether financial performance is improving, declining, or stable over time.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "pbc_3963162141");
    record8.set("question_text", "What is stress testing in credit analysis?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "[\"Testing the lessee's stress levels\", \"Applying stress scenarios to assess ability to meet obligations under stress\", \"Testing the lessor's stress levels\", \"Testing the equipment's stress tolerance\"]");
    record8.set("correct_answer", "Applying stress scenarios to assess ability to meet obligations under stress");
    record8.set("explanation", "Stress testing applies stress scenarios (e.g., 20% revenue decline) to assess the lessee's ability to meet obligations under adverse conditions.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "pbc_3963162141");
    record9.set("question_text", "What is the primary benefit of peer comparison analysis?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "[\"To identify the lessee's competitive position relative to peers\", \"To calculate the lease payment\", \"To determine the residual value\", \"To assess management quality\"]");
    record9.set("correct_answer", "To identify the lessee's competitive position relative to peers");
    record9.set("explanation", "Peer comparison analysis compares the lessee's metrics to peer averages to assess relative position and identify outliers.");
    record9.set("order", 10);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("quiz_id", "pbc_3963162141");
    record10.set("question_text", "What does the current ratio measure?");
    record10.set("question_type", "multiple_choice");
    record10.set("options", "[\"Profitability\", \"Ability to pay short-term obligations\", \"Leverage\", \"Efficiency\"]");
    record10.set("correct_answer", "Ability to pay short-term obligations");
    record10.set("explanation", "The current ratio measures the ability to pay short-term obligations by comparing current assets to current liabilities.");
    record10.set("order", 1);
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("quiz_id", "pbc_3963162141");
    record11.set("question_text", "What is the formula for debt-to-equity ratio?");
    record11.set("question_type", "multiple_choice");
    record11.set("options", "[\"Total debt / Total assets\", \"Total debt / Equity\", \"Equity / Total assets\", \"Total assets / Equity\"]");
    record11.set("correct_answer", "Total debt / Equity");
    record11.set("explanation", "The debt-to-equity ratio is calculated as Total debt divided by Equity. It measures financial leverage.");
    record11.set("order", 2);
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("quiz_id", "pbc_3963162141");
    record12.set("question_text", "What does a debt-to-equity ratio of 0.5x indicate?");
    record12.set("question_type", "multiple_choice");
    record12.set("options", "[\"High leverage\", \"Moderate leverage\", \"Low leverage\", \"Negative leverage\"]");
    record12.set("correct_answer", "Low leverage");
    record12.set("explanation", "A debt-to-equity ratio of 0.5x indicates low leverage. Generally, < 1.0 = low leverage, 1.0-2.0 = moderate, > 2.0 = high.");
    record12.set("order", 3);
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("quiz_id", "pbc_3963162141");
    record13.set("question_text", "What is the Debt Service Coverage Ratio (DSCR) used for?");
    record13.set("question_type", "multiple_choice");
    record13.set("options", "[\"Measuring profitability\", \"Measuring ability to service debt from operations\", \"Measuring liquidity\", \"Measuring efficiency\"]");
    record13.set("correct_answer", "Measuring ability to service debt from operations");
    record13.set("explanation", "DSCR measures the ability to service debt from operations. It is calculated as Net Operating Income divided by Total Debt Service.");
    record13.set("order", 4);
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("quiz_id", "pbc_3963162141");
    record14.set("question_text", "What does a DSCR of 1.5x indicate?");
    record14.set("question_type", "multiple_choice");
    record14.set("options", "[\"The lessee can service debt 1.5 times over\", \"The lessee cannot service debt\", \"The lessee has 1.5x debt\", \"The lessee has 1.5x equity\"]");
    record14.set("correct_answer", "The lessee can service debt 1.5 times over");
    record14.set("explanation", "A DSCR of 1.5x means the lessee's operating income is 1.5 times the debt service, indicating strong ability to pay debt obligations.");
    record14.set("order", 5);
  app.save(record14);

  const record15 = new Record(collection);
    record15.set("quiz_id", "pbc_3963162141");
    record15.set("question_text", "What is the primary difference between operating cash flow and free cash flow?");
    record15.set("question_type", "multiple_choice");
    record15.set("options", "[\"Operating cash flow includes capital expenditures\", \"Free cash flow is operating cash flow minus capital expenditures\", \"Free cash flow is more important\", \"Operating cash flow is more important\"]");
    record15.set("correct_answer", "Free cash flow is operating cash flow minus capital expenditures");
    record15.set("explanation", "Free cash flow (FCF) is calculated as Operating Cash Flow (OCF) minus Capital Expenditures (CapEx). FCF represents cash available for debt service and dividends.");
    record15.set("order", 6);
  app.save(record15);

  const record16 = new Record(collection);
    record16.set("quiz_id", "pbc_3963162141");
    record16.set("question_text", "What does a high inventory turnover ratio indicate?");
    record16.set("question_type", "multiple_choice");
    record16.set("options", "[\"Poor inventory management\", \"Efficient inventory management\", \"High inventory levels\", \"Low sales\"]");
    record16.set("correct_answer", "Efficient inventory management");
    record16.set("explanation", "A high inventory turnover ratio indicates efficient inventory management, as inventory is converted to sales quickly.");
    record16.set("order", 7);
  app.save(record16);

  const record17 = new Record(collection);
    record17.set("quiz_id", "pbc_3963162141");
    record17.set("question_text", "What is Days Sales Outstanding (DSO) used for?");
    record17.set("question_type", "multiple_choice");
    record17.set("options", "[\"Measuring profitability\", \"Measuring collection efficiency\", \"Measuring leverage\", \"Measuring efficiency\"]");
    record17.set("correct_answer", "Measuring collection efficiency");
    record17.set("explanation", "DSO measures the average number of days it takes to collect receivables, indicating collection efficiency.");
    record17.set("order", 8);
  app.save(record17);

  const record18 = new Record(collection);
    record18.set("quiz_id", "pbc_3963162141");
    record18.set("question_text", "What does a net profit margin of 15% indicate?");
    record18.set("question_type", "multiple_choice");
    record18.set("options", "[\"The company generates $0.15 profit for every $1 of revenue\", \"The company generates $1.50 profit for every $1 of revenue\", \"The company generates $15 profit for every $1 of revenue\", \"The company generates $0.015 profit for every $1 of revenue\"]");
    record18.set("correct_answer", "The company generates $0.15 profit for every $1 of revenue");
    record18.set("explanation", "A net profit margin of 15% means the company generates $0.15 in profit for every $1 of revenue (15% of revenue becomes profit).");
    record18.set("order", 9);
  app.save(record18);

  const record19 = new Record(collection);
    record19.set("quiz_id", "pbc_3963162141");
    record19.set("question_text", "What is the primary purpose of ratio benchmarking?");
    record19.set("question_type", "multiple_choice");
    record19.set("options", "[\"To calculate ratios\", \"To compare the lessee's ratios to industry averages\", \"To determine the lease payment\", \"To assess management quality\"]");
    record19.set("correct_answer", "To compare the lessee's ratios to industry averages");
    record19.set("explanation", "Ratio benchmarking compares the lessee's financial ratios to industry averages to assess relative financial position and performance.");
    record19.set("order", 10);
  app.save(record19);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})