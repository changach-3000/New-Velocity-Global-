/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "Practical Implementation Quiz");
    record0.set("question_text", "What are the key journal entries for initial lease recognition?");
    record0.set("question_type", "multiple_choice");
    record0.set("correct_answer", "Initial recognition entries record the ROU asset and lease liability at the present value of lease payments");
    record0.set("explanation", "Initial lease recognition requires recording both the right-of-use asset and the corresponding lease liability");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "Practical Implementation Quiz");
    record1.set("question_text", "How should ROU assets and lease liabilities be presented on the balance sheet?");
    record1.set("question_type", "multiple_choice");
    record1.set("correct_answer", "ROU assets are presented as non-current assets, lease liabilities are split between current and non-current portions");
    record1.set("explanation", "Balance sheet presentation requires separate classification of current and non-current lease liabilities");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "Practical Implementation Quiz");
    record2.set("question_text", "What is the impact of lease accounting on the cash flow statement?");
    record2.set("question_type", "multiple_choice");
    record2.set("correct_answer", "Interest portion is operating activity, principal portion is financing activity");
    record2.set("explanation", "Lease payments are split between operating and financing activities based on the interest and principal components");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "Practical Implementation Quiz");
    record3.set("question_text", "What are common pitfalls in lease accounting implementation?");
    record3.set("question_type", "multiple_choice");
    record3.set("correct_answer", "Lease identification errors, incorrect lease term determination, improper discount rate selection, and inadequate disclosures");
    record3.set("explanation", "Common implementation errors include misidentifying leases, incorrectly determining lease terms, selecting wrong discount rates, and failing to provide adequate disclosures");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "Practical Implementation Quiz");
    record4.set("question_text", "How should lease modifications be accounted for in journal entries?");
    record4.set("question_type", "multiple_choice");
    record4.set("correct_answer", "Lease modifications require remeasurement of the ROU asset and lease liability with adjustments to journal entries");
    record4.set("explanation", "Lease modifications trigger remeasurement of both the ROU asset and lease liability, requiring updated journal entries");
    record4.set("order", 5);
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})