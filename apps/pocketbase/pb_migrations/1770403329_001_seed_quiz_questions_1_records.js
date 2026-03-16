/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "<QUIZ_ID_FOR_LEASE_COST_COMPONENTS_LESSON>");
    record0.set("question_text", "Which of these is a \"Soft Cost\" that is frequently capped in structured leases?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[{\"label\":\"A\",\"text\":\"The engine of a truck\",\"feedback\":\"Not quite. The engine of a truck is a hard asset component and a 'Hard Cost' - it's a tangible physical component of the equipment being leased, not a soft cost.\"},{\"label\":\"B\",\"text\":\"The steel frame of a building\",\"feedback\":\"Not quite. The steel frame of a building is a hard asset component and a 'Hard Cost' - it's a tangible physical structure, not a soft cost.\"},{\"label\":\"C\",\"text\":\"The fuel used by the machine\",\"feedback\":\"Not quite. Fuel is an operating expense, not a soft cost included in the lease structure. Soft costs are one-time costs incurred at lease inception, not ongoing operational expenses.\"},{\"label\":\"D\",\"text\":\"Software, installation, and personnel training\",\"feedback\":\"Correct! Software, installation, and personnel training are classic examples of 'Soft Costs' in structured leases. Soft costs are non-tangible, one-time costs incurred at lease inception (such as software licenses, system installation, employee training, consulting fees, and documentation). These costs are frequently capped in lease agreements because they can be difficult to control and may escalate unexpectedly. Lessors often impose caps on soft costs to limit their exposure and ensure predictable total lease economics. This is a key structuring element in equipment and technology leases.\"}]");
    record0.set("correct_answer", "D");
    record0.set("explanation", "Correct! Software, installation, and personnel training are classic examples of \"Soft Costs\" in structured leases. Soft costs are non-tangible, one-time costs incurred at lease inception (such as software licenses, system installation, employee training, consulting fees, and documentation). These costs are frequently capped in lease agreements because they can be difficult to control and may escalate unexpectedly. Lessors often impose caps on soft costs to limit their exposure and ensure predictable total lease economics. This is a key structuring element in equipment and technology leases.");
    record0.set("order", 1);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})