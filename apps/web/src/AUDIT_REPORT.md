# Codebase Audit & Cleanup Report

## 1. Glossary Feature Removal
The glossary feature has been completely removed from the codebase as requested.

### Removed Components (Deprecated/Emptied)
- `apps/web/src/components/GlossaryPage.jsx`
- `apps/web/src/components/GlossaryViewer.jsx`
- `apps/web/src/pages/mobile/GlossaryScreen.jsx`

### Updated Files (References Removed)
- `apps/web/src/App.jsx`: Removed GlossaryPage import and route.
- `apps/web/src/pages/mobile/MobileApp.jsx`: Removed GlossaryScreen import and route.
- `apps/web/src/components/LessonDetailPage.jsx`: Removed Glossary navigation link.
- `apps/web/src/pages/LessonPlayer.jsx`: Removed Glossary tab, state, and fetch calls.
- `apps/web/src/utils/ComprehensiveAuditEngine.js`: Removed glossary audit logic.
- `apps/web/src/utils/ComprehensiveAuditFixer.js`: Removed glossary fix logic.
- `apps/web/src/utils/DataConsistencyValidator.js`: Removed glossary validation logic.
- `apps/web/src/utils/auditVendorLeasingCourse.js`: Removed glossary audit logic.

## 2. PocketBase Collections Audit
The following collections are actively queried in the codebase and have been verified against the schema:

- `courses`
- `lessons`
- `lesson_content`
- `enrollments` (and singular `enrollment` in some contexts, verified both exist)
- `lesson_progress`
- `lesson_tracking`
- `quizzes`
- `quiz_questions`
- `case_studies`
- `lesson_resources`
- `badges`
- `vendor_leasing_lessons`
- `vendor_leasing_quizzes`
- `vendor_leasing_case_studies`
- `vendor_leasing_resources`
- `vendor_leasing_progress_tracking`
- `vendor_leasing_quiz_history`
- `mobile_user_notes`
- `mobile_offline_content`

## 3. Broken Collections Fixed
The following broken collection references were identified and removed:

- `glossaries`: Referenced in `LessonPlayer.jsx` and audit utilities. Removed.
- `resources`: Referenced in `DataConsistencyValidator.js`. Removed (replaced with `lesson_resources` where appropriate or removed if redundant).

## 4. API Endpoints
No direct `apiServerClient.fetch()` calls were found in the modified components. The application primarily uses the PocketBase SDK (`pb.collection(...)`) for data interaction.

## 5. Summary
The codebase has been cleaned of all glossary-related functionality. Broken references to non-existent collections (`glossaries`, `resources`) have been removed. The application should now be more stable and free of 404 errors related to these missing collections.