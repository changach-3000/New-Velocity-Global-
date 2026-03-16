import React from 'react';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { cn } from '@/lib/utils.js';
import { motion } from 'framer-motion';

const StatsCard = ({ title, value, icon: Icon, className, description }) => {
  return (
    <motion.div 
      whileHover={{ y: -5, scale: 1.02 }} 
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Card className={cn(
        "h-full overflow-hidden border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm shadow-lg hover:shadow-blue-900/20 hover:border-blue-500/30 transition-all duration-300", 
        className
      )}>
        <CardContent className="p-6">
          <div className="flex items-center justify-between space-x-4">
            <div className="flex flex-col space-y-1">
              <span className="text-sm font-medium text-slate-400 tracking-wide uppercase">
                {title}
              </span>
              <span className="text-3xl font-bold tracking-tight text-white">
                {value}
              </span>
              {description && (
                <span className="text-xs text-slate-500 mt-1">
                  {description}
                </span>
              )}
            </div>
            {Icon && (
              <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shadow-inner shadow-blue-500/5">
                <Icon className="w-6 h-6" />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default StatsCard;