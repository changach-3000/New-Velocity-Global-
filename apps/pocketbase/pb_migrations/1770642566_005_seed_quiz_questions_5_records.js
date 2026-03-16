/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "{{QUIZ_ID}}");
    record0.set("question_text", "What is the primary advantage of selling access over ownership?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "A) Lower initial costs for customers|B) Flexibility and reduced risk for customers|C) Easier inventory management|D) Faster delivery times");
    record0.set("correct_answer", "B) Flexibility and reduced risk for customers");
    record0.set("explanation", "Selling access provides customers with flexibility, eliminates ownership risks, and allows them to focus on their core business rather than asset management.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "{{QUIZ_ID}}");
    record1.set("question_text", "How does moving from CapEx to OpEx benefit a business?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "A) Increases asset ownership|B) Improves cash flow and reduces balance sheet burden|C) Eliminates all maintenance costs|D) Guarantees higher profits");
    record1.set("correct_answer", "B) Improves cash flow and reduces balance sheet burden");
    record1.set("explanation", "OpEx models improve cash flow by spreading costs over time, reduce balance sheet burden, and provide better financial flexibility compared to CapEx.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "{{QUIZ_ID}}");
    record2.set("question_text", "What are the main costs associated with equipment ownership?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "A) Only purchase price|B) Maintenance, repairs, obsolescence, and upgrade costs|C) Only insurance|D) Only storage fees");
    record2.set("correct_answer", "B) Maintenance, repairs, obsolescence, and upgrade costs");
    record2.set("explanation", "Equipment ownership involves multiple hidden costs including maintenance, repairs, technology obsolescence, and periodic upgrades and replacements.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "{{QUIZ_ID}}");
    record3.set("question_text", "Why is the user vs owner logic important in leasing sales?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "A) It confuses customers|B) It helps position leasing as beneficial for users who want flexibility without ownership responsibilities|C) It increases equipment costs|D) It eliminates the need for contracts");
    record3.set("correct_answer", "B) It helps position leasing as beneficial for users who want flexibility without ownership responsibilities");
    record3.set("explanation", "Understanding user vs owner logic allows salespeople to position leasing as the ideal solution for customers who want to use equipment without bearing ownership risks and responsibilities.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "{{QUIZ_ID}}");
    record4.set("question_text", "How should salespeople position leasing to overcome ownership objections?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "A) Ignore customer concerns|B) Emphasize total cost of ownership, flexibility benefits, and modern business trends|C) Offer discounts only|D) Focus only on price");
    record4.set("correct_answer", "B) Emphasize total cost of ownership, flexibility benefits, and modern business trends");
    record4.set("explanation", "Effective positioning involves highlighting total cost of ownership advantages, flexibility benefits, and positioning leasing as the modern solution that aligns with current business trends.");
    record4.set("order", 5);
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})