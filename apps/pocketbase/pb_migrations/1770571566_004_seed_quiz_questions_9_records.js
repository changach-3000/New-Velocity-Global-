/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "pbc_6062885597");
    record0.set("question_text", "In a triple net lease, which of the following is NOT typically the tenant responsibility?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "Property taxes|Insurance|CAM charges|Mortgage payments");
    record0.set("correct_answer", "Mortgage payments");
    record0.set("explanation", "In a triple net lease, the tenant pays property taxes, insurance, and CAM. The landlord retains responsibility for mortgage payments as the property owner.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "pbc_6062885597");
    record1.set("question_text", "What is the typical percentage range for percentage leases in retail properties?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "1-3%|3-8%|8-12%|12-15%");
    record1.set("correct_answer", "3-8%");
    record1.set("explanation", "Percentage leases in retail typically range from 3-8% of tenant sales, depending on the retail category and market conditions.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "pbc_6062885597");
    record2.set("question_text", "A ground lease typically has a term of:");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "5-10 years|10-20 years|50-99 years|1-3 years");
    record2.set("correct_answer", "50-99 years");
    record2.set("explanation", "Ground leases are long-term leases of land only, typically lasting 50-99 years, allowing tenants to construct and own improvements.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "pbc_6062885597");
    record3.set("question_text", "What is a Tenant Improvement Allowance (TIA)?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "A tax deduction for tenants|Landlord contribution toward tenant buildout costs|A reduction in property taxes|A type of insurance");
    record3.set("correct_answer", "Landlord contribution toward tenant buildout costs");
    record3.set("explanation", "TIA is the landlord contribution toward tenant buildout and improvement costs, typically ranging from $15-50 per square foot.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "pbc_6062885597");
    record4.set("question_text", "Which escalation clause ties rent increases to economic indicators?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "Fixed escalation|CPI-based escalation|Step-up escalation|Market-rate reset");
    record4.set("correct_answer", "CPI-based escalation");
    record4.set("explanation", "CPI-based escalation ties rent increases to the Consumer Price Index, providing inflation protection for landlords.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "pbc_6062885597");
    record5.set("question_text", "In a percentage lease, what are exclusions?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "Items not included in the percentage rent calculation|Tenants excluded from the lease|Excluded properties|Excluded time periods");
    record5.set("correct_answer", "Items not included in the percentage rent calculation");
    record5.set("explanation", "Exclusions in percentage leases typically include sales tax, returns, and non-retail revenue that are not subject to percentage rent.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "pbc_6062885597");
    record6.set("question_text", "What is the primary advantage of a master lease structure?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "Lower rent for tenants|Simplified management for landlord|Reduced insurance costs|Faster lease execution");
    record6.set("correct_answer", "Simplified management for landlord");
    record6.set("explanation", "A master lease simplifies landlord management by having a single tenant lease multiple properties and sublease to end-users.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "pbc_6062885597");
    record7.set("question_text", "What is a typical cure period for rent payment defaults?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "1-3 days|5-15 days|30-60 days|90+ days");
    record7.set("correct_answer", "5-15 days");
    record7.set("explanation", "Typical cure periods for rent payment defaults range from 5-15 days, allowing tenants time to remedy the default before eviction.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "pbc_6062885597");
    record8.set("question_text", "Which of the following is a benefit of fair market value renewal options?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "Guaranteed low rent for tenants|Landlord flexibility to adjust rent to current market conditions|Elimination of lease disputes|Reduced tenant turnover");
    record8.set("correct_answer", "Landlord flexibility to adjust rent to current market conditions");
    record8.set("explanation", "Fair market value renewals allow landlords to reset rent to current market rates, providing flexibility while protecting tenant renewal rights.");
    record8.set("order", 9);
  app.save(record8);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})