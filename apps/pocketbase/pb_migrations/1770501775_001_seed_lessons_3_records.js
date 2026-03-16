/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "<COURSE_ID>");
    record0.set("title", "Risk Management in Securitization");
    record0.set("description", "Master risk identification, assessment, and mitigation strategies in securitization. Learn about credit risk, prepayment risk, interest rate risk, liquidity risk, operational risk, and model risk. Develop comprehensive risk management skills.");
    record0.set("order", 6);
    record0.set("duration", 60);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "<COURSE_ID>");
    record1.set("title", "Regulatory and Accounting Considerations");
    record1.set("description", "Understand regulatory requirements including Dodd-Frank, SEC regulations, and rating agency rules. Learn accounting treatment for originators, investors, and servicers. Master disclosure requirements and compliance frameworks.");
    record1.set("order", 7);
    record1.set("duration", 60);
    record1.set("content_type", "text");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "<COURSE_ID>");
    record2.set("title", "Case Studies and Market Trends");
    record2.set("description", "Explore real-world securitization case studies and understand current market trends. Learn about market growth, collateral diversification, investor demand, and future outlook including technology integration and ESG considerations.");
    record2.set("order", 8);
    record2.set("duration", 30);
    record2.set("content_type", "text");
  app.save(record2);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})