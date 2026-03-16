/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Advanced Leasing Strategies");
    record0.set("description", "Comprehensive course on advanced leasing strategies, optimization techniques, portfolio management, and emerging trends in the leasing industry");
    record0.set("instructor_name", "Advanced Leasing Institute");
    record0.set("price", 1);
    record0.set("duration_hours", 12);
    record0.set("estimated_hours", 12);
    record0.set("curriculum", "Part 1: Strategic Lease Planning and Analysis (3 hours, 3 lessons) | Part 2: Advanced Lease Optimization Techniques (3 hours, 3 lessons) | Part 3: Lease Portfolio Management and Risk (3 hours, 3 lessons) | Part 4: Emerging Trends and Future Strategies (3 hours, 3 lessons)");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})