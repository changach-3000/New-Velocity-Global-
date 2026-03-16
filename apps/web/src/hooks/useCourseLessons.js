import { useState, useCallback } from 'react';
import PocketBase from 'pocketbase';
const POCKETBASE_URL = 'https://velocity-global-db-v2.onrender.com';
const pb = new PocketBase(POCKETBASE_URL);
import { logDataFlow } from '@/utils/DataFlowLogger';

export const useCourseLessons = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAllCourses = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      logDataFlow('useCourseLessons:fetchAllCourses:Start', null);
      
      const records = await pb.collection('courses').getList(1, 50, {
        sort: '-created',
        $autoCancel: false
      });
      
      logDataFlow('useCourseLessons:fetchAllCourses:Success', records.items, { count: records.items.length });
      return records.items;
    } catch (err) {
      console.error('Error fetching all courses:', err);
      setError(err);
      logDataFlow('useCourseLessons:fetchAllCourses:Error', err);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchCourseById = useCallback(async (courseId) => {
    if (!courseId) {
      console.warn('fetchCourseById called with empty ID');
      return null;
    }
    setLoading(true);
    setError(null);
    try {
      const record = await pb.collection('courses').getOne(courseId, {
        $autoCancel: false
      });
      logDataFlow('useCourseLessons:fetchCourseById', record, { courseId });
      return record;
    } catch (err) {
      console.error(`Error fetching course ${courseId}:`, err);
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchLessonsByCourse = useCallback(async (courseId) => {
    if (!courseId) return [];
    setLoading(true);
    setError(null);
    try {
      // Query lessons where course_id matches
      const records = await pb.collection('lessons').getFullList({
        filter: `course_id="${courseId}"`,
        sort: 'order',
        $autoCancel: false
      });
      logDataFlow('useCourseLessons:fetchLessonsByCourse', records, { courseId, count: records.length });
      return records;
    } catch (err) {
      console.error(`Error fetching lessons for course ${courseId}:`, err);
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchLessonById = useCallback(async (lessonId) => {
    if (!lessonId) return null;
    setLoading(true);
    setError(null);
    try {
      const record = await pb.collection('lessons').getOne(lessonId, {
        $autoCancel: false
      });
      logDataFlow('useCourseLessons:fetchLessonById', record, { lessonId });
      return record;
    } catch (err) {
      console.error(`Error fetching lesson ${lessonId}:`, err);
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchLessonContent = useCallback(async (lessonId) => {
    if (!lessonId) return null;
    setLoading(true);
    setError(null);
    try {
      // Query lesson_content where lesson_id matches the lesson's ID
      const records = await pb.collection('lesson_content').getList(1, 1, {
        filter: `lesson_id="${lessonId}"`,
        $autoCancel: false
      });
      
      const content = records.items.length > 0 ? records.items[0] : null;
      logDataFlow('useCourseLessons:fetchLessonContent', content, { lessonId, found: !!content });
      return content;
    } catch (err) {
      console.error(`Error fetching content for lesson ${lessonId}:`, err);
      setError(err);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchLessonResources = useCallback(async (lessonId) => {
    if (!lessonId) return [];
    // Resources often fetch in parallel with content, so we might not want to trigger global loading state here
    // to avoid flickering if used independently. But for consistency, we'll wrap it.
    try {
      const records = await pb.collection('lesson_resources').getFullList({
        filter: `lesson_id="${lessonId}"`,
        $autoCancel: false
      });
      return records;
    } catch (err) {
      console.error(`Error fetching resources for lesson ${lessonId}:`, err);
      return [];
    }
  }, []);

  return {
    loading,
    error,
    fetchAllCourses,
    fetchCourseById,
    fetchLessonsByCourse,
    fetchLessonById,
    fetchLessonContent,
    fetchLessonResources
  };
};