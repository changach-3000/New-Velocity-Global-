/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("case_studies");

  const record0 = new Record(collection);
    record0.set("title", "Case Study 1.1: Equipment Lease Decision");
    record0.set("description", "TechManufacturing Inc evaluates lease vs buy decision for manufacturing equipment");
    record0.set("scenario", "TechManufacturing Inc evaluates lease vs buy decision for $2M manufacturing equipment. Requirements: 5-year lease at $45,000/month vs purchase with $500,000 down payment and $50,000/month maintenance. Analysis needed: NPV comparison, cash flow impact, balance sheet impact, accounting treatment.");
    record0.set("requirements", "5-year lease at $45,000/month vs purchase with $500,000 down payment and $50,000/month maintenance. Analysis needed: NPV comparison, cash flow impact, balance sheet impact, accounting treatment.");
    record0.set("analysis_framework", "1) Calculate total lease costs ($45,000 \u00d7 60 months = $2,700,000)\n2) Calculate total purchase costs ($500,000 down + $50,000 \u00d7 60 months = $3,500,000)\n3) Determine appropriate discount rate (company's incremental borrowing rate)\n4) Calculate NPV of each option\n5) Analyze balance sheet impact under ASC 842 (ROU asset and liability)\n6) Evaluate accounting treatment (depreciation and interest expense)\n7) Consider tax implications (depreciation deductions vs lease deductions)\n8) Make recommendation based on financial analysis");
    record0.set("expected_outcome", "Recommendation with financial analysis showing lease vs buy comparison, NPV analysis, balance sheet impact, and accounting treatment. Expected outcome: Lease option likely more favorable due to lower total cost and operational flexibility.");
    record0.set("difficulty_level", "Intermediate");
    record0.set("course_module", "Module 1: Lease Fundamentals");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("title", "Case Study 1.2: Lease Portfolio Analysis");
    record1.set("description", "GlobalLeasing Corp analyzes portfolio of 50 leases totaling $100M");
    record1.set("scenario", "GlobalLeasing Corp analyzes portfolio of 50 leases totaling $100M. Requirements: Classify leases (operating vs finance), calculate total ROU assets and liabilities, analyze financial impact. Analysis needed: Portfolio composition by lease type, accounting impact on financial statements, risk assessment.");
    record1.set("requirements", "Classify leases (operating vs finance), calculate total ROU assets and liabilities, analyze financial impact. Analysis needed: Portfolio composition by lease type, accounting impact on financial statements, risk assessment.");
    record1.set("analysis_framework", "1) Classify each lease based on ASC 842 criteria (lease term, residual value, payment amount, discount rate)\n2) Calculate ROU asset for each lease (lease liability + initial direct costs)\n3) Calculate lease liability for each lease (PV of lease payments)\n4) Aggregate totals across portfolio\n5) Analyze financial statement impact (balance sheet, income statement)\n6) Assess portfolio risks (credit risk, residual value risk, interest rate risk)\n7) Identify optimization opportunities (refinancing, restructuring, securitization)");
    record1.set("expected_outcome", "Portfolio summary showing lease classification breakdown, total ROU assets and liabilities, financial statement impact analysis, and recommendations for portfolio optimization. Expected outcome: Identify high-risk leases and optimization opportunities.");
    record1.set("difficulty_level", "Advanced");
    record1.set("course_module", "Module 1: Lease Fundamentals");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("title", "Case Study 2.1: Synthetic Lease Structure");
    record2.set("description", "RealEstateCorp structures synthetic lease for $50M office building");
    record2.set("scenario", "RealEstateCorp structures synthetic lease for $50M office building. Requirements: Design lease structure, analyze accounting treatment, evaluate tax benefits. Analysis needed: Lease vs ownership comparison, financial impact, risk allocation.");
    record2.set("requirements", "Design lease structure, analyze accounting treatment, evaluate tax benefits. Analysis needed: Lease vs ownership comparison, financial impact, risk allocation.");
    record2.set("analysis_framework", "1) Define synthetic lease structure (combination of lease and financing characteristics)\n2) Analyze accounting treatment under ASC 842 (classification, ROU asset, liability)\n3) Evaluate tax benefits for lessor (depreciation deductions) and lessee (interest deductions)\n4) Compare to traditional lease (cost, accounting, tax differences)\n5) Assess risk allocation (residual value, maintenance, insurance)\n6) Calculate financial impact (NPV, IRR, cash flow)\n7) Identify structuring considerations (regulatory, accounting, tax)");
    record2.set("expected_outcome", "Recommended synthetic lease structure with financial analysis showing accounting treatment, tax benefits, risk allocation, and comparison to traditional lease. Expected outcome: Synthetic structure optimizes accounting and tax treatment for both parties.");
    record2.set("difficulty_level", "Advanced");
    record2.set("course_module", "Module 2: Lease Structuring");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("title", "Case Study 2.2: Lease Securitization");
    record3.set("description", "LeaseSecurities Inc securitizes portfolio of $200M equipment leases");
    record3.set("scenario", "LeaseSecurities Inc securitizes portfolio of $200M equipment leases. Requirements: Structure securitization, analyze cash flows, evaluate investor returns. Analysis needed: Securitization structure, cash flow waterfall, investor tranches, risk analysis.");
    record3.set("requirements", "Structure securitization, analyze cash flows, evaluate investor returns. Analysis needed: Securitization structure, cash flow waterfall, investor tranches, risk analysis.");
    record3.set("analysis_framework", "1) Analyze lease portfolio characteristics (lease terms, payment amounts, credit quality)\n2) Design securitization structure with tranches (senior, mezzanine, equity)\n3) Model cash flow waterfall (lease payments \u2192 tranches \u2192 investors)\n4) Calculate investor returns by tranche (yield, IRR, expected loss)\n5) Assess credit enhancement (reserve funds, insurance, guarantees)\n6) Analyze risks and mitigants (credit risk, prepayment risk, residual value risk)\n7) Evaluate investor appeal (rating, yield, risk profile)");
    record3.set("expected_outcome", "Securitization structure with cash flow waterfall, investor tranche details, expected returns, and risk analysis. Expected outcome: Structure attracts investors with appropriate risk-return profile.");
    record3.set("difficulty_level", "Advanced");
    record3.set("course_module", "Module 2: Lease Structuring");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("title", "Case Study 3.1: Sale-Leaseback Transaction");
    record4.set("description", "ManufacturingCorp executes $75M sale-leaseback of manufacturing facility");
    record4.set("scenario", "ManufacturingCorp executes $75M sale-leaseback of manufacturing facility. Requirements: Structure transaction, analyze capital impact, evaluate tax benefits. Analysis needed: Transaction structure, cash flow impact, balance sheet impact, tax analysis.");
    record4.set("requirements", "Structure transaction, analyze capital impact, evaluate tax benefits. Analysis needed: Transaction structure, cash flow impact, balance sheet impact, tax analysis.");
    record4.set("analysis_framework", "1) Define sale-leaseback structure (sell asset, lease back from buyer)\n2) Analyze sale accounting treatment (gain/loss recognition, timing)\n3) Analyze leaseback accounting under ASC 842 (ROU asset, liability, classification)\n4) Calculate cash flow impact (proceeds from sale, lease payments)\n5) Evaluate balance sheet impact (asset removal, liability addition, equity impact)\n6) Analyze tax benefits (gain recognition, depreciation deductions, lease deductions)\n7) Assess risks and benefits (liquidity, flexibility, cost, control)");
    record4.set("expected_outcome", "Transaction structure with financial analysis showing sale and leaseback accounting, cash flow impact, balance sheet impact, and tax analysis. Expected outcome: Sale-leaseback provides liquidity while maintaining operational control.");
    record4.set("difficulty_level", "Advanced");
    record4.set("course_module", "Module 3: Specialized Lease Structures");
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("title", "Case Study 3.2: Leveraged Lease Syndication");
    record5.set("description", "AircraftLeasing Inc structures $100M leveraged lease with syndication for commercial aircraft");
    record5.set("scenario", "AircraftLeasing Inc structures $100M leveraged lease with syndication for commercial aircraft. Requirements: Design leveraged lease, structure syndication, analyze investor returns. Analysis needed: Lease structure, syndication structure, cash flow analysis, investor returns, risk allocation.");
    record5.set("requirements", "Design leveraged lease, structure syndication, analyze investor returns. Analysis needed: Lease structure, syndication structure, cash flow analysis, investor returns, risk allocation.");
    record5.set("analysis_framework", "1) Analyze aircraft and lease terms (equipment cost, lease term, payment structure)\n2) Design leveraged lease structure with debt (equity investment, debt financing, return targets)\n3) Structure syndication with multiple investors (equity investors, debt investors, roles)\n4) Model cash flows to investors (lease payments, debt service, residual value)\n5) Calculate investor returns and IRR (equity IRR, debt yield, blended return)\n6) Analyze risk allocation (credit risk, residual value risk, operational risk)\n7) Evaluate investor appeal (return profile, risk profile, liquidity)");
    record5.set("expected_outcome", "Leveraged lease structure with syndication details showing investor tranches, cash flows, returns, and risk allocation. Expected outcome: Structure attracts multiple investor classes with appropriate returns.");
    record5.set("difficulty_level", "Advanced");
    record5.set("course_module", "Module 3: Specialized Lease Structures");
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("title", "Case Study 3.3: Cross-Border Lease");
    record6.set("description", "GlobalManufacturing Ltd structures $30M cross-border lease between US lessor and Asian lessee");
    record6.set("scenario", "GlobalManufacturing Ltd structures $30M cross-border lease between US lessor and Asian lessee. Requirements: Design cross-border structure, analyze tax implications, manage currency risk. Analysis needed: Lease structure, tax analysis, currency hedging, regulatory compliance.");
    record6.set("requirements", "Design cross-border structure, analyze tax implications, manage currency risk. Analysis needed: Lease structure, tax analysis, currency hedging, regulatory compliance.");
    record6.set("analysis_framework", "1) Define cross-border lease structure (US lessor, Asian lessee, equipment location)\n2) Analyze US tax treatment (depreciation deductions, withholding taxes, lease classification)\n3) Analyze Asian tax treatment (lease deductions, withholding taxes, local regulations)\n4) Evaluate tax treaty benefits (reduced withholding rates, double taxation avoidance)\n5) Design currency hedging strategy (forward contracts, options, swaps, natural hedges)\n6) Assess regulatory compliance (both jurisdictions, industry regulations, documentation)\n7) Calculate financial impact (tax savings, hedging costs, net benefit)");
    record6.set("expected_outcome", "Cross-border lease structure with tax analysis showing US and Asian tax treatment, currency hedging strategy, and regulatory compliance considerations. Expected outcome: Structure optimizes tax treatment while managing currency risk.");
    record6.set("difficulty_level", "Advanced");
    record6.set("course_module", "Module 3: Specialized Lease Structures");
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("title", "Case Study 4.1: Comprehensive Lease Documentation");
    record7.set("description", "DocumentationCorp prepares comprehensive lease documentation for $5M equipment lease");
    record7.set("scenario", "DocumentationCorp prepares comprehensive lease documentation for $5M equipment lease. Requirements: Draft master lease agreement, equipment schedules, guaranty, security agreement. Analysis needed: Documentation structure, key provisions, risk allocation, compliance.");
    record7.set("requirements", "Draft master lease agreement, equipment schedules, guaranty, security agreement. Analysis needed: Documentation structure, key provisions, risk allocation, compliance.");
    record7.set("analysis_framework", "1) Outline master lease agreement structure (definitions, payment terms, covenants, default, remedies)\n2) Define key provisions and terms (lease term, payment amount, residual value, options)\n3) Prepare equipment schedule (equipment description, serial numbers, location, condition)\n4) Draft guaranty provisions (personal or corporate guarantee, scope, enforcement)\n5) Prepare security agreement (security interest, UCC filing, enforcement rights)\n6) Analyze risk allocation (lessor protections, lessee obligations, dispute resolution)\n7) Ensure compliance with regulations (UCC, consumer protection, industry standards)");
    record7.set("expected_outcome", "Complete lease documentation package including master lease agreement outline, equipment schedule template, guaranty provisions, security agreement outline, and analysis of key provisions and risk allocation.");
    record7.set("difficulty_level", "Intermediate");
    record7.set("course_module", "Module 4: Lease Documentation and Compliance");
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("title", "Case Study 4.2: Lease Accounting and Financial Reporting");
    record8.set("description", "FinancialReportingCorp accounts for portfolio of 20 leases totaling $50M under ASC 842 and IFRS 16");
    record8.set("scenario", "FinancialReportingCorp accounts for portfolio of 20 leases totaling $50M under ASC 842 and IFRS 16. Requirements: Calculate ROU assets and liabilities, prepare accounting entries, analyze financial impact. Analysis needed: Lease classification, accounting calculations, financial statement impact, disclosures.");
    record8.set("requirements", "Calculate ROU assets and liabilities, prepare accounting entries, analyze financial impact. Analysis needed: Lease classification, accounting calculations, financial statement impact, disclosures.");
    record8.set("analysis_framework", "1) Classify each lease (operating vs finance based on ASC 842 criteria)\n2) Calculate ROU asset for each lease (lease liability + initial direct costs)\n3) Calculate lease liability for each lease (PV of lease payments at discount rate)\n4) Prepare initial accounting entries (ROU asset, lease liability, initial direct costs)\n5) Prepare subsequent period entries (depreciation, interest expense, liability reduction)\n6) Analyze financial statement impact (balance sheet, income statement, cash flow)\n7) Prepare required disclosures (lease terms, ROU assets, liabilities, future payments)");
    record8.set("expected_outcome", "Accounting analysis with lease classification summary, ROU asset and liability calculations, accounting entries, financial statement impact analysis, and required disclosures.");
    record8.set("difficulty_level", "Advanced");
    record8.set("course_module", "Module 4: Lease Documentation and Compliance");
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("title", "Case Study 4.3: Integrated Risk Management and Structuring");
    record9.set("description", "IntegratedLeasing Corp structures $80M lease portfolio with comprehensive risk management");
    record9.set("scenario", "IntegratedLeasing Corp structures $80M lease portfolio with comprehensive risk management. Requirements: Identify risks, assess risks, implement mitigation strategies, apply best practices. Analysis needed: Risk identification and assessment, mitigation strategies, structuring checklist, monitoring plan.");
    record9.set("requirements", "Identify risks, assess risks, implement mitigation strategies, apply best practices. Analysis needed: Risk identification and assessment, mitigation strategies, structuring checklist, monitoring plan.");
    record9.set("analysis_framework", "1) Identify credit, operational, market, legal, compliance risks\n2) Assess risk probability and impact (high/medium/low for each risk)\n3) Design mitigation strategies (insurance, guarantees, covenants, diversification)\n4) Apply structuring best practices (clear documentation, risk allocation, compliance)\n5) Develop monitoring plan (payment tracking, covenant compliance, financial metrics)\n6) Create compliance checklist (regulatory, accounting, tax, industry)\n7) Document risk management framework (policies, procedures, escalation)");
    record9.set("expected_outcome", "Comprehensive risk management plan with risk identification and assessment, mitigation strategies, structuring best practices checklist, and monitoring and reporting plan.");
    record9.set("difficulty_level", "Advanced");
    record9.set("course_module", "Module 4: Lease Documentation and Compliance");
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("title", "Case Study 4.4: Capstone - Complete Lease Transaction");
    record10.set("description", "CapstoneLeasing Inc structures complete $150M lease transaction including documentation, accounting, and risk management");
    record10.set("scenario", "CapstoneLeasing Inc structures complete $150M lease transaction including documentation, accounting, and risk management. Requirements: Design lease structure, prepare documentation, analyze accounting treatment, implement risk management. Analysis needed: Complete transaction analysis including structure, documentation, accounting, tax, risk management.");
    record10.set("requirements", "Design lease structure, prepare documentation, analyze accounting treatment, implement risk management. Analysis needed: Complete transaction analysis including structure, documentation, accounting, tax, risk management.");
    record10.set("analysis_framework", "1) Design lease structure and terms (equipment, term, payments, residual value, options)\n2) Prepare comprehensive documentation (master lease, schedules, guaranty, security agreement)\n3) Analyze accounting treatment under ASC 842 and IFRS 16 (classification, ROU asset, liability)\n4) Evaluate tax implications (depreciation, interest deductions, withholding taxes)\n5) Identify and assess risks (credit, operational, market, legal, compliance)\n6) Design risk mitigation strategies (insurance, guarantees, covenants, monitoring)\n7) Prepare complete transaction analysis (structure, documentation, accounting, tax, risk)");
    record10.set("expected_outcome", "Comprehensive transaction analysis covering lease structure design, documentation outline, accounting analysis, tax analysis, risk management plan, and complete transaction summary.");
    record10.set("difficulty_level", "Advanced");
    record10.set("course_module", "Module 4: Lease Documentation and Compliance");
  app.save(record10);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})