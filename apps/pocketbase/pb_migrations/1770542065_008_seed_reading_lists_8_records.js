/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("reading_lists");

  const record0 = new Record(collection);
    record0.set("title", "Lesson 1: Fundamentals Reading List");
    record0.set("lesson_id", "lesson-1-fundamentals");
    record0.set("part_number", 1);
    record0.set("core_readings", "1. IRS Publication 946 - How to Depreciate Property\n2. IRC Section 162 - Trade or Business Expenses\n3. IRC Section 167 - Depreciation\n4. Treasury Regulation 1.162-3 - Lease vs. Purchase");
    record0.set("advanced_readings", "1. IRS Revenue Ruling 2001-29 - Lease Classification\n2. IRS Revenue Procedure 2001-36 - Safe Harbor Leases\n3. Tax Court Case: Gilman v. Commissioner");
    record0.set("industry_resources", "1. Equipment Leasing and Finance Association (ELFA) Guidelines\n2. American Accounting Association - Lease Accounting Standards\n3. Financial Accounting Standards Board (FASB) ASC 842");
    record0.set("online_resources", "1. IRS.gov - Lease Information\n2. FASB.org - Lease Accounting Standards\n3. ELFA.org - Industry Resources");
    record0.set("is_downloadable", true);
    record0.set("content_summary", "Essential readings on lease fundamentals, IRS requirements, and accounting standards");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("title", "Lesson 2: Depreciation Reading List");
    record1.set("lesson_id", "lesson-2-depreciation");
    record1.set("part_number", 2);
    record1.set("core_readings", "1. IRS Publication 946 - How to Depreciate Property\n2. IRC Section 168 - Accelerated Cost Recovery System\n3. IRC Section 179 - Election to Expense\n4. Treasury Regulation 1.168-1 - MACRS Rules");
    record1.set("advanced_readings", "1. IRS Revenue Procedure 2023-23 - Bonus Depreciation\n2. IRS Notice 2023-1 - Depreciation Guidance\n3. Tax Court Case: Tandy Electronics v. Commissioner");
    record1.set("industry_resources", "1. American Institute of CPAs (AICPA) - Depreciation Guidance\n2. National Association of Certified Public Accountants (NACPA)\n3. Cost Segregation Institute - Best Practices");
    record1.set("online_resources", "1. IRS.gov - Depreciation Information\n2. AICPA.org - Technical Resources\n3. Cost Segregation Institute - Online Resources");
    record1.set("is_downloadable", true);
    record1.set("content_summary", "Comprehensive readings on depreciation methods, MACRS, bonus depreciation, and Section 179");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("title", "Lesson 3: Interest Deduction Reading List");
    record2.set("lesson_id", "lesson-3-interest");
    record2.set("part_number", 3);
    record2.set("core_readings", "1. IRC Section 163 - Interest Deduction\n2. IRC Section 163(j) - Business Interest Limitation\n3. Treasury Regulation 1.163-1 - Interest Deductibility\n4. IRS Publication 535 - Business Expenses");
    record2.set("advanced_readings", "1. IRS Notice 2018-28 - Section 163(j) Guidance\n2. IRS Revenue Ruling 2020-1 - Interest Limitation\n3. Tax Court Case: Indopco v. Commissioner");
    record2.set("industry_resources", "1. AICPA - Interest Deduction Guidance\n2. Tax Foundation - Interest Limitation Analysis\n3. American Bar Association - Tax Section Resources");
    record2.set("online_resources", "1. IRS.gov - Interest Deduction Information\n2. AICPA.org - Technical Resources\n3. Tax Foundation - Research and Analysis");
    record2.set("is_downloadable", true);
    record2.set("content_summary", "Essential readings on interest deductibility, Section 163(j) limitations, and optimization strategies");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("title", "Lesson 4: Lease Classification Reading List");
    record3.set("lesson_id", "lesson-4-classification");
    record3.set("part_number", 4);
    record3.set("core_readings", "1. FASB ASC 842 - Leases\n2. IRC Section 162 - Lease Classification\n3. Treasury Regulation 1.162-3 - Lease vs. Purchase\n4. IRS Publication 946 - Lease Treatment");
    record3.set("advanced_readings", "1. IRS Revenue Ruling 2001-29 - Lease Classification\n2. IRS Revenue Procedure 2001-36 - Safe Harbor Leases\n3. Tax Court Case: Gilman v. Commissioner");
    record3.set("industry_resources", "1. FASB - Lease Accounting Standards\n2. AICPA - Lease Classification Guidance\n3. Equipment Leasing and Finance Association - Standards");
    record3.set("online_resources", "1. FASB.org - ASC 842 Resources\n2. IRS.gov - Lease Classification Information\n3. AICPA.org - Technical Resources");
    record3.set("is_downloadable", true);
    record3.set("content_summary", "Comprehensive readings on ASC 842 accounting, tax classification, and book-tax reconciliation");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("title", "Lesson 5: Sale-Leaseback Reading List");
    record4.set("lesson_id", "lesson-5-sale-leaseback");
    record4.set("part_number", 5);
    record4.set("core_readings", "1. FASB ASC 842 - Sale-Leaseback Transactions\n2. IRC Section 1031 - Like-Kind Exchanges\n3. Treasury Regulation 1.1031-1 - Exchange Requirements\n4. IRS Publication 544 - Sales of Assets");
    record4.set("advanced_readings", "1. IRS Revenue Ruling 2001-29 - Sale-Leaseback Treatment\n2. IRS Notice 2020-1 - Sale-Leaseback Guidance\n3. Tax Court Case: Starker v. United States");
    record4.set("industry_resources", "1. FASB - Sale-Leaseback Standards\n2. AICPA - Sale-Leaseback Guidance\n3. Equipment Leasing and Finance Association - Resources");
    record4.set("online_resources", "1. FASB.org - Sale-Leaseback Resources\n2. IRS.gov - Sale-Leaseback Information\n3. AICPA.org - Technical Resources");
    record4.set("is_downloadable", true);
    record4.set("content_summary", "Essential readings on sale-leaseback transactions, gain recognition, and tax planning");
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("title", "Lesson 6: Pass-Through Entities Reading List");
    record5.set("lesson_id", "lesson-6-pass-through");
    record5.set("part_number", 6);
    record5.set("core_readings", "1. IRC Section 199A - Qualified Business Income Deduction\n2. IRC Section 1366 - Pass-Through Taxation\n3. Treasury Regulation 1.199A-1 - QBI Deduction Rules\n4. IRS Publication 589 - S-Corporation Information");
    record5.set("advanced_readings", "1. IRS Notice 2018-2 - QBI Deduction Guidance\n2. IRS Revenue Ruling 2020-1 - Pass-Through Treatment\n3. Tax Court Case: Renkemeyer v. Commissioner");
    record5.set("industry_resources", "1. AICPA - Pass-Through Entity Guidance\n2. National Association of Certified Public Accountants\n3. S-Corporation Association - Resources");
    record5.set("online_resources", "1. IRS.gov - Pass-Through Entity Information\n2. AICPA.org - Technical Resources\n3. S-Corporation Association - Online Resources");
    record5.set("is_downloadable", true);
    record5.set("content_summary", "Comprehensive readings on pass-through taxation, QBI deduction, and entity structure planning");
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("title", "Lesson 7: Compliance Reading List");
    record6.set("lesson_id", "lesson-7-compliance");
    record6.set("part_number", 7);
    record6.set("core_readings", "1. IRS Publication 556 - Examination of Returns\n2. IRS Publication 17 - Your Federal Income Tax\n3. Treasury Regulation 1.6001-1 - Records Requirement\n4. IRS Form 4562 - Depreciation and Amortization");
    record6.set("advanced_readings", "1. IRS Manual - Examination Procedures\n2. IRS Revenue Ruling 2001-29 - Compliance Requirements\n3. Tax Court Case: Welch v. Helvering");
    record6.set("industry_resources", "1. AICPA - Compliance and Documentation Standards\n2. American Bar Association - Tax Section Resources\n3. National Association of Certified Public Accountants");
    record6.set("online_resources", "1. IRS.gov - Compliance Information\n2. AICPA.org - Technical Resources\n3. American Bar Association - Tax Resources");
    record6.set("is_downloadable", true);
    record6.set("content_summary", "Essential readings on IRS requirements, documentation standards, and audit defense strategies");
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("title", "Lesson 8: Advanced Strategies Reading List");
    record7.set("lesson_id", "lesson-8-advanced");
    record7.set("part_number", 8);
    record7.set("core_readings", "1. IRC Section 956 - Controlled Foreign Corporations\n2. IRC Section 1042 - Sales of Qualified Small Business Stock\n3. Treasury Regulation 1.956-1 - CFC Rules\n4. IRS Publication 597 - Information on the United States-Canada Income Tax Treaty");
    record7.set("advanced_readings", "1. IRS Notice 2020-1 - Advanced Lease Structures\n2. IRS Revenue Ruling 2001-29 - Complex Transactions\n3. Tax Court Case: Compaq Computer v. Commissioner");
    record7.set("industry_resources", "1. AICPA - Advanced Tax Planning Guidance\n2. American Bar Association - International Tax Resources\n3. Equipment Leasing and Finance Association - Advanced Resources");
    record7.set("online_resources", "1. IRS.gov - Advanced Tax Information\n2. AICPA.org - Technical Resources\n3. American Bar Association - International Tax Resources");
    record7.set("is_downloadable", true);
    record7.set("content_summary", "Comprehensive readings on complex lease structures, multi-jurisdictional planning, and emerging issues");
  app.save(record7);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})