import { useState, useEffect, useCallback, useRef } from 'react';
import { useAuth } from '@/contexts/AuthContext';

const DEFAULT_PROGRESS = {
  courses: {},
  streaks: {
    current: 0,
    longest: 0,
    lastActivityDate: null,
    activityDates: []
  },
  totalTimeSpent: 0
};

export const useProgressTracking = () => {
  const { currentUser } = useAuth();
  const userId = currentUser?.id || 'anonymous';
  const storageKey = `user_progress_${userId}`;

  const [progressData, setProgressData] = useState(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      return stored ? JSON.parse(stored) : DEFAULT_PROGRESS;
    } catch (e) {
      console.error('Error reading progress from localStorage', e);
      return DEFAULT_PROGRESS;
    }
  });

  const saveTimeoutRef = useRef(null);

  // Sync state across tabs/components
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === storageKey && e.newValue) {
        setProgressData(JSON.parse(e.newValue));
      }
    };
    const handleCustomEvent = (e) => {
      if (e.detail && e.detail.userId === userId) {
        setProgressData(e.detail.data);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('progress_updated', handleCustomEvent);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('progress_updated', handleCustomEvent);
    };
  }, [storageKey, userId]);

  const saveToStorage = useCallback((newData) => {
    setProgressData(newData);
    
    // Debounce localStorage writes
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    
    saveTimeoutRef.current = setTimeout(() => {
      try {
        localStorage.setItem(storageKey, JSON.stringify(newData));
        window.dispatchEvent(new CustomEvent('progress_updated', { 
          detail: { userId, data: newData } 
        }));
      } catch (e) {
        if (e.name === 'QuotaExceededError') {
          console.error('LocalStorage quota exceeded. Cannot save progress.');
        } else {
          console.error('Error saving progress to localStorage', e);
        }
      }
    }, 500);
  }, [storageKey, userId]);

  const updateStreak = useCallback((data) => {
    const today = new Date().toISOString().split('T')[0];
    const streaks = { ...data.streaks };
    
    if (!streaks.activityDates) streaks.activityDates = [];
    
    if (streaks.lastActivityDate !== today) {
      if (!streaks.activityDates.includes(today)) {
        streaks.activityDates.push(today);
        // Keep only last 14 days
        if (streaks.activityDates.length > 14) {
          streaks.activityDates = streaks.activityDates.slice(-14);
        }
      }

      if (streaks.lastActivityDate) {
        const lastDate = new Date(streaks.lastActivityDate);
        const currentDate = new Date(today);
        const diffTime = Math.abs(currentDate - lastDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
          streaks.current += 1;
        } else if (diffDays > 1) {
          streaks.current = 1;
        }
      } else {
        streaks.current = 1;
      }

      streaks.longest = Math.max(streaks.current, streaks.longest || 0);
      streaks.lastActivityDate = today;
    }
    
    return streaks;
  }, []);

  const savePagePosition = useCallback((courseId, lessonId, pageNumber) => {
    if (!courseId || !lessonId) return;
    
    setProgressData(prev => {
      const newData = { ...prev };
      if (!newData.courses[courseId]) newData.courses[courseId] = { lessons: {} };
      if (!newData.courses[courseId].lessons[lessonId]) {
        newData.courses[courseId].lessons[lessonId] = { completed: false, timeSpent: 0 };
      }
      
      newData.courses[courseId].lessons[lessonId].currentPage = pageNumber;
      newData.courses[courseId].lessons[lessonId].lastAccessed = new Date().toISOString();
      newData.courses[courseId].lastAccessedLesson = lessonId;
      newData.streaks = updateStreak(newData);
      
      saveToStorage(newData);
      return newData;
    });
  }, [saveToStorage, updateStreak]);

  const markLessonComplete = useCallback((courseId, lessonId) => {
    if (!courseId || !lessonId) return;

    setProgressData(prev => {
      const newData = { ...prev };
      if (!newData.courses[courseId]) newData.courses[courseId] = { lessons: {} };
      if (!newData.courses[courseId].lessons[lessonId]) {
        newData.courses[courseId].lessons[lessonId] = { currentPage: 0, timeSpent: 0 };
      }
      
      newData.courses[courseId].lessons[lessonId].completed = true;
      newData.courses[courseId].lessons[lessonId].lastAccessed = new Date().toISOString();
      newData.courses[courseId].lastAccessedLesson = lessonId;
      newData.streaks = updateStreak(newData);
      
      saveToStorage(newData);
      return newData;
    });
  }, [saveToStorage, updateStreak]);

  const getResumePoint = useCallback((courseId) => {
    if (!courseId || !progressData.courses[courseId]) return null;
    const courseData = progressData.courses[courseId];
    const lessonId = courseData.lastAccessedLesson;
    if (!lessonId) return null;
    
    return {
      lessonId,
      pageNumber: courseData.lessons[lessonId]?.currentPage || 0
    };
  }, [progressData]);

  const isLessonCompleted = useCallback((courseId, lessonId) => {
    if (!courseId || !lessonId) return false;
    return !!progressData.courses[courseId]?.lessons[lessonId]?.completed;
  }, [progressData]);

  const getCourseProgress = useCallback((courseId, totalLessonsInCourse) => {
    if (!courseId || !progressData.courses[courseId] || !totalLessonsInCourse) return 0;
    const lessons = progressData.courses[courseId].lessons;
    const completedCount = Object.values(lessons).filter(l => l.completed).length;
    return Math.round((completedCount / totalLessonsInCourse) * 100);
  }, [progressData]);

  const getStreakInfo = useCallback(() => {
    return progressData.streaks;
  }, [progressData]);

  const addTimeSpent = useCallback((courseId, lessonId, minutes) => {
    if (!courseId || !lessonId) return;

    setProgressData(prev => {
      const newData = { ...prev };
      if (!newData.courses[courseId]) newData.courses[courseId] = { lessons: {} };
      if (!newData.courses[courseId].lessons[lessonId]) {
        newData.courses[courseId].lessons[lessonId] = { completed: false, currentPage: 0, timeSpent: 0 };
      }
      
      newData.courses[courseId].lessons[lessonId].timeSpent = 
        (newData.courses[courseId].lessons[lessonId].timeSpent || 0) + minutes;
      newData.totalTimeSpent = (newData.totalTimeSpent || 0) + minutes;
      newData.streaks = updateStreak(newData);
      
      saveToStorage(newData);
      return newData;
    });
  }, [saveToStorage, updateStreak]);

  const getProgressData = useCallback(() => {
    return progressData;
  }, [progressData]);

  const resetProgress = useCallback((courseId) => {
    if (!courseId) return;
    setProgressData(prev => {
      const newData = { ...prev };
      if (newData.courses[courseId]) {
        delete newData.courses[courseId];
      }
      saveToStorage(newData);
      return newData;
    });
  }, [saveToStorage]);

  return {
    savePagePosition,
    markLessonComplete,
    getResumePoint,
    isLessonCompleted,
    getCourseProgress,
    getStreakInfo,
    addTimeSpent,
    getProgressData,
    resetProgress
  };
};