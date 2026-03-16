/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("enrollments");
  
  collection.fields.add(new DateField({
    name: "last_accessed_date",
    required: false
  }));
  
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("enrollments");
  collection.fields.removeByName("last_accessed_date");
  return app.save(collection);
})