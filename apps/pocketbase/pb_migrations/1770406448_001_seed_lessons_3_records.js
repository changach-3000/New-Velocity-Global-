/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "advanced-leasing-strategies");
    record0.set("title", "3.1: Residual Value Risk Management");
    record0.set("description", "Understand residual value risk and master RVI strategies, predictive modeling, and technological obsolescence management");
    record0.set("order", 7);
    record0.set("content_type", "text");
    record0.set("duration", 60);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "advanced-leasing-strategies");
    record1.set("title", "3.2: Leveraged Leasing");
    record1.set("description", "Master leveraged lease structures, debt and equity tranching, and understand Indenture Trustee and Owner Trustee roles");
    record1.set("order", 8);
    record1.set("content_type", "text");
    record1.set("duration", 60);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "advanced-leasing-strategies");
    record2.set("title", "3.3: Currency & Interest Rate Hedging");
    record2.set("description", "Understand currency and interest rate risk, master hedging strategies using swaps and options, and analyze hedging costs and benefits");
    record2.set("order", 9);
    record2.set("content_type", "text");
    record2.set("duration", 60);
  app.save(record2);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})