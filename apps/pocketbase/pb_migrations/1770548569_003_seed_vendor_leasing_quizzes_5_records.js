/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("vendor_leasing_quizzes");

  const record0 = new Record(collection);
    record0.set("lessonId", "lesson_4");
    record0.set("title", "Lesson 4 Quiz - Lease Accounting Implementation");
    record0.set("questionCount", 10);
    record0.set("questions", "Q1: What are the key steps in implementing ASC 842? | Q2: How do you select a lease accounting system? | Q3: What data is required for lease accounting? | Q4: How should you organize lease data? | Q5: What is the role of lease abstraction? | Q6: How do you ensure data accuracy? | Q7: What controls should be implemented? | Q8: How do you handle legacy lease data? | Q9: What is the importance of system integration? | Q10: How do you validate lease accounting calculations?");
    record0.set("answers", "A: Assess current state, design processes, select systems, implement, and test | A: Evaluate functionality, cost, vendor support, and integration capabilities | A: Lease agreements, payment terms, options, and modification history | A: Centralized repository with standardized fields and classifications | A: Process of extracting key lease terms from agreements | A: Implement controls, perform reconciliations, and conduct audits | A: Segregation of duties, approval workflows, and change management | A: Migrate to new system with validation and reconciliation | A: Ensures seamless data flow and reduces manual work | A: Compare system calculations to manual calculations and audit trails");
    record0.set("passingScore", 70);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("lessonId", "lesson_4");
    record1.set("title", "Lesson 4 Quiz - Portfolio Management");
    record1.set("questionCount", 10);
    record1.set("questions", "Q1: What is lease portfolio management? | Q2: How do you categorize leases in a portfolio? | Q3: What metrics should be tracked for lease portfolios? | Q4: How do you identify optimization opportunities? | Q5: What is the role of lease abstraction in portfolio management? | Q6: How do you manage lease modifications? | Q7: What is the importance of lease renewal planning? | Q8: How do you handle lease terminations? | Q9: What reporting is needed for lease portfolios? | Q10: How do you ensure portfolio compliance?");
    record1.set("answers", "A: Centralized management of all organizational leases for optimization | A: By asset type, location, business unit, and accounting treatment | A: Total lease obligations, average lease term, and cost per unit | A: By analyzing lease terms, usage patterns, and market conditions | A: It provides standardized data for analysis and decision-making | A: Document changes, update accounting, and communicate to stakeholders | A: Allows proactive planning and negotiation of favorable terms | A: Follow contractual procedures and update accounting records | A: Lease schedules, aging analysis, and compliance reports | A: Through regular audits, controls, and management oversight");
    record1.set("passingScore", 70);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("lessonId", "lesson_4");
    record2.set("title", "Lesson 4 Quiz - Internal Controls and Compliance");
    record2.set("questionCount", 10);
    record2.set("questions", "Q1: What are key internal controls for lease accounting? | Q2: How do you ensure lease agreement completeness? | Q3: What is the role of management review? | Q4: How do you prevent unauthorized lease commitments? | Q5: What documentation should be maintained? | Q6: How do you handle lease modifications? | Q7: What is the importance of segregation of duties? | Q8: How do you ensure timely lease accounting? | Q9: What audit procedures should be performed? | Q10: How do you address control deficiencies?");
    record2.set("answers", "A: Authorization, segregation of duties, reconciliation, and management review | A: Require complete agreements before accounting recognition | A: Approval of new leases, modifications, and significant transactions | A: Implement approval workflows and authorization limits | A: Lease agreements, abstracts, calculations, and supporting documentation | A: Require documentation and approval before accounting changes | A: Prevents fraud and ensures accuracy of lease accounting | A: Establish deadlines and monitor compliance | A: Test controls, verify calculations, and review disclosures | A: Document issues, develop remediation plans, and monitor resolution");
    record2.set("passingScore", 70);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("lessonId", "lesson_4");
    record3.set("title", "Lesson 4 Quiz - Financial Reporting and Disclosures");
    record3.set("questionCount", 10);
    record3.set("questions", "Q1: What lease disclosures are required under ASC 842? | Q2: How do you present lease liabilities on the balance sheet? | Q3: What is the treatment of lease expense? | Q4: How do you calculate lease-related ratios? | Q5: What segment reporting is required for leases? | Q6: How do you handle lease modifications in reporting? | Q7: What is the importance of lease reconciliation? | Q8: How do you present lease cash flows? | Q9: What qualitative disclosures are required? | Q10: How do you ensure disclosure completeness?");
    record3.set("answers", "A: Lease obligations, ROU assets, lease expense, and lease terms | A: As separate line items or combined with other liabilities | A: Operating lease expense recognized on straight-line basis | A: Debt-to-equity, interest coverage, and lease-adjusted metrics | A: Disclose leases by segment if material | A: Adjust ROU asset and lease liability for modification impact | A: Ensures accuracy and identifies discrepancies | A: Lease payments shown as financing activities | A: Lease strategy, significant terms, and management judgments | A: Use disclosure checklists and conduct management review");
    record3.set("passingScore", 70);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("lessonId", "lesson_4");
    record4.set("title", "Lesson 4 Quiz - System Administration and Optimization");
    record4.set("questionCount", 10);
    record4.set("questions", "Q1: What are key system administration responsibilities? | Q2: How do you manage system access and security? | Q3: What is the importance of system testing? | Q4: How do you handle system updates and upgrades? | Q5: What backup and recovery procedures are needed? | Q6: How do you optimize system performance? | Q7: What training is required for system users? | Q8: How do you troubleshoot system issues? | Q9: What is the role of system documentation? | Q10: How do you plan for system scalability?");
    record4.set("answers", "A: User management, data maintenance, system monitoring, and support | A: Implement role-based access, password policies, and audit trails | A: Ensures system functions correctly and meets requirements | A: Plan updates, test thoroughly, and communicate changes | A: Regular backups, disaster recovery plans, and testing | A: Monitor performance, optimize queries, and manage data | A: Provide initial and ongoing training on system functionality | A: Review logs, test configurations, and engage vendor support | A: Maintain user guides, process documentation, and system specifications | A: Evaluate growth needs and ensure system can accommodate expansion");
    record4.set("passingScore", 70);
  app.save(record4);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})