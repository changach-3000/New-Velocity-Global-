/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("student_progress_dashboards");

  const record0 = new Record(collection);
    record0.set("student_id", "demo_student_001");
    record0.set("course_id", "risk_pricing_course");
    record0.set("dashboard_title", "Student Progress Tracking Dashboard - Risk Pricing Models for Lease Portfolios");
    record0.set("dashboard_type", "Comprehensive Learning Analytics and Progress Monitoring");
    record0.set("purpose", "Track student progress, identify at-risk students, monitor learning outcomes, and provide actionable insights");
    record0.set("overall_progress_percentage", 45);
    record0.set("overall_performance_score", 78);
    record0.set("target_score", 80);
    record0.set("performance_trend", "Stable");
    record0.set("current_grade", "C");
    record0.set("total_hours_spent", 4.5);
    record0.set("average_daily_engagement_minutes", 35);
    record0.set("last_activity", "2026-02-08");
    record0.set("engagement_trend", "Stable");
    record0.set("lessons_completed", 4);
    record0.set("quizzes_completed", 4);
    record0.set("study_guides_completed", 3);
    record0.set("case_studies_completed", 2);
    record0.set("capstone_progress_percentage", 0);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})