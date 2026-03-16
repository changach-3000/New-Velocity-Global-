/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Lease Accounting Standards (IFRS 16 & ASC 842)");
    record0.set("description", "Master international (IFRS 16) and US (ASC 842) lease accounting standards. Learn recognition, measurement, and disclosure requirements.");
    record0.set("instructor_name", "Lease Accounting Expert");
    record0.set("instructor_bio", "Expert in international and US lease accounting standards with 15+ years of experience");
    record0.set("price", 99.99);
    record0.set("duration_hours", 7);
    record0.set("learning_outcomes", "Understand IFRS 16 and ASC 842 lease definitions, recognition criteria, measurement requirements, and disclosure obligations");
    record0.set("image_url", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800");
    record0.set("curriculum", "Lesson 1: IFRS 16 Fundamentals, Lesson 2: ASC 842 Fundamentals, Lesson 3: Comparative Analysis, Lesson 4: Practical Applications, Lesson 5: Advanced Topics");
    record0.set("estimated_hours", 7);
    record0.set("badge_id", "lease-accounting-specialist");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})