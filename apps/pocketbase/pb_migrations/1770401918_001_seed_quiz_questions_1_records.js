/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "PLACEHOLDER_QUIZ_ID_FOR_CIRCULAR_ECONOMY");
    record0.set("question_text", "Under the Circular Economy leasing model, what is the Lessor's primary focus at the end of the term?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[{\"label\":\"A\",\"text\":\"Recovering, refurbishing, and redeploying the asset\"},{\"label\":\"B\",\"text\":\"Ignoring the asset and letting the lessee keep it\"},{\"label\":\"C\",\"text\":\"Scrapping the asset for parts immediately\"},{\"label\":\"D\",\"text\":\"Charging the lessee a large disposal fee\"}]");
    record0.set("correct_answer", "A");
    record0.set("explanation", "Correct! In a Circular Economy leasing model, the Lessor's primary focus at lease end is to recover the asset, refurbish it if necessary, and redeploy it for another lease cycle or market. This maximizes the asset's lifecycle value, reduces waste, and aligns with sustainability principles. The asset is treated as a valuable resource to be reused, not discarded.");
    record0.set("order", 1);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})