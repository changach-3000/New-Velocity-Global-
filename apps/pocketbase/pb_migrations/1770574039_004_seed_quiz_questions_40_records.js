/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "QUIZ_1_ID");
    record0.set("question_text", "What does NNN stand for in lease terminology?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "Triple Net, Net Net Net, Negotiated Net Lease, None of the above");
    record0.set("correct_answer", "Triple Net");
    record0.set("explanation", "NNN stands for Triple Net, where the tenant pays base rent plus property taxes, insurance, and maintenance costs.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "QUIZ_1_ID");
    record1.set("question_text", "In a gross lease, who is responsible for property taxes and insurance?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "Tenant, Landlord, Both equally, Depends on agreement");
    record1.set("correct_answer", "Landlord");
    record1.set("explanation", "In a gross lease, the landlord is responsible for all operating expenses including property taxes and insurance.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "QUIZ_1_ID");
    record2.set("question_text", "What are triple net responsibilities?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "Rent, taxes, and insurance, Rent, utilities, and maintenance, Rent, property taxes, insurance, and maintenance, Rent and utilities only");
    record2.set("correct_answer", "Rent, property taxes, insurance, and maintenance");
    record2.set("explanation", "Triple net responsibilities include rent, property taxes, insurance, and maintenance costs paid by the tenant.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "QUIZ_1_ID");
    record3.set("question_text", "Which lease type provides the most predictable income for landlords?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "Gross lease, NNN lease, Percentage lease, Variable lease");
    record3.set("correct_answer", "Gross lease");
    record3.set("explanation", "Gross leases provide predictable income as the landlord covers all operating expenses and receives fixed rent.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "QUIZ_1_ID");
    record4.set("question_text", "What is the primary advantage of a percentage lease for landlords?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "Fixed income, Participation in tenant revenue, Lower maintenance costs, Reduced liability");
    record4.set("correct_answer", "Participation in tenant revenue");
    record4.set("explanation", "Percentage leases allow landlords to participate in tenant revenue, providing upside potential.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "QUIZ_2_ID");
    record5.set("question_text", "What does NPV stand for in lease analysis?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "Net Present Value, Net Profit Value, Net Payment Value, Net Positive Value");
    record5.set("correct_answer", "Net Present Value");
    record5.set("explanation", "NPV (Net Present Value) is the present value of future cash flows discounted at a specific rate.");
    record5.set("order", 1);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "QUIZ_2_ID");
    record6.set("question_text", "What is IRR in the context of lease valuation?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "Internal Rate of Return, Interest Rate Ratio, Internal Revenue Rate, Investment Return Rate");
    record6.set("correct_answer", "Internal Rate of Return");
    record6.set("explanation", "IRR (Internal Rate of Return) is the discount rate that makes the NPV of cash flows equal to zero.");
    record6.set("order", 2);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "QUIZ_2_ID");
    record7.set("question_text", "Which discount rate is typically used in lease valuation?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "Prime rate, Weighted average cost of capital, Treasury rate, Inflation rate");
    record7.set("correct_answer", "Weighted average cost of capital");
    record7.set("explanation", "The weighted average cost of capital (WACC) is commonly used as the discount rate in lease valuation.");
    record7.set("order", 3);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "QUIZ_2_ID");
    record8.set("question_text", "What is the primary purpose of financial modeling in lease analysis?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "Determine lease profitability, Forecast cash flows, Assess financial viability, All of the above");
    record8.set("correct_answer", "All of the above");
    record8.set("explanation", "Financial modeling serves to determine profitability, forecast cash flows, and assess overall financial viability.");
    record8.set("order", 4);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "QUIZ_2_ID");
    record9.set("question_text", "How does lease term length affect NPV calculations?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "Longer terms increase NPV, Longer terms decrease NPV, No effect on NPV, Depends on discount rate");
    record9.set("correct_answer", "Depends on discount rate");
    record9.set("explanation", "The effect of lease term on NPV depends on the discount rate and the timing of cash flows.");
    record9.set("order", 5);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("quiz_id", "QUIZ_3_ID");
    record10.set("question_text", "What is a ground lease?");
    record10.set("question_type", "multiple_choice");
    record10.set("options", "Lease of land only, Lease of building only, Lease of equipment, Lease of parking");
    record10.set("correct_answer", "Lease of land only");
    record10.set("explanation", "A ground lease is a lease of land only, typically for a long term, where the tenant builds improvements.");
    record10.set("order", 1);
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("quiz_id", "QUIZ_3_ID");
    record11.set("question_text", "What is a master lease?");
    record11.set("question_type", "multiple_choice");
    record11.set("options", "Primary lease agreement, Lease covering multiple properties, Lease with multiple tenants, Lease with master tenant");
    record11.set("correct_answer", "Lease covering multiple properties");
    record11.set("explanation", "A master lease covers multiple properties or equipment under a single agreement.");
    record11.set("order", 2);
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("quiz_id", "QUIZ_3_ID");
    record12.set("question_text", "What is a percentage lease?");
    record12.set("question_type", "multiple_choice");
    record12.set("options", "Lease with percentage discount, Lease with base rent plus percentage of sales, Lease with percentage increase annually, Lease with percentage of property value");
    record12.set("correct_answer", "Lease with base rent plus percentage of sales");
    record12.set("explanation", "A percentage lease combines base rent with a percentage of the tenant's gross sales revenue.");
    record12.set("order", 3);
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("quiz_id", "QUIZ_3_ID");
    record13.set("question_text", "What does TIA stand for in lease terminology?");
    record13.set("question_type", "multiple_choice");
    record13.set("options", "Tenant Improvement Allowance, Total Investment Amount, Tenant Insurance Agreement, Temporary Improvement Authorization");
    record13.set("correct_answer", "Tenant Improvement Allowance");
    record13.set("explanation", "TIA (Tenant Improvement Allowance) is the landlord's contribution toward tenant improvements.");
    record13.set("order", 4);
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("quiz_id", "QUIZ_3_ID");
    record14.set("question_text", "Which lease type is most common for retail properties?");
    record14.set("question_type", "multiple_choice");
    record14.set("options", "Ground lease, Percentage lease, Master lease, NNN lease");
    record14.set("correct_answer", "Percentage lease");
    record14.set("explanation", "Percentage leases are most common for retail properties to align landlord and tenant interests.");
    record14.set("order", 5);
  app.save(record14);

  const record15 = new Record(collection);
    record15.set("quiz_id", "QUIZ_4_ID");
    record15.set("question_text", "What is the primary goal of lease deal structuring?");
    record15.set("question_type", "multiple_choice");
    record15.set("options", "Maximize landlord profit, Minimize tenant costs, Balance interests of both parties, Reduce legal complexity");
    record15.set("correct_answer", "Balance interests of both parties");
    record15.set("explanation", "Effective deal structuring balances the interests of both landlord and tenant for a sustainable agreement.");
    record15.set("order", 1);
  app.save(record15);

  const record16 = new Record(collection);
    record16.set("quiz_id", "QUIZ_4_ID");
    record16.set("question_text", "What is risk allocation in lease negotiations?");
    record16.set("question_type", "multiple_choice");
    record16.set("options", "Dividing financial risk between parties, Transferring all risk to tenant, Eliminating all risk, Sharing insurance costs");
    record16.set("correct_answer", "Dividing financial risk between parties");
    record16.set("explanation", "Risk allocation involves dividing financial and operational risks between landlord and tenant.");
    record16.set("order", 2);
  app.save(record16);

  const record17 = new Record(collection);
    record17.set("quiz_id", "QUIZ_4_ID");
    record17.set("question_text", "Which negotiation strategy is most effective for long-term leases?");
    record17.set("question_type", "multiple_choice");
    record17.set("options", "Aggressive tactics, Win-win approach, Competitive bidding, Price-only focus");
    record17.set("correct_answer", "Win-win approach");
    record17.set("explanation", "A win-win approach is most effective for long-term leases to ensure mutual satisfaction.");
    record17.set("order", 3);
  app.save(record17);

  const record18 = new Record(collection);
    record18.set("quiz_id", "QUIZ_4_ID");
    record18.set("question_text", "What should be included in lease financial terms?");
    record18.set("question_type", "multiple_choice");
    record18.set("options", "Base rent only, Base rent and escalations, Base rent, escalations, and expense provisions, All of the above");
    record18.set("correct_answer", "All of the above");
    record18.set("explanation", "Comprehensive financial terms include base rent, escalations, and expense provisions.");
    record18.set("order", 4);
  app.save(record18);

  const record19 = new Record(collection);
    record19.set("quiz_id", "QUIZ_4_ID");
    record19.set("question_text", "How do renewal options affect lease deal structure?");
    record19.set("question_type", "multiple_choice");
    record19.set("options", "Reduce flexibility, Provide continuity and planning certainty, Increase costs, Complicate negotiations");
    record19.set("correct_answer", "Provide continuity and planning certainty");
    record19.set("explanation", "Renewal options provide continuity and allow both parties to plan for the future.");
    record19.set("order", 5);
  app.save(record19);

  const record20 = new Record(collection);
    record20.set("quiz_id", "QUIZ_5_ID");
    record20.set("question_text", "What is present value in lease valuation?");
    record20.set("question_type", "multiple_choice");
    record20.set("options", "Current market value, Value of future cash flows in today's dollars, Historical value, Appraised value");
    record20.set("correct_answer", "Value of future cash flows in today's dollars");
    record20.set("explanation", "Present value is the current worth of future cash flows discounted at an appropriate rate.");
    record20.set("order", 1);
  app.save(record20);

  const record21 = new Record(collection);
    record21.set("quiz_id", "QUIZ_5_ID");
    record21.set("question_text", "Why is discount rate selection critical in lease valuation?");
    record21.set("question_type", "multiple_choice");
    record21.set("options", "It determines lease duration, It affects NPV calculations significantly, It sets the rent amount, It determines tenant creditworthiness");
    record21.set("correct_answer", "It affects NPV calculations significantly");
    record21.set("explanation", "Discount rate selection significantly impacts NPV and the overall valuation of the lease.");
    record21.set("order", 2);
  app.save(record21);

  const record22 = new Record(collection);
    record22.set("quiz_id", "QUIZ_5_ID");
    record22.set("question_text", "What are cash flow projections in lease analysis?");
    record22.set("question_type", "multiple_choice");
    record22.set("options", "Historical rent payments, Estimated future rent and expense payments, Current market rents, Tenant financial statements");
    record22.set("correct_answer", "Estimated future rent and expense payments");
    record22.set("explanation", "Cash flow projections estimate future rent and expense payments over the lease term.");
    record22.set("order", 3);
  app.save(record22);

  const record23 = new Record(collection);
    record23.set("quiz_id", "QUIZ_5_ID");
    record23.set("question_text", "How do escalation clauses affect valuation?");
    record23.set("question_type", "multiple_choice");
    record23.set("options", "They reduce NPV, They increase NPV, They have no effect, It depends on the escalation rate");
    record23.set("correct_answer", "It depends on the escalation rate");
    record23.set("explanation", "The effect of escalation clauses on NPV depends on the escalation rate and discount rate.");
    record23.set("order", 4);
  app.save(record23);

  const record24 = new Record(collection);
    record24.set("quiz_id", "QUIZ_5_ID");
    record24.set("question_text", "What is the relationship between NPV and lease value?");
    record24.set("question_type", "multiple_choice");
    record24.set("options", "NPV equals lease value, NPV is part of lease valuation, NPV is unrelated to lease value, NPV determines rent only");
    record24.set("correct_answer", "NPV is part of lease valuation");
    record24.set("explanation", "NPV is a key component in determining the overall economic value of a lease.");
    record24.set("order", 5);
  app.save(record24);

  const record25 = new Record(collection);
    record25.set("quiz_id", "QUIZ_6_ID");
    record25.set("question_text", "What is residual value in lease analysis?");
    record25.set("question_type", "multiple_choice");
    record25.set("options", "Remaining lease term, Expected value at lease end, Current property value, Depreciation amount");
    record25.set("correct_answer", "Expected value at lease end");
    record25.set("explanation", "Residual value is the expected value of the property or equipment at the end of the lease term.");
    record25.set("order", 1);
  app.save(record25);

  const record26 = new Record(collection);
    record26.set("quiz_id", "QUIZ_6_ID");
    record26.set("question_text", "What is obsolescence in lease valuation?");
    record26.set("question_type", "multiple_choice");
    record26.set("options", "Physical deterioration, Functional or economic decline in value, Age of property, Maintenance costs");
    record26.set("correct_answer", "Functional or economic decline in value");
    record26.set("explanation", "Obsolescence refers to functional or economic decline in value due to changes in market or technology.");
    record26.set("order", 2);
  app.save(record26);

  const record27 = new Record(collection);
    record27.set("quiz_id", "QUIZ_6_ID");
    record27.set("question_text", "What are market comparables in valuation?");
    record27.set("question_type", "multiple_choice");
    record27.set("options", "Historical lease rates, Similar recent lease transactions, Appraiser estimates, Tenant proposals");
    record27.set("correct_answer", "Similar recent lease transactions");
    record27.set("explanation", "Market comparables are similar recent lease transactions used to validate valuation assumptions.");
    record27.set("order", 3);
  app.save(record27);

  const record28 = new Record(collection);
    record28.set("quiz_id", "QUIZ_6_ID");
    record28.set("question_text", "How do market conditions affect residual value?");
    record28.set("question_type", "multiple_choice");
    record28.set("options", "No effect, Strong markets increase residual value, Weak markets increase residual value, Unpredictable effect");
    record28.set("correct_answer", "Strong markets increase residual value");
    record28.set("explanation", "Strong market conditions typically increase residual value expectations.");
    record28.set("order", 4);
  app.save(record28);

  const record29 = new Record(collection);
    record29.set("quiz_id", "QUIZ_6_ID");
    record29.set("question_text", "What valuation techniques account for obsolescence?");
    record29.set("question_type", "multiple_choice");
    record29.set("options", "Cost approach only, Income approach only, Market approach only, All approaches");
    record29.set("correct_answer", "All approaches");
    record29.set("explanation", "All valuation approaches (cost, income, and market) can account for obsolescence factors.");
    record29.set("order", 5);
  app.save(record29);

  const record30 = new Record(collection);
    record30.set("quiz_id", "QUIZ_7_ID");
    record30.set("question_text", "What is sensitivity analysis in lease evaluation?");
    record30.set("question_type", "multiple_choice");
    record30.set("options", "Testing lease sensitivity to market changes, Analyzing impact of variable changes on outcomes, Assessing tenant creditworthiness, Evaluating property condition");
    record30.set("correct_answer", "Analyzing impact of variable changes on outcomes");
    record30.set("explanation", "Sensitivity analysis examines how changes in key variables affect lease valuation outcomes.");
    record30.set("order", 1);
  app.save(record30);

  const record31 = new Record(collection);
    record31.set("quiz_id", "QUIZ_7_ID");
    record31.set("question_text", "What is scenario modeling in financial analysis?");
    record31.set("question_type", "multiple_choice");
    record31.set("options", "Creating multiple financial projections, Testing best and worst cases, Analyzing different market conditions, All of the above");
    record31.set("correct_answer", "All of the above");
    record31.set("explanation", "Scenario modeling creates multiple projections including best, worst, and base cases.");
    record31.set("order", 2);
  app.save(record31);

  const record32 = new Record(collection);
    record32.set("quiz_id", "QUIZ_7_ID");
    record32.set("question_text", "What is break-even analysis in lease context?");
    record32.set("question_type", "multiple_choice");
    record32.set("options", "Point where revenue equals costs, Minimum rent required, Lease profitability threshold, Tenant occupancy level");
    record32.set("correct_answer", "Point where revenue equals costs");
    record32.set("explanation", "Break-even analysis identifies the point where lease revenue equals all associated costs.");
    record32.set("order", 3);
  app.save(record32);

  const record33 = new Record(collection);
    record33.set("quiz_id", "QUIZ_7_ID");
    record33.set("question_text", "Which variables are most critical in lease sensitivity analysis?");
    record33.set("question_type", "multiple_choice");
    record33.set("options", "Rent amount only, Discount rate and occupancy, Lease term and escalations, All of the above");
    record33.set("correct_answer", "All of the above");
    record33.set("explanation", "Critical variables include rent, discount rate, occupancy, lease term, and escalations.");
    record33.set("order", 4);
  app.save(record33);

  const record34 = new Record(collection);
    record34.set("quiz_id", "QUIZ_7_ID");
    record34.set("question_text", "How does inflation affect lease economic analysis?");
    record34.set("question_type", "multiple_choice");
    record34.set("options", "No effect, Increases real returns, Decreases real returns, Depends on escalation clauses");
    record34.set("correct_answer", "Depends on escalation clauses");
    record34.set("explanation", "Inflation's effect depends on whether escalation clauses are included in the lease.");
    record34.set("order", 5);
  app.save(record34);

  const record35 = new Record(collection);
    record35.set("quiz_id", "QUIZ_8_ID");
    record35.set("question_text", "What are industry benchmarks in lease analysis?");
    record35.set("question_type", "multiple_choice");
    record35.set("options", "Historical rent rates, Standard metrics for comparison, Tenant financial ratios, Appraiser guidelines");
    record35.set("correct_answer", "Standard metrics for comparison");
    record35.set("explanation", "Industry benchmarks are standard metrics used to compare lease terms and performance.");
    record35.set("order", 1);
  app.save(record35);

  const record36 = new Record(collection);
    record36.set("quiz_id", "QUIZ_8_ID");
    record36.set("question_text", "What is competitive analysis in leasing?");
    record36.set("question_type", "multiple_choice");
    record36.set("options", "Analyzing tenant competition, Comparing lease terms with competing properties, Evaluating market position, Assessing tenant viability");
    record36.set("correct_answer", "Comparing lease terms with competing properties");
    record36.set("explanation", "Competitive analysis compares lease terms and conditions with similar competing properties.");
    record36.set("order", 2);
  app.save(record36);

  const record37 = new Record(collection);
    record37.set("quiz_id", "QUIZ_8_ID");
    record37.set("question_text", "What market trends are important for lease valuation?");
    record37.set("question_type", "multiple_choice");
    record37.set("options", "Historical trends only, Current supply and demand, Projected future conditions, All of the above");
    record37.set("correct_answer", "All of the above");
    record37.set("explanation", "Lease valuation considers historical trends, current conditions, and future projections.");
    record37.set("order", 3);
  app.save(record37);

  const record38 = new Record(collection);
    record38.set("quiz_id", "QUIZ_8_ID");
    record38.set("question_text", "How do performance metrics help in lease benchmarking?");
    record38.set("question_type", "multiple_choice");
    record38.set("options", "They set rent amounts, They provide comparison standards, They predict tenant success, They determine lease terms");
    record38.set("correct_answer", "They provide comparison standards");
    record38.set("explanation", "Performance metrics provide standards for comparing lease performance across properties.");
    record38.set("order", 4);
  app.save(record38);

  const record39 = new Record(collection);
    record39.set("quiz_id", "QUIZ_8_ID");
    record39.set("question_text", "What is the purpose of comparative lease analysis?");
    record39.set("question_type", "multiple_choice");
    record39.set("options", "Validate assumptions, Identify market position, Support valuation conclusions, All of the above");
    record39.set("correct_answer", "All of the above");
    record39.set("explanation", "Comparative analysis validates assumptions, identifies market position, and supports valuation conclusions.");
    record39.set("order", 5);
  app.save(record39);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})