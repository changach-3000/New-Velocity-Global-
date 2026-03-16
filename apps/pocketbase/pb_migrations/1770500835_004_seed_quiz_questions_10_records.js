/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "QUIZ_1_ID");
    record0.set("question_text", "What is the primary benefit of expanding the pie in value creation?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"A) It reduces the lessor's profit\", \"B) It creates more value for both parties\", \"C) It simplifies the negotiation\", \"D) It speeds up the approval process\"]");
    record0.set("correct_answer", "B) It creates more value for both parties");
    record0.set("explanation", "Expanding the pie means looking for additional value beyond the initial positions. This creates more value for both parties rather than just splitting existing value, leading to better outcomes for everyone.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "QUIZ_1_ID");
    record1.set("question_text", "Which of the following is an example of non-financial value in lease sales?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"A) Lower lease rate\", \"B) Flexible payment terms\", \"C) Better service and 24/7 support\", \"D) Tax benefits\"]");
    record1.set("correct_answer", "C) Better service and 24/7 support");
    record1.set("explanation", "Non-financial value includes benefits that are not directly monetary, such as better service, faster approval, equipment quality, and customer support. These are distinct from financial value like lower rates or tax benefits.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "QUIZ_1_ID");
    record2.set("question_text", "What does 'separating people from the problem' mean in win-win negotiation?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"A) Ignoring the other party's concerns\", \"B) Focusing on the issue rather than attacking the person\", \"C) Removing the other party from the negotiation\", \"D) Making the negotiation personal\"]");
    record2.set("correct_answer", "B) Focusing on the issue rather than attacking the person");
    record2.set("explanation", "Separating people from the problem means focusing on the issue at hand rather than making it personal or attacking the other party. This keeps the negotiation professional and constructive.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "QUIZ_1_ID");
    record3.set("question_text", "In the case study, what was the client's primary interest beyond their stated position?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"A) Only getting the lowest rate\", \"B) Flexibility and good service\", \"C) Avoiding all negotiations\", \"D) Extending the lease term\"]");
    record3.set("correct_answer", "B) Flexibility and good service");
    record3.set("explanation", "The case study showed that while the client stated they wanted a 3.5% rate, their underlying interest was flexibility and good service. Understanding these interests led to better solutions.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "QUIZ_1_ID");
    record4.set("question_text", "Which creative problem-solving technique involves thinking outside the box and challenging assumptions?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"A) Brainstorming\", \"B) Lateral thinking\", \"C) Analogies\", \"D) Reframing\"]");
    record4.set("correct_answer", "B) Lateral thinking");
    record4.set("explanation", "Lateral thinking is the technique of thinking outside the box and challenging assumptions. It helps generate innovative solutions by approaching problems from unconventional angles.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "QUIZ_1_ID");
    record5.set("question_text", "What is the purpose of using objective criteria in negotiations?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "[\"A) To confuse the other party\", \"B) To make decisions easier to justify and more credible\", \"C) To avoid discussing interests\", \"D) To speed up the process\"]");
    record5.set("correct_answer", "B) To make decisions easier to justify and more credible");
    record5.set("explanation", "Using objective criteria (like market rates) makes decisions easier to justify and more credible. It removes subjectivity and helps both parties accept the outcome as fair.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "QUIZ_1_ID");
    record6.set("question_text", "In the case study, what was the final agreed rate after value creation?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"A) 3.5%\", \"B) 4%\", \"C) 4.25%\", \"D) 5%\"]");
    record6.set("correct_answer", "C) 4.25%");
    record6.set("explanation", "Through value creation strategies and identifying interests, the final agreement was 4.25% for a 4-year term with quarterly payments and premium service. This was a win-win outcome.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "QUIZ_1_ID");
    record7.set("question_text", "What does 'perceived value' mean?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "[\"A) The actual financial benefit\", \"B) What the client thinks is valuable\", \"C) The lessor's profit margin\", \"D) The market rate\"]");
    record7.set("correct_answer", "B) What the client thinks is valuable");
    record7.set("explanation", "Perceived value is what the client thinks is valuable, which may differ from actual value. Understanding perceived value is important for creating solutions that clients will accept.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "QUIZ_1_ID");
    record8.set("question_text", "Which of the following best describes a win-win negotiation outcome?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "[\"A) One party gets everything they want\", \"B) Both parties benefit and are satisfied\", \"C) The negotiation is avoided\", \"D) One party compromises completely\"]");
    record8.set("correct_answer", "B) Both parties benefit and are satisfied");
    record8.set("explanation", "A win-win negotiation outcome means both parties benefit and are satisfied with the agreement. It's not a zero-sum game where one party's gain is another's loss.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "QUIZ_1_ID");
    record9.set("question_text", "What is the first step in the creative problem-solving process?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "[\"A) Evaluate all ideas\", \"B) Generate ideas without judgment\", \"C) Implement the solution\", \"D) Analyze the problem\"]");
    record9.set("correct_answer", "B) Generate ideas without judgment");
    record9.set("explanation", "Brainstorming, the first step in creative problem-solving, involves generating ideas without judgment and encouraging wild ideas. Evaluation comes later in the process.");
    record9.set("order", 10);
  app.save(record9);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})