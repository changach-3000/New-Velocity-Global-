/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Risk Assessment in Equipment Leasing");
    record0.set("description", "Identify, assess, and mitigate risks in equipment leasing transactions. Learn credit analysis and risk management strategies.");
    record0.set("instructor_name", "Financier");
    record0.set("price", 99.99);
    record0.set("duration_hours", 6);
    record0.set("learning_outcomes", "Understand risk identification, credit analysis, risk mitigation strategies, and compliance in equipment leasing");
    record0.set("image_url", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800");
    record0.set("curriculum", "4 lessons covering risk assessment fundamentals");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})