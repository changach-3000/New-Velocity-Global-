/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "quiz_1_id_placeholder");
    record0.set("question_text", "Which of the following best defines credit risk in equipment leasing?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "A) The risk that equipment will become obsolete\nB) The risk that a lessee will default on lease payments\nC) The risk of equipment damage or loss\nD) The risk of interest rate fluctuations");
    record0.set("correct_answer", "B");
    record0.set("explanation", "Credit risk is the risk that a lessee will default on lease payments. This is the most significant risk in equipment leasing and requires thorough credit analysis and ongoing monitoring.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "quiz_1_id_placeholder");
    record1.set("question_text", "What is the primary difference between residual risk and operational risk?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "A) Residual risk relates to equipment value uncertainty; operational risk relates to day-to-day management\nB) Residual risk is more important than operational risk\nC) Operational risk only affects lessees, not lessors\nD) Residual risk can be completely eliminated with insurance");
    record1.set("correct_answer", "A");
    record1.set("explanation", "Residual risk refers to uncertainty in equipment value at lease end, while operational risk encompasses risks from day-to-day lease management including maintenance, insurance, and compliance issues.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "quiz_1_id_placeholder");
    record2.set("question_text", "Which factors are most critical in assessing market risk in equipment leasing?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "A) Equipment color and aesthetic appeal\nB) Interest rates, economic cycles, industry trends, and regulatory changes\nC) Only the age of the equipment\nD) The lessor's office location");
    record2.set("correct_answer", "B");
    record2.set("explanation", "Market risk relates to broader economic and industry factors including interest rates, economic cycles, industry downturns, competition, and regulatory changes that affect equipment values and lease demand.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "quiz_1_id_placeholder");
    record3.set("question_text", "A risk classification framework helps organizations accomplish all of the following EXCEPT:");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "A) Identify all relevant risks\nB) Assess risk magnitude and probability\nC) Guarantee that no losses will occur\nD) Prioritize risk management efforts");
    record3.set("correct_answer", "C");
    record3.set("explanation", "While a risk classification framework helps identify, assess, and prioritize risks, it cannot guarantee that no losses will occur. Risk management aims to reduce and manage risks, not eliminate them entirely.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "quiz_1_id_placeholder");
    record4.set("question_text", "A lessor is evaluating a lease for specialized manufacturing equipment. The lessee operates in a cyclical industry with significant economic sensitivity. Which risk category is MOST relevant to this scenario?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "A) Only residual risk\nB) Only operational risk\nC) Credit risk and market risk\nD) Only insurance risk");
    record4.set("correct_answer", "C");
    record4.set("explanation", "This scenario involves both credit risk (lessee's ability to pay during economic downturns) and market risk (industry cyclicality and economic sensitivity affecting both lease demand and equipment values).");
    record4.set("order", 5);
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})