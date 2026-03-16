/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("enrollments");
  
  collection.fields.add(new NumberField({
    name: "completion_percentage",
    required: false
  }));
  
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("enrollments");
  collection.fields.removeByName("completion_percentage");
  return app.save(collection);
})