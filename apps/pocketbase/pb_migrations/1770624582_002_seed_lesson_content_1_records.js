/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lesson_content");

  const record0 = new Record(collection);
    record0.set("lesson_id", "ASC 842 Requirements");
    record0.set("content_body", "US GAAP Lease Classification: Operating leases vs Finance leases under ASC 842. Lease Definition: Right to control the use of an identified asset for a period of time. Recognition Criteria: Identify the lease, determine the lease term, identify lease payments, measure ROU asset and lease liability. Operating Leases: Straight-line expense recognition, ROU asset and liability on balance sheet. Finance Leases: Front-loaded expense recognition, similar to IFRS 16 treatment. Measurement Principles: Initial measurement, subsequent measurement, lease modifications. Lease Liability Calculation: Present value of lease payments using the incremental borrowing rate. Right-of-Use Asset Recognition: Initial cost includes lease liability, initial direct costs, restoration obligations. Discount Rate Determination: Incremental borrowing rate or implicit rate if known. Lease Term and Payments: Determination of lease term, identification of lease payments. Practical Examples: Equipment leases, vehicle leases, real estate leases under US GAAP");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})