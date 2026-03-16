import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import pb from '@/lib/pocketbaseClient';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlayCircle, BookOpen, Clock, ChevronRight, Loader2, HelpCircle, FileText, Award, TrendingUp, ShieldCheck, Download, FolderOpen, Trophy, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';
import BadgeShowcase from './BadgeShowcase';
import BadgeProgress from './BadgeProgress';
import useVendorLeasingBadgeTracker from '@/hooks/useVendorLeasingBadgeTracker';

const VendorLeasingDashboard = ({ onSelectLesson }) => {
  const [lessons, setLessons] = useState([]);
  const [resourceCount, setResourceCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Badge Tracker
  const { earnedBadges, badgeMetadata, getBadgeProgress } = useVendorLeasingBadgeTracker();
  const badgeProgress = getBadgeProgress();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [lessonsData, resourcesData] = await Promise.all([
          pb.collection('vendor_leasing_lessons').getFullList({
            sort: 'lessonNumber',
            $autoCancel: false,
          }),
          pb.collection('vendor_leasing_resources').getList(1, 1, {
            $autoCancel: false,
          })
        ]);
        setLessons(lessonsData);
        setResourceCount(resourcesData.totalItems);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
        setError("Failed to load course content.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8 text-red-500">
        <p>{error}</p>
        <Button variant="outline" onClick={() => window.location.reload()} className="mt-4">
          Retry
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-xl p-8 text-white shadow-xl relative overflow-hidden border border-blue-800/50">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <Badge className="bg-blue-500/20 text-blue-200 hover:bg-blue-500/30 border-blue-500/50">
              Advanced Certification
            </Badge>
            <Badge variant="outline" className="text-green-300 border-green-500/50">
              Updated 2025
            </Badge>
          </div>
          <h1 className="text-4xl font-bold mb-4 tracking-tight">Vendor Leasing Masterclass</h1>
          <p className="text-blue-100 max-w-3xl text-lg leading-relaxed">
            A comprehensive professional curriculum covering the entire vendor leasing lifecycle. 
            From fundamental accounting principles to advanced negotiation strategies, risk management, and industry best practices.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-lg backdrop-blur-sm border border-white/10">
              <div className="p-2 bg-blue-500/20 rounded-full">
                <BookOpen className="h-5 w-5 text-blue-300" />
              </div>
              <div>
                <p className="text-xs text-blue-200 uppercase font-semibold">Curriculum</p>
                <p className="text-sm font-bold">{lessons.length} Modules</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-lg backdrop-blur-sm border border-white/10">
              <div className="p-2 bg-purple-500/20 rounded-full">
                <Clock className="h-5 w-5 text-purple-300" />
              </div>
              <div>
                <p className="text-xs text-purple-200 uppercase font-semibold">Duration</p>
                <p className="text-sm font-bold">~{lessons.length * 2} Hours</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-lg backdrop-blur-sm border border-white/10">
              <div className="p-2 bg-green-500/20 rounded-full">
                <TrendingUp className="h-5 w-5 text-green-300" />
              </div>
              <div>
                <p className="text-xs text-green-200 uppercase font-semibold">Level</p>
                <p className="text-sm font-bold">Advanced</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-lg backdrop-blur-sm border border-white/10">
              <div className="p-2 bg-amber-500/20 rounded-full">
                <Award className="h-5 w-5 text-amber-300" />
              </div>
              <div>
                <p className="text-xs text-amber-200 uppercase font-semibold">Outcome</p>
                <p className="text-sm font-bold">Certification</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-blue-600/20 to-transparent skew-x-12 transform origin-bottom-left pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Progress & Badge Section */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Trophy className="h-5 w-5 text-amber-500" />
                Recent Achievements
              </h3>
              <Button asChild variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                <Link to="/vendor-leasing-badges">View All Badges</Link>
              </Button>
            </div>
            
            <div className="h-full">
              <BadgeShowcase 
                earnedBadges={earnedBadges} 
                allBadges={badgeMetadata} 
                className="border-none shadow-none p-0"
              />
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1 space-y-6">
          {/* Progress Summary Card */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm border border-blue-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-blue-900 flex items-center gap-2">
                <BarChart2 className="w-5 h-5 text-blue-600" />
                Your Progress
              </h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Course Completion</span>
                  <span className="font-bold text-blue-700">{badgeProgress.percentage}%</span>
                </div>
                <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 rounded-full transition-all duration-500" 
                    style={{ width: `${badgeProgress.percentage}%` }}
                  />
                </div>
              </div>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 shadow-sm">
                <Link to="/vendor-leasing/progress">
                  View Full Analytics
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 flex flex-col items-center justify-center text-center">
            <div className="p-3 bg-blue-100 rounded-full mb-3">
              <FolderOpen className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Course Resources</h3>
            <p className="text-sm text-gray-500 mb-4">Access {resourceCount}+ downloadable templates, checklists, and guides.</p>
            <Button asChild variant="outline" className="w-full gap-2">
              <Link to="/vendor-leasing-resources">
                <Download className="h-4 w-4" /> View Library
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {lessons.map((lesson, index) => (
          <motion.div
            key={lesson.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="h-full"
          >
            <Card className={`h-full flex flex-col hover:shadow-xl transition-all duration-300 border-t-4 group ${
              lesson.lessonNumber >= 7 ? 'border-t-purple-500' : 'border-t-blue-600'
            }`}>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-3">
                  <Badge variant="secondary" className={`
                    ${lesson.lessonNumber >= 7 
                      ? 'bg-purple-50 text-purple-700 border-purple-100' 
                      : 'bg-blue-50 text-blue-700 border-blue-100'}
                  `}>
                    Module {lesson.lessonNumber}
                  </Badge>
                  {lesson.lessonNumber >= 7 && (
                    <Badge className="bg-purple-600 hover:bg-purple-700 text-[10px] px-1.5 h-5">
                      New
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg leading-tight mb-2 group-hover:text-blue-700 transition-colors min-h-[3.5rem]">
                  {lesson.title}
                </CardTitle>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <Clock className="h-3 w-3" />
                  <span>{lesson.duration || 120} mins</span>
                  <span className="text-gray-300">•</span>
                  <span className="capitalize">{lesson.contentType || 'Interactive'}</span>
                </div>
              </CardHeader>
              
              <CardContent className="flex-grow pb-4">
                <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                  {lesson.description}
                </p>
                
                <div className="space-y-2 bg-gray-50 p-3 rounded-md border border-gray-100">
                  <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                    <ShieldCheck className="h-3 w-3" /> Key Outcomes
                  </h4>
                  <p className="text-xs text-gray-700 line-clamp-2 leading-relaxed">
                    {lesson.learningOutcomes}
                  </p>
                </div>
              </CardContent>
              
              <CardFooter className="flex flex-col gap-3 pt-4 border-t bg-gray-50/50 mt-auto">
                <Button 
                  className={`w-full group/btn shadow-sm ${
                    lesson.lessonNumber >= 7 
                      ? 'bg-purple-600 hover:bg-purple-700' 
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                  onClick={() => onSelectLesson(lesson.id, 'content')}
                >
                  <PlayCircle className="mr-2 h-4 w-4 group-hover/btn:text-white/90 transition-colors" />
                  Start Module
                  <ChevronRight className="ml-auto h-4 w-4 opacity-50 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
                
                <div className="grid grid-cols-3 gap-2 w-full">
                  <Button variant="outline" size="sm" className="h-8 text-[10px] px-1 bg-white hover:bg-gray-50" onClick={() => onSelectLesson(lesson.id, 'quiz')}>
                    <HelpCircle className="mr-1 h-3 w-3 text-orange-500" /> Quiz
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 text-[10px] px-1 bg-white hover:bg-gray-50" onClick={() => onSelectLesson(lesson.id, 'resources')}>
                    <Download className="mr-1 h-3 w-3 text-blue-500" /> Files
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 text-[10px] px-1 bg-white hover:bg-gray-50" onClick={() => onSelectLesson(lesson.id, 'casestudy')}>
                    <FileText className="mr-1 h-3 w-3 text-green-500" /> Case
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VendorLeasingDashboard;