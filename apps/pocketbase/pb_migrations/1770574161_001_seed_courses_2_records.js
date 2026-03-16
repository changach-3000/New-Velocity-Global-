/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Advanced Lease Structuring");
    record0.set("description", "Master complex lease structures and financial modeling");
    record0.set("instructor_name", "Finance Expert");
    record0.set("price", 99.99);
    record0.set("duration_hours", 8);
    record0.set("learning_outcomes", "Understand complex lease structures, Financial modeling techniques, Risk assessment in leasing, Structuring strategies");
    record0.set("image_url", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("title", "Financial Analysis & Lease Valuation");
    record1.set("description", "Learn valuation methods and economic modeling");
    record1.set("instructor_name", "Finance Expert");
    record1.set("price", 89.99);
    record1.set("duration_hours", 7);
    record1.set("learning_outcomes", "Valuation methodologies, Economic modeling, NPV and IRR analysis, Lease comparison techniques");
    record1.set("image_url", "https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=800");
  app.save(record1);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})