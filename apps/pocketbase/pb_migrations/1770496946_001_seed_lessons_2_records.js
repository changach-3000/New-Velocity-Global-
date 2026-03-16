/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "ROI Modeling and Forecasting");
    record0.set("description", "Master ROI modeling techniques, develop financial forecasting skills, create ROI projections and scenarios, and build decision support models");
    record0.set("order", 6);
    record0.set("duration", 90);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "pbc_9676646180");
    record1.set("title", "Real-World ROI Applications and Best Practices");
    record1.set("description", "Understand real-world ROI applications, master best practices in ROI analysis, develop implementation strategies, and learn from industry examples");
    record1.set("order", 7);
    record1.set("duration", 60);
    record1.set("content_type", "text");
  app.save(record1);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})