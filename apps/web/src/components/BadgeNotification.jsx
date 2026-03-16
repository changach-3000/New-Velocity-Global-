import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trophy } from 'lucide-react';
import BadgeDisplay from './BadgeDisplay';
import confetti from 'canvas-confetti';

const BadgeNotification = ({ badges = [], onClose }) => {
  useEffect(() => {
    if (badges.length > 0) {
      // Trigger confetti
      const duration = 3000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#FFD700', '#FFA500', '#FF4500']
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#00BFFF', '#1E90FF', '#4169E1']
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();

      // Auto dismiss
      const timer = setTimeout(() => {
        onClose();
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [badges, onClose]);

  if (badges.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 max-w-sm w-full"
      >
        <div className="bg-white rounded-xl shadow-2xl border-2 border-amber-100 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300" />
          
          <button 
            onClick={onClose}
            className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="p-6">
            <div className="flex items-center gap-2 mb-4 text-amber-500 font-bold uppercase tracking-wider text-xs">
              <Trophy className="w-4 h-4" />
              Achievement Unlocked!
            </div>

            {badges.map((badge, index) => (
              <div key={index} className="flex items-center gap-4 mb-4 last:mb-0">
                <div className="flex-shrink-0">
                  <BadgeDisplay badge={badge} size="sm" showDetails={false} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1">
                    {badge.badgeName}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {badge.badgeDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BadgeNotification;