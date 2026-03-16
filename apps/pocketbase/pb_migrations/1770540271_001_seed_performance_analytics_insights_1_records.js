/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("performance_analytics_insights");

  const record0 = new Record(collection);
    record0.set("dashboard_id", "demo_student_001");
    record0.set("current_gpa", 2.8);
    record0.set("course_grade", "C");
    record0.set("performance_percentile", 45);
    record0.set("performance_vs_class_average_percentage", -5);
    record0.set("performance_trend", "Stable");
    record0.set("strongest_lesson", "Lesson 2: Credit Risk Modeling");
    record0.set("strongest_lesson_mastery_percentage", 74);
    record0.set("strongest_assessment_type", "Case Studies");
    record0.set("strongest_assessment_average_percentage", 75);
    record0.set("strongest_skill", "Credit Risk Analysis");
    record0.set("strongest_skill_mastery_percentage", 78);
    record0.set("strongest_performance_area", "Risk identification and measurement");
    record0.set("weakest_lesson", "Lesson 4: Interest Rate Risk");
    record0.set("weakest_lesson_mastery_percentage", 0);
    record0.set("weakest_assessment_type", "Practice Problems");
    record0.set("weakest_assessment_average_percentage", 68);
    record0.set("weakest_skill", "Stress Testing");
    record0.set("weakest_skill_mastery_percentage", 0);
    record0.set("weakest_performance_area", "Advanced risk topics");
    record0.set("key_insight_1", "Student shows strong understanding of credit risk concepts");
    record0.set("key_insight_2", "Engagement is consistent but could be increased for better outcomes");
    record0.set("key_insight_3", "Performance on case studies exceeds quiz performance");
    record0.set("recommended_action", "Focus on completing remaining lessons and practice problems");
    record0.set("projected_final_course_grade", "C");
    record0.set("probability_of_passing_percentage", 85);
    record0.set("probability_of_achieving_a_percentage", 15);
    record0.set("risk_level", "Medium");
    record0.set("recommended_interventions", "Increase study time, focus on weak areas, attend office hours");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})