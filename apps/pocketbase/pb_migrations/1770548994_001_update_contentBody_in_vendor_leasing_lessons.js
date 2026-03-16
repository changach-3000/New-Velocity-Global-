/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("vendor_leasing_lessons");
  const field = collection.fields.getByName("contentBody");
  field.max = 50000;
  return app.save(collection);
}, (app) => {
  // Note: Rollback would need original values stored
})