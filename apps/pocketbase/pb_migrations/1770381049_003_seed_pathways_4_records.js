/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pathways");

  const record0 = new Record(collection);
    record0.set("name", "Tax Accountant Mastery");
    record0.set("description", "Complete pathway to become a certified tax accountant. Learn tax planning, compliance, and strategic tax optimization.");
    record0.set("target_role", "Tax Accountant");
    record0.set("course_sequence", "tax-101,tax-201,tax-301,tax-401");
    record0.set("skill_level", "Advanced");
    record0.set("icon_url", "https://icons.example.com/tax-accountant.svg");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("name", "Financial Expert Track");
    record1.set("description", "Comprehensive pathway for aspiring financial professionals. Master investment strategies, portfolio management, and financial analysis.");
    record1.set("target_role", "Financier");
    record1.set("course_sequence", "finance-101,finance-201,finance-301,finance-401");
    record1.set("skill_level", "Advanced");
    record1.set("icon_url", "https://icons.example.com/financier.svg");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("name", "Business Owner Essentials");
    record2.set("description", "Essential skills for entrepreneurs and business owners. Learn business strategy, operations, and growth hacking.");
    record2.set("target_role", "Business Owner");
    record2.set("course_sequence", "business-101,business-201,business-301");
    record2.set("skill_level", "Intermediate");
    record2.set("icon_url", "https://icons.example.com/business-owner.svg");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("name", "Sales Professional Excellence");
    record3.set("description", "Master the art of sales and client relationship management. Learn negotiation, closing techniques, and customer retention.");
    record3.set("target_role", "Sales Professional");
    record3.set("course_sequence", "sales-101,sales-201,sales-301,sales-401");
    record3.set("skill_level", "Intermediate");
    record3.set("icon_url", "https://icons.example.com/sales-pro.svg");
  app.save(record3);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})