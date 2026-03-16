/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "Introduction to Lease Portfolio Risk");
    record0.set("description", "Understand different types of risks in lease portfolios, why risk pricing models are essential, key risk metrics, and risk-return relationships");
    record0.set("order", 1);
    record0.set("duration", 60);
    record0.set("content_type", "video");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "pbc_9676646180");
    record1.set("title", "Credit Risk Modeling for Leases");
    record1.set("description", "Understand credit risk components, estimate probability of default, calculate loss given default, and aggregate credit risk across portfolios");
    record1.set("order", 2);
    record1.set("duration", 60);
    record1.set("content_type", "video");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "pbc_9676646180");
    record2.set("title", "Prepayment Risk and Modeling");
    record2.set("description", "Understand prepayment risk sources, model prepayment behavior, measure prepayment risk, and develop management strategies");
    record2.set("order", 3);
    record2.set("duration", 60);
    record2.set("content_type", "video");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("course_id", "pbc_9676646180");
    record3.set("title", "Interest Rate Risk and Duration Analysis");
    record3.set("description", "Understand interest rate risk, calculate duration and convexity, measure interest rate risk, and develop hedging strategies");
    record3.set("order", 4);
    record3.set("duration", 60);
    record3.set("content_type", "video");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("course_id", "pbc_9676646180");
    record4.set("title", "Liquidity Risk and Portfolio Liquidity");
    record4.set("description", "Understand liquidity risk types, measure market and funding liquidity, assess portfolio liquidity, and develop management strategies");
    record4.set("order", 5);
    record4.set("duration", 60);
    record4.set("content_type", "video");
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("course_id", "pbc_9676646180");
    record5.set("title", "Portfolio Valuation Models");
    record5.set("description", "Understand lease portfolio valuation approaches, apply DCF models, calculate option-adjusted spreads, and use Monte Carlo simulation");
    record5.set("order", 6);
    record5.set("duration", 60);
    record5.set("content_type", "video");
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("course_id", "pbc_9676646180");
    record6.set("title", "Credit Spread Modeling and Analysis");
    record6.set("description", "Understand credit spreads, decompose spread components, model spread dynamics, and measure spread risk");
    record6.set("order", 7);
    record6.set("duration", 60);
    record6.set("content_type", "video");
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("course_id", "pbc_9676646180");
    record7.set("title", "Portfolio Risk Aggregation and Concentration");
    record7.set("description", "Understand portfolio risk aggregation, measure concentration risk, analyze diversification, and develop concentration management strategies");
    record7.set("order", 8);
    record7.set("duration", 60);
    record7.set("content_type", "video");
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("course_id", "pbc_9676646180");
    record8.set("title", "Stress Testing and Scenario Analysis");
    record8.set("description", "Design stress scenarios, perform scenario analysis, conduct stress testing, and develop stress testing frameworks");
    record8.set("order", 9);
    record8.set("duration", 60);
    record8.set("content_type", "video");
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("course_id", "pbc_9676646180");
    record9.set("title", "Advanced Topics and Emerging Risks");
    record9.set("description", "Understand machine learning applications, assess climate risk, evaluate cyber risk, and understand emerging regulatory requirements");
    record9.set("order", 10);
    record9.set("duration", 60);
    record9.set("content_type", "video");
  app.save(record9);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})