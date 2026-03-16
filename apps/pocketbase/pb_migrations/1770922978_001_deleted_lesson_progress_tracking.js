/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lesson_progress_tracking");
  return app.delete(collection);
}, (app) => {
  // Note: The down migration cannot restore data, only the collection structure
  // You would need to manually recreate the collection structure here if needed
})