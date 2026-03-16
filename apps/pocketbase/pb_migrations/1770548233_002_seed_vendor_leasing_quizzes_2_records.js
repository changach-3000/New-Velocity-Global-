/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("vendor_leasing_quizzes");

  const record0 = new Record(collection);
    record0.set("lessonId", "pbc_1014568348_lesson_1");
    record0.set("title", "Introduction to Vendor Leasing Quiz");
    record0.set("questionCount", 10);
    record0.set("questions", "1. What is vendor leasing? 2. Name three types of vendor leasing arrangements. 3. What are the main benefits for vendors? 4. What are the main benefits for customers? 5. How does vendor leasing differ from traditional financing? 6. What is the role of the lessor in vendor leasing? 7. What documentation is required for vendor leasing? 8. How are lease payments typically structured? 9. What are common risks in vendor leasing? 10. What regulatory bodies oversee vendor leasing?");
    record0.set("answers", "1. A financing arrangement where a vendor provides credit to customers. 2. Operating leases, capital leases, and sale-leaseback arrangements. 3. Increased sales, customer loyalty, competitive advantage. 4. Lower upfront costs, flexibility, potential tax benefits. 5. Vendor leasing is supplier-provided; traditional financing is from third-party lenders. 6. The lessor owns the asset and receives lease payments. 7. Lease agreement, equipment schedule, payment terms, insurance requirements. 8. Fixed monthly or quarterly payments over the lease term. 9. Customer default, equipment obsolescence, residual value risk. 10. SEC, FASB, state regulatory agencies, and industry-specific regulators.");
    record0.set("passingScore", 70);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("lessonId", "pbc_1014568348_lesson_2");
    record1.set("title", "Vendor Financing Programs Quiz");
    record1.set("questionCount", 10);
    record1.set("questions", "1. What are the key components of a vendor financing program? 2. How do you assess customer creditworthiness? 3. What documents are essential in vendor financing? 4. What payment terms are typical? 5. How should default risk be managed? 6. What is the importance of credit policies? 7. How do you structure financing terms? 8. What role does collateral play? 9. How should collections be handled? 10. What are best practices for program administration?");
    record1.set("answers", "1. Credit policies, approval process, documentation, payment terms, collections. 2. Credit history, financial statements, payment references, industry analysis. 3. Financing agreement, promissory note, security agreement, UCC filings. 4. Net 30, Net 60, Net 90, or custom terms based on risk. 5. Credit insurance, collateral, personal guarantees, reserve accounts. 6. Credit policies establish standards for approval and risk management. 7. Consider customer risk, market conditions, competitive factors, profitability. 8. Collateral secures the financing and provides recovery in default. 9. Proactive communication, payment plans, escalation procedures, legal action. 10. Regular audits, policy updates, staff training, customer communication.");
    record1.set("passingScore", 70);
  app.save(record1);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})