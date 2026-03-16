/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("title", "Strategic Lease Planning Framework");
    record0.set("course_id", "pbc_9676646180");
    record0.set("order", 1);
    record0.set("duration", 60);
    record0.set("content_type", "text");
    record0.set("description", "Strategic planning fundamentals, lease planning process, strategic objectives, stakeholder analysis, decision framework, and case study");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("title", "Financial Analysis and Lease Evaluation");
    record1.set("course_id", "pbc_9676646180");
    record1.set("order", 2);
    record1.set("duration", 60);
    record1.set("content_type", "text");
    record1.set("description", "Lease evaluation fundamentals, NPV analysis, IRR analysis, cash flow analysis, sensitivity analysis, and case study");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("title", "Lease vs Buy Decision Framework");
    record2.set("course_id", "pbc_9676646180");
    record2.set("order", 3);
    record2.set("duration", 60);
    record2.set("content_type", "text");
    record2.set("description", "Lease vs buy fundamentals, financial comparison, qualitative factors, risk comparison, strategic considerations, and case study");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("title", "Tax Optimization Strategies");
    record3.set("course_id", "pbc_9676646180");
    record3.set("order", 4);
    record3.set("duration", 60);
    record3.set("content_type", "text");
    record3.set("description", "Lease tax fundamentals, operating lease tax benefits, finance lease tax considerations, tax optimization strategies, international tax considerations, and case study");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("title", "Accounting Optimization and Financial Engineering");
    record4.set("course_id", "pbc_9676646180");
    record4.set("order", 5);
    record4.set("duration", 60);
    record4.set("content_type", "text");
    record4.set("description", "Accounting optimization fundamentals, ASC 842 optimization, IFRS 16 optimization, financial ratio optimization, financial engineering techniques, and case study");
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("title", "Advanced Structuring and Financial Strategies");
    record5.set("course_id", "pbc_9676646180");
    record5.set("order", 6);
    record5.set("duration", 60);
    record5.set("content_type", "text");
    record5.set("description", "Advanced structuring fundamentals, leveraged lease structures, syndication structures, securitization structures, residual value management, and case study");
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("title", "Lease Portfolio Management");
    record6.set("course_id", "pbc_9676646180");
    record6.set("order", 7);
    record6.set("duration", 60);
    record6.set("content_type", "text");
    record6.set("description", "Portfolio management fundamentals, portfolio composition and analysis, portfolio performance metrics, portfolio optimization, portfolio monitoring and reporting, and case study");
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("title", "Risk Assessment and Management");
    record7.set("course_id", "pbc_9676646180");
    record7.set("order", 8);
    record7.set("duration", 60);
    record7.set("content_type", "text");
    record7.set("description", "Risk management fundamentals, credit risk management, residual value risk management, operational risk management, market risk management, and case study");
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("title", "Advanced Portfolio Strategies");
    record8.set("course_id", "pbc_9676646180");
    record8.set("order", 9);
    record8.set("duration", 60);
    record8.set("content_type", "text");
    record8.set("description", "Advanced portfolio strategies fundamentals, securitization strategies, syndication and participation strategies, hedging and derivative strategies, exit and disposition strategies, and case study");
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("title", "ESG and Sustainable Leasing");
    record9.set("course_id", "pbc_9676646180");
    record9.set("order", 10);
    record9.set("duration", 60);
    record9.set("content_type", "text");
    record9.set("description", "ESG and sustainable leasing fundamentals, environmental considerations, social considerations, governance considerations, ESG reporting and metrics, and case study");
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("title", "Technology and Digital Transformation");
    record10.set("course_id", "pbc_9676646180");
    record10.set("order", 11);
    record10.set("duration", 60);
    record10.set("content_type", "text");
    record10.set("description", "Technology and digital transformation fundamentals, artificial intelligence and machine learning, blockchain and distributed ledger technology, IoT and sensors, data analytics and business intelligence, and case study");
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("title", "Market Trends and Future Strategies");
    record11.set("course_id", "pbc_9676646180");
    record11.set("order", 12);
    record11.set("duration", 60);
    record11.set("content_type", "text");
    record11.set("description", "Market trends and future strategies fundamentals, mobility and transportation trends, real estate and workplace trends, equipment and technology trends, alternative assets and emerging opportunities, and case study");
  app.save(record11);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})