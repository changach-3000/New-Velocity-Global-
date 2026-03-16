/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("learning_outcomes_assessment");

  const record0 = new Record(collection);
    record0.set("dashboard_id", "demo_student_001");
    record0.set("lesson_1_lease_accounting_mastery_percentage", 75);
    record0.set("lesson_1_rou_calculation_mastery_percentage", 70);
    record0.set("lesson_1_financial_statements_mastery_percentage", 72);
    record0.set("lesson_1_documentation_mastery_percentage", 68);
    record0.set("lesson_1_overall_mastery_percentage", 71);
    record0.set("lesson_2_lease_analysis_mastery_percentage", 78);
    record0.set("lesson_2_npv_irr_mastery_percentage", 75);
    record0.set("lesson_2_sensitivity_analysis_mastery_percentage", 72);
    record0.set("lesson_2_decision_making_mastery_percentage", 70);
    record0.set("lesson_2_overall_mastery_percentage", 74);
    record0.set("lesson_3_adjusted_statements_mastery_percentage", 0);
    record0.set("lesson_3_financial_ratios_mastery_percentage", 0);
    record0.set("lesson_3_lease_disclosures_mastery_percentage", 0);
    record0.set("lesson_3_communication_mastery_percentage", 0);
    record0.set("lesson_3_overall_mastery_percentage", 0);
    record0.set("lease_accounting_competency_percentage", 75);
    record0.set("financial_analysis_competency_percentage", 76);
    record0.set("financial_reporting_competency_percentage", 72);
    record0.set("tax_planning_competency_percentage", 0);
    record0.set("implementation_competency_percentage", 0);
    record0.set("overall_course_competency_percentage", 62);
  app.save(record0);
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})