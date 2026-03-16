/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "Market Analysis & Trend Forecasting");
    record0.set("description", "Learn to analyze leasing markets, identify trends, and forecast future market movements");
    record0.set("order", 1);
    record0.set("duration", 8);
    record0.set("content_type", "video");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "pbc_9676646180");
    record1.set("title", "Strategic Lease Planning & Portfolio Management");
    record1.set("description", "Master strategic planning techniques and portfolio management for lease optimization");
    record1.set("order", 2);
    record1.set("duration", 8);
    record1.set("content_type", "video");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "pbc_9676646180");
    record2.set("title", "Lease Optimization Techniques");
    record2.set("description", "Discover advanced techniques to optimize lease terms, costs, and performance");
    record2.set("order", 3);
    record2.set("duration", 8);
    record2.set("content_type", "video");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("course_id", "pbc_9676646180");
    record3.set("title", "Technology & Digital Solutions in Leasing");
    record3.set("description", "Explore modern technology platforms and digital solutions transforming the leasing industry");
    record3.set("order", 4);
    record3.set("duration", 8);
    record3.set("content_type", "video");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("course_id", "pbc_9676646180");
    record4.set("title", "Global Leasing Markets & International Strategies");
    record4.set("description", "Understand global leasing markets and develop international leasing strategies");
    record4.set("order", 5);
    record4.set("duration", 8);
    record4.set("content_type", "video");
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})