/// <reference path="../pb_data/types.d.ts" />
// Lesson Audit Implementation Guide
// Provides comprehensive instructions for auditing and fixing lesson relationships

onRecordCreateRequest((e) => {
  // Validate lesson_id on creation
  const lessonId = e.record.get("lesson_id");
  
  if (!lessonId || lessonId.trim() === "") {
    throw new BadRequestError(
      "lesson_id is required. Must reference a valid lesson ID from the lessons collection."
    );
  }
  
  const placeholderPattern = /\{\{LESSON_\d+_ID\}\}/;
  if (placeholderPattern.test(lessonId)) {
    throw new BadRequestError(
      "Placeholder lesson_id values are not allowed: " + lessonId + 
      ". Use actual lesson IDs from the lessons collection. " +
      "Query GET /api/collections/lessons/records to get valid lesson IDs."
    );
  }
  
  e.next();
}, "lesson_content");

onRecordUpdateRequest((e) => {
  // Validate lesson_id on update
  const lessonId = e.record.get("lesson_id");
  
  if (lessonId !== null && lessonId !== undefined) {
    if (lessonId.trim() === "") {
      throw new BadRequestError(
        "lesson_id cannot be empty. Must reference a valid lesson ID from the lessons collection."
      );
    }
    
    const placeholderPattern = /\{\{LESSON_\d+_ID\}\}/;
    if (placeholderPattern.test(lessonId)) {
      throw new BadRequestError(
        "Placeholder lesson_id values are not allowed: " + lessonId + 
        ". Use actual lesson IDs from the lessons collection. " +
        "Query GET /api/collections/lessons/records to get valid lesson IDs."
      );
    }
  }
  
  e.next();
}, "lesson_content");

// Provide audit context
onRecordsListRequest((e) => {
  const auditGuide = {
    title: "Lesson Content Audit & Fix Implementation Guide",
    version: "1.0",
    last_updated: new Date().toISOString(),
    
    overview: {
      objective: "Audit lesson_content collection and replace placeholder lesson_id values with actual lesson IDs",
      scope: "lesson_content, lessons, and courses collections",
      impact: "Ensures data integrity and proper relationships between lesson content and lessons"
    },
    
    audit_checklist: {
      step_1: {
        title: "Audit lessons collection",
        description: "List all lesson records to create a mapping of lesson IDs",
        api_call: "GET /api/collections/lessons/records?perPage=500",
        expected_fields: ["id", "course_id", "title", "order"],
        output: "Mapping of lesson order/title to actual lesson IDs"
      },
      
      step_2: {
        title: "Audit courses collection",
        description: "Verify all course records exist and have valid IDs",
        api_call: "GET /api/collections/courses/records?perPage=500",
        expected_fields: ["id", "title"],
        validation: "Ensure all course_id values in lessons collection reference valid courses"
      },
      
      step_3: {
        title: "Audit lesson_content collection",
        description: "Identify all records with placeholder or invalid lesson_id values",
        api_call: "GET /api/collections/lesson_content/records?perPage=500",
        expected_fields: ["id", "lesson_id", "content_body", "video_url"],
        issues_to_find: [
          "Placeholder values: {{LESSON_1_ID}}, {{LESSON_2_ID}}, etc.",
          "Empty lesson_id fields",
          "lesson_id values that don't exist in lessons collection"
        ]
      },
      
      step_4: {
        title: "Create lesson ID mapping",
        description: "Map placeholder values to actual lesson IDs",
        example_mapping: {
          "{{LESSON_1_ID}}": "actual_lesson_id_1",
          "{{LESSON_2_ID}}": "actual_lesson_id_2",
          "{{LESSON_3_ID}}": "actual_lesson_id_3",
          "{{LESSON_4_ID}}": "actual_lesson_id_4",
          "{{LESSON_5_ID}}": "actual_lesson_id_5"
        },
        matching_strategy: "Match by lesson order number or title"
      },
      
      step_5: {
        title: "Update lesson_content records",
        description: "Replace all placeholder values with actual lesson IDs",
        api_call: "PATCH /api/collections/lesson_content/records/{id}",
        payload_example: {
          lesson_id: "actual_lesson_id_from_mapping"
        },
        batch_update: "Update all records with placeholder values in a single operation"
      },
      
      step_6: {
        title: "Verify relationships",
        description: "Confirm all lesson_id values are valid",
        api_call: "GET /api/collections/lesson_content/records?perPage=500",
        validation_checks: [
          "No placeholder values remain",
          "All lesson_id fields are populated",
          "All lesson_id values exist in lessons collection",
          "No orphaned lesson_content records"
        ]
      }
    },
    
    validation_rules: {
      rule_1: "lesson_id field must not be empty",
      rule_2: "lesson_id must reference an actual lesson ID from lessons collection",
      rule_3: "No placeholder values ({{LESSON_*_ID}}) allowed",
      rule_4: "lesson_id must match lesson.id, not lesson.order",
      rule_5: "Every lesson_content record must have exactly one lesson_id"
    },
    
    common_issues_and_fixes: {
      issue_1: {
        problem: "lesson_content has placeholder value {{LESSON_1_ID}}",
        cause: "Data was created with template placeholders",
        fix: "Replace with actual lesson ID from lessons collection where order=1"
      },
      
      issue_2: {
        problem: "lesson_content.lesson_id is empty",
        cause: "lesson_id was not populated during record creation",
        fix: "Query lessons collection to find correct lesson ID and update record"
      },
      
      issue_3: {
        problem: "lesson_content.lesson_id references non-existent lesson",
        cause: "Lesson was deleted or ID was entered incorrectly",
        fix: "Verify lesson exists in lessons collection, correct ID or delete orphaned record"
      },
      
      issue_4: {
        problem: "Multiple lesson_content records reference same lesson_id",
        cause: "Lesson has multiple content sections",
        fix: "This is valid - one lesson can have multiple content records"
      }
    },
    
    success_criteria: {
      criteria_1: "All lesson_content records have non-empty lesson_id",
      criteria_2: "All lesson_id values exist in lessons collection",
      criteria_3: "No placeholder values remain in any record",
      criteria_4: "Audit report shows 0 issues",
      criteria_5: "All relationships are bidirectional and consistent"
    },
    
    rollback_procedure: {
      step_1: "If errors occur, review the audit report",
      step_2: "Identify which records were updated",
      step_3: "Restore from backup if necessary",
      step_4: "Re-run audit to identify root cause",
      step_5: "Fix issues and retry updates"
    }
  };
  
  console.log("AUDIT GUIDE: " + JSON.stringify(auditGuide, null, 2));
  
  e.next();
}, "lesson_content");