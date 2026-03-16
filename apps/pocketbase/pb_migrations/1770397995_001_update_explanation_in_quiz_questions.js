/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");
  const field = collection.fields.getByName("explanation");
  field.required = true;
  return app.save(collection);
}, (app) => {
  // Note: Rollback would need original values stored
})