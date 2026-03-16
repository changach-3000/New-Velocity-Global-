/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");
  
  collection.fields.add(new NumberField({
    name: "estimated_hours"
  }));
  
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("courses");
  collection.fields.removeByName("estimated_hours");
  return app.save(collection);
})