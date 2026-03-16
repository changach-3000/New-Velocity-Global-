/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "{{QUIZ_ID}}");
    record0.set("question_text", "In NPV analysis for lease vs. buy decisions, what does a negative NPV indicate?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"Leasing is more economical\", \"Buying is more economical\", \"The decision is neutral\", \"Additional analysis is required\"]");
    record0.set("correct_answer", "Leasing is more economical");
    record0.set("explanation", "In lease vs. buy NPV analysis, NPV = PV(Lease Costs) - PV(Buy Costs). A negative NPV means lease costs are lower than buy costs, making leasing the more economical option.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "{{QUIZ_ID}}");
    record1.set("question_text", "Which of the following is NOT a component of the NPV calculation in lease vs. buy analysis?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"Depreciation tax shield\", \"Residual value\", \"Employee salary costs\", \"Maintenance cost differentials\"]");
    record1.set("correct_answer", "Employee salary costs");
    record1.set("explanation", "Employee salary costs are not relevant to the lease vs. buy decision as they are incurred regardless of whether the asset is leased or purchased. The NPV calculation focuses on costs that differ between the two options.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "{{QUIZ_ID}}");
    record2.set("question_text", "What does the IRR represent in lease vs. buy analysis?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"The discount rate at which PV of lease costs equals PV of buy costs\", \"The company's cost of capital\", \"The annual lease payment\", \"The asset's depreciation rate\"]");
    record2.set("correct_answer", "The discount rate at which PV of lease costs equals PV of buy costs");
    record2.set("explanation", "The IRR in lease vs. buy analysis is the discount rate that makes the present value of lease costs equal to the present value of buy costs. If the IRR exceeds the company's cost of capital, leasing is advantageous.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "{{QUIZ_ID}}");
    record3.set("question_text", "How does opportunity cost of capital affect the lease vs. buy decision?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"It increases the attractiveness of buying\", \"It increases the attractiveness of leasing\", \"It has no impact on the decision\", \"It only affects the residual value\"]");
    record3.set("correct_answer", "It increases the attractiveness of leasing");
    record3.set("explanation", "When a company buys an asset, it ties up capital that could be invested elsewhere. The opportunity cost of this capital makes leasing more attractive because it preserves capital for higher-return investments.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "{{QUIZ_ID}}");
    record4.set("question_text", "In a lease vs. buy analysis, if the IRR is 6% and the company's cost of capital is 8%, which option is more advantageous?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"Leasing is more advantageous\", \"Buying is more advantageous\", \"Both options are equally attractive\", \"The decision depends on tax rates\"]");
    record4.set("correct_answer", "Buying is more advantageous");
    record4.set("explanation", "When the IRR (6%) is below the company's cost of capital (8%), buying is more advantageous. The IRR represents the break-even discount rate; if it's below the cost of capital, the buy option provides better returns.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "{{QUIZ_ID}}");
    record5.set("question_text", "What is the primary advantage of a synthetic lease structure?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "[\"It eliminates all lease payments\", \"It provides off-balance-sheet accounting treatment while maintaining tax benefits\", \"It reduces the cost of capital\", \"It eliminates the need for residual value guarantees\"]");
    record5.set("correct_answer", "It provides off-balance-sheet accounting treatment while maintaining tax benefits");
    record5.set("explanation", "Synthetic leases exploit the divergence between tax and accounting treatment. They achieve operating lease treatment (off-balance-sheet) for accounting purposes while maintaining capital lease treatment (on-balance-sheet) for tax purposes, allowing companies to capture depreciation and interest deductions.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "{{QUIZ_ID}}");
    record6.set("question_text", "Under ASC 842, which of the following is NOT a criterion for operating lease classification?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"Lease term must be less than the major part of the asset's economic life\", \"The lease must not transfer ownership\", \"The lease must not contain a bargain purchase option\", \"The lessee must guarantee the residual value\"]");
    record6.set("correct_answer", "The lessee must guarantee the residual value");
    record6.set("explanation", "While residual value guarantees are common in synthetic leases, they are not a criterion for operating lease classification under ASC 842. The key criteria are: no ownership transfer, no bargain purchase option, lease term less than major part of economic life, and PV of payments less than substantially all of fair value.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "{{QUIZ_ID}}");
    record7.set("question_text", "What is the primary risk of IRS reclassification of a synthetic lease?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "[\"Loss of depreciation deductions\", \"Immediate payment of all lease obligations\", \"Loss of interest deductions and potential back taxes\", \"Forced sale of the asset\"]");
    record7.set("correct_answer", "Loss of interest deductions and potential back taxes");
    record7.set("explanation", "If the IRS reclassifies a synthetic lease as an operating lease for tax purposes, the lessee loses the ability to claim depreciation and interest deductions, potentially resulting in significant back taxes and penalties.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "{{QUIZ_ID}}");
    record8.set("question_text", "In a synthetic lease, what does the residual value guarantee protect?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "[\"The lessee's investment\", \"The lessor's investment\", \"The asset's physical condition\", \"The company's credit rating\"]");
    record8.set("correct_answer", "The lessor's investment");
    record8.set("explanation", "The residual value guarantee protects the lessor's investment by ensuring that if the asset's value at lease end is less than the guaranteed amount, the lessee will pay the difference to the lessor.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "{{QUIZ_ID}}");
    record9.set("question_text", "How has ASC 842 impacted the use of synthetic leases?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "[\"It has eliminated synthetic leases entirely\", \"It has narrowed the criteria for operating lease treatment, making synthetic leases less attractive\", \"It has expanded the use of synthetic leases\", \"It has had no impact on synthetic lease structures\"]");
    record9.set("correct_answer", "It has narrowed the criteria for operating lease treatment, making synthetic leases less attractive");
    record9.set("explanation", "ASC 842 (effective 2019) has significantly tightened the criteria for operating lease classification, making it more difficult to achieve off-balance-sheet treatment. This has reduced the attractiveness of synthetic leases as a financing tool.");
    record9.set("order", 10);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("quiz_id", "{{QUIZ_ID}}");
    record10.set("question_text", "What is the primary benefit of a Sale and Leaseback (SLB) transaction?");
    record10.set("question_type", "multiple_choice");
    record10.set("options", "[\"It reduces the cost of the asset\", \"It unlocks equity in owned assets and converts illiquid assets into cash\", \"It eliminates the need for maintenance\", \"It transfers all risk to the lessor\"]");
    record10.set("correct_answer", "It unlocks equity in owned assets and converts illiquid assets into cash");
    record10.set("explanation", "SLB transactions allow companies to unlock equity trapped in owned assets, converting illiquid assets into cash while maintaining operational control. This improves liquidity and can be used to fund strategic initiatives.");
    record10.set("order", 11);
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("quiz_id", "{{QUIZ_ID}}");
    record11.set("question_text", "Which of the following asset types is LEAST suitable for a Sale and Leaseback transaction?");
    record11.set("question_type", "multiple_choice");
    record11.set("options", "[\"Real estate\", \"Manufacturing equipment\", \"Highly specialized proprietary equipment\", \"Vehicles\"]");
    record11.set("correct_answer", "Highly specialized proprietary equipment");
    record11.set("explanation", "Highly specialized proprietary equipment is least suitable for SLB because it may be difficult to find a buyer willing to purchase and lease back such specialized assets. SLB works best with assets that have broad market appeal and can be used by multiple potential lessees.");
    record11.set("order", 12);
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("quiz_id", "{{QUIZ_ID}}");
    record12.set("question_text", "In an SLB transaction, what happens to the residual value guarantee?");
    record12.set("question_type", "multiple_choice");
    record12.set("options", "[\"The lessee guarantees the residual value to the buyer\", \"The buyer guarantees the residual value to the lessee\", \"There is no residual value guarantee\", \"The residual value is split equally between parties\"]");
    record12.set("correct_answer", "The lessee guarantees the residual value to the buyer");
    record12.set("explanation", "In a typical SLB transaction, the lessee (original owner) guarantees the residual value to the buyer (new owner). This protects the buyer's investment if the asset's value declines below the guaranteed amount.");
    record12.set("order", 13);
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("quiz_id", "{{QUIZ_ID}}");
    record13.set("question_text", "How is the gain on sale typically treated in an SLB transaction under ASC 842?");
    record13.set("question_type", "multiple_choice");
    record13.set("options", "[\"Recognized immediately in full\", \"Deferred and amortized over the lease term\", \"Recorded as a liability\", \"Excluded from financial statements\"]");
    record13.set("correct_answer", "Deferred and amortized over the lease term");
    record13.set("explanation", "Under ASC 842, the gain on sale in an SLB transaction is typically deferred and amortized over the lease term. This prevents the company from recognizing the entire gain upfront and ensures proper matching of revenues and expenses.");
    record13.set("order", 14);
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("quiz_id", "{{QUIZ_ID}}");
    record14.set("question_text", "Which of the following is a potential risk when using SLB to fund M&A transactions?");
    record14.set("question_type", "multiple_choice");
    record14.set("options", "[\"The acquired company may reject the SLB structure\", \"The SLB proceeds may be insufficient to fund the acquisition\", \"The buyer may require the SLB to be unwound if integration fails\", \"All of the above\"]");
    record14.set("correct_answer", "All of the above");
    record14.set("explanation", "All of these are potential risks in using SLB to fund M&A. The acquired company may have concerns about the SLB structure, the proceeds may not be sufficient, and the buyer may include conditions requiring the SLB to be unwound if the integration is unsuccessful or if certain performance metrics are not met.");
    record14.set("order", 15);
  app.save(record14);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})