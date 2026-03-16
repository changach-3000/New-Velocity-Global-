/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("enrollments");
  collection.listRule = "student_id = @request.auth.id";
  collection.viewRule = "student_id = @request.auth.id";
  collection.createRule = "@request.auth.id != \"\"";
  collection.updateRule = "student_id = @request.auth.id";
  collection.deleteRule = "student_id = @request.auth.id";
  return app.save(collection);
}, (app) => {
  // Note: Rollback would need to restore original rule values
})