/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("vendor_leasing_quizzes");

  const record0 = new Record(collection);
    record0.set("lessonId", "lesson_3");
    record0.set("title", "Lesson 3 Quiz - Advanced Lease Valuation");
    record0.set("questionCount", 10);
    record0.set("questions", "Q1: What is the primary advantage of using NPV analysis in lease valuation? | Q2: How does sensitivity analysis help in lease negotiations? | Q3: What factors should be considered when determining the appropriate discount rate? | Q4: How do renewal options affect lease valuation? | Q5: What is the impact of termination clauses on lease economics? | Q6: How should variable lease payments be treated in valuation? | Q7: What role does IRR play in comparing lease alternatives? | Q8: How do residual value assumptions affect lease decisions? | Q9: What negotiation strategies can improve lease terms? | Q10: How should lease escalation clauses be evaluated?");
    record0.set("answers", "A: It provides a single metric for comparing different lease scenarios | A: It shows how changes in assumptions affect lease economics | A: Creditworthiness, market conditions, and company risk profile | A: They provide flexibility and can reduce effective lease costs | A: They limit financial exposure and provide exit strategies | A: They should be discounted using the same rate as fixed payments | A: It helps identify the most cost-effective lease option | A: They significantly impact the true cost of the lease | A: Negotiating lower payments, favorable renewal terms, and flexible termination | A: By calculating the impact on total lease cost over time");
    record0.set("passingScore", 70);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("lessonId", "lesson_3");
    record1.set("title", "Lesson 3 Quiz - Lease Negotiation Strategies");
    record1.set("questionCount", 10);
    record1.set("questions", "Q1: What is the first step in preparing for lease negotiations? | Q2: How should you approach vendor negotiations? | Q3: What are key lease terms to negotiate? | Q4: How do you evaluate competing lease proposals? | Q5: What role does market data play in negotiations? | Q6: How should you handle vendor pushback on terms? | Q7: What documentation is needed for lease negotiations? | Q8: How do you structure payment terms to optimize cash flow? | Q9: What contingencies should be included in lease agreements? | Q10: How do you ensure lease terms align with business strategy?");
    record1.set("answers", "A: Conduct thorough market research and understand your requirements | A: With respect and professionalism while maintaining firm negotiating positions | A: Payment amounts, terms, renewal options, and termination clauses | A: Using a standardized evaluation matrix with weighted criteria | A: It provides benchmarks for reasonable terms and pricing | A: Present data-driven alternatives and explain business rationale | A: RFPs, vendor proposals, internal requirements, and approval documentation | A: Negotiate for front-loaded or back-loaded payments based on cash needs | A: Force majeure clauses, renewal options, and early termination provisions | A: By aligning lease terms with operational and financial objectives");
    record1.set("passingScore", 70);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("lessonId", "lesson_3");
    record2.set("title", "Lesson 3 Quiz - Financial Impact Analysis");
    record2.set("questionCount", 10);
    record2.set("questions", "Q1: How do you calculate the effective annual cost of a lease? | Q2: What is the relationship between lease terms and total cost? | Q3: How should you compare leasing vs. buying decisions? | Q4: What is the impact of payment timing on lease economics? | Q5: How do you account for tax implications in lease analysis? | Q6: What role does inflation play in long-term lease decisions? | Q7: How should you evaluate lease modifications? | Q8: What is the impact of credit terms on lease decisions? | Q9: How do you model different lease scenarios? | Q10: What metrics should be used to evaluate lease performance?");
    record2.set("answers", "A: Sum all payments and divide by the lease term, adjusted for time value | A: Longer terms typically reduce annual costs but increase total commitment | A: Compare NPV of lease payments to purchase price and financing costs | A: Earlier payments have greater impact due to time value of money | A: Consider deductibility of lease payments and impact on taxable income | A: Escalation clauses should account for expected inflation rates | A: Analyze the financial impact of changes to original lease terms | A: Better credit terms can reduce effective lease costs | A: Use spreadsheet models with variable assumptions and sensitivity analysis | A: Cost per unit, total cost of ownership, and return on investment");
    record2.set("passingScore", 70);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("lessonId", "lesson_3");
    record3.set("title", "Lesson 3 Quiz - Complex Lease Scenarios");
    record3.set("questionCount", 10);
    record3.set("questions", "Q1: How do you handle leases with variable payments? | Q2: What is the treatment of contingent rentals? | Q3: How should you evaluate leases with purchase options? | Q4: What is the impact of residual value guarantees? | Q5: How do you account for leases with step payments? | Q6: What is the treatment of lease incentives? | Q7: How should you evaluate leases with renewal options? | Q8: What is the impact of subleasing arrangements? | Q9: How do you handle leases with performance conditions? | Q10: What is the treatment of leases with multiple components?");
    record3.set("answers", "A: Estimate expected payments and discount using appropriate rate | A: Include in lease payments if probable and measurable | A: Evaluate as potential purchase if option is reasonably certain to be exercised | A: They increase the effective cost and should be factored into analysis | A: Discount each payment using the appropriate discount rate | A: Reduce the present value of lease payments | A: Evaluate probability of exercise and impact on total lease cost | A: Analyze impact on lessor's economics and your obligations | A: Include in analysis only if conditions are probable to be met | A: Allocate consideration based on standalone prices of each component");
    record3.set("passingScore", 70);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("lessonId", "lesson_3");
    record4.set("title", "Lesson 3 Quiz - Negotiation Tactics and Best Practices");
    record4.set("questionCount", 10);
    record4.set("questions", "Q1: What is the importance of BATNA in lease negotiations? | Q2: How should you use anchoring in negotiations? | Q3: What are common negotiation mistakes to avoid? | Q4: How do you build rapport with lease vendors? | Q5: What is the role of silence in negotiations? | Q6: How should you handle multiple vendors? | Q7: What documentation should be maintained during negotiations? | Q8: How do you escalate negotiations when stuck? | Q9: What is the importance of written agreements? | Q10: How should you follow up after lease execution?");
    record4.set("answers", "A: It provides your walk-away point and strengthens negotiating position | A: Make the first offer to establish favorable reference point | A: Accepting first offer, failing to research, and poor communication | A: Through active listening, finding common ground, and professional conduct | A: It creates pressure and allows the other party to make concessions | A: Create competition and use competing offers as leverage | A: Email summaries, meeting notes, and proposal versions | A: Involve senior management or bring in external advisors | A: They prevent misunderstandings and provide legal protection | A: Confirm terms, establish payment schedules, and plan implementation");
    record4.set("passingScore", 70);
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})