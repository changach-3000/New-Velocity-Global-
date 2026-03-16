import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, Medal, Crown, CheckCircle2, Lock } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

const BadgeDisplay = ({ badge, size = "md", locked = false, className, showDetails = true }) => {
  // Map icon string to Lucide component
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'trophy': return Trophy;
      case 'star': return Star;
      case 'award': return Award;
      case 'medal': return Medal;
      case 'crown': return Crown;
      case 'check': return CheckCircle2;
      default: return Award;
    }
  };

  const IconComponent = getIcon(badge.badgeIcon || 'award');
  
  const sizeClasses = {
    sm: "w-12 h-12 p-2",
    md: "w-20 h-20 p-4",
    lg: "w-32 h-32 p-6",
    xl: "w-40 h-40 p-8"
  };

  const iconSizes = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-16 h-16",
    xl: "w-20 h-20"
  };

  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <motion.div 
            className={cn("flex flex-col items-center gap-2 group cursor-pointer", className)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div 
              className={cn(
                "rounded-full flex items-center justify-center shadow-lg relative transition-all duration-300",
                sizeClasses[size],
                locked ? "bg-gray-100 text-gray-400 grayscale" : "text-white"
              )}
              style={{ 
                background: locked ? undefined : `linear-gradient(135deg, ${badge.badgeColor || '#3b82f6'}, ${adjustColor(badge.badgeColor || '#3b82f6', -20)})`,
                boxShadow: locked ? 'none' : `0 10px 15px -3px ${badge.badgeColor}40`
              }}
            >
              <IconComponent className={cn(iconSizes[size], "drop-shadow-md")} />
              
              {locked && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 rounded-full">
                  <Lock className="w-1/3 h-1/3 text-gray-500/80" />
                </div>
              )}
              
              {!locked && (
                <motion.div 
                  className="absolute inset-0 rounded-full border-2 border-white/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              )}
            </div>
            
            {showDetails && (
              <div className="text-center max-w-[120px]">
                <h4 className={cn(
                  "font-bold leading-tight", 
                  size === 'sm' ? "text-xs" : "text-sm",
                  locked ? "text-gray-400" : "text-gray-800"
                )}>
                  {badge.badgeName || badge.name}
                </h4>
                {!locked && badge.earnedDate && (
                  <span className="text-[10px] text-green-600 font-medium block mt-1">
                    {new Date(badge.earnedDate).toLocaleDateString()}
                  </span>
                )}
              </div>
            )}
          </motion.div>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs p-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <IconComponent className="w-4 h-4" style={{ color: badge.badgeColor }} />
              <p className="font-bold">{badge.badgeName || badge.name}</p>
            </div>
            <p className="text-sm text-gray-600">{badge.badgeDescription || badge.description}</p>
            {locked && badge.unlockedCriteria && (
              <div className="pt-2 border-t mt-2">
                <p className="text-xs font-semibold text-gray-500 uppercase">To Unlock:</p>
                <p className="text-xs text-gray-600">{badge.unlockedCriteria}</p>
              </div>
            )}
            {!locked && badge.earnedDate && (
              <div className="pt-2 border-t mt-2">
                <p className="text-xs text-green-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Earned on {new Date(badge.earnedDate).toLocaleDateString()}
                </p>
              </div>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

// Helper to darken color for gradient
function adjustColor(color, amount) {
  return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}

export default BadgeDisplay;