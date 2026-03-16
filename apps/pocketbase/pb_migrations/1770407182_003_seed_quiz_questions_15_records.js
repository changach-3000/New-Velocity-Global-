/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "quiz_4.1_1");
    record0.set("question_text", "What is the primary purpose of ESG-linked leasing?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"To reduce lease payments\", \"To align financial incentives with sustainability performance\", \"To eliminate environmental regulations\", \"To increase asset depreciation\"]");
    record0.set("correct_answer", "To align financial incentives with sustainability performance");
    record0.set("explanation", "ESG-linked leasing integrates Environmental, Social, and Governance factors directly into lease structures, creating mutual benefits by aligning financial incentives with sustainability performance targets.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "quiz_4.1_1");
    record1.set("question_text", "Which of the following is NOT a key component of ESG-linked lease structures?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"Sustainability-linked pricing mechanisms\", \"Performance-based lease adjustments\", \"Unlimited asset usage without monitoring\", \"Green certification requirements\"]");
    record1.set("correct_answer", "Unlimited asset usage without monitoring");
    record1.set("explanation", "ESG-linked leases require robust monitoring and measurement frameworks. Unlimited usage without monitoring contradicts the core principle of performance-based sustainability alignment.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "quiz_4.1_1");
    record2.set("question_text", "What are the three pillars of ESG metrics in leasing?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"Economic, Social, Governance\", \"Environmental, Social, Governance\", \"Equipment, Service, Growth\", \"Efficiency, Sustainability, Governance\"]");
    record2.set("correct_answer", "Environmental, Social, Governance");
    record2.set("explanation", "ESG stands for Environmental, Social, and Governance - the three core pillars used to measure sustainability and ethical performance in leasing arrangements.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "quiz_4.1_1");
    record3.set("question_text", "How do performance-based discounts work in ESG-linked leases?");
    record3.set("question_type", "short_answer");
    record3.set("options", "[]");
    record3.set("correct_answer", "Lessees receive reduced lease rates when they exceed sustainability targets and performance metrics");
    record3.set("explanation", "Performance-based discounts incentivize lessees to exceed sustainability targets by offering lower lease rates as a reward for superior environmental and social performance.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "quiz_4.1_1");
    record4.set("question_text", "True or False: Third-party verification is optional in ESG-linked leasing.");
    record4.set("question_type", "true_false");
    record4.set("options", "[\"True\", \"False\"]");
    record4.set("correct_answer", "False");
    record4.set("explanation", "Third-party verification is essential in ESG-linked leasing to ensure credibility, transparency, and accurate measurement of sustainability metrics and performance targets.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "quiz_4.2_1");
    record5.set("question_text", "What is the fundamental difference between usage-based leasing and traditional leasing?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "[\"Usage-based leasing is more expensive\", \"Usage-based leasing aligns costs with actual consumption rather than fixed payments\", \"Usage-based leasing requires ownership\", \"There is no difference\"]");
    record5.set("correct_answer", "Usage-based leasing aligns costs with actual consumption rather than fixed payments");
    record5.set("explanation", "Usage-based leasing shifts from fixed ownership costs to variable costs aligned with actual usage, providing flexibility and cost optimization for lessees.");
    record5.set("order", 1);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "quiz_4.2_1");
    record6.set("question_text", "Which technology is essential for implementing pay-per-use lease models?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"Manual record-keeping\", \"Metering and monitoring technologies\", \"Paper-based tracking\", \"Annual audits only\"]");
    record6.set("correct_answer", "Metering and monitoring technologies");
    record6.set("explanation", "Metering and monitoring technologies enable accurate tracking and reporting of usage, which is fundamental to implementing effective pay-per-use lease models.");
    record6.set("order", 2);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "quiz_4.2_1");
    record7.set("question_text", "What does 'As-a-Service' mean in the context of leasing?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "[\"Providing customer support only\", \"Transforming traditional leasing into service offerings focused on outcomes\", \"Reducing service quality\", \"Eliminating maintenance responsibilities\"]");
    record7.set("correct_answer", "Transforming traditional leasing into service offerings focused on outcomes");
    record7.set("explanation", "As-a-Service models transform traditional leasing into comprehensive service offerings where the focus shifts to delivering outcomes and value rather than just providing equipment.");
    record7.set("order", 3);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "quiz_4.2_1");
    record8.set("question_text", "Name three examples of As-a-Service business models in leasing.");
    record8.set("question_type", "short_answer");
    record8.set("options", "[]");
    record8.set("correct_answer", "Equipment-as-a-Service (EaaS), Mobility-as-a-Service (MaaS), Infrastructure-as-a-Service (IaaS)");
    record8.set("explanation", "These three models represent the transformation of traditional leasing into service-oriented offerings where customers pay for outcomes and access rather than ownership.");
    record8.set("order", 4);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "quiz_4.2_1");
    record9.set("question_text", "True or False: Dynamic pricing algorithms can be used in usage-based leasing models.");
    record9.set("question_type", "true_false");
    record9.set("options", "[\"True\", \"False\"]");
    record9.set("correct_answer", "True");
    record9.set("explanation", "Dynamic pricing algorithms are advanced pricing mechanisms that can adjust rates based on usage patterns, demand, and other factors in usage-based leasing models.");
    record9.set("order", 5);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("quiz_id", "quiz_4.3_1");
    record10.set("question_text", "What is the primary advantage of IoT in leasing operations?");
    record10.set("question_type", "multiple_choice");
    record10.set("options", "[\"Increased paperwork\", \"Real-time visibility and control of leased assets\", \"Higher maintenance costs\", \"Reduced asset utilization\"]");
    record10.set("correct_answer", "Real-time visibility and control of leased assets");
    record10.set("explanation", "IoT technologies enable real-time monitoring and control of leased assets, providing visibility into asset location, condition, and performance.");
    record10.set("order", 1);
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("quiz_id", "quiz_4.3_1");
    record11.set("question_text", "Which of the following is NOT a digital asset tracking technology?");
    record11.set("question_type", "multiple_choice");
    record11.set("options", "[\"GPS tracking\", \"RFID technology\", \"Manual visual inspection only\", \"Sensor networks\"]");
    record11.set("correct_answer", "Manual visual inspection only");
    record11.set("explanation", "Digital asset tracking relies on automated technologies like GPS, RFID, and sensors. Manual visual inspection alone is not a digital tracking technology.");
    record11.set("order", 2);
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("quiz_id", "quiz_4.3_1");
    record12.set("question_text", "What is telematics in the context of IoT-enabled leasing?");
    record12.set("question_type", "multiple_choice");
    record12.set("options", "[\"A type of lease agreement\", \"Advanced monitoring of vehicle and equipment performance metrics\", \"A payment method\", \"A maintenance schedule\"]");
    record12.set("correct_answer", "Advanced monitoring of vehicle and equipment performance metrics");
    record12.set("explanation", "Telematics refers to the collection and analysis of real-time performance data from vehicles and equipment, enabling advanced monitoring and analytics.");
    record12.set("order", 3);
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("quiz_id", "quiz_4.3_1");
    record13.set("question_text", "How does predictive maintenance reduce costs in IoT-enabled leasing?");
    record13.set("question_type", "short_answer");
    record13.set("options", "[]");
    record13.set("correct_answer", "By identifying potential failures before they occur, enabling proactive maintenance that prevents costly downtime and extends asset lifecycle");
    record13.set("explanation", "Predictive maintenance uses IoT data to anticipate failures, allowing maintenance to be scheduled proactively rather than reactively, reducing emergency repairs and downtime.");
    record13.set("order", 4);
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("quiz_id", "quiz_4.3_1");
    record14.set("question_text", "True or False: Data security is not a concern in IoT-enabled leasing systems.");
    record14.set("question_type", "true_false");
    record14.set("options", "[\"True\", \"False\"]");
    record14.set("correct_answer", "False");
    record14.set("explanation", "Data security and privacy are critical considerations in IoT-enabled leasing systems, as they handle sensitive asset and operational data that must be protected.");
    record14.set("order", 5);
  app.save(record14);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})