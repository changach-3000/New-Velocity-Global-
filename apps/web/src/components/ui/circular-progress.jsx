import React from 'react';
import { cn } from '@/lib/utils';

const CircularProgress = ({ 
  value, 
  size = 120, 
  strokeWidth = 10, 
  className,
  showValue = true,
  label = "Score"
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  let colorClass = 'text-blue-500';
  if (value < 50) colorClass = 'text-red-500';
  else if (value < 75) colorClass = 'text-yellow-500';
  else colorClass = 'text-green-500';

  return (
    <div className={cn("relative flex flex-col items-center justify-center", className)}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-gray-200 dark:text-gray-700"
        />
        {/* Progress Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={cn("transition-all duration-1000 ease-out", colorClass)}
        />
      </svg>
      {showValue && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={cn("text-3xl font-bold", colorClass)}>{Math.round(value)}%</span>
          {label && <span className="text-xs text-gray-500 uppercase tracking-wider">{label}</span>}
        </div>
      )}
    </div>
  );
};

export default CircularProgress;