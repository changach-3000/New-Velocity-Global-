/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Mastering Creative Financing to Close Bigger Deals");
    record0.set("description", "Learn advanced financing strategies to close larger and more complex deals");
    record0.set("instructor_name", "Finance Expert");
    record0.set("instructor_bio", "Experienced financing professional with 20+ years in the industry");
    record0.set("learning_outcomes", "Master creative financing techniques, understand CFO perspectives, build compelling business cases");
    record0.set("duration_hours", 4);
    record0.set("estimated_hours", 5);
    record0.set("price", 299);
    record0.set("curriculum", "4 comprehensive modules covering mindset, financial mechanics, business cases, and objection handling");
    record0.set("image_url", "https://example.com/course1.jpg");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("title", "Practical Leasing for Finance Professionals");
    record1.set("description", "Comprehensive guide to lease structures, financial modeling, and deal negotiation");
    record1.set("instructor_name", "Leasing Specialist");
    record1.set("instructor_bio", "Senior leasing professional with expertise in complex structures");
    record1.set("learning_outcomes", "Understand lease structures, master financial modeling, handle complex arrangements, negotiate effectively");
    record1.set("duration_hours", 8);
    record1.set("estimated_hours", 10);
    record1.set("price", 499);
    record1.set("curriculum", "4 in-depth modules on lease structures, financial modeling, complex arrangements, and deal structuring");
    record1.set("image_url", "https://example.com/course2.jpg");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("title", "Equipment Leasing Sales Fundamentals");
    record2.set("description", "Essential sales skills for equipment leasing professionals");
    record2.set("instructor_name", "Sales Director");
    record2.set("instructor_bio", "Award-winning sales leader with 15+ years in equipment leasing");
    record2.set("learning_outcomes", "Prospect effectively, understand customer needs, present solutions, close deals, manage relationships");
    record2.set("duration_hours", 7.5);
    record2.set("estimated_hours", 9);
    record2.set("price", 399);
    record2.set("curriculum", "5 modules covering prospecting, needs analysis, presentations, closing, and relationship management");
    record2.set("image_url", "https://example.com/course3.jpg");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("title", "Lease Accounting Standards (ASC 842 & IFRS 16)");
    record3.set("description", "Master the new lease accounting standards and implementation strategies");
    record3.set("instructor_name", "Accounting Expert");
    record3.set("instructor_bio", "CPA with specialization in lease accounting standards");
    record3.set("learning_outcomes", "Understand ASC 842 and IFRS 16, classify leases correctly, implement accounting procedures, ensure compliance");
    record3.set("duration_hours", 10);
    record3.set("estimated_hours", 12);
    record3.set("price", 599);
    record3.set("curriculum", "6 comprehensive modules on ASC 842, IFRS 16, classification, accounting treatment, and implementation");
    record3.set("image_url", "https://example.com/course4.jpg");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("title", "Negotiation Strategies for Lease Deals");
    record4.set("description", "Advanced negotiation techniques for lease transactions");
    record4.set("instructor_name", "Negotiation Coach");
    record4.set("instructor_bio", "Professional negotiator with expertise in lease deal structures");
    record4.set("learning_outcomes", "Master negotiation fundamentals, identify leverage points, create win-win outcomes, handle difficult situations");
    record4.set("duration_hours", 5);
    record4.set("estimated_hours", 6);
    record4.set("price", 349);
    record4.set("curriculum", "5 modules on negotiation fundamentals, leverage, win-win techniques, difficult scenarios, and documentation");
    record4.set("image_url", "https://example.com/course5.jpg");
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("title", "Risk Pricing Models for Lease Portfolios");
    record5.set("description", "Advanced risk analysis and pricing strategies for lease portfolios");
    record5.set("instructor_name", "Risk Manager");
    record5.set("instructor_bio", "Portfolio risk specialist with quantitative finance background");
    record5.set("learning_outcomes", "Identify risks, analyze credit, mitigate risks, price risk-based, analyze portfolios");
    record5.set("duration_hours", 6.5);
    record5.set("estimated_hours", 8);
    record5.set("price", 449);
    record5.set("curriculum", "5 modules on risk identification, credit analysis, mitigation, pricing, and analytics");
    record5.set("image_url", "https://example.com/course6.jpg");
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("title", "Portfolio Management & Optimization");
    record6.set("description", "Strategies for managing and optimizing lease portfolios");
    record6.set("instructor_name", "Portfolio Manager");
    record6.set("instructor_bio", "Experienced portfolio manager with proven optimization track record");
    record6.set("learning_outcomes", "Analyze portfolios, track KPIs, optimize performance, monitor and report");
    record6.set("duration_hours", 5.8);
    record6.set("estimated_hours", 7);
    record6.set("price", 399);
    record6.set("curriculum", "5 modules on portfolio analysis, metrics, optimization, management, and reporting");
    record6.set("image_url", "https://example.com/course7.jpg");
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("title", "Legal Compliance in Lease Agreements");
    record7.set("description", "Legal framework and compliance requirements for lease agreements");
    record7.set("instructor_name", "Legal Counsel");
    record7.set("instructor_bio", "Attorney specializing in leasing law and compliance");
    record7.set("learning_outcomes", "Understand legal framework, ensure compliance, draft contracts, manage risks, resolve disputes");
    record7.set("duration_hours", 5);
    record7.set("estimated_hours", 6);
    record7.set("price", 349);
    record7.set("curriculum", "5 modules on legal framework, compliance, contracts, risk management, and dispute resolution");
    record7.set("image_url", "https://example.com/course8.jpg");
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("title", "Understanding Equipment Leasing Basics");
    record8.set("description", "Foundational knowledge of equipment leasing for beginners");
    record8.set("instructor_name", "Leasing Educator");
    record8.set("instructor_bio", "Experienced educator specializing in leasing fundamentals");
    record8.set("learning_outcomes", "Understand leasing basics, know lease types, understand benefits, learn the leasing process");
    record8.set("duration_hours", 3);
    record8.set("estimated_hours", 4);
    record8.set("price", 199);
    record8.set("curriculum", "4 modules covering leasing basics, lease types, benefits, and the leasing process");
    record8.set("image_url", "https://example.com/course9.jpg");
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("title", "Operational Leasing for Business Growth");
    record9.set("description", "Using operational leasing strategies to drive business growth");
    record9.set("instructor_name", "Business Growth Expert");
    record9.set("instructor_bio", "Business strategist with expertise in operational leasing");
    record9.set("learning_outcomes", "Master operational leasing, manage cash flow, scale operations, improve efficiency");
    record9.set("duration_hours", 5);
    record9.set("estimated_hours", 6);
    record9.set("price", 349);
    record9.set("curriculum", "4 modules on operational leasing fundamentals, cash flow, scaling, and efficiency");
    record9.set("image_url", "https://example.com/course10.jpg");
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("title", "Lease vs. Buy: Strategic Decision Framework");
    record10.set("description", "Framework for making strategic lease vs. buy decisions");
    record10.set("instructor_name", "Strategic Advisor");
    record10.set("instructor_bio", "Strategic consultant with expertise in capital allocation decisions");
    record10.set("learning_outcomes", "Analyze lease vs buy options, model cash flows, consider strategic factors, apply frameworks");
    record10.set("duration_hours", 4);
    record10.set("estimated_hours", 5);
    record10.set("price", 299);
    record10.set("curriculum", "4 modules on financial analysis, cash flow modeling, strategic considerations, and case studies");
    record10.set("image_url", "https://example.com/course11.jpg");
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("title", "Managing Your Leased Equipment");
    record11.set("description", "Best practices for managing leased equipment throughout its lifecycle");
    record11.set("instructor_name", "Asset Manager");
    record11.set("instructor_bio", "Asset management specialist with extensive equipment leasing experience");
    record11.set("learning_outcomes", "Manage equipment lifecycle, maintain equipment, plan for lease end, maximize asset value");
    record11.set("duration_hours", 3);
    record11.set("estimated_hours", 4);
    record11.set("price", 199);
    record11.set("curriculum", "4 modules on lifecycle management, maintenance, lease end planning, and value maximization");
    record11.set("image_url", "https://example.com/course12.jpg");
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("title", "Building Client Value Propositions in Leasing");
    record12.set("description", "Creating compelling value propositions for leasing clients");
    record12.set("instructor_name", "Value Strategist");
    record12.set("instructor_bio", "Marketing strategist specializing in value proposition development");
    record12.set("learning_outcomes", "Understand value drivers, craft propositions, communicate benefits, develop case studies");
    record12.set("duration_hours", 4.3);
    record12.set("estimated_hours", 5);
    record12.set("price", 299);
    record12.set("curriculum", "4 modules on value drivers, proposition crafting, benefit communication, and case development");
    record12.set("image_url", "https://example.com/course13.jpg");
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("title", "Advanced Leasing Strategies");
    record13.set("description", "Advanced strategies for complex leasing transactions and structures");
    record13.set("instructor_name", "Advanced Strategist");
    record13.set("instructor_bio", "Expert in complex leasing structures and advanced strategies");
    record13.set("learning_outcomes", "Master complex structures, understand synthetic leases, execute sale-leasebacks, handle cross-border deals, optimize taxes");
    record13.set("duration_hours", 12);
    record13.set("estimated_hours", 14);
    record13.set("price", 799);
    record13.set("curriculum", "6 modules on complex structures, synthetic leases, sale-leasebacks, cross-border, tax strategies, and securitization");
    record13.set("image_url", "https://example.com/course14.jpg");
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("title", "Lease Securitization & Structured Finance");
    record14.set("description", "Comprehensive guide to lease securitization and structured finance");
    record14.set("instructor_name", "Securitization Expert");
    record14.set("instructor_bio", "Specialist in lease securitization and structured finance transactions");
    record14.set("learning_outcomes", "Understand securitization, master structured finance, structure tranches, work with rating agencies, ensure compliance");
    record14.set("duration_hours", 7.5);
    record14.set("estimated_hours", 9);
    record14.set("price", 499);
    record14.set("curriculum", "5 modules on securitization, structured finance, tranches, rating agencies, and regulatory framework");
    record14.set("image_url", "https://example.com/course15.jpg");
  app.save(record14);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})