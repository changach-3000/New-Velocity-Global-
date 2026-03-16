/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("case_study_workbooks");

  const record0 = new Record(collection);
    record0.set("title", "Tax Optimization Strategies");
    record0.set("lesson_id", "lesson_2_1");
    record0.set("part_number", 2);
    record0.set("case_study_name", "TaxOptimization Corp");
    record0.set("company_background", "Multinational lessor with $75M lease portfolio. Current situation: Managing tax obligations across multiple jurisdictions. Objective: Structure leases for maximum tax efficiency while maintaining compliance with tax regulations.");
    record0.set("workbook_sections", "1. Company Background and Tax Position - Overview of TaxOptimization Corp and current tax situation\n2. Tax Assessment Worksheet - Assess current tax position and identify optimization opportunities\n3. Operating Lease Tax Benefits Analysis - Analyze tax benefits of operating lease structure\n4. Finance Lease Tax Considerations Analysis - Analyze tax implications of finance lease structure\n5. Tax Optimization Strategies Evaluation - Evaluate different tax optimization strategies\n6. International Tax Planning Worksheet - Address international tax planning considerations\n7. Tax Calculation Template - Step-by-step tax calculations with examples\n8. Implementation Plan Worksheet - Plan implementation of tax optimization strategies\n9. Compliance and Monitoring Checklist - Ensure compliance with tax regulations\n10. Discussion Questions - 10 questions on tax optimization strategies\n11. Solutions with Detailed Tax Analysis - Complete solutions with detailed tax analysis");
    record0.set("includes_worksheets", true);
    record0.set("includes_templates", true);
    record0.set("includes_solutions", true);
    record0.set("content_summary", "Comprehensive workbook for tax optimization strategies. Covers tax assessment, operating lease and finance lease tax analysis, tax optimization strategies, international tax planning, tax calculations, and compliance. Includes 10 discussion questions and detailed solutions.");
    record0.set("is_downloadable", true);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("title", "Accounting Optimization and Financial Engineering");
    record1.set("lesson_id", "lesson_2_2");
    record1.set("part_number", 2);
    record1.set("case_study_name", "AccountingOptimization Corp");
    record1.set("company_background", "Large corporation with $50M lease portfolio. Current situation: Managing accounting treatment under ASC 842 and IFRS 16. Objective: Optimize accounting treatment and financial ratios through financial engineering techniques.");
    record1.set("workbook_sections", "1. Company Background and Accounting Position - Overview of AccountingOptimization Corp and accounting situation\n2. Accounting Assessment Worksheet - Assess current accounting treatment and identify optimization opportunities\n3. ASC 842 Analysis Template - Analyze ROU asset and lease liability under ASC 842\n4. IFRS 16 Analysis Template - Analyze lease accounting under IFRS 16 and compare with ASC 842\n5. Financial Ratio Analysis Worksheet - Analyze impact on key financial ratios\n6. Optimization Strategies Evaluation - Evaluate different accounting optimization strategies\n7. Financial Engineering Techniques Template - Explore financial engineering techniques\n8. Implementation Plan Worksheet - Plan implementation of optimization strategies\n9. Monitoring and Reporting Checklist - Ensure proper monitoring and reporting\n10. Discussion Questions - 10 questions on accounting optimization and financial engineering\n11. Solutions with Detailed Accounting Analysis - Complete solutions with detailed accounting analysis");
    record1.set("includes_worksheets", true);
    record1.set("includes_templates", true);
    record1.set("includes_solutions", true);
    record1.set("content_summary", "Comprehensive workbook for accounting optimization and financial engineering. Covers ASC 842 and IFRS 16 analysis, financial ratio analysis, optimization strategies, and financial engineering techniques. Includes 10 discussion questions and detailed solutions.");
    record1.set("is_downloadable", true);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("title", "Advanced Structuring and Financial Strategies");
    record2.set("lesson_id", "lesson_2_3");
    record2.set("part_number", 2);
    record2.set("case_study_name", "AdvancedStructuring Corp");
    record2.set("company_background", "Large lessor with $300M lease portfolio. Current situation: Seeking to optimize portfolio through advanced structuring. Objective: Structure $300M portfolio using leveraged leases, syndication, and securitization to maximize returns and manage risk.");
    record2.set("workbook_sections", "1. Company Background and Portfolio Overview - Overview of AdvancedStructuring Corp and portfolio\n2. Portfolio Assessment Worksheet - Assess portfolio for advanced structuring opportunities\n3. Leveraged Lease Structure Design Template - Design leveraged lease structures\n4. Syndication Strategy Worksheet - Develop syndication strategy\n5. Securitization Analysis Template - Analyze securitization opportunities\n6. Residual Value Management Worksheet - Manage residual value risk\n7. Investor Returns Analysis Template - Analyze returns for different investor classes\n8. Implementation Plan Worksheet - Plan implementation of advanced structures\n9. Risk Management Checklist - Identify and manage risks\n10. Discussion Questions - 10 questions on advanced structuring and financial strategies\n11. Solutions with Detailed Structuring Analysis - Complete solutions with detailed analysis");
    record2.set("includes_worksheets", true);
    record2.set("includes_templates", true);
    record2.set("includes_solutions", true);
    record2.set("content_summary", "Comprehensive workbook for advanced structuring and financial strategies. Covers leveraged lease design, syndication strategy, securitization analysis, residual value management, and investor returns analysis. Includes 10 discussion questions and detailed solutions.");
    record2.set("is_downloadable", true);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("title", "Advanced Lease Optimization Techniques");
    record3.set("lesson_id", "part_2");
    record3.set("part_number", 2);
    record3.set("case_study_name", "OptimizationLeasing Corp");
    record3.set("company_background", "Large multinational lessor with $500M lease portfolio. Current situation: Managing complex optimization across tax, accounting, and structuring. Objective: Optimize $500M portfolio across tax, accounting, and structuring dimensions to maximize returns and manage risk.");
    record3.set("workbook_sections", "1. Company Background and Optimization Objectives - Overview of OptimizationLeasing Corp and optimization objectives\n2. Portfolio Assessment Worksheet - Assess portfolio for optimization opportunities\n3. Tax Optimization Strategy Worksheet - Develop tax optimization strategy\n4. Accounting Optimization Worksheet - Develop accounting optimization strategy\n5. Advanced Structuring Strategy Worksheet - Develop advanced structuring strategy\n6. Integrated Analysis Template - Integrate tax, accounting, and structuring strategies\n7. Implementation Strategy Worksheet - Develop comprehensive implementation strategy\n8. Monitoring and Compliance Framework - Define monitoring and compliance approach\n9. Performance Tracking Worksheet - Track performance of optimization initiatives\n10. Integrated Case Study Questions - 15 comprehensive questions covering all aspects\n11. Comprehensive Solutions and Recommendations - Complete solutions with strategic recommendations");
    record3.set("includes_worksheets", true);
    record3.set("includes_templates", true);
    record3.set("includes_solutions", true);
    record3.set("content_summary", "Comprehensive integrated case study workbook for Part 2. Covers tax optimization, accounting optimization, advanced structuring, integrated analysis, implementation planning, and monitoring. Includes 15 integrated questions and comprehensive solutions.");
    record3.set("is_downloadable", true);
  app.save(record3);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})