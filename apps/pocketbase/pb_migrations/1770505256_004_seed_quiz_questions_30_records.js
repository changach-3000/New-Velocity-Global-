/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "quiz_3_1");
    record0.set("question_text", "What is leasing?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"Buying equipment\",\"Agreement to use equipment for a period\",\"Renting a house\",\"Purchasing a vehicle\"]");
    record0.set("correct_answer", "Agreement to use equipment for a period");
    record0.set("explanation", "Leasing is an agreement between a lessor (owner) and lessee (user) to use equipment for a specified period in exchange for payments.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "quiz_3_1");
    record1.set("question_text", "Who is the lessor?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"Equipment user\",\"Equipment owner\",\"Equipment manufacturer\",\"Equipment dealer\"]");
    record1.set("correct_answer", "Equipment owner");
    record1.set("explanation", "The lessor is the owner of the equipment who provides it to the lessee.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "quiz_3_1");
    record2.set("question_text", "Who is the lessee?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"Equipment owner\",\"Equipment user\",\"Equipment manufacturer\",\"Equipment dealer\"]");
    record2.set("correct_answer", "Equipment user");
    record2.set("explanation", "The lessee is the user of the equipment who makes lease payments to the lessor.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "quiz_3_1");
    record3.set("question_text", "What is an operating lease?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"Long-term lease with ownership transfer\",\"Short-term lease where lessor retains ownership\",\"Equipment purchase agreement\",\"Rental agreement for short-term use\"]");
    record3.set("correct_answer", "Short-term lease where lessor retains ownership");
    record3.set("explanation", "An operating lease is a short-term lease (typically 2-5 years) where the lessor retains ownership of the equipment.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "quiz_3_1");
    record4.set("question_text", "What is a capital lease?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"Short-term lease where lessor retains ownership\",\"Long-term lease transferring ownership benefits/risks\",\"Equipment purchase agreement\",\"Rental agreement for short-term use\"]");
    record4.set("correct_answer", "Long-term lease transferring ownership benefits/risks");
    record4.set("explanation", "A capital lease is a long-term lease (typically 5+ years) that transfers the benefits and risks of ownership to the lessee.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "quiz_3_1");
    record5.set("question_text", "What is the primary benefit of leasing?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "[\"Ownership of equipment\",\"Capital preservation and flexibility\",\"Guaranteed residual value\",\"No maintenance costs\"]");
    record5.set("correct_answer", "Capital preservation and flexibility");
    record5.set("explanation", "The primary benefits of leasing are preserving capital for other uses and maintaining flexibility to upgrade or change equipment.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "quiz_3_1");
    record6.set("question_text", "What is residual value?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"Equipment cost\",\"Expected value at end of lease\",\"Monthly payment\",\"Equipment age\"]");
    record6.set("correct_answer", "Expected value at end of lease");
    record6.set("explanation", "Residual value is the expected value of the equipment at the end of the lease term.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "quiz_3_1");
    record7.set("question_text", "What is the difference between leasing and buying?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "[\"No difference\",\"Leasing has no ownership, buying has ownership\",\"Buying is cheaper\",\"Leasing is more expensive\"]");
    record7.set("correct_answer", "Leasing has no ownership, buying has ownership");
    record7.set("explanation", "The key difference is that leasing provides use without ownership, while buying provides full ownership.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "quiz_3_1");
    record8.set("question_text", "Who typically uses leasing?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "[\"Only large businesses\",\"Only consumers\",\"Businesses, consumers, and organizations\",\"Only manufacturers\"]");
    record8.set("correct_answer", "Businesses, consumers, and organizations");
    record8.set("explanation", "Leasing is used by businesses, consumers, and organizations across many industries.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "quiz_3_1");
    record9.set("question_text", "What is a key advantage of leasing for businesses?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "[\"Ownership of equipment\",\"Capital preservation and flexibility\",\"Guaranteed profits\",\"Reduced operational burden\"]");
    record9.set("correct_answer", "Capital preservation and flexibility");
    record9.set("explanation", "Key advantages for businesses include preserving capital for growth and maintaining flexibility to adapt to changing needs.");
    record9.set("order", 10);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("quiz_id", "quiz_3_2");
    record10.set("question_text", "Why do businesses lease equipment?");
    record10.set("question_type", "multiple_choice");
    record10.set("options", "[\"To own equipment\",\"To preserve capital and maintain flexibility\",\"To increase costs\",\"To reduce revenue\"]");
    record10.set("correct_answer", "To preserve capital and maintain flexibility");
    record10.set("explanation", "Businesses lease to preserve capital for growth and maintain flexibility to adapt to changing needs.");
    record10.set("order", 1);
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("quiz_id", "quiz_3_2");
    record11.set("question_text", "What is a benefit of consumer car leasing?");
    record11.set("question_type", "multiple_choice");
    record11.set("options", "[\"Ownership of vehicle\",\"Latest models with maintenance included\",\"No mileage limits\",\"Customization allowed\"]");
    record11.set("correct_answer", "Latest models with maintenance included");
    record11.set("explanation", "Consumer car leasing provides access to latest models with maintenance included and predictable costs.");
    record11.set("order", 2);
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("quiz_id", "quiz_3_2");
    record12.set("question_text", "What is a typical mileage limit for car leasing?");
    record12.set("question_type", "multiple_choice");
    record12.set("options", "[\"5,000 miles/year\",\"10,000 miles/year\",\"12,000 miles/year\",\"20,000 miles/year\"]");
    record12.set("correct_answer", "12,000 miles/year");
    record12.set("explanation", "A typical mileage limit for car leasing is 12,000 miles per year, with excess mileage charges for miles over the limit.");
    record12.set("order", 3);
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("quiz_id", "quiz_3_2");
    record13.set("question_text", "What is the leasing industry size?");
    record13.set("question_type", "multiple_choice");
    record13.set("options", "[\"Millions of dollars\",\"Billions of dollars\",\"Trillions of dollars\",\"No significant size\"]");
    record13.set("correct_answer", "Trillions of dollars");
    record13.set("explanation", "The global leasing industry is a multi-trillion dollar market that continues to grow.");
    record13.set("order", 4);
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("quiz_id", "quiz_3_2");
    record14.set("question_text", "What is a career opportunity in leasing?");
    record14.set("question_type", "multiple_choice");
    record14.set("options", "[\"Lease originator\",\"Lease manager\",\"Credit analyst\",\"All of the above\"]");
    record14.set("correct_answer", "All of the above");
    record14.set("explanation", "Career opportunities in leasing include lease originators, lease managers, credit analysts, sales representatives, and more.");
    record14.set("order", 5);
  app.save(record14);

  const record15 = new Record(collection);
    record15.set("quiz_id", "quiz_3_2");
    record15.set("question_text", "What is a key industry trend?");
    record15.set("question_type", "multiple_choice");
    record15.set("options", "[\"Decreasing flexibility\",\"Digital transformation and sustainability\",\"Reducing technology\",\"Eliminating leasing\"]");
    record15.set("correct_answer", "Digital transformation and sustainability");
    record15.set("explanation", "Key industry trends include digital transformation, sustainability focus, and increased flexibility in lease terms.");
    record15.set("order", 6);
  app.save(record15);

  const record16 = new Record(collection);
    record16.set("quiz_id", "quiz_3_2");
    record16.set("question_text", "What is a benefit of leasing for small businesses?");
    record16.set("question_type", "multiple_choice");
    record16.set("options", "[\"Requires large capital investment\",\"Preserves capital for growth\",\"Limits flexibility\",\"Increases debt\"]");
    record16.set("correct_answer", "Preserves capital for growth");
    record16.set("explanation", "Leasing helps small businesses preserve limited capital for growth and expansion.");
    record16.set("order", 7);
  app.save(record16);

  const record17 = new Record(collection);
    record17.set("quiz_id", "quiz_3_2");
    record17.set("question_text", "What is a consideration for consumer leasing?");
    record17.set("question_type", "multiple_choice");
    record17.set("options", "[\"No mileage limits\",\"Unlimited customization\",\"Mileage limits and wear and tear charges\",\"No insurance required\"]");
    record17.set("correct_answer", "Mileage limits and wear and tear charges");
    record17.set("explanation", "Consumer leasing typically includes mileage limits and charges for excessive wear and tear.");
    record17.set("order", 8);
  app.save(record17);

  const record18 = new Record(collection);
    record18.set("quiz_id", "quiz_3_2");
    record18.set("question_text", "What is the primary role of a lessor?");
    record18.set("question_type", "multiple_choice");
    record18.set("options", "[\"Use equipment\",\"Own and provide equipment\",\"Manufacture equipment\",\"Sell equipment\"]");
    record18.set("correct_answer", "Own and provide equipment");
    record18.set("explanation", "The lessor owns the equipment and provides it to the lessee in exchange for lease payments.");
    record18.set("order", 9);
  app.save(record18);

  const record19 = new Record(collection);
    record19.set("quiz_id", "quiz_3_2");
    record19.set("question_text", "What is a benefit of leasing for technology companies?");
    record19.set("question_type", "multiple_choice");
    record19.set("options", "[\"Ownership of equipment\",\"Access to latest technology\",\"No maintenance needed\",\"Reduced operational burden\"]");
    record19.set("correct_answer", "Access to latest technology");
    record19.set("explanation", "Technology companies benefit from leasing by having access to the latest equipment without ownership burden.");
    record19.set("order", 10);
  app.save(record19);

  const record20 = new Record(collection);
    record20.set("quiz_id", "quiz_3_3");
    record20.set("question_text", "What is the first step in lease evaluation?");
    record20.set("question_type", "multiple_choice");
    record20.set("options", "[\"Make a decision\",\"Identify needs\",\"Compare options\",\"Negotiate terms\"]");
    record20.set("correct_answer", "Identify needs");
    record20.set("explanation", "The first step in lease evaluation is to clearly identify what equipment is needed and what capacity is required.");
    record20.set("order", 1);
  app.save(record20);

  const record21 = new Record(collection);
    record21.set("quiz_id", "quiz_3_3");
    record21.set("question_text", "What is lease vs buy analysis?");
    record21.set("question_type", "multiple_choice");
    record21.set("options", "[\"Comparing lease costs to purchase costs\",\"Comparing different lessors\",\"Comparing equipment types\",\"Comparing payment amounts\"]");
    record21.set("correct_answer", "Comparing lease costs to purchase costs");
    record21.set("explanation", "Lease vs buy analysis compares the total cost of leasing to the cost of purchasing to determine the most cost-effective option.");
    record21.set("order", 2);
  app.save(record21);

  const record22 = new Record(collection);
    record22.set("quiz_id", "quiz_3_3");
    record22.set("question_text", "What is total cost of ownership?");
    record22.set("question_type", "multiple_choice");
    record22.set("options", "[\"Equipment cost only\",\"Monthly payment only\",\"Sum of all costs including maintenance and insurance\",\"Residual value only\"]");
    record22.set("correct_answer", "Sum of all costs including maintenance and insurance");
    record22.set("explanation", "Total cost of ownership includes all costs: lease payment, maintenance, insurance, and any other expenses.");
    record22.set("order", 3);
  app.save(record22);

  const record23 = new Record(collection);
    record23.set("quiz_id", "quiz_3_3");
    record23.set("question_text", "What is a common leasing mistake?");
    record23.set("question_type", "multiple_choice");
    record23.set("options", "[\"Comparing options\",\"Understanding terms\",\"Not comparing options\",\"Negotiating terms\"]");
    record23.set("correct_answer", "Not comparing options");
    record23.set("explanation", "A common mistake is not comparing multiple lease offers and accepting the first offer without exploring better options.");
    record23.set("order", 4);
  app.save(record23);

  const record24 = new Record(collection);
    record24.set("quiz_id", "quiz_3_3");
    record24.set("question_text", "What is a best practice in leasing?");
    record24.set("question_type", "multiple_choice");
    record24.set("options", "[\"Accept first offer\",\"Ignore hidden costs\",\"Compare multiple lease offers\",\"Don't negotiate\"]");
    record24.set("correct_answer", "Compare multiple lease offers");
    record24.set("explanation", "A best practice is to compare multiple lease offers from different lessors to find the best option.");
    record24.set("order", 5);
  app.save(record24);

  const record25 = new Record(collection);
    record25.set("quiz_id", "quiz_3_3");
    record25.set("question_text", "What is the lease process first phase?");
    record25.set("question_type", "multiple_choice");
    record25.set("options", "[\"Approval\",\"Application\",\"Funding\",\"Documentation\"]");
    record25.set("correct_answer", "Application");
    record25.set("explanation", "The first phase of the lease process is submitting a lease application with required information.");
    record25.set("order", 6);
  app.save(record25);

  const record26 = new Record(collection);
    record26.set("quiz_id", "quiz_3_3");
    record26.set("question_text", "What is required in a lease application?");
    record26.set("question_type", "multiple_choice");
    record26.set("options", "[\"Equipment information only\",\"Personal/business information and financial information\",\"Payment information only\",\"No information required\"]");
    record26.set("correct_answer", "Personal/business information and financial information");
    record26.set("explanation", "A lease application requires personal/business information, financial statements, and equipment specifications.");
    record26.set("order", 7);
  app.save(record26);

  const record27 = new Record(collection);
    record27.set("quiz_id", "quiz_3_3");
    record27.set("question_text", "What is a key section of a lease agreement?");
    record27.set("question_type", "multiple_choice");
    record27.set("options", "[\"Equipment description\",\"Lease term and payment\",\"Maintenance and insurance\",\"All of the above\"]");
    record27.set("correct_answer", "All of the above");
    record27.set("explanation", "Key sections of a lease agreement include equipment description, lease term and payment, maintenance, insurance, and default provisions.");
    record27.set("order", 8);
  app.save(record27);

  const record28 = new Record(collection);
    record28.set("quiz_id", "quiz_3_3");
    record28.set("question_text", "What is a risk mitigation strategy?");
    record28.set("question_type", "multiple_choice");
    record28.set("options", "[\"Ignore risks\",\"Budget carefully and maintain equipment\",\"Accept all risks\",\"Don't negotiate\"]");
    record28.set("correct_answer", "Budget carefully and maintain equipment");
    record28.set("explanation", "Risk mitigation strategies include budgeting carefully, maintaining equipment, and understanding all terms.");
    record28.set("order", 9);
  app.save(record28);

  const record29 = new Record(collection);
    record29.set("quiz_id", "quiz_3_3");
    record29.set("question_text", "What is a lease negotiation tip?");
    record29.set("question_type", "multiple_choice");
    record29.set("options", "[\"Accept standard terms\",\"Don't compare options\",\"Know your needs and compare options\",\"Ignore market rates\"]");
    record29.set("correct_answer", "Know your needs and compare options");
    record29.set("explanation", "A key negotiation tip is to know your needs and compare multiple options before committing to a lease.");
    record29.set("order", 10);
  app.save(record29);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})