/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("case_studies");

  const record0 = new Record(collection);
    record0.set("title", "Healthcare Provider - Multi-Option Proposal Converts Hesitant Buyer into Lifetime Customer");
    record0.set("description", "MediCare Diagnostic Centers case study demonstrating multi-option proposal strategy and upgrade hook for customer lifetime value");
    record0.set("scenario", "MediCare Diagnostic Centers, a regional medical diagnostic network with 8 locations and 150+ employees, faced a critical decision to upgrade aging diagnostic imaging equipment ($650,000 investment). The CFO was initially skeptical about leasing, preferring ownership. The leasing company presented a comprehensive multi-option proposal with three distinct options: (1) Purchase with Cash ($830,000 total 5-year cost), (2) Purchase with Financing ($866,000 total 5-year cost), (3) Lease ($690,000 total 5-year cost, recommended). The multi-option approach gave MediCare control over the decision and made the financial advantages of leasing obvious through data-driven comparison. MediCare chose the lease option and signed a 5-year agreement for $11,500/month. Year 1-2 results showed 12% increase in patient volume, $180,000/year additional revenue, and zero downtime. At Year 5, the leasing company implemented a proactive upgrade strategy 90 days before lease expiration, presenting new advanced diagnostic imaging technology. MediCare upgraded to new equipment for $13,200/month (5-year lease), generating $250,000/year additional revenue. Over 10 years, MediCare generated $668,000 net benefit from leasing vs purchasing, and the leasing company created a lifetime customer with expanded relationship across 8 locations.");
    record0.set("requirements", "Multi-option proposal strategy, transparency in presenting all options, data-driven decision making, proactive relationship management at lease-end, upgrade hook to create customer lifetime value, quantifying value through additional revenue generation");
    record0.set("analysis_framework", "Compare buy vs lease financial impact, analyze psychological objections to leasing, evaluate proactive relationship management timing, assess upgrade hook effectiveness, calculate customer lifetime value, identify key sales lessons");
    record0.set("expected_outcome", "Understand how multi-option proposals overcome buyer hesitation, learn proactive relationship management techniques, recognize upgrade hook as customer retention strategy, apply data-driven selling approach, calculate long-term customer value, master the closing pitch by integrating leasing into comprehensive proposals");
    record0.set("difficulty_level", "Advanced");
    record0.set("course_module", "Lesson 5: The Closing Pitch - Integrating Leasing into the Proposal");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})