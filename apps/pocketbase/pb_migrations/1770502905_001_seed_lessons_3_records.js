/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "Operational and Strategic Factors");
    record0.set("description", "Understand operational factors in lease vs buy decisions including equipment usage patterns, maintenance requirements, technology obsolescence, and flexibility needs. Learn strategic considerations including capital preservation, balance sheet management, accounting treatment, and risk management. Develop operational assessment skills and apply to lease vs buy decisions.");
    record0.set("order", 6);
    record0.set("duration", 60);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "pbc_9676646180");
    record1.set("title", "Risk Assessment and Mitigation");
    record1.set("description", "Understand risks in lease vs buy decisions. Learn risk mitigation strategies for both leasing and buying. Develop risk assessment skills and apply to lease vs buy decisions. Covers lease risks (payment obligation, obsolescence, lessor default, residual value), buy risks (obsolescence, maintenance, residual value, financing, operational), and risk comparison.");
    record1.set("order", 7);
    record1.set("duration", 60);
    record1.set("content_type", "text");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "pbc_9676646180");
    record2.set("title", "Decision Framework and Case Studies");
    record2.set("description", "Master the comprehensive lease vs buy decision framework. Understand real-world case studies and decision matrices. Develop decision-making skills and apply framework to lease vs buy decisions. Covers 7-step decision framework, decision matrix methodology, and multiple case studies.");
    record2.set("order", 8);
    record2.set("duration", 30);
    record2.set("content_type", "text");
  app.save(record2);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})