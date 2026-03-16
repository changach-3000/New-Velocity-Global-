/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "Tax Compliance and Accounting Standards");
    record0.set("description", "Understand tax compliance requirements, accounting standards (ASC 842, IFRS 16), tax implications, and apply to lease agreements");
    record0.set("order", 6);
    record0.set("duration", 60);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "pbc_9676646180");
    record1.set("title", "Default, Remedies, and Dispute Resolution");
    record1.set("description", "Understand default provisions, remedies for default, dispute resolution, and apply to lease agreements");
    record1.set("order", 7);
    record1.set("duration", 60);
    record1.set("content_type", "text");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "pbc_9676646180");
    record2.set("title", "Compliance Audits and Best Practices");
    record2.set("description", "Understand compliance audits, best practices, compliance culture, and apply to lease programs");
    record2.set("order", 8);
    record2.set("duration", 30);
    record2.set("content_type", "text");
  app.save(record2);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})