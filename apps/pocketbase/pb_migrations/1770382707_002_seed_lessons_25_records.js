/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "advanced_leasing_strategies");
    record0.set("title", "Lesson 1: Sale-Leaseback Fundamentals");
    record0.set("description", "Introduction to sale-leaseback transactions and structures");
    record0.set("order", 1);
    record0.set("duration", 45);
    record0.set("content_type", "video");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "advanced_leasing_strategies");
    record1.set("title", "Lesson 2: Tax Implications of Advanced Leases");
    record1.set("description", "Understanding tax benefits and implications in complex lease structures");
    record1.set("order", 2);
    record1.set("duration", 50);
    record1.set("content_type", "video");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "advanced_leasing_strategies");
    record2.set("title", "Lesson 3: Lease Modifications and Restructuring");
    record2.set("description", "Managing lease modifications and portfolio restructuring");
    record2.set("order", 3);
    record2.set("duration", 45);
    record2.set("content_type", "video");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("course_id", "advanced_leasing_strategies");
    record3.set("title", "Lesson 4: International Leasing Considerations");
    record3.set("description", "Navigating international lease markets and regulations");
    record3.set("order", 4);
    record3.set("duration", 55);
    record3.set("content_type", "video");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("course_id", "advanced_leasing_strategies");
    record4.set("title", "Lesson 5: Risk Analysis and Mitigation");
    record4.set("description", "Identifying and managing risks in lease portfolios");
    record4.set("order", 5);
    record4.set("duration", 50);
    record4.set("content_type", "video");
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("course_id", "advanced_leasing_strategies");
    record5.set("title", "Lesson 6: Advanced Lease Structures");
    record5.set("description", "Deep dive into complex lease structures and documentation");
    record5.set("order", 6);
    record5.set("duration", 40);
    record5.set("content_type", "text");
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("course_id", "advanced_leasing_strategies");
    record6.set("title", "Lesson 7: Portfolio Management Strategies");
    record6.set("description", "Optimizing and managing large lease portfolios");
    record6.set("order", 7);
    record6.set("duration", 35);
    record6.set("content_type", "text");
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("course_id", "advanced_leasing_strategies");
    record7.set("title", "Lesson 8: Advanced Structures Quiz");
    record7.set("description", "Test your knowledge of advanced leasing concepts");
    record7.set("order", 8);
    record7.set("duration", 30);
    record7.set("content_type", "quiz");
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("course_id", "advanced_leasing_strategies");
    record8.set("title", "Lesson 9: Case Study Analysis");
    record8.set("description", "Apply your knowledge to real-world case studies");
    record8.set("order", 9);
    record8.set("duration", 60);
    record8.set("content_type", "assignment");
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("course_id", "lease_accounting_deep_dive");
    record9.set("title", "Lesson 1: IFRS 16 Fundamentals");
    record9.set("description", "Introduction to IFRS 16 lease accounting standards");
    record9.set("order", 1);
    record9.set("duration", 50);
    record9.set("content_type", "video");
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("course_id", "lease_accounting_deep_dive");
    record10.set("title", "Lesson 2: Lease Classification Under IFRS 16");
    record10.set("description", "Understanding lease classification criteria and implications");
    record10.set("order", 2);
    record10.set("duration", 45);
    record10.set("content_type", "video");
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("course_id", "lease_accounting_deep_dive");
    record11.set("title", "Lesson 3: Recognition and Measurement");
    record11.set("description", "Recognizing and measuring lease liabilities and ROU assets");
    record11.set("order", 3);
    record11.set("duration", 55);
    record11.set("content_type", "video");
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("course_id", "lease_accounting_deep_dive");
    record12.set("title", "Lesson 4: ASC 842 Requirements");
    record12.set("description", "Understanding ASC 842 and US GAAP lease accounting");
    record12.set("order", 4);
    record12.set("duration", 50);
    record12.set("content_type", "video");
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("course_id", "lease_accounting_deep_dive");
    record13.set("title", "Lesson 5: Compliance and Reporting");
    record13.set("description", "Meeting disclosure and reporting requirements");
    record13.set("order", 5);
    record13.set("duration", 45);
    record13.set("content_type", "video");
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("course_id", "lease_accounting_deep_dive");
    record14.set("title", "Lesson 6: IFRS 16 vs ASC 842 Comparison");
    record14.set("description", "Key differences and similarities between standards");
    record14.set("order", 6);
    record14.set("duration", 40);
    record14.set("content_type", "text");
  app.save(record14);

  const record15 = new Record(collection);
    record15.set("course_id", "lease_accounting_deep_dive");
    record15.set("title", "Lesson 7: Practical Accounting Examples");
    record15.set("description", "Working through real-world accounting scenarios");
    record15.set("order", 7);
    record15.set("duration", 35);
    record15.set("content_type", "text");
  app.save(record15);

  const record16 = new Record(collection);
    record16.set("course_id", "lease_accounting_deep_dive");
    record16.set("title", "Lesson 8: Accounting Standards Quiz");
    record16.set("description", "Test your understanding of lease accounting standards");
    record16.set("order", 8);
    record16.set("duration", 30);
    record16.set("content_type", "quiz");
  app.save(record16);

  const record17 = new Record(collection);
    record17.set("course_id", "lease_accounting_deep_dive");
    record17.set("title", "Lesson 9: Accounting Calculations");
    record17.set("description", "Perform complex lease accounting calculations");
    record17.set("order", 9);
    record17.set("duration", 60);
    record17.set("content_type", "assignment");
  app.save(record17);

  const record18 = new Record(collection);
    record18.set("course_id", "practical_leasing_for_finance");
    record18.set("title", "Lesson 1: Lease vs Buy Analysis Framework");
    record18.set("description", "Building a comprehensive lease vs buy analysis model");
    record18.set("order", 1);
    record18.set("duration", 40);
    record18.set("content_type", "video");
  app.save(record18);

  const record19 = new Record(collection);
    record19.set("course_id", "practical_leasing_for_finance");
    record19.set("title", "Lesson 2: Financial Metrics and Decision Making");
    record19.set("description", "Using financial metrics to make leasing decisions");
    record19.set("order", 2);
    record19.set("duration", 45);
    record19.set("content_type", "video");
  app.save(record19);

  const record20 = new Record(collection);
    record20.set("course_id", "practical_leasing_for_finance");
    record20.set("title", "Lesson 3: Negotiation Strategies");
    record20.set("description", "Effective negotiation tactics for lease agreements");
    record20.set("order", 3);
    record20.set("duration", 35);
    record20.set("content_type", "video");
  app.save(record20);

  const record21 = new Record(collection);
    record21.set("course_id", "practical_leasing_for_finance");
    record21.set("title", "Lesson 4: Industry-Specific Applications");
    record21.set("description", "Leasing applications across different industries");
    record21.set("order", 4);
    record21.set("duration", 40);
    record21.set("content_type", "video");
  app.save(record21);

  const record22 = new Record(collection);
    record22.set("course_id", "practical_leasing_for_finance");
    record22.set("title", "Lesson 5: Lease Documentation and Contracts");
    record22.set("description", "Understanding lease agreements and key terms");
    record22.set("order", 5);
    record22.set("duration", 30);
    record22.set("content_type", "text");
  app.save(record22);

  const record23 = new Record(collection);
    record23.set("course_id", "practical_leasing_for_finance");
    record23.set("title", "Lesson 6: Risk Management in Leasing");
    record23.set("description", "Identifying and managing leasing risks");
    record23.set("order", 6);
    record23.set("duration", 35);
    record23.set("content_type", "text");
  app.save(record23);

  const record24 = new Record(collection);
    record24.set("course_id", "practical_leasing_for_finance");
    record24.set("title", "Lesson 7: Practical Leasing Quiz");
    record24.set("description", "Test your practical leasing knowledge");
    record24.set("order", 7);
    record24.set("duration", 30);
    record24.set("content_type", "quiz");
  app.save(record24);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})