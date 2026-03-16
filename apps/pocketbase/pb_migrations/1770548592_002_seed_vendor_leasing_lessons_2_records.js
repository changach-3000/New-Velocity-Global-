/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("vendor_leasing_lessons");

  const record0 = new Record(collection);
    record0.set("courseId", "vendor_leasing_course");
    record0.set("lessonNumber", 3);
    record0.set("title", "Advanced Lease Valuation and Negotiation Strategies");
    record0.set("description", "Master advanced techniques for lease valuation, including sensitivity analysis, scenario planning, and strategic negotiation approaches for complex lease arrangements.");
    record0.set("duration", 120);
    record0.set("contentType", "video");
    record0.set("videoUrl", "https://example.com/vendor-leasing-lesson-3");
    record0.set("contentBody", "This lesson covers advanced lease valuation methodologies including NPV calculations with varying discount rates, IRR analysis, and sensitivity analysis. Students will learn negotiation strategies for obtaining favorable lease terms, including payment structures, renewal options, and termination clauses. The lesson includes real-world examples of lease negotiations and their financial impacts.");
    record0.set("learningOutcomes", "By the end of this lesson, students will be able to: 1) Perform advanced NPV and IRR calculations for complex lease scenarios; 2) Conduct sensitivity analysis to evaluate lease terms under different assumptions; 3) Develop and execute effective lease negotiation strategies; 4) Analyze the financial impact of various lease terms and conditions; 5) Create comprehensive lease evaluation models.");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("courseId", "vendor_leasing_course");
    record1.set("lessonNumber", 4);
    record1.set("title", "Lease Accounting Implementation and Portfolio Management");
    record1.set("description", "Learn how to implement lease accounting standards in practice, manage lease portfolios, and optimize lease accounting processes across organizations.");
    record1.set("duration", 150);
    record1.set("contentType", "video");
    record1.set("videoUrl", "https://example.com/vendor-leasing-lesson-4");
    record1.set("contentBody", "This lesson focuses on practical implementation of lease accounting standards (ASC 842/IFRS 16) in organizational systems and processes. Topics include system selection and configuration, data management, internal controls, and audit considerations. Students will learn portfolio management techniques, including lease abstraction, centralized tracking, and reporting. The lesson covers integration with financial reporting systems and best practices for lease accounting operations.");
    record1.set("learningOutcomes", "By the end of this lesson, students will be able to: 1) Implement lease accounting systems and processes; 2) Manage lease portfolios effectively; 3) Ensure compliance with accounting standards; 4) Design and maintain internal controls for lease accounting; 5) Prepare comprehensive lease accounting reports and disclosures; 6) Optimize lease accounting operations for efficiency and accuracy.");
  app.save(record1);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})