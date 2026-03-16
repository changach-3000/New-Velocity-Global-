/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("capstone_deliverables");

  const record0 = new Record(collection);
    record0.set("capstone_project_id", "practical_leasing_finance");
    record0.set("part_number", 1);
    record0.set("deliverable_id", "part1_lease_portfolio_assessment");
    record0.set("title", "Lease Portfolio Assessment");
    record0.set("point_value", 5);
    record0.set("requirements", "Analyze TechVenture's current lease portfolio including: Lease Portfolio Summary (total value $45M, 150+ leases, types breakdown, terms 2-10 years, current ASC 840 treatment), Lease Identification and Classification (identify all leases, classify as operating or finance, provide rationale for 10 sample leases, identify embedded leases, create classification matrix), Sample Lease Analysis (5 detailed leases with terms, components, classification, ROU asset and liability calculations, initial journal entries, first year accounting entries), Lease Portfolio Calculations (total ROU assets, total lease liabilities, summary by lease type, identify complex leases)");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("capstone_project_id", "practical_leasing_finance");
    record1.set("part_number", 1);
    record1.set("deliverable_id", "part1_financial_statement_impact");
    record1.set("title", "Financial Statement Impact Analysis");
    record1.set("point_value", 10);
    record1.set("requirements", "Prepare comprehensive analysis of ASC 842 impacts: Balance Sheet Impact (current vs pro forma, ROU assets and liabilities, working capital impact, current ratio and quick ratio impact), Income Statement Impact (current vs pro forma, lease expense breakdown, operating and net income impact, EPS impact), Cash Flow Statement Impact (current vs pro forma, lease payment classification, impact on operating/investing/financing activities, free cash flow impact), Financial Ratio Analysis (10 key ratios before and after: Debt-to-Equity, Interest Coverage, Current Ratio, Quick Ratio, ROA, ROE, Debt-to-Assets, Equity Multiplier, Operating Margin, Net Margin), Adjusted Metrics (adjusted EBITDA, adjusted debt-to-equity, adjusted interest coverage)");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("capstone_project_id", "practical_leasing_finance");
    record2.set("part_number", 1);
    record2.set("deliverable_id", "part1_lease_accounting_documentation");
    record2.set("title", "Lease Accounting Documentation");
    record2.set("point_value", 5);
    record2.set("requirements", "Prepare comprehensive documentation: Lease Register (all 150+ leases with Lease ID, Lessor, Asset Description, Commencement Date, Lease Term, Lease Payment, Discount Rate, ROU Asset, Lease Liability, Classification, organized by type and lessor), Discount Rate Documentation (selection methodology, incremental borrowing rates by lease type, justification, sensitivity analysis), Lease Modification Log (modifications during transition period, accounting treatment, impact on ROU assets and liabilities), Transition Adjustments (cumulative effect of ASC 842 adoption, transition journal entry, reconciliation to lease register)");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("capstone_project_id", "practical_leasing_finance");
    record3.set("part_number", 2);
    record3.set("deliverable_id", "part2_lease_vs_buy_analysis");
    record3.set("title", "Lease vs Buy Analysis");
    record3.set("point_value", 10);
    record3.set("requirements", "Perform comprehensive analysis for 3 major decisions: Equipment Lease ($5M, 5-year lease at $1.2M/year vs purchase for $5M at 6% financing), Real Estate Lease ($8M, 10-year lease at $1M/year vs purchase for $8M at 5% financing), Vehicle Fleet Lease ($2M, 3-year lease at $700K/year vs purchase for $2M at 7% financing). For each: identify relevant cash flows, calculate NPV and IRR, perform sensitivity analysis on 5 key variables, perform scenario analysis (best/base/worst case), make recommendation with rationale");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("capstone_project_id", "practical_leasing_finance");
    record4.set("part_number", 2);
    record4.set("deliverable_id", "part2_cash_flow_analysis");
    record4.set("title", "Cash Flow Analysis");
    record4.set("point_value", 5);
    record4.set("requirements", "Prepare detailed cash flow analyses: Lease Option Cash Flows (annual lease payments, tax savings from deductions, maintenance and insurance, residual value, 5-year projection), Buy Option Cash Flows (purchase price, financing costs, tax savings from depreciation and interest, maintenance and insurance, residual value, 5-year projection), Cash Flow Comparison (total undiscounted vs present value, key differences)");
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("capstone_project_id", "practical_leasing_finance");
    record5.set("part_number", 2);
    record5.set("deliverable_id", "part2_financial_metrics_decision_framework");
    record5.set("title", "Financial Metrics and Decision Framework");
    record5.set("point_value", 5);
    record5.set("requirements", "Calculate key metrics: NPV, IRR, Payback Period, Profitability Index, ROI for each option. Sensitivity Analysis: identify 5 key variables, calculate NPV at different levels, create sensitivity tables and charts, identify break-even points. Scenario Analysis: develop best/base/worst case scenarios, calculate NPV and IRR for each, analyze range of outcomes, assess risk. Decision Framework: integrate financial and qualitative factors, develop scoring model, make final recommendations, prepare summary of key findings");
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("capstone_project_id", "practical_leasing_finance");
    record6.set("part_number", 3);
    record6.set("deliverable_id", "part3_adjusted_financial_statements");
    record6.set("title", "Adjusted Financial Statements");
    record6.set("point_value", 8);
    record6.set("requirements", "Prepare adjusted financial statements: Adjusted Balance Sheet (current before ASC 842, pro forma after ASC 842, detailed ROU asset and lease liability presentation, current and non-current classification, impact on total assets/liabilities/equity), Adjusted Income Statement (current before ASC 842, pro forma after ASC 842, detailed lease expense breakdown, operating and net income impact, EPS impact), Adjusted Cash Flow Statement (current before ASC 842, pro forma after ASC 842, lease payment classification, net income to cash flow reconciliation, free cash flow impact)");
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("capstone_project_id", "practical_leasing_finance");
    record7.set("part_number", 3);
    record7.set("deliverable_id", "part3_financial_ratio_analysis");
    record7.set("title", "Financial Ratio Analysis and Interpretation");
    record7.set("point_value", 8);
    record7.set("requirements", "Analyze impact on key ratios: Leverage Ratios (Debt-to-Equity, Debt-to-Assets, Equity Multiplier before and after with analysis), Coverage Ratios (Interest Coverage, Debt Service Coverage before and after with analysis), Profitability Ratios (ROA, ROE, Operating Margin, Net Margin before and after with analysis), Liquidity Ratios (Current Ratio, Quick Ratio before and after with analysis), Adjusted Metrics (adjusted EBITDA, adjusted debt-to-equity, adjusted interest coverage with explanation of purpose and use)");
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("capstone_project_id", "practical_leasing_finance");
    record8.set("part_number", 3);
    record8.set("deliverable_id", "part3_lease_disclosures_investor_communication");
    record8.set("title", "Lease Disclosures and Investor Communication");
    record8.set("point_value", 4);
    record8.set("requirements", "Prepare comprehensive disclosures: Lease Disclosures (footnote disclosures following ASC 842 requirements including lease liability maturity schedule, ROU asset depreciation, lease expense components, lease payment obligations, sample footnote), Investor Communication (memo to investors explaining ASC 842 impact, changes in financial statements, adjusted metrics, business implications, addressing common questions), Segment Reporting (lease impacts by business segment, segment-level ROU assets and liabilities, segment-level lease expense, segment-level implications)");
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("capstone_project_id", "practical_leasing_finance");
    record9.set("part_number", 4);
    record9.set("deliverable_id", "part4_tax_analysis_optimization");
    record9.set("title", "Tax Analysis and Optimization");
    record9.set("point_value", 8);
    record9.set("requirements", "Develop comprehensive tax optimization strategy: Current Tax Position (analyze current tax treatment of leases, identify tax deductions and credits, calculate current tax liability, identify optimization opportunities), Tax Optimization Strategies (develop 5 specific strategies with annual tax savings, present value of tax savings, implementation requirements, risks and considerations, prioritize by impact and feasibility), Tax vs Accounting Treatment (identify differences between tax and book treatment, calculate deferred tax assets and liabilities, prepare deferred tax analysis, discuss uncertain tax positions), Tax Planning Case Studies (develop 3 detailed case studies for major leases analyzing current tax treatment, optimization opportunities, tax savings, implementation plan)");
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("capstone_project_id", "practical_leasing_finance");
    record10.set("part_number", 4);
    record10.set("deliverable_id", "part4_tax_provision_compliance");
    record10.set("title", "Tax Provision and Compliance");
    record10.set("point_value", 7);
    record10.set("requirements", "Prepare tax provision analysis: Tax Provision Calculation (calculate current and deferred tax expense, prepare tax provision reconciliation, analyze effective tax rate), Tax Compliance Documentation (prepare documentation supporting tax positions, identify uncertain tax positions, prepare disclosure of uncertain tax positions, develop audit defense strategy), International Tax Considerations (analyze any international lease implications, consider IFRS 16 vs ASC 842 differences, identify cross-border tax issues, develop international tax strategy)");
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("capstone_project_id", "practical_leasing_finance");
    record11.set("part_number", 5);
    record11.set("deliverable_id", "part5_implementation_plan");
    record11.set("title", "Implementation Plan");
    record11.set("point_value", 5);
    record11.set("requirements", "Develop comprehensive implementation plan: Implementation Roadmap with 5 phases (Phase 1: Lease Identification and Data Collection Weeks 1-4, Phase 2: Lease Classification and Calculation Weeks 5-8, Phase 3: System Implementation Weeks 9-12, Phase 4: Financial Statement Preparation Weeks 13-16, Phase 5: Stakeholder Communication Weeks 17-20), Resource Requirements (personnel, technology, budget, timeline), Risk Management (identify key risks, develop mitigation strategies, establish contingency plans, monitor progress)");
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("capstone_project_id", "practical_leasing_finance");
    record12.set("part_number", 5);
    record12.set("deliverable_id", "part5_internal_controls_governance");
    record12.set("title", "Internal Controls and Governance");
    record12.set("point_value", 5);
    record12.set("requirements", "Design internal controls framework: Lease Approval Process (develop lease approval workflow, define authorization levels, establish documentation requirements, create approval checklist), Lease Accounting Controls (develop lease identification, classification, calculation, and modification controls), Segregation of Duties (define roles and responsibilities, establish segregation of duties matrix, identify key control points, develop monitoring procedures), Documentation and Audit Trail (establish documentation requirements, create audit trail procedures, develop record retention policy, prepare audit documentation)");
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("capstone_project_id", "practical_leasing_finance");
    record13.set("part_number", 5);
    record13.set("deliverable_id", "part5_lease_portfolio_management_system");
    record13.set("title", "Lease Portfolio Management System");
    record13.set("point_value", 5);
    record13.set("requirements", "Design comprehensive lease portfolio management system: Lease Register Design (define structure, identify required data fields, establish data validation rules, create sample register), Lease Tracking and Monitoring (develop tracking procedures, establish compliance monitoring, create payment tracking, develop modification tracking), Portfolio Performance Metrics (calculate WALT, WAC, WAL, portfolio yield, develop performance dashboard), Technology Solutions (evaluate lease accounting software options, prepare comparison matrix, develop implementation plan, prepare cost-benefit analysis)");
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("capstone_project_id", "practical_leasing_finance");
    record14.set("part_number", 6);
    record14.set("deliverable_id", "part6_executive_summary");
    record14.set("title", "Executive Summary");
    record14.set("point_value", 3);
    record14.set("requirements", "Prepare comprehensive executive summary: Current Situation (overview of TechVenture's lease portfolio, current accounting treatment ASC 840, key challenges and opportunities), ASC 842 Implementation (summary of requirements, impact on financial statements and ratios, timeline and resources), Financial Analysis Results (summary of lease vs buy analyses, key findings and recommendations, financial impact), Tax Optimization (summary of strategies, estimated annual tax savings, implementation requirements), Implementation Plan (high-level roadmap, key milestones, resource requirements and budget, risk management), Recommendations (top 5 recommendations, expected benefits and impacts, implementation priorities, success metrics)");
  app.save(record14);

  const record15 = new Record(collection);
    record15.set("capstone_project_id", "practical_leasing_finance");
    record15.set("part_number", 6);
    record15.set("deliverable_id", "part6_comprehensive_report");
    record15.set("title", "Comprehensive Report");
    record15.set("point_value", 4);
    record15.set("requirements", "Prepare 15-20 page written report: Introduction (project overview, company background, objectives), Lease Accounting Implementation (portfolio assessment, classification and calculation, financial statement impacts, documentation), Financial Analysis and Decision-Making (lease vs buy analyses, cash flow analysis, financial metrics, recommendations), Financial Statement Management and Reporting (adjusted statements, ratio analysis, disclosures, investor communication), Tax Planning and Optimization (tax analysis, optimization strategies, provision and compliance, international considerations), Practical Implementation and Best Practices (implementation plan, controls, portfolio management system, technology solutions), Integrated Analysis and Recommendations (executive summary, key findings, top recommendations, implementation roadmap, success metrics), Appendices (detailed calculations, sample lease register, financial statements, disclosures, timeline, budget)");
  app.save(record15);

  const record16 = new Record(collection);
    record16.set("capstone_project_id", "practical_leasing_finance");
    record16.set("part_number", 6);
    record16.set("deliverable_id", "part6_professional_presentation");
    record16.set("title", "Professional Presentation");
    record16.set("point_value", 3);
    record16.set("requirements", "Prepare 20-30 slide professional presentation: Title Slide (project title, student name, date), Executive Summary (2-3 slides: current situation, key findings, top recommendations), Lease Accounting Implementation (3-4 slides: portfolio overview, ASC 842 requirements, financial statement impacts, timeline), Financial Analysis Results (3-4 slides: lease vs buy analyses, key findings, recommendations), Tax Optimization (2-3 slides: strategies, estimated savings, implementation), Implementation Plan (2-3 slides: roadmap, milestones, resources), Recommendations and Next Steps (2-3 slides: top recommendations, expected benefits, priorities), Q&A Slide (contact information, questions)");
  app.save(record16);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})