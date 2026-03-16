/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("enrollments");
  
  collection.fields.add(new NumberField({
    name: "total_lessons",
    required: false
  }));
  
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("enrollments");
  collection.fields.removeByName("total_lessons");
  return app.save(collection);
})