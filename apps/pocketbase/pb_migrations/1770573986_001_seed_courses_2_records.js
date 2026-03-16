/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Advanced Lease Structuring");
    record0.set("description", "Master complex lease structures, including NNN leases, percentage leases, ground leases, and master leases. Learn financial modeling and deal structuring techniques.");
    record0.set("instructor_name", "Mastering the Art of Equipment Leasing");
    record0.set("price", 99.99);
    record0.set("duration_hours", 8);
    record0.set("learning_outcomes", "Master complex lease structures and financial modeling");
    record0.set("image_url", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800");
    record0.set("curriculum", "Advanced Lease Structuring Specialist Program");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("title", "Financial Analysis & Lease Valuation");
    record1.set("description", "Deep dive into financial analysis techniques, valuation methods, and economic modeling for equipment leases.");
    record1.set("instructor_name", "Mastering the Art of Equipment Leasing");
    record1.set("price", 99.99);
    record1.set("duration_hours", 7);
    record1.set("learning_outcomes", "Master financial analysis and lease valuation techniques");
    record1.set("image_url", "https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=800");
    record1.set("curriculum", "Lease Valuation Expert Program");
  app.save(record1);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})