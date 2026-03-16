/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "quiz_1");
    record0.set("question_text", "What is ROI (Return on Investment)?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"The total revenue from a lease\",\"The measure of profitability on an investment\",\"The monthly lease payment\",\"The residual value of equipment\"]");
    record0.set("correct_answer", "The measure of profitability on an investment");
    record0.set("explanation", "ROI measures the profitability of an investment relative to the capital invested.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "quiz_1");
    record1.set("question_text", "What is the formula for simple ROI?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"ROI = Revenue / Investment\",\"ROI = (Profit / Investment) \u00d7 100%\",\"ROI = (Revenue - Costs) / Investment\",\"ROI = Investment / Profit\"]");
    record1.set("correct_answer", "ROI = (Profit / Investment) \u00d7 100%");
    record1.set("explanation", "Simple ROI divides profit by investment and multiplies by 100 to get a percentage.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "quiz_1");
    record2.set("question_text", "What does a 12% ROI indicate?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"The investment generates $0.12 profit for every $1 invested\",\"The investment generates $1.20 profit for every $1 invested\",\"The investment generates $12 profit for every $1 invested\",\"The investment generates $0.012 profit for every $1 invested\"]");
    record2.set("correct_answer", "The investment generates $0.12 profit for every $1 invested");
    record2.set("explanation", "A 12% ROI means 12 cents profit for every dollar invested.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "quiz_1");
    record3.set("question_text", "What is the primary ROI driver for lessors?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"Equipment productivity\",\"Lease payment amount\",\"Tax benefits\",\"Working capital impact\"]");
    record3.set("correct_answer", "Lease payment amount");
    record3.set("explanation", "For lessors, the lease payment is the primary revenue driver and thus the primary ROI driver.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "quiz_1");
    record4.set("question_text", "What is the primary ROI driver for lessees?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"Lease payment amount\",\"Residual value\",\"Equipment productivity\",\"Cost of capital\"]");
    record4.set("correct_answer", "Equipment productivity");
    record4.set("explanation", "For lessees, equipment productivity (revenue generated) is the primary ROI driver.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "quiz_1");
    record5.set("question_text", "What is the primary advantage of annualized ROI?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "[\"It's easier to calculate\",\"It accounts for investment duration\",\"It ignores time value of money\",\"It's more accurate than simple ROI\"]");
    record5.set("correct_answer", "It accounts for investment duration");
    record5.set("explanation", "Annualized ROI allows comparison of investments with different durations.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "quiz_1");
    record6.set("question_text", "What is NPV (Net Present Value)?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"The total profit from an investment\",\"The present value of cash inflows minus outflows\",\"The monthly cash flow\",\"The residual value of equipment\"]");
    record6.set("correct_answer", "The present value of cash inflows minus outflows");
    record6.set("explanation", "NPV accounts for the time value of money by discounting future cash flows.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "quiz_1");
    record7.set("question_text", "What is IRR (Internal Rate of Return)?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "[\"The interest rate on borrowed funds\",\"The discount rate where NPV = 0\",\"The annual return on investment\",\"The cost of capital\"]");
    record7.set("correct_answer", "The discount rate where NPV = 0");
    record7.set("explanation", "IRR is the discount rate that makes NPV equal to zero.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "quiz_1");
    record8.set("question_text", "What is the primary advantage of using multiple ROI metrics?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "[\"It's easier to calculate\",\"It provides a more complete picture of investment performance\",\"It ignores risk\",\"It's faster to analyze\"]");
    record8.set("correct_answer", "It provides a more complete picture of investment performance");
    record8.set("explanation", "Multiple metrics provide different perspectives on investment performance and risk.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "quiz_1");
    record9.set("question_text", "What is the primary purpose of ROI benchmarking?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "[\"To calculate ROI\",\"To compare ROI to industry averages\",\"To determine lease payment\",\"To assess credit quality\"]");
    record9.set("correct_answer", "To compare ROI to industry averages");
    record9.set("explanation", "Benchmarking allows comparison of ROI to industry standards and competitors.");
    record9.set("order", 10);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("quiz_id", "quiz_2");
    record10.set("question_text", "What is Total Cost of Ownership (TCO)?");
    record10.set("question_type", "multiple_choice");
    record10.set("options", "[\"The equipment purchase price\",\"The sum of all costs associated with owning equipment\",\"The monthly lease payment\",\"The residual value\"]");
    record10.set("correct_answer", "The sum of all costs associated with owning equipment");
    record10.set("explanation", "TCO includes acquisition, operating, financing costs, and adjusts for residual value and tax benefits.");
    record10.set("order", 1);
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("quiz_id", "quiz_2");
    record11.set("question_text", "What is the primary advantage of leasing vs. buying?");
    record11.set("question_type", "multiple_choice");
    record11.set("options", "[\"Lower total cost of ownership\",\"Full ownership of equipment\",\"No maintenance costs\",\"Higher residual value\"]");
    record11.set("correct_answer", "Lower total cost of ownership");
    record11.set("explanation", "Leasing typically results in lower total cost of ownership compared to buying.");
    record11.set("order", 2);
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("quiz_id", "quiz_2");
    record12.set("question_text", "What is the primary disadvantage of buying vs. leasing?");
    record12.set("question_type", "multiple_choice");
    record12.set("options", "[\"Higher monthly costs\",\"No flexibility to upgrade\",\"Higher upfront capital requirement\",\"No tax benefits\"]");
    record12.set("correct_answer", "Higher upfront capital requirement");
    record12.set("explanation", "Buying requires significant upfront capital investment, while leasing preserves cash.");
    record12.set("order", 3);
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("quiz_id", "quiz_2");
    record13.set("question_text", "What is the primary purpose of lease vs. buy analysis?");
    record13.set("question_type", "multiple_choice");
    record13.set("options", "[\"To determine the lease payment\",\"To compare total cost of ownership\",\"To assess credit quality\",\"To calculate residual value\"]");
    record13.set("correct_answer", "To compare total cost of ownership");
    record13.set("explanation", "Lease vs. buy analysis compares the total cost of each option to make the best decision.");
    record13.set("order", 4);
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("quiz_id", "quiz_2");
    record14.set("question_text", "What is the primary ROI optimization strategy?");
    record14.set("question_type", "multiple_choice");
    record14.set("options", "[\"Increase lease payment\",\"Reduce operating costs\",\"Improve residual value\",\"All of the above\"]");
    record14.set("correct_answer", "All of the above");
    record14.set("explanation", "All three strategies contribute to ROI optimization.");
    record14.set("order", 5);
  app.save(record14);

  const record15 = new Record(collection);
    record15.set("quiz_id", "quiz_2");
    record15.set("question_text", "What is the primary benefit of portfolio diversification?");
    record15.set("question_type", "multiple_choice");
    record15.set("options", "[\"Increases portfolio ROI\",\"Reduces portfolio risk\",\"Increases portfolio size\",\"Reduces monitoring costs\"]");
    record15.set("correct_answer", "Reduces portfolio risk");
    record15.set("explanation", "Diversification spreads risk across different leases and reduces overall portfolio risk.");
    record15.set("order", 6);
  app.save(record15);

  const record16 = new Record(collection);
    record16.set("quiz_id", "quiz_2");
    record16.set("question_text", "What is Return on Assets (ROA)?");
    record16.set("question_type", "multiple_choice");
    record16.set("options", "[\"Net income / Total assets\",\"Net income / Equity\",\"Profit / Investment\",\"Revenue / Assets\"]");
    record16.set("correct_answer", "Net income / Total assets");
    record16.set("explanation", "ROA measures how efficiently assets are used to generate profit.");
    record16.set("order", 7);
  app.save(record16);

  const record17 = new Record(collection);
    record17.set("quiz_id", "quiz_2");
    record17.set("question_text", "What is Return on Equity (ROE)?");
    record17.set("question_type", "multiple_choice");
    record17.set("options", "[\"Net income / Total assets\",\"Net income / Equity\",\"Profit / Investment\",\"Revenue / Equity\"]");
    record17.set("correct_answer", "Net income / Equity");
    record17.set("explanation", "ROE measures the return generated on shareholder equity.");
    record17.set("order", 8);
  app.save(record17);

  const record18 = new Record(collection);
    record18.set("quiz_id", "quiz_2");
    record18.set("question_text", "What is Economic Value Added (EVA)?");
    record18.set("question_type", "multiple_choice");
    record18.set("options", "[\"Net income minus cost of equity\",\"NOPAT minus (Invested Capital \u00d7 WACC)\",\"Revenue minus costs\",\"Profit minus taxes\"]");
    record18.set("correct_answer", "NOPAT minus (Invested Capital \u00d7 WACC)");
    record18.set("explanation", "EVA measures value created above the cost of capital.");
    record18.set("order", 9);
  app.save(record18);

  const record19 = new Record(collection);
    record19.set("quiz_id", "quiz_2");
    record19.set("question_text", "What is the Sharpe Ratio used for?");
    record19.set("question_type", "multiple_choice");
    record19.set("options", "[\"Measuring absolute return\",\"Measuring return per unit of risk\",\"Measuring leverage\",\"Measuring efficiency\"]");
    record19.set("correct_answer", "Measuring return per unit of risk");
    record19.set("explanation", "The Sharpe Ratio measures risk-adjusted returns.");
    record19.set("order", 10);
  app.save(record19);

  const record20 = new Record(collection);
    record20.set("quiz_id", "quiz_3");
    record20.set("question_text", "What is ROI modeling?");
    record20.set("question_type", "multiple_choice");
    record20.set("options", "[\"Creating a physical model of equipment\",\"Quantitative representation of ROI drivers\",\"Calculating simple ROI\",\"Determining lease payment\"]");
    record20.set("correct_answer", "Quantitative representation of ROI drivers");
    record20.set("explanation", "ROI modeling creates a quantitative framework to project and analyze ROI.");
    record20.set("order", 1);
  app.save(record20);

  const record21 = new Record(collection);
    record21.set("quiz_id", "quiz_3");
    record21.set("question_text", "What is the primary purpose of sensitivity analysis?");
    record21.set("question_type", "multiple_choice");
    record21.set("options", "[\"To calculate ROI\",\"To identify impact of changing assumptions\",\"To determine lease payment\",\"To assess credit quality\"]");
    record21.set("correct_answer", "To identify impact of changing assumptions");
    record21.set("explanation", "Sensitivity analysis tests how changes in assumptions affect ROI outcomes.");
    record21.set("order", 2);
  app.save(record21);

  const record22 = new Record(collection);
    record22.set("quiz_id", "quiz_3");
    record22.set("question_text", "What is a scenario analysis?");
    record22.set("question_type", "multiple_choice");
    record22.set("options", "[\"Analyzing a single scenario\",\"Analyzing multiple scenarios (base, upside, downside)\",\"Analyzing historical data\",\"Analyzing competitor data\"]");
    record22.set("correct_answer", "Analyzing multiple scenarios (base, upside, downside)");
    record22.set("explanation", "Scenario analysis evaluates multiple potential outcomes to assess risk.");
    record22.set("order", 3);
  app.save(record22);

  const record23 = new Record(collection);
    record23.set("quiz_id", "quiz_3");
    record23.set("question_text", "What is the primary benefit of scenario analysis?");
    record23.set("question_type", "multiple_choice");
    record23.set("options", "[\"It's easier to calculate\",\"It provides better risk assessment\",\"It ignores downside risk\",\"It's faster to analyze\"]");
    record23.set("correct_answer", "It provides better risk assessment");
    record23.set("explanation", "Scenario analysis helps understand the range of possible outcomes and associated risks.");
    record23.set("order", 4);
  app.save(record23);

  const record24 = new Record(collection);
    record24.set("quiz_id", "quiz_3");
    record24.set("question_text", "What is the primary purpose of ROI-based pricing?");
    record24.set("question_type", "multiple_choice");
    record24.set("options", "[\"To maximize revenue\",\"To minimize costs\",\"To balance profitability and competitiveness\",\"To reduce default risk\"]");
    record24.set("correct_answer", "To balance profitability and competitiveness");
    record24.set("explanation", "ROI-based pricing ensures profitability while remaining competitive in the market.");
    record24.set("order", 5);
  app.save(record24);

  const record25 = new Record(collection);
    record25.set("quiz_id", "quiz_3");
    record25.set("question_text", "What is the primary best practice in ROI analysis?");
    record25.set("question_type", "multiple_choice");
    record25.set("options", "[\"Use aggressive assumptions\",\"Use conservative assumptions\",\"Ignore sensitivity analysis\",\"Avoid benchmarking\"]");
    record25.set("correct_answer", "Use conservative assumptions");
    record25.set("explanation", "Conservative assumptions reduce the risk of overestimating ROI and provide a safety margin.");
    record25.set("order", 6);
  app.save(record25);

  const record26 = new Record(collection);
    record26.set("quiz_id", "quiz_3");
    record26.set("question_text", "What is the primary benefit of monitoring actual vs. projected ROI?");
    record26.set("question_type", "multiple_choice");
    record26.set("options", "[\"It increases ROI\",\"It improves model accuracy over time\",\"It reduces costs\",\"It increases revenue\"]");
    record26.set("correct_answer", "It improves model accuracy over time");
    record26.set("explanation", "Comparing actual to projected results helps refine models and improve future predictions.");
    record26.set("order", 7);
  app.save(record26);

  const record27 = new Record(collection);
    record27.set("quiz_id", "quiz_3");
    record27.set("question_text", "What is the primary purpose of ROI analysis in credit decisions?");
    record27.set("question_type", "multiple_choice");
    record27.set("options", "[\"To determine lease payment\",\"To assess if lease is profitable\",\"To calculate residual value\",\"To determine equipment cost\"]");
    record27.set("correct_answer", "To assess if lease is profitable");
    record27.set("explanation", "ROI analysis in credit decisions determines whether a lease will be profitable.");
    record27.set("order", 8);
  app.save(record27);

  const record28 = new Record(collection);
    record28.set("quiz_id", "quiz_3");
    record28.set("question_text", "What is the primary purpose of ROI analysis in portfolio management?");
    record28.set("question_type", "multiple_choice");
    record28.set("options", "[\"To calculate individual lease ROI\",\"To optimize portfolio mix for maximum returns\",\"To determine lease payment\",\"To assess credit quality\"]");
    record28.set("correct_answer", "To optimize portfolio mix for maximum returns");
    record28.set("explanation", "Portfolio ROI analysis helps optimize the mix of leases to maximize overall returns.");
    record28.set("order", 9);
  app.save(record28);

  const record29 = new Record(collection);
    record29.set("quiz_id", "quiz_3");
    record29.set("question_text", "What is the primary benefit of implementing standardized ROI analysis?");
    record29.set("question_type", "multiple_choice");
    record29.set("options", "[\"It increases complexity\",\"It provides consistent, comparable ROI calculations\",\"It reduces profitability\",\"It increases default risk\"]");
    record29.set("correct_answer", "It provides consistent, comparable ROI calculations");
    record29.set("explanation", "Standardized ROI analysis ensures consistency and allows meaningful comparisons across leases.");
    record29.set("order", 10);
  app.save(record29);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})