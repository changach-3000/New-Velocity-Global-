/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Advanced Lease Structuring");
    record0.set("description", "Master complex lease structures, including leveraged leases, synthetic leases, and cross-border transactions. Learn advanced financial modeling and risk mitigation strategies for sophisticated lease arrangements.");
    record0.set("instructor_name", "Dr. Michael Chen");
    record0.set("instructor_bio", "20+ years in lease structuring and financial engineering");
    record0.set("price", 2500);
    record0.set("duration_hours", 40);
    record0.set("learning_outcomes", "Understand complex lease structures, financial modeling, risk assessment, regulatory compliance");
    record0.set("image_url", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500");
    record0.set("curriculum", "Module 1: Leveraged Leases; Module 2: Synthetic Leases; Module 3: Cross-Border Transactions; Module 4: Financial Modeling");
    record0.set("estimated_hours", 40);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("title", "Financial Analysis & Lease Valuation");
    record1.set("description", "Deep dive into lease valuation methodologies, NPV analysis, IRR calculations, and financial statement impact. Learn to evaluate lease economics and make data-driven decisions.");
    record1.set("instructor_name", "Sarah Mitchell");
    record1.set("instructor_bio", "CFA charterholder with 15 years in lease finance");
    record1.set("price", 2200);
    record1.set("duration_hours", 35);
    record1.set("learning_outcomes", "Master valuation techniques, financial analysis, NPV/IRR calculations, statement analysis");
    record1.set("image_url", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500");
    record1.set("curriculum", "Module 1: Valuation Fundamentals; Module 2: NPV & IRR Analysis; Module 3: Financial Statements; Module 4: Case Studies");
    record1.set("estimated_hours", 35);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("title", "Risk Assessment in Equipment Leasing");
    record2.set("description", "Comprehensive risk management framework for equipment leasing. Identify, assess, and mitigate credit, operational, and market risks in lease portfolios.");
    record2.set("instructor_name", "James Rodriguez");
    record2.set("instructor_bio", "Risk management expert with 18 years in leasing industry");
    record2.set("price", 2000);
    record2.set("duration_hours", 32);
    record2.set("learning_outcomes", "Risk identification, credit analysis, portfolio management, compliance frameworks");
    record2.set("image_url", "https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=500");
    record2.set("curriculum", "Module 1: Risk Framework; Module 2: Credit Analysis; Module 3: Portfolio Management; Module 4: Compliance");
    record2.set("estimated_hours", 32);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("title", "Lease Accounting Standards");
    record3.set("description", "Navigate ASC 842 and IFRS 16 requirements. Learn proper lease classification, measurement, and disclosure requirements for financial reporting.");
    record3.set("instructor_name", "Patricia Johnson");
    record3.set("instructor_bio", "Accounting standards expert, former Big 4 auditor");
    record3.set("price", 1800);
    record3.set("duration_hours", 28);
    record3.set("learning_outcomes", "ASC 842 compliance, IFRS 16 standards, lease classification, financial reporting");
    record3.set("image_url", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500");
    record3.set("curriculum", "Module 1: ASC 842 Overview; Module 2: IFRS 16; Module 3: Classification & Measurement; Module 4: Disclosures");
    record3.set("estimated_hours", 28);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("title", "Equipment Leasing Sales Fundamentals");
    record4.set("description", "Essential skills for equipment leasing sales professionals. Learn product knowledge, sales techniques, and customer engagement strategies to close deals.");
    record4.set("instructor_name", "David Thompson");
    record4.set("instructor_bio", "Top-performing sales leader with 12 years in equipment leasing");
    record4.set("price", 1500);
    record4.set("duration_hours", 24);
    record4.set("learning_outcomes", "Product knowledge, sales techniques, customer engagement, deal closing");
    record4.set("image_url", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500");
    record4.set("curriculum", "Module 1: Product Fundamentals; Module 2: Sales Process; Module 3: Customer Engagement; Module 4: Deal Closing");
    record4.set("estimated_hours", 24);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("title", "Customer Needs Analysis & Discovery");
    record5.set("description", "Master consultative selling techniques to uncover customer needs and position leasing solutions effectively. Build strong client relationships through discovery.");
    record5.set("instructor_name", "Lisa Anderson");
    record5.set("instructor_bio", "Sales consultant with expertise in consultative selling");
    record5.set("price", 1400);
    record5.set("duration_hours", 20);
    record5.set("learning_outcomes", "Needs analysis, consultative selling, customer discovery, solution positioning");
    record5.set("image_url", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500");
    record5.set("curriculum", "Module 1: Discovery Framework; Module 2: Needs Analysis; Module 3: Solution Positioning; Module 4: Relationship Building");
    record5.set("estimated_hours", 20);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("title", "Negotiation Strategies for Lease Deals");
    record6.set("description", "Advanced negotiation tactics for lease transactions. Learn to navigate complex negotiations, manage objections, and achieve win-win outcomes.");
    record6.set("instructor_name", "Robert Williams");
    record6.set("instructor_bio", "Negotiation expert with 14 years in lease sales");
    record6.set("price", 1600);
    record6.set("duration_hours", 22);
    record6.set("learning_outcomes", "Negotiation tactics, objection handling, deal structuring, win-win outcomes");
    record6.set("image_url", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500");
    record6.set("curriculum", "Module 1: Negotiation Framework; Module 2: Tactics & Strategies; Module 3: Objection Handling; Module 4: Deal Structuring");
    record6.set("estimated_hours", 22);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("title", "Building Long-Term Client Relationships");
    record7.set("description", "Develop strategies for customer retention and lifetime value. Learn account management, relationship nurturing, and cross-selling techniques.");
    record7.set("instructor_name", "Jennifer Lee");
    record7.set("instructor_bio", "Account management specialist with 11 years experience");
    record7.set("price", 1300);
    record7.set("duration_hours", 18);
    record7.set("learning_outcomes", "Account management, customer retention, relationship nurturing, cross-selling");
    record7.set("image_url", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500");
    record7.set("curriculum", "Module 1: Account Strategy; Module 2: Relationship Nurturing; Module 3: Retention Strategies; Module 4: Cross-Selling");
    record7.set("estimated_hours", 18);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("title", "Understanding Equipment Leasing Basics");
    record8.set("description", "Introduction to equipment leasing for business decision-makers. Learn lease fundamentals, benefits, and how leasing can support business growth.");
    record8.set("instructor_name", "Mark Peterson");
    record8.set("instructor_bio", "Leasing educator with 10 years in customer education");
    record8.set("price", 800);
    record8.set("duration_hours", 12);
    record8.set("learning_outcomes", "Lease fundamentals, benefits, business applications, decision-making");
    record8.set("image_url", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500");
    record8.set("curriculum", "Module 1: Leasing Basics; Module 2: Types of Leases; Module 3: Benefits & Advantages; Module 4: Getting Started");
    record8.set("estimated_hours", 12);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("title", "Evaluating Lease vs. Buy Decisions");
    record9.set("description", "Comprehensive guide to evaluating lease versus purchase decisions. Learn financial analysis tools and frameworks to make optimal equipment acquisition choices.");
    record9.set("instructor_name", "Emily Watson");
    record9.set("instructor_bio", "Financial advisor specializing in equipment decisions");
    record9.set("price", 900);
    record9.set("duration_hours", 14);
    record9.set("learning_outcomes", "Financial analysis, lease vs. buy evaluation, decision frameworks, cost analysis");
    record9.set("image_url", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500");
    record9.set("curriculum", "Module 1: Comparison Framework; Module 2: Financial Analysis; Module 3: Cost Evaluation; Module 4: Decision Making");
    record9.set("estimated_hours", 14);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("title", "Lease Agreement Terms & Conditions");
    record10.set("description", "Understand lease agreement components, terms, conditions, and obligations. Learn to review and negotiate lease documents effectively.");
    record10.set("instructor_name", "Thomas Brown");
    record10.set("instructor_bio", "Legal expert in lease agreements");
    record10.set("price", 950);
    record10.set("duration_hours", 16);
    record10.set("learning_outcomes", "Lease agreement components, terms review, obligation understanding, negotiation");
    record10.set("image_url", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500");
    record10.set("curriculum", "Module 1: Agreement Components; Module 2: Key Terms; Module 3: Obligations & Rights; Module 4: Negotiation Tips");
    record10.set("estimated_hours", 16);
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("title", "Managing Your Leased Equipment");
    record11.set("description", "Best practices for managing leased equipment throughout the lease term. Learn maintenance, compliance, and end-of-lease considerations.");
    record11.set("instructor_name", "Amanda Foster");
    record11.set("instructor_bio", "Equipment management specialist");
    record11.set("price", 700);
    record11.set("duration_hours", 10);
    record11.set("learning_outcomes", "Equipment management, maintenance, compliance, end-of-lease procedures");
    record11.set("image_url", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500");
    record11.set("curriculum", "Module 1: Management Basics; Module 2: Maintenance & Care; Module 3: Compliance; Module 4: End-of-Lease");
    record11.set("estimated_hours", 10);
  app.save(record11);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})