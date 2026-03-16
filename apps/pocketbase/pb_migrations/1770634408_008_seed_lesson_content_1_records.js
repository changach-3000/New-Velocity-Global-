/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lesson_content");

  const record0 = new Record(collection);
    record0.set("lesson_id", "Lesson 4");
    record0.set("content_body", "## 9. Case Studies and Implementation\n\n### Multinational Examples\n- Company A: IFRS 16 in Europe, ASC 842 in US\n- Company B: Managing dual reporting systems\n- Company C: Covenant renegotiation process\n\n### Impact Analysis\n- Balance sheet impact of lease recognition\n- Income statement effects\n- Cash flow statement considerations\n\n### Reconciliation Examples\n- Converting IFRS 16 to ASC 842 equivalent\n- Adjusting for measurement differences\n- Presentation differences\n\n### Best Practices\n- Effective lease accounting processes\n- System implementation strategies\n- Disclosure best practices\n\n---\n\n## 10. Implementation Considerations\n\n### System Requirements\n- Lease accounting software capabilities\n- Integration with ERP systems\n- Data management and controls\n\n### Process Changes\n- Lease identification and documentation\n- Measurement and calculation processes\n- Review and approval workflows\n\n### Training and Timeline\n- Finance team training on new standards\n- Operational team awareness\n- Ongoing education and updates\n- Implementation planning and go-live");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})