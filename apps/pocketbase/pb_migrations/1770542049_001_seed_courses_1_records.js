/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Tax Optimization in Equipment Leasing");
    record0.set("description", "Comprehensive 8-lesson course covering tax planning in equipment leasing");
    record0.set("instructor_name", "Tax Optimization Expert");
    record0.set("price", 2999);
    record0.set("duration_hours", 40);
    record0.set("learning_outcomes", "Master equipment leasing tax strategies, depreciation optimization, interest deductions, lease classification, sale-leasebacks, pass-through entities, compliance, and advanced strategies");
    record0.set("image_url", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800");
    record0.set("estimated_hours", 40);
    record0.set("badge_id", "tax-optimization");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})