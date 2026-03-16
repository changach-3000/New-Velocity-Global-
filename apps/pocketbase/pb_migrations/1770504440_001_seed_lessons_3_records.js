/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "Lease Portfolio Management and Optimization");
    record0.set("description", "Understand lease portfolio management fundamentals including equipment inventory, lease agreements, financial obligations, and performance metrics. Learn portfolio management strategies such as centralized management, equipment standardization, lease consolidation, and lifecycle management. Master portfolio optimization and performance monitoring for operational excellence.");
    record0.set("content_type", "text");
    record0.set("order", 6);
    record0.set("duration", 60);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "pbc_9676646180");
    record1.set("title", "Technology Integration and Operational Efficiency");
    record1.set("description", "Understand technology integration including equipment monitoring, data analytics, automation, and cloud systems. Learn operational efficiency improvements such as predictive maintenance, utilization optimization, process automation, and resource allocation. Master technology tools and efficiency metrics for operational excellence and cost reduction.");
    record1.set("content_type", "text");
    record1.set("order", 7);
    record1.set("duration", 60);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "pbc_9676646180");
    record2.set("title", "Growth Metrics and Performance Measurement");
    record2.set("description", "Understand growth metrics including revenue growth, capacity growth, market share growth, and customer growth. Learn operational and financial performance metrics. Master growth acceleration metrics and measurement framework for tracking business growth and operational performance.");
    record2.set("content_type", "text");
    record2.set("order", 8);
    record2.set("duration", 30);
  app.save(record2);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})