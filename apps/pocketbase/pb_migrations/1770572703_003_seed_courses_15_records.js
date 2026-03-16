/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Advanced Lease Structuring");
    record0.set("description", "Master complex lease structures, including leveraged leases, synthetic leases, and cross-border transactions. Learn advanced financial modeling and risk mitigation strategies.");
    record0.set("duration_hours", 40);
    record0.set("difficulty", "Advanced");
    record0.set("role", "Financier");
    record0.set("instructor_name", "Dr. Michael Chen");
    record0.set("learning_outcomes", "Understand complex lease structures; Master financial modeling; Analyze risk mitigation strategies; Evaluate cross-border implications");
    record0.set("image_url", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400");
    record0.set("price", 499);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("title", "Financial Analysis & Lease Valuation");
    record1.set("description", "Deep dive into lease valuation methodologies, NPV analysis, IRR calculations, and financial impact assessment on balance sheets.");
    record1.set("duration_hours", 35);
    record1.set("difficulty", "Advanced");
    record1.set("role", "Financier");
    record1.set("instructor_name", "Sarah Williams");
    record1.set("learning_outcomes", "Master NPV and IRR calculations; Understand lease valuation methods; Analyze financial statement impact; Perform sensitivity analysis");
    record1.set("image_url", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400");
    record1.set("price", 449);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("title", "Risk Assessment in Equipment Leasing");
    record2.set("description", "Comprehensive guide to identifying, analyzing, and mitigating risks in equipment leasing transactions including credit, operational, and market risks.");
    record2.set("duration_hours", 30);
    record2.set("difficulty", "Advanced");
    record2.set("role", "Financier");
    record2.set("instructor_name", "James Patterson");
    record2.set("learning_outcomes", "Identify lease risks; Assess credit exposure; Evaluate operational risks; Develop mitigation strategies");
    record2.set("image_url", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400");
    record2.set("price", 399);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("title", "Lease Accounting Standards IFRS 16 & ASC 842");
    record3.set("description", "Complete coverage of modern lease accounting standards, including recognition, measurement, presentation, and disclosure requirements.");
    record3.set("duration_hours", 32);
    record3.set("difficulty", "Advanced");
    record3.set("role", "Financier");
    record3.set("instructor_name", "Dr. Patricia Moore");
    record3.set("learning_outcomes", "Understand IFRS 16 requirements; Master ASC 842 standards; Apply accounting treatments; Prepare financial disclosures");
    record3.set("image_url", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400");
    record3.set("price", 429);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("title", "Portfolio Management & Optimization");
    record4.set("description", "Learn strategies for managing lease portfolios, optimizing returns, and balancing risk across diverse asset classes and customer segments.");
    record4.set("duration_hours", 28);
    record4.set("difficulty", "Advanced");
    record4.set("role", "Financier");
    record4.set("instructor_name", "Robert Johnson");
    record4.set("learning_outcomes", "Develop portfolio strategies; Optimize asset allocation; Manage customer relationships; Maximize returns");
    record4.set("image_url", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400");
    record4.set("price", 379);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("title", "Equipment Leasing Sales Fundamentals");
    record5.set("description", "Introduction to equipment leasing sales, including product knowledge, customer needs analysis, and basic sales techniques.");
    record5.set("duration_hours", 25);
    record5.set("difficulty", "Beginner");
    record5.set("role", "Sales Person");
    record5.set("instructor_name", "Lisa Anderson");
    record5.set("learning_outcomes", "Understand leasing products; Identify customer needs; Learn sales process; Develop communication skills");
    record5.set("image_url", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400");
    record5.set("price", 299);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("title", "Customer Needs Analysis & Discovery");
    record6.set("description", "Master techniques for uncovering customer pain points, understanding business objectives, and positioning leasing solutions effectively.");
    record6.set("duration_hours", 28);
    record6.set("difficulty", "Intermediate");
    record6.set("role", "Sales Person");
    record6.set("instructor_name", "David Martinez");
    record6.set("learning_outcomes", "Conduct needs analysis; Ask discovery questions; Understand customer objectives; Position solutions");
    record6.set("image_url", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400");
    record6.set("price", 349);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("title", "Negotiation Strategies for Lease Deals");
    record7.set("description", "Advanced negotiation techniques specific to lease transactions, including pricing strategies, term negotiations, and win-win outcomes.");
    record7.set("duration_hours", 30);
    record7.set("difficulty", "Intermediate");
    record7.set("role", "Sales Person");
    record7.set("instructor_name", "Jennifer Lee");
    record7.set("learning_outcomes", "Master negotiation tactics; Understand pricing models; Negotiate terms; Close deals effectively");
    record7.set("image_url", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400");
    record7.set("price", 369);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("title", "Building Long-Term Client Relationships");
    record8.set("description", "Strategies for developing lasting customer relationships, managing accounts, and creating opportunities for repeat business and referrals.");
    record8.set("duration_hours", 24);
    record8.set("difficulty", "Intermediate");
    record8.set("role", "Sales Person");
    record8.set("instructor_name", "Thomas Brown");
    record8.set("learning_outcomes", "Build client relationships; Manage accounts; Create loyalty; Generate referrals");
    record8.set("image_url", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400");
    record8.set("price", 329);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("title", "Sales Closing Techniques & Deal Management");
    record9.set("description", "Proven closing techniques, objection handling, and deal management strategies to successfully complete lease transactions.");
    record9.set("duration_hours", 26);
    record9.set("difficulty", "Intermediate");
    record9.set("role", "Sales Person");
    record9.set("instructor_name", "Michelle Garcia");
    record9.set("learning_outcomes", "Master closing techniques; Handle objections; Manage deal flow; Complete transactions");
    record9.set("image_url", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400");
    record9.set("price", 339);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("title", "Understanding Equipment Leasing Basics");
    record10.set("description", "Beginner-friendly introduction to equipment leasing, covering lease types, benefits, and how leasing works compared to purchasing.");
    record10.set("duration_hours", 20);
    record10.set("difficulty", "Beginner");
    record10.set("role", "Customer");
    record10.set("instructor_name", "Emily White");
    record10.set("learning_outcomes", "Understand lease types; Learn leasing benefits; Compare lease vs buy; Understand basic terms");
    record10.set("image_url", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400");
    record10.set("price", 199);
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("title", "Evaluating Lease vs Buy Decisions");
    record11.set("description", "Comprehensive guide to analyzing financial and operational factors when deciding between leasing and purchasing equipment.");
    record11.set("duration_hours", 22);
    record11.set("difficulty", "Beginner");
    record11.set("role", "Customer");
    record11.set("instructor_name", "Kevin Davis");
    record11.set("learning_outcomes", "Analyze financial factors; Evaluate operational considerations; Make informed decisions; Calculate costs");
    record11.set("image_url", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400");
    record11.set("price", 219);
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("title", "Lease Agreement Terms & Conditions");
    record12.set("description", "Detailed explanation of lease agreement components, terms, conditions, and what to look for when reviewing lease documents.");
    record12.set("duration_hours", 24);
    record12.set("difficulty", "Intermediate");
    record12.set("role", "Customer");
    record12.set("instructor_name", "Amanda Taylor");
    record12.set("learning_outcomes", "Understand lease terms; Review agreements; Identify key clauses; Protect your interests");
    record12.set("image_url", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400");
    record12.set("price", 249);
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("title", "Managing Your Leased Equipment");
    record13.set("description", "Best practices for managing leased equipment, including maintenance, compliance, and end-of-lease considerations.");
    record13.set("duration_hours", 18);
    record13.set("difficulty", "Beginner");
    record13.set("role", "Customer");
    record13.set("instructor_name", "Christopher Wilson");
    record13.set("learning_outcomes", "Manage equipment properly; Maintain compliance; Handle maintenance; Plan for lease end");
    record13.set("image_url", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400");
    record13.set("price", 179);
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("title", "Maximizing Value from Equipment Leasing");
    record14.set("description", "Strategies for optimizing lease benefits, managing costs, and leveraging leasing for business growth and flexibility.");
    record14.set("duration_hours", 20);
    record14.set("difficulty", "Intermediate");
    record14.set("role", "Customer");
    record14.set("instructor_name", "Rachel Green");
    record14.set("learning_outcomes", "Optimize lease benefits; Manage costs; Leverage flexibility; Plan strategically");
    record14.set("image_url", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400");
    record14.set("price", 229);
  app.save(record14);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})