/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("vendor_leasing_student_badges");
  
  collection.fields.add(new DateField({
    name: "lesson_completion_date",
    required: false
  }));
  
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("vendor_leasing_student_badges");
  collection.fields.removeByName("lesson_completion_date");
  return app.save(collection);
})