/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "PART 2: CUSTOMER & PRODUCT STRATEGIES");
    record0.set("description", "2.5-hour part covering customer segmentation, lease product design, and pricing strategies");
    record0.set("order", 2);
    record0.set("content_type", "text");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "pbc_9676646180");
    record1.set("title", "LESSON 2.1: Customer Segmentation and Targeting");
    record1.set("description", "60-minute lesson on customer segmentation techniques, creating customer personas, targeting strategies, and case study of SegmentLeasing Inc. developing segmentation and targeting strategy.");
    record1.set("order", 3);
    record1.set("content_type", "text");
    record1.set("duration", 60);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "pbc_9676646180");
    record2.set("title", "LESSON 2.2: Lease Product Design and Customization");
    record2.set("description", "60-minute lesson on lease product design components, customization strategies, and case study of ProductLeasing Inc. designing lease products for different customer segments.");
    record2.set("order", 4);
    record2.set("content_type", "text");
    record2.set("duration", 60);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("course_id", "pbc_9676646180");
    record3.set("title", "LESSON 2.3: Pricing and Terms Strategy");
    record3.set("description", "30-minute lesson on pricing strategies, lease terms optimization, and case study of PricingLeasing Inc. developing pricing and terms strategy.");
    record3.set("order", 5);
    record3.set("content_type", "text");
    record3.set("duration", 30);
  app.save(record3);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})