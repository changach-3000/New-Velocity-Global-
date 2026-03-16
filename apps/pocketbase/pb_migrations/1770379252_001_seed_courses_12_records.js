/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Lease Accounting Under ASC 842");
    record0.set("instructor_name", "Patricia Williams");
    record0.set("price", 399);
    record0.set("duration_hours", 8);
    record0.set("description", "Master the complexities of ASC 842 lease accounting standards, including classification, measurement, and disclosure requirements for tax professionals and legal advisors.");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("title", "Tax Optimization in Equipment Leasing");
    record1.set("instructor_name", "Robert Chen");
    record1.set("price", 349);
    record1.set("duration_hours", 6);
    record1.set("description", "Strategic tax planning techniques for lease structures, depreciation strategies, and maximizing tax benefits for corporate clients.");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("title", "Legal Compliance in Lease Agreements");
    record2.set("instructor_name", "Margaret Sullivan");
    record2.set("price", 379);
    record2.set("duration_hours", 7);
    record2.set("description", "Comprehensive guide to drafting, reviewing, and enforcing lease agreements with focus on legal protections and regulatory compliance.");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("title", "Risk Pricing Models for Lease Portfolios");
    record3.set("instructor_name", "James Mitchell");
    record3.set("price", 449);
    record3.set("duration_hours", 10);
    record3.set("description", "Advanced quantitative methods for pricing lease risk, credit analysis, and portfolio management for financial institutions.");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("title", "Credit Analysis in Lease Financing");
    record4.set("instructor_name", "Elena Rodriguez");
    record4.set("price", 429);
    record4.set("duration_hours", 9);
    record4.set("description", "Deep dive into credit evaluation, default probability modeling, and risk assessment for lease financing decisions.");
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("title", "Lease Securitization & Structured Finance");
    record5.set("instructor_name", "David Kumar");
    record5.set("price", 499);
    record5.set("duration_hours", 12);
    record5.set("description", "Master securitization techniques, tranching strategies, and structured finance solutions for lease portfolios.");
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("title", "Lease vs. Buy: Strategic Decision Framework");
    record6.set("instructor_name", "Amanda Foster");
    record6.set("price", 329);
    record6.set("duration_hours", 5);
    record6.set("description", "Comprehensive ROI analysis, cash flow modeling, and strategic decision-making for lease vs. purchase evaluations.");
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("title", "Operational Leasing for Business Growth");
    record7.set("instructor_name", "Thomas Bennett");
    record7.set("price", 359);
    record7.set("duration_hours", 6);
    record7.set("description", "Leverage operational leasing strategies to optimize capital allocation, improve cash flow, and accelerate business expansion.");
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("title", "Equipment Leasing ROI Optimization");
    record8.set("instructor_name", "Lisa Anderson");
    record8.set("price", 389);
    record8.set("duration_hours", 8);
    record8.set("description", "Calculate true ROI, optimize lease terms, and structure deals that maximize profitability and operational efficiency.");
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("title", "Crafting Winning Lease Pitches");
    record9.set("instructor_name", "Marcus Johnson");
    record9.set("price", 299);
    record9.set("duration_hours", 4);
    record9.set("description", "Master the art of presenting lease solutions, building compelling business cases, and closing deals with confidence.");
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("title", "Lease Sales Negotiation Mastery");
    record10.set("instructor_name", "Victoria Chen");
    record10.set("price", 319);
    record10.set("duration_hours", 5);
    record10.set("description", "Advanced negotiation techniques, objection handling, and closing strategies specific to lease sales and financing.");
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("title", "Building Client Value Propositions in Leasing");
    record11.set("instructor_name", "Christopher Moore");
    record11.set("price", 309);
    record11.set("duration_hours", 4);
    record11.set("description", "Develop persuasive value propositions, create impactful pitch decks, and communicate lease benefits to diverse client audiences.");
  app.save(record11);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})