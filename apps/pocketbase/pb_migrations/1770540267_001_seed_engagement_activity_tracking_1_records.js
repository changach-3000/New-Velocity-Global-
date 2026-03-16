/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("engagement_activity_tracking");

  const record0 = new Record(collection);
    record0.set("dashboard_id", "demo_student_001");
    record0.set("total_hours_spent", 4.5);
    record0.set("average_daily_engagement_minutes", 35);
    record0.set("days_active", 8);
    record0.set("engagement_rate_percentage", 53);
    record0.set("engagement_trend", "Stable");
    record0.set("first_login", "2026-01-25");
    record0.set("last_login", "2026-02-08");
    record0.set("days_since_last_activity", 0);
    record0.set("most_active_day_of_week", "Wednesday");
    record0.set("most_active_time_of_day", "2:00 PM - 4:00 PM");
    record0.set("video_watching_hours", 2.0);
    record0.set("quiz_taking_hours", 1.2);
    record0.set("study_guide_review_hours", 0.8);
    record0.set("case_study_work_hours", 0.5);
    record0.set("capstone_project_work_hours", 0);
    record0.set("reading_list_review_hours", 0);
    record0.set("other_activities_hours", 0);
    record0.set("week_1_hours", 2.5);
    record0.set("week_2_hours", 2.0);
    record0.set("week_3_hours", 0);
    record0.set("week_4_hours", 0);
    record0.set("week_5_hours", 0);
    record0.set("low_engagement_warning", false);
    record0.set("days_without_activity", 0);
    record0.set("recommended_action", "Continue current engagement level");
    record0.set("support_resources", "Study guides, practice problems");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})