/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("case_study_workbooks");
  const field = collection.fields.getByName("lesson_id");
  field.required = false;
  return app.save(collection);
}, (app) => {
  // Note: Rollback would need original values stored
})