/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "pbc_3963162141");
    record0.set("question_text", "What is credit scoring used for?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"Calculating lease payments\", \"Assessing credit risk and predicting default probability\", \"Determining residual value\", \"Calculating interest rates\"]");
    record0.set("correct_answer", "Assessing credit risk and predicting default probability");
    record0.set("explanation", "Credit scoring is a quantitative method to assess credit risk and predict the probability of default. It assigns a numerical score based on credit factors to standardize credit decisions.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "pbc_3963162141");
    record1.set("question_text", "What does a credit score of 850 indicate?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"Prime credit quality, very low default risk\", \"Good credit quality, low default risk\", \"Fair credit quality, moderate default risk\", \"Subprime credit quality, high default risk\"]");
    record1.set("correct_answer", "Prime credit quality, very low default risk");
    record1.set("explanation", "A credit score of 850 falls in the 800-1000 range, which indicates Prime credit quality (A rating) with very low default risk (< 1%).");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "pbc_3963162141");
    record2.set("question_text", "What is the primary purpose of credit monitoring?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"To calculate lease payments\", \"To track lessee financial condition and identify deterioration early\", \"To determine residual value\", \"To assess management quality\"]");
    record2.set("correct_answer", "To track lessee financial condition and identify deterioration early");
    record2.set("explanation", "Credit monitoring is used to track the lessee's financial condition, identify deterioration early, assess covenant compliance, and manage portfolio risk.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "pbc_3963162141");
    record3.set("question_text", "What is an early warning indicator in credit monitoring?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"A sign that the lessee is about to default\", \"A sign of deteriorating financial condition\", \"A sign that the lease is profitable\", \"A sign that the equipment is obsolete\"]");
    record3.set("correct_answer", "A sign of deteriorating financial condition");
    record3.set("explanation", "Early warning indicators are signs of deteriorating financial condition, such as declining profitability, declining liquidity, increasing leverage, or declining cash flow.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "pbc_3963162141");
    record4.set("question_text", "What is the primary benefit of portfolio diversification?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"Increases portfolio returns\", \"Reduces portfolio risk through spreading exposure\", \"Increases portfolio size\", \"Reduces monitoring costs\"]");
    record4.set("correct_answer", "Reduces portfolio risk through spreading exposure");
    record4.set("explanation", "Portfolio diversification reduces risk by spreading exposure across multiple customers, industries, geographies, credit qualities, and equipment types.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "pbc_3963162141");
    record5.set("question_text", "What is the target for customer concentration in a lease portfolio?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "[\"No customer > 50% of portfolio\", \"No customer > 20% of portfolio\", \"No customer > 5-10% of portfolio\", \"No customer > 1% of portfolio\"]");
    record5.set("correct_answer", "No customer > 5-10% of portfolio");
    record5.set("explanation", "The target for customer concentration is no single customer representing more than 5-10% of the portfolio to reduce concentration risk.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "pbc_3963162141");
    record6.set("question_text", "What is the primary purpose of a portfolio default rate metric?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"To calculate lease payments\", \"To assess portfolio health and default risk\", \"To determine residual value\", \"To assess management quality\"]");
    record6.set("correct_answer", "To assess portfolio health and default risk");
    record6.set("explanation", "The portfolio default rate metric measures the percentage of the portfolio in default and is used to assess portfolio health and default risk.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "pbc_3963162141");
    record7.set("question_text", "What is the primary benefit of an early warning system?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "[\"To increase lease payments\", \"To identify deteriorating credits early and take action\", \"To reduce monitoring costs\", \"To increase portfolio size\"]");
    record7.set("correct_answer", "To identify deteriorating credits early and take action");
    record7.set("explanation", "An early warning system helps identify deteriorating credits early, allowing the lessor to take proactive action to mitigate risk.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "pbc_3963162141");
    record8.set("question_text", "What is the primary purpose of covenant monitoring?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "[\"To calculate lease payments\", \"To ensure the lessee complies with lease covenants\", \"To determine residual value\", \"To assess management quality\"]");
    record8.set("correct_answer", "To ensure the lessee complies with lease covenants");
    record8.set("explanation", "Covenant monitoring ensures the lessee complies with lease covenants, such as maintaining minimum DSCR, maximum leverage, or minimum liquidity.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "pbc_3963162141");
    record9.set("question_text", "What is the primary benefit of portfolio optimization?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "[\"To increase portfolio size\", \"To reduce monitoring costs\", \"To improve risk-adjusted returns and portfolio resilience\", \"To increase lease payments\"]");
    record9.set("correct_answer", "To improve risk-adjusted returns and portfolio resilience");
    record9.set("explanation", "Portfolio optimization improves risk-adjusted returns and portfolio resilience by reducing concentration risk, improving diversification, and balancing risk and return.");
    record9.set("order", 10);
  app.save(record9);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})