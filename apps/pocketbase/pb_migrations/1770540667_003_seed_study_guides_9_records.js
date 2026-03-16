/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("study_guides");

  const record0 = new Record(collection);
    record0.set("title", "Lesson 1: Fundamentals Study Guide");
    record0.set("lesson_id", "pbc_3963162141");
    record0.set("part_number", 1);
    record0.set("content_type", "study_guide");
    record0.set("description", "8 practice problems covering operating vs. capital leases, tax treatment, ASC 842/IFRS 16 impact, and tax planning opportunities");
    record0.set("is_downloadable", true);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("title", "Lesson 2: Depreciation Strategies Study Guide");
    record1.set("lesson_id", "pbc_3963162141");
    record1.set("part_number", 2);
    record1.set("content_type", "study_guide");
    record1.set("description", "8 practice problems on MACRS depreciation, bonus depreciation, Section 179 expensing, and timing strategies");
    record1.set("is_downloadable", true);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("title", "Lesson 3: Interest Deduction Study Guide");
    record2.set("lesson_id", "pbc_3963162141");
    record2.set("part_number", 3);
    record2.set("content_type", "study_guide");
    record2.set("description", "8 practice problems on interest deductions, Section 163(j) limitations, and financing structure optimization");
    record2.set("is_downloadable", true);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("title", "Lesson 4: Lease Classification Study Guide");
    record3.set("lesson_id", "pbc_3963162141");
    record3.set("part_number", 4);
    record3.set("content_type", "study_guide");
    record3.set("description", "8 practice problems on lease classification, accounting treatment, and tax vs. accounting differences");
    record3.set("is_downloadable", true);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("title", "Lesson 5: Sale-Leaseback Study Guide");
    record4.set("lesson_id", "pbc_3963162141");
    record4.set("part_number", 1);
    record4.set("content_type", "study_guide");
    record4.set("description", "8 practice problems on sale-leaseback transactions, gain recognition, and tax planning");
    record4.set("is_downloadable", true);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("title", "Lesson 6: Pass-Through Entity Study Guide");
    record5.set("lesson_id", "pbc_3963162141");
    record5.set("part_number", 2);
    record5.set("content_type", "study_guide");
    record5.set("description", "8 practice problems on QBI deduction, passive activity limitations, and entity structure optimization");
    record5.set("is_downloadable", true);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("title", "Lesson 7: Compliance Study Guide");
    record6.set("lesson_id", "pbc_3963162141");
    record6.set("part_number", 3);
    record6.set("content_type", "study_guide");
    record6.set("description", "8 practice problems on tax compliance, documentation, audit risk, and uncertain tax positions");
    record6.set("is_downloadable", true);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("title", "Lesson 8: Advanced Strategies Study Guide");
    record7.set("lesson_id", "pbc_3963162141");
    record7.set("part_number", 4);
    record7.set("content_type", "study_guide");
    record7.set("description", "5 practice problems on leveraged leases, cross-border leases, synthetic leases, and advanced strategies");
    record7.set("is_downloadable", true);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("title", "Master Study Guide and Exam Preparation");
    record8.set("lesson_id", "pbc_9676646180");
    record8.set("part_number", 1);
    record8.set("content_type", "master_glossary");
    record8.set("description", "20 comprehensive practice exam questions covering all 8 lessons with detailed solutions");
    record8.set("is_downloadable", true);
  app.save(record8);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})