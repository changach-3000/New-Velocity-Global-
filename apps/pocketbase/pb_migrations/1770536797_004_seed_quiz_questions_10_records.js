/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "QUIZ_1_ID_PLACEHOLDER");
    record0.set("question_text", "What is ASC 842 and what is its primary impact on financial reporting?");
    record0.set("question_type", "short_answer");
    record0.set("correct_answer", "ASC 842 is the FASB's new lease accounting standard that requires recognition of right-of-use (ROU) assets and lease liabilities on the balance sheet for all leases (except short-term). Its primary impact is bringing previously off-balance sheet operating leases onto the balance sheet, significantly affecting financial statements, debt ratios, and financial metrics.");
    record0.set("explanation", "ASC 842 fundamentally changed lease accounting by requiring balance sheet recognition. This is a major shift from the previous standard (ASC 840) where operating leases were off-balance sheet. The standard applies to public companies since 2019 and private companies since 2022.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "QUIZ_1_ID_PLACEHOLDER");
    record1.set("question_text", "Calculate the Year 1 lease expense for a $10M lease with a 5-year term, 5% discount rate, and annual payment of $2.5M. What is the breakdown between interest and depreciation?");
    record1.set("question_type", "short_answer");
    record1.set("correct_answer", "Year 1 Lease Expense: $2,166,600. Breakdown: Interest Expense: $541,650 (5% of $10.833M liability), Depreciation: $1,624,950 ($10.833M ROU asset / 5 years). The total expense decreases each year as the interest component declines.");
    record1.set("explanation", "The lease expense calculation requires understanding the components: (1) Interest is calculated on the remaining lease liability balance, (2) Depreciation is the ROU asset divided by the lease term. Year 1 has the highest interest because the liability balance is highest. As payments are made, the liability decreases, reducing interest expense in subsequent years.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "QUIZ_1_ID_PLACEHOLDER");
    record2.set("question_text", "What is the difference between a Right-of-Use (ROU) Asset and a Lease Liability?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"ROU Asset is the obligation to pay; Lease Liability is the right to use\", \"ROU Asset is the right to use the asset; Lease Liability is the obligation to make payments\", \"They are the same thing with different names\", \"ROU Asset is only for finance leases; Lease Liability is only for operating leases\"]");
    record2.set("correct_answer", "ROU Asset is the right to use the asset; Lease Liability is the obligation to make payments");
    record2.set("explanation", "The ROU Asset represents the lessee's right to use the leased asset over the lease term. The Lease Liability represents the lessee's obligation to make lease payments. Both are recognized at the lease commencement date and are typically equal in amount initially, though they change differently over time (asset decreases via depreciation, liability decreases via payments).");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "QUIZ_1_ID_PLACEHOLDER");
    record3.set("question_text", "How does ASC 842 classification affect the pattern of lease expense recognition?");
    record3.set("question_type", "short_answer");
    record3.set("correct_answer", "Operating leases: Straight-line expense recognition (constant amount each year). Finance leases: Front-loaded expense pattern with higher expenses in early years due to higher interest component, decreasing over time as interest declines and principal increases.");
    record3.set("explanation", "This is a critical distinction. Operating leases produce consistent expense each year, making them easier to forecast. Finance leases have declining interest expense and constant depreciation, resulting in higher total expenses early in the lease term. This affects both income statement presentation and cash flow analysis.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "QUIZ_1_ID_PLACEHOLDER");
    record4.set("question_text", "What are the key differences between ASC 842 and the previous ASC 840 standard?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"ASC 842 requires all leases to be on the balance sheet; ASC 840 allowed operating leases to be off-balance sheet\", \"ASC 842 only applies to finance leases; ASC 840 applied to all leases\", \"ASC 842 eliminates the need for lease disclosures\", \"There are no significant differences between the standards\"]");
    record4.set("correct_answer", "ASC 842 requires all leases to be on the balance sheet; ASC 840 allowed operating leases to be off-balance sheet");
    record4.set("explanation", "The most significant change from ASC 840 to ASC 842 is the balance sheet recognition requirement. Under ASC 840, operating leases were off-balance sheet, which understated liabilities and overstated financial ratios. ASC 842 brings all leases (except short-term) onto the balance sheet, providing more transparent financial reporting.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "QUIZ_1_ID_PLACEHOLDER");
    record5.set("question_text", "What factors should be considered when determining the appropriate discount rate for lease calculations?");
    record5.set("question_type", "short_answer");
    record5.set("correct_answer", "The discount rate should reflect the lessee's incremental borrowing rate, which is the rate the lessee would incur to borrow funds for a similar term and with similar security. Factors include: company credit rating, market interest rates, lease term, collateral value, and comparable borrowing rates. Typical range is 4-8%.");
    record5.set("explanation", "The discount rate is critical because it directly affects the ROU asset and lease liability calculations. A higher discount rate results in lower present values, while a lower rate results in higher present values. The rate should reflect the risk of the lease payments, not the lessor's rate or the company's overall cost of capital.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "QUIZ_1_ID_PLACEHOLDER");
    record6.set("question_text", "How does lease accounting impact the debt-to-equity ratio?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"It decreases the ratio by reducing liabilities\", \"It increases the ratio by adding lease liabilities to total debt\", \"It has no impact on the ratio\", \"It only affects the ratio for finance leases\"]");
    record6.set("correct_answer", "It increases the ratio by adding lease liabilities to total debt");
    record6.set("explanation", "Lease liabilities are now included in total debt under ASC 842. This increases the debt-to-equity ratio, typically by 10-15% for companies with significant lease portfolios. This is one of the most significant impacts of ASC 842 on financial metrics and can affect debt covenants and credit ratings.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "QUIZ_1_ID_PLACEHOLDER");
    record7.set("question_text", "What is the formula for calculating the initial ROU Asset?");
    record7.set("question_type", "short_answer");
    record7.set("correct_answer", "ROU Asset = Lease Liability + Initial Direct Costs - Lease Incentives. The Lease Liability is the present value of lease payments discounted at the incremental borrowing rate. Initial direct costs are costs incurred to obtain the lease. Lease incentives are amounts paid by the lessor to the lessee.");
    record7.set("explanation", "The ROU Asset is not simply equal to the Lease Liability. It must be adjusted for initial direct costs (which increase the asset) and lease incentives (which decrease the asset). This is why the ROU Asset and Lease Liability may differ at the commencement date, though they are often similar in amount.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "QUIZ_1_ID_PLACEHOLDER");
    record8.set("question_text", "What are the main challenges in implementing ASC 842 lease accounting?");
    record8.set("question_type", "short_answer");
    record8.set("correct_answer", "Main challenges include: (1) Identifying all leases in the organization, including embedded leases in contracts, (2) Determining appropriate discount rates, (3) Tracking lease modifications and changes, (4) Managing data and documentation, (5) Integrating with accounting systems, (6) Training accounting teams, (7) Addressing system limitations.");
    record8.set("explanation", "ASC 842 implementation is complex because it requires identifying all leases (not just formal lease agreements), establishing consistent policies, and often implementing new systems. Many companies underestimated the effort required, particularly in identifying embedded leases and gathering historical lease data.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "QUIZ_1_ID_PLACEHOLDER");
    record9.set("question_text", "How should a company handle lease modifications under ASC 842?");
    record9.set("question_type", "short_answer");
    record9.set("correct_answer", "Lease modifications require remeasurement of the ROU Asset and Lease Liability. The company must: (1) Identify the modification, (2) Determine if it is a separate lease or modification of existing lease, (3) Recalculate the lease liability using the new terms and current discount rate, (4) Adjust the ROU Asset accordingly, (5) Recognize any gain/loss in the income statement.");
    record9.set("explanation", "Lease modifications are common and can include changes to lease terms, payment amounts, lease term extensions, or early terminations. Each modification requires careful analysis and recalculation. The accounting treatment depends on whether the modification increases or decreases the scope of the lease.");
    record9.set("order", 10);
  app.save(record9);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})