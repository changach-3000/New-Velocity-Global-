/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "QUIZ_2_ID");
    record0.set("question_text", "What is anchoring in negotiation?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"A) Staying firm on your position\", \"B) The first number mentioned that influences the final outcome\", \"C) Refusing to negotiate\", \"D) Accepting the other party's first offer\"]");
    record0.set("correct_answer", "B) The first number mentioned that influences the final outcome");
    record0.set("explanation", "Anchoring is when the first number mentioned in a negotiation significantly influences the final outcome. It sets a reference point that affects perception and expectations.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "QUIZ_2_ID");
    record1.set("question_text", "Why is making the first offer advantageous in negotiation?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"A) It guarantees acceptance\", \"B) It sets the anchor and influences the final outcome\", \"C) It eliminates the need for further negotiation\", \"D) It shows weakness\"]");
    record1.set("correct_answer", "B) It sets the anchor and influences the final outcome");
    record1.set("explanation", "Making the first offer is advantageous because it sets the anchor, which influences the final outcome. When you have good information, your opening position can significantly shape the negotiation.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "QUIZ_2_ID");
    record2.set("question_text", "What is the principle of reciprocity in negotiation?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"A) Always give in to the other party\", \"B) Give something to get something in return\", \"C) Never make concessions\", \"D) Ignore the other party's needs\"]");
    record2.set("correct_answer", "B) Give something to get something in return");
    record2.set("explanation", "Reciprocity means giving something to get something in return. It creates an obligation for the other party to reciprocate, which can be used strategically in negotiations.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "QUIZ_2_ID");
    record3.set("question_text", "How should you handle silence in negotiation?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"A) Fill it immediately with more talking\", \"B) Stay silent and wait for the other party to respond\", \"C) Leave the negotiation\", \"D) Change the subject\"]");
    record3.set("correct_answer", "B) Stay silent and wait for the other party to respond");
    record3.set("explanation", "Silence creates pressure and allows thinking time. After making an offer, staying silent and waiting for the other party to respond is an effective tactic.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "QUIZ_2_ID");
    record4.set("question_text", "What is reframing in negotiation?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"A) Ignoring the other party's concerns\", \"B) Changing how an issue is viewed or presenting a different perspective\", \"C) Refusing to discuss the issue\", \"D) Accepting the other party's perspective\"]");
    record4.set("correct_answer", "B) Changing how an issue is viewed or presenting a different perspective");
    record4.set("explanation", "Reframing means changing how an issue is viewed or presenting a different perspective. For example, presenting a lease as an investment rather than an expense.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "QUIZ_2_ID");
    record5.set("question_text", "In the case study, what was the initial gap between the lessor's and client's positions?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "[\"A) 0.5%\", \"B) 1%\", \"C) 1.5%\", \"D) 2%\"]");
    record5.set("correct_answer", "C) 1.5%");
    record5.set("explanation", "The lessor offered 5% and the client wanted 3.5%, creating a 1.5% gap. Through negotiation tactics, they reached 4.25%.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "QUIZ_2_ID");
    record6.set("question_text", "What tactic was used when the lessor said 'If you commit to 5 years, I can offer 4.5%'?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"A) Anchoring\", \"B) Silence\", \"C) Reciprocity\", \"D) Reframing\"]");
    record6.set("correct_answer", "C) Reciprocity");
    record6.set("explanation", "This is reciprocity - offering something (lower rate) in exchange for something (longer commitment). It creates an obligation for the client to reciprocate.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "QUIZ_2_ID");
    record7.set("question_text", "How should concessions be made in negotiation?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "[\"A) All at once\", \"B) Gradually and reluctantly, asking for something in return\", \"C) Without asking for anything in return\", \"D) Never make concessions\"]");
    record7.set("correct_answer", "B) Gradually and reluctantly, asking for something in return");
    record7.set("explanation", "Concessions should be made gradually and reluctantly, with something asked in return. This maintains balance and prevents the other party from expecting more concessions.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "QUIZ_2_ID");
    record8.set("question_text", "What is the purpose of justifying your anchor in negotiation?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "[\"A) To confuse the other party\", \"B) To explain your reasoning and provide supporting data\", \"C) To avoid further discussion\", \"D) To show superiority\"]");
    record8.set("correct_answer", "B) To explain your reasoning and provide supporting data");
    record8.set("explanation", "Justifying your anchor with reasoning and supporting data makes it more credible and harder to dismiss. It helps the other party accept your opening position.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "QUIZ_2_ID");
    record9.set("question_text", "In the case study, what was the final agreed rate after using negotiation tactics?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "[\"A) 4%\", \"B) 4.25%\", \"C) 4.5%\", \"D) 5%\"]");
    record9.set("correct_answer", "B) 4.25%");
    record9.set("explanation", "Through anchoring, reciprocity, silence, and reframing tactics, the final agreed rate was 4.25% for a 4.5-year term, representing a successful negotiation outcome.");
    record9.set("order", 10);
  app.save(record9);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})