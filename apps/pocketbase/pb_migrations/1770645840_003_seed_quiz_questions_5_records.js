/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "lesson_3_quiz");
    record0.set("question_text", "What are the key differences between FMV and $1 buyout leases, and when should each be used?");
    record0.set("question_type", "multiple_choice");
    record0.set("correct_answer", "FMV leases allow residual value risk to lessor with higher residual value; $1 buyout transfers residual risk to lessee with lower residual; use FMV for clients wanting lower payments and flexibility, use $1 buyout for clients wanting ownership certainty");
    record0.set("explanation", "Understanding when to recommend each structure is critical for matching client needs and financial goals");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "lesson_3_quiz");
    record1.set("question_text", "How do step-up and step-down payments help align with a client's seasonal revenue?");
    record1.set("question_type", "multiple_choice");
    record1.set("correct_answer", "Step-up payments start low and increase over time matching revenue growth; step-down payments start high and decrease matching seasonal peaks; both align lease obligations with actual cash flow patterns");
    record1.set("explanation", "Payment flexibility is a key competitive advantage in equipment leasing");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "lesson_3_quiz");
    record2.set("question_text", "What is deferred commencement and what are its main benefits?");
    record2.set("question_type", "multiple_choice");
    record2.set("correct_answer", "Deferred commencement allows equipment use before payment obligations begin; benefits include improved cash flow, seasonal business support, project preparation time, and reduced financial strain during ramp-up periods");
    record2.set("explanation", "Deferred commencement is a powerful tool for closing deals with clients facing cash flow constraints");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "lesson_3_quiz");
    record3.set("question_text", "How should a salesperson present the 'use it now, pay later' pitch to a client?");
    record3.set("question_type", "multiple_choice");
    record3.set("correct_answer", "Focus on cash flow benefits, emphasize equipment availability for immediate business needs, highlight payment flexibility, position as solving their timing challenges, create urgency around equipment access while offering payment flexibility");
    record3.set("explanation", "Effective sales messaging positions lease structures as solutions to client problems");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "lesson_3_quiz");
    record4.set("question_text", "What factors should be considered when choosing the right lease structure for a client?");
    record4.set("question_type", "multiple_choice");
    record4.set("correct_answer", "Client business model and revenue patterns, cash flow cycles, accounting preferences, tax situation, equipment usage timeline, residual value expectations, competitive positioning, and long-term business goals");
    record4.set("explanation", "Comprehensive analysis of client needs ensures the best lease structure match");
    record4.set("order", 5);
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})