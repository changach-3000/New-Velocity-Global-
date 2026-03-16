import { useState, useEffect, useCallback } from 'react';
// import pb from '@/lib/pocketbaseClient';
import PocketBase from 'pocketbase';
const POCKETBASE_URL = 'https://velocity-global-db-v2.onrender.com';
const pb = new PocketBase(POCKETBASE_URL);

/**
 * Custom hook to check if a user is enrolled in a specific course.
 * 
 * @param {string} courseId - The ID of the course to check
 * @param {object} currentUser - The current user object from AuthContext
 * @returns {object} { isEnrolled, loading, error, checkEnrollment }
 */
export const useEnrollmentCheck = (courseId, currentUser) => {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [enrollmentData, setEnrollmentData] = useState(null);

  const checkEnrollment = useCallback(async () => {
    // Reset state if inputs are missing
    if (!courseId) {
      setLoading(false);
      return;
    }

    if (!currentUser) {
      console.log('[useEnrollmentCheck] No user logged in. Enrollment check skipped.');
      setIsEnrolled(false);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      console.log(`[useEnrollmentCheck] Checking enrollment for User: ${currentUser.id}, Course: ${courseId}`);
      
      // Query enrollment collection
      // Using standard field names: user_id and course_id
      const filter = `user_id="${currentUser.id}" && course_id="${courseId}"`;
      
      const result = await pb.collection('enrollment').getList(1, 1, {
        filter: filter,
        $autoCancel: false,
      });

      if (result.items.length > 0) {
        console.log(`[useEnrollmentCheck] Enrollment found:`, result.items[0]);
        setIsEnrolled(true);
        setEnrollmentData(result.items[0]);
      } else {
        console.log(`[useEnrollmentCheck] No enrollment found for filter: ${filter}`);
        setIsEnrolled(false);
        setEnrollmentData(null);
      }
    } catch (err) {
      console.error('[useEnrollmentCheck] Error checking enrollment:', err);
      // Don't treat 404 (empty list usually returns 200 with empty items, but just in case) as error
      if (err.status !== 404) {
        setError(err);
      }
      setIsEnrolled(false);
    } finally {
      setLoading(false);
    }
  }, [courseId, currentUser]);

  // Automatically check when dependencies change
  useEffect(() => {
    checkEnrollment();
  }, [checkEnrollment]);

  return { 
    isEnrolled, 
    loading, 
    error, 
    enrollmentData,
    checkEnrollment 
  };
};

export default useEnrollmentCheck;