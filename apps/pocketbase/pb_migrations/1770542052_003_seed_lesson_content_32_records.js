/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lesson_content");

  const record0 = new Record(collection);
    record0.set("lesson_id", "lesson-1-fundamentals");
    record0.set("content_body", "Section 1: Introduction to Equipment Leasing\n\nEquipment leasing is a financing method where a lessor owns equipment and allows a lessee to use it for a specified period in exchange for periodic payments. This section covers:\n\n- Definition and characteristics of equipment leases\n- Historical context and evolution of leasing\n- Key participants in lease transactions\n- Basic lease terminology and concepts\n\nKey Concepts:\n- Lessor: The owner of the equipment\n- Lessee: The user of the equipment\n- Lease term: The period of the lease agreement\n- Residual value: The expected value at lease end\n- Bargain purchase option: Option to buy at below-market price");
    record0.set("video_url", "https://example.com/lesson1-section1.mp4");
    record0.set("resources", []);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("lesson_id", "lesson-1-fundamentals");
    record1.set("content_body", "Section 2: Types of Leases\n\nUnderstanding different lease types is crucial for tax planning:\n\n- Operating Leases: Short-term, lessor retains ownership risks\n- Capital (Finance) Leases: Long-term, lessee assumes ownership risks\n- True Leases: Meet IRS requirements for lease treatment\n- Conditional Sales: Disguised purchases\n\nTax Implications:\n- Operating lease payments are fully deductible\n- Capital lease depreciation and interest are deductible\n- Lease classification affects timing of deductions\n- IRS scrutiny of lease vs. purchase decisions");
    record1.set("video_url", "https://example.com/lesson1-section2.mp4");
    record1.set("resources", []);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("lesson_id", "lesson-1-fundamentals");
    record2.set("content_body", "Section 3: Tax Implications Overview\n\nBasic tax treatment of equipment leases:\n\n- Deductibility of lease payments\n- Depreciation considerations\n- Interest deduction components\n- Residual value implications\n- Lease vs. buy analysis\n\nIRS Requirements:\n- Substance over form doctrine\n- Economic reality test\n- True lease requirements\n- Documentation standards");
    record2.set("video_url", "https://example.com/lesson1-section3.mp4");
    record2.set("resources", []);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("lesson_id", "lesson-1-fundamentals");
    record3.set("content_body", "Section 4: Lease Economics and Structure\n\nUnderstanding the financial structure of leases:\n\n- Lease payment calculations\n- Present value analysis\n- Implicit interest rates\n- Residual value guarantees\n- Buyout options and their tax treatment\n\nStructuring Considerations:\n- Minimizing tax exposure\n- Optimizing cash flow\n- Balancing lessor and lessee interests\n- Compliance with IRS guidelines");
    record3.set("video_url", "https://example.com/lesson1-section4.mp4");
    record3.set("resources", []);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("lesson_id", "lesson-2-depreciation");
    record4.set("content_body", "Section 1: Depreciation Methods and Systems\n\nComprehensive overview of depreciation strategies:\n\n- MACRS (Modified Accelerated Cost Recovery System)\n- Useful life determination\n- Recovery periods by asset class\n- Straight-line vs. accelerated methods\n- Half-year and mid-quarter conventions\n\nKey Calculations:\n- Annual depreciation amounts\n- Cumulative depreciation tracking\n- Basis adjustments\n- Recapture considerations");
    record4.set("video_url", "https://example.com/lesson2-section1.mp4");
    record4.set("resources", []);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("lesson_id", "lesson-2-depreciation");
    record5.set("content_body", "Section 2: Bonus Depreciation Strategies\n\nMaximizing first-year deductions:\n\n- 100% bonus depreciation (current rules)\n- Qualified property requirements\n- Placed-in-service timing\n- Bonus depreciation phase-out\n- Election procedures and documentation\n\nPlanning Opportunities:\n- Timing equipment acquisitions\n- Maximizing current-year deductions\n- Managing AMT implications\n- Coordinating with other tax provisions");
    record5.set("video_url", "https://example.com/lesson2-section2.mp4");
    record5.set("resources", []);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("lesson_id", "lesson-2-depreciation");
    record6.set("content_body", "Section 3: Section 179 Expensing\n\nImmediate deduction strategies:\n\n- Section 179 election mechanics\n- Annual expensing limits\n- Qualified property requirements\n- Business income limitations\n- Carryforward provisions\n\nOptimization Techniques:\n- Coordinating with bonus depreciation\n- Managing taxable income\n- Multi-year planning\n- Entity-level considerations");
    record6.set("video_url", "https://example.com/lesson2-section3.mp4");
    record6.set("resources", []);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("lesson_id", "lesson-2-depreciation");
    record7.set("content_body", "Section 4: Cost Segregation and Advanced Techniques\n\nMaximizing depreciation deductions:\n\n- Cost segregation studies\n- Component depreciation\n- Accelerated recovery periods\n- Land vs. building allocation\n- Leasehold improvements\n\nImplementation:\n- Engaging cost segregation specialists\n- Documentation requirements\n- IRS examination considerations\n- ROI analysis");
    record7.set("video_url", "https://example.com/lesson2-section4.mp4");
    record7.set("resources", []);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("lesson_id", "lesson-3-interest");
    record8.set("content_body", "Section 1: Interest Deduction Fundamentals\n\nBasic principles of interest deductibility:\n\n- Deductibility requirements\n- Business purpose test\n- Reasonable interest rates\n- Implicit vs. explicit interest\n- Lease payment allocation\n\nKey Rules:\n- IRC Section 163 requirements\n- Disallowance provisions\n- Related-party limitations\n- Debt-to-equity considerations");
    record8.set("video_url", "https://example.com/lesson3-section1.mp4");
    record8.set("resources", []);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("lesson_id", "lesson-3-interest");
    record9.set("content_body", "Section 2: Lease Payment Allocation\n\nSeparating interest from principal:\n\n- Implicit interest calculation\n- Effective interest method\n- Lease payment components\n- Residual value guarantees\n- Buyout option implications\n\nTax Treatment:\n- Interest deduction timing\n- Principal reduction tracking\n- Basis adjustments\n- Recapture considerations");
    record9.set("video_url", "https://example.com/lesson3-section2.mp4");
    record9.set("resources", []);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("lesson_id", "lesson-3-interest");
    record10.set("content_body", "Section 3: Interest Limitation Rules\n\nNavigating modern interest deduction limitations:\n\n- Section 163(j) limitations\n- Business interest expense cap\n- Adjusted taxable income calculations\n- Carryforward provisions\n- Real property exceptions\n\nPlanning Strategies:\n- Optimizing entity structure\n- Managing debt levels\n- Timing acquisitions\n- Coordinating with other provisions");
    record10.set("video_url", "https://example.com/lesson3-section3.mp4");
    record10.set("resources", []);
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("lesson_id", "lesson-3-interest");
    record11.set("content_body", "Section 4: Advanced Interest Strategies\n\nMaximizing interest deductions:\n\n- Leveraged lease structures\n- Synthetic leases\n- Cross-border leasing\n- Tiered financing arrangements\n- Interest rate optimization\n\nCompliance and Risk:\n- IRS scrutiny areas\n- Documentation requirements\n- Substance-over-form analysis\n- Audit defense strategies");
    record11.set("video_url", "https://example.com/lesson3-section4.mp4");
    record11.set("resources", []);
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("lesson_id", "lesson-4-classification");
    record12.set("content_body", "Section 1: ASC 842 Lease Accounting\n\nModern lease accounting standards:\n\n- Right-of-use (ROU) asset recognition\n- Lease liability measurement\n- Operating vs. finance lease classification\n- Lease term determination\n- Discount rate selection\n\nFinancial Statement Impact:\n- Balance sheet presentation\n- Income statement effects\n- Cash flow implications\n- Disclosure requirements");
    record12.set("video_url", "https://example.com/lesson4-section1.mp4");
    record12.set("resources", []);
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("lesson_id", "lesson-4-classification");
    record13.set("content_body", "Section 2: Tax Lease Classification\n\nIRS lease classification rules:\n\n- True lease requirements\n- Substance-over-form doctrine\n- Economic reality test\n- Ownership characteristics\n- Residual value analysis\n\nClassification Factors:\n- Lease term vs. asset life\n- Bargain purchase options\n- Lessor's investment recovery\n- Lessor's profit motive");
    record13.set("video_url", "https://example.com/lesson4-section2.mp4");
    record13.set("resources", []);
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("lesson_id", "lesson-4-classification");
    record14.set("content_body", "Section 3: Reconciling Book and Tax Treatment\n\nManaging differences between accounting and tax:\n\n- Timing differences\n- Permanent differences\n- Deferred tax asset/liability calculations\n- ASC 740 implications\n- Uncertain tax position analysis\n\nDocumentation:\n- Supporting schedules\n- Reconciliation workpapers\n- Tax provision calculations\n- Audit trail maintenance");
    record14.set("video_url", "https://example.com/lesson4-section3.mp4");
    record14.set("resources", []);
  app.save(record14);

  const record15 = new Record(collection);
    record15.set("lesson_id", "lesson-4-classification");
    record15.set("content_body", "Section 4: Lease Classification Planning\n\nStrategic classification decisions:\n\n- Operating vs. capital lease elections\n- Timing of lease commencement\n- Lease term structuring\n- Residual value guarantees\n- Buyout option design\n\nOptimization:\n- Tax efficiency analysis\n- Financial reporting considerations\n- Covenant compliance\n- Stakeholder impact");
    record15.set("video_url", "https://example.com/lesson4-section4.mp4");
    record15.set("resources", []);
  app.save(record15);

  const record16 = new Record(collection);
    record16.set("lesson_id", "lesson-5-sale-leaseback");
    record16.set("content_body", "Section 1: Sale-Leaseback Fundamentals\n\nBasic structure and mechanics:\n\n- Definition and purpose\n- Typical transaction flow\n- Parties involved\n- Economic substance requirements\n- Tax treatment overview\n\nKey Considerations:\n- Fair market value determination\n- Lease term and residual value\n- Financing arrangements\n- Regulatory compliance");
    record16.set("video_url", "https://example.com/lesson5-section1.mp4");
    record16.set("resources", []);
  app.save(record16);

  const record17 = new Record(collection);
    record17.set("lesson_id", "lesson-5-sale-leaseback");
    record17.set("content_body", "Section 2: Tax Treatment of Sale-Leasebacks\n\nComprehensive tax analysis:\n\n- Gain/loss recognition on sale\n- Lease classification implications\n- Depreciation recapture\n- Deferred gain treatment\n- Related-party considerations\n\nPlanning Opportunities:\n- Timing of transactions\n- Gain deferral strategies\n- Basis step-up planning\n- Entity structure optimization");
    record17.set("video_url", "https://example.com/lesson5-section2.mp4");
    record17.set("resources", []);
  app.save(record17);

  const record18 = new Record(collection);
    record18.set("lesson_id", "lesson-5-sale-leaseback");
    record18.set("content_body", "Section 3: Synthetic Leases and Structured Arrangements\n\nAdvanced sale-leaseback structures:\n\n- Synthetic lease characteristics\n- Accounting vs. tax treatment\n- Off-balance-sheet financing\n- Regulatory considerations\n- Risk allocation mechanisms\n\nCompliance Issues:\n- IRS scrutiny of synthetic leases\n- Documentation requirements\n- Substance-over-form analysis\n- Recent guidance and changes");
    record18.set("video_url", "https://example.com/lesson5-section3.mp4");
    record18.set("resources", []);
  app.save(record18);

  const record19 = new Record(collection);
    record19.set("lesson_id", "lesson-5-sale-leaseback");
    record19.set("content_body", "Section 4: Sale-Leaseback Planning and Execution\n\nPractical implementation strategies:\n\n- Transaction structuring\n- Valuation and pricing\n- Financing arrangements\n- Documentation and closing\n- Post-closing compliance\n\nRisk Management:\n- IRS examination preparation\n- Audit defense strategies\n- Contingency planning\n- Ongoing monitoring");
    record19.set("video_url", "https://example.com/lesson5-section4.mp4");
    record19.set("resources", []);
  app.save(record19);

  const record20 = new Record(collection);
    record20.set("lesson_id", "lesson-6-pass-through");
    record20.set("content_body", "Section 1: S-Corporation Lease Considerations\n\nTax treatment in S-Corps:\n\n- Pass-through taxation\n- Shareholder basis implications\n- Lease deduction allocation\n- Depreciation recapture\n- Built-in gains tax\n\nPlanning Strategies:\n- Optimizing lease structure\n- Managing shareholder basis\n- Timing distributions\n- Coordinating with other provisions");
    record20.set("video_url", "https://example.com/lesson6-section1.mp4");
    record20.set("resources", []);
  app.save(record20);

  const record21 = new Record(collection);
    record21.set("lesson_id", "lesson-6-pass-through");
    record21.set("content_body", "Section 2: LLC and Partnership Lease Treatment\n\nPass-through entity considerations:\n\n- Allocation of lease deductions\n- Basis adjustments\n- Depreciation recapture\n- Guaranteed payments\n- Special allocations\n\nComplexities:\n- Multi-member vs. single-member\n- Tiered partnerships\n- Carried interests\n- Preferred returns");
    record21.set("video_url", "https://example.com/lesson6-section2.mp4");
    record21.set("resources", []);
  app.save(record21);

  const record22 = new Record(collection);
    record22.set("lesson_id", "lesson-6-pass-through");
    record22.set("content_body", "Section 3: Qualified Business Income (QBI) Deduction\n\nSection 199A implications:\n\n- QBI deduction calculation\n- W-2 wage limitations\n- Unadjusted basis of qualified property\n- Specified service trade or business\n- Lease deduction impact\n\nOptimization:\n- Entity structure planning\n- Wage and property tracking\n- Deduction maximization\n- Compliance documentation");
    record22.set("video_url", "https://example.com/lesson6-section3.mp4");
    record22.set("resources", []);
  app.save(record22);

  const record23 = new Record(collection);
    record23.set("lesson_id", "lesson-6-pass-through");
    record23.set("content_body", "Section 4: Multi-Entity Lease Structures\n\nComplex pass-through arrangements:\n\n- Tiered entity structures\n- Lease financing arrangements\n- Related-party leases\n- Intercompany transactions\n- Consolidated return considerations\n\nPlanning and Compliance:\n- Economic substance analysis\n- Transfer pricing considerations\n- Documentation requirements\n- Audit risk assessment");
    record23.set("video_url", "https://example.com/lesson6-section4.mp4");
    record23.set("resources", []);
  app.save(record23);

  const record24 = new Record(collection);
    record24.set("lesson_id", "lesson-7-compliance");
    record24.set("content_body", "Section 1: IRS Requirements and Documentation\n\nEssential compliance elements:\n\n- Lease agreement requirements\n- Fair market value documentation\n- Economic analysis\n- Appraisals and valuations\n- Supporting schedules\n\nKey Documents:\n- Lease agreements\n- Financing documents\n- Valuation reports\n- Tax opinions\n- Closing documents");
    record24.set("video_url", "https://example.com/lesson7-section1.mp4");
    record24.set("resources", []);
  app.save(record24);

  const record25 = new Record(collection);
    record25.set("lesson_id", "lesson-7-compliance");
    record25.set("content_body", "Section 2: Tax Return Reporting\n\nProper reporting on tax returns:\n\n- Schedule C reporting\n- Form 4562 depreciation\n- Form 8949 sales of assets\n- Lease payment deductions\n- Interest deduction reporting\n\nCompliance Checklist:\n- Accurate classification\n- Timely filing\n- Consistent treatment\n- Supporting documentation\n- Amendment procedures");
    record25.set("video_url", "https://example.com/lesson7-section2.mp4");
    record25.set("resources", []);
  app.save(record25);

  const record26 = new Record(collection);
    record26.set("lesson_id", "lesson-7-compliance");
    record26.set("content_body", "Section 3: IRS Examination and Audit Defense\n\nPreparing for IRS scrutiny:\n\n- Common examination issues\n- Audit triggers\n- Examination procedures\n- Defense strategies\n- Appeals process\n\nRisk Mitigation:\n- Proactive documentation\n- Contemporaneous analysis\n- Professional opinions\n- Reasonable positions\n- Disclosure strategies");
    record26.set("video_url", "https://example.com/lesson7-section3.mp4");
    record26.set("resources", []);
  app.save(record26);

  const record27 = new Record(collection);
    record27.set("lesson_id", "lesson-7-compliance");
    record27.set("content_body", "Section 4: Regulatory Changes and Updates\n\nStaying current with tax law:\n\n- Recent legislative changes\n- IRS guidance and rulings\n- Court decisions\n- Regulatory updates\n- Industry developments\n\nContinuing Education:\n- Monitoring IRS publications\n- Professional resources\n- Industry conferences\n- Peer networking\n- Compliance updates");
    record27.set("video_url", "https://example.com/lesson7-section4.mp4");
    record27.set("resources", []);
  app.save(record27);

  const record28 = new Record(collection);
    record28.set("lesson_id", "lesson-8-advanced");
    record28.set("content_body", "Section 1: Complex Lease Structures\n\nAdvanced transaction types:\n\n- Leveraged leases\n- Cross-border leases\n- Equipment pools\n- Tiered financing\n- Synthetic leases\n\nAnalysis Framework:\n- Economic substance evaluation\n- Tax efficiency assessment\n- Risk analysis\n- Compliance review\n- Documentation strategy");
    record28.set("video_url", "https://example.com/lesson8-section1.mp4");
    record28.set("resources", []);
  app.save(record28);

  const record29 = new Record(collection);
    record29.set("lesson_id", "lesson-8-advanced");
    record29.set("content_body", "Section 2: Multi-Jurisdictional Planning\n\nInternational and multi-state considerations:\n\n- State tax implications\n- International leasing\n- Transfer pricing\n- Withholding taxes\n- Treaty considerations\n\nPlanning Strategies:\n- Jurisdiction selection\n- Entity location optimization\n- Financing arrangements\n- Compliance coordination");
    record29.set("video_url", "https://example.com/lesson8-section2.mp4");
    record29.set("resources", []);
  app.save(record29);

  const record30 = new Record(collection);
    record30.set("lesson_id", "lesson-8-advanced");
    record30.set("content_body", "Section 3: Real-World Case Studies\n\nPractical applications and lessons:\n\n- Manufacturing equipment leases\n- Technology equipment financing\n- Real estate sale-leasebacks\n- Equipment pools and portfolios\n- Distressed situations\n\nKey Takeaways:\n- Common pitfalls\n- Best practices\n- Lessons learned\n- Future trends");
    record30.set("video_url", "https://example.com/lesson8-section3.mp4");
    record30.set("resources", []);
  app.save(record30);

  const record31 = new Record(collection);
    record31.set("lesson_id", "lesson-8-advanced");
    record31.set("content_body", "Section 4: Future Trends and Emerging Issues\n\nLooking ahead in equipment leasing:\n\n- Legislative proposals\n- Regulatory trends\n- Technology impacts\n- Market developments\n- Professional opportunities\n\nContinuing Development:\n- Emerging technologies\n- Sustainability considerations\n- ESG implications\n- Industry evolution\n- Career advancement");
    record31.set("video_url", "https://example.com/lesson8-section4.mp4");
    record31.set("resources", []);
  app.save(record31);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})