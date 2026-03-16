
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trophy, Target, BookOpen, ArrowRight, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const AssessmentResults = ({ score, role, gaps, onRetake }) => {
  const getLevel = (score) => {
    if (score >= 70) return { label: 'Advanced', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' };
    if (score >= 40) return { label: 'Intermediate', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' };
    return { label: 'Foundational', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' };
  };

  const level = getLevel(score);

  // Deduplicate gaps
  const uniqueGaps = [...new Set(gaps)];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-800 border-4 border-slate-700 mb-4 shadow-xl">
          <Trophy className={`w-10 h-10 ${level.color}`} />
        </div>
        <h2 className="text-3xl font-bold text-white tracking-tight">Assessment Complete</h2>
        <p className="text-slate-400 text-lg">Here's your personalized skill profile for the <span className="text-white font-semibold">{role}</span> role.</p>
      </div>

      <Card className="glass-panel border-slate-800">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 text-center md:text-left">
              <div className="text-6xl font-extrabold text-white mb-2">{score}%</div>
              <Badge className={`${level.bg} ${level.color} ${level.border} text-sm px-3 py-1`}>
                {level.label} Level
              </Badge>
            </div>
            <div className="w-full md:w-2/3 space-y-3">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-slate-400">Overall Proficiency</span>
                <span className="text-white">{score}/100</span>
              </div>
              <Progress value={score} className="h-3 bg-slate-800" indicatorClassName={score >= 70 ? 'bg-emerald-500' : score >= 40 ? 'bg-blue-500' : 'bg-amber-500'} />
              <p className="text-sm text-slate-500 mt-2">
                {score >= 70 
                  ? "Excellent work! You have a strong grasp of the core concepts. Focus on advanced strategies."
                  : score >= 40 
                  ? "Good foundation. You understand the basics but have room to grow in specific technical areas."
                  : "You're just getting started. We recommend beginning with our foundational courses."}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {uniqueGaps.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-400" />
            Identified Skill Gaps
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {uniqueGaps.map((gap, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 flex items-start gap-3"
              >
                <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm leading-relaxed">{gap}</span>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      <Card className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 border-blue-500/30">
        <CardContent className="p-8 text-center space-y-6">
          <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
            <BookOpen className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Ready to level up?</h3>
            <p className="text-blue-200/80 max-w-md mx-auto">
              Based on your results, we've curated a specific learning path to help you close these gaps and master your role.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <Link to="/courses">
              <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 rounded-full text-base font-semibold shadow-lg shadow-blue-900/20">
                View Recommended Courses
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button variant="outline" onClick={onRetake} className="w-full sm:w-auto border-slate-600 text-slate-300 hover:text-white hover:bg-slate-800 px-8 py-6 rounded-full text-base">
              Retake Assessment
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AssessmentResults;
