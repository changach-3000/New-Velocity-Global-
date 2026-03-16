import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Map, Trophy, Users } from 'lucide-react';

const LearningPathwayCard = ({ pathway }) => {
  const getSkillColor = (level) => {
    switch (level?.toLowerCase()) {
      case 'beginner': return 'bg-green-100 text-green-700';
      case 'intermediate': return 'bg-blue-100 text-blue-700';
      case 'advanced': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  // Parse course sequence if it's a string
  let courseCount = 0;
  try {
    const sequence = typeof pathway.course_sequence === 'string' 
      ? JSON.parse(pathway.course_sequence) 
      : pathway.course_sequence;
    courseCount = Array.isArray(sequence) ? sequence.length : 0;
  } catch (e) {
    courseCount = 0;
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full"
    >
      <div className="p-6 flex-1">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-blue-50 rounded-lg">
            {pathway.icon_url ? (
              <img src={pathway.icon_url} alt="" className="w-8 h-8" />
            ) : (
              <Map className="w-8 h-8 text-[#1e3a8a]" />
            )}
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${getSkillColor(pathway.skill_level)}`}>
            {pathway.skill_level}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-[#1e3a8a] mb-2 leading-tight">
          {pathway.name}
        </h3>
        
        <p className="text-gray-600 mb-6 line-clamp-2">
          {pathway.description}
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users className="w-4 h-4 text-[#3b82f6]" />
            <span>Target: <span className="font-semibold text-gray-900">{pathway.target_role}</span></span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Trophy className="w-4 h-4 text-[#3b82f6]" />
            <span>{courseCount} Course Sequence</span>
          </div>
        </div>
      </div>

      <div className="p-6 pt-0 mt-auto">
        <button className="w-full bg-[#1e3a8a] text-white py-3 rounded-lg font-bold hover:bg-[#3b82f6] transition-colors flex items-center justify-center gap-2 group">
          Start Pathway
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

export default LearningPathwayCard;