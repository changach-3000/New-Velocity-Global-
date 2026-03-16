/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "placeholder_quiz_id");
    record0.set("question_text", "In a \"Sale and Leaseback\" structure, what is the primary goal for the business (Lessee)?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "{\"A\": {\"text\": \"To avoid paying insurance on the asset.\", \"feedback\": \"Not quite. While insurance responsibilities may shift, avoiding insurance is not the primary goal of a sale and leaseback transaction.\"}, \"B\": {\"text\": \"To unlock liquid capital from assets they already own.\", \"feedback\": \"Correct! The primary goal of a sale and leaseback structure is to unlock liquid capital from assets the business already owns, allowing them to free up cash while continuing to use the asset.\"}, \"C\": {\"text\": \"To dispose of old equipment they no longer need.\", \"feedback\": \"Not quite. Sale and leaseback is used for assets the business still needs and wants to continue using, not for disposal.\"}, \"D\": {\"text\": \"To transfer the asset to a competitor.\", \"feedback\": \"Not quite. Sale and leaseback is a financing strategy, not a way to transfer assets to competitors.\"}}");
    record0.set("correct_answer", "B");
    record0.set("explanation", "Correct! The primary goal of a sale and leaseback structure is to unlock liquid capital from assets the business already owns, allowing them to free up cash while continuing to use the asset.");
    record0.set("order", 1);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})