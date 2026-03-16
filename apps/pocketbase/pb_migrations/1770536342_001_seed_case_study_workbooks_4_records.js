/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("case_study_workbooks");

  const record0 = new Record(collection);
    record0.set("title", "Lease Portfolio Management");
    record0.set("lesson_id", "lesson_3_1");
    record0.set("part_number", 3);
    record0.set("case_study_name", "PortfolioManagement Corp");
    record0.set("company_background", "Large lessor with $2B portfolio comprising 1,000 leases. Current situation: Managing complex portfolio across multiple equipment types, lease types, industries, and geographies. Objective: Manage and optimize $2B lease portfolio to maximize returns and manage risk.");
    record0.set("workbook_sections", "1. Company Background and Portfolio Overview - Overview of PortfolioManagement Corp and $2B portfolio\n2. Portfolio Assessment Worksheet - Assess portfolio composition and performance\n3. Composition Analysis Template - Analyze portfolio by equipment type, lease type, industry, term, and geography\n4. Performance Metrics Calculation Worksheet - Calculate WALT, WAC, WAL, yield, duration, and other metrics\n5. Optimization Analysis Template - Identify optimization opportunities\n6. Rebalancing Strategy Worksheet - Develop portfolio rebalancing strategy\n7. Refinancing Analysis Template - Analyze refinancing opportunities\n8. Monitoring Framework Worksheet - Define KPIs and monitoring approach\n9. Reporting Template - Develop portfolio reporting framework\n10. Discussion Questions - 10 questions on portfolio management\n11. Solutions with Detailed Portfolio Analysis - Complete solutions with detailed analysis");
    record0.set("includes_worksheets", true);
    record0.set("includes_templates", true);
    record0.set("includes_solutions", true);
    record0.set("content_summary", "Comprehensive workbook for lease portfolio management. Covers portfolio assessment, composition analysis, performance metrics calculation, optimization analysis, rebalancing strategy, refinancing analysis, and monitoring framework. Includes 10 discussion questions and detailed solutions.");
    record0.set("is_downloadable", true);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("title", "Risk Assessment and Management");
    record1.set("lesson_id", "lesson_3_2");
    record1.set("part_number", 3);
    record1.set("case_study_name", "RiskManagement Corp");
    record1.set("company_background", "Large lessor with $1B portfolio. Current situation: Managing multiple risk types across portfolio. Objective: Develop comprehensive risk management framework to identify, assess, and mitigate risks.");
    record1.set("workbook_sections", "1. Company Background and Risk Position - Overview of RiskManagement Corp and risk profile\n2. Risk Assessment Worksheet - Conduct comprehensive risk assessment\n3. Credit Risk Analysis Template - Analyze credit risk across portfolio\n4. Residual Value Risk Analysis Template - Analyze residual value risk\n5. Operational Risk Analysis Template - Analyze operational risks\n6. Market Risk Analysis Template - Analyze market risks\n7. Risk Mitigation Strategies Worksheet - Develop risk mitigation strategies\n8. Monitoring Framework Template - Define risk monitoring approach\n9. Reporting and Escalation Checklist - Establish reporting and escalation procedures\n10. Discussion Questions - 10 questions on risk assessment and management\n11. Solutions with Detailed Risk Analysis - Complete solutions with detailed analysis");
    record1.set("includes_worksheets", true);
    record1.set("includes_templates", true);
    record1.set("includes_solutions", true);
    record1.set("content_summary", "Comprehensive workbook for risk assessment and management. Covers credit risk, residual value risk, operational risk, and market risk analysis. Includes risk mitigation strategies, monitoring framework, and reporting procedures. Includes 10 discussion questions and detailed solutions.");
    record1.set("is_downloadable", true);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("title", "Advanced Portfolio Strategies");
    record2.set("lesson_id", "lesson_3_3");
    record2.set("part_number", 3);
    record2.set("case_study_name", "AdvancedPortfolio Corp");
    record2.set("company_background", "Large lessor with $3B portfolio. Current situation: Seeking to implement advanced strategies. Objective: Implement advanced strategies including securitization, syndication, hedging, and exit strategies for $3B portfolio.");
    record2.set("workbook_sections", "1. Company Background and Strategic Objectives - Overview of AdvancedPortfolio Corp and strategic objectives\n2. Strategy Assessment Worksheet - Assess portfolio for advanced strategies\n3. Securitization Strategy Design Template - Design securitization strategy\n4. Syndication Strategy Worksheet - Develop syndication strategy\n5. Hedging Strategy Design Template - Design hedging strategy\n6. Exit Strategy Worksheet - Develop exit strategy\n7. Implementation Plan Template - Plan implementation of advanced strategies\n8. Return Analysis Worksheet - Analyze returns from advanced strategies\n9. Risk Analysis and Mitigation Checklist - Identify and mitigate risks\n10. Discussion Questions - 10 questions on advanced portfolio strategies\n11. Solutions with Detailed Strategy Analysis - Complete solutions with detailed analysis");
    record2.set("includes_worksheets", true);
    record2.set("includes_templates", true);
    record2.set("includes_solutions", true);
    record2.set("content_summary", "Comprehensive workbook for advanced portfolio strategies. Covers securitization, syndication, hedging, and exit strategies. Includes implementation planning, return analysis, and risk management. Includes 10 discussion questions and detailed solutions.");
    record2.set("is_downloadable", true);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("title", "Lease Portfolio Management and Risk");
    record3.set("lesson_id", "part_3");
    record3.set("part_number", 3);
    record3.set("case_study_name", "ComprehensivePortfolio Corp");
    record3.set("company_background", "Large multinational lessor with $2B portfolio. Current situation: Managing complex portfolio with multiple risk types and seeking advanced strategies. Objective: Manage $2B portfolio with comprehensive risk management and implement advanced strategies.");
    record3.set("workbook_sections", "1. Company Background and Strategic Objectives - Overview of ComprehensivePortfolio Corp and objectives\n2. Portfolio Assessment Worksheet - Assess portfolio composition and performance\n3. Portfolio Management Strategy Worksheet - Develop portfolio management strategy\n4. Risk Assessment Template - Conduct comprehensive risk assessment\n5. Risk Mitigation Strategy Worksheet - Develop risk mitigation strategies\n6. Advanced Strategies Worksheet - Develop advanced strategies (securitization, syndication, hedging)\n7. Implementation Plan Template - Develop comprehensive implementation plan\n8. Monitoring Framework Worksheet - Define monitoring and reporting approach\n9. Performance Tracking Template - Track performance of portfolio and strategies\n10. Integrated Case Study Questions - 15 comprehensive questions covering all aspects\n11. Comprehensive Solutions and Recommendations - Complete solutions with strategic recommendations");
    record3.set("includes_worksheets", true);
    record3.set("includes_templates", true);
    record3.set("includes_solutions", true);
    record3.set("content_summary", "Comprehensive integrated case study workbook for Part 3. Covers portfolio assessment, portfolio management strategy, risk assessment and mitigation, advanced strategies, implementation planning, and monitoring. Includes 15 integrated questions and comprehensive solutions.");
    record3.set("is_downloadable", true);
  app.save(record3);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})