/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lesson_content");

  const record0 = new Record(collection);
    record0.set("lesson_id", "cly8q5h2k000008l8g5z5g5z5");
    record0.set("content_body", "Risk Mitigation Strategies in Equipment Leasing. This lesson covers: 1) Insurance Options - equipment insurance, liability insurance, and loss protection strategies to mitigate operational and market risks, 2) Guarantees and Warranties - leveraging manufacturer warranties and third-party guarantees to reduce residual value and operational risks, 3) Collateral Management - securing additional collateral and maintaining proper lien positions to protect lessor interests, 4) Portfolio Diversification - spreading risk across different equipment types, industries, and lessees to reduce concentration risk, 5) Hedging Strategies - using financial instruments and contracts to protect against market volatility and residual value losses, 6) Contingency Planning - developing backup plans and reserve funds for unexpected events and market downturns");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})