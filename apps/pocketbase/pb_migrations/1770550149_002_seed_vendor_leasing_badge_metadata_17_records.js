/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("vendor_leasing_badge_metadata");

  const record0 = new Record(collection);
    record0.set("badgeId", "lesson_1_mastered");
    record0.set("badgeType", "lesson_completion");
    record0.set("lessonNumber", 1);
    record0.set("badgeName", "Lesson 1 Mastered");
    record0.set("badgeDescription", "Completed Lesson 1: Lease Accounting Fundamentals");
    record0.set("badgeIcon", "\ud83c\udf93");
    record0.set("badgeColor", "blue");
    record0.set("unlockedCriteria", "Complete all content in Lesson 1 and pass the quiz with 70% or higher");
    record0.set("displayOrder", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("badgeId", "lesson_2_mastered");
    record1.set("badgeType", "lesson_completion");
    record1.set("lessonNumber", 2);
    record1.set("badgeName", "Lesson 2 Mastered");
    record1.set("badgeDescription", "Completed Lesson 2: Financial Analysis & Decision Making");
    record1.set("badgeIcon", "\ud83c\udf93");
    record1.set("badgeColor", "blue");
    record1.set("unlockedCriteria", "Complete all content in Lesson 2 and pass the quiz with 70% or higher");
    record1.set("displayOrder", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("badgeId", "lesson_3_mastered");
    record2.set("badgeType", "lesson_completion");
    record2.set("lessonNumber", 3);
    record2.set("badgeName", "Lesson 3 Mastered");
    record2.set("badgeDescription", "Completed Lesson 3: Financial Reporting & Analysis");
    record2.set("badgeIcon", "\ud83c\udf93");
    record2.set("badgeColor", "blue");
    record2.set("unlockedCriteria", "Complete all content in Lesson 3 and pass the quiz with 70% or higher");
    record2.set("displayOrder", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("badgeId", "lesson_4_mastered");
    record3.set("badgeType", "lesson_completion");
    record3.set("lessonNumber", 4);
    record3.set("badgeName", "Lesson 4 Mastered");
    record3.set("badgeDescription", "Completed Lesson 4: Tax Implications & Strategies");
    record3.set("badgeIcon", "\ud83c\udf93");
    record3.set("badgeColor", "blue");
    record3.set("unlockedCriteria", "Complete all content in Lesson 4 and pass the quiz with 70% or higher");
    record3.set("displayOrder", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("badgeId", "lesson_5_mastered");
    record4.set("badgeType", "lesson_completion");
    record4.set("lessonNumber", 5);
    record4.set("badgeName", "Lesson 5 Mastered");
    record4.set("badgeDescription", "Completed Lesson 5: Implementation & Portfolio Management");
    record4.set("badgeIcon", "\ud83c\udf93");
    record4.set("badgeColor", "blue");
    record4.set("unlockedCriteria", "Complete all content in Lesson 5 and pass the quiz with 70% or higher");
    record4.set("displayOrder", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("badgeId", "lesson_6_mastered");
    record5.set("badgeType", "lesson_completion");
    record5.set("lessonNumber", 6);
    record5.set("badgeName", "Lesson 6 Mastered");
    record5.set("badgeDescription", "Completed Lesson 6: Advanced Topics");
    record5.set("badgeIcon", "\ud83c\udf93");
    record5.set("badgeColor", "blue");
    record5.set("unlockedCriteria", "Complete all content in Lesson 6 and pass the quiz with 70% or higher");
    record5.set("displayOrder", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("badgeId", "lesson_7_mastered");
    record6.set("badgeType", "lesson_completion");
    record6.set("lessonNumber", 7);
    record6.set("badgeName", "Lesson 7 Mastered");
    record6.set("badgeDescription", "Completed Lesson 7: Case Studies & Applications");
    record6.set("badgeIcon", "\ud83c\udf93");
    record6.set("badgeColor", "blue");
    record6.set("unlockedCriteria", "Complete all content in Lesson 7 and pass the quiz with 70% or higher");
    record6.set("displayOrder", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("badgeId", "lesson_8_mastered");
    record7.set("badgeType", "lesson_completion");
    record7.set("lessonNumber", 8);
    record7.set("badgeName", "Lesson 8 Mastered");
    record7.set("badgeDescription", "Completed Lesson 8: Capstone & Final Assessment");
    record7.set("badgeIcon", "\ud83c\udf93");
    record7.set("badgeColor", "blue");
    record7.set("unlockedCriteria", "Complete all content in Lesson 8 and pass the quiz with 70% or higher");
    record7.set("displayOrder", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("badgeId", "quiz_1_passed");
    record8.set("badgeType", "quiz_completion");
    record8.set("lessonNumber", 1);
    record8.set("badgeName", "Quiz 1 Passed");
    record8.set("badgeDescription", "Successfully passed the Lesson 1 quiz");
    record8.set("badgeIcon", "\u2705");
    record8.set("badgeColor", "green");
    record8.set("unlockedCriteria", "Score 70% or higher on Lesson 1 quiz");
    record8.set("displayOrder", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("badgeId", "quiz_2_passed");
    record9.set("badgeType", "quiz_completion");
    record9.set("lessonNumber", 2);
    record9.set("badgeName", "Quiz 2 Passed");
    record9.set("badgeDescription", "Successfully passed the Lesson 2 quiz");
    record9.set("badgeIcon", "\u2705");
    record9.set("badgeColor", "green");
    record9.set("unlockedCriteria", "Score 70% or higher on Lesson 2 quiz");
    record9.set("displayOrder", 10);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("badgeId", "quiz_3_passed");
    record10.set("badgeType", "quiz_completion");
    record10.set("lessonNumber", 3);
    record10.set("badgeName", "Quiz 3 Passed");
    record10.set("badgeDescription", "Successfully passed the Lesson 3 quiz");
    record10.set("badgeIcon", "\u2705");
    record10.set("badgeColor", "green");
    record10.set("unlockedCriteria", "Score 70% or higher on Lesson 3 quiz");
    record10.set("displayOrder", 11);
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("badgeId", "quiz_4_passed");
    record11.set("badgeType", "quiz_completion");
    record11.set("lessonNumber", 4);
    record11.set("badgeName", "Quiz 4 Passed");
    record11.set("badgeDescription", "Successfully passed the Lesson 4 quiz");
    record11.set("badgeIcon", "\u2705");
    record11.set("badgeColor", "green");
    record11.set("unlockedCriteria", "Score 70% or higher on Lesson 4 quiz");
    record11.set("displayOrder", 12);
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("badgeId", "quiz_5_passed");
    record12.set("badgeType", "quiz_completion");
    record12.set("lessonNumber", 5);
    record12.set("badgeName", "Quiz 5 Passed");
    record12.set("badgeDescription", "Successfully passed the Lesson 5 quiz");
    record12.set("badgeIcon", "\u2705");
    record12.set("badgeColor", "green");
    record12.set("unlockedCriteria", "Score 70% or higher on Lesson 5 quiz");
    record12.set("displayOrder", 13);
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("badgeId", "quiz_6_passed");
    record13.set("badgeType", "quiz_completion");
    record13.set("lessonNumber", 6);
    record13.set("badgeName", "Quiz 6 Passed");
    record13.set("badgeDescription", "Successfully passed the Lesson 6 quiz");
    record13.set("badgeIcon", "\u2705");
    record13.set("badgeColor", "green");
    record13.set("unlockedCriteria", "Score 70% or higher on Lesson 6 quiz");
    record13.set("displayOrder", 14);
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("badgeId", "quiz_7_passed");
    record14.set("badgeType", "quiz_completion");
    record14.set("lessonNumber", 7);
    record14.set("badgeName", "Quiz 7 Passed");
    record14.set("badgeDescription", "Successfully passed the Lesson 7 quiz");
    record14.set("badgeIcon", "\u2705");
    record14.set("badgeColor", "green");
    record14.set("unlockedCriteria", "Score 70% or higher on Lesson 7 quiz");
    record14.set("displayOrder", 15);
  app.save(record14);

  const record15 = new Record(collection);
    record15.set("badgeId", "quiz_8_passed");
    record15.set("badgeType", "quiz_completion");
    record15.set("lessonNumber", 8);
    record15.set("badgeName", "Quiz 8 Passed");
    record15.set("badgeDescription", "Successfully passed the Lesson 8 quiz");
    record15.set("badgeIcon", "\u2705");
    record15.set("badgeColor", "green");
    record15.set("unlockedCriteria", "Score 70% or higher on Lesson 8 quiz");
    record15.set("displayOrder", 16);
  app.save(record15);

  const record16 = new Record(collection);
    record16.set("badgeId", "vendor_leasing_expert");
    record16.set("badgeType", "course_completion");
    record16.set("badgeName", "Vendor Leasing Expert");
    record16.set("badgeDescription", "Completed the entire Vendor Leasing course with mastery");
    record16.set("badgeIcon", "\ud83c\udfc6");
    record16.set("badgeColor", "gold");
    record16.set("unlockedCriteria", "Complete all 8 lessons, pass all quizzes, and achieve 80% or higher overall course score");
    record16.set("displayOrder", 17);
  app.save(record16);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})