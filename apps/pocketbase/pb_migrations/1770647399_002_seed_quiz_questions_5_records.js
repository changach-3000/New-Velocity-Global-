/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "lesson_4_case_study_quiz");
    record0.set("question_text", "What was PrecisionTech Manufacturing's initial objection to leasing, and what was fundamentally wrong with their cost comparison?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"They claimed leasing at $1,110,000 was more expensive than purchasing at $850,000, but ignored hidden costs like financing interest, maintenance, downtime, obsolescence, taxes, and insurance\", \"They thought the lessor would not provide maintenance support\", \"They were concerned about equipment quality\", \"They wanted to own the equipment for accounting purposes\"]");
    record0.set("correct_answer", "They claimed leasing at $1,110,000 was more expensive than purchasing at $850,000, but ignored hidden costs like financing interest, maintenance, downtime, obsolescence, taxes, and insurance");
    record0.set("explanation", "The CFO made a surface-level cost comparison ($1,110,000 lease vs $850,000 purchase) without considering the true total cost of ownership. A comprehensive TCO analysis revealed that the actual purchase cost was $1,530,000 when all hidden costs were included, making leasing $408,000 cheaper over 5 years.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "lesson_4_case_study_quiz");
    record1.set("question_text", "According to the TCO analysis, what were the five major hidden costs of ownership that PrecisionTech would incur if they purchased equipment instead of leasing?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"Financing interest ($165,000), Maintenance & repairs ($95,000), Downtime losses ($120,000), Obsolescence risk ($180,000), Property tax & insurance ($63,000)\", \"Operator training, equipment delivery, installation, warranty extension, and software licenses\", \"Marketing costs, sales commissions, customer support, and administrative overhead\", \"Lease payments, insurance, maintenance contracts, property taxes, and equipment upgrades\"]");
    record1.set("correct_answer", "Financing interest ($165,000), Maintenance & repairs ($95,000), Downtime losses ($120,000), Obsolescence risk ($180,000), Property tax & insurance ($63,000)");
    record1.set("explanation", "These five cost categories totaling $623,000 in hidden costs are what transformed the apparent $850,000 purchase price into a true total cost of $1,530,000. Leasing eliminated all of these costs, resulting in a total cost of only $1,122,000.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "lesson_4_case_study_quiz");
    record2.set("question_text", "How much did PrecisionTech Manufacturing save over the 5-year period by choosing to lease equipment instead of purchasing?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"$408,000 (27% cost reduction)\", \"$260,000 (19% cost reduction)\", \"$165,000 (11% cost reduction)\", \"$120,000 (8% cost reduction)\"]");
    record2.set("correct_answer", "$408,000 (27% cost reduction)");
    record2.set("explanation", "The purchase scenario total cost was $1,530,000 while the lease scenario total cost was $1,122,000. The difference of $408,000 represents a 27% cost reduction by choosing to lease. This breaks down to $81,600 in annual savings or $6,800 per month.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "lesson_4_case_study_quiz");
    record3.set("question_text", "What operational improvements did PrecisionTech Manufacturing achieve through the leasing decision?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"Equipment downtime reduced from 24 days/year to 2 days/year (92% improvement), production capacity increased 18%, customer delivery times improved 15%, customer satisfaction increased from 82% to 94%, and won 3 new major contracts\", \"Equipment was purchased at a lower price and financed over 5 years\", \"They were able to hire more employees and expand their facility\", \"They eliminated all maintenance costs and extended equipment warranties\"]");
    record3.set("correct_answer", "Equipment downtime reduced from 24 days/year to 2 days/year (92% improvement), production capacity increased 18%, customer delivery times improved 15%, customer satisfaction increased from 82% to 94%, and won 3 new major contracts");
    record3.set("explanation", "Beyond the $408,000 in cost savings, leasing provided significant operational benefits. The lessor's replacement equipment policy reduced downtime by 92%, which enabled an 18% increase in production capacity. This led to 15% faster customer delivery times, higher satisfaction scores (82% to 94%), and the ability to win 3 new major contracts generating $450,000/year in additional revenue.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "lesson_4_case_study_quiz");
    record4.set("question_text", "What is the key sales lesson from the PrecisionTech case study for handling the \"leasing is too expensive\" objection?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"Never let a surface-level cost objection end the conversation. Present a comprehensive TCO analysis that includes financing costs, maintenance, downtime, obsolescence, taxes, insurance, and risk factors to transform the objection into a buying opportunity\", \"Always recommend leasing because it is cheaper than purchasing\", \"Focus on the monthly payment amount rather than total cost of ownership\", \"Avoid discussing hidden costs and focus only on the headline purchase price\"]");
    record4.set("correct_answer", "Never let a surface-level cost objection end the conversation. Present a comprehensive TCO analysis that includes financing costs, maintenance, downtime, obsolescence, taxes, insurance, and risk factors to transform the objection into a buying opportunity");
    record4.set("explanation", "The PrecisionTech case demonstrates that the \"leasing is too expensive\" objection often masks incomplete financial analysis. By presenting data showing all cost components over the full ownership period, salespeople can prove that leasing is actually more cost-effective and provides additional operational benefits. The data tells the real story and transforms objections into buying opportunities.");
    record4.set("order", 5);
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})