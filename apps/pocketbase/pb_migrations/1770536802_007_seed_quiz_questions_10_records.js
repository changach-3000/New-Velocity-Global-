/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "QUIZ_4_ID_PLACEHOLDER");
    record0.set("question_text", "What is the tax treatment of operating lease payments?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"Operating lease payments are not deductible\", \"Operating lease payments are fully deductible when paid\", \"Operating lease payments are deductible over the lease term\", \"Operating lease payments are deductible only for tax purposes, not book purposes\"]");
    record0.set("correct_answer", "Operating lease payments are fully deductible when paid");
    record0.set("explanation", "Operating lease payments are fully deductible as a business expense when paid. This is one of the advantages of operating leases from a tax perspective. The annual deduction is $5,000,000 for a $5M lease portfolio. This deduction reduces taxable income and provides a tax shield equal to the payment amount times the tax rate.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "QUIZ_4_ID_PLACEHOLDER");
    record1.set("question_text", "How are finance lease payments treated for tax purposes?");
    record1.set("question_type", "short_answer");
    record1.set("correct_answer", "Finance lease payments are split into two components for tax purposes: (1) Interest portion is deductible as interest expense, (2) Principal portion is not deductible. Additionally, the lessee can claim depreciation deductions on the leased asset. For a $25M finance lease with $6M annual payments, Year 1 might include $1.5M interest (deductible) and $4.5M principal (not deductible), plus $5M depreciation deduction, totaling $6.5M in deductions.");
    record1.set("explanation", "The tax treatment of finance leases is more complex than operating leases because the payments must be split. The interest portion is deductible, but the principal portion is not. However, the depreciation deduction provides additional tax benefits. The total tax deductions for a finance lease are typically higher than for an operating lease in early years due to accelerated depreciation.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "QUIZ_4_ID_PLACEHOLDER");
    record2.set("question_text", "Calculate the annual tax savings from an operating lease with $5M annual payments and a 25% tax rate.");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"$1,000,000\", \"$1,250,000\", \"$1,500,000\", \"$2,000,000\"]");
    record2.set("correct_answer", "$1,250,000");
    record2.set("explanation", "Tax savings = Lease payment \u00d7 Tax rate = $5,000,000 \u00d7 0.25 = $1,250,000. This is the annual tax benefit from the deductibility of lease payments. Over a 5-year lease term, the total tax savings would be $6,250,000. The present value of these tax savings at a 5% discount rate would be approximately $5,400,000.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "QUIZ_4_ID_PLACEHOLDER");
    record3.set("question_text", "What is the difference between book and tax treatment of leases?");
    record3.set("question_type", "short_answer");
    record3.set("correct_answer", "Book treatment (ASC 842): All leases (except short-term) are recognized on the balance sheet with ROU assets and lease liabilities. Tax treatment: Operating leases are deductible as payments are made; finance leases are split into interest (deductible) and principal (not deductible) with depreciation deductions. These differences create deferred tax assets and liabilities that must be recognized in the financial statements.");
    record3.set("explanation", "The differences between book and tax treatment are significant. A lease that is classified as operating for book purposes might be treated as a finance lease for tax purposes, or vice versa. These differences create temporary differences that result in deferred tax assets or liabilities. The company must track both book and tax bases for each lease.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "QUIZ_4_ID_PLACEHOLDER");
    record4.set("question_text", "How are deferred tax assets and liabilities calculated for leases?");
    record4.set("question_type", "short_answer");
    record4.set("correct_answer", "Deferred tax assets/liabilities = (Book basis - Tax basis) \u00d7 Tax rate. For example: Book lease liability $10M, Tax basis $8M, Difference $2M, Deferred tax liability = $2M \u00d7 25% = $500,000. The deferred tax position changes each year as the book and tax bases change at different rates. Operating leases typically create deferred tax assets (book expense > tax deduction in early years), while finance leases create deferred tax liabilities.");
    record4.set("explanation", "Deferred tax accounting for leases is complex because the book and tax bases change differently over time. Operating leases have straight-line book expense but front-loaded tax deductions, creating a deferred tax asset. Finance leases have front-loaded book expense but back-loaded tax deductions (due to declining interest), creating a deferred tax liability. These positions reverse over the lease term.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "QUIZ_4_ID_PLACEHOLDER");
    record5.set("question_text", "What tax optimization strategies can be used for operating leases?");
    record5.set("question_type", "short_answer");
    record5.set("correct_answer", "Tax optimization strategies for operating leases include: (1) Accelerate lease payments if possible to accelerate deductions, (2) Negotiate lease terms to maximize deductible payments, (3) Ensure proper documentation of lease classification, (4) Consider lease vs buy analysis to optimize tax position, (5) Coordinate with other tax items to maximize deductions, (6) Monitor changes in tax law that might affect lease treatment, (7) Consider timing of lease commencement to optimize tax year deductions.");
    record5.set("explanation", "Operating leases provide straightforward tax benefits through the deductibility of lease payments. The optimization strategies focus on maximizing the timing and amount of deductions. Unlike finance leases, there are fewer complex tax planning opportunities with operating leases, but proper documentation and timing can still provide benefits.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "QUIZ_4_ID_PLACEHOLDER");
    record6.set("question_text", "What is the present value of tax savings from a $25M finance lease with 5-year term, $6M annual payments, 25% tax rate, and 5% discount rate?");
    record6.set("question_type", "short_answer");
    record6.set("correct_answer", "Year 1: Interest $1.5M, Depreciation $5M, Total deductions $6.5M, Tax savings $1.625M. Year 2-5: Interest decreases, depreciation constant, total deductions remain approximately $6.5M, tax savings approximately $1.625M/year. PV of tax savings over 5 years at 5% discount rate = approximately $7,000,000. This is higher than the operating lease tax savings ($6.25M) due to the depreciation deduction.");
    record6.set("explanation", "Finance leases provide higher total tax deductions than operating leases in early years due to the depreciation deduction. However, the tax savings are spread over the lease term, and the present value depends on the discount rate. The higher tax savings from finance leases is one factor that might favor buying over leasing from a tax perspective.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "QUIZ_4_ID_PLACEHOLDER");
    record7.set("question_text", "How should uncertain tax positions related to leases be handled?");
    record7.set("question_type", "short_answer");
    record7.set("correct_answer", "Uncertain tax positions should be: (1) Identified and documented, (2) Evaluated for likelihood of acceptance by tax authorities (more likely than not threshold), (3) Measured at the highest amount that is more likely than not to be sustained, (4) Recorded as a liability if the threshold is not met, (5) Disclosed in the financial statements, (6) Monitored for changes in tax law or interpretations. Common uncertain positions include lease classification, discount rate selection, and residual value guarantees.");
    record7.set("explanation", "ASC 740 requires companies to evaluate uncertain tax positions. Lease accounting creates several areas of uncertainty, particularly in lease classification and the determination of discount rates. If a position is not more likely than not to be sustained, a liability must be recorded. This is an important compliance consideration for lease accounting.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "QUIZ_4_ID_PLACEHOLDER");
    record8.set("question_text", "What are the key differences between US tax treatment and IFRS 16 tax treatment of leases?");
    record8.set("question_type", "short_answer");
    record8.set("correct_answer", "US tax treatment: Operating leases are fully deductible; finance leases are split into interest and principal with depreciation deductions. IFRS 16 tax treatment: Similar to US treatment, but some jurisdictions have different rules. Key differences: (1) Some countries don't recognize IFRS 16 for tax purposes, (2) Depreciation methods may differ, (3) Residual value treatment may differ, (4) Transfer pricing rules for intercompany leases differ. Multinational companies must track both US and foreign tax positions.");
    record8.set("explanation", "For multinational companies, the tax treatment of leases can vary significantly by jurisdiction. Some countries have not adopted IFRS 16 for tax purposes and continue to use older lease accounting rules. This creates complexity for companies with leases in multiple countries. Transfer pricing rules also apply to intercompany leases, requiring careful documentation.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "QUIZ_4_ID_PLACEHOLDER");
    record9.set("question_text", "What documentation is required to support lease tax positions?");
    record9.set("question_type", "short_answer");
    record9.set("correct_answer", "Required documentation includes: (1) Lease agreements and amendments, (2) Lease classification analysis and supporting documentation, (3) Discount rate determination and market data, (4) Initial direct costs documentation, (5) Residual value estimates and supporting analysis, (6) Tax deduction calculations and workpapers, (7) Depreciation schedules and methods, (8) Correspondence with lessors and tax advisors, (9) Board approvals and authorization, (10) Audit trail of lease accounting decisions. This documentation is critical for IRS examination defense.");
    record9.set("explanation", "Proper documentation is essential for defending lease tax positions in an IRS examination. The IRS frequently challenges lease classification and discount rate determinations. Companies should maintain comprehensive files that support their positions with market data and professional analysis. Poor documentation can result in unfavorable audit adjustments.");
    record9.set("order", 10);
  app.save(record9);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})