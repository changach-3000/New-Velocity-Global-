/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "quiz_1");
    record0.set("question_text", "What is the importance of due diligence in lease structuring?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"To identify potential risks and issues before finalizing the lease\", \"To reduce lease payments\", \"To simplify documentation\", \"To accelerate the closing process\"]");
    record0.set("correct_answer", "To identify potential risks and issues before finalizing the lease");
    record0.set("explanation", "Due diligence in lease structuring identifies potential risks, legal issues, and operational concerns that could impact lease performance.");
    record0.set("order", 11);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "quiz_2");
    record1.set("question_text", "What is the relationship between lease payments and asset value?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"Higher asset values typically result in higher lease payments\", \"Asset value has no impact on lease payments\", \"Lower asset values result in higher lease payments\", \"Asset value only affects operating leases\"]");
    record1.set("correct_answer", "Higher asset values typically result in higher lease payments");
    record1.set("explanation", "Lease payments are generally proportional to the asset's value; higher-value assets typically command higher lease payments.");
    record1.set("order", 11);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "quiz_3");
    record2.set("question_text", "What is the role of collateral in lease agreements?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"To secure the lessor's interest in the asset\", \"To reduce lease payments\", \"To simplify accounting\", \"To increase lessee flexibility\"]");
    record2.set("correct_answer", "To secure the lessor's interest in the asset");
    record2.set("explanation", "The leased asset itself serves as collateral, securing the lessor's interest and providing recourse in case of lessee default.");
    record2.set("order", 11);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "quiz_4");
    record3.set("question_text", "What is the difference between a finance lease and an operating lease under IFRS 16?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"Finance leases transfer substantially all risks and rewards; operating leases do not\", \"Operating leases are always shorter\", \"Finance leases have lower payments\", \"There is no difference under IFRS 16\"]");
    record3.set("correct_answer", "Finance leases transfer substantially all risks and rewards; operating leases do not");
    record3.set("explanation", "Under IFRS 16, the distinction is based on whether the lease transfers substantially all risks and rewards of ownership to the lessee.");
    record3.set("order", 11);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "quiz_5");
    record4.set("question_text", "What is the purpose of key performance indicators (KPIs) in portfolio management?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"To measure and track portfolio performance against objectives\", \"To reduce administrative costs\", \"To increase portfolio size\", \"To minimize tax obligations\"]");
    record4.set("correct_answer", "To measure and track portfolio performance against objectives");
    record4.set("explanation", "KPIs provide quantifiable measures of portfolio performance, helping managers assess whether the portfolio is meeting its objectives.");
    record4.set("order", 11);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "quiz_1");
    record5.set("question_text", "What is the impact of early termination clauses on lease structure?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "[\"They provide flexibility but increase lessor risk\", \"They have no impact on structure\", \"They always reduce lease payments\", \"They only affect operating leases\"]");
    record5.set("correct_answer", "They provide flexibility but increase lessor risk");
    record5.set("explanation", "Early termination clauses provide lessee flexibility but increase lessor risk by allowing the lessee to exit the lease early, potentially before full recovery.");
    record5.set("order", 12);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "quiz_2");
    record6.set("question_text", "How should obsolescence risk be considered in lease valuation?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"Through conservative residual value assumptions\", \"By ignoring it in valuation\", \"By increasing lease payments\", \"By extending the lease term\"]");
    record6.set("correct_answer", "Through conservative residual value assumptions");
    record6.set("explanation", "Obsolescence risk is addressed by using conservative residual value assumptions that account for the possibility of technological or functional obsolescence.");
    record6.set("order", 12);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "quiz_3");
    record7.set("question_text", "What is the purpose of maintenance obligations in lease agreements?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "[\"To ensure the asset is properly maintained and returned in good condition\", \"To reduce lessor costs\", \"To increase lessee flexibility\", \"To simplify accounting\"]");
    record7.set("correct_answer", "To ensure the asset is properly maintained and returned in good condition");
    record7.set("explanation", "Maintenance obligations protect the lessor's interest by ensuring the asset is properly maintained and returned in acceptable condition at lease end.");
    record7.set("order", 12);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "quiz_4");
    record8.set("question_text", "What is the treatment of lease incentives under IFRS 16?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "[\"They reduce the right-of-use asset\", \"They increase the lease liability\", \"They are expensed immediately\", \"They have no accounting impact\"]");
    record8.set("correct_answer", "They reduce the right-of-use asset");
    record8.set("explanation", "Lease incentives (such as free rent periods or lessor contributions) reduce the right-of-use asset, effectively reducing the lessee's net asset value.");
    record8.set("order", 12);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "quiz_5");
    record9.set("question_text", "What is the relationship between portfolio yield and risk?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "[\"Higher yields typically come with higher risk\", \"Yield and risk are unrelated\", \"Higher yields always mean lower risk\", \"Risk only affects operating leases\"]");
    record9.set("correct_answer", "Higher yields typically come with higher risk");
    record9.set("explanation", "There is a positive relationship between yield and risk; higher-yielding leases typically involve higher credit risk or other risk factors.");
    record9.set("order", 12);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("quiz_id", "quiz_1");
    record10.set("question_text", "What is the role of legal documentation in lease structuring?");
    record10.set("question_type", "multiple_choice");
    record10.set("options", "[\"To clearly define rights, obligations, and remedies for both parties\", \"To reduce lease payments\", \"To simplify the lease process\", \"To minimize tax obligations\"]");
    record10.set("correct_answer", "To clearly define rights, obligations, and remedies for both parties");
    record10.set("explanation", "Legal documentation establishes clear terms, conditions, and remedies, protecting both lessor and lessee interests and reducing disputes.");
    record10.set("order", 13);
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("quiz_id", "quiz_2");
    record11.set("question_text", "How should market conditions be incorporated into lease valuation?");
    record11.set("question_type", "multiple_choice");
    record11.set("options", "[\"Through the discount rate and residual value assumptions\", \"By ignoring market conditions\", \"By using historical data only\", \"By adjusting lease payments only\"]");
    record11.set("correct_answer", "Through the discount rate and residual value assumptions");
    record11.set("explanation", "Market conditions are reflected in lease valuation through the discount rate (reflecting current market rates) and residual value assumptions (reflecting market expectations).");
    record11.set("order", 13);
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("quiz_id", "quiz_3");
    record12.set("question_text", "What is the impact of industry conditions on lease risk assessment?");
    record12.set("question_type", "multiple_choice");
    record12.set("options", "[\"Industry downturns increase lessee default risk\", \"Industry conditions have no impact on risk\", \"Industry growth always reduces risk\", \"Risk is independent of industry conditions\"]");
    record12.set("correct_answer", "Industry downturns increase lessee default risk");
    record12.set("explanation", "Industry conditions significantly impact lessee creditworthiness; industry downturns increase the risk of payment default and asset value decline.");
    record12.set("order", 13);
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("quiz_id", "quiz_4");
    record13.set("question_text", "What is the purpose of lease classification under ASC 842?");
    record13.set("question_type", "multiple_choice");
    record13.set("options", "[\"To determine the appropriate accounting treatment\", \"To set the lease payment amount\", \"To calculate residual value\", \"To determine tax treatment\"]");
    record13.set("correct_answer", "To determine the appropriate accounting treatment");
    record13.set("explanation", "Lease classification determines whether a lease is a finance lease or operating lease, which affects how it is accounted for on financial statements.");
    record13.set("order", 13);
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("quiz_id", "quiz_5");
    record14.set("question_text", "What is the importance of scenario analysis in portfolio management?");
    record14.set("question_type", "multiple_choice");
    record14.set("options", "[\"To evaluate portfolio performance under different economic scenarios\", \"To maximize portfolio returns\", \"To reduce administrative costs\", \"To increase portfolio size\"]");
    record14.set("correct_answer", "To evaluate portfolio performance under different economic scenarios");
    record14.set("explanation", "Scenario analysis helps portfolio managers understand how the portfolio would perform under various economic conditions, informing risk management decisions.");
    record14.set("order", 13);
  app.save(record14);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})