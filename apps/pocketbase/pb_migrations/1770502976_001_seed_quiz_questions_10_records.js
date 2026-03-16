/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "QUIZ_7_ID");
    record0.set("question_text", "What is Total Cost of Ownership (TCO)?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "A) Just the purchase price\nB) Sum of all costs including purchase, financing, maintenance, taxes, and residual value\nC) Only maintenance costs\nD) Only financing costs");
    record0.set("correct_answer", "B");
    record0.set("explanation", "TCO includes all costs associated with equipment ownership: purchase price, financing costs, operating costs (maintenance, insurance), tax costs/benefits, and residual value. It provides a comprehensive cost picture.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "QUIZ_7_ID");
    record1.set("question_text", "What is the tax benefit of lease payments?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "A) No tax benefit\nB) Lease payments are tax deductible, reducing taxable income\nC) Only interest is deductible\nD) Only maintenance is deductible");
    record1.set("correct_answer", "B");
    record1.set("explanation", "Operating lease payments are fully tax deductible. Tax savings = lease payment \u00d7 tax rate. For example, $20K payment \u00d7 25% tax rate = $5K tax savings. This reduces the net cost of leasing.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "QUIZ_7_ID");
    record2.set("question_text", "What is the tax benefit of depreciation?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "A) No tax benefit\nB) Depreciation is tax deductible, reducing taxable income\nC) Only interest is deductible\nD) Only maintenance is deductible");
    record2.set("correct_answer", "B");
    record2.set("explanation", "Depreciation is tax deductible. Tax savings = depreciation \u00d7 tax rate. For example, $200K depreciation \u00d7 25% tax rate = $50K tax savings. This reduces the net cost of buying.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "QUIZ_7_ID");
    record3.set("question_text", "What is Section 179 deduction?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "A) A lease payment deduction\nB) Immediate deduction of equipment cost up to $1.16M limit, accelerating tax benefits\nC) A depreciation method\nD) A maintenance deduction");
    record3.set("correct_answer", "B");
    record3.set("explanation", "Section 179 allows immediate deduction of equipment cost up to $1.16M limit in the year of purchase, rather than spreading depreciation over years. This significantly accelerates tax benefits and favors buying.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "QUIZ_7_ID");
    record4.set("question_text", "What is break-even analysis?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "A) Calculating lease payments\nB) Determining point where lease and buy costs are equal\nC) Calculating depreciation\nD) Calculating interest rates");
    record4.set("correct_answer", "B");
    record4.set("explanation", "Break-even analysis determines the point where lease and buy costs are equal. It identifies critical variables: break-even residual value, lease payment, and maintenance cost. If actual values exceed break-even, one option becomes cheaper.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "QUIZ_7_ID");
    record5.set("question_text", "What is the impact of residual value on buying decision?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "A) No impact\nB) Higher residual value makes buying more attractive\nC) Lower residual value makes buying more attractive\nD) Residual value only affects leasing");
    record5.set("correct_answer", "B");
    record5.set("explanation", "Higher residual value reduces the net cost of buying because the equipment retains more value at the end. For example, $200K residual value reduces buy cost by $200K. Conservative residual assumptions are important.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "QUIZ_7_ID");
    record6.set("question_text", "What is the impact of maintenance costs on buying decision?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "A) No impact\nB) Higher maintenance costs make buying less attractive\nC) Lower maintenance costs make buying less attractive\nD) Maintenance costs only affect leasing");
    record6.set("correct_answer", "B");
    record6.set("explanation", "Higher maintenance costs increase the net cost of buying. For example, $30K/year maintenance increases buy cost by $150K over 5 years. High maintenance favors leasing (often included in lease payment).");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "QUIZ_7_ID");
    record7.set("question_text", "What is the impact of lease payment on leasing decision?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "A) No impact\nB) Higher lease payments make leasing less attractive\nC) Lower lease payments make leasing less attractive\nD) Lease payments only affect buying");
    record7.set("correct_answer", "B");
    record7.set("explanation", "Higher lease payments increase the net cost of leasing. For example, $25K/month vs $20K/month increases lease cost by $300K over 5 years. Negotiating lower lease payments is important.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "QUIZ_7_ID");
    record8.set("question_text", "What is bonus depreciation?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "A) Allows 100% depreciation in early years\nB) A lease payment deduction\nC) A maintenance deduction\nD) A financing cost deduction");
    record8.set("correct_answer", "A");
    record8.set("explanation", "Bonus depreciation allows 100% depreciation of equipment cost in early years (currently 100% in 2023-2025, phasing down). This accelerates tax benefits and makes buying more attractive than standard depreciation.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "QUIZ_7_ID");
    record9.set("question_text", "What is the primary purpose of NPV analysis?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "A) To calculate lease payments\nB) To compare lease and buy options on equal financial basis\nC) To calculate depreciation\nD) To determine tax benefits");
    record9.set("correct_answer", "B");
    record9.set("explanation", "NPV analysis compares lease and buy options by discounting all cash flows to present value. This allows fair comparison despite different payment patterns and timing. The option with higher (less negative) NPV is financially superior.");
    record9.set("order", 10);
  app.save(record9);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})