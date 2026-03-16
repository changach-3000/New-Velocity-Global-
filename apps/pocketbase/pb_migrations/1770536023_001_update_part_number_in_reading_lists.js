/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("reading_lists");
  const field = collection.fields.getByName("part_number");
  field.required = true;
  return app.save(collection);
}, (app) => {
  // Note: Rollback would need original values stored
})