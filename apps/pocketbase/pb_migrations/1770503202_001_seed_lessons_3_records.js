/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "<COURSE_ID_FOR_LEASE_VS_BUY>");
    record0.set("title", "Operational and Strategic Factors");
    record0.set("description", "Understand operational factors in lease vs buy decisions, learn strategic considerations, develop operational assessment skills");
    record0.set("order", 7);
    record0.set("content_type", "text");
    record0.set("duration", 60);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "<COURSE_ID_FOR_LEASE_VS_BUY>");
    record1.set("title", "Risk Assessment and Mitigation");
    record1.set("description", "Understand risks in lease vs buy decisions, learn risk mitigation strategies, develop risk assessment skills");
    record1.set("order", 8);
    record1.set("content_type", "text");
    record1.set("duration", 60);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "<COURSE_ID_FOR_LEASE_VS_BUY>");
    record2.set("title", "Decision Framework and Case Studies");
    record2.set("description", "Master lease vs buy decision framework, understand real-world case studies, develop decision-making skills");
    record2.set("order", 9);
    record2.set("content_type", "text");
    record2.set("duration", 30);
  app.save(record2);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})