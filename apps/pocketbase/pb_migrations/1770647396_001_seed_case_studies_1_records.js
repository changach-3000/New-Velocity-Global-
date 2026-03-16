/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("case_studies");

  const record0 = new Record(collection);
    record0.set("title", "Manufacturing Company - Overcoming Leasing is Too Expensive Through TCO Analysis");
    record0.set("description", "PrecisionTech Manufacturing case study demonstrating how comprehensive Total Cost of Ownership analysis overcomes the leasing cost objection");
    record0.set("scenario", "PrecisionTech Manufacturing Inc., a mid-sized precision metal fabrication company with 120 employees and $18.5M annual revenue, faced aging equipment causing production delays. When presented with a leasing option at $18,500/month, the CFO objected claiming leasing was too expensive at $1,110,000 total vs $850,000 purchase price. However, a comprehensive TCO analysis revealed hidden costs of ownership including $165,000 financing interest, $95,000 maintenance/repairs, $120,000 downtime losses, $180,000 obsolescence risk, and $63,000 in taxes/insurance, bringing total purchase cost to $1,530,000 vs $1,122,000 for leasing\u2014a $408,000 savings (27% reduction).");
    record0.set("requirements", "Analyze the complete TCO comparison showing all cost components. Identify the five major hidden costs of ownership. Calculate the total 5-year savings. Explain why the initial cost objection was incomplete. Determine the operational and financial benefits achieved through leasing.");
    record0.set("analysis_framework", "Total Cost of Ownership (TCO) Analysis Framework: 1) Equipment acquisition costs, 2) Financing costs (interest), 3) Maintenance and repair expenses, 4) Downtime and lost production costs, 5) Obsolescence and depreciation risk, 6) Property taxes and insurance, 7) Training and implementation costs. Compare all-in costs across 5-year period, not just headline purchase price.");
    record0.set("expected_outcome", "Demonstrate that leasing at $1,122,000 total cost is $408,000 cheaper than purchasing at $1,530,000 total cost. Show that comprehensive TCO analysis transforms the cost objection into a buying opportunity. Prove that operational benefits (92% reduction in downtime, 18% capacity increase, 15% faster delivery) create additional revenue of $450,000/year.");
    record0.set("difficulty_level", "Advanced");
    record0.set("course_module", "Lesson 4: Handling Objections - The Total Cost Rebuttal");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})