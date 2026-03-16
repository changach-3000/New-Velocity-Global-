/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "PLACEHOLDER_QUIZ_ID");
    record0.set("question_text", "What is a \"Hell or High Water\" clause specifically designed to prevent?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[{\"label\":\"A\",\"text\":\"Natural disasters\"},{\"label\":\"B\",\"text\":\"The asset from rusting\"},{\"label\":\"C\",\"text\":\"The Lessee from withholding rent due to equipment failure or disputes\"},{\"label\":\"D\",\"text\":\"The Lessor from selling the asset\"}]");
    record0.set("correct_answer", "C");
    record0.set("explanation", "Correct! A \"Hell or High Water\" clause is specifically designed to prevent the Lessee from withholding rent payments due to equipment failure, disputes, or other operational issues. This clause ensures that the Lessee must continue making lease payments regardless of whether the equipment is functioning properly or there are disagreements with the Lessor. It protects the Lessor's cash flow and ensures payment obligations are unconditional and independent of equipment performance. This is a critical protection for Lessors in lease agreements.\n\nDetailed feedback for incorrect options:\nA) Not quite. Natural disasters are typically covered under 'Force Majeure' clauses, not 'Hell or High Water' clauses. Hell or High Water clauses address contractual obligations and payment responsibilities, not acts of God or natural disasters.\nB) Not quite. Asset maintenance and rust prevention are maintenance obligations, not the purpose of a Hell or High Water clause. This clause is about payment obligations, not physical asset protection.\nD) Not quite. Restrictions on asset sales are typically covered in other lease clauses (like assignment and transfer restrictions), not in a Hell or High Water clause. This clause focuses on payment obligations, not asset disposition.");
    record0.set("order", 1);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})