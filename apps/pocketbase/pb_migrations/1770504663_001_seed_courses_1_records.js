/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Introduction to Leasing");
    record0.set("description", "Master the fundamentals of leasing from the ground up. Learn what leasing is, why it matters, and how it works. Understand different types of leases, key concepts, and how leasing applies to businesses and consumers. Explore the leasing industry, career opportunities, and practical guidance for evaluating and entering lease agreements. Includes real-world examples, case studies, and best practices for making informed leasing decisions. Perfect for beginners and anyone new to the leasing industry.");
    record0.set("instructor_name", "Leasing Professionals Academy");
    record0.set("price", 1);
    record0.set("duration_hours", 7);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})