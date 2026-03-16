/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "case_study_lesson_3");
    record0.set("question_text", "What was BuildRight Construction's primary cash flow challenge, and how did deferred commencement solve it?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "A) They needed equipment immediately but revenue was delayed 3 months; deferred commencement allowed them to receive equipment now and start payments when revenue began in month 4, B) They had too much cash and needed to invest it; deferred commencement delayed their payments, C) They wanted to purchase equipment but couldn't afford it; deferred commencement gave them a discount, D) They had equipment but needed to return it; deferred commencement extended the lease term");
    record0.set("correct_answer", "A");
    record0.set("explanation", "The case study clearly shows that BuildRight's main problem was the 3-month gap between needing equipment and generating revenue. Deferred commencement solved this by allowing equipment delivery in month 1 but delaying payment obligations until month 4 when revenue started flowing.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "case_study_lesson_3");
    record1.set("question_text", "Why was a step-down payment structure important for this construction project?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "A) It reduced the total lease cost, B) It matched the equipment needs to the project phases - high payments during active construction (months 4-15) and lower payments during the final phase (months 16-18), C) It allowed BuildRight to purchase the equipment at the end, D) It eliminated the need for a down payment");
    record1.set("correct_answer", "B");
    record1.set("explanation", "The step-down structure ($38,500/month during active construction, $22,000/month during final phase) aligned lease payments with actual equipment utilization and project revenue generation, providing maximum flexibility.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "case_study_lesson_3");
    record2.set("question_text", "How much cash did BuildRight preserve during the critical planning phase (months 1-3) using this lease structure?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "A) $114,500, B) $38,500, C) $650,000, D) $615,500");
    record2.set("correct_answer", "A");
    record2.set("explanation", "By deferring payments until month 4, BuildRight preserved $114,500 in cash during the critical months 1-3 when they had minimal revenue but needed equipment on-site for site preparation.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "case_study_lesson_3");
    record3.set("question_text", "What was the key sales lesson from the BuildRight case study, and how can salespeople apply it to other construction clients?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "A) Always offer the lowest price possible to win deals, B) Understand the client's project timeline and revenue cycle, then structure leases that enable growth by aligning payments with actual revenue generation - the 'use it now, pay later' pitch solves real business problems, C) Construction companies always prefer to purchase equipment rather than lease, D) Lease terms should always be the same length as the equipment's useful life");
    record3.set("correct_answer", "B");
    record3.set("explanation", "The case demonstrates that successful lease structuring requires understanding the client's specific business challenges and project timeline. By aligning payments with revenue cycles, salespeople can create solutions that enable growth rather than constrain it, making the lease attractive and solving real cash flow problems.");
    record3.set("order", 4);
  app.save(record3);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})