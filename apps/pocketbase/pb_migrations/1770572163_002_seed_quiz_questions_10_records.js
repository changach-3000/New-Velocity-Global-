/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "<quiz_id>");
    record0.set("question_text", "What does NNN stand for in commercial real estate leasing?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"Net Negotiable Needs\", \"Triple Net\", \"Non-Negotiable Norms\", \"New Neighborhood Network\"]");
    record0.set("correct_answer", "Triple Net");
    record0.set("explanation", "NNN stands for Triple Net lease, where the tenant pays rent plus property taxes, insurance, and common area maintenance (CAM) costs.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "<quiz_id>");
    record1.set("question_text", "In a triple net lease, the tenant typically pays for which of the following?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"Rent only\", \"Rent, property taxes, insurance, and CAM\", \"Rent and utilities only\", \"Property taxes only\"]");
    record1.set("correct_answer", "Rent, property taxes, insurance, and CAM");
    record1.set("explanation", "In a triple net (NNN) lease, the tenant is responsible for rent, property taxes, insurance, and common area maintenance (CAM) expenses.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "<quiz_id>");
    record2.set("question_text", "What is a percentage lease?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"A lease with a fixed percentage increase annually\", \"A lease where rent is based on a percentage of tenant's gross sales\", \"A lease covering a percentage of the building\", \"A lease with percentage-based tenant improvements\"]");
    record2.set("correct_answer", "A lease where rent is based on a percentage of tenant's gross sales");
    record2.set("explanation", "A percentage lease is a commercial lease where the tenant pays a base rent plus a percentage of their gross sales revenue, commonly used in retail.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "<quiz_id>");
    record3.set("question_text", "Typical percentage lease rates for retail tenants range from:");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"2-5%\", \"5-10%\", \"10-15%\", \"15-20%\"]");
    record3.set("correct_answer", "5-10%");
    record3.set("explanation", "Percentage lease rates for retail tenants typically range from 5-10% of gross sales, depending on the retail sector and location.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "<quiz_id>");
    record4.set("question_text", "What is a Tenant Improvement Allowance (TIA)?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"A penalty for tenant improvements\", \"Money provided by landlord to help tenant improve the space\", \"A tax on tenant improvements\", \"A lease clause preventing improvements\"]");
    record4.set("correct_answer", "Money provided by landlord to help tenant improve the space");
    record4.set("explanation", "A Tenant Improvement Allowance (TIA) is funds provided by the landlord to assist the tenant in making improvements or customizations to the leased space.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "<quiz_id>");
    record5.set("question_text", "Which rent escalation strategy ties increases to inflation?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "[\"Fixed escalation\", \"Step-up escalation\", \"CPI adjustment\", \"Market-rate reset\"]");
    record5.set("correct_answer", "CPI adjustment");
    record5.set("explanation", "CPI (Consumer Price Index) adjustment ties rent escalations to inflation rates, ensuring rent increases align with economic inflation.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "<quiz_id>");
    record6.set("question_text", "A ground lease typically involves:");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"Leasing office space on the ground floor\", \"Long-term lease of land only\", \"Leasing ground-level retail\", \"Leasing parking on the ground level\"]");
    record6.set("correct_answer", "Long-term lease of land only");
    record6.set("explanation", "A ground lease is a long-term lease of land only, where the tenant typically builds improvements on the land and the lease can span 50+ years.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "<quiz_id>");
    record7.set("question_text", "What is an estoppel certificate?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "[\"A document preventing lease modifications\", \"A certificate confirming lease terms and tenant status\", \"A certificate of lease completion\", \"A document stopping tenant improvements\"]");
    record7.set("correct_answer", "A certificate confirming lease terms and tenant status");
    record7.set("explanation", "An estoppel certificate is a legal document signed by the tenant confirming the current lease terms, rent amount, and that there are no defaults or disputes.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "<quiz_id>");
    record8.set("question_text", "In a master lease arrangement, the master lessee:");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "[\"Owns the property\", \"Acts as intermediary between landlord and sub-tenants\", \"Only manages maintenance\", \"Has no responsibility for sub-tenants\"]");
    record8.set("correct_answer", "Acts as intermediary between landlord and sub-tenants");
    record8.set("explanation", "In a master lease arrangement, the master lessee leases the entire property from the landlord and then sub-leases portions to other tenants, acting as an intermediary.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "<quiz_id>");
    record9.set("question_text", "What is a typical cure period for monetary defaults in commercial leases?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "[\"3 days\", \"7 days\", \"10-15 days\", \"30 days\"]");
    record9.set("correct_answer", "10-15 days");
    record9.set("explanation", "A typical cure period for monetary defaults in commercial leases is 10-15 days, allowing the tenant time to remedy the default before eviction proceedings.");
    record9.set("order", 10);
  app.save(record9);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})