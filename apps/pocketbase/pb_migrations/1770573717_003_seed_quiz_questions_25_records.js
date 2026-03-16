/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "quiz_1");
    record0.set("question_text", "What is the primary advantage of a leveraged lease structure?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"Increased tax benefits for the lessor\", \"Reduced financing costs\", \"Simplified accounting treatment\", \"Lower residual value risk\"]");
    record0.set("correct_answer", "Increased tax benefits for the lessor");
    record0.set("explanation", "Leveraged leases provide significant tax benefits to the lessor through depreciation deductions and interest expense deductions on the debt financing.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "quiz_1");
    record1.set("question_text", "In a sale-leaseback transaction, what is transferred from the lessee to the lessor?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"Ownership of the asset\", \"Operational control only\", \"Financing rights only\", \"Tax depreciation benefits\"]");
    record1.set("correct_answer", "Ownership of the asset");
    record1.set("explanation", "In a sale-leaseback, the lessee sells the asset to the lessor and then leases it back, transferring full ownership while retaining operational control.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "quiz_1");
    record2.set("question_text", "What is the key difference between a capital lease and an operating lease?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"Capital leases transfer substantially all risks and rewards of ownership\", \"Operating leases are always shorter in duration\", \"Capital leases have lower monthly payments\", \"Operating leases require asset capitalization\"]");
    record2.set("correct_answer", "Capital leases transfer substantially all risks and rewards of ownership");
    record2.set("explanation", "Capital leases transfer substantially all risks and rewards of ownership to the lessee, while operating leases do not.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "quiz_1");
    record3.set("question_text", "Which factor is NOT typically considered in lease structure design?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"Lessor's tax position\", \"Lessee's credit rating\", \"Lessor's favorite color\", \"Residual value assumptions\"]");
    record3.set("correct_answer", "Lessor's favorite color");
    record3.set("explanation", "Lease structure design considers tax positions, credit ratings, residual values, and economic factors, but not subjective preferences like color.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "quiz_1");
    record4.set("question_text", "What is the purpose of a lease structure review?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"To ensure compliance with accounting standards\", \"To maximize economic benefits for all parties\", \"To identify potential risks and opportunities\", \"All of the above\"]");
    record4.set("correct_answer", "All of the above");
    record4.set("explanation", "Lease structure reviews serve multiple purposes: ensuring compliance, maximizing economic benefits, and identifying risks and opportunities.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "quiz_2");
    record5.set("question_text", "What is the Net Present Value (NPV) method in lease valuation?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "[\"Discounting all future cash flows to present value\", \"Calculating the average annual return\", \"Comparing lease vs. buy options\", \"Determining residual value\"]");
    record5.set("correct_answer", "Discounting all future cash flows to present value");
    record5.set("explanation", "NPV is calculated by discounting all future cash flows (payments, tax benefits, residual value) to their present value using an appropriate discount rate.");
    record5.set("order", 1);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "quiz_2");
    record6.set("question_text", "Which discount rate is most appropriate for lease valuation?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"The lessor's cost of capital\", \"The lessee's cost of capital\", \"The risk-free rate\", \"The inflation rate\"]");
    record6.set("correct_answer", "The lessor's cost of capital");
    record6.set("explanation", "The lessor's cost of capital (weighted average cost of capital) is the appropriate discount rate for lease valuation from the lessor's perspective.");
    record6.set("order", 2);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "quiz_2");
    record7.set("question_text", "What is the Internal Rate of Return (IRR) in lease analysis?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "[\"The discount rate that makes NPV equal to zero\", \"The annual percentage return on investment\", \"The lessor's required rate of return\", \"The lessee's borrowing rate\"]");
    record7.set("correct_answer", "The discount rate that makes NPV equal to zero");
    record7.set("explanation", "IRR is the discount rate at which the net present value of all cash flows equals zero, representing the lease's implicit return.");
    record7.set("order", 3);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "quiz_2");
    record8.set("question_text", "How does residual value affect lease valuation?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "[\"It increases the present value of cash flows\", \"It decreases the required lease payment\", \"It has no impact on valuation\", \"It only affects operating leases\"]");
    record8.set("correct_answer", "It decreases the required lease payment");
    record8.set("explanation", "A higher residual value reduces the lessor's net investment, allowing for lower lease payments while maintaining the same return.");
    record8.set("order", 4);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "quiz_2");
    record9.set("question_text", "What is sensitivity analysis in lease valuation?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "[\"Testing how changes in key assumptions affect lease value\", \"Analyzing the lessor's sensitivity to market changes\", \"Measuring the lessee's financial sensitivity\", \"Evaluating credit risk sensitivity\"]");
    record9.set("correct_answer", "Testing how changes in key assumptions affect lease value");
    record9.set("explanation", "Sensitivity analysis examines how variations in key assumptions (residual value, discount rate, payment terms) impact the lease's economic value.");
    record9.set("order", 5);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("quiz_id", "quiz_3");
    record10.set("question_text", "What is the primary purpose of credit analysis in lease risk assessment?");
    record10.set("question_type", "multiple_choice");
    record10.set("options", "[\"To evaluate the lessee's ability to make lease payments\", \"To determine the lease payment amount\", \"To calculate residual value\", \"To structure the lease terms\"]");
    record10.set("correct_answer", "To evaluate the lessee's ability to make lease payments");
    record10.set("explanation", "Credit analysis assesses the lessee's creditworthiness and ability to meet lease payment obligations, which is critical for risk management.");
    record10.set("order", 1);
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("quiz_id", "quiz_3");
    record11.set("question_text", "Which financial ratio is most important in tenant credit evaluation?");
    record11.set("question_type", "multiple_choice");
    record11.set("options", "[\"Debt-to-equity ratio\", \"Current ratio\", \"Debt service coverage ratio\", \"All of the above\"]");
    record11.set("correct_answer", "All of the above");
    record11.set("explanation", "Multiple ratios are important: debt-to-equity shows leverage, current ratio shows liquidity, and debt service coverage ratio shows payment capacity.");
    record11.set("order", 2);
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("quiz_id", "quiz_3");
    record12.set("question_text", "What is residual value risk in equipment leasing?");
    record12.set("question_type", "multiple_choice");
    record12.set("options", "[\"The risk that the asset's value at lease end is lower than expected\", \"The risk of equipment obsolescence\", \"The risk of market value decline\", \"All of the above\"]");
    record12.set("correct_answer", "All of the above");
    record12.set("explanation", "Residual value risk encompasses the possibility that the asset's value at lease end is lower than projected due to obsolescence, market decline, or condition issues.");
    record12.set("order", 3);
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("quiz_id", "quiz_3");
    record13.set("question_text", "How can residual value risk be mitigated?");
    record13.set("question_type", "multiple_choice");
    record13.set("options", "[\"Conservative residual value assumptions\", \"Residual value insurance\", \"Flexible lease terms\", \"All of the above\"]");
    record13.set("correct_answer", "All of the above");
    record13.set("explanation", "Residual value risk can be mitigated through conservative assumptions, insurance products, and flexible lease structures that allow for adjustments.");
    record13.set("order", 4);
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("quiz_id", "quiz_3");
    record14.set("question_text", "What is the relationship between credit risk and lease pricing?");
    record14.set("question_type", "multiple_choice");
    record14.set("options", "[\"Higher credit risk requires higher lease payments\", \"Credit risk has no impact on pricing\", \"Lower credit risk requires higher payments\", \"Credit risk only affects operating leases\"]");
    record14.set("correct_answer", "Higher credit risk requires higher lease payments");
    record14.set("explanation", "Lessors price leases to compensate for credit risk; higher-risk lessees pay higher lease payments to offset the increased default risk.");
    record14.set("order", 5);
  app.save(record14);

  const record15 = new Record(collection);
    record15.set("quiz_id", "quiz_4");
    record15.set("question_text", "What is the primary objective of IFRS 16?");
    record15.set("question_type", "multiple_choice");
    record15.set("options", "[\"To eliminate the distinction between operating and capital leases\", \"To simplify lease accounting\", \"To increase transparency in lease reporting\", \"All of the above\"]");
    record15.set("correct_answer", "All of the above");
    record15.set("explanation", "IFRS 16 aims to eliminate the operating/capital lease distinction, simplify accounting, and increase transparency by requiring right-of-use asset recognition.");
    record15.set("order", 1);
  app.save(record15);

  const record16 = new Record(collection);
    record16.set("quiz_id", "quiz_4");
    record16.set("question_text", "Under IFRS 16, what must a lessee recognize on the balance sheet?");
    record16.set("question_type", "multiple_choice");
    record16.set("options", "[\"A right-of-use asset and a lease liability\", \"Only the lease liability\", \"Only the right-of-use asset\", \"Neither asset nor liability\"]");
    record16.set("correct_answer", "A right-of-use asset and a lease liability");
    record16.set("explanation", "IFRS 16 requires lessees to recognize both a right-of-use asset (representing the right to use the asset) and a lease liability (representing payment obligations).");
    record16.set("order", 2);
  app.save(record16);

  const record17 = new Record(collection);
    record17.set("quiz_id", "quiz_4");
    record17.set("question_text", "What is the key difference between IFRS 16 and ASC 842?");
    record17.set("question_type", "multiple_choice");
    record17.set("options", "[\"IFRS 16 is more stringent than ASC 842\", \"ASC 842 allows more operating lease exceptions\", \"They are substantially similar with minor differences\", \"IFRS 16 only applies to lessors\"]");
    record17.set("correct_answer", "They are substantially similar with minor differences");
    record17.set("explanation", "IFRS 16 and ASC 842 are largely converged standards with substantially similar requirements, though some minor differences exist in specific areas.");
    record17.set("order", 3);
  app.save(record17);

  const record18 = new Record(collection);
    record18.set("quiz_id", "quiz_4");
    record18.set("question_text", "How is the lease liability measured under ASC 842?");
    record18.set("question_type", "multiple_choice");
    record18.set("options", "[\"Present value of lease payments\", \"Total undiscounted lease payments\", \"Fair value of the leased asset\", \"Lessor's cost of the asset\"]");
    record18.set("correct_answer", "Present value of lease payments");
    record18.set("explanation", "The lease liability is measured as the present value of lease payments discounted at the lessor's implicit rate or the lessee's incremental borrowing rate.");
    record18.set("order", 4);
  app.save(record18);

  const record19 = new Record(collection);
    record19.set("quiz_id", "quiz_4");
    record19.set("question_text", "What is the impact of IFRS 16 on financial statements?");
    record19.set("question_type", "multiple_choice");
    record19.set("options", "[\"Increased assets and liabilities on the balance sheet\", \"Reduced operating expenses\", \"Increased net income\", \"No impact on financial statements\"]");
    record19.set("correct_answer", "Increased assets and liabilities on the balance sheet");
    record19.set("explanation", "IFRS 16 increases both assets (right-of-use assets) and liabilities (lease liabilities) on the balance sheet, improving transparency of lease obligations.");
    record19.set("order", 5);
  app.save(record19);

  const record20 = new Record(collection);
    record20.set("quiz_id", "quiz_5");
    record20.set("question_text", "What is the primary goal of portfolio management in leasing?");
    record20.set("question_type", "multiple_choice");
    record20.set("options", "[\"To maximize return on investment\", \"To minimize risk\", \"To balance return and risk\", \"To reduce administrative costs\"]");
    record20.set("correct_answer", "To balance return and risk");
    record20.set("explanation", "Portfolio management aims to optimize the balance between maximizing returns and minimizing risk across the entire lease portfolio.");
    record20.set("order", 1);
  app.save(record20);

  const record21 = new Record(collection);
    record21.set("quiz_id", "quiz_5");
    record21.set("question_text", "Which metric is most important for portfolio performance evaluation?");
    record21.set("question_type", "multiple_choice");
    record21.set("options", "[\"Weighted average life\", \"Return on assets\", \"Yield on portfolio\", \"All of the above\"]");
    record21.set("correct_answer", "All of the above");
    record21.set("explanation", "Multiple metrics are important: weighted average life indicates portfolio duration, ROA shows profitability, and yield indicates return generation.");
    record21.set("order", 2);
  app.save(record21);

  const record22 = new Record(collection);
    record22.set("quiz_id", "quiz_5");
    record22.set("question_text", "What is portfolio diversification in lease management?");
    record22.set("question_type", "multiple_choice");
    record22.set("options", "[\"Spreading risk across different asset types and lessees\", \"Concentrating investments in high-return assets\", \"Focusing on a single industry\", \"Minimizing the number of leases\"]");
    record22.set("correct_answer", "Spreading risk across different asset types and lessees");
    record22.set("explanation", "Portfolio diversification reduces risk by spreading investments across different asset types, industries, and creditworthy lessees.");
    record22.set("order", 3);
  app.save(record22);

  const record23 = new Record(collection);
    record23.set("quiz_id", "quiz_5");
    record23.set("question_text", "How should a portfolio be monitored?");
    record23.set("question_type", "multiple_choice");
    record23.set("options", "[\"Monthly performance reviews\", \"Quarterly financial analysis\", \"Regular credit monitoring\", \"All of the above\"]");
    record23.set("correct_answer", "All of the above");
    record23.set("explanation", "Effective portfolio monitoring requires monthly performance reviews, quarterly financial analysis, and continuous credit monitoring of lessees.");
    record23.set("order", 4);
  app.save(record23);

  const record24 = new Record(collection);
    record24.set("quiz_id", "quiz_5");
    record24.set("question_text", "What is the purpose of portfolio rebalancing?");
    record24.set("question_type", "multiple_choice");
    record24.set("options", "[\"To maintain target risk and return levels\", \"To reduce administrative burden\", \"To increase portfolio size\", \"To eliminate underperforming leases\"]");
    record24.set("correct_answer", "To maintain target risk and return levels");
    record24.set("explanation", "Portfolio rebalancing adjusts the portfolio composition to maintain target risk and return levels as market conditions and portfolio performance change.");
    record24.set("order", 5);
  app.save(record24);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})