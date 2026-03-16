/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("vendor_leasing_lessons");
  const field = collection.fields.getByName("lessonNumber");
  field.max = 10;
  return app.save(collection);
}, (app) => {
  // Note: Rollback would need original values stored
})