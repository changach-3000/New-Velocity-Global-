/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Advanced Leasing Strategies");
    record0.set("description", "Master advanced strategies for lease structuring, pricing, risk management, and portfolio optimization");
    record0.set("instructor_name", "Leasing Expert");
    record0.set("instructor_bio", "Industry veteran with 20+ years in advanced leasing strategies");
    record0.set("price", 299);
    record0.set("duration_hours", 40);
    record0.set("learning_outcomes", "Understand strategic lease structuring, advanced pricing models, risk management, portfolio optimization, and market dynamics");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("title", "Advanced Lease Structuring");
    record1.set("description", "Deep dive into complex lease structures, residual value management, and documentation best practices");
    record1.set("instructor_name", "Structuring Specialist");
    record1.set("instructor_bio", "Expert in complex lease agreements and documentation");
    record1.set("price", 279);
    record1.set("duration_hours", 38);
    record1.set("learning_outcomes", "Master lease agreement fundamentals, complex structures, residual value management, and documentation");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("title", "Vendor Leasing: Comprehensive Guide to Vendor-Provided Equipment Financing");
    record2.set("description", "Complete guide to vendor leasing programs, relationships, and equipment financing models");
    record2.set("instructor_name", "Vendor Leasing Expert");
    record2.set("instructor_bio", "Specialist in vendor relationships and equipment financing");
    record2.set("price", 289);
    record2.set("duration_hours", 42);
    record2.set("learning_outcomes", "Understand vendor leasing fundamentals, negotiations, financing models, and partnership strategies");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("title", "Tax Optimization in Equipment Leasing");
    record3.set("description", "Strategic tax planning and deduction optimization for equipment leasing");
    record3.set("instructor_name", "Tax Specialist");
    record3.set("instructor_bio", "CPA with expertise in leasing tax strategies");
    record3.set("price", 299);
    record3.set("duration_hours", 40);
    record3.set("learning_outcomes", "Master tax fundamentals, deduction strategies, compliance, and tax planning in leasing");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("title", "Tax Optimization in Equipment Leasing: Strategies for Maximum Deductions and Compliance");
    record4.set("description", "Advanced tax strategies for maximum deductions and regulatory compliance");
    record4.set("instructor_name", "Advanced Tax Specialist");
    record4.set("instructor_bio", "Expert in tax optimization and compliance frameworks");
    record4.set("price", 329);
    record4.set("duration_hours", 45);
    record4.set("learning_outcomes", "Advanced tax strategies, deduction maximization, compliance framework, and audit preparation");
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("title", "Risk Pricing Models for Lease Portfolios: Advanced Financial Analysis and Valuation");
    record5.set("description", "Advanced financial analysis and valuation techniques for lease portfolios");
    record5.set("instructor_name", "Financial Analyst");
    record5.set("instructor_bio", "Expert in risk assessment and portfolio valuation");
    record5.set("price", 349);
    record5.set("duration_hours", 48);
    record5.set("learning_outcomes", "Master risk assessment, pricing models, portfolio analysis, and advanced financial metrics");
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("title", "Introduction to Leasing");
    record6.set("description", "Comprehensive introduction to leasing fundamentals and key concepts");
    record6.set("instructor_name", "Leasing Fundamentals Instructor");
    record6.set("instructor_bio", "Experienced educator in leasing basics");
    record6.set("price", 199);
    record6.set("duration_hours", 30);
    record6.set("learning_outcomes", "Understand leasing basics, types of leases, economics, and key players");
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("title", "Operational Leasing for Business Growth");
    record7.set("description", "Leverage operational leasing for business growth and efficiency");
    record7.set("instructor_name", "Business Growth Specialist");
    record7.set("instructor_bio", "Expert in operational leasing and business scaling");
    record7.set("price", 269);
    record7.set("duration_hours", 36);
    record7.set("learning_outcomes", "Master operational lease fundamentals, growth strategies, and performance metrics");
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("title", "Legal Compliance in Lease Agreements");
    record8.set("description", "Navigate legal frameworks and compliance requirements in lease agreements");
    record8.set("instructor_name", "Legal Compliance Expert");
    record8.set("instructor_bio", "Attorney specializing in lease law and compliance");
    record8.set("price", 289);
    record8.set("duration_hours", 38);
    record8.set("learning_outcomes", "Understand legal frameworks, regulatory requirements, contract compliance, and dispute resolution");
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("title", "Lease vs Buy: Strategic Decision Framework");
    record9.set("description", "Strategic framework for making lease vs buy decisions");
    record9.set("instructor_name", "Strategic Decision Expert");
    record9.set("instructor_bio", "Consultant specializing in lease vs buy analysis");
    record9.set("price", 249);
    record9.set("duration_hours", 32);
    record9.set("learning_outcomes", "Master decision framework, financial analysis, and implementation strategies");
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("title", "Lease Securitization & Structured Finance");
    record10.set("description", "Advanced concepts in lease securitization and structured finance");
    record10.set("instructor_name", "Structured Finance Expert");
    record10.set("instructor_bio", "Specialist in securitization and asset-backed securities");
    record10.set("price", 349);
    record10.set("duration_hours", 48);
    record10.set("learning_outcomes", "Understand securitization fundamentals, structured finance, and market dynamics");
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("title", "Lease Sales Negotiation Mastery");
    record11.set("description", "Master negotiation and sales strategies for lease transactions");
    record11.set("instructor_name", "Sales Negotiation Expert");
    record11.set("instructor_bio", "Top sales professional with 15+ years in lease negotiations");
    record11.set("price", 259);
    record11.set("duration_hours", 34);
    record11.set("learning_outcomes", "Master negotiation fundamentals, sales strategies, and relationship building");
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("title", "Lease Accounting under ASC 842");
    record12.set("description", "Comprehensive guide to lease accounting under ASC 842 standards");
    record12.set("instructor_name", "Accounting Standards Expert");
    record12.set("instructor_bio", "CPA specializing in lease accounting standards");
    record12.set("price", 309);
    record12.set("duration_hours", 42);
    record12.set("learning_outcomes", "Master ASC 842 overview, lease classification, measurement, and disclosure requirements");
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("title", "Lease Accounting Standards");
    record13.set("description", "Overview of lease accounting standards including GAAP and IFRS");
    record13.set("instructor_name", "Accounting Standards Educator");
    record13.set("instructor_bio", "Expert in accounting standards and their evolution");
    record13.set("price", 289);
    record13.set("duration_hours", 40);
    record13.set("learning_outcomes", "Understand accounting standards overview, GAAP vs IFRS, and current standards");
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("title", "Lease Accounting Deep Dive (IFRS 16 & ASC 842)");
    record14.set("description", "In-depth analysis of IFRS 16 and ASC 842 with comparative analysis");
    record14.set("instructor_name", "Lease Accounting Specialist");
    record14.set("instructor_bio", "Expert in both IFRS 16 and ASC 842 standards");
    record14.set("price", 329);
    record14.set("duration_hours", 45);
    record14.set("learning_outcomes", "Master IFRS 16 and ASC 842 fundamentals, comparative analysis, and implementation");
  app.save(record14);

  const record15 = new Record(collection);
    record15.set("title", "Finance Lease Analysis");
    record15.set("description", "Comprehensive analysis of finance leases and valuation methods");
    record15.set("instructor_name", "Finance Lease Expert");
    record15.set("instructor_bio", "Specialist in finance lease analysis and valuation");
    record15.set("price", 279);
    record15.set("duration_hours", 38);
    record15.set("learning_outcomes", "Master finance lease basics, financial analysis, valuation, and risk assessment");
  app.save(record15);

  const record16 = new Record(collection);
    record16.set("title", "Equipment Leasing Strategies");
    record16.set("description", "Strategic approaches to equipment leasing and market positioning");
    record16.set("instructor_name", "Equipment Leasing Strategist");
    record16.set("instructor_bio", "Expert in equipment leasing market strategies");
    record16.set("price", 269);
    record16.set("duration_hours", 36);
    record16.set("learning_outcomes", "Understand equipment leasing overview, strategic planning, and growth strategies");
  app.save(record16);

  const record17 = new Record(collection);
    record17.set("title", "Equipment Leasing ROI");
    record17.set("description", "Calculate and optimize ROI in equipment leasing programs");
    record17.set("instructor_name", "ROI Optimization Expert");
    record17.set("instructor_bio", "Specialist in ROI calculation and optimization");
    record17.set("price", 249);
    record17.set("duration_hours", 32);
    record17.set("learning_outcomes", "Master ROI fundamentals, calculation methods, and optimization strategies");
  app.save(record17);

  const record18 = new Record(collection);
    record18.set("title", "Credit Analysis in Leasing");
    record18.set("description", "Credit analysis techniques and risk assessment for lease portfolios");
    record18.set("instructor_name", "Credit Analysis Expert");
    record18.set("instructor_bio", "Specialist in credit risk assessment and scoring models");
    record18.set("price", 289);
    record18.set("duration_hours", 38);
    record18.set("learning_outcomes", "Master credit analysis basics, risk assessment, scoring models, and portfolio management");
  app.save(record18);

  const record19 = new Record(collection);
    record19.set("title", "Crafting Winning Leases");
    record19.set("description", "Design and customize leases to win deals and create value");
    record19.set("instructor_name", "Lease Design Expert");
    record19.set("instructor_bio", "Expert in lease design and customization");
    record19.set("price", 259);
    record19.set("duration_hours", 34);
    record19.set("learning_outcomes", "Master lease design principles, customer needs analysis, and customization strategies");
  app.save(record19);

  const record20 = new Record(collection);
    record20.set("title", "Building Client Value Propositions in Leasing");
    record20.set("description", "Develop compelling value propositions for lease clients");
    record20.set("instructor_name", "Value Proposition Specialist");
    record20.set("instructor_bio", "Expert in client value creation and relationship management");
    record20.set("price", 269);
    record20.set("duration_hours", 36);
    record20.set("learning_outcomes", "Master value proposition fundamentals, client needs assessment, and relationship management");
  app.save(record20);

  const record21 = new Record(collection);
    record21.set("title", "Practical Leasing for Finance Professionals");
    record21.set("description", "Practical leasing applications for finance professionals");
    record21.set("instructor_name", "Finance Professional Educator");
    record21.set("instructor_bio", "Experienced finance professional with leasing expertise");
    record21.set("price", 279);
    record21.set("duration_hours", 38);
    record21.set("learning_outcomes", "Master leasing fundamentals for finance, financial modeling, and real-world applications");
  app.save(record21);

  const record22 = new Record(collection);
    record22.set("title", "Credit Analysis in Lease Financing");
    record22.set("description", "Advanced credit analysis for lease financing decisions");
    record22.set("instructor_name", "Lease Financing Specialist");
    record22.set("instructor_bio", "Expert in credit analysis and lease financing");
    record22.set("price", 299);
    record22.set("duration_hours", 40);
    record22.set("learning_outcomes", "Master credit fundamentals, borrower analysis, collateral evaluation, and risk mitigation");
  app.save(record22);

  const record23 = new Record(collection);
    record23.set("title", "Equipment Leasing ROI Optimization");
    record23.set("description", "Optimize ROI through cost reduction and revenue enhancement");
    record23.set("instructor_name", "ROI Optimization Specialist");
    record23.set("instructor_bio", "Expert in ROI optimization and portfolio management");
    record23.set("price", 289);
    record23.set("duration_hours", 40);
    record23.set("learning_outcomes", "Master ROI optimization, cost reduction, revenue enhancement, and continuous improvement");
  app.save(record23);

  const record24 = new Record(collection);
    record24.set("title", "Crafting Winning Lease Pitches");
    record24.set("description", "Develop and deliver winning lease pitches and presentations");
    record24.set("instructor_name", "Sales Pitch Expert");
    record24.set("instructor_bio", "Expert in sales presentations and pitch development");
    record24.set("price", 249);
    record24.set("duration_hours", 32);
    record24.set("learning_outcomes", "Master pitch development, presentation skills, objection handling, and closing strategies");
  app.save(record24);

  const record25 = new Record(collection);
    record25.set("title", "Financial Lease Analysis");
    record25.set("description", "Comprehensive financial analysis of lease transactions");
    record25.set("instructor_name", "Financial Analysis Expert");
    record25.set("instructor_bio", "Expert in financial analysis and lease valuation");
    record25.set("price", 279);
    record25.set("duration_hours", 38);
    record25.set("learning_outcomes", "Master financial analysis fundamentals, lease valuation, cash flow analysis, and decision making");
  app.save(record25);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})