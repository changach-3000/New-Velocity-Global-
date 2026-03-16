/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "<LESSON_2_4_QUIZ_ID>");
    record0.set("question_text", "What is the role of an Equity Participant in a leveraged lease?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[{\"label\":\"A\",\"text\":\"They ensure the equipment is cleaned every day\"},{\"label\":\"B\",\"text\":\"They are the person who drives the equipment\"},{\"label\":\"C\",\"text\":\"They provide a portion of the funds and claim the tax benefits of ownership\"},{\"label\":\"D\",\"text\":\"They provide 100% of the funds and claim the tax benefits of ownership\"}]");
    record0.set("correct_answer", "C");
    record0.set("explanation", "Correct! An Equity Participant in a leveraged lease is an investor who provides a portion of the funds needed to purchase the equipment (typically 20-40% of the total cost) and in return claims the tax benefits of ownership, including depreciation deductions and investment tax credits. The remaining funds are provided through debt financing (hence leveraged). Equity participants are typically institutional investors seeking tax-advantaged returns. This structure allows lessors to leverage their equity investment while sharing tax benefits with equity participants.");
    record0.set("order", 1);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})