/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "{{quizzes_0}}");
    record0.set("question_text", "Which of the following is NOT a characteristic of an operating lease?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "A) Lessor retains ownership risks and benefits|B) Lease is typically cancellable|C) Lessee capitalizes the asset on balance sheet|D) Lease payments are fully deductible");
    record0.set("correct_answer", "C");
    record0.set("explanation", "Operating leases are NOT capitalized on the lessee balance sheet under ASC 842 (though ROU asset is recognized). Capital leases are capitalized. The other options are all characteristics of operating leases.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "{{quizzes_0}}");
    record1.set("question_text", "A company leases equipment for 4 years with a fair value of $100,000. The equipment has an 8-year useful life. The lease includes a bargain purchase option for $5,000. How should this lease be classified?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "A) Operating lease|B) Capital lease|C) Sale-leaseback|D) Synthetic lease");
    record1.set("correct_answer", "B");
    record1.set("explanation", "This lease meets the capital lease criteria: (1) Bargain purchase option test is met ($5K << $100K fair value), (2) Lease term test is met (4 years = 50% of 8-year life, though < 75%), (3) The bargain purchase option alone is sufficient for capital lease classification.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "{{quizzes_0}}");
    record2.set("question_text", "A company has an operating lease with annual payments of $50,000. The company tax rate is 21%. What is the annual tax savings from the lease deduction?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "A) $10,500|B) $50,000|C) $39,500|D) $29,000");
    record2.set("correct_answer", "A");
    record2.set("explanation", "Tax savings = Lease deduction \u00d7 Tax rate = $50,000 \u00d7 21% = $10,500. The entire lease payment is deductible as a business expense.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "{{quizzes_0}}");
    record3.set("question_text", "Under ASC 842, how are operating leases treated on the balance sheet?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "A) Off-balance sheet|B) Recognized as ROU asset and lease liability|C) Recognized only as expense|D) Recognized only as deferred tax asset");
    record3.set("correct_answer", "B");
    record3.set("explanation", "ASC 842 requires all leases (operating and finance) to be recognized on the balance sheet as a right-of-use (ROU) asset and lease liability. This is a significant change from prior accounting standards.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "{{quizzes_0}}");
    record4.set("question_text", "A company is deciding between leasing and buying equipment costing $200,000. The lease payment is $6,000/month. The company can borrow at 5% and has a 21% tax rate. Which analysis should be performed?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "A) Simple payback analysis|B) After-tax cost of leasing vs. after-tax cost of buying|C) Book value comparison|D) Gross profit analysis");
    record4.set("correct_answer", "B");
    record4.set("explanation", "Lease vs. buy analysis requires comparing the after-tax cost of leasing (lease payments less tax savings) with the after-tax cost of buying (purchase price less depreciation and interest tax savings). This accounts for the time value of money and tax effects.");
    record4.set("order", 5);
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})