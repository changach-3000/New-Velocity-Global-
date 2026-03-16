import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ current, total, label }) => {
  const percentage = Math.min(100, Math.max(0, (current / total) * 100));

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2 text-sm font-medium text-gray-600">
        <span>{label || `Lesson ${current} of ${total}`}</span>
        <span>{Math.round(percentage)}% Complete</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="h-full bg-[#1e3a8a] rounded-full"
        />
      </div>
    </div>
  );
};

export default ProgressBar;