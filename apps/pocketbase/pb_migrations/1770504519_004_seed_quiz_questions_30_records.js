/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "quiz_1");
    record0.set("question_text", "What is operational leasing?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "A) Purchasing equipment outright\nB) Short-term lease arrangement where lessor retains ownership\nC) Long-term equipment financing\nD) Equipment rental for one month");
    record0.set("correct_answer", "B");
    record0.set("explanation", "Operational leasing is a short-term lease arrangement (typically 1-5 years) where the lessor retains ownership of the asset and the lessee uses it for a portion of its useful life.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "quiz_1");
    record1.set("question_text", "What is the primary benefit of operational leasing for startups?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "A) Ownership of equipment\nB) Capital preservation and flexibility\nC) Long-term cost certainty\nD) Tax deductions on depreciation");
    record1.set("correct_answer", "B");
    record1.set("explanation", "The primary benefit for startups is capital preservation (avoiding large upfront expenditures) and flexibility (easy to upgrade or return equipment as business needs change).");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "quiz_1");
    record2.set("question_text", "How does operational leasing support business growth?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "A) By requiring large capital investments\nB) By preserving capital for growth initiatives and enabling rapid capacity expansion\nC) By locking in long-term commitments\nD) By transferring all risk to the lessee");
    record2.set("correct_answer", "B");
    record2.set("explanation", "Operational leasing supports growth by preserving capital for operations and growth initiatives, and enabling rapid capacity expansion without large capital expenditures.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "quiz_1");
    record3.set("question_text", "What is the typical lease term for operational leasing?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "A) 10-15 years\nB) 1-5 years\nC) 20+ years\nD) 6 months");
    record3.set("correct_answer", "B");
    record3.set("explanation", "Operational leases are typically short-term arrangements lasting 1-5 years, much shorter than the asset's useful life, providing flexibility for upgrades and changes.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "quiz_1");
    record4.set("question_text", "What is the key difference between operational and capital leasing?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "A) Operational leasing is more expensive\nB) Capital leasing has longer terms and lessee has purchase option\nC) Operational leasing is short-term with lessor retaining ownership; capital leasing is long-term with lessee having purchase option\nD) There is no difference");
    record4.set("correct_answer", "C");
    record4.set("explanation", "Operational leasing is short-term (1-5 years) with lessor retaining ownership, while capital leasing is long-term (75%+ of asset life) with lessee having purchase option.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "quiz_1");
    record5.set("question_text", "Who retains ownership of equipment in operational leasing?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "A) The lessee\nB) The lessor\nC) Both equally\nD) The government");
    record5.set("correct_answer", "B");
    record5.set("explanation", "In operational leasing, the lessor retains ownership of the equipment throughout the lease term. The lessee only has the right to use it.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "quiz_1");
    record6.set("question_text", "What is a key advantage of operational leasing for startups?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "A) Ownership of assets\nB) Ability to access equipment without large upfront capital investment\nC) Long-term cost certainty\nD) Depreciation deductions");
    record6.set("correct_answer", "B");
    record6.set("explanation", "A key advantage for startups is the ability to access needed equipment without large upfront capital investment, preserving cash for operations and growth.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "quiz_1");
    record7.set("question_text", "How does operational leasing impact cash flow?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "A) Requires large upfront payment\nB) Creates unpredictable costs\nC) Provides predictable monthly/quarterly payments, preserving cash for operations\nD) Eliminates all cash flow concerns");
    record7.set("correct_answer", "C");
    record7.set("explanation", "Operational leasing provides predictable fixed lease payments, enabling better cash flow management and preserving capital for operations and growth initiatives.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "quiz_1");
    record8.set("question_text", "What does scalability mean in the context of operational leasing?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "A) Reducing equipment costs\nB) Ability to easily increase or decrease equipment capacity as business needs change\nC) Purchasing more equipment\nD) Extending lease terms");
    record8.set("correct_answer", "B");
    record8.set("explanation", "Scalability in operational leasing means the ability to easily increase or decrease equipment capacity as business needs change, without major disruptions or commitments.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "quiz_1");
    record9.set("question_text", "What is a strategic benefit of operational leasing for business growth?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "A) Ownership of equipment\nB) Flexibility to upgrade technology and adapt to market changes\nC) Long-term cost certainty\nD) Depreciation benefits");
    record9.set("correct_answer", "B");
    record9.set("explanation", "A strategic benefit is the flexibility to upgrade technology and adapt to market changes quickly, enabling businesses to stay competitive and respond to growth opportunities.");
    record9.set("order", 10);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("quiz_id", "quiz_2");
    record10.set("question_text", "What is equipment scalability in operational leasing?");
    record10.set("question_type", "multiple_choice");
    record10.set("options", "A) Reducing equipment size\nB) Ability to expand or reduce equipment capacity without major disruptions\nC) Purchasing additional equipment\nD) Extending lease terms");
    record10.set("correct_answer", "B");
    record10.set("explanation", "Equipment scalability is the ability to expand or reduce equipment capacity as business needs change, without major disruptions or long-term commitments.");
    record10.set("order", 1);
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("quiz_id", "quiz_2");
    record11.set("question_text", "What is the primary goal of cost optimization in operational leasing?");
    record11.set("question_type", "multiple_choice");
    record11.set("options", "A) Maximize lease payments\nB) Reduce total cost of ownership while maintaining service quality\nC) Extend lease terms\nD) Increase equipment downtime");
    record11.set("correct_answer", "B");
    record11.set("explanation", "The primary goal of cost optimization is to reduce total cost of ownership (lease payments, maintenance, insurance) while maintaining service quality and operational efficiency.");
    record11.set("order", 2);
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("quiz_id", "quiz_2");
    record12.set("question_text", "How is ROI (Return on Investment) calculated in operational leasing?");
    record12.set("question_type", "multiple_choice");
    record12.set("options", "A) (Benefits - Costs) / Costs \u00d7 100%\nB) Total lease payments / equipment value\nC) Annual revenue / equipment cost\nD) Maintenance costs / lease payments");
    record12.set("correct_answer", "A");
    record12.set("explanation", "ROI is calculated as (Benefits - Costs) / Costs \u00d7 100%, where benefits include capital preservation, growth revenue, cost savings, and efficiency gains.");
    record12.set("order", 3);
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("quiz_id", "quiz_2");
    record13.set("question_text", "What is a benefit of planned equipment upgrades?");
    record13.set("question_type", "multiple_choice");
    record13.set("options", "A) Increases downtime\nB) Maintains competitive advantage through latest technology\nC) Increases lease costs\nD) Reduces equipment utilization");
    record13.set("correct_answer", "C");
    record13.set("explanation", "Planned upgrades maintain competitive advantage by ensuring access to latest technology, improving performance, and enabling business growth without obsolescence risk.");
    record13.set("order", 4);
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("quiz_id", "quiz_2");
    record14.set("question_text", "What is technology refresh in operational leasing?");
    record14.set("question_type", "multiple_choice");
    record14.set("options", "A) Cleaning equipment\nB) Replacing aging technology with latest models to maintain competitive advantage\nC) Extending lease terms\nD) Reducing equipment usage");
    record14.set("correct_answer", "B");
    record14.set("explanation", "Technology refresh means replacing aging technology with latest models to maintain competitive advantage, improve performance, and enable business growth.");
    record14.set("order", 5);
  app.save(record14);

  const record15 = new Record(collection);
    record15.set("quiz_id", "quiz_2");
    record15.set("question_text", "What is an advantage of upgrade options in operational leasing?");
    record15.set("question_type", "multiple_choice");
    record15.set("options", "A) Locks in long-term commitments\nB) Increases equipment costs\nC) Enables easy transition to newer equipment without disposal hassles\nD) Reduces flexibility");
    record15.set("correct_answer", "C");
    record15.set("explanation", "Upgrade options enable easy transition to newer equipment without disposal hassles, allowing businesses to stay current with technology while maintaining flexibility.");
    record15.set("order", 6);
  app.save(record15);

  const record16 = new Record(collection);
    record16.set("quiz_id", "quiz_2");
    record16.set("question_text", "What is capacity scaling in operational leasing?");
    record16.set("question_type", "multiple_choice");
    record16.set("options", "A) Reducing equipment size\nB) Extending lease terms\nC) Upgrading to higher-capacity equipment as business grows\nD) Decreasing production");
    record16.set("correct_answer", "C");
    record16.set("explanation", "Capacity scaling means upgrading to higher-capacity equipment as business grows, enabling revenue growth without major capital investments or disruptions.");
    record16.set("order", 7);
  app.save(record16);

  const record17 = new Record(collection);
    record17.set("quiz_id", "quiz_2");
    record17.set("question_text", "What is the purpose of lease vs buy analysis?");
    record17.set("question_type", "multiple_choice");
    record17.set("options", "A) To determine which option is more expensive\nB) To compare total cost of ownership and financial impact of leasing vs purchasing\nC) To eliminate leasing as an option\nD) To increase equipment costs");
    record17.set("correct_answer", "B");
    record17.set("explanation", "Lease vs buy analysis compares total cost of ownership (including all costs and benefits) to determine which option is more financially advantageous for the business.");
    record17.set("order", 8);
  app.save(record17);

  const record18 = new Record(collection);
    record18.set("quiz_id", "quiz_2");
    record18.set("question_text", "What is a benefit of including maintenance in lease payments?");
    record18.set("question_type", "multiple_choice");
    record18.set("options", "A) Increases total costs\nB) Provides cost predictability and reduces operational burden\nC) Reduces equipment reliability\nD) Increases downtime");
    record18.set("correct_answer", "B");
    record18.set("explanation", "Including maintenance in lease payments provides cost predictability (fixed monthly costs) and reduces operational burden (lessor handles maintenance), improving efficiency.");
    record18.set("order", 9);
  app.save(record18);

  const record19 = new Record(collection);
    record19.set("quiz_id", "quiz_2");
    record19.set("question_text", "What is a financial benefit of operational leasing for business growth?");
    record19.set("question_type", "multiple_choice");
    record19.set("options", "A) Increases debt\nB) Reduces available capital\nC) Preserves capital for growth initiatives and improves financial ratios\nD) Increases equipment costs");
    record19.set("correct_answer", "C");
    record19.set("explanation", "Financial benefits include preserving capital for growth initiatives (avoiding large upfront expenditures) and improving financial ratios (lower debt-to-equity ratios).");
    record19.set("order", 10);
  app.save(record19);

  const record20 = new Record(collection);
    record20.set("quiz_id", "quiz_3");
    record20.set("question_text", "What is lease portfolio management?");
    record20.set("question_type", "multiple_choice");
    record20.set("options", "A) Managing a single lease\nB) Centralized management of all leases, equipment, and financial obligations\nC) Purchasing equipment\nD) Eliminating all leases");
    record20.set("correct_answer", "B");
    record20.set("explanation", "Lease portfolio management is the centralized management of all leases, equipment inventory, financial obligations, and performance metrics across the organization.");
    record20.set("order", 1);
  app.save(record20);

  const record21 = new Record(collection);
    record21.set("quiz_id", "quiz_3");
    record21.set("question_text", "What is the goal of portfolio optimization?");
    record21.set("question_type", "multiple_choice");
    record21.set("options", "A) Increase lease costs\nB) Reduce equipment utilization\nC) Reduce costs, improve utilization, enhance efficiency, and reduce risk\nD) Increase downtime");
    record21.set("correct_answer", "C");
    record21.set("explanation", "Portfolio optimization aims to reduce costs (10-15% savings), improve utilization (80-85%), enhance efficiency (reduce downtime), and reduce operational/financial risk.");
    record21.set("order", 2);
  app.save(record21);

  const record22 = new Record(collection);
    record22.set("quiz_id", "quiz_3");
    record22.set("question_text", "What is equipment utilization in portfolio management?");
    record22.set("question_type", "multiple_choice");
    record22.set("options", "A) Total equipment cost\nB) Percentage of time equipment is actively used (target: 80-85%)\nC) Number of equipment units\nD) Lease payment amount");
    record22.set("correct_answer", "B");
    record22.set("explanation", "Equipment utilization is the percentage of time equipment is actively used in operations. Target is 80-85% to balance capacity and efficiency.");
    record22.set("order", 3);
  app.save(record22);

  const record23 = new Record(collection);
    record23.set("quiz_id", "quiz_3");
    record23.set("question_text", "What is predictive maintenance?");
    record23.set("question_type", "multiple_choice");
    record23.set("options", "A) Waiting for equipment to fail\nB) Using data to predict failures and schedule maintenance proactively\nC) Performing maintenance randomly\nD) Eliminating all maintenance");
    record23.set("correct_answer", "B");
    record23.set("explanation", "Predictive maintenance uses equipment data and analytics to predict failures before they occur, enabling proactive maintenance scheduling and reducing downtime by 50-75%.");
    record23.set("order", 4);
  app.save(record23);

  const record24 = new Record(collection);
    record24.set("quiz_id", "quiz_3");
    record24.set("question_text", "What does OEE (Overall Equipment Effectiveness) measure?");
    record24.set("question_type", "multiple_choice");
    record24.set("options", "A) Equipment cost\nB) Lease payment amount\nC) Availability \u00d7 Performance \u00d7 Quality (target: 85-90%)\nD) Equipment age");
    record24.set("correct_answer", "C");
    record24.set("explanation", "OEE measures Overall Equipment Effectiveness as Availability \u00d7 Performance \u00d7 Quality, with a target of 85-90%. It's a comprehensive measure of equipment productivity.");
    record24.set("order", 5);
  app.save(record24);

  const record25 = new Record(collection);
    record25.set("quiz_id", "quiz_3");
    record25.set("question_text", "What is a benefit of technology integration in operations?");
    record25.set("question_type", "multiple_choice");
    record25.set("options", "A) Increases manual work\nB) Reduces visibility\nC) Enables real-time monitoring, predictive maintenance, and data-driven optimization\nD) Increases equipment downtime");
    record25.set("correct_answer", "C");
    record25.set("explanation", "Technology integration enables real-time equipment monitoring, predictive maintenance, data analytics, and automation, driving significant efficiency improvements and cost reduction.");
    record25.set("order", 6);
  app.save(record25);

  const record26 = new Record(collection);
    record26.set("quiz_id", "quiz_3");
    record26.set("question_text", "What is equipment monitoring in technology integration?");
    record26.set("question_type", "multiple_choice");
    record26.set("options", "A) Manual inspection only\nB) Real-time sensors tracking equipment status, performance, and health\nC) Ignoring equipment condition\nD) Waiting for failures");
    record26.set("correct_answer", "B");
    record26.set("explanation", "Equipment monitoring uses real-time sensors and IoT devices to track equipment status, performance, and health, enabling predictive maintenance and optimization.");
    record26.set("order", 7);
  app.save(record26);

  const record27 = new Record(collection);
    record27.set("quiz_id", "quiz_3");
    record27.set("question_text", "What is the primary growth metric for business expansion?");
    record27.set("question_type", "multiple_choice");
    record27.set("options", "A) Equipment cost\nB) Lease payment amount\nC) Revenue growth (target: 15-25% annually)\nD) Equipment downtime");
    record27.set("correct_answer", "C");
    record27.set("explanation", "Revenue growth (year-over-year increase in total revenue) is the primary growth metric, with a target of 15-25% annually, indicating business expansion and market success.");
    record27.set("order", 8);
  app.save(record27);

  const record28 = new Record(collection);
    record28.set("quiz_id", "quiz_3");
    record28.set("question_text", "What does ROA (Return on Assets) measure?");
    record28.set("question_type", "multiple_choice");
    record28.set("options", "A) Total equipment cost\nB) Net income divided by total assets (target: 20-30%)\nC) Lease payment amount\nD) Equipment downtime");
    record28.set("correct_answer", "B");
    record28.set("explanation", "ROA (Return on Assets) measures net income divided by total assets, with a target of 20-30%. It indicates how efficiently assets are being used to generate profit.");
    record28.set("order", 9);
  app.save(record28);

  const record29 = new Record(collection);
    record29.set("quiz_id", "quiz_3");
    record29.set("question_text", "What is a benefit of comprehensive growth metrics?");
    record29.set("question_type", "multiple_choice");
    record29.set("options", "A) Increases complexity\nB) Reduces visibility\nC) Enables data-driven decision-making and tracking of business growth and operational performance\nD) Increases costs");
    record29.set("correct_answer", "B");
    record29.set("explanation", "Comprehensive growth metrics enable data-driven decision-making, tracking of business growth and operational performance, and identification of improvement opportunities.");
    record29.set("order", 10);
  app.save(record29);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})