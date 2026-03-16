/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("glossaries");

  const record0 = new Record(collection);
    record0.set("terms", "Residual Value, Lease Term, Buyout Option, Wear and Tear, Equipment Depreciation, Lessor, Lessee, Lease Payment, Interest Rate, Residual Risk, Obsolescence, Fair Market Value, Salvage Value, Lease Modification, Renewal Option");
    record0.set("definitions", "The estimated value of equipment at lease end; The duration of the lease agreement; The right to purchase equipment at lease end; Normal wear from use; Decrease in equipment value over time; The owner of the equipment; The user of the equipment; Monthly or periodic payment amount; The cost of borrowing; Risk that residual value is lower than expected; Equipment becoming outdated; The price at which equipment could be sold; The value of equipment for scrap; Changes to lease terms; The option to extend the lease");
    record0.set("examples", "A car worth $20,000 might have a 60% residual value; A 3-year lease; Purchasing the car for $8,000 at lease end; Normal scratches and wear; A car loses 15% value per year; The bank or finance company; The business using the equipment; $300 per month; 5% annual interest; Equipment worth less than expected; Newer technology makes equipment obsolete; Equipment sells for $15,000; Equipment worth $500 for parts; Adding a purchase option; Extending lease for another year");
    record0.set("crossReferences", "Lease Accounting, Pricing Models, Risk Management, Portfolio Analysis, Market Dynamics");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("terms", "Pricing Model, Cost of Capital, Profit Margin, Discount Rate, Net Present Value, Internal Rate of Return, Sensitivity Analysis, Break-even Analysis, Competitive Pricing, Dynamic Pricing, Yield, Spread, Risk Premium, Markup, Lease Rate");
    record1.set("definitions", "Mathematical framework for determining lease payments; The cost to borrow money; The profit percentage on a lease; The rate used to discount future cash flows; The present value of future cash flows; The rate of return on an investment; Testing how changes affect outcomes; Finding the point where revenue equals costs; Pricing based on market competition; Adjusting prices based on demand; The return on a lease investment; The difference between cost and price; Additional return for taking risk; The amount added to cost for profit; The periodic payment amount");
    record1.set("examples", "Using NPV to calculate lease payments; Bank charges 4% for capital; 15% profit margin on lease; Using 8% discount rate; NPV of $5,000 means positive return; IRR of 12% on lease investment; Changing residual value by 10%; Break-even at 36 months; Matching competitor's $300 payment; Charging $350 in peak season, $250 in off-season; 10% annual yield on lease; 3% spread over cost of capital; 2% risk premium for high-risk lessee; 20% markup on equipment cost; $300 monthly lease rate");
    record1.set("crossReferences", "Strategic Lease Structuring, Risk Management, Market Dynamics, Portfolio Optimization, Financial Analysis");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("terms", "Credit Risk, Default Risk, Residual Risk, Interest Rate Risk, Liquidity Risk, Concentration Risk, Operational Risk, Hedging, Insurance, Collateral, Covenant, Guarantee, Mitigation, Diversification, Stress Testing");
    record2.set("definitions", "Risk that lessee cannot pay; Risk that lessee stops paying; Risk that residual value is lower than expected; Risk from interest rate changes; Risk of not being able to sell assets quickly; Risk from having too much in one area; Risk from operational failures; Protecting against risk; Protection against loss; Asset securing the loan; Agreement terms protecting lessor; Promise to pay if lessee defaults; Reducing risk; Spreading risk across many leases; Testing for extreme scenarios");
    record2.set("examples", "Lessee has poor credit history; Lessee goes bankrupt; Car worth $8,000 instead of $10,000; Interest rates rise from 5% to 7%; Cannot quickly sell equipment; 50% of portfolio in one industry; Equipment breakdown; Using interest rate swaps; Purchasing insurance; Equipment as security; Lessee must maintain insurance; Bank guarantees payment; Using shorter terms; Leasing to 100 different companies; Testing 20% residual value drop");
    record2.set("crossReferences", "Strategic Lease Structuring, Advanced Pricing Models, Portfolio Optimization, Credit Analysis, Compliance Requirements");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("terms", "Portfolio Diversification, Asset Allocation, Performance Metrics, Return on Investment, Risk-Adjusted Return, Concentration Limits, Rebalancing, Correlation, Volatility, Optimization Algorithm, Efficient Frontier, Sharpe Ratio, Sortino Ratio, Information Ratio, Tracking Error");
    record3.set("definitions", "Spreading investments across different types; Deciding how much to invest in each area; Measurements of performance; Profit relative to investment; Return adjusted for risk taken; Limits on exposure to one area; Adjusting portfolio to maintain targets; How two investments move together; Measure of price fluctuations; Mathematical method to find best portfolio; Best possible risk-return combinations; Risk-adjusted return measure; Return per unit of downside risk; Return relative to benchmark; Difference from benchmark performance");
    record3.set("examples", "Leasing cars, trucks, and equipment; 40% cars, 30% trucks, 30% equipment; ROI, yield, default rate; $10,000 profit on $100,000 investment; 12% return with 8% risk; No more than 20% in one industry; Selling some cars to buy trucks; Cars and trucks move together; Stock price varies 15% annually; Computer program finds best mix; Portfolios with best return for each risk level; 1.5 Sharpe ratio; 2.0 Sortino ratio; 0.8 information ratio; 2% tracking error");
    record3.set("crossReferences", "Advanced Leasing Strategies, Risk Management, Market Dynamics, Equipment Leasing Strategies, Financial Analysis");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("terms", "Market Trends, Economic Indicators, Industry Cycles, Supply and Demand, Competitive Landscape, Regulatory Changes, Technology Disruption, Customer Preferences, Pricing Pressure, Market Share, Growth Opportunities, Emerging Markets, Consolidation, Commoditization, Digital Transformation");
    record4.set("definitions", "Directions the market is moving; Economic data showing health; Periods of growth and decline; Availability versus desire for products; Who competes and how; New laws affecting business; New technology changing industry; What customers want; Pressure to lower prices; Percentage of market a company has; Chances to grow; New geographic areas; Companies merging; Products becoming standard; Using digital technology");
    record4.set("examples", "Shift toward electric vehicles; GDP growth, unemployment rate; Leasing demand rises then falls; More demand than supply increases prices; 10 major leasing companies; New environmental regulations; AI-powered equipment; Customers want flexible terms; Competitors lowering prices; Company has 15% market share; Expanding to Asia; Growing markets in Africa; Two companies merging; Leasing becoming standard; Using cloud-based systems");
    record4.set("crossReferences", "Advanced Leasing Strategies, Strategic Planning, Competitive Positioning, Growth Strategies, Market Analysis");
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})