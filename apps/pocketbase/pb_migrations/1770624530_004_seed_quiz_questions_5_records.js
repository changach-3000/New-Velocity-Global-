/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "IFRS 16 Fundamentals Quiz");
    record0.set("question_text", "What is the definition of a lease under IFRS 16?");
    record0.set("question_type", "multiple_choice");
    record0.set("correct_answer", "A contract that conveys the right to use an asset for a period of time in exchange for consideration");
    record0.set("explanation", "IFRS 16 defines a lease as a contract that conveys the right to use an asset for a period of time in exchange for consideration");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "IFRS 16 Fundamentals Quiz");
    record1.set("question_text", "How is the right-of-use asset initially measured?");
    record1.set("question_type", "multiple_choice");
    record1.set("correct_answer", "At cost, including lease payments, direct costs, and restoration obligations");
    record1.set("explanation", "The ROU asset is initially measured at cost which includes lease payments, direct costs, and restoration obligations");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "IFRS 16 Fundamentals Quiz");
    record2.set("question_text", "What discount rate is used for lease liabilities?");
    record2.set("question_type", "multiple_choice");
    record2.set("correct_answer", "The incremental borrowing rate");
    record2.set("explanation", "Lease liabilities are discounted at the incremental borrowing rate");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "IFRS 16 Fundamentals Quiz");
    record3.set("question_text", "How are lease modifications accounted for?");
    record3.set("question_type", "multiple_choice");
    record3.set("correct_answer", "Remeasure the lease liability and adjust the ROU asset");
    record3.set("explanation", "Lease modifications require remeasurement of the lease liability and adjustment to the ROU asset");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "IFRS 16 Fundamentals Quiz");
    record4.set("question_text", "What is included in the initial measurement of a lease liability?");
    record4.set("question_type", "multiple_choice");
    record4.set("correct_answer", "Present value of lease payments discounted at the incremental borrowing rate");
    record4.set("explanation", "The lease liability is measured as the present value of lease payments discounted at the incremental borrowing rate");
    record4.set("order", 5);
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})