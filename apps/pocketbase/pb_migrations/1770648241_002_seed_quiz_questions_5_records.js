/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "lesson_5_case_study");
    record0.set("question_text", "Why did the multi-option proposal (buy vs lease) work better than presenting only the lease option to MediCare?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "A) It gave MediCare control and made them feel empowered to choose leasing based on data rather than sales pressure\nB) It was cheaper to present multiple options\nC) It confused the CFO into making a quick decision\nD) It allowed the leasing company to avoid discussing lease benefits");
    record0.set("correct_answer", "A");
    record0.set("explanation", "The multi-option approach worked because it gave MediCare control over the decision. By presenting all three options transparently (including purchase), the leasing company built credibility and trust. The side-by-side cost comparison ($140,000-$176,000 savings with lease) made the financial advantages obvious without aggressive sales tactics. This addressed the CFO psychological concern about ownership while showing why leasing was superior.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "lesson_5_case_study");
    record1.set("question_text", "What was the total 5-year cost savings for MediCare by choosing to lease instead of purchasing with cash?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "A) $90,000\nB) $140,000\nC) $176,000\nD) $200,000");
    record1.set("correct_answer", "B");
    record1.set("explanation", "The lease option cost $690,000 over 5 years, while purchasing with cash cost $830,000 (including $85,000 maintenance and $95,000 downtime costs). The difference is $140,000 in savings. If compared to financed purchase ($866,000), the savings would be $176,000. The question asks for the cash purchase comparison, which is $140,000.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "lesson_5_case_study");
    record2.set("question_text", "How did the leasing company use the upgrade hook to create a customer for life?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "A) By forcing MediCare to upgrade equipment every year\nB) By reaching out 90 days before lease expiration with proactive upgrade options that showed how new technology would generate $250,000/year additional revenue\nC) By refusing to renew the existing lease\nD) By increasing prices on the renewal lease");
    record2.set("correct_answer", "B");
    record2.set("explanation", "The upgrade hook worked through proactive relationship management. The leasing company reached out 90 days before lease expiration (not waiting for MediCare to shop around), presented the upgrade as an opportunity to improve patient care and competitive position, and quantified the value by showing how new technology would generate $250,000/year in additional revenue. This prevented the customer from considering competitors and expanded the relationship.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "lesson_5_case_study");
    record3.set("question_text", "What was the estimated additional revenue MediCare generated from the upgraded diagnostic equipment in Year 6-10?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "A) $180,000 per year\nB) $250,000 per year\nC) $1,250,000 total over 5 years\nD) $668,000 total over 5 years");
    record3.set("correct_answer", "C");
    record3.set("explanation", "In Year 6-10 (the upgraded lease period), MediCare generated $250,000/year in additional revenue from the advanced diagnostic equipment. Over the 5-year period, this totals $1,250,000. This was higher than the Year 1-5 period ($180,000/year = $900,000 total) because the new technology enabled better diagnostics and faster processing.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "lesson_5_case_study");
    record4.set("question_text", "What is the key lesson from the MediCare case study about proactive relationship management at lease-end?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "A) Wait for the customer to contact you about renewal\nB) Immediately raise prices to maximize profit\nC) Reach out 90 days before lease expiration with upgrade options that position the upgrade as an opportunity to improve their business, not just a renewal\nD) Encourage the customer to purchase equipment instead of leasing");
    record4.set("correct_answer", "C");
    record4.set("explanation", "The key lesson is proactive relationship management. By reaching out 90 days before lease expiration, the leasing company prevented MediCare from shopping around and considering competitors. By presenting the upgrade as an opportunity (not a burden), and quantifying the value through additional revenue generation, the leasing company expanded the relationship and increased customer lifetime value. This transformed a one-time lease into a long-term customer relationship with predictable revenue streams.");
    record4.set("order", 5);
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})