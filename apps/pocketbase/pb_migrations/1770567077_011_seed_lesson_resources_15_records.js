/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lesson_resources");

  const record0 = new Record(collection);
    record0.set("lesson_id", "{{lesson_id_1}}");
    record0.set("resource_name", "Lease Accounting Standards Guide");
    record0.set("resource_type", "guide");
    record0.set("description", "Comprehensive guide to IFRS 16 and ASC 842 standards");
  app.save(record0);

  const record1 = new Record(collection);
    record1.set("lesson_id", "{{lesson_id_1}}");
    record1.set("resource_name", "Lease Classification Checklist");
    record1.set("resource_type", "worksheet");
    record1.set("description", "Step-by-step checklist for lease classification");
  app.save(record1);

  const record2 = new Record(collection);
    record2.set("lesson_id", "{{lesson_id_1}}");
    record2.set("resource_name", "Lease Calculation Template");
    record2.set("resource_type", "template");
    record2.set("description", "Excel template for lease calculations");
  app.save(record2);

  const record3 = new Record(collection);
    record3.set("lesson_id", "{{lesson_id_2}}");
    record3.set("resource_name", "Lease Valuation Models");
    record3.set("resource_type", "template");
    record3.set("description", "Advanced Excel models for lease valuation");
  app.save(record3);

  const record4 = new Record(collection);
    record4.set("lesson_id", "{{lesson_id_2}}");
    record4.set("resource_name", "Financial Analysis Guide");
    record4.set("resource_type", "guide");
    record4.set("description", "Detailed guide to lease financial analysis");
  app.save(record4);

  const record5 = new Record(collection);
    record5.set("lesson_id", "{{lesson_id_2}}");
    record5.set("resource_name", "Sensitivity Analysis Tool");
    record5.set("resource_type", "template");
    record5.set("description", "Tool for performing sensitivity analysis on lease terms");
  app.save(record5);

  const record6 = new Record(collection);
    record6.set("lesson_id", "{{lesson_id_3}}");
    record6.set("resource_name", "Negotiation Strategy Guide");
    record6.set("resource_type", "guide");
    record6.set("description", "Comprehensive negotiation strategies and tactics");
  app.save(record6);

  const record7 = new Record(collection);
    record7.set("lesson_id", "{{lesson_id_3}}");
    record7.set("resource_name", "Lease Term Checklist");
    record7.set("resource_type", "worksheet");
    record7.set("description", "Detailed checklist of lease terms to negotiate");
  app.save(record7);

  const record8 = new Record(collection);
    record8.set("lesson_id", "{{lesson_id_3}}");
    record8.set("resource_name", "Deal Structure Templates");
    record8.set("resource_type", "template");
    record8.set("description", "Templates for various lease deal structures");
  app.save(record8);

  const record9 = new Record(collection);
    record9.set("lesson_id", "{{lesson_id_4}}");
    record9.set("resource_name", "ASC 842 Implementation Guide");
    record9.set("resource_type", "guide");
    record9.set("description", "Detailed guide to ASC 842 implementation");
  app.save(record9);

  const record10 = new Record(collection);
    record10.set("lesson_id", "{{lesson_id_4}}");
    record10.set("resource_name", "Tax Planning Worksheet");
    record10.set("resource_type", "worksheet");
    record10.set("description", "Worksheet for tax planning analysis");
  app.save(record10);

  const record11 = new Record(collection);
    record11.set("lesson_id", "{{lesson_id_4}}");
    record11.set("resource_name", "Accounting Treatment Reference");
    record11.set("resource_type", "reference");
    record11.set("description", "Quick reference for lease accounting treatment");
  app.save(record11);

  const record12 = new Record(collection);
    record12.set("lesson_id", "{{lesson_id_5}}");
    record12.set("resource_name", "Risk Management Framework");
    record12.set("resource_type", "guide");
    record12.set("description", "Comprehensive risk management framework for leases");
  app.save(record12);

  const record13 = new Record(collection);
    record13.set("lesson_id", "{{lesson_id_5}}");
    record13.set("resource_name", "Risk Assessment Tool");
    record13.set("resource_type", "worksheet");
    record13.set("description", "Tool for assessing lease risks");
  app.save(record13);

  const record14 = new Record(collection);
    record14.set("lesson_id", "{{lesson_id_5}}");
    record14.set("resource_name", "Dispute Resolution Guide");
    record14.set("resource_type", "guide");
    record14.set("description", "Guide to lease dispute resolution processes");
  app.save(record14);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})