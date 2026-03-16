/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "QUIZ_3_ID_PLACEHOLDER");
    record0.set("question_text", "How should ROU assets be presented on the balance sheet under ASC 842?");
    record0.set("question_type", "short_answer");
    record0.set("correct_answer", "ROU assets should be presented separately on the balance sheet, typically classified as either operating lease assets or finance lease assets. They are presented as non-current assets (unless short-term). The presentation should clearly distinguish between lease types. Some companies combine them with other assets but must disclose the ROU asset amount. The ROU asset is depreciated over the lease term.");
    record0.set("explanation", "Clear presentation of ROU assets is important for financial statement users to understand the company's lease obligations. The classification (operating vs finance) affects how the asset is presented and how the related liability is classified. Depreciation of the ROU asset is a key component of lease expense.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "QUIZ_3_ID_PLACEHOLDER");
    record1.set("question_text", "What is the difference between the current and non-current portions of lease liabilities?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"Current portion is for operating leases; non-current is for finance leases\", \"Current portion is due within 12 months; non-current portion is due after 12 months\", \"They are the same thing\", \"Current portion is the interest; non-current is the principal\"]");
    record1.set("correct_answer", "Current portion is due within 12 months; non-current portion is due after 12 months");
    record1.set("explanation", "The lease liability must be split between current (due within 12 months) and non-current (due after 12 months) portions. This classification affects the balance sheet presentation and working capital ratios. The current portion includes both principal and interest components of lease payments due within the next year. This split is important for covenant calculations and liquidity analysis.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "QUIZ_3_ID_PLACEHOLDER");
    record2.set("question_text", "Calculate the Year 1 lease expense for an operating lease with a $10M ROU asset, 5-year term, and $2.5M annual payment.");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"$2,000,000\", \"$2,500,000\", \"$2,166,600\", \"$2,250,000\"]");
    record2.set("correct_answer", "$2,500,000");
    record2.set("explanation", "For operating leases, the lease expense is typically the straight-line amount, which equals the annual lease payment. In this case, $2.5M per year. This is different from finance leases, which have front-loaded expenses due to the interest component. The straight-line approach makes operating lease expenses easier to forecast and more consistent year-to-year.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "QUIZ_3_ID_PLACEHOLDER");
    record3.set("question_text", "How does lease accounting affect the cash flow statement?");
    record3.set("question_type", "short_answer");
    record3.set("correct_answer", "Under ASC 842, lease payments are presented as: (1) Operating activities: Interest portion of lease payments and the principal portion (for operating leases, the entire payment is operating), (2) Financing activities: Principal portion of lease payments (for finance leases). This differs from the income statement where lease expense is recognized. The reconciliation between lease expense and cash payments is important for understanding cash flow impact.");
    record3.set("explanation", "The cash flow statement presentation is complex because lease payments are split between operating and financing activities. For operating leases, the entire payment is operating cash flow. For finance leases, the interest is operating and principal is financing. This reclassification can significantly impact operating cash flow metrics used by investors and analysts.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "QUIZ_3_ID_PLACEHOLDER");
    record4.set("question_text", "What is the impact of lease accounting on the debt-to-equity ratio?");
    record4.set("question_type", "short_answer");
    record4.set("correct_answer", "Lease liabilities are now included in total debt, increasing the debt-to-equity ratio by approximately 12% for companies with significant lease portfolios. The formula becomes: Debt-to-Equity = (Total Debt + Lease Liabilities) / Total Equity. This increase can affect debt covenants, credit ratings, and investor perception. Companies with large lease portfolios (retail, airlines, real estate) experience the most significant impact.");
    record4.set("explanation", "The inclusion of lease liabilities in debt calculations is one of the most significant impacts of ASC 842. A 12% increase in debt-to-equity can trigger covenant violations or credit rating downgrades. This is why many companies were concerned about ASC 842 implementation. Lenders and rating agencies have adjusted their covenant calculations to account for this change.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "QUIZ_3_ID_PLACEHOLDER");
    record5.set("question_text", "How should lease expense be presented in the income statement?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "[\"As a single line item called 'Lease Expense'\", \"Operating lease expense in operating income; finance lease components (interest and depreciation) in their respective sections\", \"All lease expense below operating income\", \"Lease expense is not presented in the income statement\"]");
    record5.set("correct_answer", "Operating lease expense in operating income; finance lease components (interest and depreciation) in their respective sections");
    record5.set("explanation", "The presentation of lease expense depends on the lease classification. Operating lease expense is typically presented as a single line item in operating income. Finance lease expense is split: depreciation is in operating income, interest is in non-operating income. This split presentation can make finance leases appear more expensive than operating leases, even if the total cost is similar.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "QUIZ_3_ID_PLACEHOLDER");
    record6.set("question_text", "What is the impact of lease accounting on the interest coverage ratio?");
    record6.set("question_type", "short_answer");
    record6.set("correct_answer", "Lease accounting decreases the interest coverage ratio by approximately 8% because: (1) Finance leases add interest expense to the denominator, (2) Operating leases reduce EBITDA (the numerator) because lease expense is deducted. The formula becomes: Interest Coverage = EBITDA / (Interest Expense + Finance Lease Interest). This decrease can affect covenant compliance and credit ratings.");
    record6.set("explanation", "Interest coverage is a key metric for lenders and investors. The addition of lease interest expense reduces this ratio, potentially indicating higher financial risk. Some analysts adjust EBITDA by adding back lease expense to calculate adjusted interest coverage, which provides a more comparable metric across companies with different lease structures.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "QUIZ_3_ID_PLACEHOLDER");
    record7.set("question_text", "How does lease accounting affect Return on Assets (ROA)?");
    record7.set("question_type", "short_answer");
    record7.set("correct_answer", "Lease accounting decreases ROA because: (1) Total assets increase due to ROU assets, (2) Net income decreases due to lease expense. ROA = Net Income / Total Assets. The impact is more significant for asset-heavy companies with large lease portfolios. For example, a retail company with $500M in ROU assets and $45M annual lease expense would see ROA decrease by 1-2 percentage points.");
    record7.set("explanation", "ROA is a measure of how efficiently a company uses its assets to generate profit. The addition of ROU assets increases the denominator without a corresponding increase in net income, reducing the ratio. This makes companies with significant leases appear less efficient, even if their operational performance hasn't changed. Adjusted ROA (excluding lease impact) is often used for comparison.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "QUIZ_3_ID_PLACEHOLDER");
    record8.set("question_text", "What disclosures are required for lease accounting under ASC 842?");
    record8.set("question_type", "short_answer");
    record8.set("correct_answer", "Required disclosures include: (1) Lease liability maturity schedule showing future payments by year, (2) ROU asset depreciation and accumulated depreciation, (3) Lease expense components (operating lease expense, finance lease interest and depreciation), (4) Significant accounting policies and judgments, (5) Lease modifications and changes, (6) Contingent rentals and variable lease payments, (7) Subleases and sale-leaseback transactions, (8) Segment-specific lease information if applicable.");
    record8.set("explanation", "Comprehensive disclosures are essential for financial statement users to understand the company's lease obligations and accounting policies. The maturity schedule is particularly important because it shows the company's future cash obligations. These disclosures are typically presented in the notes to the financial statements.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "QUIZ_3_ID_PLACEHOLDER");
    record9.set("question_text", "How should EBITDA be adjusted for lease accounting purposes?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "[\"EBITDA should not be adjusted for leases\", \"Adjusted EBITDA = EBITDA + Operating Lease Expense\", \"Adjusted EBITDA = EBITDA + Operating Lease Expense + Finance Lease Interest\", \"Adjusted EBITDA = EBITDA - Lease Expense\"]");
    record9.set("correct_answer", "Adjusted EBITDA = EBITDA + Operating Lease Expense + Finance Lease Interest");
    record9.set("explanation", "Adjusted EBITDA adds back lease-related expenses to provide a comparable metric across companies with different lease structures. Operating lease expense is added back because it's a financing decision (lease vs buy). Finance lease interest is added back to normalize the financing component. This adjusted metric is useful for valuation and covenant calculations, as it removes the impact of lease accounting differences.");
    record9.set("order", 10);
  app.save(record9);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})