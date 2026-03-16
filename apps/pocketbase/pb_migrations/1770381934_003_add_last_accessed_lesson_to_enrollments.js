/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("enrollments");
  
  collection.fields.add(new TextField({
    name: "last_accessed_lesson",
    required: false
  }));
  
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("enrollments");
  collection.fields.removeByName("last_accessed_lesson");
  return app.save(collection);
})