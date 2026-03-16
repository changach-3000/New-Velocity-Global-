/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "ASC 842 Requirements Quiz");
    record0.set("question_text", "What is the key difference between operating and finance leases under ASC 842?");
    record0.set("question_type", "multiple_choice");
    record0.set("correct_answer", "Operating leases use straight-line expense recognition while finance leases use front-loaded expense recognition");
    record0.set("explanation", "Under ASC 842, operating leases recognize expenses on a straight-line basis, while finance leases recognize front-loaded expenses similar to IFRS 16");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "ASC 842 Requirements Quiz");
    record1.set("question_text", "How is the lease liability measured under ASC 842?");
    record1.set("question_type", "multiple_choice");
    record1.set("correct_answer", "Present value of lease payments discounted at the incremental borrowing rate or implicit rate");
    record1.set("explanation", "The lease liability is measured as the present value of lease payments using either the incremental borrowing rate or the implicit rate if known");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "ASC 842 Requirements Quiz");
    record2.set("question_text", "What is included in the initial measurement of the ROU asset?");
    record2.set("question_type", "multiple_choice");
    record2.set("correct_answer", "Lease liability, initial direct costs, and restoration obligations");
    record2.set("explanation", "The ROU asset initial measurement includes the lease liability amount, initial direct costs, and any restoration obligations");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "ASC 842 Requirements Quiz");
    record3.set("question_text", "How are lease modifications accounted for under ASC 842?");
    record3.set("question_type", "multiple_choice");
    record3.set("correct_answer", "Remeasure the lease liability and adjust the ROU asset accordingly");
    record3.set("explanation", "Lease modifications require remeasurement of the lease liability and corresponding adjustments to the ROU asset");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "ASC 842 Requirements Quiz");
    record4.set("question_text", "What discount rate is used when the implicit rate is unknown?");
    record4.set("question_type", "multiple_choice");
    record4.set("correct_answer", "The incremental borrowing rate");
    record4.set("explanation", "When the implicit rate is not known, the incremental borrowing rate is used to discount lease payments");
    record4.set("order", 5);
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})