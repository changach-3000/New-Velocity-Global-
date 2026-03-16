import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { logDataFlow } from '@/utils/DataFlowLogger';
import PocketBase from 'pocketbase';

const CourseDataContext = createContext();
const POCKETBASE_URL = 'https://velocity-global-db-v2.onrender.com';
const pb = new PocketBase(POCKETBASE_URL);
// import pb from '@/lib/pocketbaseClient';

export const useCourseData = () => {
  const context = useContext(CourseDataContext);
  if (!context) {
    throw new Error('useCourseData must be used within a CourseDataProvider');
  }
  return context;
};

export const CourseDataProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(Date.now());

  const fetchCourses = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      logDataFlow('CourseContext:FetchingCourses', null, { timestamp: Date.now() });
      
      // Fetch all courses, sorted by creation date
      const records = await pb.collection('courses').getFullList({
        sort: '-created',
        $autoCancel: false,
      });

      logDataFlow('CourseContext:CoursesFetched', records, { count: records.length });
      setCourses(records);
    } catch (err) {
      console.error('Error fetching courses:', err);
      setError(err.message || 'Failed to fetch courses');
      logDataFlow('CourseContext:FetchError', err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial fetch
  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  // Helper to get a single course from state or fetch if missing
  const getCourseById = useCallback(async (courseId) => {
    if (!courseId) return null;
    
    // Try to find in existing state first
    const existing = courses.find(c => c.id === courseId);
    if (existing) return existing;

    // If not found, fetch individually
    try {
      const record = await pb.collection('courses').getOne(courseId, { $autoCancel: false });
      return record;
    } catch (err) {
      console.error(`Failed to fetch course ${courseId}:`, err);
      return null;
    }
  }, [courses]);

  const refreshCourses = () => {
    setLastUpdated(Date.now());
    fetchCourses();
  };

  const value = {
    courses,
    loading,
    error,
    getCourseById,
    refreshCourses,
    lastUpdated
  };

  return (
    <CourseDataContext.Provider value={value}>
      {children}
    </CourseDataContext.Provider>
  );
};

export default CourseDataProvider;