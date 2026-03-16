/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "Lease Accounting Standards (IFRS 16 & ASC 842)");
    record0.set("title", "Practical Implementation");
    record0.set("description", "Practical Implementation of lease accounting standards covering journal entries, financial statement presentation, balance sheet and income statement impacts, cash flow treatment, transition guidance, implementation timeline, common pitfalls, and real-world case studies");
    record0.set("order", 3);
    record0.set("duration", 120);
    record0.set("content_type", "text");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})