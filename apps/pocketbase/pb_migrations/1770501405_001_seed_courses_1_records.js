/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Lease Securitization & Structured Finance");
    record0.set("description", "Master lease securitization and structured finance. Learn how to convert lease portfolios into tradeable securities, structure complex financial instruments, manage credit risk, and optimize capital efficiency. Comprehensive coverage of securitization mechanics, tranching strategies, rating methodologies, regulatory requirements, and real-world case studies. Develop expertise in ABS (Asset-Backed Securities), cash flow analysis, credit enhancement, and market dynamics. Perfect for finance professionals seeking to understand modern capital markets and lease-based financing structures.");
    record0.set("instructor_name", "Leasing Professionals Academy");
    record0.set("price", 1);
    record0.set("duration_hours", 7);
    record0.set("image_url", "");
    record0.set("curriculum", "");
    record0.set("estimated_hours", 7);
    record0.set("badge_id", "");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})