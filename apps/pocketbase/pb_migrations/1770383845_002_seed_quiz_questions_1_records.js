/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "operating_leases_quiz");
    record0.set("question_text", "What is the primary characteristic of an Operating Lease?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[{\"text\":\"It is a short-term arrangement where the asset is returned to the lessor.\",\"isCorrect\":true},{\"text\":\"The lessee records the asset as a full purchase on day one.\",\"isCorrect\":false},{\"text\":\"The lessee intends to own the asset at the end of the term.\",\"isCorrect\":false},{\"text\":\"The lease term covers 100% of the asset's useful life.\",\"isCorrect\":false}]");
    record0.set("correct_answer", "A");
    record0.set("explanation", "Correct! Operating leases are characterized by short-term arrangements where the asset is returned to the lessor at the end of the lease term, providing flexibility to the lessee.");
    record0.set("order", 1);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})