/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "Negotiation Fundamentals");
    record0.set("question_text", "What is the primary benefit of preparation in negotiation?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"Saves time\", \"Increases confidence and improves outcomes\", \"Impresses the other party\", \"Reduces stress\"]");
    record0.set("correct_answer", "Increases confidence and improves outcomes");
    record0.set("explanation", "Preparation increases confidence and improves negotiation outcomes by allowing you to understand the situation, set goals, and anticipate objections.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "Negotiation Fundamentals");
    record1.set("question_text", "What is reciprocity in negotiation?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"Giving the same thing back\", \"Giving something to get something\", \"Refusing to negotiate\", \"Accepting their offer\"]");
    record1.set("correct_answer", "Giving something to get something");
    record1.set("explanation", "Reciprocity is the principle of giving something to get something in return, creating mutual obligation.");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "Negotiation Fundamentals");
    record2.set("question_text", "What is emotional intelligence in negotiation?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"Being emotional\", \"Ability to recognize and manage emotions\", \"Avoiding emotions\", \"Showing no emotion\"]");
    record2.set("correct_answer", "Ability to recognize and manage emotions");
    record2.set("explanation", "Emotional intelligence is the ability to recognize and manage your own emotions and understand others emotions in negotiation.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "Negotiation Fundamentals");
    record3.set("question_text", "What is the collaborative negotiation style?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"Win-lose approach\", \"Win-win approach\", \"Lose-lose approach\", \"Avoid conflict\"]");
    record3.set("correct_answer", "Win-win approach");
    record3.set("explanation", "The collaborative negotiation style seeks win-win outcomes where both parties benefit.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "Negotiation Fundamentals");
    record4.set("question_text", "What is the primary role of the decision maker in lease sales?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"Uses the equipment\", \"Makes final decision on lease\", \"Handles procurement\", \"Reviews legal aspects\"]");
    record4.set("correct_answer", "Makes final decision on lease");
    record4.set("explanation", "The decision maker has the authority to make the final decision on whether to proceed with the lease.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "Negotiation Fundamentals");
    record5.set("question_text", "What is stakeholder mapping?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "[\"Creating a map of the office\", \"Identifying stakeholders and their power/interest\", \"Mapping the sales process\", \"Creating a timeline\"]");
    record5.set("correct_answer", "Identifying stakeholders and their power/interest");
    record5.set("explanation", "Stakeholder mapping involves identifying all stakeholders and assessing their power and interest in the decision.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "Negotiation Fundamentals");
    record6.set("question_text", "What is the primary challenge in multi-stakeholder negotiation?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"Too many meetings\", \"Conflicting interests and multiple approvals\", \"Too much paperwork\", \"Long timeline\"]");
    record6.set("correct_answer", "Conflicting interests and multiple approvals");
    record6.set("explanation", "Multi-stakeholder negotiations are challenging because different stakeholders have different interests and multiple approvals are needed.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "Negotiation Fundamentals");
    record7.set("question_text", "What is the primary benefit of identifying common ground?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "[\"Saves time\", \"Reduces conflict and builds agreement\", \"Impresses the other party\", \"Reduces cost\"]");
    record7.set("correct_answer", "Reduces conflict and builds agreement");
    record7.set("explanation", "Identifying common ground reduces conflict and builds agreement by focusing on shared interests.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "Negotiation Fundamentals");
    record8.set("question_text", "What are the six core negotiation principles?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "[\"Speed, cost, quality, service, support, flexibility\", \"Preparation, information, patience, flexibility, integrity, clarity\", \"Win, lose, compromise, avoid, accommodate, collaborate\", \"Listen, speak, agree, disagree, compromise, finalize\"]");
    record8.set("correct_answer", "Preparation, information, patience, flexibility, integrity, clarity");
    record8.set("explanation", "The six core negotiation principles are preparation, information, patience, flexibility, integrity, and clarity.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "Negotiation Fundamentals");
    record9.set("question_text", "What is the primary goal of negotiation?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "[\"Win the negotiation\", \"Reach mutually acceptable agreement\", \"Get the best price\", \"Impress the other party\"]");
    record9.set("correct_answer", "Reach mutually acceptable agreement");
    record9.set("explanation", "The primary goal of negotiation is to reach a mutually acceptable agreement that satisfies both parties.");
    record9.set("order", 10);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("quiz_id", "Negotiation Strategies and Tactics");
    record10.set("question_text", "What is anchoring in negotiation?");
    record10.set("question_type", "multiple_choice");
    record10.set("options", "[\"Staying firm on your position\", \"First number mentioned influences final outcome\", \"Refusing to move\", \"Accepting their offer\"]");
    record10.set("correct_answer", "First number mentioned influences final outcome");
    record10.set("explanation", "Anchoring is the cognitive bias where the first number mentioned in negotiation influences the final outcome.");
    record10.set("order", 1);
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("quiz_id", "Negotiation Strategies and Tactics");
    record11.set("question_text", "What is the primary benefit of silence in negotiation?");
    record11.set("question_type", "multiple_choice");
    record11.set("options", "[\"Saves time\", \"Creates pressure to respond and allows thinking time\", \"Shows confidence\", \"Avoids conflict\"]");
    record11.set("correct_answer", "Creates pressure to respond and allows thinking time");
    record11.set("explanation", "Silence in negotiation creates pressure on the other party to respond and gives you time to think.");
    record11.set("order", 2);
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("quiz_id", "Negotiation Strategies and Tactics");
    record12.set("question_text", "What is reframing in negotiation?");
    record12.set("question_type", "multiple_choice");
    record12.set("options", "[\"Changing the frame of the picture\", \"Changing how issue is viewed\", \"Refusing to negotiate\", \"Accepting their offer\"]");
    record12.set("correct_answer", "Changing how issue is viewed");
    record12.set("explanation", "Reframing is changing how an issue is viewed to present it in a more favorable light.");
    record12.set("order", 3);
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("quiz_id", "Negotiation Strategies and Tactics");
    record13.set("question_text", "What is the first step in the objection handling framework?");
    record13.set("question_type", "multiple_choice");
    record13.set("options", "[\"Immediately respond\", \"Listen and acknowledge\", \"Argue your position\", \"Refuse to negotiate\"]");
    record13.set("correct_answer", "Listen and acknowledge");
    record13.set("explanation", "The first step in objection handling is to listen carefully and acknowledge the objection.");
    record13.set("order", 4);
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("quiz_id", "Negotiation Strategies and Tactics");
    record14.set("question_text", "What are the five steps in objection handling?");
    record14.set("question_type", "multiple_choice");
    record14.set("options", "[\"Argue, refuse, ignore, move on, finalize\", \"Listen, acknowledge, clarify, respond, confirm\", \"Refuse, ignore, move on, accept, finalize\", \"Accept, agree, move on, finalize, celebrate\"]");
    record14.set("correct_answer", "Listen, acknowledge, clarify, respond, confirm");
    record14.set("explanation", "The five steps in objection handling are: listen, acknowledge, clarify, respond, and confirm.");
    record14.set("order", 5);
  app.save(record14);

  const record15 = new Record(collection);
    record15.set("quiz_id", "Negotiation Strategies and Tactics");
    record15.set("question_text", "What is the primary source of client information?");
    record15.set("question_type", "multiple_choice");
    record15.set("options", "[\"Guessing\", \"Company website, financial statements, industry reports\", \"Asking friends\", \"Assuming\"]");
    record15.set("correct_answer", "Company website, financial statements, industry reports");
    record15.set("explanation", "The primary sources of client information are company websites, financial statements, and industry reports.");
    record15.set("order", 6);
  app.save(record15);

  const record16 = new Record(collection);
    record16.set("quiz_id", "Negotiation Strategies and Tactics");
    record16.set("question_text", "What is the primary benefit of reciprocity in negotiation?");
    record16.set("question_type", "multiple_choice");
    record16.set("options", "[\"Saves time\", \"Creates obligation to return favor\", \"Reduces cost\", \"Impresses the other party\"]");
    record16.set("correct_answer", "Creates obligation to return favor");
    record16.set("explanation", "Reciprocity creates an obligation for the other party to return the favor, which can be used strategically in negotiation.");
    record16.set("order", 7);
  app.save(record16);

  const record17 = new Record(collection);
    record17.set("quiz_id", "Negotiation Strategies and Tactics");
    record17.set("question_text", "What is a common lease sales objection?");
    record17.set("question_type", "multiple_choice");
    record17.set("options", "[\"I like your company\", \"Price is too high or Don't need equipment now\", \"You're the best\", \"Let's sign today\"]");
    record17.set("correct_answer", "Price is too high or Don't need equipment now");
    record17.set("explanation", "Common lease sales objections include price concerns and timing issues.");
    record17.set("order", 8);
  app.save(record17);

  const record18 = new Record(collection);
    record18.set("quiz_id", "Negotiation Strategies and Tactics");
    record18.set("question_text", "What is the primary approach to difficult situations?");
    record18.set("question_type", "multiple_choice");
    record18.set("options", "[\"Avoid them\", \"Stay calm, listen, acknowledge, offer solution\", \"Argue your position\", \"Refuse to negotiate\"]");
    record18.set("correct_answer", "Stay calm, listen, acknowledge, offer solution");
    record18.set("explanation", "The primary approach to difficult situations is to stay calm, listen, acknowledge the concern, and offer a solution.");
    record18.set("order", 9);
  app.save(record18);

  const record19 = new Record(collection);
    record19.set("quiz_id", "Negotiation Strategies and Tactics");
    record19.set("question_text", "What is the primary benefit of identifying client interests?");
    record19.set("question_type", "multiple_choice");
    record19.set("options", "[\"Saves time\", \"Addresses real needs and creates better solutions\", \"Reduces cost\", \"Impresses the other party\"]");
    record19.set("correct_answer", "Addresses real needs and creates better solutions");
    record19.set("explanation", "Identifying client interests allows you to address their real needs and create better solutions.");
    record19.set("order", 10);
  app.save(record19);

  const record20 = new Record(collection);
    record20.set("quiz_id", "Advanced Negotiation and Closing");
    record20.set("question_text", "What is value creation in negotiation?");
    record20.set("question_type", "multiple_choice");
    record20.set("options", "[\"Creating financial value only\", \"Looking for additional value beyond stated positions\", \"Reducing cost\", \"Winning the negotiation\"]");
    record20.set("correct_answer", "Looking for additional value beyond stated positions");
    record20.set("explanation", "Value creation involves looking for additional value beyond the stated positions to expand the pie for both parties.");
    record20.set("order", 1);
  app.save(record20);

  const record21 = new Record(collection);
    record21.set("quiz_id", "Advanced Negotiation and Closing");
    record21.set("question_text", "What is the primary principle of win-win negotiation?");
    record21.set("question_type", "multiple_choice");
    record21.set("options", "[\"One party wins, one loses\", \"Both parties benefit\", \"Split the difference\", \"Avoid negotiation\"]");
    record21.set("correct_answer", "Both parties benefit");
    record21.set("explanation", "The primary principle of win-win negotiation is that both parties benefit from the agreement.");
    record21.set("order", 2);
  app.save(record21);

  const record22 = new Record(collection);
    record22.set("quiz_id", "Advanced Negotiation and Closing");
    record22.set("question_text", "What is the primary benefit of expanding the pie?");
    record22.set("question_type", "multiple_choice");
    record22.set("options", "[\"Saves time\", \"Creates more value for both parties\", \"Reduces cost\", \"Impresses the other party\"]");
    record22.set("correct_answer", "Creates more value for both parties");
    record22.set("explanation", "Expanding the pie creates more value for both parties by adding additional elements to the deal.");
    record22.set("order", 3);
  app.save(record22);

  const record23 = new Record(collection);
    record23.set("quiz_id", "Advanced Negotiation and Closing");
    record23.set("question_text", "What is a buying signal in negotiation?");
    record23.set("question_type", "multiple_choice");
    record23.set("options", "[\"The client says no\", \"Sign that client is ready to buy\", \"The client leaves\", \"The client refuses\"]");
    record23.set("correct_answer", "Sign that client is ready to buy");
    record23.set("explanation", "A buying signal is a sign that the client is ready to buy, such as asking about payment terms or timeline.");
    record23.set("order", 4);
  app.save(record23);

  const record24 = new Record(collection);
    record24.set("quiz_id", "Advanced Negotiation and Closing");
    record24.set("question_text", "What is the assumptive close?");
    record24.set("question_type", "multiple_choice");
    record24.set("options", "[\"Assume they're not buying\", \"Assume they're buying and move forward\", \"Assume they need time\", \"Assume they'll refuse\"]");
    record24.set("correct_answer", "Assume they're buying and move forward");
    record24.set("explanation", "The assumptive close involves assuming the client is buying and moving forward with the paperwork.");
    record24.set("order", 5);
  app.save(record24);

  const record25 = new Record(collection);
    record25.set("quiz_id", "Advanced Negotiation and Closing");
    record25.set("question_text", "What is the alternative close?");
    record25.set("question_type", "multiple_choice");
    record25.set("options", "[\"Offer one option\", \"Offer two options, both lead to agreement\", \"Offer no options\", \"Refuse to negotiate\"]");
    record25.set("correct_answer", "Offer two options, both lead to agreement");
    record25.set("explanation", "The alternative close offers two options where both lead to agreement, giving the client a choice.");
    record25.set("order", 6);
  app.save(record25);

  const record26 = new Record(collection);
    record26.set("quiz_id", "Advanced Negotiation and Closing");
    record26.set("question_text", "What is the primary benefit of post-negotiation follow-up?");
    record26.set("question_type", "multiple_choice");
    record26.set("options", "[\"Saves time\", \"Confirms terms and builds relationship\", \"Reduces cost\", \"Impresses the other party\"]");
    record26.set("correct_answer", "Confirms terms and builds relationship");
    record26.set("explanation", "Post-negotiation follow-up confirms the agreed terms and builds a strong relationship with the client.");
    record26.set("order", 7);
  app.save(record26);

  const record27 = new Record(collection);
    record27.set("quiz_id", "Advanced Negotiation and Closing");
    record27.set("question_text", "What is the primary principle of relationship management?");
    record27.set("question_type", "multiple_choice");
    record27.set("options", "[\"Deliver on promises and communicate regularly\", \"Ignore the client\", \"Only contact for new sales\", \"Avoid communication\"]");
    record27.set("correct_answer", "Deliver on promises and communicate regularly");
    record27.set("explanation", "The primary principle of relationship management is to deliver on your promises and communicate regularly with the client.");
    record27.set("order", 8);
  app.save(record27);

  const record28 = new Record(collection);
    record28.set("quiz_id", "Advanced Negotiation and Closing");
    record28.set("question_text", "What is upselling in lease sales?");
    record28.set("question_type", "multiple_choice");
    record28.set("options", "[\"Selling lower-value version\", \"Selling higher-value version or upgrade\", \"Selling different product\", \"Refusing to sell\"]");
    record28.set("correct_answer", "Selling higher-value version or upgrade");
    record28.set("explanation", "Upselling involves selling a higher-value version or upgrade to an existing lease.");
    record28.set("order", 9);
  app.save(record28);

  const record29 = new Record(collection);
    record29.set("quiz_id", "Advanced Negotiation and Closing");
    record29.set("question_text", "What is the primary goal of relationship management?");
    record29.set("question_type", "multiple_choice");
    record29.set("options", "[\"Get one sale\", \"Build long-term relationship and repeat business\", \"Reduce cost\", \"Avoid communication\"]");
    record29.set("correct_answer", "Build long-term relationship and repeat business");
    record29.set("explanation", "The primary goal of relationship management is to build a long-term relationship and generate repeat business.");
    record29.set("order", 10);
  app.save(record29);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})