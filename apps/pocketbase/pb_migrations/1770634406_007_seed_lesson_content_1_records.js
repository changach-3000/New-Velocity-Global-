/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("lesson_content");

  const record0 = new Record(collection);
    record0.set("lesson_id", "Lesson 4");
    record0.set("content_body", "## 7. Convergence Efforts\n\n### IASB/FASB History\n- Joint project to converge lease accounting standards\n- IFRS 16 issued in January 2016\n- ASC 842 issued in February 2016\n- Significant differences remain despite convergence efforts\n\n### Current Status\n- Both standards effective (IFRS 16: Jan 1, 2019; ASC 842: Jan 1, 2022)\n- Limited convergence achieved\n- Ongoing discussions about future alignment\n\n### Future Changes\n- Potential amendments to both standards\n- IASB/FASB considering targeted improvements\n- Possible convergence in future years\n\n### Multinational Impact\n- Companies with operations in multiple jurisdictions face dual reporting\n- Significant compliance costs\n- Need for robust systems and processes\n\n---\n\n## 8. Practical Implications\n\n### Financial Ratios\n- Debt-to-equity ratios affected by lease liability recognition\n- Asset turnover ratios impacted by ROU asset\n- Interest coverage ratios differ between standards\n\n### Debt Covenants\n- Lease liabilities may trigger covenant violations\n- Different calculations under IFRS 16 vs ASC 842\n- Need to renegotiate covenants");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})