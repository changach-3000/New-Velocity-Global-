/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "{{QUIZ_4_ID}}");
    record0.set("question_text", "How should a salesperson reframe the interest rate trap objection to focus on the cost of waiting?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "Focus on the interest rate percentage,Emphasize the opportunity cost of delayed equipment deployment and lost revenue,Suggest a lower interest rate,Avoid discussing interest rates");
    record0.set("correct_answer", "Emphasize the opportunity cost of delayed equipment deployment and lost revenue");
    record0.set("explanation", "Reframing the interest rate objection requires shifting focus from the cost of money to the cost of waiting - emphasizing lost revenue opportunities and the time value of equipment deployment.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "{{QUIZ_4_ID}}");
    record1.set("question_text", "How does leasing help companies overcome no budget objections?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "It requires no payment,It converts capital expenditures to operating expenses, bypassing annual budget cycles,It eliminates all costs,It requires immediate full payment");
    record1.set("correct_answer", "It converts capital expenditures to operating expenses, bypassing annual budget cycles");
    record1.set("explanation", "Leasing is treated as an operating expense rather than a capital expenditure, allowing companies to bypass annual budget approval processes and deploy equipment mid-year.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "{{QUIZ_4_ID}}");
    record2.set("question_text", "What psychological factors drive the preference for ownership, and how can salespeople address them?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "Only financial factors matter,Emotional appeal, control, autonomy, and pride of ownership - address by reframing leasing as smart ownership with flexibility and control,Customers always prefer leasing,Psychology has no role in purchasing decisions");
    record2.set("correct_answer", "Emotional appeal, control, autonomy, and pride of ownership - address by reframing leasing as smart ownership with flexibility and control");
    record2.set("explanation", "Understanding ownership psychology allows salespeople to address emotional drivers and reframe leasing as providing control, flexibility, and strategic advantages.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "{{QUIZ_4_ID}}");
    record3.set("question_text", "What is total cost of ownership (TCO), and how does it demonstrate that leasing can be more cost-effective than buying?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "TCO only includes purchase price,TCO includes all costs: purchase, maintenance, repairs, depreciation, financing, and opportunity costs - leasing often shows lower TCO,TCO is irrelevant to leasing decisions,TCO always favors buying");
    record3.set("correct_answer", "TCO includes all costs: purchase, maintenance, repairs, depreciation, financing, and opportunity costs - leasing often shows lower TCO");
    record3.set("explanation", "Total cost of ownership analysis reveals hidden costs of ownership (maintenance, repairs, obsolescence, depreciation) that often make leasing the more cost-effective option.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "{{QUIZ_4_ID}}");
    record4.set("question_text", "What is the most effective objection handling framework for equipment leasing sales?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "Ignore objections and push the sale,Listen and understand the real objection, validate concerns, reframe the conversation, present data-driven solutions, and close,Always agree with the customer,Use aggressive sales tactics");
    record4.set("correct_answer", "Listen and understand the real objection, validate concerns, reframe the conversation, present data-driven solutions, and close");
    record4.set("explanation", "The most effective framework involves active listening, validation, reframing, data-driven solutions, and strategic closing to convert objections into sales opportunities.");
    record4.set("order", 5);
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})