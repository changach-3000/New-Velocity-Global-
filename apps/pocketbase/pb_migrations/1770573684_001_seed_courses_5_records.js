/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Advanced Lease Structuring");
    record0.set("description", "Master complex lease structures and deal mechanics. Learn how to analyze, structure, and negotiate sophisticated lease arrangements that optimize financial outcomes for all parties. This course covers advanced structuring techniques, financial modeling, and negotiation strategies for equipment leasing professionals.");
    record0.set("instructor_name", "Senior Lease Structuring Expert");
    record0.set("instructor_bio", "Experienced lease structuring professional with 15+ years in complex deal structuring and negotiation");
    record0.set("price", 499);
    record0.set("duration_hours", 8);
    record0.set("learning_outcomes", "Understand advanced lease structures; Master financial modeling for leases; Analyze complex arrangements; Develop negotiation strategies");
    record0.set("role", "Financier");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("title", "Financial Analysis & Lease Valuation");
    record1.set("description", "Develop expertise in lease valuation methodologies and financial analysis. Learn to evaluate lease economics, perform sensitivity analysis, and benchmark against market standards. This course provides comprehensive training in valuation techniques essential for lease financing decisions.");
    record1.set("instructor_name", "Financial Analysis Specialist");
    record1.set("instructor_bio", "Valuation expert with 12+ years of experience in lease financial analysis and economic modeling");
    record1.set("price", 449);
    record1.set("duration_hours", 7);
    record1.set("learning_outcomes", "Master lease valuation fundamentals; Apply advanced valuation methods; Perform economic analysis; Conduct comparative benchmarking");
    record1.set("role", "Financier");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("title", "Risk Assessment in Equipment Leasing");
    record2.set("description", "Comprehensive risk management training for lease portfolios. Learn to identify, classify, and mitigate risks including credit risk, residual value risk, and operational risk. This course equips professionals with tools and frameworks for effective risk assessment and management.");
    record2.set("instructor_name", "Risk Management Professional");
    record2.set("instructor_bio", "Risk management specialist with 14+ years in lease portfolio risk assessment and mitigation");
    record2.set("price", 399);
    record2.set("duration_hours", 6);
    record2.set("learning_outcomes", "Identify and classify lease risks; Evaluate credit and tenant quality; Manage residual value risk; Implement mitigation strategies");
    record2.set("role", "Financier");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("title", "Lease Accounting Standards IFRS 16 & ASC 842");
    record3.set("description", "Master the latest lease accounting standards. Understand IFRS 16 and ASC 842 requirements, implementation strategies, and financial reporting implications. This course provides practical guidance on accounting treatment, journal entries, and financial statement presentation.");
    record3.set("instructor_name", "Accounting Standards Expert");
    record3.set("instructor_bio", "Accounting professional with 13+ years of expertise in lease accounting standards and implementation");
    record3.set("price", 449);
    record3.set("duration_hours", 7);
    record3.set("learning_outcomes", "Understand IFRS 16 and ASC 842 requirements; Apply accounting treatments; Prepare journal entries; Analyze financial statement impact");
    record3.set("role", "Financier");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("title", "Portfolio Management & Optimization");
    record4.set("description", "Strategic portfolio management for lease portfolios. Learn to analyze portfolio performance, optimize asset allocation, and implement monitoring systems. This course covers key performance indicators, optimization strategies, and reporting frameworks for portfolio success.");
    record4.set("instructor_name", "Portfolio Management Expert");
    record4.set("instructor_bio", "Portfolio management specialist with 11+ years of experience in lease portfolio optimization and performance analysis");
    record4.set("price", 399);
    record4.set("duration_hours", 6);
    record4.set("learning_outcomes", "Analyze portfolio fundamentals; Calculate performance metrics; Optimize portfolio strategies; Implement monitoring systems");
    record4.set("role", "Financier");
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})