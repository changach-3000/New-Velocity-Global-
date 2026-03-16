/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "{{quiz_id_2}}");
    record0.set("question_text", "What is Net Present Value (NPV) in lease analysis?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"The total of all lease payments\", \"The present value of all future cash flows minus the initial investment\", \"The annual lease payment amount\", \"The residual value of the asset\"]");
    record0.set("correct_answer", "The present value of all future cash flows minus the initial investment");
    record0.set("explanation", "NPV is the present value of all future cash flows (both inflows and outflows) discounted at an appropriate rate, minus the initial investment.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "{{quiz_id_2}}");
    record1.set("question_text", "How is Internal Rate of Return (IRR) calculated for leases?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"It is the average of all lease payments\", \"It is the discount rate that makes the NPV of cash flows equal to zero\", \"It is the annual percentage increase in lease payments\", \"It is the lessor's profit margin\"]");
    record1.set("correct_answer", "It is the discount rate that makes the NPV of cash flows equal to zero");
    record1.set("explanation", "IRR is the discount rate at which the net present value of all cash flows equals zero, representing the effective return on the lease.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "{{quiz_id_2}}");
    record2.set("question_text", "What is the discount rate used in lease valuation?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"The prime rate\", \"The implicit rate in the lease or the lessee's incremental borrowing rate\", \"The inflation rate\", \"The risk-free rate\"]");
    record2.set("correct_answer", "The implicit rate in the lease or the lessee's incremental borrowing rate");
    record2.set("explanation", "The discount rate is either the implicit rate (if known) or the lessee's incremental borrowing rate, which reflects the lessee's credit risk.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "{{quiz_id_2}}");
    record3.set("question_text", "How do you calculate the present value of lease payments?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"Sum all lease payments\", \"Discount each lease payment using the appropriate discount rate and sum them\", \"Multiply the average payment by the number of periods\", \"Use the lessor's cost basis\"]");
    record3.set("correct_answer", "Discount each lease payment using the appropriate discount rate and sum them");
    record3.set("explanation", "Each lease payment is discounted to present value using the appropriate discount rate, and all present values are summed.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "{{quiz_id_2}}");
    record4.set("question_text", "What is the impact of residual value on lease valuation?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"It increases the lease liability\", \"It decreases the lease liability\", \"It has no impact on valuation\", \"It only affects the lessor's accounting\"]");
    record4.set("correct_answer", "It decreases the lease liability");
    record4.set("explanation", "The expected residual value (if guaranteed by the lessee) is included in lease payments and increases the liability, but the residual value itself reduces the present value of payments needed.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "{{quiz_id_2}}");
    record5.set("question_text", "How do you compare lease vs buy decisions?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "[\"Compare total lease payments to purchase price\", \"Calculate NPV of leasing vs NPV of buying and choose the option with lower cost\", \"Always choose the option with lower annual payments\", \"Consider only tax implications\"]");
    record5.set("correct_answer", "Calculate NPV of leasing vs NPV of buying and choose the option with lower cost");
    record5.set("explanation", "A proper lease vs buy analysis compares the NPV of all costs associated with leasing versus purchasing, including financing costs, taxes, and residual value.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "{{quiz_id_2}}");
    record6.set("question_text", "What is sensitivity analysis in lease valuation?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"Testing how sensitive the lessor is to payment delays\", \"Analyzing how changes in key assumptions affect the lease valuation\", \"Measuring the lessee's financial sensitivity\", \"Assessing the asset's sensitivity to market conditions\"]");
    record6.set("correct_answer", "Analyzing how changes in key assumptions affect the lease valuation");
    record6.set("explanation", "Sensitivity analysis examines how changes in key variables (discount rate, lease term, residual value) impact the NPV and other valuation metrics.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "{{quiz_id_2}}");
    record7.set("question_text", "How are contingent lease payments treated?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "[\"They are always included in the lease liability\", \"They are never included\", \"They are included in the lease liability only if it is probable they will be paid\", \"They are treated as separate transactions\"]");
    record7.set("correct_answer", "They are included in the lease liability only if it is probable they will be paid");
    record7.set("explanation", "Contingent lease payments (such as those based on usage or indices) are included in the lease liability only when it is probable they will be incurred.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "{{quiz_id_2}}");
    record8.set("question_text", "What is the role of the incremental borrowing rate?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "[\"It is the rate the lessor charges\", \"It is the rate at which the lessee could borrow funds to purchase the asset\", \"It is the rate used to discount lease payments when the implicit rate is not known\", \"Both B and C\"]");
    record8.set("correct_answer", "Both B and C");
    record8.set("explanation", "The incremental borrowing rate is the rate at which the lessee could borrow to purchase the asset, and it's used as the discount rate when the implicit rate is unknown.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "{{quiz_id_2}}");
    record9.set("question_text", "How do you value renewal options?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "[\"They have no value\", \"Estimate the probability of exercise and discount the renewal payments\", \"Use the original lease rate\", \"They are always included at full value\"]");
    record9.set("correct_answer", "Estimate the probability of exercise and discount the renewal payments");
    record9.set("explanation", "Renewal options are valued by estimating the probability the lessee will exercise them and discounting the expected renewal payments.");
    record9.set("order", 10);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("quiz_id", "{{quiz_id_2}}");
    record10.set("question_text", "What is the impact of variable lease payments?");
    record10.set("question_type", "multiple_choice");
    record10.set("options", "[\"They are always excluded from the lease liability\", \"They are included if they depend on an index or rate\", \"They are never predictable\", \"They only affect the lessor\"]");
    record10.set("correct_answer", "They are included if they depend on an index or rate");
    record10.set("explanation", "Variable lease payments that depend on an index or rate are included in the lease liability based on the index or rate at the lease commencement date.");
    record10.set("order", 11);
  app.save(record10);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})