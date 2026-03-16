/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("vendor_leasing_case_studies");

  const record0 = new Record(collection);
    record0.set("lessonId", "lesson-7");
    record0.set("title", "Successful Lease Negotiation and Optimization");
    record0.set("scenario", "A mid-sized manufacturing company has been leasing equipment from the same vendor for 5 years at fixed terms. The company wants to renegotiate their lease agreement to reduce costs, improve flexibility, and optimize payment terms. The vendor is open to renegotiation but wants to maintain profitability. The company needs to develop a negotiation strategy that achieves cost savings while maintaining a positive vendor relationship.");
    record0.set("requirements", "1. Analyze current lease terms and identify optimization opportunities\n2. Research market rates and competitive benchmarks\n3. Develop a negotiation strategy with clear objectives\n4. Identify win-win opportunities for both parties\n5. Structure payment term alternatives\n6. Propose flexibility and modification clauses\n7. Create a negotiation timeline and communication plan\n8. Prepare for potential vendor objections");
    record0.set("analysisFramework", "1. Current State Analysis: Review existing lease terms, costs, and vendor performance\n2. Market Research: Benchmark against industry standards and competitor rates\n3. Opportunity Identification: Identify cost reduction and flexibility opportunities\n4. Strategy Development: Create negotiation approach with clear objectives\n5. Proposal Structure: Develop multiple scenarios with different payment terms\n6. Risk Assessment: Evaluate potential outcomes and vendor responses\n7. Implementation Plan: Define next steps and timeline\n8. Success Metrics: Establish KPIs for measuring negotiation success");
    record0.set("expectedOutcome", "Successful renegotiation resulting in 15-20% cost reduction, improved payment flexibility, added modification clauses, and strengthened vendor relationship. The company achieves better terms while the vendor maintains profitability through volume commitment and longer renewal terms.");
    record0.set("difficulty", "advanced");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("lessonId", "lesson-8");
    record1.set("title", "Implementing Best Practices in Vendor Leasing");
    record1.set("scenario", "A large enterprise with multiple departments has inconsistent vendor leasing practices across the organization. Different departments negotiate independently, resulting in varying terms, poor vendor relationships, and missed cost optimization opportunities. The company wants to implement industry best practices to standardize processes, improve vendor relationships, reduce costs, and ensure compliance. Leadership has committed resources but faces resistance to change from departments accustomed to autonomy.");
    record1.set("requirements", "1. Assess current state of vendor leasing practices across departments\n2. Research and identify industry best practices\n3. Develop standardized processes and contract templates\n4. Create vendor evaluation and selection criteria\n5. Design performance monitoring and reporting systems\n6. Develop change management and training plan\n7. Establish governance structure and decision-making process\n8. Create implementation timeline with milestones");
    record1.set("analysisFramework", "1. Current State Assessment: Document existing practices, costs, and vendor relationships\n2. Best Practice Research: Identify proven approaches from industry leaders\n3. Gap Analysis: Compare current state to best practices\n4. Solution Design: Develop standardized processes and tools\n5. Change Management: Plan stakeholder engagement and training\n6. Implementation Planning: Create detailed timeline and resource allocation\n7. Performance Measurement: Define KPIs and monitoring approach\n8. Continuous Improvement: Establish feedback loops and optimization process");
    record1.set("expectedOutcome", "Successful implementation of standardized vendor leasing practices resulting in 20-25% cost reduction, improved vendor relationships, enhanced compliance, better risk management, and increased organizational efficiency. Departments adopt new processes with minimal resistance through effective change management and training.");
    record1.set("difficulty", "advanced");
  app.save(record1);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})