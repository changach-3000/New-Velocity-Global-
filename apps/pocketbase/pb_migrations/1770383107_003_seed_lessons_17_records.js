/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "Understanding the Shift from Ownership to Access");
    record0.set("content_type", "video");
    record0.set("order", 1);
    record0.set("duration", 15);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "pbc_9676646180");
    record1.set("title", "Lessor vs. Lessee and Key Terminology");
    record1.set("content_type", "text");
    record1.set("order", 2);
    record1.set("duration", 15);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "pbc_9676646180");
    record2.set("title", "Understanding Leasable Assets");
    record2.set("content_type", "text");
    record2.set("order", 3);
    record2.set("duration", 10);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("course_id", "pbc_9676646180");
    record3.set("title", "From Application to End of Life (EOL) Options");
    record3.set("content_type", "video");
    record3.set("order", 4);
    record3.set("duration", 15);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("course_id", "pbc_9676646180");
    record4.set("title", "Comparative Analysis of Cash Flow and Ownership");
    record4.set("content_type", "text");
    record4.set("order", 5);
    record4.set("duration", 10);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("course_id", "pbc_9676646180");
    record5.set("title", "High Flexibility, Short-Term, Asset Returned at End");
    record5.set("content_type", "video");
    record5.set("order", 6);
    record5.set("duration", 15);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("course_id", "pbc_9676646180");
    record6.set("title", "Long-Term, Path to Ownership, Transfer of Risk");
    record6.set("content_type", "video");
    record6.set("order", 7);
    record6.set("duration", 15);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("course_id", "pbc_9676646180");
    record7.set("title", "Unlocking Capital from Assets You Already Own");
    record7.set("content_type", "text");
    record7.set("order", 8);
    record7.set("duration", 15);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("course_id", "pbc_9676646180");
    record8.set("title", "Managing Multiple Assets Under One Contract");
    record8.set("content_type", "text");
    record8.set("order", 9);
    record8.set("duration", 15);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("course_id", "pbc_9676646180");
    record9.set("title", "Understanding Interest Rates, Residuals, and Total Cost of Ownership");
    record9.set("content_type", "text");
    record9.set("order", 10);
    record9.set("duration", 15);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("course_id", "pbc_9676646180");
    record10.set("title", "What Global Lessors Look For in a Lessee");
    record10.set("content_type", "video");
    record10.set("order", 11);
    record10.set("duration", 15);
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("course_id", "pbc_9676646180");
    record11.set("title", "How Leases Appear on Balance Sheets");
    record11.set("content_type", "text");
    record11.set("order", 12);
    record11.set("duration", 15);
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("course_id", "pbc_9676646180");
    record12.set("title", "Who is Responsible for What?");
    record12.set("content_type", "text");
    record12.set("order", 13);
    record12.set("duration", 15);
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("course_id", "pbc_9676646180");
    record13.set("title", "Filtering by Asset Type, Region, and Vendor");
    record13.set("content_type", "text");
    record13.set("order", 14);
    record13.set("duration", 15);
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("course_id", "pbc_9676646180");
    record14.set("title", "Documentation Requirements (KYC/KYB)");
    record14.set("content_type", "video");
    record14.set("order", 15);
    record14.set("duration", 15);
  app.save(record14);

  const record15 = new Record(collection);
    record15.set("course_id", "pbc_9676646180");
    record15.set("title", "How the Platform Streamlines the Closing Process");
    record15.set("content_type", "text");
    record15.set("order", 16);
    record15.set("duration", 15);
  app.save(record15);

  const record16 = new Record(collection);
    record16.set("course_id", "pbc_9676646180");
    record16.set("title", "Dealing with Different Currencies and Jurisdictions");
    record16.set("content_type", "text");
    record16.set("order", 17);
    record16.set("duration", 15);
  app.save(record16);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})