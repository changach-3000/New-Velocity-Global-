/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "quiz_1_1_id");
    record0.set("question_text", "What is the definition of leasing?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"A) Ownership transfer\", \"B) Long-term rental agreement\", \"C) Short-term equipment use\", \"D) Purchase option only\"]");
    record0.set("correct_answer", "B");
    record0.set("explanation", "Leasing is fundamentally a long-term rental agreement where the lessor (owner) grants the lessee (user) the right to use an asset for a specified period in exchange for periodic payments. This is distinct from ownership transfer (which would be a sale), short-term rentals, or purchase options.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "quiz_1_1_id");
    record1.set("question_text", "What is the key difference between operating and finance leases?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"A) Same classification\", \"B) Different accounting treatment\", \"C) Both are capital leases\", \"D) No difference\"]");
    record1.set("correct_answer", "B");
    record1.set("explanation", "Operating and finance leases have fundamentally different accounting treatments. Finance leases (capital leases) are recorded on the balance sheet as assets and liabilities, while operating leases have different accounting implications. The distinction affects how leases appear in financial statements.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "quiz_1_1_id");
    record2.set("question_text", "Which accounting standards govern lease accounting?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"A) ASC 840 only\", \"B) ASC 842 and IFRS 16\", \"C) GAAP only\", \"D) No standards\"]");
    record2.set("correct_answer", "B");
    record2.set("explanation", "ASC 842 (Accounting Standards Codification Topic 842) is the US GAAP standard for lease accounting, while IFRS 16 is the International Financial Reporting Standard. Both standards were updated to require most leases to be recognized on the balance sheet.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "quiz_1_1_id");
    record3.set("question_text", "What are the key criteria for lease classification?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"A) Lessor discretion\", \"B) Lease term, residual value, payment amount, discount rate\", \"C) Lessee preference\", \"D) Industry standard\"]");
    record3.set("correct_answer", "B");
    record3.set("explanation", "Lease classification is determined by specific quantitative and qualitative criteria including: lease term relative to asset life, residual value, present value of lease payments relative to asset fair value, and the discount rate used. These factors determine whether a lease is classified as a finance or operating lease.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "quiz_1_1_id");
    record4.set("question_text", "What are the key components of a lease?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"A) Payment only\", \"B) Payment, term, residual value, interest rate\", \"C) Equipment only\", \"D) Lessor name\"]");
    record4.set("correct_answer", "B");
    record4.set("explanation", "A complete lease includes: periodic lease payments, the lease term (duration), residual value (estimated value at lease end), and the implicit or explicit interest rate. These components are essential for calculating the present value of lease obligations and determining accounting treatment.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "quiz_1_1_id");
    record5.set("question_text", "How do lessor and lessee perspectives differ?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "[\"A) Same perspective\", \"B) Different objectives and risks\", \"C) Lessor always benefits\", \"D) Lessee always benefits\"]");
    record5.set("correct_answer", "B");
    record5.set("explanation", "Lessors and lessees have fundamentally different objectives and risk profiles. Lessors focus on return on investment and residual value recovery, while lessees focus on cost minimization and operational flexibility. These different perspectives require careful structuring and negotiation.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "quiz_1_1_id");
    record6.set("question_text", "What are the advantages of leasing?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"A) No benefits\", \"B) Off-balance sheet potential, tax deductions, flexibility\", \"C) Only tax benefits\", \"D) Only flexibility\"]");
    record6.set("correct_answer", "B");
    record6.set("explanation", "Leasing offers multiple advantages: potential off-balance sheet treatment (under certain conditions), tax deductions for lease payments, operational flexibility to upgrade or return equipment, and preservation of credit capacity. These benefits vary depending on lease structure and accounting treatment.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "quiz_1_1_id");
    record7.set("question_text", "What is residual value in a lease?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "[\"A) Equipment cost\", \"B) Estimated value at lease end\", \"C) Lease payment\", \"D) Interest expense\"]");
    record7.set("correct_answer", "B");
    record7.set("explanation", "Residual value is the estimated fair value of the leased equipment at the end of the lease term. It's a critical component in lease pricing and accounting, affecting both the lessor's return and the lessee's liability. Residual value can be guaranteed, estimated, or shared between parties.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "quiz_1_1_id");
    record8.set("question_text", "How are lease payments calculated?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "[\"A) Random amounts\", \"B) Based on equipment cost, interest rate, residual value\", \"C) Fixed by regulation\", \"D) Lessor discretion\"]");
    record8.set("correct_answer", "B");
    record8.set("explanation", "Lease payments are calculated using financial formulas that consider: the equipment's cost, the lessor's desired return (interest rate), the lease term, and the estimated residual value. The lessor structures payments to recover the equipment cost plus desired profit while accounting for residual value.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "quiz_1_1_id");
    record9.set("question_text", "What is the regulatory framework for leasing?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "[\"A) No regulations\", \"B) ASC 842, IFRS 16, tax code, accounting standards\", \"C) Only tax code\", \"D) Only accounting standards\"]");
    record9.set("correct_answer", "B");
    record9.set("explanation", "Leasing is governed by multiple regulatory frameworks: ASC 842 and IFRS 16 for accounting treatment, tax codes that define deductibility and ownership implications, and various industry-specific regulations. Compliance with all applicable standards is essential for proper lease treatment.");
    record9.set("order", 10);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("quiz_id", "quiz_1_2_id");
    record10.set("question_text", "What are the key requirements of ASC 842?");
    record10.set("question_type", "multiple_choice");
    record10.set("options", "[\"A) Operating leases off-balance sheet\", \"B) All leases on balance sheet with ROU asset and liability\", \"C) Finance leases only\", \"D) No balance sheet impact\"]");
    record10.set("correct_answer", "B");
    record10.set("explanation", "ASC 842 requires that most leases be recognized on the balance sheet with a right-of-use (ROU) asset and a lease liability. This represents a significant change from previous standards and affects financial statements, ratios, and disclosures for both lessors and lessees.");
    record10.set("order", 1);
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("quiz_id", "quiz_1_2_id");
    record11.set("question_text", "How is the ROU asset calculated?");
    record11.set("question_type", "multiple_choice");
    record11.set("options", "[\"A) Lease payment only\", \"B) Lease liability plus initial direct costs\", \"C) Equipment cost\", \"D) Residual value\"]");
    record11.set("correct_answer", "B");
    record11.set("explanation", "The ROU asset is calculated as the lease liability (present value of lease payments) plus any initial direct costs incurred by the lessee. This represents the lessee's right to use the asset over the lease term and is depreciated over the lease term.");
    record11.set("order", 2);
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("quiz_id", "quiz_1_2_id");
    record12.set("question_text", "How is the lease liability measured?");
    record12.set("question_type", "multiple_choice");
    record12.set("options", "[\"A) Total lease payments\", \"B) PV of lease payments at discount rate\", \"C) Equipment cost\", \"D) Lessor's cost\"]");
    record12.set("correct_answer", "B");
    record12.set("explanation", "The lease liability is measured as the present value of lease payments discounted at the lessee's incremental borrowing rate (or the lessor's implicit rate if known). This represents the lessee's obligation to make lease payments and is a key component of balance sheet recognition.");
    record12.set("order", 3);
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("quiz_id", "quiz_1_2_id");
    record13.set("question_text", "What is the accounting treatment for depreciation and interest expense?");
    record13.set("question_type", "multiple_choice");
    record13.set("options", "[\"A) No depreciation\", \"B) ROU asset depreciated, interest on liability\", \"C) Depreciation on equipment cost\", \"D) No interest expense\"]");
    record13.set("correct_answer", "B");
    record13.set("explanation", "Under ASC 842, the ROU asset is depreciated over the lease term (typically straight-line), and interest expense is recognized on the lease liability. The interest expense decreases over time as the liability is paid down, creating a front-loaded expense pattern.");
    record13.set("order", 4);
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("quiz_id", "quiz_1_2_id");
    record14.set("question_text", "How are leases presented in financial statements?");
    record14.set("question_type", "multiple_choice");
    record14.set("options", "[\"A) Off-balance sheet\", \"B) ROU asset and lease liability on balance sheet\", \"C) Expense only\", \"D) No presentation\"]");
    record14.set("correct_answer", "B");
    record14.set("explanation", "Leases are presented on the balance sheet with the ROU asset shown in assets and the lease liability shown in liabilities. The income statement includes depreciation expense on the ROU asset and interest expense on the liability, plus any variable lease payments.");
    record14.set("order", 5);
  app.save(record14);

  const record15 = new Record(collection);
    record15.set("quiz_id", "quiz_1_2_id");
    record15.set("question_text", "How do leases affect cash flow analysis?");
    record15.set("question_type", "multiple_choice");
    record15.set("options", "[\"A) Operating activities only\", \"B) Operating and financing activities\", \"C) Investing activities only\", \"D) No cash flow impact\"]");
    record15.set("correct_answer", "B");
    record15.set("explanation", "Lease payments are split between operating activities (depreciation and interest portions) and financing activities (principal portion of the liability reduction). This split affects cash flow statement presentation and analysis of operating versus financing cash flows.");
    record15.set("order", 6);
  app.save(record15);

  const record16 = new Record(collection);
    record16.set("quiz_id", "quiz_1_2_id");
    record16.set("question_text", "What is the approach to lease versus buy analysis?");
    record16.set("question_type", "multiple_choice");
    record16.set("options", "[\"A) Always lease\", \"B) Compare NPV of lease vs purchase\", \"C) Always buy\", \"D) No comparison needed\"]");
    record16.set("correct_answer", "B");
    record16.set("explanation", "Lease versus buy decisions should be made by comparing the net present value (NPV) of leasing versus purchasing. This analysis considers all costs, tax implications, financing options, and operational factors to determine the most economical option for the specific situation.");
    record16.set("order", 7);
  app.save(record16);

  const record17 = new Record(collection);
    record17.set("quiz_id", "quiz_1_2_id");
    record17.set("question_text", "How are NPV calculations performed for lease analysis?");
    record17.set("question_type", "multiple_choice");
    record17.set("options", "[\"A) Ignore discount rate\", \"B) Use appropriate discount rate for lease vs buy\", \"C) Use fixed rate\", \"D) No discount rate\"]");
    record17.set("correct_answer", "B");
    record17.set("explanation", "NPV calculations for lease versus buy analysis require using an appropriate discount rate that reflects the risk and financing characteristics of each option. The lease option typically uses the lessee's incremental borrowing rate, while the purchase option uses the cost of capital.");
    record17.set("order", 8);
  app.save(record17);

  const record18 = new Record(collection);
    record18.set("quiz_id", "quiz_1_2_id");
    record18.set("question_text", "How are IRR calculations used in lease analysis?");
    record18.set("question_type", "multiple_choice");
    record18.set("options", "[\"A) Not applicable\", \"B) Calculate IRR of lease cash flows\", \"C) Use fixed rate\", \"D) Lessor discretion\"]");
    record18.set("correct_answer", "B");
    record18.set("explanation", "IRR (Internal Rate of Return) calculations are used to determine the implicit return rate in lease cash flows. For lessors, IRR represents the return on investment in the lease. For lessees, IRR can be used to compare the effective cost of leasing versus other financing options.");
    record18.set("order", 9);
  app.save(record18);

  const record19 = new Record(collection);
    record19.set("quiz_id", "quiz_1_2_id");
    record19.set("question_text", "What is the impact of leases on financial ratios?");
    record19.set("question_type", "multiple_choice");
    record19.set("options", "[\"A) No impact\", \"B) Affects debt ratios, asset turnover, interest coverage\", \"C) Only affects equity\", \"D) Only affects liquidity\"]");
    record19.set("correct_answer", "B");
    record19.set("explanation", "Lease recognition under ASC 842 significantly impacts financial ratios: debt ratios increase due to lease liability recognition, asset turnover may decrease due to ROU asset recognition, and interest coverage ratios are affected by the interest expense component of lease payments.");
    record19.set("order", 10);
  app.save(record19);

  const record20 = new Record(collection);
    record20.set("quiz_id", "quiz_2_1_id");
    record20.set("question_text", "What are the objectives of lease structuring?");
    record20.set("question_type", "multiple_choice");
    record20.set("options", "[\"A) Minimize lessor profit\", \"B) Optimize accounting, tax, and cash flow for both parties\", \"C) Maximize lessee cost\", \"D) No objectives\"]");
    record20.set("correct_answer", "B");
    record20.set("explanation", "Lease structuring aims to optimize outcomes for both lessor and lessee by considering accounting treatment, tax implications, cash flow timing, and risk allocation. Effective structuring creates value for both parties while maintaining compliance with applicable standards.");
    record20.set("order", 1);
  app.save(record20);

  const record21 = new Record(collection);
    record21.set("quiz_id", "quiz_2_1_id");
    record21.set("question_text", "How do lessor and lessee perspectives differ in structuring?");
    record21.set("question_type", "multiple_choice");
    record21.set("options", "[\"A) Always aligned\", \"B) Different objectives requiring negotiation\", \"C) Lessor always wins\", \"D) Lessee always wins\"]");
    record21.set("correct_answer", "B");
    record21.set("explanation", "Lessor and lessee perspectives are often different and require negotiation. Lessors seek return on investment and residual value recovery, while lessees seek cost minimization and operational flexibility. Successful structuring balances these competing objectives.");
    record21.set("order", 2);
  app.save(record21);

  const record22 = new Record(collection);
    record22.set("quiz_id", "quiz_2_1_id");
    record22.set("question_text", "What tax considerations are important in lease structuring?");
    record22.set("question_type", "multiple_choice");
    record22.set("options", "[\"A) No tax impact\", \"B) Depreciation, interest deductions, residual value treatment\", \"C) Only depreciation\", \"D) Only interest\"]");
    record22.set("correct_answer", "B");
    record22.set("explanation", "Tax considerations in lease structuring include: depreciation deductions for the lessor, interest deduction for the lessee, treatment of residual value, and potential tax benefits from lease classification. Tax optimization is a key structuring objective.");
    record22.set("order", 3);
  app.save(record22);

  const record23 = new Record(collection);
    record23.set("quiz_id", "quiz_2_1_id");
    record23.set("question_text", "How can accounting treatment be optimized in structuring?");
    record23.set("question_type", "multiple_choice");
    record23.set("options", "[\"A) Ignore accounting\", \"B) Structure to optimize ASC 842 classification\", \"C) Always capitalize\", \"D) Always expense\"]");
    record23.set("correct_answer", "B");
    record23.set("explanation", "Accounting optimization involves structuring leases to achieve desired accounting treatment under ASC 842 and IFRS 16. While most leases must now be capitalized, structuring can affect the timing of expense recognition, the split between depreciation and interest, and financial statement presentation.");
    record23.set("order", 4);
  app.save(record23);

  const record24 = new Record(collection);
    record24.set("quiz_id", "quiz_2_1_id");
    record24.set("question_text", "How is lease term determined in structuring?");
    record24.set("question_type", "multiple_choice");
    record24.set("options", "[\"A) Random\", \"B) Based on equipment life, business needs, tax considerations\", \"C) Fixed by regulation\", \"D) Lessor discretion\"]");
    record24.set("correct_answer", "B");
    record24.set("explanation", "Lease term is determined by considering: the equipment's useful life, the lessee's business needs and planning horizon, tax considerations (such as depreciation schedules), and the lessor's return requirements. The lease term is a critical structuring variable.");
    record24.set("order", 5);
  app.save(record24);

  const record25 = new Record(collection);
    record25.set("quiz_id", "quiz_2_1_id");
    record25.set("question_text", "What payment structures are available in lease design?");
    record25.set("question_type", "multiple_choice");
    record25.set("options", "[\"A) Equal payments only\", \"B) Flexible structures: level, stepped, balloon\", \"C) No structure\", \"D) Lessor discretion\"]");
    record25.set("correct_answer", "B");
    record25.set("explanation", "Lease payments can be structured in various ways: level payments (equal throughout the term), stepped payments (increasing or decreasing over time), balloon payments (large payment at lease end), or other customized structures. Payment structure affects cash flow timing and accounting treatment.");
    record25.set("order", 6);
  app.save(record25);

  const record26 = new Record(collection);
    record26.set("quiz_id", "quiz_2_1_id");
    record26.set("question_text", "How is residual value managed in structuring?");
    record26.set("question_type", "multiple_choice");
    record26.set("options", "[\"A) Ignore residual value\", \"B) Estimate, guarantee, or share residual value\", \"C) Always zero\", \"D) Always 100%\"]");
    record26.set("correct_answer", "B");
    record26.set("explanation", "Residual value can be managed through: estimation (lessor bears risk), guarantees (lessee guarantees minimum value), or sharing (both parties share upside/downside). Residual value management affects lease pricing, risk allocation, and accounting treatment.");
    record26.set("order", 7);
  app.save(record26);

  const record27 = new Record(collection);
    record27.set("quiz_id", "quiz_2_1_id");
    record27.set("question_text", "What covenants should be included in lease design?");
    record27.set("question_type", "multiple_choice");
    record27.set("options", "[\"A) No covenants\", \"B) Maintenance, insurance, use restrictions, financial covenants\", \"C) Only maintenance\", \"D) Only insurance\"]");
    record27.set("correct_answer", "B");
    record27.set("explanation", "Effective lease covenants include: maintenance obligations (to preserve equipment condition), insurance requirements (to protect lessor's interest), use restrictions (to prevent misuse), and financial covenants (to monitor lessee's financial condition). Covenants protect the lessor's interests.");
    record27.set("order", 8);
  app.save(record27);

  const record28 = new Record(collection);
    record28.set("quiz_id", "quiz_2_1_id");
    record28.set("question_text", "What default provisions should be included?");
    record28.set("question_type", "multiple_choice");
    record28.set("options", "[\"A) No defaults\", \"B) Define events of default, remedies, acceleration\", \"C) Only payment default\", \"D) No remedies\"]");
    record28.set("correct_answer", "B");
    record28.set("explanation", "Comprehensive default provisions should define: events of default (payment default, covenant breach, bankruptcy), remedies available to the lessor (cure period, acceleration, repossession), and consequences of default. Clear default provisions protect lessor interests.");
    record28.set("order", 9);
  app.save(record28);

  const record29 = new Record(collection);
    record29.set("quiz_id", "quiz_2_1_id");
    record29.set("question_text", "How are lease modifications handled in structuring?");
    record29.set("question_type", "multiple_choice");
    record29.set("options", "[\"A) Not allowed\", \"B) Allowed with accounting impact analysis\", \"C) Always allowed\", \"D) Never allowed\"]");
    record29.set("correct_answer", "B");
    record29.set("explanation", "Lease modifications are allowed but require careful analysis of accounting impacts. Modifications can affect lease classification, ROU asset and liability calculations, and financial statement presentation. Proper documentation and analysis are essential.");
    record29.set("order", 10);
  app.save(record29);

  const record30 = new Record(collection);
    record30.set("quiz_id", "quiz_2_2_id");
    record30.set("question_text", "What is lease securitization?");
    record30.set("question_type", "multiple_choice");
    record30.set("options", "[\"A) Not possible\", \"B) Pool leases and issue securities to investors\", \"C) Only for real estate\", \"D) No investor involvement\"]");
    record30.set("correct_answer", "B");
    record30.set("explanation", "Lease securitization involves pooling multiple leases and issuing securities backed by the lease cash flows to investors. This allows lessors to monetize lease portfolios, transfer risk, and access capital markets. Securitization is common in equipment and auto leasing.");
    record30.set("order", 1);
  app.save(record30);

  const record31 = new Record(collection);
    record31.set("quiz_id", "quiz_2_2_id");
    record31.set("question_text", "What are synthetic leases?");
    record31.set("question_type", "multiple_choice");
    record31.set("options", "[\"A) Not real leases\", \"B) Structured to achieve specific accounting or tax treatment\", \"C) Always off-balance sheet\", \"D) No accounting impact\"]");
    record31.set("correct_answer", "B");
    record31.set("explanation", "Synthetic leases are structured to achieve specific accounting or tax objectives. They typically combine lease and financing characteristics to optimize treatment under applicable standards. Synthetic leases are commonly used for real estate and equipment.");
    record31.set("order", 2);
  app.save(record31);

  const record32 = new Record(collection);
    record32.set("quiz_id", "quiz_2_2_id");
    record32.set("question_text", "What is lease syndication?");
    record32.set("question_type", "multiple_choice");
    record32.set("options", "[\"A) Not allowed\", \"B) Multiple lessors share lease\", \"C) Only one lessor\", \"D) No sharing\"]");
    record32.set("correct_answer", "B");
    record32.set("explanation", "Lease syndication involves multiple lessors sharing a single lease, each owning a portion of the equipment and receiving a proportionate share of lease payments. Syndication allows lessors to share risk and leverage capital across larger transactions.");
    record32.set("order", 3);
  app.save(record32);

  const record33 = new Record(collection);
    record33.set("quiz_id", "quiz_2_2_id");
    record33.set("question_text", "How are residual value guarantees used?");
    record33.set("question_type", "multiple_choice");
    record33.set("options", "[\"A) Not used\", \"B) Lessor or third party guarantees residual value\", \"C) Always zero\", \"D) Lessee always guarantees\"]");
    record33.set("correct_answer", "B");
    record33.set("explanation", "Residual value guarantees can be provided by the lessor (lessor bears residual risk), the lessee (lessee guarantees minimum value), or a third party (insurance company or manufacturer). Guarantees affect lease pricing, risk allocation, and accounting treatment.");
    record33.set("order", 4);
  app.save(record33);

  const record34 = new Record(collection);
    record34.set("quiz_id", "quiz_2_2_id");
    record34.set("question_text", "What are lease buyouts?");
    record34.set("question_type", "multiple_choice");
    record34.set("options", "[\"A) Not allowed\", \"B) Lessee purchases equipment before lease end\", \"C) Only at lease end\", \"D) Lessor discretion\"]");
    record34.set("correct_answer", "B");
    record34.set("explanation", "Lease buyouts allow the lessee to purchase the equipment before the lease term ends, typically at a predetermined price. Buyout options provide flexibility for lessees and can be structured to optimize accounting and tax treatment.");
    record34.set("order", 5);
  app.save(record34);

  const record35 = new Record(collection);
    record35.set("quiz_id", "quiz_2_2_id");
    record35.set("question_text", "How are equipment upgrades handled?");
    record35.set("question_type", "multiple_choice");
    record35.set("options", "[\"A) Not allowed\", \"B) Replace equipment during lease term\", \"C) Only at lease end\", \"D) No upgrades\"]");
    record35.set("correct_answer", "B");
    record35.set("explanation", "Equipment upgrades allow the lessee to replace equipment with newer models during the lease term. Upgrades provide operational flexibility and can be structured with accounting and tax implications. Upgrade provisions are common in technology leases.");
    record35.set("order", 6);
  app.save(record35);

  const record36 = new Record(collection);
    record36.set("quiz_id", "quiz_2_2_id");
    record36.set("question_text", "What are lease extensions?");
    record36.set("question_type", "multiple_choice");
    record36.set("options", "[\"A) Not allowed\", \"B) Extend lease term with new terms\", \"C) Always automatic\", \"D) No extensions\"]");
    record36.set("correct_answer", "B");
    record36.set("explanation", "Lease extensions allow the lessee to extend the lease term beyond the initial period, typically with renegotiated terms. Extensions provide flexibility and can be structured as optional or automatic. Extensions have accounting implications under ASC 842.");
    record36.set("order", 7);
  app.save(record36);

  const record37 = new Record(collection);
    record37.set("quiz_id", "quiz_2_2_id");
    record37.set("question_text", "How are lease terminations handled?");
    record37.set("question_type", "multiple_choice");
    record37.set("options", "[\"A) Not allowed\", \"B) End lease early with termination fees\", \"C) Always free\", \"D) No terminations\"]");
    record37.set("correct_answer", "B");
    record37.set("explanation", "Lease terminations allow early lease end, typically with termination fees to compensate the lessor for lost revenue and residual value. Termination provisions provide flexibility for lessees and protect lessor interests. Terminations have accounting implications.");
    record37.set("order", 8);
  app.save(record37);

  const record38 = new Record(collection);
    record38.set("quiz_id", "quiz_2_2_id");
    record38.set("question_text", "What are lease transfers?");
    record38.set("question_type", "multiple_choice");
    record38.set("options", "[\"A) Not allowed\", \"B) Transfer lease to another party\", \"C) Only lessor can transfer\", \"D) No transfers\"]");
    record38.set("correct_answer", "B");
    record38.set("explanation", "Lease transfers allow the lessee to transfer its lease obligations to another party, subject to lessor consent. Transfers provide flexibility for lessees and can be structured with accounting implications. Transfers require careful documentation.");
    record38.set("order", 9);
  app.save(record38);

  const record39 = new Record(collection);
    record39.set("quiz_id", "quiz_2_2_id");
    record39.set("question_text", "How is lease accounting optimized in advanced structuring?");
    record39.set("question_type", "multiple_choice");
    record39.set("options", "[\"A) Ignore accounting\", \"B) Structure to optimize ASC 842 classification and financial impact\", \"C) Always capitalize\", \"D) Always expense\"]");
    record39.set("correct_answer", "B");
    record39.set("explanation", "Advanced structuring optimizes accounting treatment by carefully designing lease terms to achieve desired classification, timing of expense recognition, and financial statement impact. Optimization must comply with ASC 842 and IFRS 16 requirements.");
    record39.set("order", 10);
  app.save(record39);

  const record40 = new Record(collection);
    record40.set("quiz_id", "quiz_3_1_id");
    record40.set("question_text", "What are sale-leaseback transactions?");
    record40.set("question_type", "multiple_choice");
    record40.set("options", "[\"A) Not allowed\", \"B) Sell asset and lease back from buyer\", \"C) Only for real estate\", \"D) No accounting impact\"]");
    record40.set("correct_answer", "B");
    record40.set("explanation", "Sale-leaseback transactions involve selling an asset to a buyer and then leasing it back from the buyer. This structure allows the seller to monetize the asset while retaining use. Sale-leasebacks are used for real estate, equipment, and other assets.");
    record40.set("order", 1);
  app.save(record40);

  const record41 = new Record(collection);
    record41.set("quiz_id", "quiz_3_1_id");
    record41.set("question_text", "What are the advantages of sale-leaseback transactions?");
    record41.set("question_type", "multiple_choice");
    record41.set("options", "[\"A) No advantages\", \"B) Liquidity, tax benefits, off-balance sheet potential\", \"C) Only liquidity\", \"D) Only tax benefits\"]");
    record41.set("correct_answer", "B");
    record41.set("explanation", "Sale-leaseback advantages include: liquidity (converting assets to cash), tax benefits (potential gain recognition and depreciation deductions), and potential off-balance sheet treatment (depending on lease structure and accounting standards). These benefits must be carefully analyzed.");
    record41.set("order", 2);
  app.save(record41);

  const record42 = new Record(collection);
    record42.set("quiz_id", "quiz_3_1_id");
    record42.set("question_text", "What are leveraged leases?");
    record42.set("question_type", "multiple_choice");
    record42.set("options", "[\"A) Not used\", \"B) Lessor uses debt financing to purchase equipment\", \"C) Only for real estate\", \"D) No leverage\"]");
    record42.set("correct_answer", "B");
    record42.set("explanation", "Leveraged leases involve the lessor using debt financing to purchase the equipment being leased. The lessor's equity investment is leveraged with debt, increasing return on equity. Leveraged leases are common in large equipment and aircraft leasing.");
    record42.set("order", 3);
  app.save(record42);

  const record43 = new Record(collection);
    record43.set("quiz_id", "quiz_3_1_id");
    record43.set("question_text", "What are syndication structures?");
    record43.set("question_type", "multiple_choice");
    record43.set("options", "[\"A) Not allowed\", \"B) Multiple investors share lease returns\", \"C) Only one investor\", \"D) No sharing\"]");
    record43.set("correct_answer", "B");
    record43.set("explanation", "Syndication structures involve multiple investors sharing the returns from a lease. Syndication allows lessors to share risk, leverage capital, and access larger transactions. Syndication is common in aircraft, shipping, and large equipment leases.");
    record43.set("order", 4);
  app.save(record43);

  const record44 = new Record(collection);
    record44.set("quiz_id", "quiz_3_1_id");
    record44.set("question_text", "How are equity and debt syndication combined?");
    record44.set("question_type", "multiple_choice");
    record44.set("options", "[\"A) Not used\", \"B) Combine equity and debt investors in lease\", \"C) Only equity\", \"D) Only debt\"]");
    record44.set("correct_answer", "B");
    record44.set("explanation", "Equity and debt syndication combines equity investors (who provide capital and share returns) with debt investors (who provide financing). This structure optimizes capital structure, risk allocation, and returns for different investor classes.");
    record44.set("order", 5);
  app.save(record44);

  const record45 = new Record(collection);
    record45.set("quiz_id", "quiz_3_1_id");
    record45.set("question_text", "What is cross-border leasing?");
    record45.set("question_type", "multiple_choice");
    record45.set("options", "[\"A) Not allowed\", \"B) Lease between different countries\", \"C) Only within country\", \"D) No international leases\"]");
    record45.set("correct_answer", "B");
    record45.set("explanation", "Cross-border leasing involves a lessor and lessee in different countries. Cross-border leases require consideration of multiple tax jurisdictions, accounting standards, currency risk, and regulatory requirements. Cross-border leasing is common in international commerce.");
    record45.set("order", 6);
  app.save(record45);

  const record46 = new Record(collection);
    record46.set("quiz_id", "quiz_3_1_id");
    record46.set("question_text", "What international tax considerations apply?");
    record46.set("question_type", "multiple_choice");
    record46.set("options", "[\"A) No tax impact\", \"B) Tax treaties, transfer pricing, withholding taxes\", \"C) Only withholding taxes\", \"D) Only transfer pricing\"]");
    record46.set("correct_answer", "B");
    record46.set("explanation", "International tax considerations include: tax treaties (to avoid double taxation), transfer pricing rules (for related party leases), withholding taxes (on lease payments), and different depreciation rules by country. Tax planning is essential in cross-border leases.");
    record46.set("order", 7);
  app.save(record46);

  const record47 = new Record(collection);
    record47.set("quiz_id", "quiz_3_1_id");
    record47.set("question_text", "How is currency risk managed?");
    record47.set("question_type", "multiple_choice");
    record47.set("options", "[\"A) Ignore currency risk\", \"B) Hedge currency exposure\", \"C) Always accept risk\", \"D) No hedging\"]");
    record47.set("correct_answer", "B");
    record47.set("explanation", "Currency risk in cross-border leases can be managed through: forward contracts (lock in exchange rate), currency options (protect against adverse movements), currency swaps (exchange cash flows in different currencies), or natural hedges (matching revenues and expenses in same currency).");
    record47.set("order", 8);
  app.save(record47);

  const record48 = new Record(collection);
    record48.set("quiz_id", "quiz_3_1_id");
    record48.set("question_text", "What regulatory considerations apply to specialized leases?");
    record48.set("question_type", "multiple_choice");
    record48.set("options", "[\"A) No regulations\", \"B) Different regulations by country\", \"C) Same regulations everywhere\", \"D) No compliance needed\"]");
    record48.set("correct_answer", "B");
    record48.set("explanation", "Specialized leases are subject to different regulations by country, including: accounting standards (ASC 842 vs IFRS 16), tax codes, industry-specific regulations (aviation, shipping), and consumer protection laws. Compliance with all applicable regulations is essential.");
    record48.set("order", 9);
  app.save(record48);

  const record49 = new Record(collection);
    record49.set("quiz_id", "quiz_3_1_id");
    record49.set("question_text", "What risk mitigation strategies apply?");
    record49.set("question_type", "multiple_choice");
    record49.set("options", "[\"A) No strategies\", \"B) Insurance, guarantees, covenants, diversification\", \"C) Only insurance\", \"D) Only guarantees\"]");
    record49.set("correct_answer", "B");
    record49.set("explanation", "Risk mitigation strategies for specialized leases include: insurance (equipment, liability, political risk), guarantees (residual value, credit), covenants (maintenance, use restrictions), and diversification (across lessees, equipment types, geographies). Multiple strategies reduce overall risk.");
    record49.set("order", 10);
  app.save(record49);

  const record50 = new Record(collection);
    record50.set("quiz_id", "quiz_3_2_id");
    record50.set("question_text", "What are cross-border lease structures?");
    record50.set("question_type", "multiple_choice");
    record50.set("options", "[\"A) Not possible\", \"B) Lessor and lessee in different countries\", \"C) Only within same region\", \"D) No international leases\"]");
    record50.set("correct_answer", "B");
    record50.set("explanation", "Cross-border lease structures involve a lessor in one country and a lessee in another. These structures require careful consideration of multiple jurisdictions, tax implications, accounting standards, and regulatory requirements. Cross-border leases are increasingly common in global commerce.");
    record50.set("order", 1);
  app.save(record50);

  const record51 = new Record(collection);
    record51.set("quiz_id", "quiz_3_2_id");
    record51.set("question_text", "What multiple jurisdiction considerations apply?");
    record51.set("question_type", "multiple_choice");
    record51.set("options", "[\"A) No considerations\", \"B) Different laws, tax codes, accounting standards\", \"C) Same everywhere\", \"D) No compliance needed\"]");
    record51.set("correct_answer", "B");
    record51.set("explanation", "Multiple jurisdiction considerations include: different legal systems and contract laws, varying tax codes and depreciation rules, different accounting standards (ASC 842 vs IFRS 16), and industry-specific regulations. Compliance with all jurisdictions is essential.");
    record51.set("order", 2);
  app.save(record51);

  const record52 = new Record(collection);
    record52.set("quiz_id", "quiz_3_2_id");
    record52.set("question_text", "What tax treaty benefits are available?");
    record52.set("question_type", "multiple_choice");
    record52.set("options", "[\"A) No benefits\", \"B) Reduce withholding taxes, avoid double taxation\", \"C) Only reduce taxes\", \"D) Only avoid double taxation\"]");
    record52.set("correct_answer", "B");
    record52.set("explanation", "Tax treaties between countries provide benefits including: reduced withholding tax rates on lease payments, mechanisms to avoid double taxation, and preferential treatment for certain transactions. Tax treaty planning is important in cross-border leases.");
    record52.set("order", 3);
  app.save(record52);

  const record53 = new Record(collection);
    record53.set("quiz_id", "quiz_3_2_id");
    record53.set("question_text", "What transfer pricing rules apply?");
    record53.set("question_type", "multiple_choice");
    record53.set("options", "[\"A) Not applicable\", \"B) Ensure arm's length pricing in related party leases\", \"C) No pricing rules\", \"D) Lessor discretion\"]");
    record53.set("correct_answer", "B");
    record53.set("explanation", "Transfer pricing rules require that related party lease payments be at arm's length (fair market value). Tax authorities scrutinize related party leases to prevent profit shifting. Proper transfer pricing documentation is essential for compliance.");
    record53.set("order", 4);
  app.save(record53);

  const record54 = new Record(collection);
    record54.set("quiz_id", "quiz_3_2_id");
    record54.set("question_text", "What environmental regulations apply?");
    record54.set("question_type", "multiple_choice");
    record54.set("options", "[\"A) Not applicable\", \"B) Compliance required for equipment leases\", \"C) Only for real estate\", \"D) No regulations\"]");
    record54.set("correct_answer", "B");
    record54.set("explanation", "Environmental regulations apply to equipment leases, particularly for equipment that may have environmental impacts (vehicles, industrial equipment). Lessors and lessees must ensure compliance with environmental laws and may face liability for environmental damage.");
    record54.set("order", 5);
  app.save(record54);

  const record55 = new Record(collection);
    record55.set("quiz_id", "quiz_3_2_id");
    record55.set("question_text", "What consumer protection laws apply?");
    record55.set("question_type", "multiple_choice");
    record55.set("options", "[\"A) Not applicable\", \"B) Disclosure and fairness requirements\", \"C) Only for real estate\", \"D) No consumer protection\"]");
    record55.set("correct_answer", "B");
    record55.set("explanation", "Consumer protection laws apply to consumer leases, requiring: clear disclosure of terms, fair pricing, protection against unfair practices, and compliance with truth-in-lending requirements. Consumer protection varies by jurisdiction.");
    record55.set("order", 6);
  app.save(record55);

  const record56 = new Record(collection);
    record56.set("quiz_id", "quiz_3_2_id");
    record56.set("question_text", "What currency hedging strategies are available?");
    record56.set("question_type", "multiple_choice");
    record56.set("options", "[\"A) Not used\", \"B) Forward contracts, options, swaps\", \"C) Only forward contracts\", \"D) No hedging\"]");
    record56.set("correct_answer", "B");
    record56.set("explanation", "Currency hedging strategies include: forward contracts (lock in exchange rate), currency options (protect against adverse movements while allowing upside), currency swaps (exchange cash flows in different currencies), and natural hedges (match revenues and expenses in same currency).");
    record56.set("order", 7);
  app.save(record56);

  const record57 = new Record(collection);
    record57.set("quiz_id", "quiz_3_2_id");
    record57.set("question_text", "What is political risk insurance?");
    record57.set("question_type", "multiple_choice");
    record57.set("options", "[\"A) Not available\", \"B) Insure against political events\", \"C) Only for real estate\", \"D) No insurance\"]");
    record57.set("correct_answer", "B");
    record57.set("explanation", "Political risk insurance protects against losses from political events such as expropriation, currency inconvertibility, political violence, and breach of contract by government. Political risk insurance is important for cross-border leases in emerging markets.");
    record57.set("order", 8);
  app.save(record57);

  const record58 = new Record(collection);
    record58.set("quiz_id", "quiz_3_2_id");
    record58.set("question_text", "What accounting standard differences exist?");
    record58.set("question_type", "multiple_choice");
    record58.set("options", "[\"A) No differences\", \"B) ASC 842 vs IFRS 16 differences\", \"C) Same standards everywhere\", \"D) No standards\"]");
    record58.set("correct_answer", "B");
    record58.set("explanation", "ASC 842 (US GAAP) and IFRS 16 (International standards) have differences in: lease classification criteria, discount rate determination, initial direct costs treatment, and presentation. Understanding these differences is essential for cross-border leases.");
    record58.set("order", 9);
  app.save(record58);

  const record59 = new Record(collection);
    record59.set("quiz_id", "quiz_3_2_id");
    record59.set("question_text", "What compliance requirements apply?");
    record59.set("question_type", "multiple_choice");
    record59.set("options", "[\"A) No requirements\", \"B) Regulatory filings, disclosures, reporting\", \"C) Only filings\", \"D) Only disclosures\"]");
    record59.set("correct_answer", "B");
    record59.set("explanation", "Compliance requirements for cross-border leases include: regulatory filings in each jurisdiction, financial statement disclosures, tax reporting, and industry-specific reporting. Compliance with all requirements is essential to avoid penalties.");
    record59.set("order", 10);
  app.save(record59);

  const record60 = new Record(collection);
    record60.set("quiz_id", "quiz_4_1_id");
    record60.set("question_text", "What is the structure of a lease agreement?");
    record60.set("question_type", "multiple_choice");
    record60.set("options", "[\"A) No structure\", \"B) Master agreement with schedules and exhibits\", \"C) Single document\", \"D) No documentation\"]");
    record60.set("correct_answer", "B");
    record60.set("explanation", "A well-structured lease agreement includes: a master agreement (containing general terms and conditions), equipment schedules (describing specific equipment), exhibits (insurance, maintenance, financial statements), and exhibits (guaranty, security agreement). This structure provides clarity and flexibility.");
    record60.set("order", 1);
  app.save(record60);

  const record61 = new Record(collection);
    record61.set("quiz_id", "quiz_4_1_id");
    record61.set("question_text", "What are the key sections of a lease agreement?");
    record61.set("question_type", "multiple_choice");
    record61.set("options", "[\"A) No sections\", \"B) Definitions, payment terms, covenants, default, remedies\", \"C) Only payment terms\", \"D) Only definitions\"]");
    record61.set("correct_answer", "B");
    record61.set("explanation", "Key sections of a lease agreement include: definitions (clear terms), payment terms (amount, timing, conditions), covenants (obligations of both parties), default provisions (events and remedies), and other standard provisions. Clear sections ensure understanding and enforceability.");
    record61.set("order", 2);
  app.save(record61);

  const record62 = new Record(collection);
    record62.set("quiz_id", "quiz_4_1_id");
    record62.set("question_text", "What legal structures and documents are needed?");
    record62.set("question_type", "multiple_choice");
    record62.set("options", "[\"A) No documents\", \"B) Master lease, equipment schedule, guaranty, security agreement\", \"C) Only master lease\", \"D) Only equipment schedule\"]");
    record62.set("correct_answer", "B");
    record62.set("explanation", "Complete lease documentation includes: master lease agreement (primary contract), equipment schedule (describes equipment), guaranty (personal or corporate guarantee), security agreement (secures lessor's interest), and other documents as needed. Complete documentation protects all parties.");
    record62.set("order", 3);
  app.save(record62);

  const record63 = new Record(collection);
    record63.set("quiz_id", "quiz_4_1_id");
    record63.set("question_text", "What are documentation best practices?");
    record63.set("question_type", "multiple_choice");
    record63.set("options", "[\"A) No practices\", \"B) Clear terms, defined defaults, dispute resolution\", \"C) Ambiguous terms\", \"D) No clarity\"]");
    record63.set("correct_answer", "B");
    record63.set("explanation", "Documentation best practices include: clear and unambiguous terms, well-defined default provisions, dispute resolution mechanisms (arbitration, mediation), proper execution and delivery, and regular review and updates. Best practices reduce disputes and enforce rights.");
    record63.set("order", 4);
  app.save(record63);

  const record64 = new Record(collection);
    record64.set("quiz_id", "quiz_4_1_id");
    record64.set("question_text", "What representations and warranties are needed?");
    record64.set("question_type", "multiple_choice");
    record64.set("options", "[\"A) Not needed\", \"B) Lessor and lessee representations about authority and condition\", \"C) Only lessor\", \"D) Only lessee\"]");
    record64.set("correct_answer", "B");
    record64.set("explanation", "Representations and warranties should include: lessor representations (authority to enter lease, ownership of equipment), lessee representations (authority, financial condition, use of equipment), and mutual representations (no conflicts with other agreements). Representations protect both parties.");
    record64.set("order", 5);
  app.save(record64);

  const record65 = new Record(collection);
    record65.set("quiz_id", "quiz_4_1_id");
    record65.set("question_text", "What covenants and obligations should be included?");
    record65.set("question_type", "multiple_choice");
    record65.set("options", "[\"A) Not needed\", \"B) Maintenance, insurance, use restrictions, financial covenants\", \"C) Only maintenance\", \"D) Only insurance\"]");
    record65.set("correct_answer", "B");
    record65.set("explanation", "Covenants and obligations should include: maintenance (keep equipment in good condition), insurance (maintain required coverage), use restrictions (proper use only), financial covenants (maintain financial ratios), and other obligations. Covenants protect lessor interests.");
    record65.set("order", 6);
  app.save(record65);

  const record66 = new Record(collection);
    record66.set("quiz_id", "quiz_4_1_id");
    record66.set("question_text", "What default provisions should be included?");
    record66.set("question_type", "multiple_choice");
    record66.set("options", "[\"A) Not needed\", \"B) Define events of default, remedies, acceleration\", \"C) Only payment default\", \"D) No remedies\"]");
    record66.set("correct_answer", "B");
    record66.set("explanation", "Default provisions should define: events of default (payment default, covenant breach, bankruptcy, material adverse change), remedies (cure period, acceleration, repossession, damages), and consequences. Clear default provisions protect lessor rights.");
    record66.set("order", 7);
  app.save(record66);

  const record67 = new Record(collection);
    record67.set("quiz_id", "quiz_4_1_id");
    record67.set("question_text", "What dispute resolution mechanisms should be included?");
    record67.set("question_type", "multiple_choice");
    record67.set("options", "[\"A) Not needed\", \"B) Arbitration, mediation, litigation provisions\", \"C) Only arbitration\", \"D) Only litigation\"]");
    record67.set("correct_answer", "B");
    record67.set("explanation", "Dispute resolution mechanisms should include: negotiation (initial attempt to resolve), mediation (neutral third party), arbitration (binding decision), and litigation (court proceedings). Multiple mechanisms provide flexibility and cost-effectiveness.");
    record67.set("order", 8);
  app.save(record67);

  const record68 = new Record(collection);
    record68.set("quiz_id", "quiz_4_1_id");
    record68.set("question_text", "What governing law provisions are needed?");
    record68.set("question_type", "multiple_choice");
    record68.set("options", "[\"A) Not needed\", \"B) Specify jurisdiction and applicable law\", \"C) No jurisdiction\", \"D) No law\"]");
    record68.set("correct_answer", "B");
    record68.set("explanation", "Governing law provisions should specify: the jurisdiction whose law governs the lease, the forum for disputes (arbitration or litigation), and any special provisions. Clear governing law provisions ensure enforceability and predictability.");
    record68.set("order", 9);
  app.save(record68);

  const record69 = new Record(collection);
    record69.set("quiz_id", "quiz_4_1_id");
    record69.set("question_text", "What enforcement mechanisms should be included?");
    record69.set("question_type", "multiple_choice");
    record69.set("options", "[\"A) Not needed\", \"B) Remedies, acceleration, repossession, damages\", \"C) Only remedies\", \"D) Only acceleration\"]");
    record69.set("correct_answer", "B");
    record69.set("explanation", "Enforcement mechanisms should include: remedies (cure period, specific performance), acceleration (declare all payments due), repossession (take back equipment), and damages (recover losses). Multiple enforcement mechanisms protect lessor interests.");
    record69.set("order", 10);
  app.save(record69);

  const record70 = new Record(collection);
    record70.set("quiz_id", "quiz_4_2_id");
    record70.set("question_text", "What is the ASC 842 accounting treatment?");
    record70.set("question_type", "multiple_choice");
    record70.set("options", "[\"A) Operating leases off-balance sheet\", \"B) All leases on balance sheet with ROU asset and liability\", \"C) Finance leases only\", \"D) No balance sheet impact\"]");
    record70.set("correct_answer", "B");
    record70.set("explanation", "ASC 842 requires that most leases be recognized on the balance sheet with a right-of-use (ROU) asset and a lease liability. This represents a significant change from previous standards and affects financial statements, ratios, and disclosures.");
    record70.set("order", 1);
  app.save(record70);

  const record71 = new Record(collection);
    record71.set("quiz_id", "quiz_4_2_id");
    record71.set("question_text", "What are the IFRS 16 requirements?");
    record71.set("question_type", "multiple_choice");
    record71.set("options", "[\"A) Different from ASC 842\", \"B) Similar to ASC 842 with minor differences\", \"C) No balance sheet impact\", \"D) Only for real estate\"]");
    record71.set("correct_answer", "B");
    record71.set("explanation", "IFRS 16 is similar to ASC 842 with minor differences in: lease classification criteria, discount rate determination, initial direct costs treatment, and presentation. Understanding these differences is important for multinational companies.");
    record71.set("order", 2);
  app.save(record71);

  const record72 = new Record(collection);
    record72.set("quiz_id", "quiz_4_2_id");
    record72.set("question_text", "How is lease classification determined?");
    record72.set("question_type", "multiple_choice");
    record72.set("options", "[\"A) Lessor discretion\", \"B) Based on lease term, residual value, payment amount, discount rate\", \"C) No classification\", \"D) All same\"]");
    record72.set("correct_answer", "B");
    record72.set("explanation", "Lease classification is determined by specific criteria: lease term (75% of asset life), residual value (90% of fair value), present value of payments (90% of fair value), and whether the asset is specialized. These criteria determine accounting treatment.");
    record72.set("order", 3);
  app.save(record72);

  const record73 = new Record(collection);
    record73.set("quiz_id", "quiz_4_2_id");
    record73.set("question_text", "How are ROU asset and liability accounted for?");
    record73.set("question_type", "multiple_choice");
    record73.set("options", "[\"A) No accounting\", \"B) ROU asset depreciated, liability accrued with interest\", \"C) No depreciation\", \"D) No interest\"]");
    record73.set("correct_answer", "B");
    record73.set("explanation", "ROU asset and liability accounting includes: ROU asset depreciated over lease term (typically straight-line), lease liability accrued with interest expense recognized (decreasing over time), and periodic payments reducing the liability. This creates a front-loaded expense pattern.");
    record73.set("order", 4);
  app.save(record73);

  const record74 = new Record(collection);
    record74.set("quiz_id", "quiz_4_2_id");
    record74.set("question_text", "What is the financial statement impact?");
    record74.set("question_type", "multiple_choice");
    record74.set("options", "[\"A) No impact\", \"B) Affects assets, liabilities, equity, income statement\", \"C) Only affects assets\", \"D) Only affects liabilities\"]");
    record74.set("correct_answer", "B");
    record74.set("explanation", "Lease recognition impacts: assets (ROU asset), liabilities (lease liability), equity (through retained earnings), and income statement (depreciation and interest expense). The impact varies by lease term and payment structure.");
    record74.set("order", 5);
  app.save(record74);

  const record75 = new Record(collection);
    record75.set("quiz_id", "quiz_4_2_id");
    record75.set("question_text", "What risks should be identified and assessed?");
    record75.set("question_type", "multiple_choice");
    record75.set("options", "[\"A) Not needed\", \"B) Identify credit, operational, market, legal risks\", \"C) Only credit risk\", \"D) Only operational risk\"]");
    record75.set("correct_answer", "B");
    record75.set("explanation", "Risk identification and assessment should include: credit risk (lessee default), operational risk (equipment failure, maintenance), market risk (residual value, interest rates), legal risk (regulatory changes, disputes), and compliance risk (accounting, tax). Comprehensive risk assessment is essential.");
    record75.set("order", 6);
  app.save(record75);

  const record76 = new Record(collection);
    record76.set("quiz_id", "quiz_4_2_id");
    record76.set("question_text", "What risk mitigation strategies are available?");
    record76.set("question_type", "multiple_choice");
    record76.set("options", "[\"A) No strategies\", \"B) Insurance, guarantees, covenants, diversification\", \"C) Only insurance\", \"D) Only guarantees\"]");
    record76.set("correct_answer", "B");
    record76.set("explanation", "Risk mitigation strategies include: insurance (equipment, liability, credit), guarantees (residual value, credit), covenants (maintenance, use restrictions), diversification (across lessees, equipment, geographies), and monitoring. Multiple strategies reduce overall risk.");
    record76.set("order", 7);
  app.save(record76);

  const record77 = new Record(collection);
    record77.set("quiz_id", "quiz_4_2_id");
    record77.set("question_text", "What are structuring best practices?");
    record77.set("question_type", "multiple_choice");
    record77.set("options", "[\"A) No practices\", \"B) Clear documentation, risk allocation, compliance, optimization\", \"C) Only documentation\", \"D) Only compliance\"]");
    record77.set("correct_answer", "B");
    record77.set("explanation", "Structuring best practices include: clear documentation (unambiguous terms), proper risk allocation (between lessor and lessee), compliance with standards (ASC 842, IFRS 16, tax), and optimization (accounting, tax, cash flow). Best practices create value for both parties.");
    record77.set("order", 8);
  app.save(record77);

  const record78 = new Record(collection);
    record78.set("quiz_id", "quiz_4_2_id");
    record78.set("question_text", "What compliance requirements apply?");
    record78.set("question_type", "multiple_choice");
    record78.set("options", "[\"A) No requirements\", \"B) Regulatory filings, disclosures, reporting\", \"C) Only filings\", \"D) Only disclosures\"]");
    record78.set("correct_answer", "B");
    record78.set("explanation", "Compliance requirements include: regulatory filings (SEC, tax authorities), financial statement disclosures (lease terms, ROU assets, liabilities), tax reporting (depreciation, interest), and industry-specific reporting. Compliance is essential to avoid penalties.");
    record78.set("order", 9);
  app.save(record78);

  const record79 = new Record(collection);
    record79.set("quiz_id", "quiz_4_2_id");
    record79.set("question_text", "What monitoring and reporting is needed?");
    record79.set("question_type", "multiple_choice");
    record79.set("options", "[\"A) Not needed\", \"B) Track lease performance, financial impact, compliance\", \"C) Only track performance\", \"D) Only track compliance\"]");
    record79.set("correct_answer", "B");
    record79.set("explanation", "Monitoring and reporting should track: lease performance (payment status, covenant compliance), financial impact (ROU asset, liability, expense), and compliance (regulatory, accounting, tax). Regular monitoring ensures proper management and early issue identification.");
    record79.set("order", 10);
  app.save(record79);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})