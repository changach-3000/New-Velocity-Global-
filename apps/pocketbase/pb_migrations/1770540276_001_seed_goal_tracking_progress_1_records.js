/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("goal_tracking_progress");

  const record0 = new Record(collection);
    record0.set("dashboard_id", "demo_student_001");
    record0.set("target_completion_date", "2026-03-08");
    record0.set("current_pace", "Behind schedule");
    record0.set("days_remaining", 28);
    record0.set("estimated_completion_date", "2026-03-15");
    record0.set("completion_status", "Behind schedule");
    record0.set("target_grade", "B");
    record0.set("current_grade", "C");
    record0.set("points_needed_for_target", 15);
    record0.set("will_achieve_target", false);
    record0.set("grade_goal_recommended_actions", "Increase study time, focus on weak areas, complete all remaining lessons");
    record0.set("target_hours", 10);
    record0.set("current_hours", 4.5);
    record0.set("hours_remaining", 5.5);
    record0.set("average_daily_engagement_needed_minutes", 45);
    record0.set("engagement_goal_status", "Behind schedule");
    record0.set("target_mastery_level_percentage", 85);
    record0.set("current_mastery_level_percentage", 62);
    record0.set("mastery_gap_percentage", 23);
    record0.set("lessons_to_focus_on", "Lessons 3-10, especially Interest Rate Risk and Stress Testing");
    record0.set("recommended_study_plan", "Complete 1-2 lessons per week, 1 hour daily study time");
    record0.set("capstone_target_score", 85);
    record0.set("capstone_current_score", 0);
    record0.set("capstone_points_needed", 85);
    record0.set("capstone_deliverables_to_complete", "All 6 parts");
    record0.set("capstone_timeline_to_completion_weeks", 4);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})