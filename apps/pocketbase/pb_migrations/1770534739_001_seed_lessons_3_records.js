/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "<ADVANCED_LEASING_STRATEGIES_COURSE_ID>");
    record0.set("title", "Lease Portfolio Management");
    record0.set("description", "Master portfolio management fundamentals including composition analysis, performance metrics, optimization strategies, and comprehensive monitoring frameworks for managing large-scale lease portfolios.");
    record0.set("order", 1);
    record0.set("content_type", "text");
    record0.set("duration", 60);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "<ADVANCED_LEASING_STRATEGIES_COURSE_ID>");
    record1.set("title", "Risk Assessment and Management");
    record1.set("description", "Comprehensive risk management covering credit risk, residual value risk, operational risk, market risk, and legal risk with assessment methodologies, mitigation strategies, and monitoring frameworks.");
    record1.set("order", 2);
    record1.set("content_type", "text");
    record1.set("duration", 60);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "<ADVANCED_LEASING_STRATEGIES_COURSE_ID>");
    record2.set("title", "Advanced Portfolio Strategies");
    record2.set("description", "Sophisticated portfolio optimization strategies including securitization, syndication, hedging, derivatives, and exit strategies to maximize returns and minimize risk.");
    record2.set("order", 3);
    record2.set("content_type", "text");
    record2.set("duration", 60);
  app.save(record2);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})