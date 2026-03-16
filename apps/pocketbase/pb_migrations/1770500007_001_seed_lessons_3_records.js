/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "Lessee Recognition and Measurement");
    record0.set("description", "Master lessee recognition requirements, understand ROU asset and lease liability measurement, develop calculation skills, and apply recognition and measurement to leases.");
    record0.set("order", 3);
    record0.set("duration", 60);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "pbc_9676646180");
    record1.set("title", "Subsequent Measurement and Lease Modifications");
    record1.set("description", "Master subsequent measurement of ROU asset and lease liability, understand lease modifications, develop calculation skills, and apply subsequent measurement to leases.");
    record1.set("order", 4);
    record1.set("duration", 60);
    record1.set("content_type", "text");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "pbc_9676646180");
    record2.set("title", "Lessee Disclosures and Reporting");
    record2.set("description", "Master lessee disclosure requirements, understand financial statement presentation, develop disclosure skills, and apply disclosures to leases.");
    record2.set("order", 5);
    record2.set("duration", 30);
    record2.set("content_type", "text");
  app.save(record2);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})