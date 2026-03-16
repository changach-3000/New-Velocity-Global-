/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("case_study_workbooks");
  const field = collection.fields.getByName("part_number");
  field.required = true;
  return app.save(collection);
}, (app) => {
  // Note: Rollback would need original values stored
})