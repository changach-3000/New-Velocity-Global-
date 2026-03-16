/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("at_risk_assessment");

  const record0 = new Record(collection);
    record0.set("dashboard_id", "demo_student_001");
    record0.set("overall_risk_level", "Medium");
    record0.set("risk_score", 55);
    record0.set("risk_trend", "Stable");
    record0.set("recommended_action", "Monitor");
    record0.set("low_engagement_risk", false);
    record0.set("days_without_activity", 0);
    record0.set("low_performance_risk", false);
    record0.set("current_score_percentage", 78);
    record0.set("declining_performance_risk", false);
    record0.set("performance_trend_percentage_per_week", 0);
    record0.set("incomplete_assignments_risk", true);
    record0.set("deliverables_completed", 4);
    record0.set("low_quiz_scores_risk", false);
    record0.set("average_quiz_score_percentage", 72);
    record0.set("missed_deadlines_risk", false);
    record0.set("missed_deadlines_count", 0);
    record0.set("engagement_risk_level", "Low");
    record0.set("performance_risk_level", "Low");
    record0.set("completion_risk_level", "Medium");
    record0.set("motivation_risk_level", "Medium");
    record0.set("overall_risk_assessment", "Medium");
    record0.set("intervention_recommendation_1", "Increase engagement and study time");
    record0.set("intervention_recommendation_2", "Focus on completing remaining lessons");
    record0.set("intervention_recommendation_3", "Attend office hours for additional support");
    record0.set("support_resources", "Tutoring, study groups, office hours");
    record0.set("follow_up_date", "2026-02-22");
    record0.set("tutoring_available", true);
    record0.set("office_hours_available", true);
    record0.set("study_groups_available", true);
    record0.set("counseling_available", true);
    record0.set("technical_support_available", true);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})