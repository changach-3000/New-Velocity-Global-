/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_lease_securitization_course");
    record0.set("title", "Risk Management in Securitization");
    record0.set("description", "Master risk identification, assessment, and mitigation strategies in lease securitization. Learn credit risk, prepayment risk, interest rate risk, liquidity risk, operational risk, and model risk. Understand stress testing and risk monitoring.");
    record0.set("order", 6);
    record0.set("duration", 60);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "pbc_lease_securitization_course");
    record1.set("title", "Regulatory and Accounting Considerations");
    record1.set("description", "Understand regulatory requirements (Dodd-Frank, SEC, Rating Agencies), accounting treatment for originators/investors/servicers, and disclosure requirements. Learn compliance and accounting best practices.");
    record1.set("order", 7);
    record1.set("duration", 60);
    record1.set("content_type", "text");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "pbc_lease_securitization_course");
    record2.set("title", "Case Studies and Market Trends");
    record2.set("description", "Explore real-world securitization case studies (equipment, vehicle, technology leases), market trends, and future outlook. Understand market dynamics and growth opportunities in lease securitization.");
    record2.set("order", 8);
    record2.set("duration", 30);
    record2.set("content_type", "text");
  app.save(record2);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})