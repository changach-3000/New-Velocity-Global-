/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quizzes");

  const record0 = new Record(collection);
    record0.set("lesson_id", "lesson_1_1");
    record0.set("title", "Strategic Lease Planning Framework");
    record0.set("passing_score", 70);
    record0.set("description", "Quiz covering the 5 phases of lease planning, strategic objectives, stakeholder analysis, and lease vs buy decision framework");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("lesson_id", "lesson_1_2");
    record1.set("title", "Financial Analysis and Lease Evaluation");
    record1.set("passing_score", 70);
    record1.set("description", "Quiz on NPV calculations, IRR analysis, cash flow components, and sensitivity analysis for lease evaluation");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("lesson_id", "lesson_1_3");
    record2.set("title", "Lease vs Buy Decision Framework");
    record2.set("passing_score", 70);
    record2.set("description", "Quiz comparing lease vs buy options, qualitative factors, risk analysis, and strategic considerations");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("lesson_id", "lesson_2_1");
    record3.set("title", "Tax Optimization Strategies");
    record3.set("passing_score", 70);
    record3.set("description", "Quiz on operating lease tax benefits, tax treatment comparison, optimization strategies, and international tax considerations");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("lesson_id", "lesson_2_2");
    record4.set("title", "Accounting Optimization and Financial Engineering");
    record4.set("passing_score", 70);
    record4.set("description", "Quiz on ASC 842 optimization, ASC 842 vs IFRS 16 comparison, financial ratios, ROU asset calculations, and financial engineering strategies");
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("lesson_id", "lesson_2_3");
    record5.set("title", "Advanced Structuring and Financial Strategies");
    record5.set("passing_score", 70);
    record5.set("description", "Quiz on leveraged lease structures, syndication approaches, securitization process, and residual value management");
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("lesson_id", "lesson_3_1");
    record6.set("title", "Lease Portfolio Management");
    record6.set("passing_score", 70);
    record6.set("description", "Quiz on portfolio composition analysis, WALT/WAC/WAL metrics, portfolio optimization, and performance metrics");
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("lesson_id", "lesson_3_2");
    record7.set("title", "Risk Assessment and Management");
    record7.set("passing_score", 70);
    record7.set("description", "Quiz on portfolio risks, credit risk assessment, residual value risk mitigation, and operational/market risk analysis");
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("lesson_id", "lesson_3_3");
    record8.set("title", "Advanced Portfolio Strategies");
    record8.set("passing_score", 70);
    record8.set("description", "Quiz on securitization strategies, syndication structures, hedging/derivative strategies, and exit/disposition strategies");
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("lesson_id", "lesson_4_1");
    record9.set("title", "ESG and Sustainable Leasing");
    record9.set("passing_score", 70);
    record9.set("description", "Quiz on ESG in leasing context, environmental considerations, social and governance factors, and ESG metrics");
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("lesson_id", "lesson_4_2");
    record10.set("title", "Technology and Digital Transformation");
    record10.set("passing_score", 70);
    record10.set("description", "Quiz on leasing technologies, AI/ML applications, blockchain/IoT use cases, and data analytics implementation");
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("lesson_id", "lesson_4_3");
    record11.set("title", "Market Trends and Future Strategies");
    record11.set("passing_score", 70);
    record11.set("description", "Quiz on emerging market trends, mobility/transportation trends, real estate/technology trends, and alternative asset opportunities");
  app.save(record11);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})