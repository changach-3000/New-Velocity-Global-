/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Legal Compliance in Lease Agreements");
    record0.set("description", "Master legal compliance in lease agreements. Learn comprehensive regulatory frameworks including UCC, TILA, ECOA, FCRA, and state-specific laws. Understand essential lease provisions, disclosure requirements, consumer protection laws, and fair lending compliance. Develop expertise in tax compliance, accounting standards (ASC 842, IFRS 16), default remedies, dispute resolution, and compliance audits. Includes detailed case studies, compliance checklists, and practical frameworks for ensuring legal compliance across all lease types and jurisdictions.");
    record0.set("instructor_name", "Leasing Professionals Academy");
    record0.set("price", 1);
    record0.set("duration_hours", 7);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})