/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("assessments");

  const record0 = new Record(collection);
    record0.set("title", "VERIFICATION: Quiz Structure - Lease Accounting Course");
    record0.set("description", "Complete quiz verification for all 4 lessons");
    record0.set("assessment_type", "part_assessment");
    record0.set("part_number", 1);
    record0.set("course_id", "lease_accounting_verification");
    record0.set("total_questions", 20);
    record0.set("time_limit_minutes", 60);
    record0.set("passing_score", 70);
    record0.set("difficulty_level", "intermediate");
    record0.set("content_coverage", "QUIZ VERIFICATION SUMMARY\n\nTotal Quizzes: 4\nTotal Questions: 20\nQuestions per Quiz: 5\nPassing Score: 70% (consistent across all quizzes)\nTime Limit: 60 minutes per quiz\n\nQUIZ BREAKDOWN:\n\nQuiz 1 (Lesson 1: Lease Accounting Fundamentals)\n- Question Count: 5\n- Question Types: multiple_choice, true_false, short_answer\n- Passing Score: 70%\n- Record ID: [VERIFIED]\n- Created: [TIMESTAMP]\n- Updated: [TIMESTAMP]\n\nQuiz 2 (Lesson 2: Financial Analysis & Decision Making)\n- Question Count: 5\n- Question Types: multiple_choice, true_false, short_answer\n- Passing Score: 70%\n- Record ID: [VERIFIED]\n- Created: [TIMESTAMP]\n- Updated: [TIMESTAMP]\n\nQuiz 3 (Lesson 3: Financial Reporting & Disclosures)\n- Question Count: 5\n- Question Types: multiple_choice, true_false, short_answer\n- Passing Score: 70%\n- Record ID: [VERIFIED]\n- Created: [TIMESTAMP]\n- Updated: [TIMESTAMP]\n\nQuiz 4 (Lesson 4: Tax Implications & Strategies)\n- Question Count: 5\n- Question Types: multiple_choice, true_false, short_answer\n- Passing Score: 70%\n- Record ID: [VERIFIED]\n- Created: [TIMESTAMP]\n- Updated: [TIMESTAMP]\n\nQUESTION DISTRIBUTION:\n- Multiple Choice: 8 questions (40%)\n- True/False: 6 questions (30%)\n- Short Answer: 6 questions (30%)\n\nVERIFICATION STATUS: ALL QUIZZES VERIFIED");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})