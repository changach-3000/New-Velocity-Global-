/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("study_guides");

  const record0 = new Record(collection);
    record0.set("title", "Lesson 1: Fundamentals of Equipment Leasing and Tax Treatment");
    record0.set("lesson_id", "{{lessons_0}}");
    record0.set("part_number", 1);
    record0.set("content_type", "study_guide");
    record0.set("description", "8 comprehensive practice problems covering lease classification, tax deductions, and planning strategies");
    record0.set("is_downloadable", true);
    record0.set("content_summary", "Practice problems: (1) Classify lease as operating or capital based on criteria, (2) Calculate operating lease tax deduction, (3) Calculate capital lease depreciation and interest, (4) Analyze ASC 842 ROU asset and liability, (5) Perform lease vs. buy analysis, (6) Calculate deferred tax impact, (7) Evaluate timing strategies, (8) Compare entity structures for lease deductions");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})