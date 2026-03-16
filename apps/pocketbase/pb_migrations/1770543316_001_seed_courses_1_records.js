/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Tax Optimization in Equipment Leasing");
    record0.set("description", "Comprehensive 7.5-hour course on tax optimization strategies in equipment leasing for tax professionals and finance managers");
    record0.set("instructor_name", "Tax Optimization Specialist");
    record0.set("price", 99.99);
    record0.set("duration_hours", 7.5);
    record0.set("learning_outcomes", "Master equipment leasing tax treatment, depreciation strategies, interest deductions, lease classification, sale-leaseback transactions, pass-through entity considerations, compliance requirements, and advanced tax strategies");
    record0.set("image_url", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800");
    record0.set("estimated_hours", 7.5);
    record0.set("badge_id", "tax-optimization-expert");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})