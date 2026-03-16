/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "quiz_3_1");
    record0.set("question_text", "What is the primary difference between leasing and buying?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "Leasing is always cheaper|Buying provides ownership, leasing provides use rights|Leasing is only for short-term needs|Buying is only for large companies");
    record0.set("correct_answer", "Buying provides ownership, leasing provides use rights");
    record0.set("explanation", "Leasing grants use rights while buying provides ownership of the equipment");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "quiz_3_1");
    record1.set("question_text", "What is the main advantage of leasing?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "Ownership of equipment|Preserves capital and provides flexibility|Eliminates all costs|Guarantees residual value");
    record1.set("correct_answer", "Preserves capital and provides flexibility");
    record1.set("explanation", "Leasing preserves capital for other investments and provides operational flexibility");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "quiz_3_1");
    record2.set("question_text", "What is the main advantage of buying?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "No upfront costs|Ownership, residual value, and depreciation benefits|No maintenance costs|Eliminates all risks");
    record2.set("correct_answer", "Ownership, residual value, and depreciation benefits");
    record2.set("explanation", "Buying provides ownership, potential residual value recovery, and tax depreciation benefits");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "quiz_3_1");
    record3.set("question_text", "What is NPV in lease vs buy analysis?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "Net Present Value of all cash flows|Net Profit Value|Net Payment Value|Net Positive Value");
    record3.set("correct_answer", "Net Present Value of all cash flows");
    record3.set("explanation", "NPV discounts all future cash flows to present value for comparison");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "quiz_3_1");
    record4.set("question_text", "What is the cost of capital used for?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "Calculating equipment cost|Discounting future cash flows to present value|Determining lease payment|Calculating residual value");
    record4.set("correct_answer", "Discounting future cash flows to present value");
    record4.set("explanation", "Cost of capital is the discount rate used to calculate present value of future cash flows");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "quiz_3_1");
    record5.set("question_text", "What is a key operational factor in lease vs buy decision?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "Company size|Equipment usage patterns and maintenance needs|Industry location|Number of employees");
    record5.set("correct_answer", "Equipment usage patterns and maintenance needs");
    record5.set("explanation", "Operational factors like usage intensity and maintenance requirements significantly impact the decision");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "quiz_3_1");
    record6.set("question_text", "What is a key strategic factor in lease vs buy decision?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "Equipment color|Equipment brand|Capital preservation and balance sheet impact|Equipment weight");
    record6.set("correct_answer", "Capital preservation and balance sheet impact");
    record6.set("explanation", "Strategic factors include capital preservation needs and financial statement impacts");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "quiz_3_1");
    record7.set("question_text", "What is the primary risk in leasing?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "Ownership risk|Fixed payment obligations and obsolescence risk|No residual value|High maintenance costs");
    record7.set("correct_answer", "Fixed payment obligations and obsolescence risk");
    record7.set("explanation", "Lease risks include fixed payment commitments and potential obsolescence of equipment");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "quiz_3_1");
    record8.set("question_text", "What is the primary risk in buying?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "No ownership|Maintenance, obsolescence, and residual value risk|Fixed lease payments|No flexibility");
    record8.set("correct_answer", "Maintenance, obsolescence, and residual value risk");
    record8.set("explanation", "Buy risks include maintenance costs, technology obsolescence, and uncertain residual values");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "quiz_3_1");
    record9.set("question_text", "What is the purpose of sensitivity analysis?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "Determine equipment sensitivity|Assess how assumption changes affect decision|Calculate equipment cost|Determine lease payment");
    record9.set("correct_answer", "Assess how assumption changes affect decision");
    record9.set("explanation", "Sensitivity analysis tests how changes in key assumptions impact the lease vs buy decision");
    record9.set("order", 10);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("quiz_id", "quiz_3_2");
    record10.set("question_text", "What is Total Cost of Ownership (TCO)?");
    record10.set("question_type", "multiple_choice");
    record10.set("options", "Equipment purchase price only|Sum of all costs associated with equipment ownership|Lease payment only|Maintenance cost only");
    record10.set("correct_answer", "Sum of all costs associated with equipment ownership");
    record10.set("explanation", "TCO includes all costs: purchase, maintenance, financing, taxes, and residual value");
    record10.set("order", 1);
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("quiz_id", "quiz_3_2");
    record11.set("question_text", "What is the tax benefit of lease payments?");
    record11.set("question_type", "multiple_choice");
    record11.set("options", "No tax benefit|Lease payments are tax deductible|Lease payments increase taxes|Lease payments are capitalized");
    record11.set("correct_answer", "Lease payments are tax deductible");
    record11.set("explanation", "Lease payments are fully deductible as operating expenses");
    record11.set("order", 2);
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("quiz_id", "quiz_3_2");
    record12.set("question_text", "What is the tax benefit of depreciation?");
    record12.set("question_type", "multiple_choice");
    record12.set("options", "No tax benefit|Depreciation is tax deductible|Depreciation increases taxes|Depreciation is capitalized");
    record12.set("correct_answer", "Depreciation is tax deductible");
    record12.set("explanation", "Depreciation provides tax deductions that reduce taxable income");
    record12.set("order", 3);
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("quiz_id", "quiz_3_2");
    record13.set("question_text", "What is Section 179 deduction?");
    record13.set("question_type", "multiple_choice");
    record13.set("options", "Lease payment deduction|Immediate deduction of equipment cost|Depreciation deduction|Interest deduction");
    record13.set("correct_answer", "Immediate deduction of equipment cost");
    record13.set("explanation", "Section 179 allows immediate deduction of equipment cost up to annual limits");
    record13.set("order", 4);
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("quiz_id", "quiz_3_2");
    record14.set("question_text", "What is break-even analysis?");
    record14.set("question_type", "multiple_choice");
    record14.set("options", "Analysis of equipment break|Determines point where lease and buy costs are equal|Analysis of payment breaks|Analysis of equipment breaks");
    record14.set("correct_answer", "Determines point where lease and buy costs are equal");
    record14.set("explanation", "Break-even analysis identifies the point where lease and buy total costs are equivalent");
    record14.set("order", 5);
  app.save(record14);

  const record15 = new Record(collection);
    record15.set("quiz_id", "quiz_3_2");
    record15.set("question_text", "What is the impact of residual value on buying decision?");
    record15.set("question_type", "multiple_choice");
    record15.set("options", "No impact|Higher residual value makes buying more attractive|Lower residual value makes buying more attractive|Residual value is irrelevant");
    record15.set("correct_answer", "Higher residual value makes buying more attractive");
    record15.set("explanation", "Higher residual value reduces net cost of ownership, favoring the buy option");
    record15.set("order", 6);
  app.save(record15);

  const record16 = new Record(collection);
    record16.set("quiz_id", "quiz_3_2");
    record16.set("question_text", "What is the impact of maintenance costs on buying decision?");
    record16.set("question_type", "multiple_choice");
    record16.set("options", "No impact|Higher maintenance costs make leasing more attractive|Lower maintenance costs make buying more attractive|Maintenance costs are irrelevant");
    record16.set("correct_answer", "Higher maintenance costs make leasing more attractive");
    record16.set("explanation", "High maintenance costs favor leasing since lessor typically covers maintenance");
    record16.set("order", 7);
  app.save(record16);

  const record17 = new Record(collection);
    record17.set("quiz_id", "quiz_3_2");
    record17.set("question_text", "What is the impact of lease payment on leasing decision?");
    record17.set("question_type", "multiple_choice");
    record17.set("options", "No impact|Higher lease payment makes buying more attractive|Lower lease payment makes leasing more attractive|Lease payment is irrelevant");
    record17.set("correct_answer", "Lower lease payment makes leasing more attractive");
    record17.set("explanation", "Lower lease payments improve the financial attractiveness of the leasing option");
    record17.set("order", 8);
  app.save(record17);

  const record18 = new Record(collection);
    record18.set("quiz_id", "quiz_3_2");
    record18.set("question_text", "What is bonus depreciation?");
    record18.set("question_type", "multiple_choice");
    record18.set("options", "Additional depreciation in early years|Depreciation bonus|Lease payment bonus|Residual value bonus");
    record18.set("correct_answer", "Additional depreciation in early years");
    record18.set("explanation", "Bonus depreciation allows accelerated deductions in the first year of ownership");
    record18.set("order", 9);
  app.save(record18);

  const record19 = new Record(collection);
    record19.set("quiz_id", "quiz_3_2");
    record19.set("question_text", "What is the primary purpose of NPV analysis?");
    record19.set("question_type", "multiple_choice");
    record19.set("options", "Determine equipment cost|Compare lease and buy options on equal basis|Calculate lease payment|Determine residual value");
    record19.set("correct_answer", "Compare lease and buy options on equal basis");
    record19.set("explanation", "NPV analysis provides a standardized financial comparison of lease vs buy options");
    record19.set("order", 10);
  app.save(record19);

  const record20 = new Record(collection);
    record20.set("quiz_id", "quiz_3_3");
    record20.set("question_text", "What is the impact of technology obsolescence on leasing?");
    record20.set("question_type", "multiple_choice");
    record20.set("options", "No impact|Fast obsolescence favors leasing for flexibility|Slow obsolescence favors leasing|Obsolescence is irrelevant");
    record20.set("correct_answer", "Fast obsolescence favors leasing for flexibility");
    record20.set("explanation", "Fast-changing technology favors leasing to avoid being stuck with obsolete equipment");
    record20.set("order", 1);
  app.save(record20);

  const record21 = new Record(collection);
    record21.set("quiz_id", "quiz_3_3");
    record21.set("question_text", "What is the impact of capital preservation on decision?");
    record21.set("question_type", "multiple_choice");
    record21.set("options", "No impact|Capital preservation needs favor leasing|Capital preservation needs favor buying|Capital preservation is irrelevant");
    record21.set("correct_answer", "Capital preservation needs favor leasing");
    record21.set("explanation", "Leasing preserves capital for other strategic investments and growth opportunities");
    record21.set("order", 2);
  app.save(record21);

  const record22 = new Record(collection);
    record22.set("quiz_id", "quiz_3_3");
    record22.set("question_text", "What is the impact of balance sheet management on decision?");
    record22.set("question_type", "multiple_choice");
    record22.set("options", "No impact|Balance sheet concerns favor operating leases|Balance sheet concerns favor buying|Balance sheet is irrelevant");
    record22.set("correct_answer", "Balance sheet concerns favor operating leases");
    record22.set("explanation", "Operating leases may provide off-balance sheet treatment, improving financial ratios");
    record22.set("order", 3);
  app.save(record22);

  const record23 = new Record(collection);
    record23.set("quiz_id", "quiz_3_3");
    record23.set("question_text", "What is the primary operational factor in lease vs buy?");
    record23.set("question_type", "multiple_choice");
    record23.set("options", "Equipment color|Equipment brand|Equipment usage patterns and maintenance needs|Equipment weight");
    record23.set("correct_answer", "Equipment usage patterns and maintenance needs");
    record23.set("explanation", "Operational factors directly impact the cost and feasibility of each option");
    record23.set("order", 4);
  app.save(record23);

  const record24 = new Record(collection);
    record24.set("quiz_id", "quiz_3_3");
    record24.set("question_text", "What is the primary strategic factor in lease vs buy?");
    record24.set("question_type", "multiple_choice");
    record24.set("options", "Equipment size|Equipment type|Capital preservation and balance sheet impact|Equipment age");
    record24.set("correct_answer", "Capital preservation and balance sheet impact");
    record24.set("explanation", "Strategic factors align the decision with overall business objectives and financial goals");
    record24.set("order", 5);
  app.save(record24);

  const record25 = new Record(collection);
    record25.set("quiz_id", "quiz_3_3");
    record25.set("question_text", "What is the primary risk in leasing?");
    record25.set("question_type", "multiple_choice");
    record25.set("options", "Ownership risk|Fixed payment obligations and obsolescence risk|Maintenance risk|Financing risk");
    record25.set("correct_answer", "Fixed payment obligations and obsolescence risk");
    record25.set("explanation", "Lease risks include contractual payment obligations and potential equipment obsolescence");
    record25.set("order", 6);
  app.save(record25);

  const record26 = new Record(collection);
    record26.set("quiz_id", "quiz_3_3");
    record26.set("question_text", "What is the primary risk in buying?");
    record26.set("question_type", "multiple_choice");
    record26.set("options", "No ownership|Maintenance, obsolescence, and residual value risk|Fixed lease payments|Lessor default risk");
    record26.set("correct_answer", "Maintenance, obsolescence, and residual value risk");
    record26.set("explanation", "Buy risks include maintenance responsibility, technology changes, and uncertain residual values");
    record26.set("order", 7);
  app.save(record26);

  const record27 = new Record(collection);
    record27.set("quiz_id", "quiz_3_3");
    record27.set("question_text", "What is the purpose of decision matrix?");
    record27.set("question_type", "multiple_choice");
    record27.set("options", "Determine equipment cost|Score and weight factors to support decision|Calculate lease payment|Determine residual value");
    record27.set("correct_answer", "Score and weight factors to support decision");
    record27.set("explanation", "Decision matrix provides structured evaluation of multiple factors with assigned weights");
    record27.set("order", 8);
  app.save(record27);

  const record28 = new Record(collection);
    record28.set("quiz_id", "quiz_3_3");
    record28.set("question_text", "What is the first step in lease vs buy decision framework?");
    record28.set("question_type", "multiple_choice");
    record28.set("options", "Make decision|Gather information|Financial analysis|Risk assessment");
    record28.set("correct_answer", "Gather information");
    record28.set("explanation", "The first step is to collect all relevant data about equipment, costs, and requirements");
    record28.set("order", 9);
  app.save(record28);

  const record29 = new Record(collection);
    record29.set("quiz_id", "quiz_3_3");
    record29.set("question_text", "What is the final step in lease vs buy decision framework?");
    record29.set("question_type", "multiple_choice");
    record29.set("options", "Gather information|Financial analysis|Decision and implementation|Risk assessment");
    record29.set("correct_answer", "Decision and implementation");
    record29.set("explanation", "The final step is to make the decision and develop an implementation plan");
    record29.set("order", 10);
  app.save(record29);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})