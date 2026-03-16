/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("badges");

  const record0 = new Record(collection);
    record0.set("name", "Tax Basics Certified");
    record0.set("description", "Earned by completing fundamental tax concepts and principles");
    record0.set("icon_url", "https://icons.example.com/tax-basics.svg");
    record0.set("competency_level", "Beginner");
    record0.set("course_id", "tax-101");
    record0.set("points", 50);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("name", "Finance Fundamentals");
    record1.set("description", "Mastered the basics of financial management and accounting");
    record1.set("icon_url", "https://icons.example.com/finance-basics.svg");
    record1.set("competency_level", "Beginner");
    record1.set("course_id", "finance-101");
    record1.set("points", 50);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("name", "Business Starter");
    record2.set("description", "Completed foundational business concepts and entrepreneurship basics");
    record2.set("icon_url", "https://icons.example.com/business-starter.svg");
    record2.set("competency_level", "Beginner");
    record2.set("course_id", "business-101");
    record2.set("points", 50);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("name", "Tax Strategist");
    record3.set("description", "Advanced knowledge of tax planning and optimization strategies");
    record3.set("icon_url", "https://icons.example.com/tax-strategist.svg");
    record3.set("competency_level", "Intermediate");
    record3.set("course_id", "tax-201");
    record3.set("points", 100);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("name", "Finance Pro");
    record4.set("description", "Proficient in investment analysis and portfolio management");
    record4.set("icon_url", "https://icons.example.com/finance-pro.svg");
    record4.set("competency_level", "Intermediate");
    record4.set("course_id", "finance-201");
    record4.set("points", 100);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("name", "Business Strategist");
    record5.set("description", "Expert in business strategy and operational excellence");
    record5.set("icon_url", "https://icons.example.com/business-strategist.svg");
    record5.set("competency_level", "Intermediate");
    record5.set("course_id", "business-201");
    record5.set("points", 100);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("name", "Tax Master");
    record6.set("description", "Mastered complex tax scenarios and compliance requirements");
    record6.set("icon_url", "https://icons.example.com/tax-master.svg");
    record6.set("competency_level", "Advanced");
    record6.set("course_id", "tax-301");
    record6.set("points", 150);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("name", "Financial Analyst Elite");
    record7.set("description", "Expert-level financial analysis and market insights");
    record7.set("icon_url", "https://icons.example.com/financial-analyst.svg");
    record7.set("competency_level", "Advanced");
    record7.set("course_id", "finance-301");
    record7.set("points", 150);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("name", "Business Growth Hacker");
    record8.set("description", "Advanced techniques for scaling and growing businesses");
    record8.set("icon_url", "https://icons.example.com/growth-hacker.svg");
    record8.set("competency_level", "Advanced");
    record8.set("course_id", "business-301");
    record8.set("points", 150);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("name", "Tax Authority");
    record9.set("description", "Recognized expert in all aspects of taxation and compliance");
    record9.set("icon_url", "https://icons.example.com/tax-authority.svg");
    record9.set("competency_level", "Expert");
    record9.set("course_id", "tax-401");
    record9.set("points", 200);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("name", "Financial Wizard");
    record10.set("description", "Master of financial strategy and wealth management");
    record10.set("icon_url", "https://icons.example.com/financial-wizard.svg");
    record10.set("competency_level", "Expert");
    record10.set("course_id", "finance-401");
    record10.set("points", 200);
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("name", "Business Visionary");
    record11.set("description", "Visionary leader with mastery of business transformation");
    record11.set("icon_url", "https://icons.example.com/business-visionary.svg");
    record11.set("competency_level", "Expert");
    record11.set("course_id", "sales-401");
    record11.set("points", 200);
  app.save(record11);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})