/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("reading_lists");

  const record0 = new Record(collection);
    record0.set("title", "Lease Accounting Fundamentals for Finance Professionals");
    record0.set("lesson_id", "lesson_1_id");
    record0.set("part_number", 1);
    record0.set("core_readings", "FASB ASC 842 Standards, IFRS 16 Standards, AICPA Lease Accounting Guidance");
    record0.set("advanced_readings", "Deloitte Lease Accounting Implementation Guide, PwC Lease Accounting Manual, EY IFRS 16 Handbook, KPMG ASC 842 Guide");
    record0.set("industry_resources", "Journal of Accountancy, Financial Executive Magazine, CPA Journal, Accounting Today");
    record0.set("online_resources", "FASB Resource Center, SEC EDGAR Database, AICPA Website, Big Four Firm Resources");
    record0.set("is_downloadable", true);
    record0.set("content_summary", "Complete resource guide including FASB ASC 842 and IFRS 16 standards, Big Four firm guides (Deloitte, PwC, EY, KPMG), journal articles from Journal of Accountancy and Financial Executive Magazine, professional organizations (AICPA, FEI, IMA, NACPA), online resources from FASB, SEC, and software vendors, plus webinar training opportunities");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("title", "Financial Analysis and Decision-Making");
    record1.set("lesson_id", "lesson_2_id");
    record1.set("part_number", 2);
    record1.set("core_readings", "FASB Financial Analysis Guidance, CFA Institute Resources, Lease vs Buy Analysis Framework");
    record1.set("advanced_readings", "Aswath Damodaran - Corporate Finance Textbook, Palepu/Healy/Peek - Business Analysis and Valuation, NPV and IRR Analysis Guides");
    record1.set("industry_resources", "Journal of Finance, Financial Management Journal, Financial Analysts Journal, CFA Magazine");
    record1.set("online_resources", "CFA Institute Website, FEI Resources, Financial Analysis Tools and Calculators, FASB Guidance Documents");
    record1.set("is_downloadable", true);
    record1.set("content_summary", "Complete resource guide including FASB financial analysis guidance, CFA Institute resources, textbooks by Damodaran and Palepu/Healy/Peek, journal articles from Journal of Finance and Financial Management Journal, industry publications, professional organizations (CFA, FEI, AFA, IMA), online tools and calculators, plus webinar training");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("title", "Financial Statement Management and Reporting");
    record2.set("lesson_id", "lesson_3_id");
    record2.set("part_number", 3);
    record2.set("core_readings", "ASC 842 Disclosure Requirements, SEC Guidance, IFRS 16 Standards, Financial Statement Analysis Framework");
    record2.set("advanced_readings", "Financial Statement Analysis Textbooks, SEC EDGAR Database, Big Four Implementation Guides, Disclosure Templates and Examples");
    record2.set("industry_resources", "Accounting Review, Financial Analysts Journal, CPA Journal, SEC Publications");
    record2.set("online_resources", "SEC EDGAR Database, FASB Resource Center, Big Four Implementation Resources, Disclosure Checklist Tools");
    record2.set("is_downloadable", true);
    record2.set("content_summary", "Complete resource guide including ASC 842 disclosure requirements, SEC guidance, IFRS 16 standards, textbooks on financial statement analysis and reporting, journal articles from Accounting Review and Financial Analysts Journal, SEC EDGAR database access, Big Four implementation guides, disclosure templates, and professional webinar training");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("title", "Tax Planning and Optimization");
    record3.set("lesson_id", "lesson_4_id");
    record3.set("part_number", 4);
    record3.set("core_readings", "IRC Section 162 Guidance, IRS Publications, AICPA Tax Standards, Tax Lease Classification Framework");
    record3.set("advanced_readings", "Federal Income Taxation Textbooks, Tax Planning Guides, Deferred Tax Analysis Resources, International Tax Considerations");
    record3.set("industry_resources", "Tax Advisor Magazine, Journal of Taxation, CPA Journal, AICPA Tax Section Publications");
    record3.set("online_resources", "IRS Website, CCH Tax Research Database, Thomson Reuters Tax Resources, AICPA Tax Resources");
    record3.set("is_downloadable", true);
    record3.set("content_summary", "Complete resource guide including IRS guidance on lease deductions and depreciation, AICPA tax standards, textbooks on federal income taxation and tax planning, journal articles from Tax Advisor and Journal of Taxation, professional organizations (AICPA Tax Section, ABA Tax Section, TEI, NATP), IRS website resources, tax research databases (CCH, Thomson Reuters), and professional webinar training");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("title", "Practical Implementation and Best Practices");
    record4.set("lesson_id", "lesson_5_id");
    record4.set("part_number", 5);
    record4.set("core_readings", "FASB Implementation Guidance, AICPA Implementation Resources, ASC 842 Implementation Roadmap");
    record4.set("advanced_readings", "Big Four Implementation Guides, Lease Accounting Software Vendor Resources, Implementation Case Studies, Change Management Frameworks");
    record4.set("industry_resources", "Journal of Accountancy, Financial Executive Magazine, Accounting Today, Implementation Best Practices Publications");
    record4.set("online_resources", "FASB Implementation Resource Center, Big Four Implementation Resources, Lease Accounting Software Vendor Websites, Professional Webinar Archives");
    record4.set("is_downloadable", true);
    record4.set("content_summary", "Complete resource guide including FASB implementation guidance, AICPA implementation resources, Big Four implementation guides and roadmaps, journal articles from Journal of Accountancy and Financial Executive Magazine, lease accounting software vendor resources, implementation case studies, change management frameworks, FASB implementation resource center, and professional webinar training");
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})