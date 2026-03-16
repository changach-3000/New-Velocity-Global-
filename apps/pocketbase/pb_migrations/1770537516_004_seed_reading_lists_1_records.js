/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("reading_lists");

  const record0 = new Record(collection);
    record0.set("title", "Practical Leasing for Finance Professionals - Master Reading List");
    record0.set("core_readings", "FASB ASC 842, IFRS 16, SEC Guidance, AICPA Standards, IRC Section 162, Financial Analysis Framework, Implementation Guidance");
    record0.set("advanced_readings", "Deloitte Lease Accounting Guide, PwC Lease Accounting Manual, EY IFRS 16 Handbook, KPMG ASC 842 Guide, Damodaran Corporate Finance, Palepu/Healy/Peek Business Analysis and Valuation, Federal Income Taxation Textbooks");
    record0.set("industry_resources", "Journal of Accountancy, Financial Executive Magazine, CPA Journal, Tax Advisor, Accounting Today, Journal of Finance, Financial Management Journal, Accounting Review, Financial Analysts Journal");
    record0.set("online_resources", "FASB Resource Center, SEC EDGAR, IRS Website, AICPA Website, CFA Institute, FEI Resources, Big Four Firm Resources, Lease Accounting Software Vendors, Tax Research Databases");
    record0.set("is_downloadable", true);
    record0.set("content_summary", "Master resource guide covering: Core standards (ASC 842, IFRS 16, SEC guidance, AICPA standards), Comprehensive textbooks (Deloitte, PwC, Palepu/Healy/Peek, Damodaran, BNA), Key professional organizations (AICPA, FEI, CFA, IMA, TEI), Leading publications (Journal of Accountancy, Financial Executive Magazine, CPA Journal, Tax Advisor, Accounting Today), Online resources (FASB Resource Center, SEC EDGAR, IRS Website, Big Four resources), and recommended 6-step study sequence starting with standards and progressing through textbooks, articles, online resources, webinars, and professional organization membership");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})