/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("case_studies");

  const record0 = new Record(collection);
    record0.set("title", "Construction Company - Deferred Payment Lease Structure");
    record0.set("description", "BuildRight Construction case study demonstrating deferred commencement lease structure");
    record0.set("scenario", "BuildRight Construction LLC faced a critical cash flow problem with an 18-month commercial development project worth $4.5 million. They needed $650,000 in heavy equipment immediately but wouldn't generate significant revenue until month 4. Traditional financing required immediate payments, which would strain cash flow during months 1-3 when revenue was minimal.");
    record0.set("requirements", "Equipment needed immediately but revenue delayed 3 months; Monthly cash flow would be negative during months 1-3; Bank financing required immediate payment obligations; Risk of project delays if equipment unavailable; Company couldn't afford to purchase equipment outright; Existing credit lines already committed to other projects");
    record0.set("analysis_framework", "Deferred Commencement Lease Structure: Equipment $650,000; Lease Term 18 months matching project duration; Commencement Date Month 4 (when active construction begins); Delivery Date Month 1 (equipment available immediately); Payment Structure - Months 1-3: $0 payments; Months 4-15: $38,500/month; Months 16-18: $22,000/month; Total Lease Cost: $615,500; Buyout Option: $1 residual; Accounting Treatment: Operating lease (off-balance sheet)");
    record0.set("expected_outcome", "Cash flow alignment with revenue generation; Preserved $114,500 during months 1-3; Equipment available on day 1; No payment obligations during low-revenue months; Flexibility to reduce equipment in final phase; Project completed on schedule and budget; Improved cash flow by 23%; Project margin improved from 12% to 15.5%; Established long-term leasing relationship");
    record0.set("difficulty_level", "Intermediate");
    record0.set("course_module", "Lesson 3: Structuring the Deal - Creating Lease Models");
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})