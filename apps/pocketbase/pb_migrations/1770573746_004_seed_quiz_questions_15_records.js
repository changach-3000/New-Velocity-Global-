/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "quiz_1");
    record0.set("question_text", "What factors should be considered when structuring a lease deal?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"Tax implications for both parties\", \"Accounting treatment and standards\", \"Residual value and risk allocation\", \"All of the above\"]");
    record0.set("correct_answer", "All of the above");
    record0.set("explanation", "Effective lease structuring requires consideration of tax implications, accounting treatment, residual value, risk allocation, and economic benefits.");
    record0.set("order", 6);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "quiz_1");
    record1.set("question_text", "How does the lessor's tax position affect lease structuring?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"It determines the lease payment amount\", \"It affects the allocation of tax benefits\", \"It has no impact on structure\", \"It only affects operating leases\"]");
    record1.set("correct_answer", "It affects the allocation of tax benefits");
    record1.set("explanation", "The lessor's tax position influences how tax benefits (depreciation, interest deductions) are allocated between lessor and lessee in the lease structure.");
    record1.set("order", 7);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "quiz_1");
    record2.set("question_text", "What is a synthetic lease?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"A lease structured to be treated as an operating lease for accounting but capital lease for tax\", \"A lease with synthetic assets\", \"A lease with variable payments\", \"A lease with multiple lessees\"]");
    record2.set("correct_answer", "A lease structured to be treated as an operating lease for accounting but capital lease for tax");
    record2.set("explanation", "A synthetic lease is structured to achieve operating lease accounting treatment while obtaining capital lease tax benefits, though this is now limited under new standards.");
    record2.set("order", 8);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "quiz_2");
    record3.set("question_text", "What is the lease vs. buy analysis?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"Comparing the cost of leasing versus purchasing an asset\", \"Determining which assets to lease\", \"Analyzing lessor profitability\", \"Evaluating lessee creditworthiness\"]");
    record3.set("correct_answer", "Comparing the cost of leasing versus purchasing an asset");
    record3.set("explanation", "Lease vs. buy analysis compares the total cost of leasing an asset with the cost of purchasing it, helping lessees make optimal financing decisions.");
    record3.set("order", 6);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "quiz_2");
    record4.set("question_text", "What is the incremental borrowing rate in lease valuation?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"The rate at which the lessee could borrow to purchase the asset\", \"The lessor's cost of capital\", \"The risk-free rate\", \"The prime lending rate\"]");
    record4.set("correct_answer", "The rate at which the lessee could borrow to purchase the asset");
    record4.set("explanation", "The incremental borrowing rate is the rate the lessee would pay to borrow funds to purchase the asset, used to discount lease payments when the lessor's implicit rate is unknown.");
    record4.set("order", 7);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "quiz_2");
    record5.set("question_text", "How does inflation affect lease valuation?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "[\"It increases the present value of future payments\", \"It decreases the discount rate\", \"It affects residual value assumptions\", \"It has no impact on valuation\"]");
    record5.set("correct_answer", "It affects residual value assumptions");
    record5.set("explanation", "Inflation impacts the expected residual value of assets at lease end, which is a critical component of lease valuation and pricing.");
    record5.set("order", 8);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "quiz_3");
    record6.set("question_text", "What is the purpose of a credit rating in lease risk assessment?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"To determine the lessee's default probability\", \"To set the lease payment amount\", \"To evaluate asset quality\", \"To calculate residual value\"]");
    record6.set("correct_answer", "To determine the lessee's default probability");
    record6.set("explanation", "Credit ratings provide an assessment of the lessee's default probability and creditworthiness, which is essential for pricing and risk management.");
    record6.set("order", 6);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "quiz_3");
    record7.set("question_text", "What is covenant monitoring in lease management?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "[\"Monitoring the lessee's compliance with lease terms\", \"Tracking asset condition\", \"Evaluating market conditions\", \"Assessing residual value\"]");
    record7.set("correct_answer", "Monitoring the lessee's compliance with lease terms");
    record7.set("explanation", "Covenant monitoring ensures the lessee complies with lease terms such as maintenance requirements, insurance, and financial covenants.");
    record7.set("order", 7);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "quiz_3");
    record8.set("question_text", "How should default risk be priced into lease payments?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "[\"Through a risk premium in the discount rate\", \"Through higher residual value assumptions\", \"Through longer lease terms\", \"Through lower payment amounts\"]");
    record8.set("correct_answer", "Through a risk premium in the discount rate");
    record8.set("explanation", "Default risk is priced into leases by adding a risk premium to the discount rate, resulting in higher required lease payments for riskier lessees.");
    record8.set("order", 8);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "quiz_4");
    record9.set("question_text", "What is the right-of-use asset under IFRS 16?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "[\"The lessee's right to use the leased asset\", \"The lessor's ownership of the asset\", \"The residual value of the asset\", \"The lease payment obligation\"]");
    record9.set("correct_answer", "The lessee's right to use the leased asset");
    record9.set("explanation", "The right-of-use asset represents the lessee's right to use the leased asset over the lease term and is recognized on the lessee's balance sheet.");
    record9.set("order", 6);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("quiz_id", "quiz_4");
    record10.set("question_text", "How is the right-of-use asset measured initially?");
    record10.set("question_type", "multiple_choice");
    record10.set("options", "[\"At the present value of lease payments plus initial direct costs\", \"At the fair value of the asset\", \"At the lessor's cost\", \"At the residual value\"]");
    record10.set("correct_answer", "At the present value of lease payments plus initial direct costs");
    record10.set("explanation", "The right-of-use asset is initially measured at the present value of lease payments plus any initial direct costs incurred by the lessee.");
    record10.set("order", 7);
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("quiz_id", "quiz_4");
    record11.set("question_text", "What is the impact of lease modifications on accounting?");
    record11.set("question_type", "multiple_choice");
    record11.set("options", "[\"The right-of-use asset and lease liability must be remeasured\", \"No accounting adjustment is required\", \"Only the lease liability is adjusted\", \"Only the right-of-use asset is adjusted\"]");
    record11.set("correct_answer", "The right-of-use asset and lease liability must be remeasured");
    record11.set("explanation", "When a lease is modified, both the right-of-use asset and lease liability must be remeasured to reflect the new lease terms.");
    record11.set("order", 8);
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("quiz_id", "quiz_5");
    record12.set("question_text", "What is the weighted average life of a lease portfolio?");
    record12.set("question_type", "multiple_choice");
    record12.set("options", "[\"The average remaining term of all leases weighted by outstanding balance\", \"The average age of all leases\", \"The total portfolio duration\", \"The average lease payment\"]");
    record12.set("correct_answer", "The average remaining term of all leases weighted by outstanding balance");
    record12.set("explanation", "Weighted average life is calculated by weighting each lease's remaining term by its outstanding balance, indicating the portfolio's average duration.");
    record12.set("order", 6);
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("quiz_id", "quiz_5");
    record13.set("question_text", "How should portfolio concentration risk be managed?");
    record13.set("question_type", "multiple_choice");
    record13.set("options", "[\"By limiting exposure to any single lessee or industry\", \"By focusing on high-return assets\", \"By maximizing portfolio size\", \"By reducing the number of leases\"]");
    record13.set("correct_answer", "By limiting exposure to any single lessee or industry");
    record13.set("explanation", "Concentration risk is managed by establishing limits on exposure to individual lessees and industries to prevent excessive risk concentration.");
    record13.set("order", 7);
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("quiz_id", "quiz_5");
    record14.set("question_text", "What is the purpose of stress testing in portfolio management?");
    record14.set("question_type", "multiple_choice");
    record14.set("options", "[\"To evaluate portfolio performance under adverse scenarios\", \"To maximize portfolio returns\", \"To reduce administrative costs\", \"To increase portfolio size\"]");
    record14.set("correct_answer", "To evaluate portfolio performance under adverse scenarios");
    record14.set("explanation", "Stress testing evaluates how the portfolio would perform under adverse economic scenarios, helping identify vulnerabilities and risks.");
    record14.set("order", 8);
  app.save(record14);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})