/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "quiz_lesson_1_1");
    record0.set("question_text", "What is the primary goal of strategic lease structuring?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "A) Minimize lessor costs\nB) Maximize value for all parties\nC) Reduce lessee flexibility\nD) Increase interest rates");
    record0.set("correct_answer", "B");
    record0.set("explanation", "Strategic lease structuring aims to maximize value for all parties involved in the lease transaction.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "quiz_lesson_1_1");
    record1.set("question_text", "Which factor is most critical in lease structuring?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "A) Equipment color\nB) Lessor's location\nC) Residual value assumptions\nD) Lessee's office size");
    record1.set("correct_answer", "C");
    record1.set("explanation", "Residual value assumptions are critical as they significantly impact lease pricing and profitability.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "quiz_lesson_1_1");
    record2.set("question_text", "What does a higher residual value assumption lead to?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "A) Higher monthly payments\nB) Lower monthly payments\nC) No change in payments\nD) Increased risk for lessor");
    record2.set("correct_answer", "B");
    record2.set("explanation", "Higher residual value assumptions result in lower monthly payments since the lessor expects to recover more value at lease end.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "quiz_lesson_1_1");
    record3.set("question_text", "In lease structuring, what is the purpose of a buyout option?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "A) To confuse lessees\nB) To provide flexibility and potential additional revenue\nC) To eliminate residual risk\nD) To increase lessor costs");
    record3.set("correct_answer", "B");
    record3.set("explanation", "Buyout options provide flexibility to lessees and create potential additional revenue streams for lessors.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "quiz_lesson_1_1");
    record4.set("question_text", "Which lease structure is most suitable for rapidly depreciating equipment?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "A) Long-term lease with low residual\nB) Short-term lease with high residual\nC) Long-term lease with high residual\nD) No lease structure works");
    record4.set("correct_answer", "A");
    record4.set("explanation", "Long-term leases with low residual values are suitable for rapidly depreciating equipment to minimize residual risk.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "quiz_lesson_1_1");
    record5.set("question_text", "What is the impact of lease term length on monthly payments?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "A) Longer terms increase payments\nB) Longer terms decrease payments\nC) Term length has no impact\nD) Impact depends on equipment type only");
    record5.set("correct_answer", "B");
    record5.set("explanation", "Longer lease terms spread the cost over more periods, resulting in lower monthly payments.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "quiz_lesson_1_1");
    record6.set("question_text", "How does equipment condition at lease end affect structuring?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "A) It doesn't matter\nB) It determines wear and tear provisions\nC) It only affects the lessor\nD) It's irrelevant to pricing");
    record6.set("correct_answer", "B");
    record6.set("explanation", "Equipment condition at lease end is critical for determining wear and tear provisions and residual value.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "quiz_lesson_1_1");
    record7.set("question_text", "What is a key advantage of flexible lease structures?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "A) Lower lessor profits\nB) Increased lessee satisfaction and retention\nC) Reduced equipment value\nD) Simplified accounting");
    record7.set("correct_answer", "B");
    record7.set("explanation", "Flexible lease structures increase lessee satisfaction and improve customer retention.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "quiz_lesson_1_1");
    record8.set("question_text", "In strategic structuring, what role does market analysis play?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "A) No role\nB) Determines equipment color\nC) Informs residual value and pricing assumptions\nD) Only affects competitors");
    record8.set("correct_answer", "C");
    record8.set("explanation", "Market analysis is essential for determining realistic residual values and competitive pricing.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "quiz_lesson_1_1");
    record9.set("question_text", "What is the relationship between lease structure and credit risk?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "A) No relationship\nB) Structure can mitigate credit risk through terms and conditions\nC) Only affects lessor\nD) Irrelevant to pricing");
    record9.set("correct_answer", "B");
    record9.set("explanation", "Lease structure can be designed to mitigate credit risk through appropriate terms, conditions, and security provisions.");
    record9.set("order", 10);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("quiz_id", "quiz_lesson_1_1");
    record10.set("question_text", "How should a lessor approach structuring for a high-risk lessee?");
    record10.set("question_type", "multiple_choice");
    record10.set("options", "A) Ignore the risk\nB) Use shorter terms, higher residuals, and stricter conditions\nC) Offer the best terms\nD) Decline all leases");
    record10.set("correct_answer", "B");
    record10.set("explanation", "For high-risk lessees, shorter terms, higher residuals, and stricter conditions help protect the lessor.");
    record10.set("order", 11);
  app.save(record10);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})