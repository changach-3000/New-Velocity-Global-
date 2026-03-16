/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "pbc_9676646180");
    record0.set("title", "Operational Leasing Basics and Business Benefits");
    record0.set("description", "Understand operational leasing fundamentals, business benefits, and growth applications. Learn how operational leasing preserves capital, provides flexibility, ensures cost predictability, enables technology access, improves operational efficiency, and impacts balance sheets. Explore rapid expansion, market testing, seasonal scaling, technology adoption, and geographic expansion applications. Compare operational leasing vs ownership with real-world case studies.");
    record0.set("content_type", "text");
    record0.set("order", 1);
    record0.set("duration", 60);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "pbc_9676646180");
    record1.set("title", "Operational Leasing vs Capital Leasing and Strategic Alignment");
    record1.set("description", "Understand operational vs capital leasing characteristics, accounting and tax treatment differences. Learn strategic alignment framework considering business growth stage, equipment life, technology changes, capital availability, flexibility needs, and operational burden. Apply decision framework to choose appropriate leasing strategy aligned with business objectives.");
    record1.set("content_type", "text");
    record1.set("order", 2);
    record1.set("duration", 60);
  app.save(record1);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})