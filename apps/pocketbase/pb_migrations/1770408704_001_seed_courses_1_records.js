/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Building Client Value Propositions in Leasing");
    record0.set("description", "Master the art of building compelling value propositions that resonate with clients. Learn to understand client pain points, structure solutions that create value, demonstrate ROI, and close deals through industry-specific strategies.");
    record0.set("instructor_name", "Leasing Professionals Academy");
    record0.set("price", 0.01);
    record0.set("duration_hours", 7);
    record0.set("estimated_hours", 7);
    record0.set("image_url", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})