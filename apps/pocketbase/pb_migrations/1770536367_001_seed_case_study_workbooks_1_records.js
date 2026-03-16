/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("case_study_workbooks");

  const record0 = new Record(collection);
    record0.set("title", "Advanced Leasing Strategies - Master Case Study");
    record0.set("lesson_id", "master_course");
    record0.set("part_number", 5);
    record0.set("case_study_name", "GlobalLeasing Corp");
    record0.set("company_background", "Multinational lessor with $5B portfolio comprising 5,000 leases across multiple countries, equipment types, and industries. Current situation: Managing complex global lease portfolio with diverse challenges. Objective: Develop comprehensive leasing strategy addressing all 12 course topics: strategic planning, financial analysis, lease vs buy, tax optimization, accounting optimization, advanced structuring, portfolio management, risk management, advanced strategies, ESG, digital transformation, and market trends.");
    record0.set("workbook_sections", "1. Company Background and Strategic Objectives - Overview of GlobalLeasing Corp, $5B portfolio, and strategic objectives\n2. Strategic Planning Worksheet - Develop overall strategic plan\n3. Financial Analysis Worksheet - Conduct comprehensive financial analysis\n4. Lease vs Buy Analysis Worksheet - Analyze lease vs buy decisions for key equipment\n5. Tax Optimization Worksheet - Develop tax optimization strategy\n6. Accounting Optimization Worksheet - Develop accounting optimization strategy\n7. Advanced Structuring Worksheet - Develop advanced structuring strategy\n8. Portfolio Management Worksheet - Develop portfolio management strategy\n9. Risk Management Worksheet - Develop risk management strategy\n10. Advanced Strategies Worksheet - Develop advanced strategies (securitization, syndication, hedging)\n11. ESG Strategy Worksheet - Develop ESG strategy\n12. Digital Transformation Worksheet - Develop digital transformation strategy\n13. Market Trends Strategy Worksheet - Develop market trends strategy\n14. Integrated Case Study Questions - 20 comprehensive questions covering all course topics\n15. Comprehensive Solutions and Strategic Recommendations - Complete solutions with strategic recommendations");
    record0.set("includes_worksheets", true);
    record0.set("includes_templates", true);
    record0.set("includes_solutions", true);
    record0.set("content_summary", "Comprehensive master case study workbook for entire Advanced Leasing Strategies course. Covers all 12 course topics: strategic planning, financial analysis, lease vs buy, tax optimization, accounting optimization, advanced structuring, portfolio management, risk management, advanced strategies, ESG, digital transformation, and market trends. Includes 20 integrated questions and comprehensive solutions.");
    record0.set("is_downloadable", true);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})