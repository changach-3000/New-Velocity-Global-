/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lesson_content");

  const record0 = new Record(collection);
    record0.set("lesson_id", "Lesson 4");
    record0.set("content_body", "## 3. Lease Classification\n\n### IFRS 16 Single Model\n- All leases recognized on balance sheet\n- No distinction between operating and finance leases\n- Simplified classification approach\n\n### ASC 842 Dual Model\n- Operating leases: ROU asset and liability recognized\n- Finance leases: Similar to IFRS 16 treatment\n- Maintains traditional lease classification\n\n### Classification Criteria\n- IFRS 16: Focuses on control of asset and benefits\n- ASC 842: Uses specific criteria (ownership transfer, purchase option, lease term, etc.)\n- Different outcomes possible for same lease\n\n### Financial Statement Impact\n- IFRS 16: More assets and liabilities on balance sheet\n- ASC 842: Operating leases still off-balance sheet in some respects\n- Different impact on financial ratios\n\n---\n\n## 4. Initial Measurement\n\n### ROU Asset Calculation\n- IFRS 16: Lease liability + initial direct costs - lease incentives\n- ASC 842: Lease liability + initial direct costs\n- Different treatment of incentives\n\n### Lease Liability Calculation\n- Both standards: Present value of lease payments\n- IFRS 16: Uses IBR as primary method\n- ASC 842: Uses implicit rate if available\n\n### Initial Direct Costs\n- IFRS 16: Excluded from ROU asset (expensed)\n- ASC 842: Included in ROU asset\n- Significant difference in initial measurement\n\n### Lease Incentives\n- IFRS 16: Reduces ROU asset\n- ASC 842: Reduces lease liability\n- Different balance sheet presentation");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})