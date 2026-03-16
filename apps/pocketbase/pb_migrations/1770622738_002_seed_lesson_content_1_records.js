/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lesson_content");

  const record0 = new Record(collection);
    record0.set("lesson_id", "cly8q5h2k000008l8g5z5g5z5");
    record0.set("content_body", "Credit Analysis & Tenant Evaluation in Equipment Leasing. This lesson covers: 1) Financial Statement Analysis - reviewing balance sheets, income statements, and cash flow statements to assess financial health, 2) Credit Scoring - understanding credit scores and their role in risk assessment, 3) Tenant Creditworthiness Assessment - evaluating the lessee's ability to meet lease obligations, 4) Debt-to-Income Ratios - calculating and interpreting DTI ratios to assess payment capacity, 5) Payment History Evaluation - analyzing past payment patterns and credit behavior to predict future performance");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})