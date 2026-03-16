/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("study_guides");
  const field = collection.fields.getByName("part_number");
  field.required = false;
  return app.save(collection);
}, (app) => {
  // Note: Rollback would need original values stored
})