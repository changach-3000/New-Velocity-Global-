/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("case_study_workbooks");

  const record0 = new Record(collection);
    record0.set("title", "Practical Leasing for Finance Professionals - Master Case Study Workbook");
    record0.set("lesson_id", null);
    record0.set("part_number", null);
    record0.set("case_study_name", "GlobalFinance Corp");
    record0.set("company_background", "Large multinational corporation with $2B annual revenue developing comprehensive leasing strategy covering all 5 course topics for $300M lease portfolio containing 2,000+ leases. Challenge: Integrate lease accounting, financial analysis, financial statement management, tax planning, and implementation best practices into cohesive strategy.");
    record0.set("workbook_sections", "1. Company Background and Strategic Objectives\n2. Current Lease Portfolio Overview ($300M, 2,000+ leases, global distribution)\n3. Integrated Case Study Overview\n4. Lease Accounting Implementation Worksheet (ASC 842 compliance)\n5. Financial Analysis and Decision-Making Worksheet (lease vs buy analysis)\n6. Financial Statement Management Worksheet (balance sheet, income statement, cash flow impacts)\n7. Tax Planning and Optimization Worksheet (tax efficiency strategies)\n8. Implementation and Best Practices Worksheet (portfolio management system)\n9. Integrated Financial Impact Analysis\n10. Comprehensive Lease Portfolio Assessment\n11. Strategic Recommendations Development\n12. Implementation Roadmap Template (5-phase approach)\n13. Performance Metrics and Success Measurement\n14. Practical Exercise 1: Implement ASC 842 for $300M portfolio\n15. Practical Exercise 2: Perform comprehensive financial analysis on lease vs buy decisions\n16. Practical Exercise 3: Analyze financial statement impacts and prepare investor communication\n17. Practical Exercise 4: Develop tax optimization strategy for entire portfolio\n18. Practical Exercise 5: Design and implement comprehensive portfolio management system\n19. Integrated Case Study Questions (15 comprehensive questions covering all 5 course topics)\n20. Solutions and Comprehensive Recommendations with integrated analysis and strategic guidance");
    record0.set("includes_worksheets", true);
    record0.set("includes_templates", true);
    record0.set("includes_solutions", true);
    record0.set("content_summary", "Master case study workbook integrating all 5 course topics. Includes comprehensive worksheets for lease accounting, financial analysis, financial statement management, tax planning, and implementation. Five practical exercises guide users through complete lease portfolio strategy development with integrated solutions and recommendations.");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})