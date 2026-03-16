import React, { useState, useEffect } from 'react';
import { CheckCircle, Circle, Clock } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import pb from '@/lib/pocketbaseClient';
import { cn } from '@/lib/utils';

const LessonProgressIndicator = ({ lessonId, className, onStatusChange }) => {
  const { currentUser } = useAuth();
  const [status, setStatus] = useState('loading'); // 'loading' | 'completed' | 'in_progress' | 'not_started'
  const [progressId, setProgressId] = useState(null); // lesson_progress record id
  const [trackingId, setTrackingId] = useState(null); // lesson_tracking record id
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const loadProgress = async () => {
      if (!lessonId || !currentUser?.id) {
        setStatus('not_started');
        return;
      }

      try {
        // Source of truth: lesson_progress, keyed by user_id + lesson_id
        const records = await pb.collection('lesson_progress').getList(1, 1, {
          filter: `user_id = "${currentUser.id}" && lesson_id = "${lessonId}"`,
          $autoCancel: false,
        });

        if (records.items.length > 0) {
          const record = records.items[0];
          setProgressId(record.id);
          setStatus(record.completed ? 'completed' : 'in_progress');
        } else {
          setStatus('not_started');
        }
      } catch (error) {
        console.error('Error loading lesson progress:', error);
        setStatus('not_started');
      }
    };

    loadProgress();
  }, [lessonId, currentUser?.id]);

  const writeProgress = async (completed) => {
    const now = new Date().toISOString();

    // 1. Upsert lesson_progress (primary)
    let newProgressId = progressId;
    if (progressId) {
      await pb.collection('lesson_progress').update(progressId, {
        completed,
        completed_at: completed ? now : null,
      });
    } else {
      const created = await pb.collection('lesson_progress').create({
        user_id: currentUser.id,
        lesson_id: lessonId,
        completed,
        completed_at: completed ? now : null,
      });
      newProgressId = created.id;
      setProgressId(created.id);
    }

    // 2. Upsert lesson_tracking (secondary / activity history — best-effort)
    try {
      if (trackingId) {
        await pb.collection('lesson_tracking').update(trackingId, {
          completed,
          completed_at: completed ? now : null,
        });
      } else {
        const created = await pb.collection('lesson_tracking').create({
          user_id: currentUser.id,
          lesson_id: lessonId,
          lesson_number: 1, // fallback; LessonDetailPage sets the real value
          started_at: now,
          completed,
          completed_at: completed ? now : null,
        });
        setTrackingId(created.id);
      }
    } catch (e) {
      // lesson_tracking failure is non-critical
      console.warn('Could not update lesson_tracking:', e);
    }

    return newProgressId;
  };

  const handleToggleComplete = async () => {
    if (!currentUser?.id || !lessonId || isUpdating) return;

    setIsUpdating(true);
    const newCompleted = status !== 'completed';
    try {
      await writeProgress(newCompleted);
      const newStatus = newCompleted ? 'completed' : 'in_progress';
      setStatus(newStatus);
      if (onStatusChange) onStatusChange(newStatus);
    } catch (error) {
      console.error('Error updating progress:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleStartLesson = async () => {
    if (!currentUser?.id || !lessonId || isUpdating || status !== 'not_started') return;

    setIsUpdating(true);
    try {
      await writeProgress(false);
      setStatus('in_progress');
      if (onStatusChange) onStatusChange('in_progress');
    } catch (error) {
      console.error('Error starting lesson:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleClick = () => {
    if (status === 'not_started') handleStartLesson();
    else handleToggleComplete();
  };

  if (status === 'loading') {
    return <div className="w-5 h-5 rounded-full bg-gray-200 animate-pulse" />;
  }

  if (status === 'completed') {
    return (
      <button
        onClick={handleClick}
        disabled={isUpdating}
        className={cn(
          'flex items-center text-green-600 gap-1 hover:text-green-700 transition-colors',
          isUpdating && 'opacity-50 cursor-not-allowed',
          className
        )}
        title={isUpdating ? 'Updating...' : 'Click to mark as in progress'}
      >
        <CheckCircle className="w-5 h-5 fill-green-100" />
        <span className="text-xs font-medium hidden sm:inline">
          {isUpdating ? 'Updating...' : 'Completed'}
        </span>
      </button>
    );
  }

  if (status === 'in_progress') {
    return (
      <button
        onClick={handleClick}
        disabled={isUpdating}
        className={cn(
          'flex items-center text-blue-600 gap-1 hover:text-blue-700 transition-colors',
          isUpdating && 'opacity-50 cursor-not-allowed',
          className
        )}
        title="Click to mark as complete"
      >
        <Clock className="w-5 h-5" />
        <span className="text-xs font-medium hidden sm:inline">
          {isUpdating ? 'Updating...' : 'In Progress'}
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      disabled={isUpdating}
      className={cn(
        'flex items-center text-gray-400 gap-1 hover:text-gray-600 transition-colors',
        isUpdating && 'opacity-50 cursor-not-allowed',
        className
      )}
      title="Click to start lesson"
    >
      <Circle className="w-5 h-5" />
      <span className="text-xs hidden sm:inline">
        {isUpdating ? 'Starting...' : 'Not Started'}
      </span>
    </button>
  );
};

export default LessonProgressIndicator;