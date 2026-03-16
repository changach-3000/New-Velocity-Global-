/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "pbc_1349215296_1");
    record0.set("question_text", "What is a lease agreement?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"A verbal agreement between parties\",\"A legally binding contract granting right to use equipment\",\"A purchase agreement for equipment\",\"A rental agreement for short-term use\"]");
    record0.set("correct_answer", "A legally binding contract granting right to use equipment");
    record0.set("explanation", "A lease agreement is a legally binding contract between a lessor and lessee that grants the right to use equipment for a specified period.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "pbc_1349215296_1");
    record1.set("question_text", "What is the primary difference between operating and capital leases?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"Operating leases are longer\",\"Capital leases are shorter\",\"Operating leases are short-term, capital leases transfer ownership benefits\",\"No difference\"]");
    record1.set("correct_answer", "Operating leases are short-term, capital leases transfer ownership benefits");
    record1.set("explanation", "Operating leases are short-term with the lessor retaining ownership, while capital leases are long-term and transfer substantially all benefits and risks to the lessee.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "pbc_1349215296_1");
    record2.set("question_text", "What is UCC Article 2A?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"Uniform Commercial Code covering leases\",\"Uniform Commercial Code covering sales\",\"State law covering leases\",\"Federal law covering leases\"]");
    record2.set("correct_answer", "Uniform Commercial Code covering leases");
    record2.set("explanation", "UCC Article 2A is part of the Uniform Commercial Code and specifically governs commercial lease transactions.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "pbc_1349215296_1");
    record3.set("question_text", "What is TILA?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"Truth in Lending Act requiring lease disclosures\",\"Tax Incentive Lease Act\",\"Lease agreement act\",\"Equipment lease act\"]");
    record3.set("correct_answer", "Truth in Lending Act requiring lease disclosures");
    record3.set("explanation", "TILA (Truth in Lending Act) requires clear disclosure of lease terms and conditions to consumers.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "pbc_1349215296_1");
    record4.set("question_text", "What is ECOA?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"Equipment Credit Opportunity Act\",\"Equal Credit Opportunity Act prohibiting discrimination\",\"Lease agreement act\",\"Equipment lease act\"]");
    record4.set("correct_answer", "Equal Credit Opportunity Act prohibiting discrimination");
    record4.set("explanation", "ECOA (Equal Credit Opportunity Act) prohibits discrimination in credit decisions based on protected characteristics.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "pbc_1349215296_1");
    record5.set("question_text", "What is FCRA?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "[\"Fair Credit Reporting Act governing credit reports\",\"Fair Lease Reporting Act\",\"Equipment lease act\",\"Lease agreement act\"]");
    record5.set("correct_answer", "Fair Credit Reporting Act governing credit reports");
    record5.set("explanation", "FCRA (Fair Credit Reporting Act) governs the use of credit reports and requires disclosure of credit report use.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "pbc_1349215296_1");
    record6.set("question_text", "What is the CFPB?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"Consumer Financial Protection Bureau\",\"Credit Financial Protection Bureau\",\"Lease regulatory agency\",\"Equipment lease agency\"]");
    record6.set("correct_answer", "Consumer Financial Protection Bureau");
    record6.set("explanation", "The CFPB (Consumer Financial Protection Bureau) enforces consumer protection laws including lease compliance requirements.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "pbc_1349215296_1");
    record7.set("question_text", "What is a true lease?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "[\"Lease where lessor retains ownership\",\"Lease where lessee has ownership\",\"Lease where both parties share ownership\",\"Lease with no ownership\"]");
    record7.set("correct_answer", "Lease where lessor retains ownership");
    record7.set("explanation", "A true lease is one where the lessor retains legal ownership of the equipment throughout the lease term.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "pbc_1349215296_1");
    record8.set("question_text", "What is required for a valid lease?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "[\"Offer and acceptance only\",\"Offer, acceptance, consideration, capacity, legal purpose, proper form, compliance\",\"Payment only\",\"Equipment only\"]");
    record8.set("correct_answer", "Offer, acceptance, consideration, capacity, legal purpose, proper form, compliance");
    record8.set("explanation", "A valid lease requires offer and acceptance, consideration, legal capacity of parties, legal purpose, proper form, and compliance with applicable laws.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "pbc_1349215296_1");
    record9.set("question_text", "What is the purpose of a compliance program?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "[\"Ensure regulatory compliance\",\"Increase profits\",\"Reduce costs\",\"Improve customer service\"]");
    record9.set("correct_answer", "Ensure regulatory compliance");
    record9.set("explanation", "The primary purpose of a compliance program is to ensure that the organization complies with all applicable laws and regulations.");
    record9.set("order", 10);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("quiz_id", "pbc_1349215296_2");
    record10.set("question_text", "What is a lease payment clause?");
    record10.set("question_type", "multiple_choice");
    record10.set("options", "[\"Specifies payment amount and schedule\",\"Specifies equipment description\",\"Specifies lease term\",\"Specifies default provisions\"]");
    record10.set("correct_answer", "Specifies payment amount and schedule");
    record10.set("explanation", "A lease payment clause specifies the amount of each lease payment and the schedule for making those payments.");
    record10.set("order", 1);
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("quiz_id", "pbc_1349215296_2");
    record11.set("question_text", "What is a default clause?");
    record11.set("question_type", "multiple_choice");
    record11.set("options", "[\"Specifies payment amount\",\"Defines what constitutes default\",\"Specifies lease term\",\"Specifies equipment description\"]");
    record11.set("correct_answer", "Defines what constitutes default");
    record11.set("explanation", "A default clause defines what actions or failures constitute a default under the lease agreement.");
    record11.set("order", 2);
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("quiz_id", "pbc_1349215296_2");
    record12.set("question_text", "What is an indemnification clause?");
    record12.set("question_type", "multiple_choice");
    record12.set("options", "[\"Specifies payment amount\",\"Specifies insurance requirements\",\"Specifies indemnification obligations\",\"Specifies lease term\"]");
    record12.set("correct_answer", "Specifies indemnification obligations");
    record12.set("explanation", "An indemnification clause specifies the obligations of one party to compensate the other for certain losses or damages.");
    record12.set("order", 3);
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("quiz_id", "pbc_1349215296_2");
    record13.set("question_text", "What is required by TILA?");
    record13.set("question_type", "multiple_choice");
    record13.set("options", "[\"Clear disclosure of lease terms\",\"Equipment description only\",\"Payment schedule only\",\"Lease term only\"]");
    record13.set("correct_answer", "Clear disclosure of lease terms");
    record13.set("explanation", "TILA requires clear and conspicuous disclosure of all material lease terms before the lessee signs the agreement.");
    record13.set("order", 4);
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("quiz_id", "pbc_1349215296_2");
    record14.set("question_text", "What is an adverse action notice?");
    record14.set("question_type", "multiple_choice");
    record14.set("options", "[\"Notice of lease approval\",\"Notice of lease denial with reason\",\"Notice of payment due\",\"Notice of equipment delivery\"]");
    record14.set("correct_answer", "Notice of lease denial with reason");
    record14.set("explanation", "An adverse action notice is required when a lease is denied and must specify the reason for the denial.");
    record14.set("order", 5);
  app.save(record14);

  const record15 = new Record(collection);
    record15.set("quiz_id", "pbc_1349215296_2");
    record15.set("question_text", "What is required by ECOA?");
    record15.set("question_type", "multiple_choice");
    record15.set("options", "[\"Clear disclosure of lease terms\",\"Fair treatment of all applicants\",\"Equipment description\",\"Payment schedule\"]");
    record15.set("correct_answer", "Fair treatment of all applicants");
    record15.set("explanation", "ECOA requires fair treatment of all applicants and prohibits discrimination based on protected characteristics.");
    record15.set("order", 6);
  app.save(record15);

  const record16 = new Record(collection);
    record16.set("quiz_id", "pbc_1349215296_2");
    record16.set("question_text", "What is required by FCRA?");
    record16.set("question_type", "multiple_choice");
    record16.set("options", "[\"Clear disclosure of lease terms\",\"Disclosure of credit report use\",\"Equipment description\",\"Payment schedule\"]");
    record16.set("correct_answer", "Disclosure of credit report use");
    record16.set("explanation", "FCRA requires disclosure of the use of credit reports and provides consumers with rights regarding their credit information.");
    record16.set("order", 7);
  app.save(record16);

  const record17 = new Record(collection);
    record17.set("quiz_id", "pbc_1349215296_2");
    record17.set("question_text", "What is a protected characteristic under ECOA?");
    record17.set("question_type", "multiple_choice");
    record17.set("options", "[\"Equipment type\",\"Lease term\",\"Race, color, religion, national origin, sex\",\"Payment amount\"]");
    record17.set("correct_answer", "Race, color, religion, national origin, sex");
    record17.set("explanation", "Protected characteristics under ECOA include race, color, religion, national origin, sex, marital status, age, and receipt of public assistance.");
    record17.set("order", 8);
  app.save(record17);

  const record18 = new Record(collection);
    record18.set("quiz_id", "pbc_1349215296_2");
    record18.set("question_text", "What is disparate treatment?");
    record18.set("question_type", "multiple_choice");
    record18.set("options", "[\"Treating applicants differently based on protected characteristics\",\"Treating all applicants the same\",\"Treating applicants based on credit\",\"Treating applicants based on income\"]");
    record18.set("correct_answer", "Treating applicants differently based on protected characteristics");
    record18.set("explanation", "Disparate treatment occurs when applicants are treated differently based on protected characteristics, which is prohibited under ECOA.");
    record18.set("order", 9);
  app.save(record18);

  const record19 = new Record(collection);
    record19.set("quiz_id", "pbc_1349215296_2");
    record19.set("question_text", "What is record retention requirement?");
    record19.set("question_type", "multiple_choice");
    record19.set("options", "[\"Maintain records for 1 year\",\"Maintain records for 3+ years\",\"Maintain records for 10 years\",\"No record retention required\"]");
    record19.set("correct_answer", "Maintain records for 3+ years");
    record19.set("explanation", "Regulatory requirements typically require maintaining lease records for at least 3 years for compliance and audit purposes.");
    record19.set("order", 10);
  app.save(record19);

  const record20 = new Record(collection);
    record20.set("quiz_id", "pbc_1349215296_6");
    record20.set("question_text", "What is the IRS true lease test?");
    record20.set("question_type", "multiple_choice");
    record20.set("options", "[\"Test to determine if lease is true lease for tax purposes\",\"Test to determine if lease is valid\",\"Test to determine if lease is enforceable\",\"Test to determine if lease is compliant\"]");
    record20.set("correct_answer", "Test to determine if lease is true lease for tax purposes");
    record20.set("explanation", "The IRS true lease test determines whether a lease qualifies as a true lease for tax purposes, which affects depreciation and deduction rights.");
    record20.set("order", 1);
  app.save(record20);

  const record21 = new Record(collection);
    record21.set("quiz_id", "pbc_1349215296_6");
    record21.set("question_text", "What is ASC 842?");
    record21.set("question_type", "multiple_choice");
    record21.set("options", "[\"Accounting standard for leases\",\"Tax standard for leases\",\"Legal standard for leases\",\"Regulatory standard for leases\"]");
    record21.set("correct_answer", "Accounting standard for leases");
    record21.set("explanation", "ASC 842 is the US accounting standard that requires lessees to recognize right-of-use assets and lease liabilities on the balance sheet.");
    record21.set("order", 2);
  app.save(record21);

  const record22 = new Record(collection);
    record22.set("quiz_id", "pbc_1349215296_6");
    record22.set("question_text", "What is IFRS 16?");
    record22.set("question_type", "multiple_choice");
    record22.set("options", "[\"International accounting standard for leases\",\"US accounting standard for leases\",\"Tax standard for leases\",\"Legal standard for leases\"]");
    record22.set("correct_answer", "International accounting standard for leases");
    record22.set("explanation", "IFRS 16 is the international accounting standard for leases, similar to ASC 842 but used by companies following IFRS.");
    record22.set("order", 3);
  app.save(record22);

  const record23 = new Record(collection);
    record23.set("quiz_id", "pbc_1349215296_6");
    record23.set("question_text", "What is a right-of-use (ROU) asset?");
    record23.set("question_type", "multiple_choice");
    record23.set("options", "[\"Asset recognized by lessee under ASC 842/IFRS 16\",\"Asset recognized by lessor\",\"Equipment asset\",\"Intangible asset\"]");
    record23.set("correct_answer", "Asset recognized by lessee under ASC 842/IFRS 16");
    record23.set("explanation", "A right-of-use asset is recognized by the lessee on the balance sheet under ASC 842 and IFRS 16 to represent the lessee's right to use the leased asset.");
    record23.set("order", 4);
  app.save(record23);

  const record24 = new Record(collection);
    record24.set("quiz_id", "pbc_1349215296_6");
    record24.set("question_text", "What is a lease liability?");
    record24.set("question_type", "multiple_choice");
    record24.set("options", "[\"Liability recognized by lessee for lease payments\",\"Liability recognized by lessor\",\"Equipment liability\",\"Insurance liability\"]");
    record24.set("correct_answer", "Liability recognized by lessee for lease payments");
    record24.set("explanation", "A lease liability is recognized by the lessee to represent the obligation to make lease payments over the lease term.");
    record24.set("order", 5);
  app.save(record24);

  const record25 = new Record(collection);
    record25.set("quiz_id", "pbc_1349215296_6");
    record25.set("question_text", "What is payment default?");
    record25.set("question_type", "multiple_choice");
    record25.set("options", "[\"Failure to make lease payment\",\"Failure to maintain insurance\",\"Failure to maintain equipment\",\"Failure to comply with lease terms\"]");
    record25.set("correct_answer", "Failure to make lease payment");
    record25.set("explanation", "Payment default occurs when the lessee fails to make a required lease payment, typically triggering a notice and cure period.");
    record25.set("order", 6);
  app.save(record25);

  const record26 = new Record(collection);
    record26.set("quiz_id", "pbc_1349215296_6");
    record26.set("question_text", "What is repossession?");
    record26.set("question_type", "multiple_choice");
    record26.set("options", "[\"Lessor's remedy to take back equipment\",\"Lessee's remedy to return equipment\",\"Court's remedy\",\"Arbitrator's remedy\"]");
    record26.set("correct_answer", "Lessor's remedy to take back equipment");
    record26.set("explanation", "Repossession is a lessor's remedy that allows the lessor to take back the leased equipment upon the lessee's default.");
    record26.set("order", 7);
  app.save(record26);

  const record27 = new Record(collection);
    record27.set("quiz_id", "pbc_1349215296_6");
    record27.set("question_text", "What is acceleration?");
    record27.set("question_type", "multiple_choice");
    record27.set("options", "[\"Lessor's remedy to accelerate remaining payments\",\"Lessee's remedy\",\"Court's remedy\",\"Arbitrator's remedy\"]");
    record27.set("correct_answer", "Lessor's remedy to accelerate remaining payments");
    record27.set("explanation", "Acceleration is a lessor's remedy that allows the lessor to demand immediate payment of all remaining lease payments upon default.");
    record27.set("order", 8);
  app.save(record27);

  const record28 = new Record(collection);
    record28.set("quiz_id", "pbc_1349215296_6");
    record28.set("question_text", "What is arbitration?");
    record28.set("question_type", "multiple_choice");
    record28.set("options", "[\"Neutral arbitrator hears dispute and makes binding decision\",\"Court hears dispute\",\"Parties negotiate dispute\",\"Mediator resolves dispute\"]");
    record28.set("correct_answer", "Neutral arbitrator hears dispute and makes binding decision");
    record28.set("explanation", "Arbitration is a dispute resolution method where a neutral arbitrator hears the dispute and makes a binding decision.");
    record28.set("order", 9);
  app.save(record28);

  const record29 = new Record(collection);
    record29.set("quiz_id", "pbc_1349215296_6");
    record29.set("question_text", "What is a compliance audit?");
    record29.set("question_type", "multiple_choice");
    record29.set("options", "[\"Test of compliance with regulations\",\"Financial audit\",\"Equipment audit\",\"Lease audit\"]");
    record29.set("correct_answer", "Test of compliance with regulations");
    record29.set("explanation", "A compliance audit is a systematic test of compliance with applicable regulations and internal policies.");
    record29.set("order", 10);
  app.save(record29);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})