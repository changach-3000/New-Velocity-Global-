/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "{{quiz_id_3}}");
    record0.set("question_text", "What are the key negotiation objectives in lease deals?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"Minimize lease payments only\", \"Maximize lessor profits\", \"Achieve favorable terms, manage costs, ensure flexibility, and maintain good relationships\", \"Extend the lease term indefinitely\"]");
    record0.set("correct_answer", "Achieve favorable terms, manage costs, ensure flexibility, and maintain good relationships");
    record0.set("explanation", "Key negotiation objectives include securing favorable payment terms, managing total costs, maintaining operational flexibility, and preserving the business relationship.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "{{quiz_id_3}}");
    record1.set("question_text", "How do you structure a win-win lease agreement?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"One party must win and one must lose\", \"Identify mutual interests, create value through creative terms, and ensure both parties benefit\", \"Always split the difference\", \"Favor the party with more bargaining power\"]");
    record1.set("correct_answer", "Identify mutual interests, create value through creative terms, and ensure both parties benefit");
    record1.set("explanation", "Win-win agreements are structured by identifying shared interests, creating value through creative solutions, and ensuring both parties achieve their key objectives.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "{{quiz_id_3}}");
    record2.set("question_text", "What is the role of market analysis in negotiations?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"It has no relevance\", \"It provides benchmarks for fair pricing and terms\", \"It only benefits the lessor\", \"It is used only for marketing\"]");
    record2.set("correct_answer", "It provides benchmarks for fair pricing and terms");
    record2.set("explanation", "Market analysis provides data on comparable leases, pricing trends, and standard terms, which helps establish fair negotiating positions.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "{{quiz_id_3}}");
    record3.set("question_text", "How do you evaluate lessor proposals?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"Accept the first proposal\", \"Analyze total cost, payment structure, flexibility, and risk allocation\", \"Only compare payment amounts\", \"Reject all proposals\"]");
    record3.set("correct_answer", "Analyze total cost, payment structure, flexibility, and risk allocation");
    record3.set("explanation", "Lessor proposals should be evaluated comprehensively, considering total cost, payment structure, flexibility provisions, and how risks are allocated.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "{{quiz_id_3}}");
    record4.set("question_text", "What are common lease negotiation tactics?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"Deception and misrepresentation\", \"Anchoring, bundling, trading concessions, and creating alternatives\", \"Threatening legal action\", \"Refusing to negotiate\"]");
    record4.set("correct_answer", "Anchoring, bundling, trading concessions, and creating alternatives");
    record4.set("explanation", "Effective negotiation tactics include anchoring (setting initial positions), bundling (combining issues), trading concessions, and developing alternative proposals.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "{{quiz_id_3}}");
    record5.set("question_text", "How do you handle escalation clauses?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "[\"Always accept the lessor's proposed escalation\", \"Negotiate caps on escalation, tie to specific indices, and ensure predictability\", \"Refuse all escalation clauses\", \"Escalate payments annually by a fixed percentage\"]");
    record5.set("correct_answer", "Negotiate caps on escalation, tie to specific indices, and ensure predictability");
    record5.set("explanation", "Escalation clauses should be negotiated to include caps, tie to objective indices (like CPI), and provide payment predictability.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "{{quiz_id_3}}");
    record6.set("question_text", "What is the importance of renewal terms?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"Renewal terms are not important\", \"They provide flexibility and cost certainty for future periods\", \"They only benefit the lessor\", \"They should always be at the lessor's discretion\"]");
    record6.set("correct_answer", "They provide flexibility and cost certainty for future periods");
    record6.set("explanation", "Renewal terms are critical as they provide the lessee with flexibility to continue using the asset and allow for cost planning beyond the initial lease term.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "{{quiz_id_3}}");
    record7.set("question_text", "How do you negotiate maintenance responsibilities?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "[\"The lessee should assume all maintenance\", \"The lessor should assume all maintenance\", \"Clearly define maintenance obligations, costs, and standards\", \"Maintenance is not negotiable\"]");
    record7.set("correct_answer", "Clearly define maintenance obligations, costs, and standards");
    record7.set("explanation", "Maintenance responsibilities should be clearly defined, including who is responsible for different types of maintenance and the standards to be maintained.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "{{quiz_id_3}}");
    record8.set("question_text", "What are key termination provisions?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "[\"Leases cannot be terminated\", \"Notice periods, termination fees, and conditions for early termination\", \"Only the lessor can terminate\", \"Termination is always free\"]");
    record8.set("correct_answer", "Notice periods, termination fees, and conditions for early termination");
    record8.set("explanation", "Key termination provisions include required notice periods, any termination fees or penalties, and the conditions under which early termination is permitted.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "{{quiz_id_3}}");
    record9.set("question_text", "How do you structure default and remedies?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "[\"Default is not possible\", \"Define default events, notice requirements, cure periods, and available remedies\", \"Only the lessor can default\", \"Remedies are unlimited\"]");
    record9.set("correct_answer", "Define default events, notice requirements, cure periods, and available remedies");
    record9.set("explanation", "Default provisions should clearly define what constitutes default, provide notice and cure periods, and specify the remedies available to each party.");
    record9.set("order", 10);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("quiz_id", "{{quiz_id_3}}");
    record10.set("question_text", "What is the role of insurance and indemnification?");
    record10.set("question_type", "multiple_choice");
    record10.set("options", "[\"Insurance is not necessary\", \"Specify insurance requirements, coverage limits, and indemnification obligations\", \"Only the lessor needs insurance\", \"Insurance is the lessee's sole responsibility\"]");
    record10.set("correct_answer", "Specify insurance requirements, coverage limits, and indemnification obligations");
    record10.set("explanation", "Insurance and indemnification provisions should specify required coverage, limits, who maintains the insurance, and indemnification obligations for each party.");
    record10.set("order", 11);
  app.save(record10);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})