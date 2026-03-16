/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "module_4_kyc_quiz");
    record0.set("question_text", "Which document is typically required during the \"KYC\" (Know Your Customer) phase on a global platform?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[{\"label\":\"A\",\"text\":\"Certificate of Incorporation\",\"correct\":true,\"feedback\":\"Correct! Certificate of Incorporation is a key document required during KYC verification to establish the legal identity and legitimacy of a business entity.\"},{\"label\":\"B\",\"text\":\"Product user manual\",\"correct\":false,\"feedback\":\"Not quite. Product user manuals are operational documents, not required for KYC verification purposes.\"},{\"label\":\"C\",\"text\":\"Employee vacation schedule\",\"correct\":false,\"feedback\":\"Not quite. Employee vacation schedules are internal HR documents and are not relevant to KYC verification.\"},{\"label\":\"D\",\"text\":\"Marketing Brochure\",\"correct\":false,\"feedback\":\"Not quite. Marketing brochures are promotional materials and are not required for KYC compliance verification.\"}]");
    record0.set("correct_answer", "A");
    record0.set("order", 1);
    record0.set("explanation", "Certificate of Incorporation is a fundamental document required during KYC verification to establish the legal identity and legitimacy of a business entity on a global platform.");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})