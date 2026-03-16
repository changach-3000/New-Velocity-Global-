/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const records = app.findRecordsByFilter("courses", "title='Advanced Leasing Strategies'");
  for (const record of records) {
    record.set("estimated_hours", 12);
    record.set("curriculum", "PART 1: Fundamentals - Introduction to Leasing, Lease Accounting Standards, Financial Analysis Basics\nPART 2: Advanced Structures - Synthetic Leases, Sale-Leaseback Transactions, Cross-Border Leasing\nPART 3: Risk Management - Credit Risk Assessment, Residual Value Management, Regulatory Compliance\nPART 4: Next-Gen Strategies - ESG-Linked Leasing, Usage-Based & As-a-Service Models, Digital Asset Tracking & IoT");
    record.set("description", "A comprehensive 12-hour advanced course covering the complete spectrum of modern leasing strategies. From fundamental lease accounting and financial analysis through advanced structures like synthetic leases and sale-leasebacks, to cutting-edge next-generation approaches including ESG-linked leasing, usage-based models, and IoT-enabled asset tracking. Master risk management, regulatory compliance, and emerging technologies that are reshaping the leasing industry.");
    app.save(record);
  }
}, (app) => {
  // Rollback: original values not stored, manual restore needed
})