/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "placeholder_will_update");
    record0.set("question_text", "Which party in a leasing agreement is the legal owner of the asset throughout the duration of the contract?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[{\"text\":\"The Lessor\",\"correct\":true},{\"text\":\"The Lessee\",\"correct\":false},{\"text\":\"The Vendor\",\"correct\":false},{\"text\":\"The Underwriter\",\"correct\":false}]");
    record0.set("correct_answer", "The Lessor");
    record0.set("explanation", "The lessor is the entity that owns the asset and provides the right of use to the lessee in exchange for payments.");
    record0.set("order", 1);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})