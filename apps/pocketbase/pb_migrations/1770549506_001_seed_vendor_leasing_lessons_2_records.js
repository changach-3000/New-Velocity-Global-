/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("vendor_leasing_lessons");

  const record0 = new Record(collection);
    record0.set("courseId", "vendor-leasing");
    record0.set("lessonNumber", 7);
    record0.set("title", "Vendor Lease Negotiation and Optimization");
    record0.set("description", "Master negotiation strategies, cost optimization, and vendor relationship management");
    record0.set("duration", 120);
    record0.set("contentType", "text");
    record0.set("contentBody", "VENDOR LEASE NEGOTIATION AND OPTIMIZATION\n\n1. NEGOTIATION STRATEGIES\n- Preparation and research\n- BATNA (Best Alternative to Negotiated Agreement)\n- Anchoring and framing\n- Collaborative vs. competitive approaches\n- Multi-issue negotiation\n- Negotiation psychology\n\n2. COST OPTIMIZATION TECHNIQUES\n- Total cost of ownership analysis\n- Volume discounts and bundling\n- Payment term optimization\n- Maintenance cost reduction\n- Technology upgrades and efficiency\n- Lease vs. buy analysis\n\n3. VENDOR RELATIONSHIP MANAGEMENT\n- Building long-term partnerships\n- Communication strategies\n- Performance metrics and KPIs\n- Vendor scorecards\n- Escalation procedures\n- Conflict resolution\n\n4. CONTRACT OPTIMIZATION\n- Lease term structure\n- Flexibility clauses\n- Renewal options\n- Early termination provisions\n- Upgrade and modification rights\n- Insurance and liability terms\n\n5. PAYMENT TERM NEGOTIATION\n- Monthly vs. annual payments\n- Seasonal adjustments\n- Escalation clauses\n- Discount structures\n- Payment methods and timing\n- Late payment penalties\n\n6. RESIDUAL VALUE NEGOTIATION\n- Fair market value assessment\n- Residual value guarantees\n- End-of-lease options\n- Buyout provisions\n- Return conditions\n- Dispute resolution\n\n7. LEASE MODIFICATION STRATEGIES\n- Mid-lease adjustments\n- Equipment upgrades\n- Scope changes\n- Renegotiation triggers\n- Amendment procedures\n- Cost impact analysis\n\n8. BENCHMARKING\n- Market rate analysis\n- Competitive comparison\n- Industry standards\n- Historical data analysis\n- Peer comparison\n- Trend analysis");
    record0.set("learningOutcomes", "Develop advanced negotiation skills, optimize lease costs, manage vendor relationships effectively, and structure optimal lease agreements");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("courseId", "vendor-leasing");
    record1.set("lessonNumber", 8);
    record1.set("title", "Vendor Lease Case Studies and Best Practices");
    record1.set("description", "Learn from real-world case studies and industry best practices in vendor leasing");
    record1.set("duration", 120);
    record1.set("contentType", "text");
    record1.set("contentBody", "VENDOR LEASE CASE STUDIES AND BEST PRACTICES\n\n1. REAL-WORLD CASE STUDIES\n- Technology equipment leasing success stories\n- Manufacturing equipment optimization\n- Fleet leasing best practices\n- Office equipment management\n- Specialized equipment leasing\n- International leasing examples\n\n2. INDUSTRY BEST PRACTICES\n- Lease portfolio management\n- Vendor selection criteria\n- Contract standardization\n- Risk management approaches\n- Compliance and audit procedures\n- Technology integration\n\n3. LESSONS LEARNED\n- Common negotiation mistakes\n- Successful strategies that worked\n- Vendor relationship successes\n- Cost optimization wins\n- Flexibility and modification benefits\n- Long-term partnership outcomes\n\n4. IMPLEMENTATION STRATEGIES\n- Change management approaches\n- Stakeholder engagement\n- Process improvement\n- Training and development\n- Technology adoption\n- Continuous improvement\n\n5. COMMON PITFALLS AND HOW TO AVOID THEM\n- Inadequate vendor evaluation\n- Poor contract documentation\n- Lack of performance monitoring\n- Inflexible lease terms\n- Inadequate cost tracking\n- Vendor lock-in situations\n\n6. EMERGING TRENDS IN VENDOR LEASING\n- Sustainability and green leasing\n- Digital transformation\n- Predictive maintenance\n- Circular economy models\n- AI-driven optimization\n- Blockchain for transparency");
    record1.set("learningOutcomes", "Apply best practices from real-world case studies, implement effective vendor leasing strategies, avoid common pitfalls, and stay current with emerging trends");
  app.save(record1);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})