/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "risk_assessment_course");
    record0.set("title", "Risk Identification Fundamentals");
    record0.set("description", "Learn the fundamentals of identifying risks in equipment leasing transactions");
    record0.set("order", 1);
    record0.set("duration", 1.5);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "risk_assessment_course");
    record1.set("title", "Credit Analysis Essentials");
    record1.set("description", "Master credit analysis techniques for evaluating lessee creditworthiness");
    record1.set("order", 2);
    record1.set("duration", 1.5);
    record1.set("content_type", "text");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "risk_assessment_course");
    record2.set("title", "Risk Mitigation Strategies");
    record2.set("description", "Explore effective strategies to mitigate risks in leasing transactions");
    record2.set("order", 3);
    record2.set("duration", 1.5);
    record2.set("content_type", "text");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("course_id", "risk_assessment_course");
    record3.set("title", "Compliance and Documentation");
    record3.set("description", "Understand compliance requirements and proper documentation practices");
    record3.set("order", 4);
    record3.set("duration", 1.5);
    record3.set("content_type", "text");
  app.save(record3);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})