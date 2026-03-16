/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("capstone_grading_rubric");

  const record0 = new Record(collection);
    record0.set("capstone_project_id", "practical_leasing_finance");
    record0.set("rubric_section", "Part 1: Lease Portfolio Assessment");
    record0.set("criteria", "Lease Portfolio Assessment");
    record0.set("points_possible", 5);
    record0.set("excellent_description", "Comprehensive identification of all 150+ leases with detailed classification and clear rationale for all sample leases. Embedded leases and service components properly identified. Classification matrix is complete and well-organized.");
    record0.set("good_description", "Identification of most leases with generally accurate classification. Rationale provided for sample leases. Classification matrix is mostly complete.");
    record0.set("satisfactory_description", "Identification of majority of leases with some classification issues. Limited rationale provided. Classification matrix is present but incomplete.");
    record0.set("needs_improvement_description", "Incomplete lease identification or significant classification errors. Minimal rationale provided. Classification matrix is incomplete or unclear.");
    record0.set("failing_description", "Significant gaps in lease identification or major classification errors. No clear rationale. Classification matrix missing or inaccurate.");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("capstone_project_id", "practical_leasing_finance");
    record1.set("rubric_section", "Part 1: Financial Statement Impact Analysis");
    record1.set("criteria", "Financial Statement Impact Analysis");
    record1.set("points_possible", 10);
    record1.set("excellent_description", "Accurate balance sheet, income statement, and cash flow impacts with detailed analysis. All 10 financial ratios calculated correctly with thorough interpretation. Adjusted metrics properly calculated and explained. Clear presentation of all impacts.");
    record1.set("good_description", "Accurate financial statement impacts with good analysis. Most ratios calculated correctly with adequate interpretation. Adjusted metrics calculated correctly. Clear presentation.");
    record1.set("satisfactory_description", "Generally accurate financial statement impacts with basic analysis. Some ratio calculation errors or incomplete interpretation. Adjusted metrics present but may have minor errors. Adequate presentation.");
    record1.set("needs_improvement_description", "Some financial statement impact errors or incomplete analysis. Multiple ratio calculation errors or weak interpretation. Adjusted metrics incomplete or incorrect. Presentation could be clearer.");
    record1.set("failing_description", "Significant financial statement impact errors or missing analysis. Major ratio calculation errors or no interpretation. Adjusted metrics missing or incorrect. Poor presentation.");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("capstone_project_id", "practical_leasing_finance");
    record2.set("rubric_section", "Part 1: Lease Accounting Documentation");
    record2.set("criteria", "Lease Accounting Documentation");
    record2.set("points_possible", 5);
    record2.set("excellent_description", "Complete lease register with all required fields and proper organization. Discount rate methodology thoroughly documented with sensitivity analysis. Lease modifications clearly tracked. Transition adjustments accurately calculated and reconciled.");
    record2.set("good_description", "Comprehensive lease register with most required fields. Discount rate methodology documented. Lease modifications tracked. Transition adjustments calculated.");
    record2.set("satisfactory_description", "Lease register present with most fields. Basic discount rate documentation. Lease modifications noted. Transition adjustments present but may have minor errors.");
    record2.set("needs_improvement_description", "Incomplete lease register or missing fields. Limited discount rate documentation. Lease modifications incomplete. Transition adjustments incomplete or unclear.");
    record2.set("failing_description", "Incomplete or inaccurate lease register. Inadequate discount rate documentation. Lease modifications missing. Transition adjustments missing or incorrect.");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("capstone_project_id", "practical_leasing_finance");
    record3.set("rubric_section", "Part 2: Lease vs Buy Analysis");
    record3.set("criteria", "Lease vs Buy Analysis");
    record3.set("points_possible", 10);
    record3.set("excellent_description", "All relevant cash flows identified for all three decisions. NPV and IRR calculations accurate. Sensitivity analysis thorough with 5+ variables. Scenario analysis complete with best/base/worst cases. Recommendations well-supported by analysis.");
    record3.set("good_description", "Most relevant cash flows identified. NPV and IRR calculations mostly accurate. Sensitivity analysis covers 5 variables. Scenario analysis present. Recommendations supported by analysis.");
    record3.set("satisfactory_description", "Key cash flows identified but some may be missing. NPV and IRR calculations generally correct. Sensitivity analysis present but may be incomplete. Scenario analysis basic. Recommendations present.");
    record3.set("needs_improvement_description", "Some cash flows missing or incorrect. NPV or IRR calculation errors. Sensitivity analysis incomplete. Scenario analysis limited. Recommendations weak.");
    record3.set("failing_description", "Major cash flows missing or incorrect. Significant NPV or IRR errors. Sensitivity analysis missing or inadequate. Scenario analysis missing. Recommendations unsupported.");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("capstone_project_id", "practical_leasing_finance");
    record4.set("rubric_section", "Part 2: Cash Flow Analysis");
    record4.set("criteria", "Cash Flow Analysis");
    record4.set("points_possible", 5);
    record4.set("excellent_description", "Complete lease and buy option cash flows with all relevant components. Accurate calculations. Clear comparison of options. 5-year projections detailed and accurate.");
    record4.set("good_description", "Comprehensive lease and buy option cash flows. Mostly accurate calculations. Clear comparison. Projections present.");
    record4.set("satisfactory_description", "Lease and buy option cash flows present with most components. Generally accurate. Comparison present. Projections basic.");
    record4.set("needs_improvement_description", "Incomplete cash flows or missing components. Some calculation errors. Comparison limited. Projections incomplete.");
    record4.set("failing_description", "Incomplete or inaccurate cash flows. Major calculation errors. Comparison missing. Projections missing or incorrect.");
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("capstone_project_id", "practical_leasing_finance");
    record5.set("rubric_section", "Part 2: Financial Metrics and Decision Framework");
    record5.set("criteria", "Financial Metrics and Decision Framework");
    record5.set("points_possible", 5);
    record5.set("excellent_description", "All financial metrics (NPV, IRR, Payback, PI, ROI) accurately calculated. Sensitivity analysis thorough with clear break-even identification. Scenario analysis complete with risk assessment. Decision framework well-developed and integrated.");
    record5.set("good_description", "All financial metrics calculated correctly. Sensitivity analysis adequate. Scenario analysis present. Decision framework developed.");
    record5.set("satisfactory_description", "Most financial metrics calculated. Sensitivity analysis present but basic. Scenario analysis basic. Decision framework present.");
    record5.set("needs_improvement_description", "Some financial metrics missing or incorrect. Sensitivity analysis incomplete. Scenario analysis limited. Decision framework underdeveloped.");
    record5.set("failing_description", "Multiple financial metrics missing or incorrect. Sensitivity analysis inadequate. Scenario analysis missing. Decision framework missing or unclear.");
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("capstone_project_id", "practical_leasing_finance");
    record6.set("rubric_section", "Part 3: Adjusted Financial Statements");
    record6.set("criteria", "Adjusted Financial Statements");
    record6.set("points_possible", 8);
    record6.set("excellent_description", "All three financial statements (balance sheet, income statement, cash flow) accurately prepared with detailed ROU asset and lease liability presentation. Current and non-current classification correct. All impacts clearly shown and explained.");
    record6.set("good_description", "All three financial statements prepared with good detail. ROU asset and lease liability presentation clear. Classification correct. Impacts shown.");
    record6.set("satisfactory_description", "All three financial statements present with adequate detail. ROU asset and lease liability presentation adequate. Classification mostly correct. Impacts shown.");
    record6.set("needs_improvement_description", "Financial statements present but may have errors or incomplete detail. ROU asset and lease liability presentation incomplete. Classification issues. Impacts not fully shown.");
    record6.set("failing_description", "Financial statements incomplete or inaccurate. ROU asset and lease liability presentation inadequate. Classification errors. Impacts missing.");
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("capstone_project_id", "practical_leasing_finance");
    record7.set("rubric_section", "Part 3: Financial Ratio Analysis and Interpretation");
    record7.set("criteria", "Financial Ratio Analysis and Interpretation");
    record7.set("points_possible", 8);
    record7.set("excellent_description", "All leverage, coverage, profitability, and liquidity ratios calculated accurately. Thorough analysis and interpretation of each ratio. Adjusted metrics properly calculated and explained. Clear presentation of impacts.");
    record7.set("good_description", "All ratios calculated correctly. Good analysis and interpretation. Adjusted metrics calculated correctly. Clear presentation.");
    record7.set("satisfactory_description", "Most ratios calculated correctly. Basic analysis and interpretation. Adjusted metrics present. Adequate presentation.");
    record7.set("needs_improvement_description", "Some ratio calculation errors. Limited analysis or interpretation. Adjusted metrics incomplete. Presentation could be clearer.");
    record7.set("failing_description", "Multiple ratio calculation errors. Minimal analysis or interpretation. Adjusted metrics missing or incorrect. Poor presentation.");
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("capstone_project_id", "practical_leasing_finance");
    record8.set("rubric_section", "Part 3: Lease Disclosures and Investor Communication");
    record8.set("criteria", "Lease Disclosures and Investor Communication");
    record8.set("points_possible", 4);
    record8.set("excellent_description", "Comprehensive lease disclosures following ASC 842 requirements. Investor memo clearly explains impacts and addresses common questions. Segment reporting thorough and insightful.");
    record8.set("good_description", "Complete lease disclosures. Investor memo clear and informative. Segment reporting present.");
    record8.set("satisfactory_description", "Lease disclosures present with most required elements. Investor memo adequate. Segment reporting basic.");
    record8.set("needs_improvement_description", "Lease disclosures incomplete. Investor memo limited. Segment reporting incomplete.");
    record8.set("failing_description", "Lease disclosures inadequate. Investor memo missing or unclear. Segment reporting missing.");
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("capstone_project_id", "practical_leasing_finance");
    record9.set("rubric_section", "Part 4: Tax Analysis and Optimization");
    record9.set("criteria", "Tax Analysis and Optimization");
    record9.set("points_possible", 8);
    record9.set("excellent_description", "Current tax position thoroughly analyzed. Five tax optimization strategies well-developed with accurate tax savings calculations. Tax vs accounting treatment clearly explained. Case studies detailed and insightful.");
    record9.set("good_description", "Current tax position analyzed. Tax optimization strategies developed with mostly accurate calculations. Tax vs accounting treatment explained. Case studies present.");
    record9.set("satisfactory_description", "Current tax position identified. Tax optimization strategies present with basic calculations. Tax vs accounting treatment addressed. Case studies basic.");
    record9.set("needs_improvement_description", "Current tax position incomplete. Tax optimization strategies limited or calculations inaccurate. Tax vs accounting treatment incomplete. Case studies limited.");
    record9.set("failing_description", "Current tax position inadequate. Tax optimization strategies missing or inaccurate. Tax vs accounting treatment missing. Case studies missing.");
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("capstone_project_id", "practical_leasing_finance");
    record10.set("rubric_section", "Part 4: Tax Provision and Compliance");
    record10.set("criteria", "Tax Provision and Compliance");
    record10.set("points_possible", 7);
    record10.set("excellent_description", "Tax provision accurately calculated with clear reconciliation. Compliance documentation thorough and audit-ready. International tax considerations well-analyzed.");
    record10.set("good_description", "Tax provision calculated correctly. Compliance documentation adequate. International tax considerations addressed.");
    record10.set("satisfactory_description", "Tax provision present with minor errors. Compliance documentation basic. International tax considerations mentioned.");
    record10.set("needs_improvement_description", "Tax provision incomplete or inaccurate. Compliance documentation limited. International tax considerations incomplete.");
    record10.set("failing_description", "Tax provision missing or significantly inaccurate. Compliance documentation inadequate. International tax considerations missing.");
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("capstone_project_id", "practical_leasing_finance");
    record11.set("rubric_section", "Part 5: Implementation Plan");
    record11.set("criteria", "Implementation Plan");
    record11.set("points_possible", 5);
    record11.set("excellent_description", "Comprehensive 5-phase implementation roadmap with detailed activities and milestones. Resource requirements realistic and well-documented. Risk management thorough with mitigation strategies.");
    record11.set("good_description", "Complete implementation roadmap with clear phases and milestones. Resource requirements documented. Risk management addressed.");
    record11.set("satisfactory_description", "Implementation roadmap present with adequate detail. Resource requirements identified. Risk management basic.");
    record11.set("needs_improvement_description", "Implementation roadmap incomplete or unclear. Resource requirements incomplete. Risk management limited.");
    record11.set("failing_description", "Implementation roadmap inadequate. Resource requirements missing. Risk management missing.");
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("capstone_project_id", "practical_leasing_finance");
    record12.set("rubric_section", "Part 5: Internal Controls and Governance");
    record12.set("criteria", "Internal Controls and Governance");
    record12.set("points_possible", 5);
    record12.set("excellent_description", "Comprehensive lease approval process with clear authorization levels. Lease accounting controls well-designed. Segregation of duties matrix complete. Documentation and audit trail procedures thorough.");
    record12.set("good_description", "Lease approval process clear. Lease accounting controls designed. Segregation of duties addressed. Documentation procedures present.");
    record12.set("satisfactory_description", "Lease approval process present. Lease accounting controls basic. Segregation of duties identified. Documentation procedures basic.");
    record12.set("needs_improvement_description", "Lease approval process incomplete. Lease accounting controls limited. Segregation of duties incomplete. Documentation procedures incomplete.");
    record12.set("failing_description", "Lease approval process inadequate. Lease accounting controls missing. Segregation of duties missing. Documentation procedures missing.");
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("capstone_project_id", "practical_leasing_finance");
    record13.set("rubric_section", "Part 5: Lease Portfolio Management System");
    record13.set("criteria", "Lease Portfolio Management System");
    record13.set("points_possible", 5);
    record13.set("excellent_description", "Lease register design comprehensive with all required fields and validation rules. Tracking and monitoring procedures thorough. Portfolio performance metrics complete. Technology evaluation detailed with cost-benefit analysis.");
    record13.set("good_description", "Lease register design complete. Tracking and monitoring procedures adequate. Portfolio performance metrics present. Technology evaluation present.");
    record13.set("satisfactory_description", "Lease register design adequate. Tracking and monitoring procedures basic. Portfolio performance metrics basic. Technology evaluation basic.");
    record13.set("needs_improvement_description", "Lease register design incomplete. Tracking and monitoring procedures limited. Portfolio performance metrics incomplete. Technology evaluation limited.");
    record13.set("failing_description", "Lease register design inadequate. Tracking and monitoring procedures missing. Portfolio performance metrics missing. Technology evaluation missing.");
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("capstone_project_id", "practical_leasing_finance");
    record14.set("rubric_section", "Part 6: Executive Summary");
    record14.set("criteria", "Executive Summary");
    record14.set("points_possible", 3);
    record14.set("excellent_description", "Clear and concise executive summary covering all key elements. Current situation well-described. Key findings and recommendations compelling and well-supported.");
    record14.set("good_description", "Executive summary covers key elements. Current situation described. Key findings and recommendations clear.");
    record14.set("satisfactory_description", "Executive summary present with adequate coverage. Current situation identified. Key findings and recommendations present.");
    record14.set("needs_improvement_description", "Executive summary incomplete. Current situation incomplete. Key findings and recommendations limited.");
    record14.set("failing_description", "Executive summary inadequate. Current situation missing. Key findings and recommendations missing.");
  app.save(record14);

  const record15 = new Record(collection);
    record15.set("capstone_project_id", "practical_leasing_finance");
    record15.set("rubric_section", "Part 6: Comprehensive Report");
    record15.set("criteria", "Comprehensive Report");
    record15.set("points_possible", 4);
    record15.set("excellent_description", "Well-organized 15-20 page report with clear structure and logical flow. Writing is clear and professional. All required content included. Professional formatting with proper citations.");
    record15.set("good_description", "Organized report with good structure. Clear writing. Most content included. Professional formatting.");
    record15.set("satisfactory_description", "Report organized with adequate structure. Adequate writing. Content mostly included. Adequate formatting.");
    record15.set("needs_improvement_description", "Report organization could be improved. Writing could be clearer. Some content missing. Formatting issues.");
    record15.set("failing_description", "Report poorly organized. Writing unclear. Significant content missing. Poor formatting.");
  app.save(record15);

  const record16 = new Record(collection);
    record16.set("capstone_project_id", "practical_leasing_finance");
    record16.set("rubric_section", "Part 6: Professional Presentation");
    record16.set("criteria", "Professional Presentation");
    record16.set("points_possible", 3);
    record16.set("excellent_description", "20-30 slide presentation with excellent visual design and clarity. All required content included. Professional delivery-ready presentation.");
    record16.set("good_description", "Presentation with good visual design. Content complete. Professional appearance.");
    record16.set("satisfactory_description", "Presentation with adequate visual design. Most content included. Adequate appearance.");
    record16.set("needs_improvement_description", "Presentation visual design could be improved. Some content missing. Appearance could be more professional.");
    record16.set("failing_description", "Presentation poorly designed. Significant content missing. Unprofessional appearance.");
  app.save(record16);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})