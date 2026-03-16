/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "pbc_1349215296");
    record0.set("question_text", "What is the primary goal of portfolio strategy in lease management?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "A) To maximize returns while managing risk across all leases\nB) To lease as many assets as possible\nC) To minimize all costs regardless of risk\nD) To focus on a single asset type");
    record0.set("correct_answer", "A) To maximize returns while managing risk across all leases");
    record0.set("explanation", "Portfolio strategy aims to optimize the overall performance of all leases together, balancing return maximization with appropriate risk management.");
    record0.set("order", 12);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "pbc_1349215296");
    record1.set("question_text", "What is asset allocation in portfolio management?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "A) Distributing capital across different asset types and lease structures\nB) Selling all assets\nC) Focusing on one asset class\nD) Avoiding diversification");
    record1.set("correct_answer", "A) Distributing capital across different asset types and lease structures");
    record1.set("explanation", "Asset allocation involves strategically distributing capital across different asset types, industries, and lease structures to optimize portfolio performance and manage risk.");
    record1.set("order", 13);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "pbc_1349215296");
    record2.set("question_text", "True or False: Risk diversification means spreading risk across different leases and asset types.");
    record2.set("question_type", "true_false");
    record2.set("options", "True\nFalse");
    record2.set("correct_answer", "True");
    record2.set("explanation", "Risk diversification is a key portfolio management principle that involves spreading investments across different leases, asset types, industries, and geographies to reduce overall portfolio risk.");
    record2.set("order", 14);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "pbc_1349215296");
    record3.set("question_text", "What is lease structuring?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "A) Designing lease terms and conditions to meet specific business objectives\nB) The physical arrangement of leased assets\nC) The location of leased properties\nD) The age of leased equipment");
    record3.set("correct_answer", "A) Designing lease terms and conditions to meet specific business objectives");
    record3.set("explanation", "Lease structuring involves designing the terms, conditions, payment schedules, and other elements of a lease to align with business objectives and optimize financial outcomes.");
    record3.set("order", 15);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "pbc_1349215296");
    record4.set("question_text", "What role does financial modeling play in portfolio management?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "A) It projects financial outcomes and helps evaluate different portfolio scenarios\nB) It eliminates financial risk\nC) It guarantees profits\nD) It has no practical application");
    record4.set("correct_answer", "A) It projects financial outcomes and helps evaluate different portfolio scenarios");
    record4.set("explanation", "Financial modeling uses mathematical representations to project future financial outcomes, allowing portfolio managers to evaluate different strategies and make informed decisions.");
    record4.set("order", 16);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "pbc_1349215296");
    record5.set("question_text", "Which of the following is a key performance metric for lease portfolios?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "A) Return on invested capital (ROIC) and risk-adjusted returns\nB) Only the number of leases\nC) Only the total lease value\nD) Marketing expenses");
    record5.set("correct_answer", "A) Return on invested capital (ROIC) and risk-adjusted returns");
    record5.set("explanation", "Key performance metrics for lease portfolios include ROIC, risk-adjusted returns, default rates, and other measures that reflect both profitability and risk management.");
    record5.set("order", 17);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "pbc_1349215296");
    record6.set("question_text", "What is stakeholder management in portfolio context?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "A) Managing relationships and expectations of investors, lessees, and other parties\nB) Ignoring stakeholder concerns\nC) Focusing only on shareholder returns\nD) Avoiding communication with stakeholders");
    record6.set("correct_answer", "A) Managing relationships and expectations of investors, lessees, and other parties");
    record6.set("explanation", "Stakeholder management involves maintaining positive relationships with all parties involved in the lease portfolio, including investors, lessees, regulators, and employees.");
    record6.set("order", 18);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "pbc_1349215296");
    record7.set("question_text", "True or False: Contract negotiation is not important in portfolio management.");
    record7.set("question_type", "true_false");
    record7.set("options", "True\nFalse");
    record7.set("correct_answer", "False");
    record7.set("explanation", "Contract negotiation is critical in portfolio management as it directly impacts lease terms, profitability, risk allocation, and overall portfolio performance.");
    record7.set("order", 19);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "pbc_1349215296");
    record8.set("question_text", "What is portfolio rebalancing?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "A) Adjusting the portfolio composition to maintain desired risk and return targets\nB) Selling all leases\nC) Never changing the portfolio\nD) Focusing on underperforming assets only");
    record8.set("correct_answer", "A) Adjusting the portfolio composition to maintain desired risk and return targets");
    record8.set("explanation", "Portfolio rebalancing involves periodically adjusting the mix of leases and assets to maintain alignment with strategic objectives and risk tolerance as market conditions change.");
    record8.set("order", 20);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "pbc_1349215296");
    record9.set("question_text", "How does strategic alignment contribute to portfolio success?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "A) By ensuring the portfolio supports overall business strategy and objectives\nB) By ignoring business strategy\nC) By focusing only on short-term gains\nD) By avoiding strategic planning");
    record9.set("correct_answer", "A) By ensuring the portfolio supports overall business strategy and objectives");
    record9.set("explanation", "Strategic alignment ensures that the lease portfolio composition, structure, and management practices support the organization's broader business strategy and long-term objectives.");
    record9.set("order", 21);
  app.save(record9);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})