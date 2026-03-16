/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "quiz_3_1");
    record0.set("question_text", "What is securitization?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"A) The process of converting individual loans into tradeable securities\", \"B) A method of pooling loans and issuing securities backed by cash flows from those loans\", \"C) A type of insurance product\", \"D) A regulatory requirement for all lenders\"]");
    record0.set("correct_answer", "B");
    record0.set("explanation", "Securitization is the process of pooling loans and issuing securities backed by the cash flows from those loans. This allows originators to transfer credit risk and free up capital.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "quiz_3_1");
    record1.set("question_text", "What is the primary benefit of securitization for originators?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"A) Increased regulatory oversight\", \"B) Capital relief and funding diversification\", \"C) Higher interest rates on loans\", \"D) Reduced loan origination costs\"]");
    record1.set("correct_answer", "B");
    record1.set("explanation", "The primary benefit for originators is capital relief (freeing up capital) and funding diversification by selling loans rather than holding them to maturity.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "quiz_3_1");
    record2.set("question_text", "What is an SPV (Special Purpose Vehicle)?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"A) A separate legal entity created to hold the pooled loans and issue securities\", \"B) A type of investment fund\", \"C) A regulatory agency\", \"D) A loan servicing company\"]");
    record2.set("correct_answer", "A");
    record2.set("explanation", "An SPV is a separate legal entity created specifically to hold the pooled loans and issue securities. This isolation protects investors from the originator's bankruptcy.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "quiz_3_1");
    record3.set("question_text", "What is the primary role of a servicer in securitization?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"A) To originate new loans\", \"B) To collect payments, manage delinquencies, and distribute cash flows to investors\", \"C) To rate the securities\", \"D) To purchase the loans\"]");
    record3.set("correct_answer", "B");
    record3.set("explanation", "The servicer collects payments from borrowers, manages delinquencies and defaults, and distributes cash flows to investors according to the waterfall structure.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "quiz_3_1");
    record4.set("question_text", "What is a tranche in securitization?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"A) A type of loan\", \"B) A class of securities with different risk and return characteristics\", \"C) A regulatory requirement\", \"D) A servicing fee\"]");
    record4.set("correct_answer", "B");
    record4.set("explanation", "A tranche is a class of securities issued in a securitization, with different priority levels, risk profiles, and expected returns. Senior tranches have priority in receiving payments.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "quiz_3_1");
    record5.set("question_text", "What is subordination in securitization?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "[\"A) A credit enhancement technique where lower-priority tranches absorb losses first\", \"B) A type of loan modification\", \"C) A regulatory filing requirement\", \"D) A servicing agreement\"]");
    record5.set("correct_answer", "A");
    record5.set("explanation", "Subordination is a credit enhancement technique where lower-priority (subordinate) tranches absorb losses before higher-priority (senior) tranches, protecting senior investors.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "quiz_3_1");
    record6.set("question_text", "What is overcollateralization?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"A) A credit enhancement technique where the pool value exceeds the securities issued\", \"B) A type of loan fraud\", \"C) A regulatory violation\", \"D) A servicing requirement\"]");
    record6.set("correct_answer", "A");
    record6.set("explanation", "Overcollateralization is a credit enhancement technique where the value of the pooled loans exceeds the value of securities issued, providing a cushion against losses.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "quiz_3_1");
    record7.set("question_text", "What is the primary role of a trustee in securitization?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "[\"A) To originate loans\", \"B) To represent investor interests and ensure compliance with the securitization agreement\", \"C) To rate the securities\", \"D) To service the loans\"]");
    record7.set("correct_answer", "B");
    record7.set("explanation", "The trustee represents investor interests, ensures the servicer complies with the securitization agreement, and oversees the distribution of cash flows.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "quiz_3_1");
    record8.set("question_text", "What is a cash flow waterfall?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "[\"A) A type of loan payment schedule\", \"B) The priority order in which cash flows are distributed to different tranches and other parties\", \"C) A regulatory requirement\", \"D) A servicing fee structure\"]");
    record8.set("correct_answer", "B");
    record8.set("explanation", "The cash flow waterfall defines the priority order for distributing collected cash flows: first to servicer fees, then to senior tranches, then to subordinate tranches, and finally to equity holders.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "quiz_3_1");
    record9.set("question_text", "What is the primary benefit of securitization for investors?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "[\"A) Guaranteed returns\", \"B) Access to diversified pools of loans with defined risk-return profiles\", \"C) No credit risk\", \"D) Regulatory protection\"]");
    record9.set("correct_answer", "B");
    record9.set("explanation", "Investors benefit from access to diversified pools of loans with defined risk-return profiles through different tranches, allowing them to match their risk appetite and return requirements.");
    record9.set("order", 10);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("quiz_id", "quiz_3_2");
    record10.set("question_text", "What is WAL (Weighted Average Life)?");
    record10.set("question_type", "multiple_choice");
    record10.set("options", "[\"A) The average time until principal is repaid, weighted by payment amounts\", \"B) The average interest rate of the pool\", \"C) The total duration of the securitization\", \"D) The average age of the loans\"]");
    record10.set("correct_answer", "A");
    record10.set("explanation", "WAL is the weighted average time until principal is repaid, calculated by weighting each loan's remaining term by its outstanding balance. It's crucial for pricing and risk assessment.");
    record10.set("order", 1);
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("quiz_id", "quiz_3_2");
    record11.set("question_text", "What is WAC (Weighted Average Coupon)?");
    record11.set("question_type", "multiple_choice");
    record11.set("options", "[\"A) The average interest rate of the loans in the pool, weighted by balance\", \"B) The interest rate paid to investors\", \"C) The servicing fee\", \"D) The discount rate used in valuation\"]");
    record11.set("correct_answer", "A");
    record11.set("explanation", "WAC is the weighted average interest rate of the loans in the pool, calculated by weighting each loan's rate by its outstanding balance. It determines the cash flow generation capacity.");
    record11.set("order", 2);
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("quiz_id", "quiz_3_2");
    record12.set("question_text", "What is the primary purpose of due diligence in securitization?");
    record12.set("question_type", "multiple_choice");
    record12.set("options", "[\"A) To verify loan quality and identify risks before securitization\", \"B) To determine the securitization price\", \"C) To rate the securities\", \"D) To establish the servicing agreement\"]");
    record12.set("correct_answer", "A");
    record12.set("explanation", "Due diligence verifies loan quality, identifies risks, and ensures compliance with underwriting standards. It protects investors and supports accurate pricing and rating.");
    record12.set("order", 3);
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("quiz_id", "quiz_3_2");
    record13.set("question_text", "What is the primary criterion for portfolio selection in securitization?");
    record13.set("question_type", "multiple_choice");
    record13.set("options", "[\"A) Homogeneity of loan characteristics to ensure predictable performance\", \"B) Maximum loan amounts\", \"C) Geographic concentration\", \"D) Origination date\"]");
    record13.set("correct_answer", "A");
    record13.set("explanation", "Portfolio selection prioritizes homogeneity of loan characteristics (similar terms, borrower profiles, collateral types) to ensure predictable and stable performance.");
    record13.set("order", 4);
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("quiz_id", "quiz_3_2");
    record14.set("question_text", "What is sequential pay tranching?");
    record14.set("question_type", "multiple_choice");
    record14.set("options", "[\"A) All tranches receive equal payments\", \"B) Senior tranches receive all principal payments until paid off, then subordinate tranches receive payments\", \"C) Tranches receive payments based on their size\", \"D) Tranches receive payments randomly\"]");
    record14.set("correct_answer", "B");
    record14.set("explanation", "In sequential pay tranching, senior tranches receive all principal payments until fully paid off, then subordinate tranches receive principal payments. This provides clear priority and predictability.");
    record14.set("order", 5);
  app.save(record14);

  const record15 = new Record(collection);
    record15.set("quiz_id", "quiz_3_2");
    record15.set("question_text", "What is pro-rata pay tranching?");
    record15.set("question_type", "multiple_choice");
    record15.set("options", "[\"A) All tranches receive equal payments\", \"B) All tranches receive principal payments proportionally based on their size\", \"C) Senior tranches receive all payments first\", \"D) Subordinate tranches receive all payments first\"]");
    record15.set("correct_answer", "B");
    record15.set("explanation", "In pro-rata pay tranching, all tranches receive principal payments proportionally based on their outstanding balance, providing more even cash flow distribution.");
    record15.set("order", 6);
  app.save(record15);

  const record16 = new Record(collection);
    record16.set("quiz_id", "quiz_3_2");
    record16.set("question_text", "What is the primary purpose of stress testing in securitization?");
    record16.set("question_type", "multiple_choice");
    record16.set("options", "[\"A) To determine the securitization price\", \"B) To evaluate portfolio performance under adverse scenarios and identify tail risks\", \"C) To rate the securities\", \"D) To establish the servicing agreement\"]");
    record16.set("correct_answer", "B");
    record16.set("explanation", "Stress testing evaluates how the portfolio performs under adverse scenarios (higher defaults, lower prepayments, rate changes) to identify tail risks and ensure adequate credit enhancement.");
    record16.set("order", 7);
  app.save(record16);

  const record17 = new Record(collection);
    record17.set("quiz_id", "quiz_3_2");
    record17.set("question_text", "What factors are most important in pricing securitized securities?");
    record17.set("question_type", "multiple_choice");
    record17.set("options", "[\"A) Only the coupon rate\", \"B) Credit quality, expected cash flows, market conditions, and investor demand\", \"C) Only the loan amounts\", \"D) Only the origination date\"]");
    record17.set("correct_answer", "B");
    record17.set("explanation", "Pricing depends on credit quality (rating), expected cash flows (WAL, WAC, prepayment assumptions), market conditions (interest rates, spreads), and investor demand.");
    record17.set("order", 8);
  app.save(record17);

  const record18 = new Record(collection);
    record18.set("quiz_id", "quiz_3_2");
    record18.set("question_text", "What is the primary purpose of credit enhancement in securitization?");
    record18.set("question_type", "multiple_choice");
    record18.set("options", "[\"A) To increase originator profits\", \"B) To protect investors from credit losses and support higher ratings\", \"C) To reduce servicing costs\", \"D) To increase loan origination\"]");
    record18.set("correct_answer", "B");
    record18.set("explanation", "Credit enhancement protects investors from credit losses through subordination, overcollateralization, and reserve accounts, enabling higher ratings and lower funding costs.");
    record18.set("order", 9);
  app.save(record18);

  const record19 = new Record(collection);
    record19.set("quiz_id", "quiz_3_2");
    record19.set("question_text", "What is the primary methodology used for rating securitized securities?");
    record19.set("question_type", "multiple_choice");
    record19.set("options", "[\"A) Comparison to corporate bond ratings\", \"B) Analysis of loan-level characteristics, portfolio composition, credit enhancement, and stress testing\", \"C) Historical stock market performance\", \"D) Originator credit rating\"]");
    record19.set("correct_answer", "A");
    record19.set("explanation", "Rating agencies analyze loan-level characteristics, portfolio composition, credit enhancement levels, and stress test results to determine the probability of timely payment for each tranche.");
    record19.set("order", 10);
  app.save(record19);

  const record20 = new Record(collection);
    record20.set("quiz_id", "quiz_3_3");
    record20.set("question_text", "What is credit risk in securitization?");
    record20.set("question_type", "multiple_choice");
    record20.set("options", "[\"A) The risk that interest rates will change\", \"B) The risk that borrowers will default on their loan obligations\", \"C) The risk that securities cannot be sold\", \"D) The risk of regulatory changes\"]");
    record20.set("correct_answer", "B");
    record20.set("explanation", "Credit risk is the risk that borrowers will default on their loan obligations, resulting in losses to investors. It's the primary risk in securitization.");
    record20.set("order", 1);
  app.save(record20);

  const record21 = new Record(collection);
    record21.set("quiz_id", "quiz_3_3");
    record21.set("question_text", "What is prepayment risk in securitization?");
    record21.set("question_type", "multiple_choice");
    record21.set("options", "[\"A) The risk that borrowers will pay early\", \"B) The risk that borrowers will not pay on time\", \"C) The risk that interest rates will increase\", \"D) The risk that securities will be downgraded\"]");
    record21.set("correct_answer", "A");
    record21.set("explanation", "Prepayment risk is the risk that borrowers will pay off their loans early (often when interest rates decline), shortening the expected life of securities and reducing investor returns.");
    record21.set("order", 2);
  app.save(record21);

  const record22 = new Record(collection);
    record22.set("quiz_id", "quiz_3_3");
    record22.set("question_text", "What is interest rate risk in securitization?");
    record22.set("question_type", "multiple_choice");
    record22.set("options", "[\"A) The risk that borrowers will default\", \"B) The risk that changes in interest rates will affect security values and cash flows\", \"C) The risk that the servicer will fail\", \"D) The risk of regulatory changes\"]");
    record22.set("correct_answer", "B");
    record22.set("explanation", "Interest rate risk is the risk that changes in market interest rates will affect the value of securities and the timing/amount of cash flows (through prepayment effects).");
    record22.set("order", 3);
  app.save(record22);

  const record23 = new Record(collection);
    record23.set("quiz_id", "quiz_3_3");
    record23.set("question_text", "What is operational risk in securitization?");
    record23.set("question_type", "multiple_choice");
    record23.set("options", "[\"A) The risk that borrowers will default\", \"B) The risk of failures in processes, systems, or controls (servicing, documentation, technology)\", \"C) The risk that interest rates will change\", \"D) The risk that securities will be downgraded\"]");
    record23.set("correct_answer", "B");
    record23.set("explanation", "Operational risk includes servicing failures, documentation defects, system failures, and other process/control failures that could impact investor returns.");
    record23.set("order", 4);
  app.save(record23);

  const record24 = new Record(collection);
    record24.set("quiz_id", "quiz_3_3");
    record24.set("question_text", "What is the Dodd-Frank risk retention requirement?");
    record24.set("question_type", "multiple_choice");
    record24.set("options", "[\"A) Investors must retain 5% of securities\", \"B) Originators must retain at least 5% of credit risk in securitizations\", \"C) Servicers must retain 5% of fees\", \"D) Rating agencies must retain 5% of ratings\"]");
    record24.set("correct_answer", "B");
    record24.set("explanation", "The Dodd-Frank Act requires originators to retain at least 5% of credit risk in securitizations, aligning originator and investor interests and reducing moral hazard.");
    record24.set("order", 5);
  app.save(record24);

  const record25 = new Record(collection);
    record25.set("quiz_id", "quiz_3_3");
    record25.set("question_text", "How should originators account for securitizations under FASB standards?");
    record25.set("question_type", "multiple_choice");
    record25.set("options", "[\"A) Derecognize assets if control is surrendered and recognize gain on sale\", \"B) Always keep assets on balance sheet\", \"C) Recognize all gains immediately\", \"D) No accounting treatment required\"]");
    record25.set("correct_answer", "A");
    record25.set("explanation", "Under FASB ASC 860, originators derecognize transferred assets when control is surrendered and recognize gain on sale (difference between carrying value and fair value received).");
    record25.set("order", 6);
  app.save(record25);

  const record26 = new Record(collection);
    record26.set("quiz_id", "quiz_3_3");
    record26.set("question_text", "What is the primary disclosure requirement for securitizations?");
    record26.set("question_type", "multiple_choice");
    record26.set("options", "[\"A) Only the total securitization amount\", \"B) Detailed loan-level data including borrower info, property info, loan terms, and performance data\", \"C) Only the originator's name\", \"D) Only the rating\"]");
    record26.set("correct_answer", "A");
    record26.set("explanation", "Primary disclosure requirements include detailed loan-level data (borrower credit scores, income, DTI, property location/value/LTV, loan rates/terms, delinquency/default status) to enable investor analysis.");
    record26.set("order", 7);
  app.save(record26);

  const record27 = new Record(collection);
    record27.set("quiz_id", "quiz_3_3");
    record27.set("question_text", "What is the primary market trend in securitization?");
    record27.set("question_type", "multiple_choice");
    record27.set("options", "[\"A) Increasing concentration in mortgages\", \"B) Diversification beyond mortgages into auto loans, credit cards, student loans, and equipment leases\", \"C) Decreasing use of securitization\", \"D) Elimination of credit enhancement\"]");
    record27.set("correct_answer", "B");
    record27.set("explanation", "The market has diversified significantly beyond mortgages (which dominated pre-crisis) into auto loans, credit cards, student loans, equipment leases, and other asset classes.");
    record27.set("order", 8);
  app.save(record27);

  const record28 = new Record(collection);
    record28.set("quiz_id", "quiz_3_3");
    record28.set("question_text", "What is the primary future outlook for securitization?");
    record28.set("question_type", "multiple_choice");
    record28.set("options", "[\"A) Market decline\", \"B) Growth driven by technology innovation, ESG considerations, and alternative asset classes\", \"C) Regulatory elimination\", \"D) Return to pre-crisis practices\"]");
    record28.set("correct_answer", "B");
    record28.set("explanation", "Future growth is expected from technology innovation (machine learning, blockchain), ESG/sustainability focus (green securitizations), and alternative asset classes (fintech, non-QM mortgages).");
    record28.set("order", 9);
  app.save(record28);

  const record29 = new Record(collection);
    record29.set("quiz_id", "quiz_3_3");
    record29.set("question_text", "What is the primary benefit of securitization for the overall financial market?");
    record29.set("question_type", "multiple_choice");
    record29.set("options", "[\"A) Increased regulatory burden\", \"B) Higher interest rates for borrowers\", \"C) Improved capital efficiency, risk distribution, and funding availability for lenders\", \"D) Reduced investor returns\"]");
    record29.set("correct_answer", "C");
    record29.set("explanation", "Securitization benefits the market by improving capital efficiency (freeing originator capital), distributing risk across investors, and increasing funding availability for lenders to originate more loans.");
    record29.set("order", 10);
  app.save(record29);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})