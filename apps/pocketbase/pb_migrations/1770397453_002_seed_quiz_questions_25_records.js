/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "final_quiz_lesson");
    record0.set("question_text", "What is the definition of a lessor in a leasing agreement?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"A) The party who uses the asset\", \"B) The party who owns and leases the asset to another party\", \"C) The financial institution that approves the lease\", \"D) The insurance provider for the leased asset\"]");
    record0.set("correct_answer", "B");
    record0.set("explanation", "A lessor is the owner of the asset who leases it to another party (the lessee). The lessor retains ownership while allowing the lessee to use the asset.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "final_quiz_lesson");
    record1.set("question_text", "What is the primary advantage of leasing compared to buying an asset?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"A) Full ownership of the asset\", \"B) Lower upfront capital requirements and flexibility\", \"C) Guaranteed asset appreciation\", \"D) No maintenance responsibilities\"]");
    record1.set("correct_answer", "B");
    record1.set("explanation", "Leasing requires lower upfront capital compared to purchasing and provides flexibility to upgrade or return the asset at lease end.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "final_quiz_lesson");
    record2.set("question_text", "What does Fair Market Value (FMV) represent in a lease agreement?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"A) The original purchase price of the asset\", \"B) The estimated value of the asset at the end of the lease term\", \"C) The monthly lease payment amount\", \"D) The insurance value of the asset\"]");
    record2.set("correct_answer", "B");
    record2.set("explanation", "Fair Market Value is the estimated value of an asset at the end of the lease term, used to determine residual value and lease payments.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "final_quiz_lesson");
    record3.set("question_text", "In a net lease, who is responsible for maintenance, insurance, and property taxes?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"A) The lessor only\", \"B) The lessor and lessee equally\", \"C) The lessee\", \"D) A third-party maintenance company\"]");
    record3.set("correct_answer", "C");
    record3.set("explanation", "In a net lease, the lessee is responsible for maintenance, insurance, and property taxes in addition to lease payments.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "final_quiz_lesson");
    record4.set("question_text", "What is the lease term in a leasing agreement?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"A) The time it takes to process the lease application\", \"B) The period during which the lessee has the right to use the asset\", \"C) The time required for asset delivery\", \"D) The warranty period of the asset\"]");
    record4.set("correct_answer", "B");
    record4.set("explanation", "The lease term is the contractual period during which the lessee has the right to use the leased asset.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "final_quiz_lesson");
    record5.set("question_text", "Which type of lease is most appropriate for a 2-year laptop requirement?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "[\"A) Capital lease\", \"B) Operating lease\", \"C) Sale and leaseback\", \"D) Master lease\"]");
    record5.set("correct_answer", "B");
    record5.set("explanation", "An operating lease is ideal for short-term asset needs like a 2-year laptop, as it provides flexibility and typically includes maintenance.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "final_quiz_lesson");
    record6.set("question_text", "What is the primary purpose of a sale and leaseback transaction?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"A) To increase asset ownership\", \"B) To unlock capital from owned assets while retaining use\", \"C) To reduce lease payments\", \"D) To transfer asset ownership permanently\"]");
    record6.set("correct_answer", "B");
    record6.set("explanation", "Sale and leaseback allows a company to sell an owned asset and lease it back, unlocking capital while maintaining operational use.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "final_quiz_lesson");
    record7.set("question_text", "What is an off-balance sheet lease?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "[\"A) A lease recorded on the balance sheet\", \"B) A lease with no financial impact\", \"C) A lease that was not recorded as a liability on the balance sheet under older accounting standards\", \"D) A lease with no monthly payments\"]");
    record7.set("correct_answer", "C");
    record7.set("explanation", "Under older accounting standards (pre-IFRS 16/ASC 842), operating leases were not recorded as liabilities on the balance sheet, making them 'off-balance sheet'.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "final_quiz_lesson");
    record8.set("question_text", "What is a Master Lease Agreement?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "[\"A) A lease for master equipment only\", \"B) An umbrella agreement covering multiple lease transactions\", \"C) The primary lease in a portfolio\", \"D) A lease with the highest payment amount\"]");
    record8.set("correct_answer", "B");
    record8.set("explanation", "A Master Lease Agreement is an umbrella contract that covers multiple individual lease transactions, streamlining administration.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "final_quiz_lesson");
    record9.set("question_text", "What typically happens at the end of a finance lease?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "[\"A) The asset is returned to the lessor\", \"B) The lessee has the option to purchase the asset\", \"C) The lease automatically renews\", \"D) The asset is destroyed\"]");
    record9.set("correct_answer", "B");
    record9.set("explanation", "At the end of a finance lease, the lessee typically has the option to purchase the asset at a predetermined price (residual value).");
    record9.set("order", 10);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("quiz_id", "final_quiz_lesson");
    record10.set("question_text", "Under IFRS 16, what is a Right-of-Use (ROU) asset?");
    record10.set("question_type", "multiple_choice");
    record10.set("options", "[\"A) The lessor's ownership right\", \"B) The lessee's right to use the leased asset, recognized as an asset on the balance sheet\", \"C) The right to purchase the asset\", \"D) The right to terminate the lease\"]");
    record10.set("correct_answer", "B");
    record10.set("explanation", "IFRS 16 requires lessees to recognize a Right-of-Use asset representing their right to use the leased asset over the lease term.");
    record10.set("order", 11);
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("quiz_id", "final_quiz_lesson");
    record11.set("question_text", "What is residual value in a lease?");
    record11.set("question_type", "multiple_choice");
    record11.set("options", "[\"A) The total lease payment amount\", \"B) The estimated value of the asset at the end of the lease term\", \"C) The monthly payment amount\", \"D) The insurance cost\"]");
    record11.set("correct_answer", "B");
    record11.set("explanation", "Residual value is the estimated worth of the leased asset at the end of the lease term, used to calculate lease payments.");
    record11.set("order", 12);
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("quiz_id", "final_quiz_lesson");
    record12.set("question_text", "What does KYC documentation stand for in leasing?");
    record12.set("question_type", "multiple_choice");
    record12.set("options", "[\"A) Keep Your Credit\", \"B) Key Yield Calculation\", \"C) Know Your Customer\", \"D) Lease Key Compliance\"]");
    record12.set("correct_answer", "B");
    record12.set("explanation", "KYC stands for Know Your Customer, referring to documentation and verification required to establish the lessee's identity and creditworthiness.");
    record12.set("order", 13);
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("quiz_id", "final_quiz_lesson");
    record13.set("question_text", "Which factors typically influence monthly lease payment amounts?");
    record13.set("question_type", "multiple_choice");
    record13.set("options", "[\"A) Only the asset cost\", \"B) Asset cost, residual value, lease term, interest rate, and credit risk\", \"C) Only the lease term\", \"D) Only the interest rate\"]");
    record13.set("correct_answer", "B");
    record13.set("explanation", "Monthly lease payments are determined by multiple factors including asset cost, residual value, lease term, interest rate, and the lessee's credit profile.");
    record13.set("order", 14);
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("quiz_id", "final_quiz_lesson");
    record14.set("question_text", "What is a soft cost in leasing?");
    record14.set("question_type", "multiple_choice");
    record14.set("options", "[\"A) A reduced lease payment\", \"B) Indirect costs such as legal fees, documentation, and processing fees\", \"C) The cost of asset insurance\", \"D) The cost of asset maintenance\"]");
    record14.set("correct_answer", "B");
    record14.set("explanation", "Soft costs are indirect expenses in a lease transaction, including legal fees, documentation costs, and administrative processing fees.");
    record14.set("order", 15);
  app.save(record14);

  const record15 = new Record(collection);
    record15.set("quiz_id", "final_quiz_lesson");
    record15.set("question_text", "What is a Digital Dossier in the leasing process?");
    record15.set("question_type", "multiple_choice");
    record15.set("options", "[\"A) A physical file of documents\", \"B) A digital repository of all lease-related documents and records\", \"C) A software application for lease payments\", \"D) A digital signature platform\"]");
    record15.set("correct_answer", "B");
    record15.set("explanation", "A Digital Dossier is a centralized digital repository containing all lease documentation, records, and communications for easy access and compliance.");
    record15.set("order", 16);
  app.save(record15);

  const record16 = new Record(collection);
    record16.set("quiz_id", "final_quiz_lesson");
    record16.set("question_text", "What is cross-border risk in international leasing?");
    record16.set("question_type", "multiple_choice");
    record16.set("options", "[\"A) The risk of the asset crossing borders\", \"B) Currency fluctuations, regulatory differences, and political risks in international lease transactions\", \"C) The cost of shipping assets\", \"D) The risk of asset theft\"]");
    record16.set("correct_answer", "B");
    record16.set("explanation", "Cross-border risk includes currency exchange fluctuations, varying regulatory requirements, and political/economic risks in international leasing.");
    record16.set("order", 17);
  app.save(record16);

  const record17 = new Record(collection);
    record17.set("quiz_id", "final_quiz_lesson");
    record17.set("question_text", "What does a status bar indicate in lease management systems?");
    record17.set("question_type", "multiple_choice");
    record17.set("options", "[\"A) The color of the asset\", \"B) The current stage or progress of a lease transaction\", \"C) The payment amount\", \"D) The lessor's location\"]");
    record17.set("correct_answer", "B");
    record17.set("explanation", "A status bar in lease management systems indicates the current stage or progress of a lease transaction (e.g., pending, approved, active, completed).");
    record17.set("order", 18);
  app.save(record17);

  const record18 = new Record(collection);
    record18.set("quiz_id", "final_quiz_lesson");
    record18.set("question_text", "What is the importance of end-of-term notice in a lease?");
    record18.set("question_type", "multiple_choice");
    record18.set("options", "[\"A) To increase lease payments\", \"B) To inform parties of lease expiration and options for renewal, purchase, or return\", \"C) To reduce the lease term\", \"D) To change the lessor\"]");
    record18.set("correct_answer", "B");
    record18.set("explanation", "End-of-term notice informs both parties of the lease expiration date and available options such as renewal, purchase, or asset return.");
    record18.set("order", 19);
  app.save(record18);

  const record19 = new Record(collection);
    record19.set("quiz_id", "final_quiz_lesson");
    record19.set("question_text", "What is the role of E-Signature in modern leasing?");
    record19.set("question_type", "multiple_choice");
    record19.set("options", "[\"A) To replace physical documents\", \"B) To provide legally binding digital signatures for lease agreements\", \"C) To reduce lease costs\", \"D) To extend the lease term\"]");
    record19.set("correct_answer", "B");
    record19.set("explanation", "E-Signature provides legally binding digital signatures for lease agreements, enabling faster execution and reducing paperwork.");
    record19.set("order", 20);
  app.save(record19);

  const record20 = new Record(collection);
    record20.set("quiz_id", "final_quiz_lesson");
    record20.set("question_text", "For a 6-month crane project, what type of lease would be most suitable?");
    record20.set("question_type", "multiple_choice");
    record20.set("options", "[\"A) Long-term capital lease\", \"B) Short-term operating lease\", \"C) Sale and leaseback\", \"D) Master lease agreement\"]");
    record20.set("correct_answer", "B");
    record20.set("explanation", "A short-term operating lease is ideal for temporary equipment needs like a 6-month crane project, providing flexibility without long-term commitment.");
    record20.set("order", 21);
  app.save(record20);

  const record21 = new Record(collection);
    record21.set("quiz_id", "final_quiz_lesson");
    record21.set("question_text", "How does leasing help businesses during a credit crunch?");
    record21.set("question_type", "multiple_choice");
    record21.set("options", "[\"A) It increases debt on the balance sheet\", \"B) It provides access to assets without requiring large upfront capital or credit approval\", \"C) It eliminates the need for credit checks\", \"D) It guarantees asset ownership\"]");
    record21.set("correct_answer", "B");
    record21.set("explanation", "During credit crunches, leasing provides businesses access to needed assets with lower capital requirements and more flexible credit terms.");
    record21.set("order", 22);
  app.save(record21);

  const record22 = new Record(collection);
    record22.set("quiz_id", "final_quiz_lesson");
    record22.set("question_text", "What is an Early Purchase Option in a lease?");
    record22.set("question_type", "multiple_choice");
    record22.set("options", "[\"A) The right to purchase the asset before the lease begins\", \"B) The right to purchase the asset before the lease term ends\", \"C) The right to return the asset early\", \"D) The right to extend the lease\"]");
    record22.set("correct_answer", "A");
    record22.set("explanation", "An Early Purchase Option allows the lessee to purchase the leased asset before the scheduled lease term ends, typically at a predetermined price.");
    record22.set("order", 23);
  app.save(record22);

  const record23 = new Record(collection);
    record23.set("quiz_id", "final_quiz_lesson");
    record23.set("question_text", "What is a Hell or High Water clause in a lease agreement?");
    record23.set("question_type", "multiple_choice");
    record23.set("options", "[\"A) A clause allowing lease termination\", \"B) A clause requiring the lessee to continue payments regardless of circumstances\", \"C) A clause for weather-related damages\", \"D) A clause for asset replacement\"]");
    record23.set("correct_answer", "B");
    record23.set("explanation", "A Hell or High Water clause obligates the lessee to continue making lease payments under virtually all circumstances, even if the asset becomes unusable.");
    record23.set("order", 24);
  app.save(record23);

  const record24 = new Record(collection);
    record24.set("quiz_id", "final_quiz_lesson");
    record24.set("question_text", "Why is asset tracking important in lease management?");
    record24.set("question_type", "multiple_choice");
    record24.set("options", "[\"A) To increase lease payments\", \"B) To monitor asset location, condition, and compliance with lease terms\", \"C) To reduce the lease term\", \"D) To change the lessor\"]");
    record24.set("correct_answer", "B");
    record24.set("explanation", "Asset tracking ensures proper monitoring of the leased asset's location, condition, and maintenance, ensuring compliance with lease terms and protecting lessor interests.");
    record24.set("order", 25);
  app.save(record24);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})