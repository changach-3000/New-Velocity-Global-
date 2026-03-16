/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "part3_advanced_lease_structures");
    record0.set("question_text", "A 'Master Lease Agreement' (MLA) is designed to:");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"A. Prevent the lessee from ever upgrading equipment\", \"B. Replace the need for any other contracts\", \"C. Be signed only by the CEO\", \"D. Provide a standard set of terms that apply to all subsequent asset schedules\"]");
    record0.set("correct_answer", "D");
    record0.set("explanation", "Correct! A 'Master Lease Agreement' (MLA) is designed to provide a standard set of terms, conditions, and legal framework that apply to all subsequent asset schedules and individual lease transactions. Rather than negotiating a complete new lease agreement for each asset, parties sign one comprehensive MLA and then add assets through simple asset schedules that reference the master terms. This streamlines the leasing process, reduces legal costs, and ensures consistency across multiple lease transactions. MLAs are commonly used in equipment leasing, fleet management, and technology leasing programs.");
    record0.set("order", 1);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})