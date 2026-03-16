/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("vendor_leasing_study_guides");

  const record0 = new Record(collection);
    record0.set("lessonId", "lesson_1");
    record0.set("title", "Lesson 1: Introduction to Vendor Leasing - Study Guide");
    record0.set("problemCount", 8);
    record0.set("problems", "1. Define vendor leasing and explain how it differs from traditional equipment financing.\n2. Compare direct vendor leasing with captive finance programs.\n3. Distinguish between vendor leasing and traditional bank financing.\n4. Identify the key players in the vendor leasing market.\n5. Describe current market trends in vendor leasing.\n6. Explain how vendor leasing applies to manufacturing equipment.\n7. Compare the advantages and disadvantages of vendor vs bank financing.\n8. Provide real-world examples of vendor leasing in different industries.");
    record0.set("solutions", "1. Vendor leasing is equipment financing provided directly by the manufacturer or through their captive finance subsidiary, allowing customers to lease equipment rather than purchase it outright.\n2. Direct vendor leasing involves the manufacturer directly; captive finance uses a subsidiary company.\n3. Vendor leasing offers manufacturer-specific terms and promotional rates; bank financing is more standardized.\n4. Key players include equipment manufacturers, captive finance companies, third-party lessors, and brokers.\n5. Market trends include increased adoption of captive finance, flexible lease structures, and integration with digital platforms.\n6. Manufacturing companies use vendor leasing for heavy equipment, production machinery, and specialized tools.\n7. Vendor financing offers promotional rates and manufacturer support; bank financing offers more flexibility and independence.\n8. Examples include automotive equipment leasing, construction machinery programs, and technology equipment financing.");
    record0.set("difficulty", "beginner");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("lessonId", "lesson_2");
    record1.set("title", "Lesson 2: Vendor Financing Programs and Structures - Study Guide");
    record1.set("problemCount", 8);
    record1.set("problems", "1. Explain the structure of a captive finance company.\n2. Compare standard vendor programs with customized financing solutions.\n3. Distinguish between operating leases and finance leases.\n4. Describe promotional financing strategies used by vendors.\n5. Analyze the impact of lease terms on total cost of ownership.\n6. Compare different vendor programs from competing manufacturers.\n7. Identify key features and benefits of vendor financing programs.\n8. Provide real-world examples of vendor program comparisons.");
    record1.set("solutions", "1. Captive finance companies are subsidiaries of equipment manufacturers that provide financing directly to customers.\n2. Standard programs offer fixed terms and rates; customized solutions provide flexibility for specific customer needs.\n3. Operating leases are short-term with maintenance included; finance leases are longer-term with ownership transfer options.\n4. Promotional financing includes 0% APR offers, deferred payment options, and seasonal incentives.\n5. Lease terms affect monthly payments, total interest, residual value, and flexibility options.\n6. Comparison involves analyzing rates, terms, flexibility, maintenance options, and buyout provisions.\n7. Key features include competitive rates, flexible terms, manufacturer support, and integrated services.\n8. Examples include comparing Ford Credit vs GM Financial for vehicle leasing, or Caterpillar Financial vs John Deere Capital for equipment.");
    record1.set("difficulty", "intermediate");
  app.save(record1);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})