/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "pbc_1349215296");
    record0.set("question_text", "Under IFRS 16, which of the following is NOT a key element of a lease definition?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "A) Identified asset\nB) Right to control use\nC) Seller's profit margin\nD) Period of time");
    record0.set("correct_answer", "C) Seller's profit margin");
    record0.set("explanation", "IFRS 16 defines a lease based on: identified asset, right to control use, and period of time. Seller's profit margin is not a defining element.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "pbc_1349215296");
    record1.set("question_text", "What is the initial measurement of a right-of-use asset under IFRS 16?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "A) Fair value of the asset\nB) Lease liability + initial direct costs + prepaid payments - incentives\nC) Present value of lease payments only\nD) Historical cost of the asset");
    record1.set("correct_answer", "B) Lease liability + initial direct costs + prepaid payments - incentives");
    record1.set("explanation", "ROU asset is measured at: Lease Liability + Initial Direct Costs + Prepaid Lease Payments - Lease Incentives Received.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "pbc_1349215296");
    record2.set("question_text", "Which discount rate is used to measure the lease liability under IFRS 16?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "A) Risk-free rate\nB) Incremental borrowing rate\nC) Implicit rate in the lease\nD) Prime lending rate");
    record2.set("correct_answer", "B) Incremental borrowing rate");
    record2.set("explanation", "The lease liability is discounted at the incremental borrowing rate - the rate the lessee would pay to borrow funds for a similar term and security.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "pbc_1349215296");
    record3.set("question_text", "How is the right-of-use asset depreciated under IFRS 16?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "A) Accelerated depreciation method\nB) Straight-line basis over lease term or asset useful life (whichever is shorter)\nC) Units of production method\nD) No depreciation required");
    record3.set("correct_answer", "B) Straight-line basis over lease term or asset useful life (whichever is shorter)");
    record3.set("explanation", "The ROU asset is depreciated on a straight-line basis over the lease term or the asset's useful life, whichever is shorter.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "pbc_1349215296");
    record4.set("question_text", "When a lease is modified under IFRS 16, when is it accounted for as a separate lease?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "A) Always treated as separate lease\nB) When modification increases scope and consideration reflects standalone price\nC) When modification decreases payments\nD) Never treated as separate lease");
    record4.set("correct_answer", "B) When modification increases scope and consideration reflects standalone price");
    record4.set("explanation", "A lease modification is accounted for as a separate lease only if it increases the scope of the lease and the consideration reflects the standalone price of the additional rights.");
    record4.set("order", 5);
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})