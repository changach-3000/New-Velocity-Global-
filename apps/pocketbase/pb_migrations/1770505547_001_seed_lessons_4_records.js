/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lessons");

  const record0 = new Record(collection);
    record0.set("course_id", "Advanced Lease Structuring");
    record0.set("title", "PART 1: LEASE STRUCTURING FUNDAMENTALS");
    record0.set("description", "Part 1 of Advanced Lease Structuring course covering lease structure basics and components, lessor and lessee perspectives, and structuring objectives and constraints");
    record0.set("order", 1);
    record0.set("content_type", "text");
    record0.set("duration", 180);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("course_id", "Advanced Lease Structuring");
    record1.set("title", "LESSON 1.1: Lease Structure Basics and Components");
    record1.set("description", "Understand lease structure fundamentals, key structural components, structure design principles, and how to apply them to lease structuring decisions. Covers what is lease structure, lease structure components (parties, equipment, term, payments, residual value, maintenance, default, termination), lease structure types (simple, leveraged, sale-leaseback, syndicated, cross-border), structural objectives (financial optimization, risk management, tax efficiency, accounting treatment, regulatory compliance), structural constraints (regulatory, financial, market, operational, legal), and includes a case study on lease structure basics.");
    record1.set("order", 1);
    record1.set("content_type", "text");
    record1.set("duration", 60);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("course_id", "Advanced Lease Structuring");
    record2.set("title", "LESSON 1.2: Lessor and Lessee Perspectives");
    record2.set("description", "Understand lessor perspective and objectives, lessee perspective and objectives, alignment strategies, structural trade-offs, and negotiation framework. Covers lessor objectives (ROI, risk management, capital efficiency, portfolio management, competitive positioning), lessor concerns (credit risk, residual value risk, operational risk, market risk, regulatory risk), lessee objectives (cost minimization, flexibility, capital preservation, accounting treatment, operational efficiency), lessee concerns (payment obligations, equipment availability, flexibility limitations, residual value risk, compliance obligations), alignment strategies, structural trade-offs, negotiation framework, and includes a case study on lessor and lessee perspectives.");
    record2.set("order", 2);
    record2.set("content_type", "text");
    record2.set("duration", 60);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("course_id", "Advanced Lease Structuring");
    record3.set("title", "LESSON 1.3: Structuring Objectives and Constraints");
    record3.set("description", "Understand primary and secondary structuring objectives, regulatory constraints, financial constraints, and operational constraints. Covers primary objectives (financial optimization, risk management, tax efficiency, accounting treatment, regulatory compliance), secondary objectives (competitive positioning, operational efficiency, flexibility and scalability, relationship building, innovation), regulatory constraints (lease accounting standards, tax regulations, securities regulations, consumer protection laws, environmental regulations), financial constraints (lessor capital requirements, lessee credit quality, financing availability, market conditions, pricing constraints), operational constraints (equipment availability, vendor relationships, administrative capacity, technology limitations, staffing constraints), and includes a case study on structuring objectives and constraints.");
    record3.set("order", 3);
    record3.set("content_type", "text");
    record3.set("duration", 60);
  app.save(record3);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})