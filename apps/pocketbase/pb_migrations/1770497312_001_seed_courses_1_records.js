/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Equipment Leasing Strategies");
    record0.set("description", "Master strategic approaches to equipment leasing. Learn to develop winning leasing strategies, analyze markets, segment customers, design competitive products, and execute growth initiatives. Develop skills to build profitable leasing businesses and gain competitive advantage in the equipment leasing market.");
    record0.set("instructor_name", "Leasing Professionals Academy");
    record0.set("price", 1);
    record0.set("duration_hours", 7);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})