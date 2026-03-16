/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("case_study_tracking");

  const record0 = new Record(collection);
    record0.set("dashboard_id", "demo_student_001");
    record0.set("total_case_studies", 10);
    record0.set("case_studies_completed", 2);
    record0.set("completion_percentage", 20);
    record0.set("average_score", 75);
    record0.set("highest_score", 82);
    record0.set("lowest_score", 68);
    record0.set("lesson_1_case_study_score", 82);
    record0.set("lesson_2_case_study_score", 68);
    record0.set("lesson_3_case_study_score", 0);
    record0.set("lesson_4_case_study_score", 0);
    record0.set("lesson_5_case_study_score", 0);
    record0.set("lesson_6_case_study_score", 0);
    record0.set("lesson_7_case_study_score", 0);
    record0.set("lesson_8_case_study_score", 0);
    record0.set("lesson_9_case_study_score", 0);
    record0.set("lesson_10_case_study_score", 0);
    record0.set("performance_trend", "Stable");
    record0.set("improvement_rate_percentage", 0);
    record0.set("projected_final_case_study_score", 72);
    record0.set("practical_exercises_completed", 4);
    record0.set("average_exercise_score", 76);
    record0.set("discussion_questions_answered", 8);
    record0.set("solutions_reviewed", 2);
    record0.set("total_time_on_case_studies_hours", 3.5);
    record0.set("average_time_per_case_study_hours", 1.75);
    record0.set("time_trend", "Stable");
    record0.set("estimated_time_to_completion_hours", 12);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})