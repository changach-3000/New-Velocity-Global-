/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lesson_content");

  const record0 = new Record(collection);
    record0.set("lesson_id", "IFRS 16 Fundamentals");
    record0.set("content_body", "Lease Definition under IFRS 16: A contract that conveys the right to use an asset for a period of time in exchange for consideration. Recognition Criteria: Identify the lease, determine the lease term, identify lease payments, measure the right-of-use asset and lease liability. Right-of-Use Assets: Initial measurement at cost, includes lease payments, direct costs, restoration obligations. Lease Liabilities: Present value of lease payments, discounted at the incremental borrowing rate. Initial Measurement: ROU asset = lease liability + initial direct costs + restoration costs - lease incentives. Subsequent Measurement: Depreciate ROU asset, accrue interest on lease liability, remeasure for modifications. Practical Examples: Equipment leases, vehicle leases, real estate leases");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})