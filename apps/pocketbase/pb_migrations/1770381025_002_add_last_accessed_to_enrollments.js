/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("enrollments");
  
  collection.fields.add(new DateField({
    name: "last_accessed"
  }));
  
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("enrollments");
  collection.fields.removeByName("last_accessed");
  return app.save(collection);
})