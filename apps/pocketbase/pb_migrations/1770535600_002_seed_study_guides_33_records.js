/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("study_guides");

  const record0 = new Record(collection);
    record0.set("title", "Strategic Lease Planning Framework Study Guide");
    record0.set("lesson_id", "lesson_1_1");
    record0.set("part_number", 1);
    record0.set("content_type", "study_guide");
    record0.set("description", "Comprehensive study guide covering strategic planning fundamentals, 5-phase planning process, stakeholder analysis, strategic decision framework, and 10 practice questions with answers");
    record0.set("file_type", "pdf");
    record0.set("is_downloadable", true);
    record0.set("content_summary", "Key concepts, learning objectives, 15 key terms, 5-phase process overview, strategic objectives, stakeholder analysis, decision framework, practice questions, real-world examples, study tips");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("title", "Financial Analysis and Lease Evaluation Study Guide");
    record1.set("lesson_id", "lesson_1_2");
    record1.set("part_number", 1);
    record1.set("content_type", "study_guide");
    record1.set("description", "Comprehensive study guide covering NPV, IRR, cash flow analysis, sensitivity analysis, calculation examples, and 10 practice problems with solutions");
    record1.set("file_type", "pdf");
    record1.set("is_downloadable", true);
    record1.set("content_summary", "Key concepts, learning objectives, 15 key terms, NPV step-by-step guide, IRR methodology, 5 cash flow components, sensitivity analysis, calculation examples, practice problems, common mistakes");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("title", "Lease vs Buy Decision Framework Study Guide");
    record2.set("lesson_id", "lesson_1_3");
    record2.set("part_number", 1);
    record2.set("content_type", "study_guide");
    record2.set("description", "Comprehensive study guide covering lease vs buy comparison, qualitative factors, risk comparison, strategic considerations, and 8 practice scenarios with solutions");
    record2.set("file_type", "pdf");
    record2.set("is_downloadable", true);
    record2.set("content_summary", "Key concepts, learning objectives, 15 key terms, financial comparison framework, qualitative factors analysis, risk comparison matrix, strategic considerations, decision-making process, comparison tables, practice scenarios");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("title", "Strategic Lease Planning and Analysis - Part 1 Comprehensive Study Guide");
    record3.set("lesson_id", null);
    record3.set("part_number", 1);
    record3.set("content_type", "part_study_guide");
    record3.set("description", "Comprehensive study guide for Part 1 covering all 3 lessons, integrated concepts map, key formulas, strategic planning framework, financial analysis toolkit, lease vs buy decision matrix, 3 case studies, and 20 practice exam questions");
    record3.set("file_type", "pdf");
    record3.set("is_downloadable", true);
    record3.set("content_summary", "Course overview, Part 1 summary, integrated concepts map, key formulas reference, strategic planning framework, financial analysis toolkit, lease vs buy decision matrix, case study analysis guide, 20 practice exam questions with answers, 3-week study schedule");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("title", "Tax Optimization Strategies Study Guide");
    record4.set("lesson_id", "lesson_2_1");
    record4.set("part_number", 2);
    record4.set("content_type", "study_guide");
    record4.set("description", "Comprehensive study guide covering lease tax treatment, operating lease tax benefits, finance lease tax considerations, tax optimization strategies, international tax considerations, and 10 practice problems");
    record4.set("file_type", "pdf");
    record4.set("is_downloadable", true);
    record4.set("content_summary", "Key concepts, learning objectives, 15 key terms, lease tax fundamentals, 5 operating lease tax benefits, 5 finance lease considerations, 5 tax optimization strategies, international tax considerations, calculation examples, practice problems, common mistakes");
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("title", "Accounting Optimization and Financial Engineering Study Guide");
    record5.set("lesson_id", "lesson_2_2");
    record5.set("part_number", 2);
    record5.set("content_type", "study_guide");
    record5.set("description", "Comprehensive study guide covering ASC 842 and IFRS 16 optimization, financial ratio optimization, financial engineering techniques, ROU asset and lease liability calculations, and 10 practice problems");
    record5.set("file_type", "pdf");
    record5.set("is_downloadable", true);
    record5.set("content_summary", "Key concepts, learning objectives, 15 key terms, accounting optimization fundamentals, 5 ASC 842 techniques, 5 IFRS 16 techniques, 5 financial ratio optimization, 5 financial engineering techniques, ROU and liability calculations, practice problems, accounting treatment comparison tables");
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("title", "Advanced Structuring and Financial Strategies Study Guide");
    record6.set("lesson_id", "lesson_2_3");
    record6.set("part_number", 2);
    record6.set("content_type", "study_guide");
    record6.set("description", "Comprehensive study guide covering leveraged leases, syndication structures, securitization structures, residual value management, investor return calculations, and 8 practice scenarios");
    record6.set("file_type", "pdf");
    record6.set("is_downloadable", true);
    record6.set("content_summary", "Key concepts, learning objectives, 15 key terms, advanced structuring fundamentals, leveraged lease structures, 5 syndication types, securitization process and tranches, 5 residual value strategies, structure comparison matrices, practice scenarios, investor return calculations");
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("title", "Advanced Lease Optimization Techniques - Part 2 Comprehensive Study Guide");
    record7.set("lesson_id", null);
    record7.set("part_number", 2);
    record7.set("content_type", "part_study_guide");
    record7.set("description", "Comprehensive study guide for Part 2 covering all 3 lessons, integrated concepts map, tax optimization toolkit, accounting treatment reference, financial engineering techniques, structuring decision framework, 3 case studies, and 20 practice exam questions");
    record7.set("file_type", "pdf");
    record7.set("is_downloadable", true);
    record7.set("content_summary", "Course overview, Part 2 summary, integrated concepts map, tax optimization toolkit, accounting treatment reference (ASC 842 vs IFRS 16), financial engineering techniques overview, structuring decision framework, case study analysis guide, 20 practice exam questions with answers, 3-week study schedule");
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("title", "Lease Portfolio Management Study Guide");
    record8.set("lesson_id", "lesson_3_1");
    record8.set("part_number", 3);
    record8.set("content_type", "study_guide");
    record8.set("description", "Comprehensive study guide covering portfolio management fundamentals, portfolio composition analysis, performance metrics (WALT, WAC, WAL, Yield, Duration), optimization strategies, and 10 practice problems");
    record8.set("file_type", "pdf");
    record8.set("is_downloadable", true);
    record8.set("content_summary", "Key concepts, learning objectives, 15 key terms, portfolio management fundamentals, 5 composition analysis types, 5 performance metrics with formulas, 5 optimization strategies, monitoring framework, metric calculation examples, practice problems, portfolio analysis templates");
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("title", "Risk Assessment and Management Study Guide");
    record9.set("lesson_id", "lesson_3_2");
    record9.set("part_number", 3);
    record9.set("content_type", "study_guide");
    record9.set("description", "Comprehensive study guide covering risk identification, credit risk management, residual value risk, operational risk, market risk, risk assessment frameworks, and 8 practice scenarios");
    record9.set("file_type", "pdf");
    record9.set("is_downloadable", true);
    record9.set("content_summary", "Key concepts, learning objectives, 15 key terms, risk management fundamentals, credit risk assessment and mitigation, residual value risk management, operational risk management, market risk management, risk assessment frameworks and matrices, risk mitigation strategies, practice scenarios, risk monitoring dashboards");
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("title", "Advanced Portfolio Strategies Study Guide");
    record10.set("lesson_id", "lesson_3_3");
    record10.set("part_number", 3);
    record10.set("content_type", "study_guide");
    record10.set("description", "Comprehensive study guide covering securitization strategies, syndication strategies, hedging strategies, exit strategies, implementation roadmaps, and 8 practice scenarios");
    record10.set("file_type", "pdf");
    record10.set("is_downloadable", true);
    record10.set("content_summary", "Key concepts, learning objectives, 15 key terms, advanced strategies fundamentals, 5 securitization types, 5 syndication types, 5 hedging types, 5 exit strategies, strategy comparison matrices, implementation roadmaps, practice scenarios, return and risk analysis");
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("title", "Lease Portfolio Management and Risk - Part 3 Comprehensive Study Guide");
    record11.set("lesson_id", null);
    record11.set("part_number", 3);
    record11.set("content_type", "part_study_guide");
    record11.set("description", "Comprehensive study guide for Part 3 covering all 3 lessons, integrated concepts map, portfolio management toolkit, risk management framework, advanced strategies overview, portfolio monitoring templates, 3 case studies, and 20 practice exam questions");
    record11.set("file_type", "pdf");
    record11.set("is_downloadable", true);
    record11.set("content_summary", "Course overview, Part 3 summary, integrated concepts map, portfolio management toolkit, risk management framework, advanced strategies overview, portfolio monitoring and reporting templates, case study analysis guide, 20 practice exam questions with answers, 3-week study schedule");
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("title", "ESG and Sustainable Leasing Study Guide");
    record12.set("lesson_id", "lesson_4_1");
    record12.set("part_number", 4);
    record12.set("content_type", "study_guide");
    record12.set("description", "Comprehensive study guide covering ESG fundamentals, environmental considerations, social considerations, governance considerations, ESG metrics and reporting, assessment tools, and 8 practice scenarios");
    record12.set("file_type", "pdf");
    record12.set("is_downloadable", true);
    record12.set("content_summary", "Key concepts, learning objectives, 15 key terms, ESG fundamentals, 5 environmental considerations, 5 social considerations, 5 governance considerations, ESG metrics and reporting framework, assessment tools and frameworks, practice scenarios, ESG reporting templates");
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("title", "Technology and Digital Transformation Study Guide");
    record13.set("lesson_id", "lesson_4_2");
    record13.set("part_number", 4);
    record13.set("content_type", "study_guide");
    record13.set("description", "Comprehensive study guide covering technology fundamentals, AI and machine learning applications, blockchain applications, IoT applications, data analytics applications, implementation roadmap, and 8 practice scenarios");
    record13.set("file_type", "pdf");
    record13.set("is_downloadable", true);
    record13.set("content_summary", "Key concepts, learning objectives, 15 key terms, technology fundamentals, 5 AI/ML applications, 5 blockchain applications, 5 IoT applications, 5 data analytics applications, technology implementation roadmap, digital transformation case studies, practice scenarios, technology ROI analysis");
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("title", "Market Trends and Future Strategies Study Guide");
    record14.set("lesson_id", "lesson_4_3");
    record14.set("part_number", 4);
    record14.set("content_type", "study_guide");
    record14.set("description", "Comprehensive study guide covering market trends, mobility trends, real estate trends, equipment trends, alternative assets, trend analysis framework, future strategy development, and 8 practice scenarios");
    record14.set("file_type", "pdf");
    record14.set("is_downloadable", true);
    record14.set("content_summary", "Key concepts, learning objectives, 15 key terms, market trends fundamentals, 5 mobility trends, 5 real estate trends, 5 equipment trends, 5 alternative asset opportunities, trend analysis framework, future strategy development process, practice scenarios, market opportunity assessment");
  app.save(record14);

  const record15 = new Record(collection);
    record15.set("title", "Emerging Trends and Future Strategies - Part 4 Comprehensive Study Guide");
    record15.set("lesson_id", null);
    record15.set("part_number", 4);
    record15.set("content_type", "part_study_guide");
    record15.set("description", "Comprehensive study guide for Part 4 covering all 3 lessons, integrated concepts map, ESG framework and implementation guide, technology transformation toolkit, market trends analysis framework, future strategy development process, 3 case studies, and 20 practice exam questions");
    record15.set("file_type", "pdf");
    record15.set("is_downloadable", true);
    record15.set("content_summary", "Course overview, Part 4 summary, integrated concepts map, ESG framework and implementation guide, technology transformation toolkit, market trends analysis framework, future strategy development process, case study analysis guide, 20 practice exam questions with answers, 3-week study schedule");
  app.save(record15);

  const record16 = new Record(collection);
    record16.set("title", "Strategic Lease Planning Framework Glossary");
    record16.set("lesson_id", "lesson_1_1");
    record16.set("part_number", 1);
    record16.set("content_type", "glossary");
    record16.set("description", "Comprehensive glossary of 15 key terms for Strategic Lease Planning Framework lesson including strategic lease planning, lease planning process, cost optimization, cash flow management, balance sheet optimization, risk management, operational flexibility, stakeholder analysis, and team roles");
    record16.set("file_type", "pdf");
    record16.set("is_downloadable", true);
    record16.set("terms_count", 15);
    record16.set("content_summary", "15 terms: Strategic Lease Planning, Lease Planning Process, Cost Optimization, Cash Flow Management, Balance Sheet Optimization, Risk Management, Operational Flexibility, Stakeholder Analysis, Finance Team, Operations Team, Executive Management, Board of Directors, Lease vs Buy Decision, Lease Type Selection, Lessor Selection");
  app.save(record16);

  const record17 = new Record(collection);
    record17.set("title", "Financial Analysis and Lease Evaluation Glossary");
    record17.set("lesson_id", "lesson_1_2");
    record17.set("part_number", 1);
    record17.set("content_type", "glossary");
    record17.set("description", "Comprehensive glossary of 15 key terms for Financial Analysis lesson including NPV, IRR, discount rate, cash flows, sensitivity analysis, payback period, profitability index, and decision rules");
    record17.set("file_type", "pdf");
    record17.set("is_downloadable", true);
    record17.set("terms_count", 15);
    record17.set("content_summary", "15 terms: Net Present Value (NPV), Internal Rate of Return (IRR), Discount Rate, Lease Payment Cash Flows, Tax Cash Flows, Residual Value, Maintenance Cash Flows, Insurance Cash Flows, Sensitivity Analysis, Payback Period, Profitability Index, Decision Rule, Discount Factor, Cash Flow Timing, Risk-Adjusted Rate");
  app.save(record17);

  const record18 = new Record(collection);
    record18.set("title", "Lease vs Buy Decision Framework Glossary");
    record18.set("lesson_id", "lesson_1_3");
    record18.set("part_number", 1);
    record18.set("content_type", "glossary");
    record18.set("description", "Comprehensive glossary of 15 key terms for Lease vs Buy Decision lesson including lease option, buy option, financial comparison, qualitative factors, flexibility, obsolescence risk, maintenance responsibility, balance sheet impact, and control");
    record18.set("file_type", "pdf");
    record18.set("is_downloadable", true);
    record18.set("terms_count", 15);
    record18.set("content_summary", "15 terms: Lease Option, Buy Option, Financial Comparison, Qualitative Factors, Flexibility, Obsolescence Risk, Maintenance Responsibility, Balance Sheet Impact, Operational Control, Break-Even Analysis, Financing Costs, Depreciation, Residual Value Risk, Lessor Credit Risk, Strategic Fit");
  app.save(record18);

  const record19 = new Record(collection);
    record19.set("title", "Strategic Lease Planning and Analysis - Part 1 Comprehensive Glossary");
    record19.set("lesson_id", null);
    record19.set("part_number", 1);
    record19.set("content_type", "part_glossary");
    record19.set("description", "Comprehensive glossary of all 45 terms from Part 1 (3 lessons) organized alphabetically with cross-references between related terms and index by lesson");
    record19.set("file_type", "pdf");
    record19.set("is_downloadable", true);
    record19.set("terms_count", 45);
    record19.set("content_summary", "45 terms from all 3 lessons organized alphabetically with definitions, cross-references, and lesson index. Covers strategic planning, financial analysis, and lease vs buy decision frameworks");
  app.save(record19);

  const record20 = new Record(collection);
    record20.set("title", "Tax Optimization Strategies Glossary");
    record20.set("lesson_id", "lesson_2_1");
    record20.set("part_number", 2);
    record20.set("content_type", "glossary");
    record20.set("description", "Comprehensive glossary of 15 key terms for Tax Optimization lesson including lease tax treatment, operating lease, finance lease, deductions, depreciation, MACRS, and international tax considerations");
    record20.set("file_type", "pdf");
    record20.set("is_downloadable", true);
    record20.set("terms_count", 15);
    record20.set("content_summary", "15 terms: Lease Tax Treatment, Operating Lease, Finance Lease, Lease Payment Deduction, Accelerated Deductions, Depreciation Recapture, MACRS Depreciation, Interest Deduction, Residual Value, Tax Optimization, Source Country Tax, Lessor Country Tax, Lessee Country Tax, Tax Treaty Benefits, Transfer Pricing");
  app.save(record20);

  const record21 = new Record(collection);
    record21.set("title", "Accounting Optimization and Financial Engineering Glossary");
    record21.set("lesson_id", "lesson_2_2");
    record21.set("part_number", 2);
    record21.set("content_type", "glossary");
    record21.set("description", "Comprehensive glossary of 15 key terms for Accounting Optimization lesson including ASC 842, IFRS 16, lease classification, ROU asset, lease liability, synthetic lease, securitization, and financial ratios");
    record21.set("file_type", "pdf");
    record21.set("is_downloadable", true);
    record21.set("terms_count", 15);
    record21.set("content_summary", "15 terms: ASC 842, IFRS 16, Lease Classification, Right-of-Use (ROU) Asset, Lease Liability, Lease Term Definition, Discount Rate Selection, Residual Value Estimates, Lease Modification, Synthetic Lease, Lease Securitization, Residual Value Guarantee, Lease Buyout, Debt-to-Equity Ratio, Interest Coverage Ratio");
  app.save(record21);

  const record22 = new Record(collection);
    record22.set("title", "Advanced Structuring and Financial Strategies Glossary");
    record22.set("lesson_id", "lesson_2_3");
    record22.set("part_number", 2);
    record22.set("content_type", "glossary");
    record22.set("description", "Comprehensive glossary of 15 key terms for Advanced Structuring lesson including leveraged lease, syndication, securitization, tranches, cash flow waterfall, and investor structures");
    record22.set("file_type", "pdf");
    record22.set("is_downloadable", true);
    record22.set("terms_count", 15);
    record22.set("content_summary", "15 terms: Leveraged Lease, Lessor Equity, Debt Financing, Lessee Payments, Syndication, Equity Syndication, Debt Syndication, Securitization, Originator, Servicer, Trustee, Cash Flow Waterfall, Senior Tranche, Mezzanine Tranche, Equity Tranche");
  app.save(record22);

  const record23 = new Record(collection);
    record23.set("title", "Advanced Lease Optimization Techniques - Part 2 Comprehensive Glossary");
    record23.set("lesson_id", null);
    record23.set("part_number", 2);
    record23.set("content_type", "part_glossary");
    record23.set("description", "Comprehensive glossary of all 45 terms from Part 2 (3 lessons) organized alphabetically with cross-references between related terms and index by lesson");
    record23.set("file_type", "pdf");
    record23.set("is_downloadable", true);
    record23.set("terms_count", 45);
    record23.set("content_summary", "45 terms from all 3 lessons organized alphabetically with definitions, cross-references, and lesson index. Covers tax optimization, accounting optimization, and advanced structuring strategies");
  app.save(record23);

  const record24 = new Record(collection);
    record24.set("title", "Lease Portfolio Management Glossary");
    record24.set("lesson_id", "lesson_3_1");
    record24.set("part_number", 3);
    record24.set("content_type", "glossary");
    record24.set("description", "Comprehensive glossary of 15 key terms for Portfolio Management lesson including portfolio management, portfolio composition, WALT, WAC, WAL, portfolio yield, duration, diversification, rebalancing, and monitoring");
    record24.set("file_type", "pdf");
    record24.set("is_downloadable", true);
    record24.set("terms_count", 15);
    record24.set("content_summary", "15 terms: Portfolio Management, Portfolio Composition, Weighted Average Lease Term (WALT), Weighted Average Coupon (WAC), Weighted Average Life (WAL), Portfolio Yield, Portfolio Duration, Diversification, Rebalancing, Refinancing, Securitization, Disposition, Performance Monitoring, Risk Monitoring, Compliance Monitoring");
  app.save(record24);

  const record25 = new Record(collection);
    record25.set("title", "Risk Assessment and Management Glossary");
    record25.set("lesson_id", "lesson_3_2");
    record25.set("part_number", 3);
    record25.set("content_type", "glossary");
    record25.set("description", "Comprehensive glossary of 15 key terms for Risk Management lesson including credit risk, credit analysis, credit rating, default probability, credit enhancement, guarantees, collateral, insurance, residual value risk, obsolescence risk, and market risk");
    record25.set("file_type", "pdf");
    record25.set("is_downloadable", true);
    record25.set("terms_count", 15);
    record25.set("content_summary", "15 terms: Credit Risk, Credit Analysis, Credit Rating, Default Probability, Credit Enhancement, Guarantees, Collateral, Insurance, Residual Value Risk, Obsolescence Risk, Market Risk, Operational Risk, Interest Rate Risk, Currency Risk, Economic Risk");
  app.save(record25);

  const record26 = new Record(collection);
    record26.set("title", "Advanced Portfolio Strategies Glossary");
    record26.set("lesson_id", "lesson_3_3");
    record26.set("part_number", 3);
    record26.set("content_type", "glossary");
    record26.set("description", "Comprehensive glossary of 15 key terms for Advanced Portfolio Strategies lesson including securitization types, syndication types, hedging strategies, exit strategies, and co-investment structures");
    record26.set("file_type", "pdf");
    record26.set("is_downloadable", true);
    record26.set("terms_count", 15);
    record26.set("content_summary", "15 terms: Securitization, Traditional Securitization, Synthetic Securitization, Partial Securitization, Ongoing Securitization, Syndication, Equity Syndication, Debt Syndication, Participation Agreements, Co-Investment, Joint Ventures, Hedging, Interest Rate Hedging, Currency Hedging, Exit Strategy");
  app.save(record26);

  const record27 = new Record(collection);
    record27.set("title", "Lease Portfolio Management and Risk - Part 3 Comprehensive Glossary");
    record27.set("lesson_id", null);
    record27.set("part_number", 3);
    record27.set("content_type", "part_glossary");
    record27.set("description", "Comprehensive glossary of all 45 terms from Part 3 (3 lessons) organized alphabetically with cross-references between related terms and index by lesson");
    record27.set("file_type", "pdf");
    record27.set("is_downloadable", true);
    record27.set("terms_count", 45);
    record27.set("content_summary", "45 terms from all 3 lessons organized alphabetically with definitions, cross-references, and lesson index. Covers portfolio management, risk assessment, and advanced portfolio strategies");
  app.save(record27);

  const record28 = new Record(collection);
    record28.set("title", "ESG and Sustainable Leasing Glossary");
    record28.set("lesson_id", "lesson_4_1");
    record28.set("part_number", 4);
    record28.set("content_type", "glossary");
    record28.set("description", "Comprehensive glossary of 15 key terms for ESG lesson including ESG, environmental considerations, equipment emissions, energy efficiency, circular economy, social considerations, labor practices, community impact, diversity, supply chain, and governance");
    record28.set("file_type", "pdf");
    record28.set("is_downloadable", true);
    record28.set("terms_count", 15);
    record28.set("content_summary", "15 terms: ESG, Environmental Considerations, Equipment Emissions, Energy Efficiency, Circular Economy, Environmental Compliance, Climate Risk, Social Considerations, Labor Practices, Community Impact, Diversity and Inclusion, Supply Chain, Governance Considerations, Board Oversight, Stakeholder Engagement");
  app.save(record28);

  const record29 = new Record(collection);
    record29.set("title", "Technology and Digital Transformation Glossary");
    record29.set("lesson_id", "lesson_4_2");
    record29.set("part_number", 4);
    record29.set("content_type", "glossary");
    record29.set("description", "Comprehensive glossary of 15 key terms for Technology lesson including AI, machine learning, blockchain, smart contracts, IoT, equipment monitoring, predictive maintenance, data analytics, and portfolio analytics");
    record29.set("file_type", "pdf");
    record29.set("is_downloadable", true);
    record29.set("terms_count", 15);
    record29.set("content_summary", "15 terms: Artificial Intelligence (AI), Machine Learning, Credit Risk Assessment, Residual Value Prediction, Fraud Detection, Blockchain, Smart Contracts, Lease Registry, Internet of Things (IoT), Equipment Monitoring, Predictive Maintenance, Location Tracking, Data Analytics, Portfolio Analytics, Predictive Analytics");
  app.save(record29);

  const record30 = new Record(collection);
    record30.set("title", "Market Trends and Future Strategies Glossary");
    record30.set("lesson_id", "lesson_4_3");
    record30.set("part_number", 4);
    record30.set("content_type", "glossary");
    record30.set("description", "Comprehensive glossary of 15 key terms for Market Trends lesson including mobility trends, electric vehicles, autonomous vehicles, shared mobility, MaaS, real estate trends, remote work, flexible leasing, sustainable buildings, and alternative assets");
    record30.set("file_type", "pdf");
    record30.set("is_downloadable", true);
    record30.set("terms_count", 15);
    record30.set("content_summary", "15 terms: Mobility Trends, Electric Vehicles (EV), Autonomous Vehicles, Shared Mobility, Mobility as a Service (MaaS), Last-Mile Delivery, Real Estate Trends, Remote Work, Flexible Leasing, Sustainable Buildings, Mixed-Use Spaces, Adaptive Reuse, Alternative Assets, Life Sciences Equipment, Renewable Energy Assets");
  app.save(record30);

  const record31 = new Record(collection);
    record31.set("title", "Emerging Trends and Future Strategies - Part 4 Comprehensive Glossary");
    record31.set("lesson_id", null);
    record31.set("part_number", 4);
    record31.set("content_type", "part_glossary");
    record31.set("description", "Comprehensive glossary of all 45 terms from Part 4 (3 lessons) organized alphabetically with cross-references between related terms and index by lesson");
    record31.set("file_type", "pdf");
    record31.set("is_downloadable", true);
    record31.set("terms_count", 45);
    record31.set("content_summary", "45 terms from all 3 lessons organized alphabetically with definitions, cross-references, and lesson index. Covers ESG and sustainable leasing, technology and digital transformation, and market trends");
  app.save(record31);

  const record32 = new Record(collection);
    record32.set("title", "Advanced Leasing Strategies - Master Course Glossary");
    record32.set("lesson_id", null);
    record32.set("part_number", null);
    record32.set("content_type", "master_glossary");
    record32.set("description", "Complete master glossary of all 180 terms from all 4 parts of the Advanced Leasing Strategies course, organized alphabetically with cross-references, index by part and lesson, quick reference guide, and abbreviations/acronyms reference");
    record32.set("file_type", "pdf");
    record32.set("is_downloadable", true);
    record32.set("terms_count", 180);
    record32.set("content_summary", "180 terms from all 4 parts organized alphabetically with definitions, cross-references, index by part and lesson, quick reference guide, and comprehensive abbreviations/acronyms reference. Complete reference for entire Advanced Leasing Strategies course");
  app.save(record32);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})