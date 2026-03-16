/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Equipment Leasing ROI");
    record0.set("description", "Master ROI analysis for equipment leasing. Learn to calculate and optimize returns on leased equipment. Understand lease vs. buy decisions, ROI metrics, and financial modeling. Develop skills to maximize profitability and make data-driven leasing decisions that drive business value.");
    record0.set("instructor_name", "Leasing Professionals Academy");
    record0.set("price", 1);
    record0.set("duration_hours", 7);
    record0.set("image_url", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})