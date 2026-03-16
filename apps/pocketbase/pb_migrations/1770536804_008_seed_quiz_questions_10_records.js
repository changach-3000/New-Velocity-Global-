/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "QUIZ_5_ID_PLACEHOLDER");
    record0.set("question_text", "What are the key components of a lease portfolio management system?");
    record0.set("question_type", "short_answer");
    record0.set("correct_answer", "Key components include: (1) Centralized lease register with all lease information, (2) Lease agreement storage and version control, (3) Payment schedule tracking and reminders, (4) Lease term and option tracking, (5) Compliance monitoring (insurance, maintenance, etc.), (6) Financial data (ROU assets, liabilities, expenses), (7) Reporting and analytics, (8) Integration with accounting systems, (9) Audit trail and documentation, (10) User access controls and security. A portfolio of 1,000+ leases with $500M in total value requires robust systems.");
    record0.set("explanation", "Effective lease portfolio management requires a comprehensive system that tracks all lease information in one place. Manual spreadsheets are inadequate for large portfolios. Dedicated lease accounting software or ERP modules provide the necessary functionality for tracking, calculating, and reporting on leases. The system should integrate with the general ledger for automatic journal entry posting.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "QUIZ_5_ID_PLACEHOLDER");
    record1.set("question_text", "What internal controls should be implemented for lease accounting?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"Only the CFO needs to review leases\", \"Approval processes, segregation of duties, documentation requirements, and periodic reviews\", \"Internal controls are not necessary for leases\", \"Only external auditors need to review leases\"]");
    record1.set("correct_answer", "Approval processes, segregation of duties, documentation requirements, and periodic reviews");
    record1.set("explanation", "Strong internal controls are essential for accurate lease accounting. Key controls include: (1) Approval processes for new leases, (2) Segregation of duties between lease identification, accounting, and payment processing, (3) Documentation requirements for all leases, (4) Periodic reconciliation of lease register to general ledger, (5) Review of lease modifications, (6) Compliance monitoring, (7) Audit trail of all changes. These controls prevent errors and ensure compliance with ASC 842.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "QUIZ_5_ID_PLACEHOLDER");
    record2.set("question_text", "What are the typical costs and timeline for implementing lease accounting software?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"$10,000-$25,000 per year, 1-2 months\", \"$50,000-$200,000 per year, 3-6 months\", \"$500,000-$1,000,000 per year, 12+ months\", \"Free, immediate implementation\"]");
    record2.set("correct_answer", "$50,000-$200,000 per year, 3-6 months");
    record2.set("explanation", "Lease accounting software typically costs $50,000-$200,000 per year depending on the number of leases and features. Implementation typically takes 3-6 months including data migration, system configuration, user training, and testing. The ROI is typically 2-3 years through improved efficiency, reduced errors, and better compliance. Larger companies with complex lease portfolios may require longer implementation timelines and higher costs.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "QUIZ_5_ID_PLACEHOLDER");
    record3.set("question_text", "What are common errors in lease identification and how can they be prevented?");
    record3.set("question_type", "short_answer");
    record3.set("correct_answer", "Common errors include: (1) Missing leases in contracts (embedded leases), (2) Failure to identify lease components, (3) Incorrect lease vs non-lease component split, (4) Misclassifying operating vs finance leases, (5) Incorrect discount rate selection, (6) Inadequate documentation. Prevention strategies: (1) Comprehensive contract review process, (2) Centralized lease register, (3) Clear lease identification policies, (4) Training for procurement and legal teams, (5) Regular audits of lease register, (6) Standardized documentation templates.");
    record3.set("explanation", "Lease identification is one of the most challenging aspects of ASC 842 implementation. Many companies discovered significant numbers of previously unidentified leases during implementation. A systematic approach to identifying all leases, including embedded leases in service contracts, is essential. Error reduction of 85% is achievable through proper controls and processes.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "QUIZ_5_ID_PLACEHOLDER");
    record4.set("question_text", "What are the key features to look for in lease accounting software?");
    record4.set("question_type", "short_answer");
    record4.set("correct_answer", "Key features include: (1) Lease data management and storage, (2) Automated ROU asset and liability calculations, (3) Lease expense calculation and recognition, (4) Financial statement reporting and disclosures, (5) Integration with ERP systems, (6) Audit trail and compliance features, (7) Lease modification tracking, (8) Sensitivity analysis and what-if modeling, (9) Covenant monitoring, (10) User-friendly interface, (11) Mobile access, (12) Scalability for growing lease portfolios.");
    record4.set("explanation", "The right software can significantly improve lease accounting efficiency and accuracy. Key considerations when selecting software: Does it integrate with your ERP? Can it handle your lease volume and complexity? Does it provide the reports you need? Is it user-friendly? What is the total cost of ownership? Many companies use dedicated lease accounting software that integrates with their ERP rather than trying to manage leases entirely within the ERP.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "QUIZ_5_ID_PLACEHOLDER");
    record5.set("question_text", "How should discount rates be determined and updated in a lease accounting system?");
    record5.set("question_type", "short_answer");
    record5.set("correct_answer", "Discount rate determination: (1) Establish a policy for determining the incremental borrowing rate, (2) Use market data (company's borrowing rates, credit spreads, risk-free rates), (3) Consider lease term and collateral, (4) Document the methodology, (5) Update rates quarterly or when market conditions change significantly. For a company with 1,000+ leases, a centralized discount rate policy ensures consistency. Rates should be reviewed quarterly and updated if market conditions change by more than 0.5-1.0%.");
    record5.set("explanation", "Discount rate selection is one of the most sensitive variables in lease accounting. A consistent, well-documented policy is essential. Many companies use a tiered approach with different rates for different lease terms and risk profiles. The discount rate should be updated periodically to reflect current market conditions, but frequent changes can create volatility in the financial statements.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "QUIZ_5_ID_PLACEHOLDER");
    record6.set("question_text", "What are the common pitfalls in lease accounting implementation and how can they be avoided?");
    record6.set("question_type", "short_answer");
    record6.set("correct_answer", "Common pitfalls: (1) Underestimating the scope and complexity of implementation, (2) Inadequate data gathering and cleanup, (3) Insufficient training for accounting teams, (4) Poor system selection or implementation, (5) Inadequate documentation and controls, (6) Failure to identify all leases, (7) Inconsistent discount rate application, (8) Inadequate testing before go-live. Avoidance strategies: (1) Allocate sufficient resources and time, (2) Establish clear governance and accountability, (3) Implement strong project management, (4) Conduct comprehensive training, (5) Perform thorough testing, (6) Establish strong internal controls, (7) Maintain detailed documentation.");
    record6.set("explanation", "Many companies underestimated the effort required for ASC 842 implementation. The most common issues were inadequate data gathering, insufficient training, and poor system selection. Companies that succeeded had strong project management, adequate resources, and a phased implementation approach. Learning from others' experiences can help avoid costly mistakes.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "QUIZ_5_ID_PLACEHOLDER");
    record7.set("question_text", "How should lease portfolio metrics be tracked and reported?");
    record7.set("question_type", "short_answer");
    record7.set("correct_answer", "Key metrics to track: (1) Total lease portfolio value ($500M), (2) Number of leases (1,000+), (3) Average lease term (4.5 years), (4) Average annual payment ($500K), (5) Lease expense as % of revenue (8%), (6) ROU assets and liabilities by type, (7) Lease payment obligations by year, (8) Compliance metrics (% of leases with proper documentation), (9) System performance metrics. Reporting should include: (1) Monthly financial reporting, (2) Quarterly covenant monitoring, (3) Annual portfolio analysis, (4) Trend analysis and forecasting.");
    record7.set("explanation", "Comprehensive metrics and reporting provide visibility into the lease portfolio and support decision-making. Key metrics should be tracked in the lease accounting system and reported to management regularly. Trend analysis helps identify changes in the portfolio and potential issues. Covenant monitoring is particularly important for companies with debt covenants affected by lease accounting.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "QUIZ_5_ID_PLACEHOLDER");
    record8.set("question_text", "What are the emerging trends in lease accounting and technology?");
    record8.set("question_type", "short_answer");
    record8.set("correct_answer", "Emerging trends include: (1) Artificial intelligence and machine learning for lease identification and classification, (2) Blockchain for lease contract management and verification, (3) Cloud-based solutions for improved accessibility and scalability, (4) Mobile applications for lease management on-the-go, (5) Real-time reporting and dashboards, (6) Integration with ESG reporting, (7) Automation of lease modifications and renewals, (8) Predictive analytics for lease portfolio optimization, (9) Convergence of IFRS 16 and ASC 842, (10) Sustainability considerations in lease decisions.");
    record8.set("explanation", "Technology is rapidly evolving to address lease accounting challenges. AI and machine learning can improve lease identification accuracy and reduce manual effort. Cloud-based solutions provide better accessibility and scalability. Real-time reporting enables better decision-making. Companies should stay current with technology trends to maintain competitive advantage and operational efficiency.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "QUIZ_5_ID_PLACEHOLDER");
    record9.set("question_text", "What is the expected ROI from implementing a lease accounting system?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "[\"Less than 1 year\", \"2-3 years\", \"5+ years\", \"No ROI expected\"]");
    record9.set("correct_answer", "2-3 years");
    record9.set("explanation", "While the upfront cost of implementing lease accounting software is significant, the ROI is typically achieved within 2-3 years through improved efficiency and reduced errors. The benefits extend beyond financial savings to include better compliance, improved audit efficiency, and better decision-making. Companies should view this as a strategic investment in their accounting infrastructure.");
    record9.set("order", 10);
  app.save(record9);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})