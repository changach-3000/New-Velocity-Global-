/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "pbc_1349215296");
    record0.set("question_text", "Under IFRS 16, what is the primary criterion for a contract to be classified as a lease?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "A) The contract involves the transfer of an asset\nB) The contract conveys the right to control the use of an identified asset for a period of time in exchange for consideration\nC) The contract is for a period exceeding one year\nD) The contract involves a financial institution");
    record0.set("correct_answer", "B");
    record0.set("explanation", "IFRS 16 defines a lease as a contract that conveys the right to control the use of an identified asset for a period of time in exchange for consideration. This is the fundamental definition used to determine whether a contract is a lease.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "pbc_1349215296");
    record1.set("question_text", "What is a right-of-use (ROU) asset under IFRS 16?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "A) The fair value of the leased asset at the lease commencement date\nB) The present value of lease payments\nC) The lessee's right to use the underlying asset for the lease term\nD) The residual value of the asset at the end of the lease");
    record1.set("correct_answer", "C");
    record1.set("explanation", "The ROU asset represents the lessee's right to use the underlying asset for the lease term. It is measured as the lease liability plus initial direct costs and lease payments made at or before the commencement date, less any lease incentives received.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "pbc_1349215296");
    record2.set("question_text", "Under IFRS 16, how is the lease liability initially measured?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "A) The fair value of the leased asset\nB) The present value of lease payments discounted at the interest rate implicit in the lease\nC) The total amount of all lease payments\nD) The present value of lease payments discounted at the lessee's incremental borrowing rate");
    record2.set("correct_answer", "B");
    record2.set("explanation", "The lease liability is initially measured as the present value of lease payments that are not yet paid, discounted using the interest rate implicit in the lease. If this rate cannot be readily determined, the lessee's incremental borrowing rate is used.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "pbc_1349215296");
    record3.set("question_text", "What is the key difference between IFRS 16 and ASC 842 regarding lease classification?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "A) IFRS 16 has two categories while ASC 842 has three\nB) IFRS 16 eliminates the operating/finance lease distinction for lessees, while ASC 842 retains it\nC) ASC 842 is more stringent than IFRS 16\nD) There is no significant difference");
    record3.set("correct_answer", "B");
    record3.set("explanation", "A major difference is that IFRS 16 eliminates the distinction between operating and finance leases for lessees, requiring all leases to be recognized on the balance sheet. ASC 842 retains the operating/finance lease classification for lessees, though with different accounting treatments.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "pbc_1349215296");
    record4.set("question_text", "Under ASC 842, what is the primary criterion for classifying a lease as a finance lease?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "A) The lease term is greater than 75% of the asset's economic life\nB) The present value of lease payments exceeds 90% of the asset's fair value\nC) The lease contains a bargain purchase option\nD) All of the above");
    record4.set("correct_answer", "D");
    record4.set("explanation", "ASC 842 provides multiple criteria for finance lease classification, including: (1) ownership transfer at lease end, (2) bargain purchase option, (3) lease term \u226575% of economic life, (4) PV of payments \u226590% of fair value, and (5) specialized nature of asset.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "pbc_1349215296");
    record5.set("question_text", "How does ASC 842 require operating leases to be presented on the balance sheet?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "A) They are not recognized on the balance sheet\nB) As a single lease liability and ROU asset\nC) As separate operating lease liability and ROU asset\nD) Only the lease payments are recorded as expenses");
    record5.set("correct_answer", "C");
    record5.set("explanation", "Under ASC 842, operating leases must be recognized on the balance sheet with a separate operating lease ROU asset and operating lease liability, similar to IFRS 16 but with different measurement and presentation requirements.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "pbc_1349215296");
    record6.set("question_text", "What is the lease term under IFRS 16?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "A) The fixed period of the lease agreement only\nB) The non-cancellable period plus periods covered by renewal options that the lessee is reasonably certain to exercise\nC) The period until the asset is fully depreciated\nD) The period specified in the lease contract");
    record6.set("correct_answer", "B");
    record6.set("explanation", "The lease term includes the non-cancellable period of the lease plus any periods covered by renewal options that the lessee is reasonably certain to exercise, and periods covered by termination options that the lessor is reasonably certain not to exercise.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "pbc_1349215296");
    record7.set("question_text", "Under IFRS 16, how are lease payments defined?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "A) Only the fixed payments specified in the lease\nB) Fixed payments plus variable payments that depend on an index or rate\nC) Fixed payments plus amounts expected to be paid under residual value guarantees\nD) All of the above");
    record7.set("correct_answer", "D");
    record7.set("explanation", "Lease payments include: (1) fixed payments, (2) variable payments that depend on an index or rate, (3) amounts expected to be paid under residual value guarantees, and (4) the exercise price of a purchase option if reasonably certain to be exercised.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "pbc_1349215296");
    record8.set("question_text", "What is the incremental borrowing rate in the context of lease accounting?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "A) The interest rate charged by the lessor\nB) The rate of interest that a lessee would have to pay to borrow funds for a similar term and with similar security\nC) The prime lending rate\nD) The rate implicit in the lease");
    record8.set("correct_answer", "B");
    record8.set("explanation", "The incremental borrowing rate is the rate of interest that a lessee would incur to borrow the funds necessary to obtain an asset of similar value, with similar terms and security, in a similar economic environment.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "pbc_1349215296");
    record9.set("question_text", "How should a lessee account for variable lease payments under IFRS 16?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "A) Include all variable payments in the lease liability\nB) Exclude variable payments that depend on an index or rate from the lease liability\nC) Include variable payments that depend on an index or rate in the lease liability\nD) Record variable payments as period expenses when incurred");
    record9.set("correct_answer", "C");
    record9.set("explanation", "Variable lease payments that depend on an index or rate (such as CPI) are included in the lease liability measurement. However, variable payments that do not depend on an index or rate are excluded and recognized as expenses when incurred.");
    record9.set("order", 10);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("quiz_id", "pbc_1349215296");
    record10.set("question_text", "Under IFRS 16, how is the ROU asset subsequently measured?");
    record10.set("question_type", "multiple_choice");
    record10.set("options", "A) At fair value\nB) At cost less accumulated depreciation\nC) At the present value of remaining lease payments\nD) At historical cost");
    record10.set("correct_answer", "B");
    record10.set("explanation", "After initial recognition, the ROU asset is measured using the cost model: cost less accumulated depreciation and any accumulated impairment losses. The asset is depreciated over the lease term or the asset's useful life, whichever is shorter.");
    record10.set("order", 11);
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("quiz_id", "pbc_1349215296");
    record11.set("question_text", "What is the treatment of lease modifications under IFRS 16?");
    record11.set("question_type", "multiple_choice");
    record11.set("options", "A) Always accounted for as a new lease\nB) Accounted for as a new lease only if the modification increases the scope of the lease\nC) Accounted for as a new lease if the modification increases the scope or the consideration\nD) Never accounted for as a new lease");
    record11.set("correct_answer", "C");
    record11.set("explanation", "A lease modification is accounted for as a new lease if it increases the scope of the lease (adds the right to use one or more underlying assets) or increases the consideration for the lease. Otherwise, it is accounted for as a change in the original lease.");
    record11.set("order", 12);
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("quiz_id", "pbc_1349215296");
    record12.set("question_text", "How does ASC 842 differ from IFRS 16 in the treatment of short-term leases?");
    record12.set("question_type", "multiple_choice");
    record12.set("options", "A) Both standards provide the same exemption\nB) IFRS 16 provides a short-term lease exemption; ASC 842 does not\nC) ASC 842 provides a short-term lease exemption; IFRS 16 does not\nD) Neither standard provides an exemption");
    record12.set("correct_answer", "A");
    record12.set("explanation", "Both IFRS 16 and ASC 842 provide an exemption for short-term leases (12 months or less). Lessees can elect not to recognize a ROU asset and lease liability for these leases and instead recognize lease payments as expenses.");
    record12.set("order", 13);
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("quiz_id", "pbc_1349215296");
    record13.set("question_text", "Under IFRS 16, what is the treatment of lease incentives?");
    record13.set("question_type", "multiple_choice");
    record13.set("options", "A) Recognized as a reduction in the ROU asset\nB) Recognized as a reduction in the lease liability\nC) Recognized as a reduction in the initial ROU asset\nD) Recognized as income when received");
    record13.set("correct_answer", "C");
    record13.set("explanation", "Lease incentives (such as free rent periods or lessor contributions) are deducted from the initial measurement of the ROU asset, reducing the net carrying amount of the asset.");
    record13.set("order", 14);
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("quiz_id", "pbc_1349215296");
    record14.set("question_text", "How should initial direct costs be treated under IFRS 16?");
    record14.set("question_type", "multiple_choice");
    record14.set("options", "A) Expensed immediately\nB) Added to the ROU asset\nC) Added to the lease liability\nD) Capitalized separately");
    record14.set("correct_answer", "B");
    record14.set("explanation", "Initial direct costs (such as commissions, legal fees, and costs to arrange financing) are added to the initial measurement of the ROU asset, increasing its carrying amount.");
    record14.set("order", 15);
  app.save(record14);

  const record15 = new Record(collection);
    record15.set("quiz_id", "pbc_1349215296");
    record15.set("question_text", "What is the key difference in how IFRS 16 and ASC 842 treat the interest rate implicit in the lease?");
    record15.set("question_type", "multiple_choice");
    record15.set("options", "A) IFRS 16 requires its use; ASC 842 does not\nB) ASC 842 requires its use; IFRS 16 does not\nC) Both require its use when readily determinable\nD) Neither standard uses this rate");
    record15.set("correct_answer", "C");
    record15.set("explanation", "Both IFRS 16 and ASC 842 require the use of the interest rate implicit in the lease when it can be readily determined. If not readily determinable, the lessee uses its incremental borrowing rate.");
    record15.set("order", 16);
  app.save(record15);

  const record16 = new Record(collection);
    record16.set("quiz_id", "pbc_1349215296");
    record16.set("question_text", "Under ASC 842, how is the lease liability for a finance lease subsequently measured?");
    record16.set("question_type", "multiple_choice");
    record16.set("options", "A) At amortized cost using the effective interest method\nB) At fair value\nC) At the present value of remaining lease payments\nD) At historical cost");
    record16.set("correct_answer", "A");
    record16.set("explanation", "The lease liability is subsequently measured at amortized cost using the effective interest method. Interest expense is recognized, and lease payments reduce the liability.");
    record16.set("order", 17);
  app.save(record16);

  const record17 = new Record(collection);
    record17.set("quiz_id", "pbc_1349215296");
    record17.set("question_text", "What is the treatment of residual value guarantees under IFRS 16?");
    record17.set("question_type", "multiple_choice");
    record17.set("options", "A) Not included in lease payments\nB) Included in lease payments at the expected amount to be paid\nC) Included in lease payments at the maximum amount that could be paid\nD) Recognized as a separate liability");
    record17.set("correct_answer", "B");
    record17.set("explanation", "Residual value guarantees are included in the lease payments at the amount the lessee expects to pay under the guarantee. This is the best estimate of the amount that will be paid.");
    record17.set("order", 18);
  app.save(record17);

  const record18 = new Record(collection);
    record18.set("quiz_id", "pbc_1349215296");
    record18.set("question_text", "How do IFRS 16 and ASC 842 differ in the presentation of lease-related expenses?");
    record18.set("question_type", "multiple_choice");
    record18.set("options", "A) IFRS 16 requires separate presentation; ASC 842 does not\nB) ASC 842 requires separate presentation; IFRS 16 does not\nC) Both require the same presentation\nD) The standards do not address presentation");
    record18.set("correct_answer", "A");
    record18.set("explanation", "IFRS 16 requires lessees to present depreciation of the ROU asset and interest on the lease liability separately. ASC 842 allows more flexibility in presentation, particularly for operating leases.");
    record18.set("order", 19);
  app.save(record18);

  const record19 = new Record(collection);
    record19.set("quiz_id", "pbc_1349215296");
    record19.set("question_text", "What is the convergence status between IFRS 16 and ASC 842?");
    record19.set("question_type", "multiple_choice");
    record19.set("options", "A) The standards are fully converged\nB) The FASB and IASB have agreed to converge the standards in the future\nC) The standards remain significantly different with no convergence planned\nD) ASC 842 is being replaced with IFRS 16");
    record19.set("correct_answer", "B");
    record19.set("explanation", "While IFRS 16 and ASC 842 are substantially similar, they have some differences. The FASB and IASB have indicated their intention to work toward convergence, though significant differences remain in areas such as lease classification for lessees.");
    record19.set("order", 20);
  app.save(record19);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})