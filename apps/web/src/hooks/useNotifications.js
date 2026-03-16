import { useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient';

export const useNotifications = (userId) => {
  const [preferences, setPreferences] = useState({
    lessonReminders: true,
    quizReminders: true,
    motivationalNotifications: true,
    newContentAlerts: true,
    scheduledTime: '09:00'
  });
  const [permission, setPermission] = useState('default');
  const [loading, setLoading] = useState(true);

  // Load notification preferences from PocketBase
  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    const loadPreferences = async () => {
      try {
        const records = await pb.collection('mobile_notifications').getFullList({
          filter: `userId = "${userId}"`,
          $autoCancel: false
        });

        if (records.length > 0) {
          const prefs = records[0];
          setPreferences({
            lessonReminders: prefs.lessonReminders ?? true,
            quizReminders: prefs.quizReminders ?? true,
            motivationalNotifications: prefs.motivationalNotifications ?? true,
            newContentAlerts: prefs.newContentAlerts ?? true,
            scheduledTime: prefs.scheduledTime || '09:00'
          });
        }
      } catch (error) {
        console.error('Failed to load notification preferences:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPreferences();
  }, [userId]);

  // Check notification permission
  useEffect(() => {
    if ('Notification' in window) {
      setPermission(Notification.permission);
    }
  }, []);

  // Request notification permission
  const requestPermission = async () => {
    if (!('Notification' in window)) {
      console.warn('This browser does not support notifications');
      return false;
    }

    try {
      const result = await Notification.requestPermission();
      setPermission(result);
      return result === 'granted';
    } catch (error) {
      console.error('Failed to request notification permission:', error);
      return false;
    }
  };

  // Save preferences to PocketBase
  const savePreferences = async (newPreferences) => {
    if (!userId) return;

    try {
      const records = await pb.collection('mobile_notifications').getFullList({
        filter: `userId = "${userId}"`,
        $autoCancel: false
      });

      const data = {
        userId,
        ...newPreferences,
        notificationHistory: JSON.stringify([])
      };

      if (records.length > 0) {
        await pb.collection('mobile_notifications').update(records[0].id, data, { $autoCancel: false });
      } else {
        await pb.collection('mobile_notifications').create(data, { $autoCancel: false });
      }

      setPreferences(newPreferences);
    } catch (error) {
      console.error('Failed to save notification preferences:', error);
      throw error;
    }
  };

  // Send notification
  const sendNotification = (title, body, options = {}) => {
    if (permission !== 'granted') {
      console.warn('Notification permission not granted');
      return;
    }

    try {
      const notification = new Notification(title, {
        body,
        icon: '/logo.png',
        badge: '/logo.png',
        ...options
      });

      notification.onclick = () => {
        window.focus();
        notification.close();
      };

      return notification;
    } catch (error) {
      console.error('Failed to send notification:', error);
    }
  };

  // Schedule daily reminder
  const scheduleDailyReminder = () => {
    if (!preferences.lessonReminders && !preferences.quizReminders) {
      return;
    }

    const [hours, minutes] = preferences.scheduledTime.split(':');
    const now = new Date();
    const scheduledTime = new Date();
    scheduledTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);

    if (scheduledTime <= now) {
      scheduledTime.setDate(scheduledTime.getDate() + 1);
    }

    const timeUntilNotification = scheduledTime.getTime() - now.getTime();

    setTimeout(() => {
      if (preferences.lessonReminders) {
        sendNotification(
          'Time to Learn! 📚',
          'Continue your Vendor Leasing course and master new skills today.',
          { tag: 'daily-reminder' }
        );
      }
      // Reschedule for next day
      scheduleDailyReminder();
    }, timeUntilNotification);
  };

  // Send motivational notification
  const sendMotivationalNotification = (message) => {
    if (!preferences.motivationalNotifications) return;
    sendNotification('Great Progress! 🎉', message, { tag: 'motivation' });
  };

  // Send new content alert
  const sendNewContentAlert = (contentTitle) => {
    if (!preferences.newContentAlerts) return;
    sendNotification('New Content Available! 🆕', `Check out: ${contentTitle}`, { tag: 'new-content' });
  };

  // Send quiz reminder
  const sendQuizReminder = (lessonTitle) => {
    if (!preferences.quizReminders) return;
    sendNotification('Quiz Time! 📝', `Complete the quiz for: ${lessonTitle}`, { tag: 'quiz-reminder' });
  };

  return {
    preferences,
    permission,
    loading,
    requestPermission,
    savePreferences,
    sendNotification,
    scheduleDailyReminder,
    sendMotivationalNotification,
    sendNewContentAlert,
    sendQuizReminder
  };
};