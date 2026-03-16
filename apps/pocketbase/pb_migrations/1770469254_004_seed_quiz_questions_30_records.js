/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "quiz_1_id_placeholder");
    record0.set("question_text", "What is the primary difference between an operating lease and a capital lease?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"Operating leases are shorter-term with lessor retaining ownership; capital leases are longer-term with lessee essentially owning the asset\",\"Operating leases are more expensive\",\"Capital leases are always off-balance sheet\",\"Operating leases require personal guarantees\"]");
    record0.set("correct_answer", "Operating leases are shorter-term with lessor retaining ownership; capital leases are longer-term with lessee essentially owning the asset");
    record0.set("explanation", "Operating leases are typically short-term (1-3 years) where the lessor retains ownership and risks. Capital leases are long-term (5-10+ years) where the lessee essentially owns the asset and bears the risks.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "quiz_1_id_placeholder");
    record1.set("question_text", "Under IFRS 16, how are operating leases treated?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"Off-balance sheet\",\"Recognized on balance sheet as right-of-use asset and lease liability\",\"Expensed immediately\",\"Capitalized as fixed assets\"]");
    record1.set("correct_answer", "Recognized on balance sheet as right-of-use asset and lease liability");
    record1.set("explanation", "IFRS 16 requires all leases (including operating leases) to be recognized on the balance sheet as a right-of-use (ROU) asset and lease liability.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "quiz_1_id_placeholder");
    record2.set("question_text", "What is a key component of lease structure?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"Equipment description and specifications\",\"Lease term and renewal options\",\"Lease payments and payment schedule\",\"All of the above\"]");
    record2.set("correct_answer", "All of the above");
    record2.set("explanation", "All of these are essential components of a comprehensive lease structure that must be clearly defined in the lease agreement.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "quiz_1_id_placeholder");
    record3.set("question_text", "What does residual value mean in a lease?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"The remaining lease payments\",\"The estimated value of the asset at lease end\",\"The lessor's profit\",\"The lessee's equity in the asset\"]");
    record3.set("correct_answer", "The estimated value of the asset at lease end");
    record3.set("explanation", "Residual value is the estimated value of the leased asset at the end of the lease term, which affects lease payment calculations and risk allocation.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "quiz_1_id_placeholder");
    record4.set("question_text", "What is a net lease?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"Lease with no payments\",\"Lessee handles all maintenance and repairs\",\"Lessor handles all maintenance\",\"Lease with negative cash flow\"]");
    record4.set("correct_answer", "Lessee handles all maintenance and repairs");
    record4.set("explanation", "In a net lease, the lessee is responsible for all maintenance, repairs, insurance, and property taxes, while the lessor receives the base lease payment.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "quiz_1_id_placeholder");
    record5.set("question_text", "What is the purpose of a residual value guarantee?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "[\"Guarantees the lessee will pay the residual value\",\"Guarantees the asset will be worth the estimated residual value\",\"Guarantees the lessor's profit\",\"Guarantees the lessee's return\"]");
    record5.set("correct_answer", "Guarantees the asset will be worth the estimated residual value");
    record5.set("explanation", "A residual value guarantee protects the lessor by guaranteeing that the asset will be worth at least the estimated residual value at lease end, reducing the lessor's obsolescence risk.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "quiz_1_id_placeholder");
    record6.set("question_text", "What is an early termination option?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"Lessor can terminate the lease early\",\"Lessee can terminate the lease early, usually with a penalty\",\"Either party can terminate without penalty\",\"The lease automatically terminates early\"]");
    record6.set("correct_answer", "Lessee can terminate the lease early, usually with a penalty");
    record6.set("explanation", "An early termination option allows the lessee to end the lease before the scheduled end date, typically with a penalty fee to compensate the lessor.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "quiz_1_id_placeholder");
    record7.set("question_text", "What is the primary purpose of insurance requirements in a lease?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "[\"To protect the lessee\",\"To protect the lessor from loss due to damage or theft\",\"To reduce lease payments\",\"To extend the lease term\"]");
    record7.set("correct_answer", "To protect the lessor from loss due to damage or theft");
    record7.set("explanation", "Insurance requirements protect the lessor's interest in the equipment by ensuring the lessee carries adequate coverage with the lessor named as loss payee.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "quiz_1_id_placeholder");
    record8.set("question_text", "What is a full-service lease?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "[\"Lessor provides all maintenance and repairs\",\"Lessee provides all maintenance\",\"Both parties share maintenance\",\"Neither party provides maintenance\"]");
    record8.set("correct_answer", "Lessor provides all maintenance and repairs");
    record8.set("explanation", "In a full-service lease, the lessor is responsible for all maintenance, repairs, insurance, and other operating costs, providing convenience to the lessee.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "quiz_1_id_placeholder");
    record9.set("question_text", "What is the primary risk in a lease for the lessor?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "[\"Lessee default on payments\",\"Residual value lower than estimated\",\"Equipment obsolescence\",\"All of the above\"]");
    record9.set("correct_answer", "All of the above");
    record9.set("explanation", "Lessors face multiple risks including credit risk (lessee default), residual value risk (asset worth less than estimated), and obsolescence risk (asset becomes outdated).");
    record9.set("order", 10);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("quiz_id", "quiz_2_id_placeholder");
    record10.set("question_text", "What is the capitalized cost in a lease?");
    record10.set("question_type", "multiple_choice");
    record10.set("options", "[\"The monthly lease payment\",\"The total cost of the lease\",\"The acquisition cost of the asset plus delivery and setup\",\"The residual value of the asset\"]");
    record10.set("correct_answer", "The acquisition cost of the asset plus delivery and setup");
    record10.set("explanation", "Capitalized cost includes the acquisition cost of the asset plus all delivery, installation, setup, and training costs that are part of the initial investment.");
    record10.set("order", 1);
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("quiz_id", "quiz_2_id_placeholder");
    record11.set("question_text", "What does IRR stand for in lease analysis?");
    record11.set("question_type", "multiple_choice");
    record11.set("options", "[\"Internal Rate of Return\",\"Initial Residual Return\",\"Interest Rate Ratio\",\"Internal Revenue Rate\"]");
    record11.set("correct_answer", "Internal Rate of Return");
    record11.set("explanation", "IRR (Internal Rate of Return) is the discount rate where the net present value of cash flows equals zero, measuring the return on the lessor's investment.");
    record11.set("order", 2);
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("quiz_id", "quiz_2_id_placeholder");
    record12.set("question_text", "What is the money factor method used for?");
    record12.set("question_type", "multiple_choice");
    record12.set("options", "[\"Calculating lessor's profit\",\"Calculating lease payments (primarily in automotive)\",\"Calculating residual value\",\"Calculating maintenance costs\"]");
    record12.set("correct_answer", "Calculating lease payments (primarily in automotive)");
    record12.set("explanation", "The money factor method is a lease payment calculation method commonly used in the automotive industry, where Money Factor = Annual Interest Rate / 2400.");
    record12.set("order", 3);
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("quiz_id", "quiz_2_id_placeholder");
    record13.set("question_text", "What is NPV in lease analysis?");
    record13.set("question_type", "multiple_choice");
    record13.set("options", "[\"Net Present Value - the present value of cash inflows minus outflows\",\"Net Profit Value\",\"Net Payment Value\",\"Net Positive Value\"]");
    record13.set("correct_answer", "Net Present Value - the present value of cash inflows minus outflows");
    record13.set("explanation", "NPV is the present value of all cash inflows minus outflows, discounted at the lessor's cost of capital. Positive NPV indicates a profitable lease.");
    record13.set("order", 4);
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("quiz_id", "quiz_2_id_placeholder");
    record14.set("question_text", "What is the primary advantage of cost-plus pricing?");
    record14.set("question_type", "multiple_choice");
    record14.set("options", "[\"Ensures profitability\",\"Ensures competitiveness\",\"Maximizes market share\",\"Minimizes risk\"]");
    record14.set("correct_answer", "Ensures profitability");
    record14.set("explanation", "Cost-plus pricing calculates all costs and adds a desired margin, ensuring the lessor achieves profitability on each lease.");
    record14.set("order", 5);
  app.save(record14);

  const record15 = new Record(collection);
    record15.set("quiz_id", "quiz_2_id_placeholder");
    record15.set("question_text", "What is value-based pricing?");
    record15.set("question_type", "multiple_choice");
    record15.set("options", "[\"Pricing based on the cost of the asset\",\"Pricing based on the value delivered to the lessee\",\"Pricing based on competitor rates\",\"Pricing based on lessor's profit margin\"]");
    record15.set("correct_answer", "Pricing based on the value delivered to the lessee");
    record15.set("explanation", "Value-based pricing sets prices based on the value and benefits delivered to the lessee, allowing higher prices for high-value propositions.");
    record15.set("order", 6);
  app.save(record15);

  const record16 = new Record(collection);
    record16.set("quiz_id", "quiz_2_id_placeholder");
    record16.set("question_text", "What is the payback period in lease analysis?");
    record16.set("question_type", "multiple_choice");
    record16.set("options", "[\"The time to recover the initial investment\",\"The total lease term\",\"The time to reach profitability\",\"The time to collect all payments\"]");
    record16.set("correct_answer", "The time to recover the initial investment");
    record16.set("explanation", "Payback period is the time required to recover the initial investment through lease payments, calculated as Initial Investment / Annual Cash Flow.");
    record16.set("order", 7);
  app.save(record16);

  const record17 = new Record(collection);
    record17.set("quiz_id", "quiz_2_id_placeholder");
    record17.set("question_text", "What is the primary benefit of residual value insurance?");
    record17.set("question_type", "multiple_choice");
    record17.set("options", "[\"Protects lessee from residual value risk\",\"Protects lessor from residual value being lower than estimated\",\"Reduces lease payments\",\"Extends the lease term\"]");
    record17.set("correct_answer", "Protects lessor from residual value being lower than estimated");
    record17.set("explanation", "Residual value insurance protects the lessor by guaranteeing a minimum residual value if the actual value is lower than estimated at lease end.");
    record17.set("order", 8);
  app.save(record17);

  const record18 = new Record(collection);
    record18.set("quiz_id", "quiz_2_id_placeholder");
    record18.set("question_text", "What is the primary strategy to optimize ROI in a lease portfolio?");
    record18.set("question_type", "multiple_choice");
    record18.set("options", "[\"Increase lease payments\",\"Reduce operating costs\",\"Increase residual value assumptions\",\"All of the above\"]");
    record18.set("correct_answer", "All of the above");
    record18.set("explanation", "ROI optimization involves multiple strategies: increasing payments, reducing costs, optimizing residual values, and balancing the portfolio mix.");
    record18.set("order", 9);
  app.save(record18);

  const record19 = new Record(collection);
    record19.set("quiz_id", "quiz_2_id_placeholder");
    record19.set("question_text", "What is credit risk in a lease?");
    record19.set("question_type", "multiple_choice");
    record19.set("options", "[\"Risk that the lessee defaults on payments\",\"Risk that the asset depreciates\",\"Risk that interest rates change\",\"Risk that the lease is cancelled\"]");
    record19.set("correct_answer", "Risk that the lessee defaults on payments");
    record19.set("explanation", "Credit risk is the risk that the lessee is unable to pay lease payments, resulting in loss of revenue and potential repossession costs.");
    record19.set("order", 10);
  app.save(record19);

  const record20 = new Record(collection);
    record20.set("quiz_id", "quiz_3_id_placeholder");
    record20.set("question_text", "What is BATNA in negotiation?");
    record20.set("question_type", "multiple_choice");
    record20.set("options", "[\"Best Alternative to Negotiated Agreement\",\"Best Available Terms and Negotiations\",\"Basic Agreement Terms and Negotiations\",\"Best Approach to Negotiation and Agreement\"]");
    record20.set("correct_answer", "Best Alternative to Negotiated Agreement");
    record20.set("explanation", "BATNA is your best alternative if the negotiation fails, representing your walk-away point and helping you determine acceptable terms.");
    record20.set("order", 1);
  app.save(record20);

  const record21 = new Record(collection);
    record21.set("quiz_id", "quiz_3_id_placeholder");
    record21.set("question_text", "What is the anchoring tactic in negotiation?");
    record21.set("question_type", "multiple_choice");
    record21.set("options", "[\"Making the first offer to set the negotiation range\",\"Refusing to move from your position\",\"Delaying the negotiation\",\"Asking for unreasonable terms\"]");
    record21.set("correct_answer", "Making the first offer to set the negotiation range");
    record21.set("explanation", "Anchoring involves making the first offer to establish the negotiation range, with an ambitious but reasonable anchor setting a favorable starting point.");
    record21.set("order", 2);
  app.save(record21);

  const record22 = new Record(collection);
    record22.set("quiz_id", "quiz_3_id_placeholder");
    record22.set("question_text", "What is the primary advantage of collaborative negotiation?");
    record22.set("question_type", "multiple_choice");
    record22.set("options", "[\"Maximizes your gains\",\"Creates win-win solutions and builds relationships\",\"Minimizes the other party's gains\",\"Speeds up the negotiation\"]");
    record22.set("correct_answer", "Creates win-win solutions and builds relationships");
    record22.set("explanation", "Collaborative negotiation focuses on mutual gains and problem-solving, creating value and building long-term relationships.");
    record22.set("order", 3);
  app.save(record22);

  const record23 = new Record(collection);
    record23.set("quiz_id", "quiz_3_id_placeholder");
    record23.set("question_text", "What is the good cop / bad cop tactic?");
    record23.set("question_type", "multiple_choice");
    record23.set("options", "[\"One negotiator is tough, one is reasonable, creating pressure and relief\",\"One negotiator is honest, one is dishonest\",\"One negotiator represents the lessor, one represents the lessee\",\"One negotiator is experienced, one is inexperienced\"]");
    record23.set("correct_answer", "One negotiator is tough, one is reasonable, creating pressure and relief");
    record23.set("explanation", "Good cop / bad cop uses two negotiators with different styles to create pressure and relief dynamics, allowing flexibility without appearing weak.");
    record23.set("order", 4);
  app.save(record23);

  const record24 = new Record(collection);
    record24.set("quiz_id", "quiz_3_id_placeholder");
    record24.set("question_text", "What is the primary purpose of bundling in negotiation?");
    record24.set("question_type", "multiple_choice");
    record24.set("options", "[\"Combining multiple issues to create value through creative combinations\",\"Combining lease payments into one amount\",\"Combining multiple leases into one agreement\",\"Combining lessor and lessee interests\"]");
    record24.set("correct_answer", "Combining multiple issues to create value through creative combinations");
    record24.set("explanation", "Bundling packages multiple issues together to trade concessions across issues and create value through creative combinations.");
    record24.set("order", 5);
  app.save(record24);

  const record25 = new Record(collection);
    record25.set("quiz_id", "quiz_3_id_placeholder");
    record25.set("question_text", "What is the primary risk of competitive negotiation style?");
    record25.set("question_type", "multiple_choice");
    record25.set("options", "[\"Damages relationships and creates resentment\",\"Results in lower profits\",\"Takes longer to complete\",\"Requires more documentation\"]");
    record25.set("correct_answer", "Damages relationships and creates resentment");
    record25.set("explanation", "Competitive (win-lose) negotiation can damage relationships and create resentment, making it unsuitable for long-term business relationships.");
    record25.set("order", 6);
  app.save(record25);

  const record26 = new Record(collection);
    record26.set("quiz_id", "quiz_3_id_placeholder");
    record26.set("question_text", "What is the primary purpose of a personal guarantee in a lease?");
    record26.set("question_type", "multiple_choice");
    record26.set("options", "[\"Guarantees the lessee will pay\",\"Guarantees the lessor will perform\",\"Guarantor is liable if lessee defaults\",\"Guarantees the residual value\"]");
    record26.set("correct_answer", "Guarantor is liable if lessee defaults");
    record26.set("explanation", "A personal guarantee makes the guarantor (usually the owner) personally liable for lease obligations if the lessee defaults.");
    record26.set("order", 7);
  app.save(record26);

  const record27 = new Record(collection);
    record27.set("quiz_id", "quiz_3_id_placeholder");
    record27.set("question_text", "What is the primary purpose of security deposits in a lease?");
    record27.set("question_type", "multiple_choice");
    record27.set("options", "[\"Provides cash security for performance\",\"Reduces lease payments\",\"Extends the lease term\",\"Guarantees the residual value\"]");
    record27.set("correct_answer", "Provides cash security for performance");
    record27.set("explanation", "Security deposits provide cash held by the lessor to cover potential damages, defaults, or other performance issues.");
    record27.set("order", 8);
  app.save(record27);

  const record28 = new Record(collection);
    record28.set("quiz_id", "quiz_3_id_placeholder");
    record28.set("question_text", "What is the primary step in deal closure?");
    record28.set("question_type", "multiple_choice");
    record28.set("options", "[\"Prepare lease agreement\",\"Obtain signatures\",\"Final negotiation and agreement on all terms\",\"Arrange equipment delivery\"]");
    record28.set("correct_answer", "Final negotiation and agreement on all terms");
    record28.set("explanation", "The first critical step in deal closure is ensuring all terms are negotiated and agreed upon before proceeding with documentation.");
    record28.set("order", 9);
  app.save(record28);

  const record29 = new Record(collection);
    record29.set("quiz_id", "quiz_3_id_placeholder");
    record29.set("question_text", "What is the primary purpose of post-closing follow-up?");
    record29.set("question_type", "multiple_choice");
    record29.set("options", "[\"Confirm lessee satisfaction and establish ongoing relationship\",\"Collect remaining payments\",\"Repossess the equipment\",\"Renegotiate lease terms\"]");
    record29.set("correct_answer", "Confirm lessee satisfaction and establish ongoing relationship");
    record29.set("explanation", "Post-closing follow-up confirms the lessee is satisfied, verifies equipment operation, and establishes the foundation for a long-term relationship.");
    record29.set("order", 10);
  app.save(record29);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})