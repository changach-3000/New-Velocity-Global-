import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Filter, Lock } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BadgeDisplay from './BadgeDisplay';

const BadgeShowcase = ({ earnedBadges = [], allBadges = [], className }) => {
  const [filter, setFilter] = useState('all');

  // Merge earned status into metadata
  const processedBadges = allBadges.map(badge => {
    const earnedRecord = earnedBadges.find(eb => eb.badgeName === badge.badgeName);
    return {
      ...badge,
      isEarned: !!earnedRecord,
      earnedDate: earnedRecord?.earnedDate
    };
  });

  const filteredBadges = processedBadges.filter(badge => {
    if (filter === 'all') return true;
    if (filter === 'earned') return badge.isEarned;
    if (filter === 'locked') return !badge.isEarned;
    if (filter === 'lesson') return badge.badgeType === 'lesson_completion';
    if (filter === 'quiz') return badge.badgeType === 'quiz_completion';
    return true;
  });

  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-200 p-6 ${className}`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-500" />
            Your Trophy Case
          </h2>
          <p className="text-sm text-gray-500">Collect badges as you master the curriculum</p>
        </div>
        
        <Tabs defaultValue="all" onValueChange={setFilter} className="w-full md:w-auto">
          <TabsList className="grid grid-cols-3 md:flex w-full">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="earned">Earned</TabsTrigger>
            <TabsTrigger value="locked">Locked</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {filteredBadges.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed">
          <Lock className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500 font-medium">No badges found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
          <AnimatePresence>
            {filteredBadges.map((badge) => (
              <motion.div
                key={badge.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <BadgeDisplay 
                  badge={badge} 
                  locked={!badge.isEarned} 
                  size="md"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default BadgeShowcase;