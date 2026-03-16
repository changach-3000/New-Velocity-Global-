/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("case_studies");

  const record0 = new Record(collection);
    record0.set("title", "Case Study 1: Lease Portfolio Risk Assessment");
    record0.set("description", "A portfolio manager has a lease portfolio with 500 leases, $250M total exposure, average PD 2.5%, average LGD 35%, average EAD $500K. Calculate expected loss, identify key risks, recommend mitigation strategies, and discuss how risk models improve management");
    record0.set("scenario", "Portfolio Risk Assessment");
    record0.set("difficulty_level", "Intermediate");
    record0.set("course_module", "Lesson 1");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("title", "Case Study 2: Credit Risk Model Development");
    record1.set("description", "A leasing company wants to develop a credit risk model for 1,000 equipment leases with 5 years of historical default data. Design PD estimation model, estimate LGD by lessee type, calculate portfolio expected loss, identify key risk drivers, and recommend improvements");
    record1.set("scenario", "Credit Risk Model Development");
    record1.set("difficulty_level", "Advanced");
    record1.set("course_module", "Lesson 2");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("title", "Case Study 3: Prepayment Risk Analysis");
    record2.set("description", "A lease portfolio has 2,000 leases with 5-year average term, 4.5% average interest rate, 15% historical prepayment rate. Estimate prepayment rates given current rates, calculate effective duration, estimate OAS, analyze valuation impact, and recommend hedging strategies");
    record2.set("scenario", "Prepayment Risk Analysis");
    record2.set("difficulty_level", "Advanced");
    record2.set("course_module", "Lesson 3");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("title", "Case Study 4: Interest Rate Risk Management");
    record3.set("description", "A lease portfolio has $500M in fixed-rate leases (4.5%, 5-year) and $300M in floating-rate leases (LIBOR+2%, 3-year). Calculate portfolio duration, estimate interest rate VaR, analyze 100 bps rate increase impact, design hedging strategy, and evaluate effectiveness");
    record3.set("scenario", "Interest Rate Risk Management");
    record3.set("difficulty_level", "Advanced");
    record3.set("course_module", "Lesson 4");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("title", "Case Study 5: Liquidity Risk Assessment");
    record4.set("description", "A leasing company has $1B lease portfolio with 60% bank loans, 30% bonds, 10% equity funding. Calculate liquidity coverage ratio, assess funding liquidity risk, analyze secondary market liquidity, perform stress test, and recommend improvements");
    record4.set("scenario", "Liquidity Risk Assessment");
    record4.set("difficulty_level", "Advanced");
    record4.set("course_module", "Lesson 5");
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("title", "Case Study 6: Portfolio Valuation");
    record5.set("description", "A lease portfolio has 500 leases, $250M principal, 4.5% average coupon, 5-year average maturity, 2% historical default rate, 15% prepayment rate. Project cash flows, calculate DCF value, estimate OAS, perform Monte Carlo valuation, and analyze sensitivity");
    record5.set("scenario", "Portfolio Valuation");
    record5.set("difficulty_level", "Advanced");
    record5.set("course_module", "Lesson 6");
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("title", "Case Study 7: Spread Analysis");
    record6.set("description", "A lease portfolio has 200 bps average spread, 50 bps spread volatility, -0.3 correlation with interest rates, 0.7 correlation with default rates. Decompose the spread, model spread dynamics, forecast changes, measure spread risk, and recommend management strategy");
    record6.set("scenario", "Spread Analysis");
    record6.set("difficulty_level", "Advanced");
    record6.set("course_module", "Lesson 7");
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("title", "Case Study 8: Concentration Risk Analysis");
    record7.set("description", "A lease portfolio has 1,000 leases, $1B total, top 10 lessees 25%, manufacturing 40%, California 35%, 50% due in 3 years. Calculate concentration metrics, analyze diversification benefits, identify risks, recommend limits, and develop management plan");
    record7.set("scenario", "Concentration Risk Analysis");
    record7.set("difficulty_level", "Advanced");
    record7.set("course_module", "Lesson 8");
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("title", "Case Study 9: Stress Testing");
    record8.set("description", "A lease portfolio has $500M value, 200 bps spread, 2% default rate, 15% prepayment rate. Design and perform stress tests for interest rate shock (+200 bps), spread widening (+100 bps), default increase (to 5%), prepayment increase (to 25%), and combined scenario");
    record8.set("scenario", "Stress Testing");
    record8.set("difficulty_level", "Advanced");
    record8.set("course_module", "Lesson 9");
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("title", "Case Study 10: Integrated Risk Management");
    record9.set("description", "A leasing company faces regulatory climate risk assessment requirements, pressure to implement machine learning, cyber attack on customer data, and emerging ESG requirements. Design climate risk framework, develop ML default prediction model, assess cyber impact, analyze ESG requirements, and develop integrated strategy");
    record9.set("scenario", "Integrated Risk Management");
    record9.set("difficulty_level", "Advanced");
    record9.set("course_module", "Lesson 10");
  app.save(record9);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})