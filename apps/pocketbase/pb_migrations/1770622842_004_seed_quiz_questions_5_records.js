/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "cly8q5h2k000008l8g5z5g5z5");
    record0.set("question_text", "What is the primary purpose of residual value estimation?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"To forecast equipment value at lease end\", \"To determine initial lease payments\", \"To calculate interest rates\", \"To assess tenant creditworthiness\"]");
    record0.set("correct_answer", "To forecast equipment value at lease end");
    record0.set("explanation", "Residual value estimation helps lessors predict what the equipment will be worth when the lease ends, which is critical for pricing and risk management.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "cly8q5h2k000008l8g5z5g5z5");
    record1.set("question_text", "Which factor is most likely to cause obsolescence risk?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"Rapid technological advancement\", \"Stable market conditions\", \"Long lease terms\", \"High credit scores\"]");
    record1.set("correct_answer", "Rapid technological advancement");
    record1.set("explanation", "Technological changes can make equipment outdated or less valuable, creating obsolescence risk, especially in fast-moving industries.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "cly8q5h2k000008l8g5z5g5z5");
    record2.set("question_text", "How does market volatility affect residual value risk?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"It creates uncertainty in equipment value forecasts\", \"It increases lease payment amounts\", \"It improves credit scores\", \"It reduces equipment depreciation\"]");
    record2.set("correct_answer", "It creates uncertainty in equipment value forecasts");
    record2.set("explanation", "Market volatility makes it difficult to accurately predict future equipment values, increasing the risk of residual value loss.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "cly8q5h2k000008l8g5z5g5z5");
    record3.set("question_text", "What is equipment depreciation in the context of residual value?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"The decline in equipment value over time\", \"The increase in lease payments\", \"The improvement in equipment condition\", \"The reduction in credit risk\"]");
    record3.set("correct_answer", "The decline in equipment value over time");
    record3.set("explanation", "Equipment depreciation represents the loss of value as equipment ages and wears, directly impacting residual value at lease end.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "cly8q5h2k000008l8g5z5g5z5");
    record4.set("question_text", "Why is it important to monitor technology changes when assessing residual value?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"New technology can make existing equipment less valuable or obsolete\", \"Technology changes increase lease payments\", \"Technology improves equipment durability\", \"Technology reduces market volatility\"]");
    record4.set("correct_answer", "New technology can make existing equipment less valuable or obsolete");
    record4.set("explanation", "Technological advances can render equipment obsolete or significantly reduce its market value, making it critical to monitor for residual value risk.");
    record4.set("order", 5);
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})