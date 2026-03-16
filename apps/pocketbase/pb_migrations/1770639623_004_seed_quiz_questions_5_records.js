/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "{{QUIZ_5_ID}}");
    record0.set("question_text", "What are the key metrics for monitoring a lease portfolio?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "Total lease liability|ROU asset valuation|Lease expense analysis|All of the above");
    record0.set("correct_answer", "All of the above");
    record0.set("explanation", "Key portfolio metrics include total lease liability tracking, ROU asset valuation, lease expense analysis, debt-to-equity ratio impact, and interest coverage ratio");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "{{QUIZ_5_ID}}");
    record1.set("question_text", "How should companies evaluate lease vs buy decisions?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "Compare total cost of ownership|Analyze cash flow impact|Consider tax implications|All of the above");
    record1.set("correct_answer", "All of the above");
    record1.set("explanation", "Lease vs buy decisions require comprehensive analysis including total cost comparison, cash flow impact, tax implications, and strategic business considerations");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "{{QUIZ_5_ID}}");
    record2.set("question_text", "What are the main optimization strategies for lease portfolios?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "Lease renewal decisions and refinancing|Early termination evaluation|Consolidation of similar leases|All of the above");
    record2.set("correct_answer", "All of the above");
    record2.set("explanation", "Portfolio optimization includes lease vs buy analysis, early termination evaluation, renewal decisions, refinancing opportunities, lease consolidation, and renegotiation tactics");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "{{QUIZ_5_ID}}");
    record3.set("question_text", "How do lease modifications impact portfolio management?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "Affect financial ratios and covenants|Impact cash flow and credit ratings|Require cost-benefit analysis|All of the above");
    record3.set("correct_answer", "All of the above");
    record3.set("explanation", "Lease modifications have significant impacts on financial ratios, covenants, cash flow, credit ratings, and require thorough cost-benefit analysis before implementation");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "{{QUIZ_5_ID}}");
    record4.set("question_text", "What are the best practices for lease portfolio governance?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "Industry benchmarking and documentation standards|Process improvements and continuous monitoring|Clear governance policies and audit preparation|All of the above");
    record4.set("correct_answer", "All of the above");
    record4.set("explanation", "Best practices include industry benchmarking, documentation standards, process improvements, continuous monitoring and review, and comprehensive audit preparation");
    record4.set("order", 5);
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})