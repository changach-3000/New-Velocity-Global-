/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("vendor_leasing_lessons");

  const record0 = new Record(collection);
    record0.set("lessonNumber", 1);
    record0.set("title", "Introduction to Vendor Leasing");
    record0.set("description", "Fundamentals of vendor leasing programs and key concepts");
    record0.set("contentType", "text");
    record0.set("contentBody", "Vendor leasing is a financing arrangement where a vendor (supplier) provides financing to customers for equipment or services. Key topics: (1) Definition and scope of vendor leasing, (2) Types of vendor leasing arrangements, (3) Benefits for vendors and customers, (4) Risk management in vendor leasing, (5) Regulatory considerations. Learning outcomes: Understand vendor leasing fundamentals, identify different leasing structures, evaluate vendor financing benefits, manage vendor leasing risks");
    record0.set("learningOutcomes", "Understand vendor leasing fundamentals, identify different leasing structures, evaluate vendor financing benefits, manage vendor leasing risks");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("lessonNumber", 2);
    record1.set("title", "Vendor Financing Programs");
    record1.set("description", "Structuring and managing vendor financing programs");
    record1.set("contentType", "text");
    record1.set("contentBody", "Vendor financing programs enable suppliers to offer credit to customers. Key topics: (1) Program design and structure, (2) Credit assessment and approval, (3) Documentation and contracts, (4) Payment terms and conditions, (5) Default management and collections. Learning outcomes: Design effective vendor financing programs, assess customer creditworthiness, create financing documentation, manage payment processes, handle defaults");
    record1.set("learningOutcomes", "Design effective vendor financing programs, assess customer creditworthiness, create financing documentation, manage payment processes, handle defaults");
  app.save(record1);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})