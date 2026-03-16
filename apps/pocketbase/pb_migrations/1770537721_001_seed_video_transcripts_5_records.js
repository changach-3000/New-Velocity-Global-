/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("video_transcripts");

  const record0 = new Record(collection);
    record0.set("title", "Lease Accounting Fundamentals for Finance Professionals");
    record0.set("lesson_id", "lesson_1");
    record0.set("part_number", 1);
    record0.set("duration_minutes", 60);
    record0.set("content_summary", "Complete 60-minute transcript covering ASC 842 overview, ROU assets and lease liabilities, lease classification, financial statement impacts, and implementation tips. Includes detailed examples, calculations, and real-world case studies with timestamps and speaker notes.");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("title", "Financial Analysis and Decision-Making for Lease Decisions");
    record1.set("lesson_id", "lesson_2");
    record1.set("part_number", 1);
    record1.set("duration_minutes", 60);
    record1.set("content_summary", "Complete 60-minute transcript covering lease vs buy analysis framework, cash flow identification, NPV and IRR calculations, sensitivity and scenario analysis, and decision-making recommendations. Includes detailed financial examples and real-world case studies.");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("title", "Financial Statement Management and Reporting for Leases");
    record2.set("lesson_id", "lesson_3");
    record2.set("part_number", 1);
    record2.set("duration_minutes", 60);
    record2.set("content_summary", "Complete 60-minute transcript covering balance sheet management, income statement and lease expense recognition, cash flow statement presentation, financial ratio analysis, and disclosure and reporting requirements. Includes real-world examples and ratio impact analysis.");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("title", "Tax Planning and Optimization for Leases");
    record3.set("lesson_id", "lesson_4");
    record3.set("part_number", 1);
    record3.set("duration_minutes", 60);
    record3.set("content_summary", "Complete 60-minute transcript covering lease tax treatment fundamentals, tax optimization strategies, differences between tax and accounting treatment, deferred tax considerations, and tax planning case studies. Includes practical examples and compliance guidance.");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("title", "Practical Implementation and Best Practices for Lease Accounting");
    record4.set("lesson_id", "lesson_5");
    record4.set("part_number", 1);
    record4.set("duration_minutes", 60);
    record4.set("content_summary", "Complete 60-minute transcript covering lease portfolio management, internal controls and governance, technology and systems implementation, common pitfalls and solutions, and future trends. Includes practical implementation guidance and best practices.");
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})