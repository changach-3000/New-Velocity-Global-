/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("case_study_workbooks");

  const record0 = new Record(collection);
    record0.set("title", "Strategic Lease Planning Framework");
    record0.set("lesson_id", "lesson_1_1");
    record0.set("part_number", 1);
    record0.set("case_study_name", "StrategicLeasing Corp");
    record0.set("company_background", "Mid-size manufacturing company with $50M annual revenue. Current situation: Managing diverse equipment portfolio with ad-hoc leasing decisions. Objective: Develop strategic lease plan for $10M equipment portfolio to optimize costs, manage risks, and align with business strategy.");
    record0.set("workbook_sections", "1. Company Background and Current Situation - Overview of StrategicLeasing Corp, current equipment portfolio, and business challenges\n2. Situation Analysis Worksheet - Analyze current lease portfolio, identify gaps and opportunities\n3. Stakeholder Analysis Template - Identify key stakeholders, their interests, and influence\n4. Objective Setting Exercise - Define strategic objectives for lease portfolio\n5. Strategy Development Worksheet - Develop comprehensive lease strategy\n6. Financial Analysis Template - Analyze financial implications of strategic plan\n7. Risk Assessment Matrix - Identify and assess key risks\n8. Implementation Plan Template - Create detailed implementation roadmap\n9. Monitoring Framework Worksheet - Define KPIs and monitoring approach\n10. Discussion Questions - 10 comprehensive questions covering all aspects of strategic planning\n11. Solutions and Detailed Answers - Complete solutions with strategic recommendations");
    record0.set("includes_worksheets", true);
    record0.set("includes_templates", true);
    record0.set("includes_solutions", true);
    record0.set("content_summary", "Comprehensive workbook for developing strategic lease planning framework. Covers situation analysis, stakeholder management, objective setting, strategy development, financial analysis, risk assessment, implementation planning, and monitoring. Includes 10 discussion questions and detailed solutions.");
    record0.set("is_downloadable", true);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("title", "Financial Analysis and Lease Evaluation");
    record1.set("lesson_id", "lesson_1_2");
    record1.set("part_number", 1);
    record1.set("case_study_name", "FinancialAnalysis Corp");
    record1.set("company_background", "Technology company with $100M annual revenue. Current situation: Evaluating major equipment lease decision. Objective: Conduct comprehensive financial analysis of $5M equipment lease using NPV and IRR analysis to support lease vs buy decision.");
    record1.set("workbook_sections", "1. Company Background and Financial Situation - Overview of FinancialAnalysis Corp and financial position\n2. Cash Flow Identification Worksheet - Identify all relevant cash flows for lease analysis\n3. NPV Calculation Template - Step-by-step guide for NPV calculation with examples\n4. IRR Calculation Template - Step-by-step guide for IRR calculation with examples\n5. Sensitivity Analysis Worksheet - Analyze impact of key variables on NPV and IRR\n6. Scenario Analysis Template - Evaluate different scenarios (base, optimistic, pessimistic)\n7. Comparison Analysis Worksheet - Compare lease option with buy option\n8. Decision Analysis Template - Synthesize financial analysis for decision-making\n9. Implementation Worksheet - Plan implementation of selected option\n10. Discussion Questions - 10 questions on financial analysis and decision-making\n11. Solutions with Detailed Calculations - Complete solutions with all calculations shown");
    record1.set("includes_worksheets", true);
    record1.set("includes_templates", true);
    record1.set("includes_solutions", true);
    record1.set("content_summary", "Comprehensive workbook for financial analysis and lease evaluation. Covers cash flow identification, NPV and IRR calculations with step-by-step guides, sensitivity analysis, scenario analysis, and comparison analysis. Includes 10 discussion questions and detailed solutions with calculations.");
    record1.set("is_downloadable", true);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("title", "Lease vs Buy Decision Framework");
    record2.set("lesson_id", "lesson_1_3");
    record2.set("part_number", 1);
    record2.set("case_study_name", "LeaseVsBuy Corp");
    record2.set("company_background", "Retail company with $75M annual revenue. Current situation: Need to acquire $8M equipment for expansion. Objective: Develop comprehensive framework to decide between leasing and buying equipment, considering financial, strategic, and operational factors.");
    record2.set("workbook_sections", "1. Company Background and Equipment Needs - Overview of LeaseVsBuy Corp and equipment requirements\n2. Financial Comparison Worksheet - Compare financial metrics of lease vs buy options\n3. Qualitative Assessment Template - Evaluate non-financial factors (flexibility, control, risk)\n4. Risk Analysis Matrix - Identify and assess risks for each option\n5. Strategic Alignment Worksheet - Evaluate alignment with business strategy\n6. Sensitivity Analysis Template - Analyze impact of key variables on decision\n7. Scenario Comparison Worksheet - Compare options under different scenarios\n8. Decision Matrix Template - Synthesize all factors for final decision\n9. Final Recommendation Worksheet - Document recommendation and rationale\n10. Discussion Questions - 10 questions on lease vs buy decision framework\n11. Solutions with Detailed Analysis - Complete solutions with comprehensive analysis");
    record2.set("includes_worksheets", true);
    record2.set("includes_templates", true);
    record2.set("includes_solutions", true);
    record2.set("content_summary", "Comprehensive workbook for lease vs buy decision framework. Covers financial comparison, qualitative assessment, risk analysis, strategic alignment, sensitivity analysis, and scenario comparison. Includes decision matrix and 10 discussion questions with detailed solutions.");
    record2.set("is_downloadable", true);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("title", "Strategic Lease Planning and Analysis");
    record3.set("lesson_id", "part_1");
    record3.set("part_number", 1);
    record3.set("case_study_name", "ComprehensiveLeasing Corp");
    record3.set("company_background", "Large multinational corporation with $500M annual revenue. Current situation: Managing complex lease portfolio of 1,000 leases across multiple countries and equipment types. Objective: Develop comprehensive lease strategy for $500M equipment portfolio to optimize costs, manage risks, ensure compliance, and support business growth.");
    record3.set("workbook_sections", "1. Company Background and Strategic Objectives - Overview of ComprehensiveLeasing Corp, portfolio overview, and strategic objectives\n2. Strategic Assessment Worksheet - Assess current lease portfolio and identify opportunities\n3. Portfolio Analysis Template - Analyze portfolio composition, performance, and trends\n4. Financial Modeling Worksheet - Develop comprehensive financial models (NPV, IRR, cash flow projections)\n5. Lease vs Buy Analysis for Key Equipment - Conduct detailed analysis for major equipment categories\n6. Risk Assessment and Mitigation - Identify key risks and develop mitigation strategies\n7. Implementation Strategy Template - Develop comprehensive implementation roadmap\n8. Monitoring and Optimization Framework - Define KPIs, monitoring approach, and optimization strategies\n9. Long-Term Planning Worksheet - Develop 5-year strategic plan\n10. Integrated Case Study Questions - 15 comprehensive questions covering all aspects\n11. Comprehensive Solutions and Recommendations - Complete solutions with strategic recommendations");
    record3.set("includes_worksheets", true);
    record3.set("includes_templates", true);
    record3.set("includes_solutions", true);
    record3.set("content_summary", "Comprehensive integrated case study workbook for Part 1. Covers strategic assessment, portfolio analysis, financial modeling, lease vs buy analysis, risk management, implementation planning, and long-term strategy. Includes 15 integrated questions and comprehensive solutions.");
    record3.set("is_downloadable", true);
  app.save(record3);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})