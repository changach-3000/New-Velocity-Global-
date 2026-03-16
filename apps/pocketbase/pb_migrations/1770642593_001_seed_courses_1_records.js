/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Mastering Creative Financing to Close Bigger Deals");
    record0.set("description", "Learn the mindset shift from selling ownership to selling access. Master the psychology, business case, and sales strategies for modern leasing models.");
    record0.set("instructor_name", "Expert Instructor");
    record0.set("instructor_bio", "Experienced professional in creative financing and leasing strategies");
    record0.set("price", 1);
    record0.set("duration_hours", 2);
    record0.set("learning_outcomes", "Understand the fundamental shift from ownership to access-based models, Master the business case for leasing, Learn to communicate OpEx benefits, Overcome customer objections about ownership");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})