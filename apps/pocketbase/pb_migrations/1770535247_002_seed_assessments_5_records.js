/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("assessments");

  const record0 = new Record(collection);
    record0.set("title", "Part 1 Assessment: Strategic Lease Planning and Analysis");
    record0.set("assessment_type", "part_assessment");
    record0.set("part_number", 1);
    record0.set("total_questions", 15);
    record0.set("time_limit_minutes", 90);
    record0.set("passing_score", 70);
    record0.set("difficulty_level", "advanced");
    record0.set("content_coverage", "Lessons 1.1, 1.2, 1.3 - Strategic planning, financial analysis, lease vs buy decisions");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("title", "Part 2 Assessment: Advanced Lease Optimization Techniques");
    record1.set("assessment_type", "part_assessment");
    record1.set("part_number", 2);
    record1.set("total_questions", 15);
    record1.set("time_limit_minutes", 90);
    record1.set("passing_score", 70);
    record1.set("difficulty_level", "advanced");
    record1.set("content_coverage", "Lessons 2.1, 2.2, 2.3 - Tax optimization, accounting optimization, advanced structuring");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("title", "Part 3 Assessment: Lease Portfolio Management and Risk");
    record2.set("assessment_type", "part_assessment");
    record2.set("part_number", 3);
    record2.set("total_questions", 15);
    record2.set("time_limit_minutes", 90);
    record2.set("passing_score", 70);
    record2.set("difficulty_level", "expert");
    record2.set("content_coverage", "Lessons 3.1, 3.2, 3.3 - Portfolio management, risk assessment, advanced strategies");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("title", "Part 4 Assessment: Emerging Trends and Future Strategies");
    record3.set("assessment_type", "part_assessment");
    record3.set("part_number", 4);
    record3.set("total_questions", 15);
    record3.set("time_limit_minutes", 90);
    record3.set("passing_score", 70);
    record3.set("difficulty_level", "expert");
    record3.set("content_coverage", "Lessons 4.1, 4.2, 4.3 - ESG, technology, market trends");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("title", "Final Comprehensive Assessment: Advanced Leasing Strategies");
    record4.set("assessment_type", "final_exam");
    record4.set("part_number", 0);
    record4.set("total_questions", 40);
    record4.set("time_limit_minutes", 180);
    record4.set("passing_score", 75);
    record4.set("difficulty_level", "expert");
    record4.set("content_coverage", "All 12 lessons - Strategic planning, optimization, portfolio management, emerging trends, integrated case studies");
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})