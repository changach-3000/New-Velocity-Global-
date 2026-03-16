import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const ClarifyingQuestion = ({ options, onSelect }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-2 mt-2"
    >
      <p className="text-xs text-slate-400 mb-1">Did you mean:</p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <Button
            key={option.id}
            variant="outline"
            size="sm"
            onClick={() => onSelect(option.text)}
            className="text-xs h-7 bg-slate-800 border-slate-600 text-blue-300 hover:bg-blue-900/30 hover:text-blue-200 hover:border-blue-500/50 transition-all"
          >
            {option.text}
          </Button>
        ))}
      </div>
    </motion.div>
  );
};

export default ClarifyingQuestion;