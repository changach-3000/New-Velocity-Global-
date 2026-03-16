/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Advanced Leasing Strategies");
    record0.set("description", "Comprehensive guide to advanced leasing strategies, market analysis, and strategic planning for lease optimization");
    record0.set("instructor_name", "Finance Expert");
    record0.set("price", 299.99);
    record0.set("duration_hours", 40);
    record0.set("learning_outcomes", "Master advanced leasing strategies, market analysis, portfolio management, optimization techniques, technology solutions, and global market strategies");
    record0.set("image_url", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800");
    record0.set("curriculum", "5-lesson comprehensive course on advanced leasing strategies");
    record0.set("estimated_hours", 40);
    record0.set("badge_id", "advanced_leasing_badge");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})