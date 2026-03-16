/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Lease Accounting Standards (IFRS 16 & ASC 842)");
    record0.set("description", "Master international (IFRS 16) and US (ASC 842) lease accounting standards. Learn recognition, measurement, and disclosure requirements.");
    record0.set("instructor_name", "Lease Accounting Expert");
    record0.set("price", 99.99);
    record0.set("duration_hours", 7);
    record0.set("learning_outcomes", "Understand IFRS 16 and ASC 842 standards, Apply lease accounting principles, Implement journal entries, Compare international vs US standards");
    record0.set("image_url", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800");
    record0.set("curriculum", "4 comprehensive lessons covering lease accounting standards");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})