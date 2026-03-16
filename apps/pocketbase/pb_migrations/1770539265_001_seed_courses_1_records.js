/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Risk Pricing Models for Lease Portfolios: Advanced Financial Analysis and Valuation");
    record0.set("description", "Master advanced risk pricing models for lease portfolios, including credit risk assessment, prepayment risk, interest rate risk, and portfolio valuation techniques");
    record0.set("instructor_name", "Finance Expert");
    record0.set("instructor_bio", "Specialized in lease portfolio risk management and advanced financial analysis");
    record0.set("price", 2999);
    record0.set("duration_hours", 10);
    record0.set("learning_outcomes", "Understand lease portfolio risk types and risk measurement; Model credit risk using PD, LGD, EAD; Analyze prepayment behavior and risk; Manage interest rate risk with duration analysis; Assess liquidity risk; Value lease portfolios using DCF and OAS models; Analyze credit spreads; Manage portfolio concentration; Conduct stress testing; Address emerging risks including machine learning, climate risk, and cyber risk");
    record0.set("image_url", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800");
    record0.set("curriculum", "10 comprehensive lessons covering all aspects of lease portfolio risk pricing");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})