/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "<LESSON_5_3_QUIZ_ID>");
    record0.set("question_text", "How does Asset Remarketing help a Lessor mitigate risk?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[{\"label\":\"A\",\"text\":\"By putting a new sticker on the machine\"},{\"label\":\"B\",\"text\":\"By hiding the asset in a warehouse\"},{\"label\":\"C\",\"text\":\"By calling the lessee to ask for more money\"},{\"label\":\"D\",\"text\":\"By having a strong secondary market channel to sell or re-lease equipment after the term ends\"}]");
    record0.set("correct_answer", "D");
    record0.set("explanation", "Correct! Asset Remarketing helps a lessor mitigate risk by establishing strong secondary market channels to sell or re-lease equipment after the initial lease term ends. This strategy addresses several key risks: (1) Residual Value Risk: By having established remarketing channels, lessors can better predict and realize the residual value of equipment, reducing uncertainty about end-of-lease asset values. (2) Market Liquidity: Strong secondary markets ensure equipment can be quickly sold or re-leased, converting assets to cash and reducing holding costs. (3) Obsolescence Risk: Active remarketing helps manage technological obsolescence by finding buyers or lessees who value the equipment. (4) Portfolio Management: Effective remarketing allows lessors to manage their equipment portfolio and reinvest proceeds into new leases. Major lessors invest heavily in remarketing operations, including refurbishment centers, sales networks, and online platforms to maximize asset recovery and minimize losses.");
    record0.set("order", 1);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})