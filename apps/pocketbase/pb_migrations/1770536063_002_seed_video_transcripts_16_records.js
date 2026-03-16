/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("video_transcripts");

  const record0 = new Record(collection);
    record0.set("title", "Strategic Lease Planning Framework: Building a Comprehensive Approach");
    record0.set("lesson_id", "lesson_1_1");
    record0.set("part_number", 1);
    record0.set("duration_minutes", 45);
    record0.set("content_summary", "Comprehensive 45-minute video covering strategic lease planning framework with 5 phases: Assessment, Strategy Development, Evaluation, Implementation, and Monitoring. Includes case study example of StrategicLeasing Corp with speaker notes, key points, visual descriptions, and timestamps for all 8 sections (Introduction, Phase 1-5, Case Study, Q&A).");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("title", "Financial Analysis and Lease Evaluation: Mastering NPV and IRR");
    record1.set("lesson_id", "lesson_1_2");
    record1.set("part_number", 1);
    record1.set("duration_minutes", 50);
    record1.set("content_summary", "Comprehensive 50-minute video covering financial analysis fundamentals including NPV and IRR analysis, cash flow analysis, sensitivity analysis, and practical examples. Includes 8 sections with speaker notes, calculation examples, visual descriptions, and timestamps.");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("title", "Lease vs Buy Decision Framework: Making Strategic Choices");
    record2.set("lesson_id", "lesson_1_3");
    record2.set("part_number", 1);
    record2.set("duration_minutes", 45);
    record2.set("content_summary", "Comprehensive 45-minute video covering lease vs buy decision framework including financial comparison, qualitative factors, risk analysis, strategic considerations, and decision framework. Includes case study example of LeaseVsBuy Corp with 8 sections and detailed speaker notes.");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("title", "Strategic Lease Planning and Analysis: Complete Overview");
    record3.set("lesson_id", "part_1");
    record3.set("part_number", 1);
    record3.set("duration_minutes", 150);
    record3.set("content_summary", "Comprehensive 150-minute (3-hour) video covering all Part 1 lessons including strategic planning framework, financial analysis techniques, and lease vs buy decision framework. Includes integration, real-world examples, and Q&A with speaker notes and visual descriptions.");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("title", "Tax Optimization Strategies: Maximizing Tax Efficiency in Leasing");
    record4.set("lesson_id", "lesson_2_1");
    record4.set("part_number", 2);
    record4.set("duration_minutes", 50);
    record4.set("content_summary", "Comprehensive 50-minute video covering tax optimization strategies including lease tax fundamentals, operating lease tax benefits, finance lease tax considerations, tax optimization strategies, and international tax considerations. Includes case study example of TaxOptimization Corp with 8 sections.");
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("title", "Accounting Optimization and Financial Engineering: Advanced Techniques");
    record5.set("lesson_id", "lesson_2_2");
    record5.set("part_number", 2);
    record5.set("duration_minutes", 55);
    record5.set("content_summary", "Comprehensive 55-minute video covering accounting optimization including ASC 842 and IFRS 16 fundamentals and optimization techniques, financial engineering techniques, and case study example. Includes 8 sections with calculation examples and visual descriptions.");
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("title", "Advanced Structuring and Financial Strategies: Complex Lease Structures");
    record6.set("lesson_id", "lesson_2_3");
    record6.set("part_number", 2);
    record6.set("duration_minutes", 55);
    record6.set("content_summary", "Comprehensive 55-minute video covering advanced structuring including leveraged lease structures, syndication structures, securitization structures, residual value management, and case study example. Includes structure diagrams and visual descriptions.");
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("title", "Advanced Lease Optimization Techniques: Complete Overview");
    record7.set("lesson_id", "part_2");
    record7.set("part_number", 2);
    record7.set("duration_minutes", 160);
    record7.set("content_summary", "Comprehensive 160-minute (2 hours 40 minutes) video covering all Part 2 lessons including tax optimization, accounting optimization, and advanced structuring. Includes integration, real-world examples, and Q&A with speaker notes.");
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("title", "Lease Portfolio Management: Managing Large-Scale Lease Portfolios");
    record8.set("lesson_id", "lesson_3_1");
    record8.set("part_number", 3);
    record8.set("duration_minutes", 50);
    record8.set("content_summary", "Comprehensive 50-minute video covering lease portfolio management including portfolio fundamentals, composition analysis, performance metrics (WALT, WAC, WAL, Yield, Duration), optimization strategies, and monitoring framework. Includes case study example.");
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("title", "Risk Assessment and Management: Comprehensive Risk Framework");
    record9.set("lesson_id", "lesson_3_2");
    record9.set("part_number", 3);
    record9.set("duration_minutes", 55);
    record9.set("content_summary", "Comprehensive 55-minute video covering risk management including credit risk, residual value risk, operational risk, and market risk management. Includes assessment, mitigation, and monitoring frameworks with case study example.");
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("title", "Advanced Portfolio Strategies: Securitization, Syndication, and Hedging");
    record10.set("lesson_id", "lesson_3_3");
    record10.set("part_number", 3);
    record10.set("duration_minutes", 55);
    record10.set("content_summary", "Comprehensive 55-minute video covering advanced portfolio strategies including securitization, syndication, hedging, and exit strategies. Includes 5 types of each strategy with examples and case study.");
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("title", "Lease Portfolio Management and Risk: Complete Overview");
    record11.set("lesson_id", "part_3");
    record11.set("part_number", 3);
    record11.set("duration_minutes", 160);
    record11.set("content_summary", "Comprehensive 160-minute (2 hours 40 minutes) video covering all Part 3 lessons including portfolio management, risk assessment, and advanced strategies. Includes integration, real-world examples, and Q&A.");
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("title", "ESG and Sustainable Leasing: Building Sustainable Lease Portfolios");
    record12.set("lesson_id", "lesson_4_1");
    record12.set("part_number", 4);
    record12.set("duration_minutes", 50);
    record12.set("content_summary", "Comprehensive 50-minute video covering ESG and sustainable leasing including environmental, social, and governance considerations, ESG metrics and reporting, and case study example of SustainableLeasing Corp.");
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("title", "Technology and Digital Transformation: Transforming Lease Operations");
    record13.set("lesson_id", "lesson_4_2");
    record13.set("part_number", 4);
    record13.set("duration_minutes", 55);
    record13.set("content_summary", "Comprehensive 55-minute video covering digital transformation including AI and machine learning, blockchain technology, IoT and sensors, and data analytics applications. Includes case study example of DigitalTransformation Corp.");
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("title", "Market Trends and Future Strategies: Emerging Opportunities in Leasing");
    record14.set("lesson_id", "lesson_4_3");
    record14.set("part_number", 4);
    record14.set("duration_minutes", 50);
    record14.set("content_summary", "Comprehensive 50-minute video covering market trends including mobility trends, real estate trends, technology trends, and alternative assets. Includes case study example of FutureLeasing Corp.");
  app.save(record14);

  const record15 = new Record(collection);
    record15.set("title", "Emerging Trends and Future Strategies: Complete Overview");
    record15.set("lesson_id", "part_4");
    record15.set("part_number", 4);
    record15.set("duration_minutes", 155);
    record15.set("content_summary", "Comprehensive 155-minute (2 hours 35 minutes) video covering all Part 4 lessons including ESG, digital transformation, and market trends. Includes integration, real-world examples, and Q&A.");
  app.save(record15);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})