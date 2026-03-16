/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "<QUIZ_3.1_ID>");
    record0.set("question_text", "What is the \"Speed to Innovation\" value proposition?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"Leasing is faster than buying\",\"Leasing gives access to latest technology with regular upgrades\",\"Leasing is innovative\",\"Leasing speeds up business\"]");
    record0.set("correct_answer", "Leasing gives access to latest technology with regular upgrades");
    record0.set("explanation", "The \"Speed to Innovation\" value proposition focuses on providing clients with access to the latest technology through regular upgrade cycles, enabling them to maintain competitive advantage in fast-moving industries like IT.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "<QUIZ_3.1_ID>");
    record1.set("question_text", "What is the \"Budget Predictability\" value proposition?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"Leasing is cheaper\",\"Leasing converts Capex to Opex with predictable monthly costs\",\"Leasing eliminates budgeting\",\"Leasing reduces budgets\"]");
    record1.set("correct_answer", "Leasing converts Capex to Opex with predictable monthly costs");
    record1.set("explanation", "The \"Budget Predictability\" value proposition emphasizes converting large capital expenditures into predictable operating expenses, making budgeting easier and faster approval cycles.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "<QUIZ_3.1_ID>");
    record2.set("question_text", "What is the \"Project-Based Financing\" value proposition?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"Leasing is for projects\",\"Leasing matches equipment to project duration, avoiding idle equipment costs\",\"Leasing is project-specific\",\"Leasing finances projects\"]");
    record2.set("correct_answer", "Leasing matches equipment to project duration, avoiding idle equipment costs");
    record2.set("explanation", "The \"Project-Based Financing\" value proposition allows companies to lease equipment only for the duration of specific projects, avoiding costs associated with idle equipment between projects.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "<QUIZ_3.1_ID>");
    record3.set("question_text", "What is the \"Circular Economy\" value proposition?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"Leasing is circular\",\"Leasing enables ESG commitments with lessor handling disposal and recycling\",\"Leasing is sustainable\",\"Leasing reduces waste\"]");
    record3.set("correct_answer", "Leasing enables ESG commitments with lessor handling disposal and recycling");
    record3.set("explanation", "The \"Circular Economy\" value proposition emphasizes how leasing supports ESG commitments by having the lessor handle proper disposal and recycling of equipment, supporting sustainability goals.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "<QUIZ_3.1_ID>");
    record4.set("question_text", "What is the most common objection to leasing?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"Leasing is too simple\",\"Leasing is too flexible\",\"Leasing is too expensive\",\"Leasing is too cheap\"]");
    record4.set("correct_answer", "Leasing is too expensive");
    record4.set("explanation", "The most common objection to leasing is that it appears expensive when comparing lease payments to purchase price, without considering total cost of ownership.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "<QUIZ_3.1_ID>");
    record5.set("question_text", "What is Total Cost of Ownership (TCO)?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "[\"The purchase price of an asset\",\"The sum of all costs associated with owning an asset (purchase, operating, financing, obsolescence, disposal)\",\"The annual cost of ownership\",\"The depreciation of an asset\"]");
    record5.set("correct_answer", "The sum of all costs associated with owning an asset (purchase, operating, financing, obsolescence, disposal)");
    record5.set("explanation", "TCO includes all costs: purchase price, operating costs, financing costs, obsolescence costs, and disposal costs, minus any residual value.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "<QUIZ_3.1_ID>");
    record6.set("question_text", "What is the best response to \"We have plenty of cash, so we should buy\"?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"Agree that buying is better\",\"Explain opportunity cost - cash used for depreciating assets has high opportunity cost\",\"Explain that leasing is cheaper\",\"Explain that buying is complicated\"]");
    record6.set("correct_answer", "Explain opportunity cost - cash used for depreciating assets has high opportunity cost");
    record6.set("explanation", "The best response addresses the opportunity cost of using cash for depreciating assets instead of investing in higher-return business initiatives.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "<QUIZ_3.1_ID>");
    record7.set("question_text", "What is the best response to \"We want to own our assets\"?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "[\"Agree that ownership is important\",\"Explain that ownership is not important\",\"Explain that clients maintain operational control through leasing\",\"Explain that leasing is better\"]");
    record7.set("correct_answer", "Explain that clients maintain operational control through leasing");
    record7.set("explanation", "The key is to clarify that clients maintain full operational control through leasing - they decide how equipment is used, when it's maintained, and how it's operated. The lessor only maintains legal ownership.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "<QUIZ_3.1_ID>");
    record8.set("question_text", "What is the Assumptive Close?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "[\"Assume the client will not lease\",\"Assume the client has decided to lease and move forward with implementation details\",\"Assume the client wants to buy\",\"Assume the client needs more time\"]");
    record8.set("correct_answer", "Assume the client has decided to lease and move forward with implementation details");
    record8.set("explanation", "The Assumptive Close is a closing technique where you assume the client has decided to lease and proceed with implementation details, moving the conversation forward.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "<QUIZ_3.1_ID>");
    record9.set("question_text", "What is the most important factor in closing a leasing deal?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "[\"Price\",\"Terms\",\"Building trust and demonstrating value\",\"Speed\"]");
    record9.set("correct_answer", "Building trust and demonstrating value");
    record9.set("explanation", "The most important factor in closing a leasing deal is building trust with the client and clearly demonstrating the value proposition. Price and terms are secondary to establishing credibility and trust.");
    record9.set("order", 10);
  app.save(record9);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})