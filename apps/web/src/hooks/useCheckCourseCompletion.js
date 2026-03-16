import { useCallback } from 'react';
import pb from '@/lib/pocketbaseClient';

/**
 * Checks course completion using user_id + lesson_id on lesson_progress.
 * No enrollment_id required.
 */
export const useCheckCourseCompletion = () => {
  const checkCourseCompletion = useCallback(async (courseId, userId) => {
    if (!courseId || !userId) return null;

    try {
      // 1. Get all lesson IDs that belong to this course
      const lessons = await pb.collection('lessons').getFullList({
        filter: `course_id = "${courseId}"`,
        fields: 'id',
        $autoCancel: false,
      });

      const totalLessons = lessons.length;
      if (totalLessons === 0) {
        return { isCourseComplete: false, completedLessons: 0, totalLessons: 0, progress: 0 };
      }

      const courseLessonIds = new Set(lessons.map((l) => l.id));

      // 2. Fetch all completed lesson_progress records for this user
      //    Then filter to only those belonging to this course
      const completedRecords = await pb.collection('lesson_progress').getFullList({
        filter: `user_id = "${userId}" && completed = true`,
        fields: 'lesson_id',
        $autoCancel: false,
      });

      const completedCount = completedRecords.filter((r) =>
        courseLessonIds.has(r.lesson_id)
      ).length;

      const isCourseComplete = completedCount === totalLessons;
      const progress = Math.round((completedCount / totalLessons) * 100);

      return { isCourseComplete, completedLessons: completedCount, totalLessons, progress };
    } catch (err) {
      console.error('checkCourseCompletion error:', err);
      return null;
    }
  }, []);

  return { checkCourseCompletion };
};