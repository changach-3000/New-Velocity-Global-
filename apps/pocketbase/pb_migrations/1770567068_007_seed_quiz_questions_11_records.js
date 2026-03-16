/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "{{quiz_id_4}}");
    record0.set("question_text", "What are the tax implications of lease classification?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"Classification has no tax impact\", \"Operating leases may provide tax deductions; finance leases affect depreciation and interest deductions\", \"All leases have identical tax treatment\", \"Only lessors have tax implications\"]");
    record0.set("correct_answer", "Operating leases may provide tax deductions; finance leases affect depreciation and interest deductions");
    record0.set("explanation", "Operating leases typically allow the lessee to deduct lease payments; finance leases result in depreciation and interest deductions.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "{{quiz_id_4}}");
    record1.set("question_text", "How does ASC 842 affect financial statements?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"It has no impact\", \"It requires recognition of right-of-use assets and lease liabilities on the balance sheet\", \"It only affects the income statement\", \"It eliminates lease accounting\"]");
    record1.set("correct_answer", "It requires recognition of right-of-use assets and lease liabilities on the balance sheet");
    record1.set("explanation", "ASC 842 requires lessees to recognize right-of-use assets and lease liabilities on the balance sheet, significantly impacting financial statements.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "{{quiz_id_4}}");
    record2.set("question_text", "What is the treatment of lease incentives?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"They are recognized as income immediately\", \"They reduce the right-of-use asset and lease liability\", \"They are ignored in accounting\", \"They increase the lease liability\"]");
    record2.set("correct_answer", "They reduce the right-of-use asset and lease liability");
    record2.set("explanation", "Lease incentives (such as free rent periods or lessor contributions) reduce the right-of-use asset and lease liability measurements.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "{{quiz_id_4}}");
    record3.set("question_text", "How are initial direct costs capitalized?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"They are expensed immediately\", \"They are added to the right-of-use asset\", \"They are capitalized separately\", \"They are ignored\"]");
    record3.set("correct_answer", "They are added to the right-of-use asset");
    record3.set("explanation", "Initial direct costs (such as legal fees, commissions) are capitalized and added to the right-of-use asset.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "{{quiz_id_4}}");
    record4.set("question_text", "What is the impact of variable lease payments on taxes?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"They are not deductible\", \"They are deductible when paid if they depend on an index or rate\", \"They are always deductible\", \"They have no tax impact\"]");
    record4.set("correct_answer", "They are deductible when paid if they depend on an index or rate");
    record4.set("explanation", "Variable lease payments that depend on an index or rate are generally deductible when paid, subject to tax law limitations.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "{{quiz_id_4}}");
    record5.set("question_text", "How do you account for lease modifications?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "[\"Ignore the modification\", \"Remeasure the lease liability and adjust the right-of-use asset\", \"Treat as a new lease\", \"Modifications are not allowed\"]");
    record5.set("correct_answer", "Remeasure the lease liability and adjust the right-of-use asset");
    record5.set("explanation", "Lease modifications require remeasuring the lease liability and adjusting the right-of-use asset to reflect the changed terms.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "{{quiz_id_4}}");
    record6.set("question_text", "What is the treatment of residual value guarantees?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"They are ignored\", \"They are included in the lease liability as additional lease payments\", \"They are only relevant for the lessor\", \"They reduce the lease liability\"]");
    record6.set("correct_answer", "They are included in the lease liability as additional lease payments");
    record6.set("explanation", "Residual value guarantees are included in the measurement of the lease liability as they represent additional payments the lessee must make.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "{{quiz_id_4}}");
    record7.set("question_text", "How are sale-leaseback transactions treated?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "[\"As a simple sale\", \"The sale is deferred and the leaseback is accounted for as a lease\", \"As two separate transactions\", \"Sale-leasebacks are prohibited\"]");
    record7.set("correct_answer", "The sale is deferred and the leaseback is accounted for as a lease");
    record7.set("explanation", "In a sale-leaseback, the sale is deferred and the transaction is accounted for as a lease, with the gain/loss recognized over the lease term.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "{{quiz_id_4}}");
    record8.set("question_text", "What is the impact of lease termination on taxes?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "[\"No tax impact\", \"Gain or loss on the right-of-use asset and any termination payments are recognized\", \"Only the lessor has tax implications\", \"Termination is not taxable\"]");
    record8.set("correct_answer", "Gain or loss on the right-of-use asset and any termination payments are recognized");
    record8.set("explanation", "Upon lease termination, any gain or loss on the right-of-use asset is recognized, and termination payments are treated according to their nature.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "{{quiz_id_4}}");
    record9.set("question_text", "How do you handle related-party leases?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "[\"They are treated like any other lease\", \"They require special accounting and disclosure; terms must be at arm's length\", \"Related-party leases are prohibited\", \"They are always favorable to the lessee\"]");
    record9.set("correct_answer", "They require special accounting and disclosure; terms must be at arm's length");
    record9.set("explanation", "Related-party leases require special accounting treatment, enhanced disclosures, and terms that are comparable to arm's length transactions.");
    record9.set("order", 10);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("quiz_id", "{{quiz_id_4}}");
    record10.set("question_text", "What are the disclosure requirements for leases?");
    record10.set("question_type", "multiple_choice");
    record10.set("options", "[\"No disclosures are required\", \"Lease term, payments, right-of-use asset, lease liability, and other key information\", \"Only the lessor must disclose\", \"Disclosures are optional\"]");
    record10.set("correct_answer", "Lease term, payments, right-of-use asset, lease liability, and other key information");
    record10.set("explanation", "ASC 842 requires extensive disclosures including lease terms, payment schedules, right-of-use assets, lease liabilities, and other relevant information.");
    record10.set("order", 11);
  app.save(record10);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})