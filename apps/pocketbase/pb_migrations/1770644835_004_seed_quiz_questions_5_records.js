/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "[QUIZ_2_ID]");
    record0.set("question_text", "How does leasing preserve cash flow compared to purchasing equipment?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "A) It requires larger upfront payments|B) It spreads payments over time while preserving working capital|C) It eliminates all cash flow concerns|D) It increases immediate cash outflows");
    record0.set("correct_answer", "B) It spreads payments over time while preserving working capital");
    record0.set("explanation", "Leasing preserves cash flow by spreading payments over time, reducing the large upfront capital expenditure required for purchase, which helps preserve working capital for other business needs.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "[QUIZ_2_ID]");
    record1.set("question_text", "What is the difference between ROI and IRR, and why does IRR matter to CFOs?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "A) ROI measures percentage return; IRR accounts for timing of cash flows and is preferred by CFOs for investment decisions|B) They are the same metric with different names|C) IRR is only used for personal investments|D) ROI is more important than IRR");
    record1.set("correct_answer", "A) ROI measures percentage return; IRR accounts for timing of cash flows and is preferred by CFOs for investment decisions");
    record1.set("explanation", "ROI is a simple percentage return calculation, while IRR accounts for the time value of money and the timing of cash flows, making it more valuable for CFOs evaluating complex financial decisions like leasing vs purchasing.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "[QUIZ_2_ID]");
    record2.set("question_text", "How does inflation benefit a company using fixed lease payments?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "A) It increases lease payment amounts|B) Fixed payments become cheaper in real terms as inflation erodes the value of money, allowing companies to pay with cheaper future dollars|C) It eliminates inflation risk entirely|D) It has no impact on lease payments");
    record2.set("correct_answer", "B) Fixed payments become cheaper in real terms as inflation erodes the value of money, allowing companies to pay with cheaper future dollars");
    record2.set("explanation", "With fixed lease payments, inflation works in the lessee's favor because they pay the same dollar amount over time, but those dollars become less valuable due to inflation, effectively reducing the real cost of the lease.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "[QUIZ_2_ID]");
    record3.set("question_text", "What is the concept of paying with tomorrow's cheaper dollars?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "A) Delaying all payments indefinitely|B) Using fixed lease payments that remain constant while inflation reduces their real value over time|C) Negotiating lower prices in the future|D) Avoiding inflation entirely");
    record3.set("correct_answer", "B) Using fixed lease payments that remain constant while inflation reduces their real value over time");
    record3.set("explanation", "Paying with tomorrow's cheaper dollars means that fixed lease payments made in the future are worth less in real terms due to inflation, so the company effectively pays less in today's dollars for the same nominal payment amount.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "[QUIZ_2_ID]");
    record4.set("question_text", "How should salespeople present financial benefits to CFOs?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "A) Using emotional appeals and general statements|B) Focusing only on equipment features|C) Using data-driven arguments, clear metrics, financial models, and compelling narratives that demonstrate tangible financial benefits|D) Avoiding financial details and focusing on operational benefits");
    record4.set("correct_answer", "C) Using data-driven arguments, clear metrics, financial models, and compelling narratives that demonstrate tangible financial benefits");
    record4.set("explanation", "CFOs respond to concrete financial data, clear metrics, well-constructed financial models, and narratives that demonstrate measurable financial benefits. This approach builds credibility and trust with financial decision-makers.");
    record4.set("order", 5);
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})