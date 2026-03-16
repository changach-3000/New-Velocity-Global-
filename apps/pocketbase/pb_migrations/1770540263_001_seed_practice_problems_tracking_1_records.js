/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("practice_problems_tracking");

  const record0 = new Record(collection);
    record0.set("dashboard_id", "demo_student_001");
    record0.set("total_practice_problems", 80);
    record0.set("problems_completed", 32);
    record0.set("completion_percentage", 40);
    record0.set("average_score_percentage", 72);
    record0.set("highest_score_percentage", 95);
    record0.set("lowest_score_percentage", 45);
    record0.set("lesson_1_problems_completed", 8);
    record0.set("lesson_2_problems_completed", 8);
    record0.set("lesson_3_problems_completed", 8);
    record0.set("lesson_4_problems_completed", 8);
    record0.set("lesson_5_problems_completed", 0);
    record0.set("lesson_6_problems_completed", 0);
    record0.set("lesson_7_problems_completed", 0);
    record0.set("lesson_8_problems_completed", 0);
    record0.set("lesson_9_problems_completed", 0);
    record0.set("lesson_10_problems_completed", 0);
    record0.set("performance_trend", "Improving");
    record0.set("improvement_rate_percentage", 8);
    record0.set("projected_final_practice_score_percentage", 78);
    record0.set("calculation_problems_correct_percentage", 75);
    record0.set("conceptual_problems_correct_percentage", 70);
    record0.set("application_problems_correct_percentage", 68);
    record0.set("analysis_problems_correct_percentage", 65);
    record0.set("total_time_on_practice_hours", 6.5);
    record0.set("average_time_per_problem_minutes", 12);
    record0.set("time_trend", "Stable");
    record0.set("efficiency_score_percentage", 72);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})