/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "course_1");
    record0.set("title", "Introduction to Lease Structures");
    record0.set("description", "Foundational understanding of lease structure types, mechanics, and key components");
    record0.set("order", 1);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "course_1");
    record1.set("title", "Financial Modeling for Leases");
    record1.set("description", "Building comprehensive financial models for lease analysis and valuation");
    record1.set("order", 2);
    record1.set("content_type", "text");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "course_1");
    record2.set("title", "Complex Lease Arrangements");
    record2.set("description", "Analyzing and structuring complex lease deals with multiple variables");
    record2.set("order", 3);
    record2.set("content_type", "text");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("course_id", "course_1");
    record3.set("title", "Deal Structuring & Negotiation");
    record3.set("description", "Strategies for structuring deals and negotiating favorable lease terms");
    record3.set("order", 4);
    record3.set("content_type", "text");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("course_id", "course_2");
    record4.set("title", "Lease Valuation Fundamentals");
    record4.set("description", "Core concepts and methodologies for lease valuation");
    record4.set("order", 1);
    record4.set("content_type", "text");
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("course_id", "course_2");
    record5.set("title", "Advanced Valuation Methods");
    record5.set("description", "Sophisticated valuation techniques and models for complex leases");
    record5.set("order", 2);
    record5.set("content_type", "text");
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("course_id", "course_2");
    record6.set("title", "Economic Analysis & Sensitivity");
    record6.set("description", "Performing economic analysis and sensitivity testing on lease valuations");
    record6.set("order", 3);
    record6.set("content_type", "text");
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("course_id", "course_2");
    record7.set("title", "Comparative Analysis & Benchmarking");
    record7.set("description", "Benchmarking lease valuations against market standards and competitors");
    record7.set("order", 4);
    record7.set("content_type", "text");
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("course_id", "course_3");
    record8.set("title", "Risk Identification & Classification");
    record8.set("description", "Identifying and classifying various types of lease risks");
    record8.set("order", 1);
    record8.set("content_type", "text");
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("course_id", "course_3");
    record9.set("title", "Credit Analysis & Tenant Evaluation");
    record9.set("description", "Evaluating tenant creditworthiness and credit risk assessment");
    record9.set("order", 2);
    record9.set("content_type", "text");
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("course_id", "course_3");
    record10.set("title", "Residual Value Risk Management");
    record10.set("description", "Managing and mitigating residual value risk in lease portfolios");
    record10.set("order", 3);
    record10.set("content_type", "text");
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("course_id", "course_3");
    record11.set("title", "Risk Mitigation Strategies");
    record11.set("description", "Implementing effective risk mitigation strategies and controls");
    record11.set("order", 4);
    record11.set("content_type", "text");
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("course_id", "course_4");
    record12.set("title", "IFRS 16 Overview & Requirements");
    record12.set("description", "Understanding IFRS 16 standards and implementation requirements");
    record12.set("order", 1);
    record12.set("content_type", "text");
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("course_id", "course_4");
    record13.set("title", "ASC 842 Standards & Implementation");
    record13.set("description", "Mastering ASC 842 standards and practical implementation strategies");
    record13.set("order", 2);
    record13.set("content_type", "text");
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("course_id", "course_4");
    record14.set("title", "Accounting Treatment & Journal Entries");
    record14.set("description", "Proper accounting treatment and journal entry preparation under new standards");
    record14.set("order", 3);
    record14.set("content_type", "text");
  app.save(record14);

  const record15 = new Record(collection);
    record15.set("course_id", "course_4");
    record15.set("title", "Financial Statement Impact & Reporting");
    record15.set("description", "Understanding financial statement impact and disclosure requirements");
    record15.set("order", 4);
    record15.set("content_type", "text");
  app.save(record15);

  const record16 = new Record(collection);
    record16.set("course_id", "course_5");
    record16.set("title", "Portfolio Analysis Fundamentals");
    record16.set("description", "Foundational concepts in lease portfolio analysis and management");
    record16.set("order", 1);
    record16.set("content_type", "text");
  app.save(record16);

  const record17 = new Record(collection);
    record17.set("course_id", "course_5");
    record17.set("title", "Performance Metrics & KPIs");
    record17.set("description", "Key performance indicators and metrics for portfolio evaluation");
    record17.set("order", 2);
    record17.set("content_type", "text");
  app.save(record17);

  const record18 = new Record(collection);
    record18.set("course_id", "course_5");
    record18.set("title", "Portfolio Optimization Strategies");
    record18.set("description", "Strategies for optimizing portfolio composition and performance");
    record18.set("order", 3);
    record18.set("content_type", "text");
  app.save(record18);

  const record19 = new Record(collection);
    record19.set("course_id", "course_5");
    record19.set("title", "Monitoring & Reporting");
    record19.set("description", "Implementing monitoring systems and reporting frameworks");
    record19.set("order", 4);
    record19.set("content_type", "text");
  app.save(record19);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})