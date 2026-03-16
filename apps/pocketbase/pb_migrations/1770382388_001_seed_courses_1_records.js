/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Introduction to Leasing");
    record0.set("description", "Master the fundamentals of leasing, from basic concepts to practical applications. Learn lease structures, accounting, compliance, and real-world scenarios.");
    record0.set("instructor_name", "Finance Academy");
    record0.set("instructor_bio", "Expert instructors in corporate finance and leasing practices");
    record0.set("price", 99.99);
    record0.set("duration_hours", 4.5);
    record0.set("learning_outcomes", "Understand fundamental leasing concepts and terminology|Differentiate between operating and finance leases|Apply lease accounting principles|Analyze lease agreements and structures|Identify compliance and regulatory requirements");
    record0.set("image_url", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800");
    record0.set("estimated_hours", 4.5);
    record0.set("badge_id", "leasing_101");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})