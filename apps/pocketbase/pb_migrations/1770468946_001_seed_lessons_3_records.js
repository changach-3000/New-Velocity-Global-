/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "Lease Pricing Models and Calculations");
    record0.set("description", "Master lease pricing fundamentals and methodologies. Understand cost components and margin calculations. Develop competitive pricing strategies. Calculate lease payments using various models.");
    record0.set("order", 3);
    record0.set("duration", 60);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "pbc_9676646180");
    record1.set("title", "Financial Analysis and ROI Optimization");
    record1.set("description", "Understand lease financial metrics and analysis. Master ROI and profitability calculations. Optimize lease structures for maximum returns. Analyze lease portfolio performance.");
    record1.set("order", 4);
    record1.set("duration", 60);
    record1.set("content_type", "text");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "pbc_9676646180");
    record2.set("title", "Risk Assessment and Mitigation");
    record2.set("description", "Identify key lease risks. Develop risk assessment frameworks. Implement risk mitigation strategies. Monitor and manage lease portfolio risk.");
    record2.set("order", 5);
    record2.set("duration", 30);
    record2.set("content_type", "text");
  app.save(record2);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})