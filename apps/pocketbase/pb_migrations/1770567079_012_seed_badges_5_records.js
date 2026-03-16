/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("badges");

  const record0 = new Record(collection);
    record0.set("name", "Lease Structuring Master");
    record0.set("description", "Completed Advanced Lease Structuring course");
    record0.set("competency_level", "Expert");
    record0.set("course_id", "{{course_id_1}}");
    record0.set("points", 500);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("name", "Financial Analysis Expert");
    record1.set("description", "Mastered financial analysis and valuation methods");
    record1.set("competency_level", "Advanced");
    record1.set("course_id", "{{course_id_1}}");
    record1.set("points", 300);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("name", "Negotiation Strategist");
    record2.set("description", "Completed negotiation strategies module");
    record2.set("competency_level", "Advanced");
    record2.set("course_id", "{{course_id_1}}");
    record2.set("points", 250);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("name", "Tax Planning Specialist");
    record3.set("description", "Mastered tax implications and accounting treatment");
    record3.set("competency_level", "Advanced");
    record3.set("course_id", "{{course_id_1}}");
    record3.set("points", 250);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("name", "Risk Management Professional");
    record4.set("description", "Completed risk management and dispute resolution");
    record4.set("competency_level", "Advanced");
    record4.set("course_id", "{{course_id_1}}");
    record4.set("points", 250);
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})