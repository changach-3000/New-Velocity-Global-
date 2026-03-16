/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "quiz_lesson_5_q1");
    record0.set("question_text", "Why is presenting multiple options (buy vs lease) more effective than presenting only the lease option?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "A) Psychology of choice - clients feel empowered when they have options\nB) Anchoring effect - the first option becomes the reference point\nC) Client empowerment - multiple options create a sense of control\nD) Decision confidence - clients are more confident when they can compare options");
    record0.set("correct_answer", "A, B, C, and D are all correct. Multiple options increase close rates from 30-40% to 60-75%");
    record0.set("explanation", "Research in behavioral economics shows that presenting multiple options significantly increases decision-making and close rates. When clients see only one option (the lease), they may feel pressured or limited. Multiple options create a sense of control and empowerment, making clients more likely to choose one of your proposals. The anchoring effect means the first option presented becomes the reference point for all others. Clients feel more confident when they can compare options and make an informed decision. The optimal number of options is three - not too few, not too many.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "quiz_lesson_5_q2");
    record1.set("question_text", "What are the five most critical pieces of information needed to streamline the credit approval process?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "A) Financial statements, bank statements, business licenses, personal guarantor info, and equipment specifications\nB) Tax returns, credit score, business plan, insurance, and customer references\nC) Revenue projections, debt schedule, employee count, industry analysis, and market share\nD) Personal credit history, business location, years in operation, product line, and supplier list");
    record1.set("correct_answer", "A) Financial statements, bank statements, business licenses, personal guarantor info, and equipment specifications");
    record1.set("explanation", "The five most critical pieces of information for credit approval are: (1) Financial statements - to assess financial health, (2) Bank statements - to verify cash flow and liquidity, (3) Business licenses - to confirm legal operation, (4) Personal guarantor information - to assess personal credit and financial strength, and (5) Equipment specifications - to confirm the lease amount and terms. These documents allow the credit team to quickly assess risk and make an approval decision. Providing complete information upfront is the key to expediting the credit process.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "quiz_lesson_5_q3");
    record2.set("question_text", "How should salespeople approach the lease-end conversation to create a 'customer for life'?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "A) Wait until 30 days before lease end to contact them\nB) Proactively reach out 90 days before lease end, understand their needs, present upgrade options, and position yourself as a trusted advisor\nC) Only contact them if they call you first\nD) Focus only on renewing the current equipment at a lower price");
    record2.set("correct_answer", "B) Proactively reach out 90 days before lease end, understand their needs, present upgrade options, and position yourself as a trusted advisor");
    record2.set("explanation", "Creating a 'customer for life' requires proactive engagement at lease-end. Begin conversations 90 days before lease end to understand what's working and what could be improved. Present upgrade options 60 days before lease end, and finalize decisions 30 days before lease end. Position yourself as a trusted advisor who understands their business and helps them succeed. This approach builds loyalty, increases upgrade rates, and creates long-term customer relationships. The lifetime value of a customer who upgrades and renews multiple times is significantly higher than a one-time transaction.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "quiz_lesson_5_q4");
    record3.set("question_text", "What is the anchoring effect, and how does it apply to presenting lease proposals?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "A) The anchoring effect is when clients anchor their expectations to the lowest price\nB) The anchoring effect is a cognitive bias where the first number presented becomes the reference point for all subsequent judgments\nC) The anchoring effect means clients will always choose the first option presented\nD) The anchoring effect is when clients anchor their decision to their current equipment");
    record3.set("correct_answer", "B) The anchoring effect is a cognitive bias where the first number presented becomes the reference point for all subsequent judgments");
    record3.set("explanation", "The anchoring effect is a well-documented cognitive bias in behavioral economics. The first number or option presented becomes the reference point for all subsequent judgments. In lease proposals, you can use this strategically by presenting your preferred option (the lease) first. Make sure the lease option looks attractive, then present other options as alternatives to the anchor. Clients will naturally compare everything to the first option, making the lease appear more economical. For example, if you present a lease at $5,000/month first, then a hybrid at $6,500/month and a purchase at $8,200/month, clients will see the lease as the most economical option.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "quiz_lesson_5_q5");
    record4.set("question_text", "What are the key steps in the complete closing framework for equipment leasing sales?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "A) Preparation, presentation, objection handling, closing, credit, implementation, relationship, and renewal\nB) Discovery, proposal, negotiation, signature, and funding\nC) Needs analysis, quote, follow-up, and close\nD) Initial contact, needs assessment, proposal, and signature");
    record4.set("correct_answer", "A) Preparation, presentation, objection handling, closing, credit, implementation, relationship, and renewal");
    record4.set("explanation", "The complete closing framework has eight key phases: (1) Preparation - thorough discovery and multi-option proposal development, (2) Presentation - present options using visual frameworks, (3) Objection Handling - listen, acknowledge, and provide solutions, (4) Closing - use appropriate closing technique and ask for signature, (5) Credit - gather complete information and expedite approval, (6) Implementation - coordinate delivery, installation, and training, (7) Relationship - regular check-ins and proactive problem-solving, and (8) Renewal - proactive outreach at lease-end and upgrade presentation. This comprehensive framework ensures successful deals and creates the foundation for long-term customer relationships.");
    record4.set("order", 5);
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})