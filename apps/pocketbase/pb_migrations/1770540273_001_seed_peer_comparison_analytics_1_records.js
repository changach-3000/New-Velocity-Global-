/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("peer_comparison_analytics");

  const record0 = new Record(collection);
    record0.set("dashboard_id", "demo_student_001");
    record0.set("student_current_score", 78);
    record0.set("class_average_score", 82);
    record0.set("class_median_score", 80);
    record0.set("class_standard_deviation", 8.5);
    record0.set("student_percentile_rank", 45);
    record0.set("lesson_1_student_percentage", 71);
    record0.set("lesson_1_class_average_percentage", 75);
    record0.set("lesson_1_difference_percentage", -4);
    record0.set("lesson_2_student_percentage", 74);
    record0.set("lesson_2_class_average_percentage", 76);
    record0.set("lesson_2_difference_percentage", -2);
    record0.set("lesson_3_student_percentage", 0);
    record0.set("lesson_3_class_average_percentage", 72);
    record0.set("lesson_3_difference_percentage", -72);
    record0.set("quizzes_student_percentage", 72);
    record0.set("quizzes_class_average_percentage", 76);
    record0.set("quizzes_difference_percentage", -4);
    record0.set("practice_student_percentage", 68);
    record0.set("practice_class_average_percentage", 74);
    record0.set("practice_difference_percentage", -6);
    record0.set("case_studies_student_percentage", 75);
    record0.set("case_studies_class_average_percentage", 78);
    record0.set("case_studies_difference_percentage", -3);
    record0.set("capstone_student_score", 0);
    record0.set("capstone_class_average_score", 0);
    record0.set("capstone_difference_score", 0);
    record0.set("student_total_hours", 4.5);
    record0.set("class_average_hours", 6.2);
    record0.set("student_daily_engagement_minutes", 35);
    record0.set("class_average_daily_engagement_minutes", 48);
    record0.set("student_activity_days", 8);
    record0.set("class_average_activity_days", 12);
    record0.set("student_engagement_percentile", 40);
    record0.set("a_grade_percentage_of_class", 15);
    record0.set("b_grade_percentage_of_class", 35);
    record0.set("c_grade_percentage_of_class", 35);
    record0.set("d_grade_percentage_of_class", 12);
    record0.set("f_grade_percentage_of_class", 3);
    record0.set("student_position_in_class", "Below average, middle of class");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})