import { useState, useEffect, useCallback } from 'react';
import pb from '@/lib/pocketbaseClient';
import { useAuth } from '@/contexts/AuthContext';

const useVendorLeasingBadgeTracker = () => {
  const { currentUser } = useAuth();
  const [earnedBadges, setEarnedBadges] = useState([]);
  const [badgeMetadata, setBadgeMetadata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newBadges, setNewBadges] = useState([]);

  const fetchData = useCallback(async () => {
    if (!currentUser) return;
    
    try {
      const [earned, metadata] = await Promise.all([
        pb.collection('vendor_leasing_student_badges').getFullList({
          filter: `studentId="${currentUser.id}"`,
          sort: '-earnedDate',
          $autoCancel: false,
        }),
        pb.collection('vendor_leasing_badge_metadata').getFullList({
          sort: 'displayOrder',
          $autoCancel: false,
        })
      ]);
      
      setEarnedBadges(earned);
      setBadgeMetadata(metadata);
    } catch (error) {
      console.error("Error fetching badge data:", error);
    } finally {
      setLoading(false);
    }
  }, [currentUser]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const getEarnedBadges = () => earnedBadges;
  
  const getBadgeProgress = () => {
    const totalBadges = badgeMetadata.length;
    const earnedCount = earnedBadges.length;
    const percentage = totalBadges > 0 ? Math.round((earnedCount / totalBadges) * 100) : 0;
    
    const byType = {
      lesson_completion: { total: 0, earned: 0 },
      quiz_completion: { total: 0, earned: 0 },
      course_completion: { total: 0, earned: 0 },
      perfect_score: { total: 0, earned: 0 },
      resource_mastery: { total: 0, earned: 0 }
    };

    badgeMetadata.forEach(badge => {
      if (byType[badge.badgeType]) {
        byType[badge.badgeType].total++;
        if (earnedBadges.some(eb => eb.badgeName === badge.badgeName)) { // Matching by name as ID might differ in student record
          byType[badge.badgeType].earned++;
        }
      }
    });

    return {
      total: totalBadges,
      earned: earnedCount,
      percentage,
      byType
    };
  };

  const checkAndAwardBadges = async ({ lessonId, lessonNumber, type, quizScore = 0 }) => {
    if (!currentUser) return [];
    
    const newlyEarned = [];
    
    // Filter metadata for potential badges to award based on the action
    const potentialBadges = badgeMetadata.filter(b => {
      if (type === 'lesson_completion') {
        return b.badgeType === 'lesson_completion' && b.lessonNumber === lessonNumber;
      }
      if (type === 'quiz_completion') {
        return b.badgeType === 'quiz_completion' && b.lessonNumber === lessonNumber;
      }
      if (type === 'course_completion') {
        return b.badgeType === 'course_completion';
      }
      return false;
    });

    for (const badgeDef of potentialBadges) {
      // Check if already earned
      const alreadyEarned = earnedBadges.some(eb => eb.badgeName === badgeDef.badgeName);
      if (alreadyEarned) continue;

      let shouldAward = false;

      // Logic for awarding badges
      if (badgeDef.badgeType === 'lesson_completion') {
        // Simple completion check passed from component
        shouldAward = true; 
      } else if (badgeDef.badgeType === 'quiz_completion') {
        // Check score threshold (assuming 70% passing)
        if (quizScore >= 70) shouldAward = true;
      } else if (badgeDef.badgeType === 'course_completion') {
        // Check if all lessons are completed (simplified logic: check if 8 lesson badges earned)
        const lessonBadges = earnedBadges.filter(b => b.badgeType === 'lesson_completion');
        if (lessonBadges.length >= 8) shouldAward = true;
      }

      if (shouldAward) {
        try {
          const newBadge = await pb.collection('vendor_leasing_student_badges').create({
            studentId: currentUser.id,
            lessonNumber: badgeDef.lessonNumber || 0,
            badgeType: badgeDef.badgeType,
            earnedDate: new Date().toISOString(),
            quizScore: quizScore,
            badgeName: badgeDef.badgeName,
            badgeDescription: badgeDef.badgeDescription,
            badgeIcon: badgeDef.badgeIcon,
            badgeColor: badgeDef.badgeColor
          }, { $autoCancel: false });
          
          newlyEarned.push(newBadge);
          setEarnedBadges(prev => [newBadge, ...prev]);
        } catch (err) {
          console.error("Error awarding badge:", err);
        }
      }
    }

    if (newlyEarned.length > 0) {
      setNewBadges(newlyEarned);
    }
    
    return newlyEarned;
  };

  const clearNewBadges = () => setNewBadges([]);

  return {
    loading,
    earnedBadges,
    badgeMetadata,
    newBadges,
    getEarnedBadges,
    getBadgeProgress,
    checkAndAwardBadges,
    clearNewBadges,
    refreshBadges: fetchData
  };
};

export default useVendorLeasingBadgeTracker;