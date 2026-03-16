/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Risk Pricing Models for Lease Portfolios: Advanced Financial Analysis and Valuation");
    record0.set("description", "Comprehensive 10-hour advanced course on risk pricing models for lease portfolios");
    record0.set("instructor_name", "Finance Expert");
    record0.set("price", 2999);
    record0.set("duration_hours", 10);
    record0.set("learning_outcomes", "Master credit risk modeling, prepayment risk, interest rate risk, liquidity risk, portfolio valuation, spread analysis, concentration risk, stress testing, and emerging risks in lease portfolios");
    record0.set("image_url", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800");
    record0.set("estimated_hours", 10);
    record0.set("badge_id", "advanced_risk_pricing");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})