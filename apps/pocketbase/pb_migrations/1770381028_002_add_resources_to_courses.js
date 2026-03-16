/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");
  
  collection.fields.add(new FileField({
    name: "resources",
    maxSelect: 10
  }));
  
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("courses");
  collection.fields.removeByName("resources");
  return app.save(collection);
})