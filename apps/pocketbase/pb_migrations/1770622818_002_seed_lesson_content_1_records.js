/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lesson_content");

  const record0 = new Record(collection);
    record0.set("lesson_id", "cly8q5h2k000008l8g5z5g5z5");
    record0.set("content_body", "Residual Value Risk Management in Equipment Leasing. This lesson covers: 1) Residual Value Estimation Methods - techniques for forecasting equipment value at lease end including market comparables, depreciation curves, and historical data analysis, 2) Obsolescence Risk Factors - identifying equipment that may become outdated or unusable, 3) Market Volatility - understanding how market conditions affect equipment values, 4) Equipment Depreciation - analyzing depreciation patterns and rates across different equipment types, 5) Technology Changes Impact - assessing how technological advances affect residual values and equipment utility");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})