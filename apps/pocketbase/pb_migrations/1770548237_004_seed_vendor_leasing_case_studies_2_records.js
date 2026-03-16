/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("vendor_leasing_case_studies");

  const record0 = new Record(collection);
    record0.set("lessonId", "pbc_1014568348_lesson_1");
    record0.set("title", "TechEquip Vendor Leasing Program");
    record0.set("scenario", "TechEquip is a manufacturer of industrial equipment facing declining sales due to high upfront costs for customers. The company wants to increase market share by offering vendor leasing programs. Current situation: Annual sales $50M, customer base 200 companies, average equipment cost $100K-$500K. Challenge: Customers prefer to lease rather than buy due to cash flow constraints and technology obsolescence risks.");
    record0.set("requirements", "1. Design a vendor leasing program structure. 2. Identify target customer segments. 3. Determine lease terms and pricing. 4. Outline risk management strategies. 5. Create implementation timeline.");
    record0.set("analysisFramework", "1. Market Analysis: Assess demand for leasing vs. purchasing. 2. Financial Analysis: Calculate lease pricing and profitability. 3. Risk Assessment: Identify and mitigate risks. 4. Competitive Analysis: Compare with competitor offerings. 5. Implementation Plan: Define rollout strategy.");
    record0.set("expectedOutcome", "A comprehensive vendor leasing program that increases sales by 30%, improves customer retention, and generates recurring revenue streams while managing credit and operational risks.");
    record0.set("difficulty", "intermediate");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("lessonId", "pbc_1014568348_lesson_2");
    record1.set("title", "Global Manufacturing Financing Program");
    record1.set("scenario", "Global Manufacturing is expanding its vendor financing program to international markets. Current situation: Domestic program has 500 active customers, 95% payment rate, $200M in outstanding financing. Challenge: International expansion requires adapting credit policies, managing currency risk, and complying with local regulations. The company needs to establish credit assessment procedures for new markets with limited credit history data.");
    record1.set("requirements", "1. Develop international credit assessment procedures. 2. Create risk-adjusted pricing models. 3. Establish default management protocols. 4. Design compliance framework for multiple jurisdictions. 5. Build monitoring and reporting systems.");
    record1.set("analysisFramework", "1. Credit Risk Assessment: Evaluate customer creditworthiness in new markets. 2. Regulatory Compliance: Identify and address local requirements. 3. Operational Risk: Assess collections and default management capabilities. 4. Financial Risk: Model profitability and loss scenarios. 5. Strategic Risk: Evaluate market opportunity and competitive positioning.");
    record1.set("expectedOutcome", "A robust international financing program that expands revenue by 40%, maintains credit quality above 90%, complies with all local regulations, and provides scalable processes for future market expansion.");
    record1.set("difficulty", "advanced");
  app.save(record1);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})