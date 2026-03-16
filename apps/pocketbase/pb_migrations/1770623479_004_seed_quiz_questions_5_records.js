/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "pbc_1349215296");
    record0.set("question_text", "Under ASC 842, how does the lessee account for all leases?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "A) Operating leases are expensed, finance leases are capitalized\nB) All leases result in ROU asset and lease liability recognition\nC) Only finance leases are recognized on balance sheet\nD) Lease accounting depends on lease classification");
    record0.set("correct_answer", "B) All leases result in ROU asset and lease liability recognition");
    record0.set("explanation", "ASC 842 requires all leases to be recognized on the balance sheet with a right-of-use asset and lease liability, eliminating the previous operating vs finance lease distinction for lessees.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "pbc_1349215296");
    record1.set("question_text", "What is the primary discount rate used to calculate the lease liability under ASC 842?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "A) Risk-free rate\nB) Implicit rate in the lease (if readily determinable)\nC) Incremental borrowing rate\nD) Prime lending rate");
    record1.set("correct_answer", "B) Implicit rate in the lease (if readily determinable)");
    record1.set("explanation", "ASC 842 requires using the implicit rate in the lease if it is readily determinable. If not, the incremental borrowing rate is used as the secondary option.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "pbc_1349215296");
    record2.set("question_text", "Which of the following is included in lease payments under ASC 842?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "A) Variable payments not linked to index/rate\nB) Service and maintenance costs\nC) Residual value guarantees and termination penalties\nD) Property taxes and insurance");
    record2.set("correct_answer", "C) Residual value guarantees and termination penalties");
    record2.set("explanation", "Lease payments include fixed payments, variable payments linked to index/rate, residual value guarantees, and termination penalties. Service costs, taxes, and variable payments not linked to index/rate are excluded.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "pbc_1349215296");
    record3.set("question_text", "How is the lease term determined under ASC 842?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "A) Only the non-cancellable period\nB) Non-cancellable period + periods covered by renewal/termination options reasonably certain to be exercised\nC) The longest possible lease term\nD) The shortest possible lease term");
    record3.set("correct_answer", "B) Non-cancellable period + periods covered by renewal/termination options reasonably certain to be exercised");
    record3.set("explanation", "The lease term includes the non-cancellable period plus any renewal or termination option periods that the lessee is reasonably certain to exercise based on economic incentives.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "pbc_1349215296");
    record4.set("question_text", "What is the initial measurement of the right-of-use asset under ASC 842?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "A) Fair value of the leased asset\nB) Lease Liability + Initial Direct Costs + Prepaid Payments - Lease Incentives\nC) Present value of lease payments only\nD) Historical cost of the asset");
    record4.set("correct_answer", "B) Lease Liability + Initial Direct Costs + Prepaid Payments - Lease Incentives");
    record4.set("explanation", "The ROU asset is initially measured as the lease liability plus initial direct costs and prepaid lease payments, less any lease incentives received.");
    record4.set("order", 5);
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})