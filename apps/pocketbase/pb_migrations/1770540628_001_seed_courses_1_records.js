/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Tax Optimization in Equipment Leasing: Strategies for Maximum Deductions and Compliance");
    record0.set("description", "Comprehensive 7.5-hour course covering tax optimization strategies in equipment leasing for tax professionals, CFOs, and finance managers");
    record0.set("instructor_name", "Tax Optimization Expert");
    record0.set("price", 497);
    record0.set("duration_hours", 7.5);
    record0.set("learning_outcomes", "Master tax optimization strategies in equipment leasing, understand depreciation and bonus depreciation rules, optimize interest deductions, analyze lease classification and accounting treatment, evaluate sale-leaseback transactions, understand pass-through entity considerations, ensure compliance and documentation, apply advanced tax strategies");
    record0.set("image_url", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800");
    record0.set("estimated_hours", 7.5);
    record0.set("curriculum", "8 comprehensive lessons covering fundamentals, depreciation strategies, interest optimization, lease classification, sale-leasebacks, pass-through entities, compliance, and advanced strategies");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})