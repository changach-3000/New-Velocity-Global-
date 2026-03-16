/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "<LESSON_1_3_QUIZ_ID>");
    record0.set("question_text", "A \"Sale and Leaseback\" structure is often used to achieve which financial goal?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[{\"label\":\"A\",\"text\":\"To increase the physical number of assets owned\"},{\"label\":\"B\",\"text\":\"To avoid paying the manufacturer\"},{\"label\":\"C\",\"text\":\"To hide equipment from auditors\"},{\"label\":\"D\",\"text\":\"To monetize fixed assets and improve immediate cash flow\"}]");
    record0.set("correct_answer", "D");
    record0.set("explanation", "Correct! A Sale and Leaseback structure is commonly used to monetize fixed assets (convert them to cash) and improve immediate cash flow. The company sells an owned asset to a buyer (often a leasing company or financial institution) and simultaneously leases it back. This allows the company to unlock capital tied up in the asset while maintaining operational use of the asset. Option A is incorrect because Sale and Leaseback does not increase the number of assets owned - ownership changes but the number of assets in use remains the same. Option B is incorrect because Sale and Leaseback has nothing to do with avoiding manufacturer payments. Option C is incorrect because Sale and Leaseback transactions must be properly disclosed and accounted for under IFRS 16 and ASC 842.");
    record0.set("order", 1);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})