/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "QUIZ_6_ID");
    record0.set("question_text", "What is the primary difference between leasing and buying?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "A) Leasing is always cheaper\nB) Leasing is renting, buying is ownership\nC) Buying is always better\nD) There is no difference");
    record0.set("correct_answer", "B");
    record0.set("explanation", "Leasing is a rental arrangement where you pay for the use of equipment, while buying is acquiring ownership of the equipment. This fundamental difference affects all other aspects of the decision.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "QUIZ_6_ID");
    record1.set("question_text", "What is the main advantage of leasing?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "A) Lower total cost\nB) Lower upfront costs and flexibility\nC) Ownership of equipment\nD) Tax deductions");
    record1.set("correct_answer", "B");
    record1.set("explanation", "Leasing's main advantage is lower upfront capital requirements and flexibility to upgrade or change equipment. This is especially valuable for companies with limited capital or rapidly changing technology needs.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "QUIZ_6_ID");
    record2.set("question_text", "What is the main advantage of buying?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "A) Lower monthly payments\nB) Flexibility to upgrade\nC) Ownership and long-term savings\nD) No maintenance responsibility");
    record2.set("correct_answer", "C");
    record2.set("explanation", "Buying's main advantage is ownership of the equipment and potential long-term cost savings. Over extended use periods, buying can be more economical than leasing.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "QUIZ_6_ID");
    record3.set("question_text", "What is NPV in lease vs buy analysis?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "A) Net Present Value - sum of discounted cash flows\nB) Net Profit Value\nC) Net Payment Value\nD) Net Present Valuation");
    record3.set("correct_answer", "A");
    record3.set("explanation", "NPV (Net Present Value) is the sum of all cash flows discounted to present value using the cost of capital. It allows comparison of lease and buy options on an equal financial basis.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "QUIZ_6_ID");
    record4.set("question_text", "What is the cost of capital used for?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "A) Calculating loan payments\nB) Discounting future cash flows to present value\nC) Determining lease payments\nD) Calculating depreciation");
    record4.set("correct_answer", "B");
    record4.set("explanation", "Cost of capital is the discount rate used to convert future cash flows to present value. It reflects the time value of money and the risk of the investment.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "QUIZ_6_ID");
    record5.set("question_text", "What is a key operational factor in lease vs buy decision?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "A) Interest rates\nB) Equipment usage patterns and maintenance requirements\nC) Tax rates\nD) Inflation");
    record5.set("correct_answer", "B");
    record5.set("explanation", "Equipment usage patterns (frequency and intensity) and maintenance requirements are key operational factors. High usage and low maintenance favor buying, while variable usage and high maintenance favor leasing.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "QUIZ_6_ID");
    record6.set("question_text", "What is a key strategic factor in lease vs buy decision?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "A) Equipment color\nB) Supplier location\nC) Capital preservation and balance sheet management\nD) Equipment brand");
    record6.set("correct_answer", "C");
    record6.set("explanation", "Strategic factors include capital preservation (critical need favors leasing), balance sheet management (improving ratios favors leasing), and risk management (transferring risk favors leasing).");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "QUIZ_6_ID");
    record7.set("question_text", "What is the primary risk in leasing?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "A) Equipment ownership\nB) Fixed payment obligation and obsolescence risk\nC) Maintenance costs\nD) Residual value");
    record7.set("correct_answer", "B");
    record7.set("explanation", "Primary lease risks include fixed payment obligations (cannot terminate early) and obsolescence risk (lessor may not upgrade equipment). These are mitigated through careful lease negotiation.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "QUIZ_6_ID");
    record8.set("question_text", "What is the primary risk in buying?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "A) Payment obligations\nB) Obsolescence, maintenance, and residual value risks\nC) Lessor default\nD) Wear and tear charges");
    record8.set("correct_answer", "B");
    record8.set("explanation", "Primary buy risks include obsolescence (equipment becomes outdated), maintenance (unexpected repair costs), and residual value (actual value lower than expected). These require careful planning and maintenance.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "QUIZ_6_ID");
    record9.set("question_text", "What is the purpose of sensitivity analysis?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "A) To calculate lease payments\nB) To determine how changes in assumptions affect the decision\nC) To determine tax benefits\nD) To calculate depreciation");
    record9.set("correct_answer", "B");
    record9.set("explanation", "Sensitivity analysis tests how changes in key assumptions (residual value, lease payment, maintenance, discount rate) affect the lease vs buy decision. This helps identify which variables have the greatest impact.");
    record9.set("order", 10);
  app.save(record9);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})