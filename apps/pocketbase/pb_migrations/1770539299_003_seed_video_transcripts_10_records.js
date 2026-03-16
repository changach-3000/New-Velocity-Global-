/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("video_transcripts");

  const record0 = new Record(collection);
    record0.set("title", "Introduction to Lease Portfolio Risk - Transcript");
    record0.set("lesson_id", "pbc_3963162141");
    record0.set("part_number", 1);
    record0.set("duration_minutes", 60);
    record0.set("content_summary", "This lesson introduces the fundamental concepts of lease portfolio risk. We begin by defining what constitutes a lease portfolio and the various types of risks inherent in such portfolios. Key topics include: (1) Types of lease portfolio risks - credit risk, prepayment risk, interest rate risk, liquidity risk, and operational risk; (2) Risk measurement frameworks and metrics; (3) The importance of risk pricing models in valuation and management; (4) Historical context and evolution of lease portfolio risk management; (5) Regulatory environment and compliance requirements; (6) Introduction to risk aggregation and portfolio effects. Students will understand why comprehensive risk pricing models are essential for accurate portfolio valuation and effective risk management.");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("title", "Credit Risk Modeling for Leases - Transcript");
    record1.set("lesson_id", "pbc_3963162141");
    record1.set("part_number", 2);
    record1.set("duration_minutes", 60);
    record1.set("content_summary", "This lesson covers credit risk modeling techniques specific to lease portfolios. Topics include: (1) Probability of Default (PD) estimation using historical data and forward-looking indicators; (2) Loss Given Default (LGD) calculation considering collateral values and recovery rates; (3) Exposure at Default (EAD) determination for lease contracts; (4) Credit rating methodologies; (5) Transition matrices and rating migration; (6) Portfolio credit risk aggregation; (7) Correlation structures in lease portfolios; (8) Stress testing credit assumptions. Students will learn to build robust credit risk models that capture the unique characteristics of lease portfolios.");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("title", "Prepayment Risk and Modeling - Transcript");
    record2.set("lesson_id", "pbc_3963162141");
    record2.set("part_number", 3);
    record2.set("duration_minutes", 60);
    record2.set("content_summary", "This lesson addresses prepayment risk, a critical component of lease portfolio valuation. Key topics: (1) Prepayment behavior analysis and drivers; (2) Refinancing incentives and economic factors; (3) Prepayment models - conditional prepayment rates (CPR) and single monthly mortality (SMM); (4) Behavioral modeling and option-adjusted spread (OAS) analysis; (5) Impact of prepayment on portfolio cash flows; (6) Prepayment risk measurement and hedging; (7) Scenario analysis for prepayment assumptions; (8) Empirical prepayment data and calibration. Students will understand how to model and manage prepayment risk in lease portfolios.");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("title", "Interest Rate Risk and Duration Analysis - Transcript");
    record3.set("lesson_id", "pbc_3963162141");
    record3.set("part_number", 4);
    record3.set("duration_minutes", 60);
    record3.set("content_summary", "This lesson focuses on interest rate risk management in lease portfolios. Topics covered: (1) Interest rate risk fundamentals and sources; (2) Duration and convexity analysis; (3) Effective duration calculation for lease portfolios; (4) Key rate durations and yield curve risk; (5) Interest rate scenario analysis; (6) Hedging strategies using derivatives; (7) Basis risk and cross-currency considerations; (8) Dynamic interest rate modeling; (9) Stress testing interest rate assumptions. Students will master techniques for measuring and managing interest rate exposure.");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("title", "Liquidity Risk and Portfolio Liquidity - Transcript");
    record4.set("lesson_id", "pbc_3963162141");
    record4.set("part_number", 5);
    record4.set("duration_minutes", 60);
    record4.set("content_summary", "This lesson examines liquidity risk in lease portfolios. Key areas: (1) Market liquidity and bid-ask spreads; (2) Funding liquidity and refinancing risk; (3) Liquidity risk measurement and metrics; (4) Liquidity stress scenarios; (5) Portfolio composition and liquidity profile; (6) Maturity ladder analysis; (7) Contingency funding plans; (8) Regulatory liquidity requirements (LCR, NSFR); (9) Liquidity risk in different market conditions. Students will learn to assess and manage both market and funding liquidity risks.");
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("title", "Portfolio Valuation Models - Transcript");
    record5.set("lesson_id", "pbc_3963162141");
    record5.set("part_number", 6);
    record5.set("duration_minutes", 60);
    record5.set("content_summary", "This lesson covers comprehensive portfolio valuation methodologies. Topics include: (1) Discounted Cash Flow (DCF) models for lease portfolios; (2) Option-Adjusted Spread (OAS) models; (3) Monte Carlo simulation approaches; (4) Calibration of valuation models; (5) Benchmark selection and spread measurement; (6) Valuation adjustments (CVA, DVA, FVA); (7) Model validation and backtesting; (8) Sensitivity analysis and Greeks; (9) Comparison of valuation approaches. Students will develop expertise in multiple valuation methodologies.");
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("title", "Credit Spread Modeling and Analysis - Transcript");
    record6.set("lesson_id", "pbc_3963162141");
    record6.set("part_number", 7);
    record6.set("duration_minutes", 60);
    record6.set("content_summary", "This lesson focuses on credit spread analysis and modeling. Key topics: (1) Spread decomposition - credit spread, liquidity spread, and other components; (2) Spread dynamics and term structure; (3) Credit spread models - structural and reduced-form approaches; (4) Spread-based risk measurement; (5) Spread widening scenarios; (6) Correlation between spreads and other risk factors; (7) Spread forecasting and prediction; (8) Regulatory capital implications of spreads; (9) Spread hedging strategies. Students will understand how to analyze and model credit spreads effectively.");
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("title", "Portfolio Risk Aggregation and Concentration - Transcript");
    record7.set("lesson_id", "pbc_3963162141");
    record7.set("part_number", 8);
    record7.set("duration_minutes", 60);
    record7.set("content_summary", "This lesson addresses portfolio-level risk aggregation and concentration analysis. Topics: (1) Risk aggregation methodologies; (2) Correlation and dependence structures; (3) Concentration risk measurement - Herfindahl index, concentration limits; (4) Sector and geographic concentration; (5) Counterparty concentration; (6) Diversification benefits and limits; (7) Portfolio optimization techniques; (8) Concentration stress testing; (9) Regulatory concentration requirements. Students will master techniques for understanding portfolio-level risks.");
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("title", "Stress Testing and Scenario Analysis - Transcript");
    record8.set("lesson_id", "pbc_3963162141");
    record8.set("part_number", 9);
    record8.set("duration_minutes", 60);
    record8.set("content_summary", "This lesson covers stress testing and scenario analysis frameworks. Key areas: (1) Stress testing methodologies and frameworks; (2) Scenario design - historical, hypothetical, and reverse stress testing; (3) Macroeconomic scenarios and linkages; (4) Impact quantification across risk dimensions; (5) Correlation assumptions under stress; (6) Regulatory stress testing requirements; (7) Governance and documentation; (8) Remedial actions and contingency planning; (9) Reporting and communication of results. Students will develop comprehensive stress testing capabilities.");
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("title", "Advanced Topics and Emerging Risks - Transcript");
    record9.set("lesson_id", "pbc_3963162141");
    record9.set("part_number", 10);
    record9.set("duration_minutes", 60);
    record9.set("content_summary", "This final lesson covers advanced topics and emerging risks in lease portfolio management. Topics include: (1) Machine learning applications in risk modeling; (2) Climate risk and ESG considerations; (3) Cyber risk and operational resilience; (4) Emerging regulatory requirements; (5) Pandemic and systemic risk lessons; (6) Artificial intelligence in portfolio management; (7) Blockchain and distributed ledger technology; (8) Geopolitical risk considerations; (9) Future trends in risk management; (10) Integration of emerging risks into existing frameworks. Students will understand the evolving landscape of lease portfolio risk management.");
  app.save(record9);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})