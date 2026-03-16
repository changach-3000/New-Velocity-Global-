/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("case_studies");

  const record0 = new Record(collection);
    record0.set("title", "Commercial Real Estate Lease Analysis");
    record0.set("description", "Analysis of a 10-year commercial office lease");
    record0.set("scenario", "A company negotiates a 10-year lease for 50,000 sq ft office space at $25/sq ft annually with 3% annual escalation");
    record0.set("requirements", "Determine lease classification, calculate ROU asset and liability, assess financial impact");
    record0.set("analysis_framework", "Apply IFRS 16 framework, calculate present value of lease payments, evaluate lease terms");
    record0.set("expected_outcome", "Understand lease accounting mechanics and financial statement impact");
    record0.set("difficulty_level", "Intermediate");
    record0.set("course_module", "Lease Fundamentals");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("title", "Equipment Lease Valuation Analysis");
    record1.set("description", "Comprehensive financial analysis of equipment lease");
    record1.set("scenario", "A manufacturing company evaluates leasing vs purchasing $5M equipment over 5 years");
    record1.set("requirements", "Calculate NPV, IRR, and compare lease vs buy options");
    record1.set("analysis_framework", "Use DCF analysis, sensitivity analysis, and scenario modeling");
    record1.set("expected_outcome", "Understand financial metrics and make informed lease decisions");
    record1.set("difficulty_level", "Advanced");
    record1.set("course_module", "Financial Analysis");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("title", "Complex Lease Negotiation Case");
    record2.set("description", "Multi-party lease negotiation with competing interests");
    record2.set("scenario", "Negotiate a 15-year industrial facility lease with multiple stakeholders and complex requirements");
    record2.set("requirements", "Develop negotiation strategy, identify key terms, structure deal");
    record2.set("analysis_framework", "Apply negotiation principles, stakeholder analysis, and deal structuring");
    record2.set("expected_outcome", "Master advanced negotiation techniques and deal optimization");
    record2.set("difficulty_level", "Advanced");
    record2.set("course_module", "Negotiation Strategies");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("title", "Tax Planning in Lease Structuring");
    record3.set("description", "Optimize lease structure for tax efficiency");
    record3.set("scenario", "Structure a $10M equipment lease to maximize tax benefits while maintaining accounting compliance");
    record3.set("requirements", "Analyze tax implications, optimize structure, ensure ASC 842 compliance");
    record3.set("analysis_framework", "Apply tax planning principles, accounting standards, and financial optimization");
    record3.set("expected_outcome", "Understand tax-efficient lease structuring and accounting treatment");
    record3.set("difficulty_level", "Advanced");
    record3.set("course_module", "Tax Implications");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("title", "Lease Dispute Resolution Case");
    record4.set("description", "Navigate complex lease dispute and resolution");
    record4.set("scenario", "Resolve a dispute over lease payment obligations and maintenance responsibilities");
    record4.set("requirements", "Identify risks, apply dispute resolution mechanisms, structure settlement");
    record4.set("analysis_framework", "Apply risk management principles and dispute resolution strategies");
    record4.set("expected_outcome", "Master risk identification and dispute resolution techniques");
    record4.set("difficulty_level", "Advanced");
    record4.set("course_module", "Risk Management");
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})