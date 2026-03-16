/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_performance_tracking");
  const field = collection.fields.getByName("quiz_number");
  field.max = 10;
  return app.save(collection);
}, (app) => {
  // Note: Rollback would need original values stored
})