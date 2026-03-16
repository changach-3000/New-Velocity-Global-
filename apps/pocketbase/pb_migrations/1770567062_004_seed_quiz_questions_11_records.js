/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "{{quiz_id_1}}");
    record0.set("question_text", "What is the primary difference between operating and finance leases?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"Operating leases are short-term; finance leases are long-term\", \"Operating leases transfer ownership; finance leases do not\", \"Finance leases transfer substantially all risks and rewards; operating leases do not\", \"There is no difference in accounting treatment\"]");
    record0.set("correct_answer", "Finance leases transfer substantially all risks and rewards; operating leases do not");
    record0.set("explanation", "The key distinction is that finance leases transfer substantially all the risks and rewards of ownership to the lessee, while operating leases do not.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "{{quiz_id_1}}");
    record1.set("question_text", "Which accounting standard governs lease accounting?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"ASC 840\", \"ASC 842\", \"IFRS 15\", \"IFRS 17\"]");
    record1.set("correct_answer", "ASC 842");
    record1.set("explanation", "ASC 842 is the current U.S. GAAP standard for lease accounting, effective for public companies in 2019.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "{{quiz_id_1}}");
    record2.set("question_text", "What constitutes a lease under IFRS 16?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"Any agreement to use an asset\", \"An agreement that conveys the right to control the use of an identified asset for a period of time\", \"Only agreements with fixed payments\", \"Only agreements longer than one year\"]");
    record2.set("correct_answer", "An agreement that conveys the right to control the use of an identified asset for a period of time");
    record2.set("explanation", "IFRS 16 defines a lease as a contract that conveys the right to control the use of an identified asset for a period of time in exchange for consideration.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "{{quiz_id_1}}");
    record3.set("question_text", "What is the definition of a lease term?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"The period for which the lessee has the right to use the asset\", \"The period covered by the lease contract\", \"The non-cancellable period plus periods covered by renewal options the lessee is reasonably certain to exercise\", \"The period until the asset is fully depreciated\"]");
    record3.set("correct_answer", "The non-cancellable period plus periods covered by renewal options the lessee is reasonably certain to exercise");
    record3.set("explanation", "The lease term includes the non-cancellable period plus any renewal periods the lessee is reasonably certain to exercise.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "{{quiz_id_1}}");
    record4.set("question_text", "How are lease payments typically structured?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"Fixed payments only\", \"Variable payments only\", \"Fixed payments, variable payments, residual value guarantees, and penalties\", \"Only based on asset usage\"]");
    record4.set("correct_answer", "Fixed payments, variable payments, residual value guarantees, and penalties");
    record4.set("explanation", "Lease payments can include fixed payments, variable payments (often tied to indices), residual value guarantees, and penalties for breach.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "{{quiz_id_1}}");
    record5.set("question_text", "What is the role of the lessor in a lease agreement?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "[\"To use the asset\", \"To own the asset and grant the right to use it to the lessee\", \"To maintain the asset\", \"To insure the asset\"]");
    record5.set("correct_answer", "To own the asset and grant the right to use it to the lessee");
    record5.set("explanation", "The lessor is the owner of the asset who grants the lessee the right to use it in exchange for lease payments.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "{{quiz_id_1}}");
    record6.set("question_text", "What are the key legal requirements for lease documentation?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"Written agreement only\", \"Identification of the asset, lease term, payment terms, and rights and obligations of parties\", \"Notarization required\", \"Government registration required\"]");
    record6.set("correct_answer", "Identification of the asset, lease term, payment terms, and rights and obligations of parties");
    record6.set("explanation", "Key lease documentation must identify the asset, specify the lease term, detail payment terms, and clearly define the rights and obligations of both parties.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "{{quiz_id_1}}");
    record7.set("question_text", "How do implicit rates affect lease classification?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "[\"They have no effect\", \"They determine the discount rate for present value calculations\", \"They are used to calculate the present value of lease payments for classification purposes\", \"They only affect tax treatment\"]");
    record7.set("correct_answer", "They are used to calculate the present value of lease payments for classification purposes");
    record7.set("explanation", "The implicit rate (if known) or the lessee's incremental borrowing rate is used to discount lease payments for classification and measurement purposes.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "{{quiz_id_1}}");
    record8.set("question_text", "What is the significance of the lease commencement date?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "[\"It marks when the lessee first uses the asset\", \"It is when the lease agreement is signed\", \"It is when the right-of-use asset is recognized and lease liability is measured\", \"It has no accounting significance\"]");
    record8.set("correct_answer", "It is when the right-of-use asset is recognized and lease liability is measured");
    record8.set("explanation", "The lease commencement date is when the lessee obtains the right to use the asset, and this is when the right-of-use asset and lease liability are recognized.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "{{quiz_id_1}}");
    record9.set("question_text", "How are renewal options treated in lease accounting?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "[\"They are always included in the lease term\", \"They are never included in the lease term\", \"They are included if the lessee is reasonably certain to exercise them\", \"They are treated as separate leases\"]");
    record9.set("correct_answer", "They are included if the lessee is reasonably certain to exercise them");
    record9.set("explanation", "Renewal options are included in the lease term only if the lessee is reasonably certain to exercise them based on economic incentives and other factors.");
    record9.set("order", 10);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("quiz_id", "{{quiz_id_1}}");
    record10.set("question_text", "What is the impact of residual value guarantees?");
    record10.set("question_type", "multiple_choice");
    record10.set("options", "[\"They reduce the lease liability\", \"They increase the lease liability and are included in lease payments\", \"They have no accounting impact\", \"They only affect tax treatment\"]");
    record10.set("correct_answer", "They increase the lease liability and are included in lease payments");
    record10.set("explanation", "Residual value guarantees are included in the measurement of the lease liability as they represent additional payments the lessee must make.");
    record10.set("order", 11);
  app.save(record10);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})