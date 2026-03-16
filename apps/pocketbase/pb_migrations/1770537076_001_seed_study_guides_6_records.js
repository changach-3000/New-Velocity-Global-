/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("study_guides");

  const record0 = new Record(collection);
    record0.set("title", "Lesson 1: Lease Accounting Fundamentals - Study Guide");
    record0.set("lesson_id", "lesson_1_id");
    record0.set("part_number", null);
    record0.set("content_type", "study_guide");
    record0.set("description", "Comprehensive study guide covering ASC 842, ROU assets, lease liabilities, lease classification, identification process, financial statement impact, calculation examples, implementation challenges, best practices, and 8 practice problems with solutions");
    record0.set("file_type", "PDF");
    record0.set("is_downloadable", true);
    record0.set("content_summary", "Complete study guide for Lease Accounting Fundamentals including key concepts (ASC 842, ROU asset, lease liability), 5 learning objectives, 20 key terms, lease classification framework, ROU and lease liability calculations with examples, financial statement impact analysis, 3 detailed practical examples, 5 common implementation challenges with solutions, 5 best practices, 8 practice problems with solutions, and study tips");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("title", "Lesson 2: Financial Analysis and Decision-Making - Study Guide");
    record1.set("lesson_id", "lesson_2_id");
    record1.set("part_number", null);
    record1.set("content_type", "study_guide");
    record1.set("description", "Comprehensive study guide covering lease vs buy analysis, NPV and IRR methodologies, cash flow analysis, sensitivity and scenario analysis, break-even analysis, calculation examples, decision-making framework, and 8 practice problems with solutions");
    record1.set("file_type", "PDF");
    record1.set("is_downloadable", true);
    record1.set("content_summary", "Complete study guide for Financial Analysis and Decision-Making including key concepts (lease vs buy, NPV, IRR, cash flow analysis), 5 learning objectives, 20 key terms, lease vs buy framework, cash flow identification, discount rate selection, NPV and IRR methodologies with examples, sensitivity and scenario analysis, break-even analysis, 3 detailed practical examples, 5 common analysis mistakes with corrections, decision-making framework, 8 practice problems with solutions, and study tips");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("title", "Lesson 3: Financial Statement Management and Reporting - Study Guide");
    record2.set("lesson_id", "lesson_3_id");
    record2.set("part_number", null);
    record2.set("content_type", "study_guide");
    record2.set("description", "Comprehensive study guide covering balance sheet management, income statement analysis, cash flow statement presentation, financial ratio analysis, lease disclosures, financial statement impact examples, ratio impact analysis, and 8 practice problems with solutions");
    record2.set("file_type", "PDF");
    record2.set("is_downloadable", true);
    record2.set("content_summary", "Complete study guide for Financial Statement Management and Reporting including key concepts (balance sheet, income statement, cash flow, ratios), 5 learning objectives, 20 key terms, balance sheet management guide, income statement analysis, cash flow statement presentation, financial ratio analysis framework, lease disclosure requirements, 3 detailed financial statement examples, 5 key ratios with impact calculations, segment reporting considerations, investor communication guide, 5 common reporting issues with solutions, 8 practice problems with solutions, and study tips");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("title", "Lesson 4: Tax Planning and Optimization - Study Guide");
    record3.set("lesson_id", "lesson_4_id");
    record3.set("part_number", null);
    record3.set("content_type", "study_guide");
    record3.set("description", "Comprehensive study guide covering lease tax treatment, operating and finance lease tax benefits, tax deduction analysis, tax optimization strategies, deferred tax calculations, international tax considerations, tax compliance, and 8 practice problems with solutions");
    record3.set("file_type", "PDF");
    record3.set("is_downloadable", true);
    record3.set("content_summary", "Complete study guide for Tax Planning and Optimization including key concepts (lease tax treatment, optimization, compliance), 5 learning objectives, 20 key terms, lease tax treatment fundamentals, 5 operating lease tax benefits with examples, 5 finance lease tax considerations with examples, tax deduction analysis, 5 tax optimization strategies with implementation, tax vs accounting treatment, deferred tax asset/liability calculations, 5 international tax considerations with examples, 3 detailed tax planning case studies, tax compliance requirements, 5 common tax mistakes with corrections, 8 practice problems with solutions, and study tips");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("title", "Lesson 5: Practical Implementation and Best Practices - Study Guide");
    record4.set("lesson_id", "lesson_5_id");
    record4.set("part_number", null);
    record4.set("content_type", "study_guide");
    record4.set("description", "Comprehensive study guide covering lease portfolio management, data organization, compliance monitoring, portfolio metrics, internal controls, segregation of duties, software selection, technology integration, automation opportunities, implementation pitfalls, best practices, and 8 practice problems with solutions");
    record4.set("file_type", "PDF");
    record4.set("is_downloadable", true);
    record4.set("content_summary", "Complete study guide for Practical Implementation and Best Practices including key concepts (portfolio management, controls, technology, trends), 5 learning objectives, 20 key terms, lease portfolio management framework, lease data organization guide, lease compliance monitoring, portfolio performance metrics (WALT, WAC, WAL, yield), internal controls framework, segregation of duties, lease accounting software selection guide, technology integration, automation opportunities, 5 common implementation pitfalls with solutions, 5 best practices for implementation, future trends in leasing, 3 detailed implementation case studies, 8 practice problems with solutions, and study tips");
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("title", "Practical Leasing for Finance Professionals - Master Study Guide");
    record5.set("lesson_id", null);
    record5.set("part_number", null);
    record5.set("content_type", "master_glossary");
    record5.set("description", "Comprehensive master study guide for the entire Practical Leasing for Finance Professionals course covering all 5 lessons with integrated concepts, key formulas, frameworks, toolkits, implementation roadmap, case studies, practice exam, and recommended study schedule");
    record5.set("file_type", "PDF");
    record5.set("is_downloadable", true);
    record5.set("content_summary", "Master study guide covering course overview and learning objectives, complete course summary of all 5 lessons, integrated concepts map showing lesson connections, key formulas and calculations reference from all lessons, comprehensive lease accounting framework, financial analysis toolkit (NPV, IRR, cash flow analysis), financial statement impact reference, tax planning toolkit with strategies and calculations, implementation roadmap with step-by-step process, case study analysis guide with examples from all 5 lessons, 25 practice exam questions with answers, recommended 5-week study schedule, key takeaways and summary, and references");
  app.save(record5);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})