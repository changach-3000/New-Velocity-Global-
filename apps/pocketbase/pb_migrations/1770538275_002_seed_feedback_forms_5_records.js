/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("feedback_forms");

  const record0 = new Record(collection);
    record0.set("form_title", "Overall Course Evaluation - Practical Leasing for Finance Professionals");
    record0.set("form_type", "Comprehensive Course Evaluation");
    record0.set("administration_timing", "End of course (after capstone project completion)");
    record0.set("estimated_time_minutes", 15);
    record0.set("course_id", "practical_leasing_course");
    record0.set("description", "Comprehensive end-of-course evaluation covering 9 sections: Course Content and Learning Objectives (8 questions), Instructional Delivery and Materials (8 questions), Assessments and Learning Activities (8 questions), Instructor Support and Engagement (8 questions), Course Structure and Pacing (8 questions), Technology and Platform (8 questions), Learning Outcomes and Skill Development (8 questions), Value and Recommendations (8 questions), Open-Ended Feedback (8 questions). Total 72 questions with 1-5 rating scales and follow-up prompts.");
    record0.set("total_questions", 72);
    record0.set("is_downloadable", true);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("form_title", "Lesson-Specific Evaluation - Practical Leasing for Finance Professionals");
    record1.set("form_type", "Individual Lesson Evaluation");
    record1.set("administration_timing", "After each lesson completion");
    record1.set("estimated_time_minutes", 5);
    record1.set("course_id", "practical_leasing_course");
    record1.set("description", "Brief lesson-specific evaluation covering 5 sections: Lesson Content (5 questions), Lesson Delivery (5 questions), Learning Materials (5 questions), Assessment (5 questions), Open-Ended Feedback (5 questions). Total 25 questions with 1-5 rating scales and open-ended responses (150 words max).");
    record1.set("total_questions", 25);
    record1.set("is_downloadable", true);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("form_title", "Capstone Project Evaluation - Practical Leasing for Finance Professionals");
    record2.set("form_type", "Capstone Project Feedback");
    record2.set("administration_timing", "After capstone project completion");
    record2.set("estimated_time_minutes", 10);
    record2.set("course_id", "practical_leasing_course");
    record2.set("description", "Capstone project-specific evaluation covering 5 sections: Project Relevance and Integration (5 questions), Project Requirements and Clarity (5 questions), Learning Value (5 questions), Project Experience (5 questions), Open-Ended Feedback (5 questions). Total 25 questions with 1-5 rating scales and open-ended responses (200 words max).");
    record2.set("total_questions", 25);
    record2.set("is_downloadable", true);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("form_title", "Instructor Evaluation - Practical Leasing for Finance Professionals");
    record3.set("form_type", "Instructor Performance Evaluation");
    record3.set("administration_timing", "End of course");
    record3.set("estimated_time_minutes", 10);
    record3.set("course_id", "practical_leasing_course");
    record3.set("description", "Instructor performance evaluation covering 5 sections: Subject Matter Expertise (5 questions), Communication and Clarity (5 questions), Engagement and Enthusiasm (5 questions), Support and Feedback (5 questions), Open-Ended Feedback (5 questions). Total 25 questions with 1-5 rating scales and open-ended responses (200 words max).");
    record3.set("total_questions", 25);
    record3.set("is_downloadable", true);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("form_title", "Course Improvement Survey - Practical Leasing for Finance Professionals");
    record4.set("form_type", "Continuous Improvement Feedback");
    record4.set("administration_timing", "Mid-course and end of course");
    record4.set("estimated_time_minutes", 10);
    record4.set("course_id", "practical_leasing_course");
    record4.set("description", "Continuous improvement survey covering 5 sections: Content Improvements (8 questions), Delivery Improvements (8 questions), Assessment Improvements (8 questions), Structure and Pacing Improvements (8 questions), Technology Improvements (8 questions). Total 40 open-ended questions (200 words max each) focused on actionable improvement suggestions. Includes feedback analysis template and action plan template.");
    record4.set("total_questions", 40);
    record4.set("is_downloadable", true);
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})