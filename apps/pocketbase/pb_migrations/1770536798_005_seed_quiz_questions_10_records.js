/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "QUIZ_2_ID_PLACEHOLDER");
    record0.set("question_text", "Calculate the NPV of a lease vs buy decision for a $5M equipment with 5-year lease at $1.2M/year, buy option with $150K annual maintenance, $1M residual value, 25% tax rate, and 5% discount rate.");
    record0.set("question_type", "short_answer");
    record0.set("correct_answer", "Lease NPV: $2,100,000. Buy NPV: $2,800,000. The buy option has a higher NPV, making it the more economical choice. Lease cash flows: $1.2M annual payment \u00d7 (1-0.25) = $900K after-tax, PV = $3.9M. Buy cash flows: $150K maintenance \u00d7 (1-0.25) = $112.5K after-tax, PV = $488K, less $1M residual value PV = $783K. Net buy cost = $5M + $488K - $783K = $4.7M.");
    record0.set("explanation", "NPV analysis compares the present value of all cash flows for each option. The lease option includes after-tax lease payments. The buy option includes purchase price, after-tax maintenance, and residual value recovery. The option with the lower net cost (or higher NPV) is preferred. This analysis assumes the company can deduct lease payments and maintenance costs.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "QUIZ_2_ID_PLACEHOLDER");
    record1.set("question_text", "What are the relevant cash flows to include in a lease vs buy analysis?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"Only the lease payments and purchase price\", \"Lease payments, maintenance, insurance, taxes, residual value, and financing costs\", \"Lease payments, maintenance, insurance, taxes, and residual value (excluding financing costs)\", \"All costs including sunk costs and financing costs\"]");
    record1.set("correct_answer", "Lease payments, maintenance, insurance, taxes, and residual value (excluding financing costs)");
    record1.set("explanation", "Relevant cash flows are those that differ between the lease and buy options. This includes: lease payments (or purchase price for buy), maintenance and insurance costs, tax effects of deductions, and residual value recovery. Financing costs are excluded because the discount rate already reflects the cost of capital. Sunk costs are excluded because they don't differ between options.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "QUIZ_2_ID_PLACEHOLDER");
    record2.set("question_text", "Why is the discount rate selection critical in lease vs buy analysis?");
    record2.set("question_type", "short_answer");
    record2.set("correct_answer", "The discount rate directly affects the present value of all future cash flows. A higher discount rate results in lower present values, favoring the lease option (lower current payments). A lower discount rate results in higher present values, potentially favoring the buy option. The appropriate rate is the company's after-tax cost of debt, typically 4-8%, reflecting the risk of lease payment obligations.");
    record2.set("explanation", "The discount rate is one of the most sensitive variables in lease vs buy analysis. A 1% change in the discount rate can significantly impact the NPV and potentially change the decision. This is why sensitivity analysis is important - to understand how changes in the discount rate affect the recommendation.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "QUIZ_2_ID_PLACEHOLDER");
    record3.set("question_text", "What is the difference between NPV and IRR in lease vs buy analysis?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"NPV is the absolute dollar benefit; IRR is the percentage return\", \"NPV is used for leases; IRR is used for buying\", \"They are the same metric with different names\", \"NPV is more important than IRR\"]");
    record3.set("correct_answer", "NPV is the absolute dollar benefit; IRR is the percentage return");
    record3.set("explanation", "NPV (Net Present Value) shows the absolute dollar advantage of one option over another. IRR (Internal Rate of Return) shows the percentage return or the discount rate at which NPV equals zero. Both are useful: NPV for absolute comparison, IRR for understanding the return rate. When NPV and IRR conflict, NPV is generally preferred for decision-making.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "QUIZ_2_ID_PLACEHOLDER");
    record4.set("question_text", "How should sensitivity analysis be performed in lease vs buy decisions?");
    record4.set("question_type", "short_answer");
    record4.set("correct_answer", "Sensitivity analysis involves: (1) Identifying key variables (discount rate, lease payments, residual value, maintenance costs, tax rate), (2) Changing one variable at a time by a reasonable range (e.g., \u00b11-2%), (3) Recalculating NPV for each change, (4) Creating sensitivity tables showing NPV impact, (5) Identifying critical variables with largest impact, (6) Determining break-even points where options are equal.");
    record4.set("explanation", "Sensitivity analysis helps understand which variables have the greatest impact on the decision. For example, if the decision is highly sensitive to residual value assumptions, more effort should be spent validating that estimate. Break-even analysis identifies the threshold values where the decision would change, helping management understand decision risk.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "QUIZ_2_ID_PLACEHOLDER");
    record5.set("question_text", "What is scenario analysis and how does it differ from sensitivity analysis?");
    record5.set("question_type", "short_answer");
    record5.set("correct_answer", "Scenario analysis evaluates multiple variables simultaneously under different scenarios: best case (favorable assumptions), base case (most likely), and worst case (unfavorable). Sensitivity analysis changes one variable at a time. Scenario analysis provides a range of outcomes and probability-weighted results, while sensitivity analysis shows individual variable impacts. Scenario analysis is more realistic but more complex.");
    record5.set("explanation", "Scenario analysis recognizes that variables are often correlated. For example, if interest rates rise (increasing discount rate), residual values might also decline. Scenario analysis captures these relationships. Probability-weighted scenarios provide an expected value that accounts for the likelihood of each scenario occurring.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "QUIZ_2_ID_PLACEHOLDER");
    record6.set("question_text", "Calculate the payback period for a $5M equipment purchase with annual net cash savings of $1.5M from the buy option.");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"2.5 years\", \"3.3 years\", \"4.0 years\", \"5.0 years\"]");
    record6.set("correct_answer", "3.3 years");
    record6.set("explanation", "Payback period = Initial Investment / Annual Cash Savings = $5,000,000 / $1,500,000 = 3.33 years. This means it takes 3.33 years to recover the initial $5M investment through annual savings. Payback period is a simple metric but doesn't account for time value of money or cash flows after payback. It's useful as a supplementary metric but shouldn't be the sole decision criterion.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "QUIZ_2_ID_PLACEHOLDER");
    record7.set("question_text", "What is the profitability index and how is it calculated?");
    record7.set("question_type", "short_answer");
    record7.set("correct_answer", "Profitability Index = PV of Benefits / PV of Costs. For the example: Lease profitability index = 1.12, Buy profitability index = 1.15. A profitability index greater than 1.0 indicates the option creates value. Higher index indicates better value creation per dollar invested. It's useful for comparing options with different investment sizes.");
    record7.set("explanation", "The profitability index is a relative measure of value creation. An index of 1.15 means that for every dollar of cost, the option generates $1.15 in benefits. This metric is particularly useful when comparing multiple investment options with different capital requirements. It's also called the benefit-cost ratio.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "QUIZ_2_ID_PLACEHOLDER");
    record8.set("question_text", "How should tax effects be incorporated into lease vs buy analysis?");
    record8.set("question_type", "short_answer");
    record8.set("correct_answer", "Tax effects are incorporated by: (1) Calculating after-tax cash flows for each option, (2) Lease payments are tax deductible: After-tax cost = Lease payment \u00d7 (1 - Tax rate), (3) Maintenance and insurance are tax deductible, (4) Depreciation provides tax shield: Tax shield = Depreciation \u00d7 Tax rate, (5) Interest on debt financing is tax deductible, (6) Using after-tax discount rate (Cost of debt \u00d7 (1 - Tax rate)).");
    record8.set("explanation", "Tax effects are critical because they reduce the effective cost of both lease and buy options. The tax rate used should be the company's marginal tax rate. If the company has no taxable income, tax deductions have no value. This is why some companies in loss positions may prefer leasing (where the lessor captures the tax benefits).");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "QUIZ_2_ID_PLACEHOLDER");
    record9.set("question_text", "What qualitative factors should be considered in addition to financial analysis in lease vs buy decisions?");
    record9.set("question_type", "short_answer");
    record9.set("correct_answer", "Qualitative factors include: (1) Operational flexibility - leasing provides easier upgrade/replacement, (2) Balance sheet impact - buying increases assets/liabilities, (3) Obsolescence risk - leasing transfers risk to lessor, (4) Maintenance and support - lessor may provide services, (5) Strategic considerations - core vs non-core assets, (6) Covenant implications - lease liabilities affect debt covenants, (7) Credit rating impact - leases affect leverage ratios, (8) Vendor relationships - lessor may provide other services.");
    record9.set("explanation", "While financial analysis provides the foundation for the decision, qualitative factors often override the numbers. For example, a company might choose to lease despite higher NPV for buying if it provides operational flexibility or preserves balance sheet capacity for other investments. The decision should integrate both quantitative and qualitative factors.");
    record9.set("order", 10);
  app.save(record9);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})