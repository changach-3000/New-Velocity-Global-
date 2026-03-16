/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quizzes");

  const record0 = new Record(collection);
    record0.set("lesson_id", "pbc_3963162141_1");
    record0.set("title", "Lease Agreement Fundamentals Quiz");
    record0.set("passing_score", 70);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("lesson_id", "pbc_3963162141_2");
    record1.set("title", "Key Legal Provisions and Compliance Requirements Quiz");
    record1.set("passing_score", 70);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("lesson_id", "pbc_3963162141_3");
    record2.set("title", "Essential Lease Provisions and Clauses Quiz");
    record2.set("passing_score", 70);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("lesson_id", "pbc_3963162141_4");
    record3.set("title", "Disclosure Requirements and Documentation Quiz");
    record3.set("passing_score", 70);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("lesson_id", "pbc_3963162141_5");
    record4.set("title", "Consumer Protection and Fair Lending Laws Quiz");
    record4.set("passing_score", 70);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("lesson_id", "pbc_3963162141_6");
    record5.set("title", "Tax Compliance and Accounting Standards Quiz");
    record5.set("passing_score", 70);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("lesson_id", "pbc_3963162141_7");
    record6.set("title", "Default, Remedies, and Dispute Resolution Quiz");
    record6.set("passing_score", 70);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("lesson_id", "pbc_3963162141_8");
    record7.set("title", "Compliance Audits and Best Practices Quiz");
    record7.set("passing_score", 70);
  app.save(record7);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})