/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "quiz1");
    record0.set("question_text", "What is the primary difference between an operating lease and a finance lease?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "Operating leases are short-term with lessor retaining ownership|Finance leases are long-term with lessee assuming ownership risks|Both are identical in accounting treatment|Operating leases always cost more");
    record0.set("correct_answer", "Operating leases are short-term with lessor retaining ownership");
    record0.set("explanation", "Operating leases are typically short-term arrangements where the lessor retains ownership and risks, while finance leases are long-term with the lessee assuming most ownership risks and benefits.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "quiz1");
    record1.set("question_text", "Under IFRS 16, how are most leases accounted for?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "Off-balance sheet as operating expenses|On-balance sheet with ROU asset and lease liability|Only as footnote disclosures|No accounting recognition required");
    record1.set("correct_answer", "On-balance sheet with ROU asset and lease liability");
    record1.set("explanation", "IFRS 16 requires most leases to be recognized on the balance sheet with a right-of-use asset and corresponding lease liability.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "quiz1");
    record2.set("question_text", "Which of the following is typically a characteristic of an operating lease?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "Lessee assumes all ownership risks|Lessor retains ownership and maintenance responsibility|Automatic transfer of ownership at lease end|Lessee records depreciation on the asset");
    record2.set("correct_answer", "Lessor retains ownership and maintenance responsibility");
    record2.set("explanation", "In operating leases, the lessor typically retains ownership, bears maintenance costs, and assumes the risks of ownership.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "quiz1");
    record3.set("question_text", "What is the primary purpose of lease valuation?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "To determine the color of the asset|To calculate the present value of future lease payments|To identify the lessor|To determine tax deductions");
    record3.set("correct_answer", "To calculate the present value of future lease payments");
    record3.set("explanation", "Lease valuation determines the present value of lease payments, which is essential for accounting recognition and financial analysis.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "quiz1");
    record4.set("question_text", "True or False: Operating leases have no impact on the balance sheet under IFRS 16.");
    record4.set("question_type", "true_false");
    record4.set("options", "True|False");
    record4.set("correct_answer", "False");
    record4.set("explanation", "Under IFRS 16, operating leases are recognized on the balance sheet with a right-of-use asset and lease liability, unlike the previous accounting treatment.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "quiz2");
    record5.set("question_text", "Which accounting standard requires most leases to be recognized on the balance sheet?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "IFRS 16 and ASC 842|GAAP 2000|IAS 17 (old standard)|FASB 100");
    record5.set("correct_answer", "IFRS 16 and ASC 842");
    record5.set("explanation", "Both IFRS 16 and ASC 842 require most leases to be recognized on the balance sheet with a right-of-use asset and lease liability.");
    record5.set("order", 1);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "quiz2");
    record6.set("question_text", "What is a key disclosure requirement for leases under IFRS 16?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "Lessor name only|Detailed lease payment schedules and assumptions|Asset color and location|Employee names");
    record6.set("correct_answer", "Detailed lease payment schedules and assumptions");
    record6.set("explanation", "IFRS 16 requires detailed disclosures including lease payment schedules, key assumptions, and the composition of lease liabilities.");
    record6.set("order", 2);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "quiz2");
    record7.set("question_text", "Which of the following is NOT a compliance consideration for lease accounting?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "Proper lease classification|Accurate present value calculations|The lessor nationality|Timely recognition of lease modifications");
    record7.set("correct_answer", "The lessor nationality");
    record7.set("explanation", "Compliance focuses on proper classification, accurate calculations, and timely recognition - not on the lessor nationality.");
    record7.set("order", 3);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "quiz2");
    record8.set("question_text", "What should organizations maintain to ensure lease compliance?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "A detailed lease register tracking all leases|Only verbal agreements|Minimal documentation|No records needed");
    record8.set("correct_answer", "A detailed lease register tracking all leases");
    record8.set("explanation", "Organizations must maintain comprehensive lease registers documenting all lease agreements, terms, and modifications for compliance and audit purposes.");
    record8.set("order", 4);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "quiz2");
    record9.set("question_text", "True or False: Lease modifications do not require accounting adjustments under IFRS 16.");
    record9.set("question_type", "true_false");
    record9.set("options", "True|False");
    record9.set("correct_answer", "False");
    record9.set("explanation", "Lease modifications often require accounting adjustments to the right-of-use asset and lease liability, depending on the nature of the modification.");
    record9.set("order", 5);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("quiz_id", "quiz3");
    record10.set("question_text", "What is a common mistake in lease classification?");
    record10.set("question_type", "multiple_choice");
    record10.set("options", "Misclassifying finance leases as operating leases|Always classifying as operating|Ignoring lease terms|Relying solely on lease name");
    record10.set("correct_answer", "Misclassifying finance leases as operating leases");
    record10.set("explanation", "A common error is misclassifying leases based on form rather than substance, leading to incorrect accounting treatment.");
    record10.set("order", 1);
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("quiz_id", "quiz3");
    record11.set("question_text", "Which of the following is a red flag in lease agreements?");
    record11.set("question_type", "multiple_choice");
    record11.set("options", "Clear payment terms|Hidden fees and unfavorable residual assumptions|Transparent covenants|Flexible termination clauses");
    record11.set("correct_answer", "Hidden fees and unfavorable residual assumptions");
    record11.set("explanation", "Red flags include hidden fees, unfavorable residual value assumptions, and restrictive covenants that may indicate unfavorable lease terms.");
    record11.set("order", 2);
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("quiz_id", "quiz3");
    record12.set("question_text", "What error can result from incorrect present value calculations?");
    record12.set("question_type", "multiple_choice");
    record12.set("options", "Overstating or understating lease liabilities|No financial impact|Improved financial ratios|Reduced audit risk");
    record12.set("correct_answer", "Overstating or understating lease liabilities");
    record12.set("explanation", "Incorrect PV calculations directly impact the recognized lease liability and right-of-use asset, affecting financial statements.");
    record12.set("order", 3);
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("quiz_id", "quiz3");
    record13.set("question_text", "Why is it important to account for lease modifications?");
    record13.set("question_type", "multiple_choice");
    record13.set("options", "They have no accounting impact|They require adjustment to ROU asset and lease liability|They only affect footnotes|They are optional");
    record13.set("correct_answer", "They require adjustment to ROU asset and lease liability");
    record13.set("explanation", "Lease modifications often require remeasurement of the right-of-use asset and lease liability, impacting financial statements.");
    record13.set("order", 4);
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("quiz_id", "quiz3");
    record14.set("question_text", "True or False: Inadequate lease disclosures can lead to audit findings and regulatory issues.");
    record14.set("question_type", "true_false");
    record14.set("options", "True|False");
    record14.set("correct_answer", "True");
    record14.set("explanation", "Proper lease disclosures are essential for compliance and audit purposes. Inadequate disclosures can result in audit findings and regulatory scrutiny.");
    record14.set("order", 5);
  app.save(record14);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})