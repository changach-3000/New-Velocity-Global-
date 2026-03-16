/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("study_guides");

  const record0 = new Record(collection);
    record0.set("title", "VERIFICATION RECORD: Course Details - Lease Accounting Standards");
    record0.set("lesson_id", "course_verification_001");
    record0.set("part_number", 1);
    record0.set("content_type", "study_guide");
    record0.set("description", "COURSE VERIFICATION DETAILS\n\nCourse Name: Lease Accounting Standards (IFRS 16 & ASC 842)\nCourse ID: [TO_BE_VERIFIED]\nInstructor: [TO_BE_VERIFIED]\nPrice: [TO_BE_VERIFIED]\nDuration: [TO_BE_VERIFIED] hours\nEstimated Hours: [TO_BE_VERIFIED]\n\nCOURSE METADATA:\n- Learning Outcomes: Comprehensive understanding of lease accounting under both IFRS 16 and ASC 842\n- Resources: Multiple downloadable files and supplementary materials\n- Curriculum: 4-lesson structured program\n- Badge ID: [TO_BE_VERIFIED]\n\nCREATED: [TIMESTAMP]\nUPDATED: [TIMESTAMP]\nRECORD_ID: [ID]");
    record0.set("file_type", "verification_report");
    record0.set("is_downloadable", true);
    record0.set("content_summary", "Complete course metadata and verification details for Lease Accounting Standards course");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("title", "VERIFICATION RECORD: Lesson 1 - Lease Accounting Fundamentals");
    record1.set("lesson_id", "lesson_verification_001");
    record1.set("part_number", 1);
    record1.set("content_type", "study_guide");
    record1.set("description", "LESSON 1 VERIFICATION\n\nLesson Title: Lease Accounting Fundamentals\nLesson Order: 1\nCourse ID: [LINKED_TO_COURSE]\nContent Type: [video/text/quiz]\nDuration: [MINUTES]\n\nLESSON METADATA:\n- Description: Introduction to lease accounting concepts and standards\n- Learning Outcomes: [VERIFIED]\n- Resources: [COUNT]\n- Created: [TIMESTAMP]\n- Updated: [TIMESTAMP]\n- Record ID: [ID]\n\nLINKED CONTENT:\n- Lesson Content Record: [VERIFIED]\n- Quiz Record: [VERIFIED]\n- Quiz Questions: 5 questions [VERIFIED]");
    record1.set("file_type", "verification_report");
    record1.set("is_downloadable", true);
    record1.set("content_summary", "Lesson 1 complete verification with all linked content");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("title", "VERIFICATION RECORD: Lesson 2 - Financial Analysis & Decision Making");
    record2.set("lesson_id", "lesson_verification_002");
    record2.set("part_number", 2);
    record2.set("content_type", "study_guide");
    record2.set("description", "LESSON 2 VERIFICATION\n\nLesson Title: Financial Analysis & Decision Making\nLesson Order: 2\nCourse ID: [LINKED_TO_COURSE]\nContent Type: [video/text/quiz]\nDuration: [MINUTES]\n\nLESSON METADATA:\n- Description: Advanced financial analysis techniques for lease decisions\n- Learning Outcomes: [VERIFIED]\n- Resources: [COUNT]\n- Created: [TIMESTAMP]\n- Updated: [TIMESTAMP]\n- Record ID: [ID]\n\nLINKED CONTENT:\n- Lesson Content Record: [VERIFIED]\n- Quiz Record: [VERIFIED]\n- Quiz Questions: 5 questions [VERIFIED]");
    record2.set("file_type", "verification_report");
    record2.set("is_downloadable", true);
    record2.set("content_summary", "Lesson 2 complete verification with all linked content");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("title", "VERIFICATION RECORD: Lesson 3 - Financial Reporting & Disclosures");
    record3.set("lesson_id", "lesson_verification_003");
    record3.set("part_number", 3);
    record3.set("content_type", "study_guide");
    record3.set("description", "LESSON 3 VERIFICATION\n\nLesson Title: Financial Reporting & Disclosures\nLesson Order: 3\nCourse ID: [LINKED_TO_COURSE]\nContent Type: [video/text/quiz]\nDuration: [MINUTES]\n\nLESSON METADATA:\n- Description: Proper financial reporting and disclosure requirements\n- Learning Outcomes: [VERIFIED]\n- Resources: [COUNT]\n- Created: [TIMESTAMP]\n- Updated: [TIMESTAMP]\n- Record ID: [ID]\n\nLINKED CONTENT:\n- Lesson Content Record: [VERIFIED]\n- Quiz Record: [VERIFIED]\n- Quiz Questions: 5 questions [VERIFIED]");
    record3.set("file_type", "verification_report");
    record3.set("is_downloadable", true);
    record3.set("content_summary", "Lesson 3 complete verification with all linked content");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("title", "VERIFICATION RECORD: Lesson 4 - Tax Implications & Strategies");
    record4.set("lesson_id", "lesson_verification_004");
    record4.set("part_number", 4);
    record4.set("content_type", "study_guide");
    record4.set("description", "LESSON 4 VERIFICATION\n\nLesson Title: Tax Implications & Strategies\nLesson Order: 4\nCourse ID: [LINKED_TO_COURSE]\nContent Type: [video/text/quiz]\nDuration: [MINUTES]\n\nLESSON METADATA:\n- Description: Tax planning and strategy considerations for lease accounting\n- Learning Outcomes: [VERIFIED]\n- Resources: [COUNT]\n- Created: [TIMESTAMP]\n- Updated: [TIMESTAMP]\n- Record ID: [ID]\n\nLINKED CONTENT:\n- Lesson Content Record: [VERIFIED]\n- Quiz Record: [VERIFIED]\n- Quiz Questions: 5 questions [VERIFIED]");
    record4.set("file_type", "verification_report");
    record4.set("is_downloadable", true);
    record4.set("content_summary", "Lesson 4 complete verification with all linked content");
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})