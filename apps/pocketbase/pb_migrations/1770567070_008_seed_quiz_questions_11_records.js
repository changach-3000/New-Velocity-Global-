/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "{{quiz_id_5}}");
    record0.set("question_text", "What are the main risks in lease agreements?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"There are no risks\", \"Credit risk, operational risk, market risk, and legal risk\", \"Only payment risk\", \"Only lessor risks\"]");
    record0.set("correct_answer", "Credit risk, operational risk, market risk, and legal risk");
    record0.set("explanation", "Lease agreements involve multiple risks including credit risk (lessor default), operational risk (asset performance), market risk (value changes), and legal risk.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "{{quiz_id_5}}");
    record1.set("question_text", "How do you identify credit risk in leases?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"Credit risk does not exist\", \"Assess the lessee's financial condition, payment history, and ability to meet obligations\", \"Only the lessor faces credit risk\", \"Credit risk is always the same\"]");
    record1.set("correct_answer", "Assess the lessee's financial condition, payment history, and ability to meet obligations");
    record1.set("explanation", "Credit risk is identified by analyzing the lessee's financial statements, credit rating, payment history, and overall ability to meet lease obligations.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "{{quiz_id_5}}");
    record2.set("question_text", "What is operational risk in leasing?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"Risk that the asset will not function\", \"Risk that the asset may not perform as expected or may become obsolete\", \"Risk that payments will be late\", \"Risk that the lessor will fail\"]");
    record2.set("correct_answer", "Risk that the asset may not perform as expected or may become obsolete");
    record2.set("explanation", "Operational risk includes the risk that the asset may not perform as expected, may become obsolete, or may require unexpected maintenance.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "{{quiz_id_5}}");
    record3.set("question_text", "How do you mitigate market risk?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"Market risk cannot be mitigated\", \"Use fixed lease terms, include residual value guarantees, and diversify assets\", \"Only the lessor can mitigate market risk\", \"Market risk is always the lessee's responsibility\"]");
    record3.set("correct_answer", "Use fixed lease terms, include residual value guarantees, and diversify assets");
    record3.set("explanation", "Market risk can be mitigated through fixed lease terms, residual value guarantees, and diversifying the lease portfolio across different assets and markets.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "{{quiz_id_5}}");
    record4.set("question_text", "What is the role of insurance in risk management?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"Insurance is not necessary\", \"Insurance transfers certain risks to insurers and protects against asset loss or liability\", \"Only the lessor needs insurance\", \"Insurance eliminates all risks\"]");
    record4.set("correct_answer", "Insurance transfers certain risks to insurers and protects against asset loss or liability");
    record4.set("explanation", "Insurance is a key risk management tool that transfers certain risks (such as property damage or liability) to insurance companies.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "{{quiz_id_5}}");
    record5.set("question_text", "How do you handle default situations?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "[\"Default cannot occur\", \"Follow the lease agreement's default provisions, provide notice, allow cure periods, and pursue remedies\", \"Immediately terminate the lease\", \"Default is always forgiven\"]");
    record5.set("correct_answer", "Follow the lease agreement's default provisions, provide notice, allow cure periods, and pursue remedies");
    record5.set("explanation", "Default situations should be handled according to the lease agreement, including providing notice, allowing reasonable cure periods, and pursuing available remedies.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "{{quiz_id_5}}");
    record6.set("question_text", "What are dispute resolution mechanisms?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"Disputes cannot be resolved\", \"Negotiation, mediation, arbitration, and litigation\", \"Only litigation is available\", \"Disputes are always resolved in favor of the lessor\"]");
    record6.set("correct_answer", "Negotiation, mediation, arbitration, and litigation");
    record6.set("explanation", "Dispute resolution mechanisms include negotiation (direct discussion), mediation (third-party facilitation), arbitration (binding decision), and litigation (court proceedings).");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "{{quiz_id_5}}");
    record7.set("question_text", "How do you structure remedies for breach?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "[\"Breaches cannot be remedied\", \"Define specific remedies such as cure rights, damages, and termination rights\", \"Only the lessor can pursue remedies\", \"Remedies are always unlimited\"]");
    record7.set("correct_answer", "Define specific remedies such as cure rights, damages, and termination rights");
    record7.set("explanation", "Remedies for breach should be clearly defined in the lease, including cure rights, damages calculations, and termination rights.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "{{quiz_id_5}}");
    record8.set("question_text", "What is the impact of force majeure clauses?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "[\"Force majeure clauses have no effect\", \"They excuse performance during unforeseeable events beyond parties' control\", \"They only protect the lessor\", \"They eliminate all obligations\"]");
    record8.set("correct_answer", "They excuse performance during unforeseeable events beyond parties' control");
    record8.set("explanation", "Force majeure clauses excuse performance during unforeseeable events (such as natural disasters) that are beyond the parties' control.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "{{quiz_id_5}}");
    record9.set("question_text", "How do you manage residual value risk?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "[\"Residual value risk does not exist\", \"Use residual value guarantees, insurance, and conservative estimates\", \"Only the lessor faces residual value risk\", \"Residual value is always certain\"]");
    record9.set("correct_answer", "Use residual value guarantees, insurance, and conservative estimates");
    record9.set("explanation", "Residual value risk is managed through residual value guarantees, insurance coverage, and conservative estimates of asset value at lease end.");
    record9.set("order", 10);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("quiz_id", "{{quiz_id_5}}");
    record10.set("question_text", "What are early termination risks?");
    record10.set("question_type", "multiple_choice");
    record10.set("options", "[\"Early termination is not possible\", \"Risk of lessee terminating early, resulting in lost revenue and asset recovery challenges\", \"Only the lessor can terminate early\", \"Early termination has no consequences\"]");
    record10.set("correct_answer", "Risk of lessee terminating early, resulting in lost revenue and asset recovery challenges");
    record10.set("explanation", "Early termination risks include the lessee exercising termination rights, resulting in lost lease revenue and challenges in recovering or re-leasing the asset.");
    record10.set("order", 11);
  app.save(record10);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})