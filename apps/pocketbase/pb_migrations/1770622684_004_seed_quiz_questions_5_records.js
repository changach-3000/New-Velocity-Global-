/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "cly8q5h2k000008l8g5z5g5z5");
    record0.set("question_text", "What is credit risk in equipment leasing?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"Risk of borrower default\", \"Risk of equipment damage\", \"Risk of market decline\", \"Risk of interest rate change\"]");
    record0.set("correct_answer", "Risk of borrower default");
    record0.set("explanation", "Credit risk refers to the possibility that the lessee will default on lease payments.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "cly8q5h2k000008l8g5z5g5z5");
    record1.set("question_text", "Define residual risk");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"Risk of equipment value uncertainty at lease end\", \"Risk during equipment operation\", \"Risk of credit default\", \"Risk of market competition\"]");
    record1.set("correct_answer", "Risk of equipment value uncertainty at lease end");
    record1.set("explanation", "Residual risk is the uncertainty about the equipment value when the lease ends.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "cly8q5h2k000008l8g5z5g5z5");
    record2.set("question_text", "What does operational risk include?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"Equipment maintenance and downtime\", \"Borrower credit issues\", \"Market price changes\", \"Interest rate fluctuations\"]");
    record2.set("correct_answer", "Equipment maintenance and downtime");
    record2.set("explanation", "Operational risk encompasses risks from equipment maintenance, repairs, and unexpected downtime.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "cly8q5h2k000008l8g5z5g5z5");
    record3.set("question_text", "Market risk in leasing refers to:");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"Fluctuations in equipment market value\", \"Lessee payment defaults\", \"Equipment operational failures\", \"Regulatory changes\"]");
    record3.set("correct_answer", "Fluctuations in equipment market value");
    record3.set("explanation", "Market risk involves changes in the market value of leased equipment due to supply, demand, and economic factors.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "cly8q5h2k000008l8g5z5g5z5");
    record4.set("question_text", "Which risk type is most directly related to lessee creditworthiness?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"Credit risk\", \"Residual risk\", \"Operational risk\", \"Market risk\"]");
    record4.set("correct_answer", "Credit risk");
    record4.set("explanation", "Credit risk is directly tied to the lessee's ability and willingness to make lease payments.");
    record4.set("order", 5);
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})