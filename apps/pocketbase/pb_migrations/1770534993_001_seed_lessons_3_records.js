/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "<COURSE_ID_FOR_ADVANCED_LEASING>");
    record0.set("title", "ESG and Sustainable Leasing");
    record0.set("description", "Explore Environmental, Social, and Governance considerations in leasing. Learn about sustainable equipment leasing, ESG metrics, and case studies on implementing ESG-focused lease portfolios.");
    record0.set("order", 1);
    record0.set("content_type", "text");
    record0.set("duration", 60);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "<COURSE_ID_FOR_ADVANCED_LEASING>");
    record1.set("title", "Technology and Digital Transformation");
    record1.set("description", "Discover how AI, blockchain, IoT, and data analytics are transforming lease operations. Learn about digital transformation strategies, technology implementation, and case studies on digital lease platforms.");
    record1.set("order", 2);
    record1.set("content_type", "text");
    record1.set("duration", 60);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "<COURSE_ID_FOR_ADVANCED_LEASING>");
    record2.set("title", "Market Trends and Future Strategies");
    record2.set("description", "Analyze emerging market trends in mobility, real estate, technology, and alternative assets. Develop future-focused leasing strategies and explore growth opportunities in evolving markets.");
    record2.set("order", 3);
    record2.set("content_type", "text");
    record2.set("duration", 60);
  app.save(record2);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})