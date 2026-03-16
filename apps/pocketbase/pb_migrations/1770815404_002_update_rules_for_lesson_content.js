/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lesson_content");
  collection.listRule = "@request.auth.id != \"\" || @request.auth.collectionName = \"users\"";
  collection.viewRule = "@request.auth.id != \"\" || @request.auth.collectionName = \"users\"";
  return app.save(collection);
}, (app) => {
  // Note: Rollback would need to restore original rule values
})