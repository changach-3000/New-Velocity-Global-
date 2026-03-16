/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("capstone_timeline");

  const record0 = new Record(collection);
    record0.set("capstone_project_id", "practical_leasing_finance");
    record0.set("week_number", 1);
    record0.set("phase_name", "Phase 1: Lease Identification and Data Collection");
    record0.set("activities", "Gather all lease agreements and contracts, Create initial lease inventory, Identify lease characteristics (commencement date, term, payments, options), Classify leases by type (equipment, real estate, vehicles), Document current accounting treatment");
    record0.set("milestones", "Complete lease inventory with 150+ leases identified, All lease agreements collected and organized");
    record0.set("deliverables", "Lease Portfolio Summary, Initial Lease Classification List");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("capstone_project_id", "practical_leasing_finance");
    record1.set("week_number", 2);
    record1.set("phase_name", "Phase 1: Lease Identification and Data Collection");
    record1.set("activities", "Analyze lease terms and conditions, Identify embedded leases and service components, Determine lease classification (operating vs finance), Document lease components and assumptions, Prepare sample lease analysis");
    record1.set("milestones", "Classification of all 150+ leases completed, Sample leases selected for detailed analysis");
    record1.set("deliverables", "Lease Classification Matrix, Sample Lease Analysis (5 leases)");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("capstone_project_id", "practical_leasing_finance");
    record2.set("week_number", 3);
    record2.set("phase_name", "Phase 1: Lease Identification and Data Collection");
    record2.set("activities", "Calculate ROU assets and lease liabilities for sample leases, Determine appropriate discount rates, Prepare initial journal entries, Document lease accounting policies, Validate calculations");
    record2.set("milestones", "ROU asset and liability calculations completed for sample leases, Discount rate methodology documented");
    record2.set("deliverables", "Sample Lease Calculations, Discount Rate Documentation");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("capstone_project_id", "practical_leasing_finance");
    record3.set("week_number", 4);
    record3.set("phase_name", "Phase 1: Lease Identification and Data Collection");
    record3.set("activities", "Complete lease register with all 150+ leases, Calculate total ROU assets and liabilities, Prepare transition adjustments, Document all assumptions and methodologies, Review and validate all data");
    record3.set("milestones", "Complete lease register finalized, Transition adjustments calculated");
    record3.set("deliverables", "Complete Lease Register, Transition Adjustments Documentation");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("capstone_project_id", "practical_leasing_finance");
    record4.set("week_number", 5);
    record4.set("phase_name", "Phase 2: Lease Classification and Calculation");
    record4.set("activities", "Prepare balance sheet impact analysis, Calculate income statement impacts, Analyze cash flow statement impacts, Calculate financial ratios before and after ASC 842");
    record4.set("milestones", "Financial statement impacts quantified, All ratios calculated");
    record4.set("deliverables", "Financial Statement Impact Analysis, Financial Ratio Analysis");
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("capstone_project_id", "practical_leasing_finance");
    record5.set("week_number", 6);
    record5.set("phase_name", "Phase 2: Lease Classification and Calculation");
    record5.set("activities", "Perform lease vs buy analysis for Equipment Lease decision, Identify relevant cash flows, Calculate NPV and IRR, Perform sensitivity analysis, Conduct scenario analysis");
    record5.set("milestones", "Equipment lease vs buy analysis completed with recommendations");
    record5.set("deliverables", "Equipment Lease vs Buy Analysis");
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("capstone_project_id", "practical_leasing_finance");
    record6.set("week_number", 7);
    record6.set("phase_name", "Phase 2: Lease Classification and Calculation");
    record6.set("activities", "Perform lease vs buy analysis for Real Estate Lease decision, Identify relevant cash flows, Calculate NPV and IRR, Perform sensitivity analysis, Conduct scenario analysis");
    record6.set("milestones", "Real estate lease vs buy analysis completed with recommendations");
    record6.set("deliverables", "Real Estate Lease vs Buy Analysis");
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("capstone_project_id", "practical_leasing_finance");
    record7.set("week_number", 8);
    record7.set("phase_name", "Phase 2: Lease Classification and Calculation");
    record7.set("activities", "Perform lease vs buy analysis for Vehicle Fleet Lease decision, Identify relevant cash flows, Calculate NPV and IRR, Perform sensitivity analysis, Conduct scenario analysis, Prepare comprehensive cash flow analysis");
    record7.set("milestones", "Vehicle fleet lease vs buy analysis completed, All lease vs buy analyses finalized");
    record7.set("deliverables", "Vehicle Fleet Lease vs Buy Analysis, Comprehensive Cash Flow Analysis");
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("capstone_project_id", "practical_leasing_finance");
    record8.set("week_number", 9);
    record8.set("phase_name", "Phase 3: System Implementation");
    record8.set("activities", "Prepare adjusted balance sheet, Prepare adjusted income statement, Prepare adjusted cash flow statement, Analyze financial ratio impacts, Calculate adjusted metrics");
    record8.set("milestones", "All adjusted financial statements prepared");
    record8.set("deliverables", "Adjusted Financial Statements");
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("capstone_project_id", "practical_leasing_finance");
    record9.set("week_number", 10);
    record9.set("phase_name", "Phase 3: System Implementation");
    record9.set("activities", "Develop tax optimization strategies, Analyze current tax position, Calculate tax savings for each strategy, Prepare tax vs accounting treatment analysis, Develop tax case studies");
    record9.set("milestones", "Tax optimization strategies developed with savings quantified");
    record9.set("deliverables", "Tax Analysis and Optimization, Tax Case Studies");
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("capstone_project_id", "practical_leasing_finance");
    record10.set("week_number", 11);
    record10.set("phase_name", "Phase 3: System Implementation");
    record10.set("activities", "Develop implementation roadmap with 5 phases, Define resource requirements, Identify key risks and mitigation strategies, Design internal controls framework, Develop lease approval process");
    record10.set("milestones", "Implementation plan and controls framework completed");
    record10.set("deliverables", "Implementation Plan, Internal Controls and Governance Framework");
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("capstone_project_id", "practical_leasing_finance");
    record11.set("week_number", 12);
    record11.set("phase_name", "Phase 3: System Implementation");
    record11.set("activities", "Design lease portfolio management system, Evaluate lease accounting software options, Prepare technology comparison and cost-benefit analysis, Develop lease register design, Create performance metrics dashboard");
    record11.set("milestones", "Lease portfolio management system designed, Technology solutions evaluated");
    record11.set("deliverables", "Lease Portfolio Management System Design, Technology Evaluation");
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("capstone_project_id", "practical_leasing_finance");
    record12.set("week_number", 13);
    record12.set("phase_name", "Phase 4: Financial Statement Preparation");
    record12.set("activities", "Prepare lease disclosures following ASC 842 requirements, Develop investor communication memo, Prepare segment reporting analysis, Compile all financial statement components");
    record12.set("milestones", "All disclosures and investor communications prepared");
    record12.set("deliverables", "Lease Disclosures and Investor Communication");
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("capstone_project_id", "practical_leasing_finance");
    record13.set("week_number", 14);
    record13.set("phase_name", "Phase 4: Financial Statement Preparation");
    record13.set("activities", "Prepare tax provision analysis, Calculate current and deferred tax expense, Prepare tax compliance documentation, Analyze uncertain tax positions, Develop audit defense strategy");
    record13.set("milestones", "Tax provision and compliance documentation completed");
    record13.set("deliverables", "Tax Provision and Compliance Analysis");
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("capstone_project_id", "practical_leasing_finance");
    record14.set("week_number", 15);
    record14.set("phase_name", "Phase 4: Financial Statement Preparation");
    record14.set("activities", "Prepare executive summary of all findings, Compile comprehensive written report (15-20 pages), Organize all appendices and supporting documentation, Review and validate all content");
    record14.set("milestones", "Executive summary and comprehensive report completed");
    record14.set("deliverables", "Executive Summary, Comprehensive Written Report");
  app.save(record14);

  const record15 = new Record(collection);
    record15.set("capstone_project_id", "practical_leasing_finance");
    record15.set("week_number", 16);
    record15.set("phase_name", "Phase 4: Financial Statement Preparation");
    record15.set("activities", "Prepare professional presentation (20-30 slides), Create visual aids and charts, Develop speaker notes, Practice presentation delivery, Final review and quality assurance");
    record15.set("milestones", "Professional presentation completed and ready for delivery");
    record15.set("deliverables", "Professional Presentation (20-30 slides)");
  app.save(record15);

  const record16 = new Record(collection);
    record16.set("capstone_project_id", "practical_leasing_finance");
    record16.set("week_number", 17);
    record16.set("phase_name", "Phase 5: Stakeholder Communication");
    record16.set("activities", "Present capstone project findings to stakeholders, Address questions and feedback, Discuss implementation priorities, Obtain stakeholder buy-in for recommendations");
    record16.set("milestones", "Capstone presentation delivered to stakeholders");
    record16.set("deliverables", "Presentation Delivery and Stakeholder Feedback");
  app.save(record16);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})