/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "pbc_1349215296");
    record0.set("question_text", "What is the journal entry at lease commencement to recognize a lease?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "A) Dr. Lease Expense, Cr. Cash\nB) Dr. ROU Asset, Cr. Lease Liability\nC) Dr. Depreciation Expense, Cr. Accumulated Depreciation\nD) Dr. Interest Expense, Cr. Lease Liability");
    record0.set("correct_answer", "B) Dr. ROU Asset, Cr. Lease Liability");
    record0.set("explanation", "At lease commencement, the lessee recognizes the right-of-use asset and lease liability. The ROU asset is debited and the lease liability is credited.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "pbc_1349215296");
    record1.set("question_text", "How is the lease expense recognized for an operating lease?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "A) Front-loaded with higher expenses in early years\nB) Straight-line over the lease term\nC) Based on actual lease payments\nD) Declining over the lease term");
    record1.set("correct_answer", "B) Straight-line over the lease term");
    record1.set("explanation", "Operating leases result in straight-line expense recognition over the lease term, regardless of the actual payment pattern. This provides consistent expense recognition.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "pbc_1349215296");
    record2.set("question_text", "On the balance sheet, how should the lease liability be presented?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "A) Single line item\nB) Split into current and non-current portions\nC) Combined with other liabilities\nD) Not separately presented");
    record2.set("correct_answer", "B) Split into current and non-current portions");
    record2.set("explanation", "The lease liability should be split into current (due within 12 months) and non-current (due beyond 12 months) portions on the balance sheet.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "pbc_1349215296");
    record3.set("question_text", "What is a common pitfall in lease accounting implementation?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "A) Recognizing all leases on the balance sheet\nB) Using the correct discount rate\nC) Failing to identify embedded leases in contracts\nD) Properly documenting lease terms");
    record3.set("correct_answer", "C) Failing to identify embedded leases in contracts");
    record3.set("explanation", "A common pitfall is failing to identify all lease contracts, including embedded leases within larger contracts. This results in understated assets and liabilities.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "pbc_1349215296");
    record4.set("question_text", "Under the modified retrospective approach, how are comparative periods treated?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "A) Restated to reflect new lease accounting standards\nB) Not restated; cumulative effect recognized at adoption date\nC) Adjusted for lease modifications only\nD) Restated for finance leases only");
    record4.set("correct_answer", "B) Not restated; cumulative effect recognized at adoption date");
    record4.set("explanation", "Under the modified retrospective approach, comparative periods are not restated. Instead, the cumulative effect of adopting the new lease accounting standards is recognized at the adoption date.");
    record4.set("order", 5);
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})