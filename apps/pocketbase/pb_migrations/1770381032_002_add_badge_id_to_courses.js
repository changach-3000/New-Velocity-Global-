/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");
  
  collection.fields.add(new TextField({
    name: "badge_id"
  }));
  
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("courses");
  collection.fields.removeByName("badge_id");
  return app.save(collection);
})