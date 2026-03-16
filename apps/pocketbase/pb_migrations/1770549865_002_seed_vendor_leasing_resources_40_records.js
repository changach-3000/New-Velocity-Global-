/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("vendor_leasing_resources");

  const record0 = new Record(collection);
    record0.set("lessonId", "lesson_1");
    record0.set("title", "Lease Accounting Fundamentals Study Guide.pdf");
    record0.set("description", "Comprehensive study guide covering lease accounting fundamentals and ASC 842 standards");
    record0.set("resourceType", "study_guide");
    record0.set("fileName", "Lease Accounting Fundamentals Study Guide.pdf");
    record0.set("fileUrl", "/files/vendor_leasing/1/study_guide/Lease Accounting Fundamentals Study Guide.pdf");
    record0.set("fileSize", 1250000);
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("lessonId", "lesson_1");
    record1.set("title", "Lease Classification Checklist.pdf");
    record1.set("description", "Checklist for determining lease classification under ASC 842");
    record1.set("resourceType", "checklist");
    record1.set("fileName", "Lease Classification Checklist.pdf");
    record1.set("fileUrl", "/files/vendor_leasing/1/checklist/Lease Classification Checklist.pdf");
    record1.set("fileSize", 650000);
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("lessonId", "lesson_1");
    record2.set("title", "Lease Agreement Template.pdf");
    record2.set("description", "Template for lease agreement documentation and analysis");
    record2.set("resourceType", "template");
    record2.set("fileName", "Lease Agreement Template.pdf");
    record2.set("fileUrl", "/files/vendor_leasing/1/template/Lease Agreement Template.pdf");
    record2.set("fileSize", 850000);
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("lessonId", "lesson_1");
    record3.set("title", "ROU Asset Calculation Worksheet.pdf");
    record3.set("description", "Worksheet for calculating right-of-use assets and lease liabilities");
    record3.set("resourceType", "worksheet");
    record3.set("fileName", "ROU Asset Calculation Worksheet.pdf");
    record3.set("fileUrl", "/files/vendor_leasing/1/worksheet/ROU Asset Calculation Worksheet.pdf");
    record3.set("fileSize", 950000);
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("lessonId", "lesson_1");
    record4.set("title", "ASC 842 Reference Guide.pdf");
    record4.set("description", "Complete reference guide for ASC 842 lease accounting standards");
    record4.set("resourceType", "reference");
    record4.set("fileName", "ASC 842 Reference Guide.pdf");
    record4.set("fileUrl", "/files/vendor_leasing/1/reference/ASC 842 Reference Guide.pdf");
    record4.set("fileSize", 1850000);
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("lessonId", "lesson_2");
    record5.set("title", "Lease Analysis & Valuation Study Guide.pdf");
    record5.set("description", "Study guide for lease analysis and valuation methodologies");
    record5.set("resourceType", "study_guide");
    record5.set("fileName", "Lease Analysis & Valuation Study Guide.pdf");
    record5.set("fileUrl", "/files/vendor_leasing/2/study_guide/Lease Analysis & Valuation Study Guide.pdf");
    record5.set("fileSize", 1350000);
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("lessonId", "lesson_2");
    record6.set("title", "NPV Analysis Checklist.pdf");
    record6.set("description", "Checklist for net present value analysis in lease valuation");
    record6.set("resourceType", "checklist");
    record6.set("fileName", "NPV Analysis Checklist.pdf");
    record6.set("fileUrl", "/files/vendor_leasing/2/checklist/NPV Analysis Checklist.pdf");
    record6.set("fileSize", 700000);
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("lessonId", "lesson_2");
    record7.set("title", "Valuation Model Template.pdf");
    record7.set("description", "Template for lease valuation models and analysis");
    record7.set("resourceType", "template");
    record7.set("fileName", "Valuation Model Template.pdf");
    record7.set("fileUrl", "/files/vendor_leasing/2/template/Valuation Model Template.pdf");
    record7.set("fileSize", 920000);
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("lessonId", "lesson_2");
    record8.set("title", "Discount Rate Worksheet.pdf");
    record8.set("description", "Worksheet for calculating appropriate discount rates");
    record8.set("resourceType", "worksheet");
    record8.set("fileName", "Discount Rate Worksheet.pdf");
    record8.set("fileUrl", "/files/vendor_leasing/2/worksheet/Discount Rate Worksheet.pdf");
    record8.set("fileSize", 780000);
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("lessonId", "lesson_2");
    record9.set("title", "Valuation Methods Reference.pdf");
    record9.set("description", "Reference guide for various lease valuation methods");
    record9.set("resourceType", "reference");
    record9.set("fileName", "Valuation Methods Reference.pdf");
    record9.set("fileUrl", "/files/vendor_leasing/2/reference/Valuation Methods Reference.pdf");
    record9.set("fileSize", 1950000);
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("lessonId", "lesson_3");
    record10.set("title", "Financial Reporting Study Guide.pdf");
    record10.set("description", "Study guide for lease-related financial reporting requirements");
    record10.set("resourceType", "study_guide");
    record10.set("fileName", "Financial Reporting Study Guide.pdf");
    record10.set("fileUrl", "/files/vendor_leasing/3/study_guide/Financial Reporting Study Guide.pdf");
    record10.set("fileSize", 1400000);
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("lessonId", "lesson_3");
    record11.set("title", "Disclosure Checklist.pdf");
    record11.set("description", "Checklist for lease-related financial statement disclosures");
    record11.set("resourceType", "checklist");
    record11.set("fileName", "Disclosure Checklist.pdf");
    record11.set("fileUrl", "/files/vendor_leasing/3/checklist/Disclosure Checklist.pdf");
    record11.set("fileSize", 720000);
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("lessonId", "lesson_3");
    record12.set("title", "Financial Statement Template.pdf");
    record12.set("description", "Template for lease-related financial statement presentation");
    record12.set("resourceType", "template");
    record12.set("fileName", "Financial Statement Template.pdf");
    record12.set("fileUrl", "/files/vendor_leasing/3/template/Financial Statement Template.pdf");
    record12.set("fileSize", 1100000);
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("lessonId", "lesson_3");
    record13.set("title", "Ratio Analysis Worksheet.pdf");
    record13.set("description", "Worksheet for analyzing financial ratios affected by lease accounting");
    record13.set("resourceType", "worksheet");
    record13.set("fileName", "Ratio Analysis Worksheet.pdf");
    record13.set("fileUrl", "/files/vendor_leasing/3/worksheet/Ratio Analysis Worksheet.pdf");
    record13.set("fileSize", 890000);
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("lessonId", "lesson_3");
    record14.set("title", "GAAP Requirements Reference.pdf");
    record14.set("description", "Reference guide for GAAP requirements in lease accounting");
    record14.set("resourceType", "reference");
    record14.set("fileName", "GAAP Requirements Reference.pdf");
    record14.set("fileUrl", "/files/vendor_leasing/3/reference/GAAP Requirements Reference.pdf");
    record14.set("fileSize", 2000000);
  app.save(record14);

  const record15 = new Record(collection);
    record15.set("lessonId", "lesson_4");
    record15.set("title", "Tax Planning Study Guide.pdf");
    record15.set("description", "Study guide for tax planning considerations in lease transactions");
    record15.set("resourceType", "study_guide");
    record15.set("fileName", "Tax Planning Study Guide.pdf");
    record15.set("fileUrl", "/files/vendor_leasing/4/study_guide/Tax Planning Study Guide.pdf");
    record15.set("fileSize", 1300000);
  app.save(record15);

  const record16 = new Record(collection);
    record16.set("lessonId", "lesson_4");
    record16.set("title", "Tax Compliance Checklist.pdf");
    record16.set("description", "Checklist for tax compliance in lease accounting");
    record16.set("resourceType", "checklist");
    record16.set("fileName", "Tax Compliance Checklist.pdf");
    record16.set("fileUrl", "/files/vendor_leasing/4/checklist/Tax Compliance Checklist.pdf");
    record16.set("fileSize", 680000);
  app.save(record16);

  const record17 = new Record(collection);
    record17.set("lessonId", "lesson_4");
    record17.set("title", "Tax Strategy Template.pdf");
    record17.set("description", "Template for developing tax strategies for lease transactions");
    record17.set("resourceType", "template");
    record17.set("fileName", "Tax Strategy Template.pdf");
    record17.set("fileUrl", "/files/vendor_leasing/4/template/Tax Strategy Template.pdf");
    record17.set("fileSize", 870000);
  app.save(record17);

  const record18 = new Record(collection);
    record18.set("lessonId", "lesson_4");
    record18.set("title", "Tax Calculation Worksheet.pdf");
    record18.set("description", "Worksheet for calculating tax implications of lease transactions");
    record18.set("resourceType", "worksheet");
    record18.set("fileName", "Tax Calculation Worksheet.pdf");
    record18.set("fileUrl", "/files/vendor_leasing/4/worksheet/Tax Calculation Worksheet.pdf");
    record18.set("fileSize", 920000);
  app.save(record18);

  const record19 = new Record(collection);
    record19.set("lessonId", "lesson_4");
    record19.set("title", "Tax Code Reference.pdf");
    record19.set("description", "Reference guide for relevant tax codes and regulations");
    record19.set("resourceType", "reference");
    record19.set("fileName", "Tax Code Reference.pdf");
    record19.set("fileUrl", "/files/vendor_leasing/4/reference/Tax Code Reference.pdf");
    record19.set("fileSize", 1900000);
  app.save(record19);

  const record20 = new Record(collection);
    record20.set("lessonId", "lesson_5");
    record20.set("title", "Implementation Study Guide.pdf");
    record20.set("description", "Study guide for implementing lease accounting systems and processes");
    record20.set("resourceType", "study_guide");
    record20.set("fileName", "Implementation Study Guide.pdf");
    record20.set("fileUrl", "/files/vendor_leasing/5/study_guide/Implementation Study Guide.pdf");
    record20.set("fileSize", 1450000);
  app.save(record20);

  const record21 = new Record(collection);
    record21.set("lessonId", "lesson_5");
    record21.set("title", "System Setup Checklist.pdf");
    record21.set("description", "Checklist for setting up lease accounting systems");
    record21.set("resourceType", "checklist");
    record21.set("fileName", "System Setup Checklist.pdf");
    record21.set("fileUrl", "/files/vendor_leasing/5/checklist/System Setup Checklist.pdf");
    record21.set("fileSize", 740000);
  app.save(record21);

  const record22 = new Record(collection);
    record22.set("lessonId", "lesson_5");
    record22.set("title", "Implementation Plan Template.pdf");
    record22.set("description", "Template for creating a lease accounting implementation plan");
    record22.set("resourceType", "template");
    record22.set("fileName", "Implementation Plan Template.pdf");
    record22.set("fileUrl", "/files/vendor_leasing/5/template/Implementation Plan Template.pdf");
    record22.set("fileSize", 980000);
  app.save(record22);

  const record23 = new Record(collection);
    record23.set("lessonId", "lesson_5");
    record23.set("title", "Control Testing Worksheet.pdf");
    record23.set("description", "Worksheet for testing internal controls over lease accounting");
    record23.set("resourceType", "worksheet");
    record23.set("fileName", "Control Testing Worksheet.pdf");
    record23.set("fileUrl", "/files/vendor_leasing/5/worksheet/Control Testing Worksheet.pdf");
    record23.set("fileSize", 850000);
  app.save(record23);

  const record24 = new Record(collection);
    record24.set("lessonId", "lesson_5");
    record24.set("title", "Best Practices Reference.pdf");
    record24.set("description", "Reference guide for lease accounting best practices");
    record24.set("resourceType", "reference");
    record24.set("fileName", "Best Practices Reference.pdf");
    record24.set("fileUrl", "/files/vendor_leasing/5/reference/Best Practices Reference.pdf");
    record24.set("fileSize", 1800000);
  app.save(record24);

  const record25 = new Record(collection);
    record25.set("lessonId", "lesson_6");
    record25.set("title", "Advanced Topics Study Guide.pdf");
    record25.set("description", "Study guide for advanced lease accounting topics");
    record25.set("resourceType", "study_guide");
    record25.set("fileName", "Advanced Topics Study Guide.pdf");
    record25.set("fileUrl", "/files/vendor_leasing/6/study_guide/Advanced Topics Study Guide.pdf");
    record25.set("fileSize", 1500000);
  app.save(record25);

  const record26 = new Record(collection);
    record26.set("lessonId", "lesson_6");
    record26.set("title", "Modification Checklist.pdf");
    record26.set("description", "Checklist for handling lease modifications");
    record26.set("resourceType", "checklist");
    record26.set("fileName", "Modification Checklist.pdf");
    record26.set("fileUrl", "/files/vendor_leasing/6/checklist/Modification Checklist.pdf");
    record26.set("fileSize", 710000);
  app.save(record26);

  const record27 = new Record(collection);
    record27.set("lessonId", "lesson_6");
    record27.set("title", "Modification Template.pdf");
    record27.set("description", "Template for documenting lease modifications");
    record27.set("resourceType", "template");
    record27.set("fileName", "Modification Template.pdf");
    record27.set("fileUrl", "/files/vendor_leasing/6/template/Modification Template.pdf");
    record27.set("fileSize", 900000);
  app.save(record27);

  const record28 = new Record(collection);
    record28.set("lessonId", "lesson_6");
    record28.set("title", "Scenario Analysis Worksheet.pdf");
    record28.set("description", "Worksheet for analyzing various lease scenarios");
    record28.set("resourceType", "worksheet");
    record28.set("fileName", "Scenario Analysis Worksheet.pdf");
    record28.set("fileUrl", "/files/vendor_leasing/6/worksheet/Scenario Analysis Worksheet.pdf");
    record28.set("fileSize", 1050000);
  app.save(record28);

  const record29 = new Record(collection);
    record29.set("lessonId", "lesson_6");
    record29.set("title", "Advanced Guidance Reference.pdf");
    record29.set("description", "Reference guide for advanced lease accounting guidance");
    record29.set("resourceType", "reference");
    record29.set("fileName", "Advanced Guidance Reference.pdf");
    record29.set("fileUrl", "/files/vendor_leasing/6/reference/Advanced Guidance Reference.pdf");
    record29.set("fileSize", 1950000);
  app.save(record29);

  const record30 = new Record(collection);
    record30.set("lessonId", "lesson_7");
    record30.set("title", "Case Study Analysis Guide.pdf");
    record30.set("description", "Study guide for analyzing lease case studies");
    record30.set("resourceType", "study_guide");
    record30.set("fileName", "Case Study Analysis Guide.pdf");
    record30.set("fileUrl", "/files/vendor_leasing/7/study_guide/Case Study Analysis Guide.pdf");
    record30.set("fileSize", 1350000);
  app.save(record30);

  const record31 = new Record(collection);
    record31.set("lessonId", "lesson_7");
    record31.set("title", "Case Study Checklist.pdf");
    record31.set("description", "Checklist for case study analysis and evaluation");
    record31.set("resourceType", "checklist");
    record31.set("fileName", "Case Study Checklist.pdf");
    record31.set("fileUrl", "/files/vendor_leasing/7/checklist/Case Study Checklist.pdf");
    record31.set("fileSize", 690000);
  app.save(record31);

  const record32 = new Record(collection);
    record32.set("lessonId", "lesson_7");
    record32.set("title", "Analysis Template.pdf");
    record32.set("description", "Template for case study analysis documentation");
    record32.set("resourceType", "template");
    record32.set("fileName", "Analysis Template.pdf");
    record32.set("fileUrl", "/files/vendor_leasing/7/template/Analysis Template.pdf");
    record32.set("fileSize", 840000);
  app.save(record32);

  const record33 = new Record(collection);
    record33.set("lessonId", "lesson_7");
    record33.set("title", "Calculation Worksheet.pdf");
    record33.set("description", "Worksheet for case study calculations and computations");
    record33.set("resourceType", "worksheet");
    record33.set("fileName", "Calculation Worksheet.pdf");
    record33.set("fileUrl", "/files/vendor_leasing/7/worksheet/Calculation Worksheet.pdf");
    record33.set("fileSize", 920000);
  app.save(record33);

  const record34 = new Record(collection);
    record34.set("lessonId", "lesson_7");
    record34.set("title", "Case Study Reference.pdf");
    record34.set("description", "Reference guide for case study materials and resources");
    record34.set("resourceType", "reference");
    record34.set("fileName", "Case Study Reference.pdf");
    record34.set("fileUrl", "/files/vendor_leasing/7/reference/Case Study Reference.pdf");
    record34.set("fileSize", 1750000);
  app.save(record34);

  const record35 = new Record(collection);
    record35.set("lessonId", "lesson_8");
    record35.set("title", "Capstone Review Guide.pdf");
    record35.set("description", "Study guide for capstone project review and preparation");
    record35.set("resourceType", "study_guide");
    record35.set("fileName", "Capstone Review Guide.pdf");
    record35.set("fileUrl", "/files/vendor_leasing/8/study_guide/Capstone Review Guide.pdf");
    record35.set("fileSize", 1600000);
  app.save(record35);

  const record36 = new Record(collection);
    record36.set("lessonId", "lesson_8");
    record36.set("title", "Final Review Checklist.pdf");
    record36.set("description", "Checklist for final review before capstone submission");
    record36.set("resourceType", "checklist");
    record36.set("fileName", "Final Review Checklist.pdf");
    record36.set("fileUrl", "/files/vendor_leasing/8/checklist/Final Review Checklist.pdf");
    record36.set("fileSize", 750000);
  app.save(record36);

  const record37 = new Record(collection);
    record37.set("lessonId", "lesson_8");
    record37.set("title", "Capstone Template.pdf");
    record37.set("description", "Template for capstone project documentation");
    record37.set("resourceType", "template");
    record37.set("fileName", "Capstone Template.pdf");
    record37.set("fileUrl", "/files/vendor_leasing/8/template/Capstone Template.pdf");
    record37.set("fileSize", 1100000);
  app.save(record37);

  const record38 = new Record(collection);
    record38.set("lessonId", "lesson_8");
    record38.set("title", "Comprehensive Worksheet.pdf");
    record38.set("description", "Comprehensive worksheet for capstone calculations");
    record38.set("resourceType", "worksheet");
    record38.set("fileName", "Comprehensive Worksheet.pdf");
    record38.set("fileUrl", "/files/vendor_leasing/8/worksheet/Comprehensive Worksheet.pdf");
    record38.set("fileSize", 1200000);
  app.save(record38);

  const record39 = new Record(collection);
    record39.set("lessonId", "lesson_8");
    record39.set("title", "Complete Reference Guide.pdf");
    record39.set("description", "Complete reference guide for all course materials");
    record39.set("resourceType", "reference");
    record39.set("fileName", "Complete Reference Guide.pdf");
    record39.set("fileUrl", "/files/vendor_leasing/8/reference/Complete Reference Guide.pdf");
    record39.set("fileSize", 2000000);
  app.save(record39);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})