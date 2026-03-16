/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "cly8q5h2k000008l8g5z5g5z5");
    record0.set("question_text", "What is the primary purpose of equipment insurance in leasing?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"To protect against loss or damage to equipment\", \"To increase lease payment amounts\", \"To improve tenant credit scores\", \"To reduce equipment depreciation\"]");
    record0.set("correct_answer", "To protect against loss or damage to equipment");
    record0.set("explanation", "Equipment insurance provides protection against physical loss, damage, or destruction, mitigating operational and financial risks for the lessor.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "cly8q5h2k000008l8g5z5g5z5");
    record1.set("question_text", "How do guarantees and warranties help mitigate risk?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"They protect against residual value loss and equipment failure\", \"They increase lease payment amounts\", \"They improve market conditions\", \"They reduce credit risk only\"]");
    record1.set("correct_answer", "They protect against residual value loss and equipment failure");
    record1.set("explanation", "Manufacturer warranties and third-party guarantees provide protection against equipment defects and failures, reducing operational and residual value risks.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "cly8q5h2k000008l8g5z5g5z5");
    record2.set("question_text", "What is the benefit of portfolio diversification in equipment leasing?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"It spreads risk across different equipment types and lessees\", \"It increases residual values\", \"It guarantees lease payments\", \"It eliminates all market risk\"]");
    record2.set("correct_answer", "It spreads risk across different equipment types and lessees");
    record2.set("explanation", "Diversifying across equipment types, industries, and lessees reduces concentration risk and protects against losses in any single segment.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "cly8q5h2k000008l8g5z5g5z5");
    record3.set("question_text", "What is collateral management in the context of risk mitigation?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"Securing additional collateral and maintaining proper lien positions\", \"Increasing lease payment amounts\", \"Reducing equipment insurance\", \"Eliminating warranties\"]");
    record3.set("correct_answer", "Securing additional collateral and maintaining proper lien positions");
    record3.set("explanation", "Proper collateral management ensures the lessor has legal claims to assets and can recover losses in case of default or bankruptcy.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "cly8q5h2k000008l8g5z5g5z5");
    record4.set("question_text", "Why is contingency planning important in risk mitigation?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"It prepares the lessor for unexpected events and market downturns\", \"It guarantees lease payments\", \"It eliminates residual value risk\", \"It increases equipment value\"]");
    record4.set("correct_answer", "It prepares the lessor for unexpected events and market downturns");
    record4.set("explanation", "Contingency planning with backup strategies and reserve funds helps lessors respond effectively to unexpected challenges and economic downturns.");
    record4.set("order", 5);
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})