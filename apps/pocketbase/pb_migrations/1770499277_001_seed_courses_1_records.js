/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Lease Accounting Standards");
    record0.set("description", "Comprehensive exploration of lease accounting standards evolution. Master historical standards (IAS 17, ASC 840), modern standards (IFRS 16, ASC 842), global implementation approaches, and standard-specific considerations. Understand the convergence journey and practical application across different jurisdictions.");
    record0.set("instructor_name", "Leasing Professionals Academy");
    record0.set("price", 1);
    record0.set("duration_hours", 7);
    record0.set("image_url", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800");
    record0.set("learning_outcomes", "Understand lease accounting standards evolution, Master IAS 17 and ASC 840 historical standards, Learn IFRS 16 and ASC 842 modern standards, Apply standards across different jurisdictions, Implement global lease accounting approaches");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})