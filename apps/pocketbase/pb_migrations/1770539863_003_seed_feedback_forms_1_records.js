/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("feedback_forms");

  const record0 = new Record(collection);
    record0.set("form_title", "Risk Pricing Models Course - Student Feedback");
    record0.set("form_type", "Course Evaluation");
    record0.set("administration_timing", "End of Course");
    record0.set("estimated_time_minutes", 15);
    record0.set("course_id", "pbc_9676646180");
    record0.set("description", "Comprehensive feedback form for Risk Pricing Models course");
    record0.set("total_questions", 20);
    record0.set("is_downloadable", true);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})