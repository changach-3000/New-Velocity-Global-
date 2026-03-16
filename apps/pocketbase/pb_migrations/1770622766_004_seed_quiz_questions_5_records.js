/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "cly8q5h2k000008l8g5z5g5z5");
    record0.set("question_text", "What is the primary purpose of financial statement analysis in credit evaluation?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"To assess the lessee's financial health and ability to pay\", \"To determine equipment depreciation rates\", \"To calculate lease payment amounts\", \"To evaluate market conditions\"]");
    record0.set("correct_answer", "To assess the lessee's financial health and ability to pay");
    record0.set("explanation", "Financial statement analysis helps lenders understand the lessee's financial position and capacity to meet lease obligations.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "cly8q5h2k000008l8g5z5g5z5");
    record1.set("question_text", "What does a debt-to-income (DTI) ratio measure?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"The percentage of income used to pay debts\", \"The total amount of debt owed\", \"The interest rate on loans\", \"The equipment depreciation rate\"]");
    record1.set("correct_answer", "The percentage of income used to pay debts");
    record1.set("explanation", "DTI ratio measures what percentage of a borrower's gross monthly income goes toward debt payments, indicating payment capacity.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "cly8q5h2k000008l8g5z5g5z5");
    record2.set("question_text", "Which financial statement is most important for assessing cash flow ability to pay lease obligations?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"Cash flow statement\", \"Balance sheet\", \"Income statement\", \"Statement of changes in equity\"]");
    record2.set("correct_answer", "Cash flow statement");
    record2.set("explanation", "The cash flow statement shows actual cash inflows and outflows, which is critical for determining if the lessee can make lease payments.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "cly8q5h2k000008l8g5z5g5z5");
    record3.set("question_text", "What does a credit score primarily indicate?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"The likelihood of repaying debt based on credit history\", \"The total amount of assets owned\", \"The equipment value\", \"The lease payment amount\"]");
    record3.set("correct_answer", "The likelihood of repaying debt based on credit history");
    record3.set("explanation", "A credit score is a numerical representation of creditworthiness based on payment history, debt levels, and other credit factors.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "cly8q5h2k000008l8g5z5g5z5");
    record4.set("question_text", "Why is payment history evaluation critical in tenant assessment?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"It predicts future payment behavior and reliability\", \"It determines the equipment type\", \"It calculates interest rates\", \"It measures equipment depreciation\"]");
    record4.set("correct_answer", "It predicts future payment behavior and reliability");
    record4.set("explanation", "Past payment patterns are strong indicators of future behavior, helping lessors assess the risk of default.");
    record4.set("order", 5);
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})