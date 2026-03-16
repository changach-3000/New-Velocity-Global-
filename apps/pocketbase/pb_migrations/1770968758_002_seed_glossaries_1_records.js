/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("glossaries");

  const record0 = new Record(collection);
    record0.set("title", "Equipment Leasing");
    record0.set("definition", "A financial arrangement where a company rents equipment for a specified period instead of purchasing it outright.");
    record0.set("category", "Finance");
  try {
    app.save(record0);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})