/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quiz_questions");

  const record0 = new Record(collection);
    record0.set("quiz_id", "part_1_quiz_id");
    record0.set("question_text", "What is a leasing strategy?");
    record0.set("question_type", "multiple_choice");
    record0.set("options", "[\"A long-term plan for leasing business success\", \"A short-term marketing plan\", \"A pricing model\", \"A customer service approach\"]");
    record0.set("correct_answer", "A long-term plan for leasing business success");
    record0.set("explanation", "A leasing strategy is a long-term plan that aligns resources with market opportunities, creates competitive advantage, and guides decision-making in the leasing business.");
    record0.set("order", 1);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("quiz_id", "part_1_quiz_id");
    record1.set("question_text", "What does SWOT analysis stand for?");
    record1.set("question_type", "multiple_choice");
    record1.set("options", "[\"Strengths, Weaknesses, Opportunities, Threats\", \"Sales, Workflow, Operations, Training\", \"Strategy, Workflow, Objectives, Targets\", \"Strengths, Workflow, Opportunities, Targets\"]");
    record1.set("correct_answer", "Strengths, Weaknesses, Opportunities, Threats");
    record1.set("explanation", "SWOT is an acronym for Strengths (internal advantages), Weaknesses (internal disadvantages), Opportunities (external positive factors), and Threats (external negative factors).");
    record1.set("order", 2);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("quiz_id", "part_1_quiz_id");
    record2.set("question_text", "What is competitive advantage?");
    record2.set("question_type", "multiple_choice");
    record2.set("options", "[\"A unique capability that competitors cannot easily replicate\", \"The lowest price in the market\", \"The largest company size\", \"The most marketing budget\"]");
    record2.set("correct_answer", "A unique capability that competitors cannot easily replicate");
    record2.set("explanation", "Competitive advantage is a unique capability that creates superior customer value, enables premium pricing or lower costs, and is difficult for competitors to copy.");
    record2.set("order", 3);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("quiz_id", "part_1_quiz_id");
    record3.set("question_text", "What is market segmentation?");
    record3.set("question_type", "multiple_choice");
    record3.set("options", "[\"Dividing the market into distinct customer groups with similar characteristics\", \"Pricing products differently\", \"Creating new products\", \"Expanding to new locations\"]");
    record3.set("correct_answer", "Dividing the market into distinct customer groups with similar characteristics");
    record3.set("explanation", "Market segmentation divides customers into distinct groups based on characteristics like industry, size, geography, or needs, enabling targeted strategies.");
    record3.set("order", 4);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("quiz_id", "part_1_quiz_id");
    record4.set("question_text", "What is competitive positioning?");
    record4.set("question_type", "multiple_choice");
    record4.set("options", "[\"How a company is perceived relative to competitors\", \"The physical location of the company\", \"The number of competitors\", \"The market share percentage\"]");
    record4.set("correct_answer", "How a company is perceived relative to competitors");
    record4.set("explanation", "Competitive positioning is how customers perceive your company relative to competitors, including your unique value proposition and target market segment.");
    record4.set("order", 5);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("quiz_id", "part_1_quiz_id");
    record5.set("question_text", "What is the primary benefit of cost leadership strategy?");
    record5.set("question_type", "multiple_choice");
    record5.set("options", "[\"Attract price-sensitive customers and achieve high volume\", \"Premium pricing\", \"Exclusive market position\", \"Reduced competition\"]");
    record5.set("correct_answer", "Attract price-sensitive customers and achieve high volume");
    record5.set("explanation", "Cost leadership strategy competes on lowest cost, attracts price-sensitive customers, and achieves profitability through high volume and economies of scale.");
    record5.set("order", 6);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("quiz_id", "part_1_quiz_id");
    record6.set("question_text", "What is differentiation strategy?");
    record6.set("question_type", "multiple_choice");
    record6.set("options", "[\"Compete on unique value with superior service or features\", \"Compete on lowest price\", \"Compete on company size\", \"Compete on market location\"]");
    record6.set("correct_answer", "Compete on unique value with superior service or features");
    record6.set("explanation", "Differentiation strategy competes on unique value, offers superior service or features, and enables premium pricing with higher profit margins.");
    record6.set("order", 7);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("quiz_id", "part_1_quiz_id");
    record7.set("question_text", "What is focus/niche strategy?");
    record7.set("question_type", "multiple_choice");
    record7.set("options", "[\"Specialize in a specific market segment with deep expertise\", \"Serve all market segments equally\", \"Focus on price reduction\", \"Focus on geographic expansion\"]");
    record7.set("correct_answer", "Specialize in a specific market segment with deep expertise");
    record7.set("explanation", "Focus/niche strategy specializes in a specific market segment, develops deep expertise, and creates tailored solutions for that niche.");
    record7.set("order", 8);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("quiz_id", "part_1_quiz_id");
    record8.set("question_text", "What is the primary purpose of market analysis?");
    record8.set("question_type", "multiple_choice");
    record8.set("options", "[\"Understand market size, growth, customers, competitors, and trends\", \"Set product prices\", \"Hire sales staff\", \"Create marketing materials\"]");
    record8.set("correct_answer", "Understand market size, growth, customers, competitors, and trends");
    record8.set("explanation", "Market analysis examines market size and growth, customer needs, competitive landscape, industry trends, and regulatory environment to inform strategy.");
    record8.set("order", 9);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("quiz_id", "part_1_quiz_id");
    record9.set("question_text", "What is the primary benefit of competitive positioning?");
    record9.set("question_type", "multiple_choice");
    record9.set("options", "[\"Differentiate from competitors and attract target customers\", \"Lower operational costs\", \"Increase employee count\", \"Expand to new countries\"]");
    record9.set("correct_answer", "Differentiate from competitors and attract target customers");
    record9.set("explanation", "Competitive positioning helps differentiate from competitors, attracts the right target customers, and creates a clear market identity.");
    record9.set("order", 10);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("quiz_id", "part_2_quiz_id");
    record10.set("question_text", "What is customer segmentation?");
    record10.set("question_type", "multiple_choice");
    record10.set("options", "[\"Dividing customers into distinct groups with similar characteristics and needs\", \"Pricing products differently\", \"Creating new products\", \"Expanding sales team\"]");
    record10.set("correct_answer", "Dividing customers into distinct groups with similar characteristics and needs");
    record10.set("explanation", "Customer segmentation divides customers into distinct groups based on industry, size, geography, behavior, or needs, enabling targeted strategies.");
    record10.set("order", 1);
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("quiz_id", "part_2_quiz_id");
    record11.set("question_text", "What is a customer persona?");
    record11.set("question_type", "multiple_choice");
    record11.set("options", "[\"A detailed profile of an ideal customer representing a segment\", \"A marketing slogan\", \"A product feature\", \"A pricing model\"]");
    record11.set("correct_answer", "A detailed profile of an ideal customer representing a segment");
    record11.set("explanation", "A customer persona is a detailed profile of an ideal customer that represents a segment, including demographics, needs, pain points, and success metrics.");
    record11.set("order", 2);
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("quiz_id", "part_2_quiz_id");
    record12.set("question_text", "What is targeting?");
    record12.set("question_type", "multiple_choice");
    record12.set("options", "[\"Selecting which customer segments to serve and allocating resources\", \"Creating new products\", \"Reducing prices\", \"Expanding locations\"]");
    record12.set("correct_answer", "Selecting which customer segments to serve and allocating resources");
    record12.set("explanation", "Targeting involves selecting which customer segments to serve, prioritizing based on attractiveness, and allocating resources to those segments.");
    record12.set("order", 3);
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("quiz_id", "part_2_quiz_id");
    record13.set("question_text", "What is the primary benefit of customer segmentation?");
    record13.set("question_type", "multiple_choice");
    record13.set("options", "[\"Enable targeted strategies tailored to each segment's needs\", \"Reduce product costs\", \"Increase company size\", \"Simplify operations\"]");
    record13.set("correct_answer", "Enable targeted strategies tailored to each segment's needs");
    record13.set("explanation", "Customer segmentation enables targeted strategies, customized offerings, and better resource allocation to serve each segment effectively.");
    record13.set("order", 4);
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("quiz_id", "part_2_quiz_id");
    record14.set("question_text", "What is lease product customization?");
    record14.set("question_type", "multiple_choice");
    record14.set("options", "[\"Tailoring lease products to customer needs by modifying terms\", \"Creating new products\", \"Reducing prices\", \"Expanding to new markets\"]");
    record14.set("correct_answer", "Tailoring lease products to customer needs by modifying terms");
    record14.set("explanation", "Lease product customization tailors lease products to customer needs by modifying terms, payment schedules, services, and features.");
    record14.set("order", 5);
  app.save(record14);

  const record15 = new Record(collection);
    record15.set("quiz_id", "part_2_quiz_id");
    record15.set("question_text", "What is the primary component of a lease product?");
    record15.set("question_type", "multiple_choice");
    record15.set("options", "[\"Equipment type, lease term, monthly payment, and maintenance/support\", \"Marketing strategy\", \"Sales team size\", \"Customer location\"]");
    record15.set("correct_answer", "Equipment type, lease term, monthly payment, and maintenance/support");
    record15.set("explanation", "Key lease product components include equipment type, lease term, monthly payment, maintenance and support, upgrade options, and residual value.");
    record15.set("order", 6);
  app.save(record15);

  const record16 = new Record(collection);
    record16.set("quiz_id", "part_2_quiz_id");
    record16.set("question_text", "What is value-based pricing?");
    record16.set("question_type", "multiple_choice");
    record16.set("options", "[\"Price based on the customer value and benefits provided\", \"Price based on cost plus markup\", \"Price based on competitor pricing\", \"Price based on production cost\"]");
    record16.set("correct_answer", "Price based on the customer value and benefits provided");
    record16.set("explanation", "Value-based pricing sets prices based on the value and benefits provided to customers, enabling premium pricing for high-value offerings.");
    record16.set("order", 7);
  app.save(record16);

  const record17 = new Record(collection);
    record17.set("quiz_id", "part_2_quiz_id");
    record17.set("question_text", "What is cost-plus pricing?");
    record17.set("question_type", "multiple_choice");
    record17.set("options", "[\"Calculate cost and add a markup percentage\", \"Price based on competitor pricing\", \"Price based on customer demand\", \"Price based on production volume\"]");
    record17.set("correct_answer", "Calculate cost and add a markup percentage");
    record17.set("explanation", "Cost-plus pricing calculates the cost of the product/service and adds a markup percentage to determine the selling price.");
    record17.set("order", 8);
  app.save(record17);

  const record18 = new Record(collection);
    record18.set("quiz_id", "part_2_quiz_id");
    record18.set("question_text", "What is the primary benefit of product customization?");
    record18.set("question_type", "multiple_choice");
    record18.set("options", "[\"Tailor solutions to customer needs and increase customer satisfaction\", \"Reduce operational costs\", \"Simplify product offerings\", \"Decrease customer support\"]");
    record18.set("correct_answer", "Tailor solutions to customer needs and increase customer satisfaction");
    record18.set("explanation", "Product customization tailors solutions to customer needs, increases customer satisfaction, and enables premium pricing.");
    record18.set("order", 9);
  app.save(record18);

  const record19 = new Record(collection);
    record19.set("quiz_id", "part_2_quiz_id");
    record19.set("question_text", "What is the primary purpose of pricing strategy?");
    record19.set("question_type", "multiple_choice");
    record19.set("options", "[\"Balance profitability with market competitiveness and customer value\", \"Reduce product costs\", \"Increase sales volume\", \"Simplify operations\"]");
    record19.set("correct_answer", "Balance profitability with market competitiveness and customer value");
    record19.set("explanation", "Pricing strategy balances profitability with market competitiveness and customer value perception to optimize revenue and market position.");
    record19.set("order", 10);
  app.save(record19);

  const record20 = new Record(collection);
    record20.set("quiz_id", "part_3_quiz_id");
    record20.set("question_text", "What is market penetration?");
    record20.set("question_type", "multiple_choice");
    record20.set("options", "[\"Increase market share in existing markets with existing products\", \"Enter new markets\", \"Create new products\", \"Reduce prices\"]");
    record20.set("correct_answer", "Increase market share in existing markets with existing products");
    record20.set("explanation", "Market penetration increases market share in existing markets by selling more of existing products through increased marketing, sales, or pricing strategies.");
    record20.set("order", 1);
  app.save(record20);

  const record21 = new Record(collection);
    record21.set("quiz_id", "part_3_quiz_id");
    record21.set("question_text", "What is product development?");
    record21.set("question_type", "multiple_choice");
    record21.set("options", "[\"Create new products for existing markets\", \"Enter new geographic markets\", \"Reduce product costs\", \"Increase sales team\"]");
    record21.set("correct_answer", "Create new products for existing markets");
    record21.set("explanation", "Product development creates new products or services for existing markets to meet new customer needs or expand revenue.");
    record21.set("order", 2);
  app.save(record21);

  const record22 = new Record(collection);
    record22.set("quiz_id", "part_3_quiz_id");
    record22.set("question_text", "What is market development?");
    record22.set("question_type", "multiple_choice");
    record22.set("options", "[\"Enter new geographic or customer markets with existing products\", \"Create new products\", \"Reduce prices\", \"Increase marketing budget\"]");
    record22.set("correct_answer", "Enter new geographic or customer markets with existing products");
    record22.set("explanation", "Market development enters new geographic regions or customer segments with existing products to expand market reach.");
    record22.set("order", 3);
  app.save(record22);

  const record23 = new Record(collection);
    record23.set("quiz_id", "part_3_quiz_id");
    record23.set("question_text", "What is diversification?");
    record23.set("question_type", "multiple_choice");
    record23.set("options", "[\"Enter new markets with new products\", \"Increase market share\", \"Reduce operational costs\", \"Expand sales team\"]");
    record23.set("correct_answer", "Enter new markets with new products");
    record23.set("explanation", "Diversification enters new markets with new products, providing growth opportunities but with higher risk than other strategies.");
    record23.set("order", 4);
  app.save(record23);

  const record24 = new Record(collection);
    record24.set("quiz_id", "part_3_quiz_id");
    record24.set("question_text", "What is operational excellence?");
    record24.set("question_type", "multiple_choice");
    record24.set("options", "[\"Achieve superior performance through efficient processes and continuous improvement\", \"Reduce employee count\", \"Increase prices\", \"Expand to new locations\"]");
    record24.set("correct_answer", "Achieve superior performance through efficient processes and continuous improvement");
    record24.set("explanation", "Operational excellence achieves superior performance through efficient processes, quality focus, continuous improvement, and customer satisfaction.");
    record24.set("order", 5);
  app.save(record24);

  const record25 = new Record(collection);
    record25.set("quiz_id", "part_3_quiz_id");
    record25.set("question_text", "What is strategic implementation?");
    record25.set("question_type", "multiple_choice");
    record25.set("options", "[\"Execute strategies through planning, resource allocation, and monitoring\", \"Create new strategies\", \"Analyze competitors\", \"Set pricing\"]");
    record25.set("correct_answer", "Execute strategies through planning, resource allocation, and monitoring");
    record25.set("explanation", "Strategic implementation executes strategies through detailed planning, resource allocation, execution, monitoring, and adjustment.");
    record25.set("order", 6);
  app.save(record25);

  const record26 = new Record(collection);
    record26.set("quiz_id", "part_3_quiz_id");
    record26.set("question_text", "What is change management?");
    record26.set("question_type", "multiple_choice");
    record26.set("options", "[\"Guide people through organizational changes to achieve desired outcomes\", \"Reduce employee count\", \"Increase prices\", \"Expand locations\"]");
    record26.set("correct_answer", "Guide people through organizational changes to achieve desired outcomes");
    record26.set("explanation", "Change management guides people through organizational changes by building awareness, gaining buy-in, and supporting adoption of new ways of working.");
    record26.set("order", 7);
  app.save(record26);

  const record27 = new Record(collection);
    record27.set("quiz_id", "part_3_quiz_id");
    record27.set("question_text", "What is the primary benefit of operational excellence?");
    record27.set("question_type", "multiple_choice");
    record27.set("options", "[\"Reduce costs, improve quality, and increase customer satisfaction\", \"Increase employee count\", \"Expand to new markets\", \"Reduce product features\"]");
    record27.set("correct_answer", "Reduce costs, improve quality, and increase customer satisfaction");
    record27.set("explanation", "Operational excellence reduces costs through efficiency, improves quality and reliability, and increases customer satisfaction and loyalty.");
    record27.set("order", 8);
  app.save(record27);

  const record28 = new Record(collection);
    record28.set("quiz_id", "part_3_quiz_id");
    record28.set("question_text", "What is the primary purpose of strategic implementation?");
    record28.set("question_type", "multiple_choice");
    record28.set("options", "[\"Execute strategies and achieve strategic objectives\", \"Create new strategies\", \"Analyze markets\", \"Set prices\"]");
    record28.set("correct_answer", "Execute strategies and achieve strategic objectives");
    record28.set("explanation", "Strategic implementation executes strategies through planning, resource allocation, execution, and monitoring to achieve strategic objectives.");
    record28.set("order", 9);
  app.save(record28);

  const record29 = new Record(collection);
    record29.set("quiz_id", "part_3_quiz_id");
    record29.set("question_text", "What is the primary benefit of growth strategy?");
    record29.set("question_type", "multiple_choice");
    record29.set("options", "[\"Increase revenue, expand market share, and achieve business objectives\", \"Reduce costs\", \"Simplify operations\", \"Reduce employee count\"]");
    record29.set("correct_answer", "Increase revenue, expand market share, and achieve business objectives");
    record29.set("explanation", "Growth strategy increases revenue, expands market share, achieves business objectives, and creates competitive advantage through market expansion.");
    record29.set("order", 10);
  app.save(record29);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})