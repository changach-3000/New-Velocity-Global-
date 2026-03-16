/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "pbc_1349215296_1");
    record0.set("question_text", "What is the primary criterion for a finance lease classification?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"Lease transfers ownership\",\"Lease term \u2265 75% of asset life\",\"PV of payments \u2265 90% of fair value\",\"All of the above\"]");
    record0.set("correct_answer", "All of the above");
    record0.set("explanation", "A lease is classified as a finance lease if ANY of the following criteria are met: (1) Lease transfers ownership, (2) Lease contains purchase option reasonably certain to exercise, (3) Lease term \u226575% of asset economic life, (4) PV of lease payments \u226590% of asset fair value, (5) Asset is specialized with no alternative use. In this case, all criteria are listed as possible reasons for finance lease classification.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "pbc_1349215296_1");
    record1.set("question_text", "What is recognized at lease commencement for a finance lease (lessor)?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"Lease receivable\",\"Lease income\",\"Depreciation expense\",\"Lease liability\"]");
    record1.set("correct_answer", "Lease receivable");
    record1.set("explanation", "For a finance lease from the lessor perspective, at lease commencement the lessor derecognizes the underlying asset and recognizes a lease receivable. The lease receivable represents the lessor right to receive lease payments from the lessee.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "pbc_1349215296_1");
    record2.set("question_text", "What is recognized at lease commencement for an operating lease (lessor)?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"Lease receivable\",\"Lease income\",\"Asset retained on balance sheet\",\"Lease liability\"]");
    record2.set("correct_answer", "Asset retained on balance sheet");
    record2.set("explanation", "For an operating lease from the lessor perspective, at lease commencement the lessor retains the underlying asset on the balance sheet. The lessor continues to own and depreciate the asset while recognizing lease income over the lease term.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "pbc_1349215296_1");
    record3.set("question_text", "How is lease income recognized for an operating lease (lessor)?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"Straight-line over lease term\",\"As lease payments received\",\"Accelerated method\",\"Units of production\"]");
    record3.set("correct_answer", "Straight-line over lease term");
    record3.set("explanation", "For an operating lease, the lessor recognizes lease income on a straight-line basis over the lease term. This is consistent with the lessor retaining the asset and recognizing income from allowing the lessee to use the asset.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "pbc_1349215296_1");
    record4.set("question_text", "What is the lease receivable measured at for a finance lease (lessor)?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"Fair value of asset\",\"Lease payments\",\"Present value of lease payments plus residual value guarantee\",\"Equipment cost\"]");
    record4.set("correct_answer", "Present value of lease payments plus residual value guarantee");
    record4.set("explanation", "The lease receivable is measured at the present value of all lease payments (fixed and variable) plus any residual value guarantees. This represents the total amount the lessor expects to receive from the lessee.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "pbc_1349215296_1");
    record5.set("question_text", "What is the gain or loss on a finance lease at commencement?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "[\"Always a gain\",\"Always a loss\",\"Difference between lease receivable and asset carrying value\",\"Equal to the residual value\"]");
    record5.set("correct_answer", "Difference between lease receivable and asset carrying value");
    record5.set("explanation", "The gain or loss on a finance lease at commencement is the difference between the lease receivable (PV of lease payments plus residual guarantee) and the carrying value of the underlying asset. If the receivable exceeds the asset value, there is a gain. If the asset value exceeds the receivable, there is a loss.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "pbc_1349215296_1");
    record6.set("question_text", "How is interest income calculated on a finance lease receivable?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"Fixed amount each period\",\"Lease receivable balance multiplied by implicit rate\",\"Lease payment amount\",\"Residual value guarantee\"]");
    record6.set("correct_answer", "Lease receivable balance multiplied by implicit rate");
    record6.set("explanation", "Interest income on a finance lease receivable is calculated by multiplying the outstanding lease receivable balance by the implicit rate. This results in interest income that decreases over time as the receivable balance decreases.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "pbc_1349215296_1");
    record7.set("question_text", "What is the primary difference between finance and operating lease accounting for lessors?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "[\"Finance leases recognize receivable, operating leases retain asset\",\"Finance leases recognize income, operating leases recognize expense\",\"Finance leases are shorter term\",\"Finance leases have lower payments\"]");
    record7.set("correct_answer", "Finance leases recognize receivable, operating leases retain asset");
    record7.set("explanation", "The primary difference is that for finance leases, the lessor derecognizes the asset and recognizes a lease receivable. For operating leases, the lessor retains the asset on the balance sheet and recognizes lease income over the lease term.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "pbc_1349215296_1");
    record8.set("question_text", "What percentage of asset fair value must the PV of lease payments equal or exceed for finance lease classification?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "[\"75%\",\"80%\",\"90%\",\"100%\"]");
    record8.set("correct_answer", "90%");
    record8.set("explanation", "One of the criteria for finance lease classification is that the present value of lease payments must equal or exceed 90% of the fair value of the underlying asset. This indicates that the lessee is paying substantially all of the asset value through lease payments.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "pbc_1349215296_1");
    record9.set("question_text", "What percentage of asset economic life must the lease term equal or exceed for finance lease classification?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "[\"50%\",\"60%\",\"75%\",\"90%\"]");
    record9.set("correct_answer", "75%");
    record9.set("explanation", "One of the criteria for finance lease classification is that the lease term must equal or exceed 75% of the economic life of the underlying asset. This indicates that the lessee is using the asset for substantially all of its economic life.");
    record9.set("order", 10);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("quiz_id", "pbc_1349215296_2");
    record10.set("question_text", "What is the primary phase of ASC 842 implementation?");
    record10.set("question_type", "multiple_choice");
    record10.set("options", "[\"Assessment\",\"Design\",\"Build\",\"All of the above\"]");
    record10.set("correct_answer", "All of the above");
    record10.set("explanation", "ASC 842 implementation involves multiple phases: Assessment (identify leases), Design (develop policies), Build (create systems), Test (verify accuracy), Transition (record entries), and Close-out (finalize). All phases are important for successful implementation.");
    record10.set("order", 1);
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("quiz_id", "pbc_1349215296_2");
    record11.set("question_text", "What is the primary deliverable of the assessment phase?");
    record11.set("question_type", "multiple_choice");
    record11.set("options", "[\"Accounting policies\",\"System design\",\"Lease inventory\",\"Test results\"]");
    record11.set("correct_answer", "Lease inventory");
    record11.set("explanation", "The primary deliverable of the assessment phase is a comprehensive lease inventory that identifies all leases in the organization and documents their key terms. This inventory is the foundation for all subsequent implementation phases.");
    record11.set("order", 2);
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("quiz_id", "pbc_1349215296_2");
    record12.set("question_text", "What is the primary practical expedient available under ASC 842?");
    record12.set("question_type", "multiple_choice");
    record12.set("options", "[\"Hindsight in determining lease term\",\"Combining lease and non-lease components\",\"Short-term lease exemption\",\"All of the above\"]");
    record12.set("correct_answer", "All of the above");
    record12.set("explanation", "ASC 842 provides several practical expedients to simplify accounting: (1) Hindsight in determining lease term and assessing options, (2) Combining lease and non-lease components, (3) Short-term lease exemption (<12 months), (4) Low-value asset exemption (<$5,000).");
    record12.set("order", 3);
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("quiz_id", "pbc_1349215296_2");
    record13.set("question_text", "What is the short-term lease exemption threshold?");
    record13.set("question_type", "multiple_choice");
    record13.set("options", "[\"6 months\",\"12 months\",\"24 months\",\"36 months\"]");
    record13.set("correct_answer", "12 months");
    record13.set("explanation", "The short-term lease exemption applies to leases with a lease term of 12 months or less. Entities can elect not to recognize a ROU asset and lease liability for short-term leases and instead recognize lease expense.");
    record13.set("order", 4);
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("quiz_id", "pbc_1349215296_2");
    record14.set("question_text", "What is the low-value asset exemption threshold?");
    record14.set("question_type", "multiple_choice");
    record14.set("options", "[\"$1,000\",\"$3,000\",\"$5,000\",\"$10,000\"]");
    record14.set("correct_answer", "$5,000");
    record14.set("explanation", "The low-value asset exemption applies to leases of assets with a value of $5,000 or less. Entities can elect not to recognize a ROU asset and lease liability for low-value asset leases and instead recognize lease expense.");
    record14.set("order", 5);
  app.save(record14);

  const record15 = new Record(collection);
    record15.set("quiz_id", "pbc_1349215296_2");
    record15.set("question_text", "What is the modified retrospective transition approach?");
    record15.set("question_type", "multiple_choice");
    record15.set("options", "[\"Recognize cumulative effect at transition date without restating prior periods\",\"Restate all prior periods\",\"Apply ASC 842 only to new leases\",\"No transition entries required\"]");
    record15.set("correct_answer", "Recognize cumulative effect at transition date without restating prior periods");
    record15.set("explanation", "The modified retrospective approach recognizes the cumulative effect of ASC 842 adoption at the transition date without restating prior periods. This is the most common transition approach used by entities.");
    record15.set("order", 6);
  app.save(record15);

  const record16 = new Record(collection);
    record16.set("quiz_id", "pbc_1349215296_2");
    record16.set("question_text", "What is the full retrospective transition approach?");
    record16.set("question_type", "multiple_choice");
    record16.set("options", "[\"Recognize cumulative effect at transition date\",\"Restate all prior periods presented\",\"Apply ASC 842 only to new leases\",\"No transition entries required\"]");
    record16.set("correct_answer", "Restate all prior periods presented");
    record16.set("explanation", "The full retrospective approach restates all prior periods presented to apply ASC 842 as if it had always been in effect. This approach provides more comparable financial statements but requires more work.");
    record16.set("order", 7);
  app.save(record16);

  const record17 = new Record(collection);
    record17.set("quiz_id", "pbc_1349215296_2");
    record17.set("question_text", "What is the primary impact of ASC 842 implementation on financial statements?");
    record17.set("question_type", "multiple_choice");
    record17.set("options", "[\"Decreases total assets\",\"Increases total liabilities\",\"Increases both assets and liabilities\",\"No impact on balance sheet\"]");
    record17.set("correct_answer", "Increases both assets and liabilities");
    record17.set("explanation", "ASC 842 implementation typically increases both total assets (ROU assets) and total liabilities (lease liabilities) on the balance sheet. This is because operating leases that were previously off-balance sheet are now recognized.");
    record17.set("order", 8);
  app.save(record17);

  const record18 = new Record(collection);
    record18.set("quiz_id", "pbc_1349215296_2");
    record18.set("question_text", "What is the primary component of a lease inventory?");
    record18.set("question_type", "multiple_choice");
    record18.set("options", "[\"Lease ID and asset description\",\"Lease term and monthly payment\",\"Residual value and discount rate\",\"All of the above\"]");
    record18.set("correct_answer", "All of the above");
    record18.set("explanation", "A comprehensive lease inventory should document all key lease terms including: Lease ID, Asset description, Lease term, Monthly payment, Residual value, Implicit rate, and Incremental borrowing rate. This information is essential for calculating ROU assets and lease liabilities.");
    record18.set("order", 9);
  app.save(record18);

  const record19 = new Record(collection);
    record19.set("quiz_id", "pbc_1349215296_2");
    record19.set("question_text", "What is the primary purpose of the design phase in ASC 842 implementation?");
    record19.set("question_type", "multiple_choice");
    record19.set("options", "[\"Identify all leases\",\"Develop accounting policies and system design\",\"Test accounting entries\",\"Record transition entries\"]");
    record19.set("correct_answer", "Develop accounting policies and system design");
    record19.set("explanation", "The design phase focuses on developing ASC 842 accounting policies and designing the systems and processes needed to support the new accounting. This phase establishes the foundation for the build and test phases.");
    record19.set("order", 10);
  app.save(record19);

  const record20 = new Record(collection);
    record20.set("quiz_id", "pbc_1349215296_3");
    record20.set("question_text", "What is the hindsight practical expedient in ASC 842?");
    record20.set("question_type", "multiple_choice");
    record20.set("options", "[\"Use hindsight in determining lease term\",\"Use hindsight in assessing renewal options\",\"Use hindsight in assessing termination penalties\",\"All of the above\"]");
    record20.set("correct_answer", "All of the above");
    record20.set("explanation", "The hindsight practical expedient allows entities to use hindsight in determining the lease term (including renewal and termination options) and in assessing whether lease payments are fixed or variable. This simplifies the initial measurement of the ROU asset and lease liability.");
    record20.set("order", 1);
  app.save(record20);

  const record21 = new Record(collection);
    record21.set("quiz_id", "pbc_1349215296_3");
    record21.set("question_text", "What is the lease and non-lease components practical expedient?");
    record21.set("question_type", "multiple_choice");
    record21.set("options", "[\"Separate lease and non-lease components\",\"Combine lease and non-lease components\",\"Account for non-lease components separately\",\"Exclude non-lease components from accounting\"]");
    record21.set("correct_answer", "Combine lease and non-lease components");
    record21.set("explanation", "The lease and non-lease components practical expedient allows entities to combine lease and non-lease components (such as equipment and maintenance) and account for them as a single lease. This simplifies accounting for bundled arrangements.");
    record21.set("order", 2);
  app.save(record21);

  const record22 = new Record(collection);
    record22.set("quiz_id", "pbc_1349215296_3");
    record22.set("question_text", "What is included in lease payments for ASC 842?");
    record22.set("question_type", "multiple_choice");
    record22.set("options", "[\"Fixed payments only\",\"Variable payments only\",\"Fixed payments, variable payments linked to index/rate, and residual value guarantees\",\"Lease term only\"]");
    record22.set("correct_answer", "Fixed payments, variable payments linked to index/rate, and residual value guarantees");
    record22.set("explanation", "Lease payments include: (1) Fixed payments, (2) Variable payments that are linked to an index or rate (such as inflation), (3) Residual value guarantees, and (4) Termination penalties if reasonably certain to be incurred. Variable payments contingent on performance are not included.");
    record22.set("order", 3);
  app.save(record22);

  const record23 = new Record(collection);
    record23.set("quiz_id", "pbc_1349215296_3");
    record23.set("question_text", "How are variable lease payments linked to an index or rate treated?");
    record23.set("question_type", "multiple_choice");
    record23.set("options", "[\"Excluded from lease liability\",\"Included in lease liability\",\"Recognized as expense when incurred\",\"Recognized as contingent liability\"]");
    record23.set("correct_answer", "Included in lease liability");
    record23.set("explanation", "Variable lease payments that are linked to an index or rate (such as inflation) are included in the measurement of the lease liability at the present value of the expected payments. Variable payments contingent on performance are not included.");
    record23.set("order", 4);
  app.save(record23);

  const record24 = new Record(collection);
    record24.set("quiz_id", "pbc_1349215296_3");
    record24.set("question_text", "What is a residual value guarantee?");
    record24.set("question_type", "multiple_choice");
    record24.set("options", "[\"Lessor guarantee of asset value\",\"Lessee guarantee of asset residual value\",\"Guarantee of lease payment amount\",\"Guarantee of asset condition\"]");
    record24.set("correct_answer", "Lessee guarantee of asset residual value");
    record24.set("explanation", "A residual value guarantee is a guarantee by the lessee that the asset will have a specified value at the end of the lease term. The guaranteed amount is included in the lease payments and measured at present value in the lease liability.");
    record24.set("order", 5);
  app.save(record24);

  const record25 = new Record(collection);
    record25.set("quiz_id", "pbc_1349215296_3");
    record25.set("question_text", "How are lease incentives treated in ASC 842?");
    record25.set("question_type", "multiple_choice");
    record25.set("options", "[\"Increase lease liability\",\"Reduce ROU asset\",\"Recognized as lease income\",\"Recognized as gain\"]");
    record25.set("correct_answer", "Reduce ROU asset");
    record25.set("explanation", "Lease incentives (such as lessor-paid improvements or free rent periods) reduce the ROU asset. The ROU asset is measured as the lease liability plus initial direct costs minus lease incentives received.");
    record25.set("order", 6);
  app.save(record25);

  const record26 = new Record(collection);
    record26.set("quiz_id", "pbc_1349215296_3");
    record26.set("question_text", "What is the distinction between a lease and a service contract?");
    record26.set("question_type", "multiple_choice");
    record26.set("options", "[\"Lease has identified asset, service contract does not\",\"Lease transfers control, service contract does not\",\"Lease has fixed term, service contract does not\",\"All of the above\"]");
    record26.set("correct_answer", "All of the above");
    record26.set("explanation", "The key distinctions between a lease and a service contract are: (1) Lease involves an identified asset, service contract does not, (2) Lease transfers control of the asset to the customer, service contract does not, (3) Lease has a specified term, service contract may not. All of these factors help distinguish leases from service contracts.");
    record26.set("order", 7);
  app.save(record26);

  const record27 = new Record(collection);
    record27.set("quiz_id", "pbc_1349215296_3");
    record27.set("question_text", "What is the threshold for the short-term lease exemption?");
    record27.set("question_type", "multiple_choice");
    record27.set("options", "[\"6 months\",\"12 months\",\"24 months\",\"36 months\"]");
    record27.set("correct_answer", "12 months");
    record27.set("explanation", "The short-term lease exemption applies to leases with a lease term of 12 months or less. Entities can elect not to recognize a ROU asset and lease liability for short-term leases and instead recognize lease expense.");
    record27.set("order", 8);
  app.save(record27);

  const record28 = new Record(collection);
    record28.set("quiz_id", "pbc_1349215296_3");
    record28.set("question_text", "What is the threshold for the low-value asset exemption?");
    record28.set("question_type", "multiple_choice");
    record28.set("options", "[\"$1,000\",\"$3,000\",\"$5,000\",\"$10,000\"]");
    record28.set("correct_answer", "$5,000");
    record28.set("explanation", "The low-value asset exemption applies to leases of assets with a value of $5,000 or less. Entities can elect not to recognize a ROU asset and lease liability for low-value asset leases and instead recognize lease expense.");
    record28.set("order", 9);
  app.save(record28);

  const record29 = new Record(collection);
    record29.set("quiz_id", "pbc_1349215296_3");
    record29.set("question_text", "What is the primary benefit of using practical expedients in ASC 842?");
    record29.set("question_type", "multiple_choice");
    record29.set("options", "[\"Reduce accounting complexity\",\"Simplify lease accounting\",\"Reduce implementation costs\",\"All of the above\"]");
    record29.set("correct_answer", "All of the above");
    record29.set("explanation", "Practical expedients in ASC 842 provide significant benefits by reducing accounting complexity, simplifying lease accounting, and reducing implementation costs. These expedients allow entities to focus on material leases while using simplified accounting for immaterial or short-term leases.");
    record29.set("order", 10);
  app.save(record29);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})