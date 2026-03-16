/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Lease Accounting under ASC 842");
    record0.set("description", "Comprehensive guide to lease accounting under ASC 842. Master lessee and lessor accounting, lease identification, recognition and measurement, subsequent measurement, lease modifications, disclosures, implementation strategies, and practical expedients. Includes detailed calculations, case studies, and real-world examples for US GAAP compliance.");
    record0.set("instructor_name", "Leasing Professionals Academy");
    record0.set("price", 1);
    record0.set("duration_hours", 7);
    record0.set("image_url", "");
    record0.set("learning_outcomes", "Master ASC 842 lease accounting standards, lessee and lessor accounting, lease identification, recognition and measurement, subsequent measurement, lease modifications, disclosures, implementation strategies, and practical expedients");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})