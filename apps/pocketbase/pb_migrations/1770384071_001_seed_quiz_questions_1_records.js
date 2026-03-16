/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "QUIZ_ID_NEEDED");
    record0.set("question_text", "What does the term \"Residual Value\" represent in a lease agreement?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[{\"text\": \"The initial cost of the equipment.\", \"feedback\": \"Not quite. The initial cost of the equipment is the asset's original purchase price, not its residual value.\"}, {\"text\": \"The penalty for terminating a lease early.\", \"feedback\": \"Not quite. Early termination penalties are separate from residual value. Residual value is about the asset's worth at the end of the lease.\"}, {\"text\": \"The estimated value of the asset at the end of the lease term.\", \"feedback\": \"Correct! Residual value is the estimated value of the asset at the end of the lease term. This is important for determining lease payments and potential buyout options.\"}, {\"text\": \"The total amount of interest paid over the term.\", \"feedback\": \"Not quite. Interest paid is a separate component of lease payments, not the residual value of the asset.\"}]");
    record0.set("correct_answer", "C");
    record0.set("order", 1);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})