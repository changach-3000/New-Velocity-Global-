/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.set("title", "Advanced Lease Structuring");
    record0.set("description", "An advanced follow-up to Introduction to Leasing. Master complex lease structures including leveraged leases, synthetic leases, international structuring, quantitative modeling, and ESG-focused leasing strategies. This 12-hour course covers the engineering of sophisticated deals, cross-border optimization, residual risk management, and future-proof leasing models.");
    record0.set("instructor_name", "Leasing Specialist");
    record0.set("price", 1);
    record0.set("duration_hours", 12);
    record0.set("estimated_hours", 12);
    record0.set("learning_outcomes", "Understand leveraged lease mechanics and non-recourse debt structures; Master synthetic leases and off-balance-sheet financing; Execute sale-and-leaseback transactions; Optimize cross-border structures using SPVs and tax treaties; Calculate IRR and perform sensitivity analysis; Manage residual value risk and insurance; Apply IFRS 16/ASC 842 accounting standards; Structure green and sustainability-linked leases; Design circular economy and usage-based models; Complete a $50M cross-border aircraft lease simulation");
    record0.set("image_url", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})