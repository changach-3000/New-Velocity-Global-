/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "Introduction to Lease Portfolio Risk");
    record0.set("description", "Foundational lesson on lease portfolio risk types, risk measurement, and importance of risk pricing models");
    record0.set("order", 1);
    record0.set("duration", 60);
    record0.set("content_type", "video");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "pbc_9676646180");
    record1.set("title", "Credit Risk Modeling for Leases");
    record1.set("description", "Credit risk modeling techniques including PD estimation, LGD calculation, and portfolio aggregation");
    record1.set("order", 2);
    record1.set("duration", 60);
    record1.set("content_type", "video");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "pbc_9676646180");
    record2.set("title", "Prepayment Risk and Modeling");
    record2.set("description", "Prepayment risk analysis, behavior modeling, and impact on portfolio valuation");
    record2.set("order", 3);
    record2.set("duration", 60);
    record2.set("content_type", "video");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("course_id", "pbc_9676646180");
    record3.set("title", "Interest Rate Risk and Duration Analysis");
    record3.set("description", "Interest rate risk fundamentals, duration and convexity analysis, and hedging strategies");
    record3.set("order", 4);
    record3.set("duration", 60);
    record3.set("content_type", "video");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("course_id", "pbc_9676646180");
    record4.set("title", "Liquidity Risk and Portfolio Liquidity");
    record4.set("description", "Market liquidity, funding liquidity, and liquidity risk measurement and management");
    record4.set("order", 5);
    record4.set("duration", 60);
    record4.set("content_type", "video");
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("course_id", "pbc_9676646180");
    record5.set("title", "Portfolio Valuation Models");
    record5.set("description", "DCF models, option-adjusted spread models, and Monte Carlo simulation approaches");
    record5.set("order", 6);
    record5.set("duration", 60);
    record5.set("content_type", "video");
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("course_id", "pbc_9676646180");
    record6.set("title", "Credit Spread Modeling and Analysis");
    record6.set("description", "Spread decomposition, spread dynamics, and spread-based risk measurement");
    record6.set("order", 7);
    record6.set("duration", 60);
    record6.set("content_type", "video");
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("course_id", "pbc_9676646180");
    record7.set("title", "Portfolio Risk Aggregation and Concentration");
    record7.set("description", "Portfolio risk aggregation, concentration risk measurement, and diversification analysis");
    record7.set("order", 8);
    record7.set("duration", 60);
    record7.set("content_type", "video");
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("course_id", "pbc_9676646180");
    record8.set("title", "Stress Testing and Scenario Analysis");
    record8.set("description", "Stress testing frameworks, scenario design, and impact analysis");
    record8.set("order", 9);
    record8.set("duration", 60);
    record8.set("content_type", "video");
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("course_id", "pbc_9676646180");
    record9.set("title", "Advanced Topics and Emerging Risks");
    record9.set("description", "Machine learning applications, climate risk, cyber risk, and emerging regulatory requirements");
    record9.set("order", 10);
    record9.set("duration", 60);
    record9.set("content_type", "video");
  app.save(record9);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})