import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMobileAuth } from '@/contexts/MobileAuthContext';
import { useMobileSettings } from '@/contexts/MobileSettingsContext';
import pb from '@/lib/pocketbaseClient';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft, Bookmark, Share2, Clock, CheckCircle, Briefcase, ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';

const MobileCaseStudyScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useMobileAuth();
  const { darkMode, fontSize, lineSpacing } = useMobileSettings();
  const { toast } = useToast();

  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [quizProgress, setQuizProgress] = useState(0);

  useEffect(() => {
    if (id && currentUser) {
      loadCaseStudy();
      checkBookmarkStatus();
      checkCompletionStatus();
    }
  }, [id, currentUser]);

  const loadCaseStudy = async () => {
    try {
      const record = await pb.collection('vendor_leasing_case_studies').getOne(id, {
        $autoCancel: false
      });
      setCaseStudy(record);
    } catch (error) {
      console.error('Error loading case study:', error);
      toast({ title: 'Error', description: 'Failed to load case study', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const checkBookmarkStatus = async () => {
    try {
      const records = await pb.collection('mobile_user_notes').getFullList({
        filter: `userId="${currentUser.id}" && noteContent~"Bookmark: Case Study ${id}"`,
        $autoCancel: false
      });
      setIsBookmarked(records.length > 0);
    } catch (error) {
      console.error('Error checking bookmark:', error);
    }
  };

  const checkCompletionStatus = async () => {
    // Mock completion check - in real app, check progress collection
    // For now, we'll simulate it
    setCompleted(false);
    setQuizProgress(0); 
  };

  const toggleBookmark = async () => {
    try {
      if (isBookmarked) {
        // Find and delete
        const records = await pb.collection('mobile_user_notes').getFullList({
          filter: `userId="${currentUser.id}" && noteContent~"Bookmark: Case Study ${id}"`,
          $autoCancel: false
        });
        if (records.length > 0) {
          await pb.collection('mobile_user_notes').delete(records[0].id);
        }
        setIsBookmarked(false);
        toast({ title: 'Bookmark Removed' });
      } else {
        // Create
        await pb.collection('mobile_user_notes').create({
          userId: currentUser.id,
          noteContent: `Bookmark: Case Study ${id}`,
          createdDate: new Date().toISOString()
        });
        setIsBookmarked(true);
        toast({ title: 'Bookmarked', description: 'Saved to your notes' });
      }
    } catch (error) {
      console.error('Error toggling bookmark:', error);
      toast({ title: 'Error', description: 'Could not update bookmark', variant: 'destructive' });
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: caseStudy?.title,
        text: `Check out this case study: ${caseStudy?.title}`,
        url: window.location.href,
      });
    } else {
      toast({ title: 'Copied to clipboard' });
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const markAsComplete = async () => {
    try {
      // In a real app, update progress tracking collection
      setCompleted(true);
      toast({ title: 'Marked as Complete', description: 'Great job!' });
    } catch (error) {
      console.error('Error marking complete:', error);
    }
  };

  if (loading) {
    return (
      <div className={cn("min-h-screen flex items-center justify-center", darkMode ? "bg-slate-900" : "bg-gray-50")}>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!caseStudy) return null;

  return (
    <div className={cn("min-h-screen pb-20 transition-colors duration-300", darkMode ? "bg-slate-900 text-slate-100" : "bg-gray-50 text-slate-900")}>
      {/* Header */}
      <div className={cn("sticky top-0 z-10 border-b p-4 flex items-center justify-between backdrop-blur-md", darkMode ? "bg-slate-900/80 border-slate-800" : "bg-white/80 border-gray-200")}>
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className={darkMode ? "text-slate-100 hover:bg-slate-800" : ""}>
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <h1 className="font-bold text-lg truncate max-w-[200px]">{caseStudy.title}</h1>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" onClick={toggleBookmark} className={darkMode ? "text-slate-100 hover:bg-slate-800" : ""}>
            <Bookmark className={cn("w-5 h-5", isBookmarked ? "fill-current text-blue-500" : "")} />
          </Button>
          <Button variant="ghost" size="icon" onClick={handleShare} className={darkMode ? "text-slate-100 hover:bg-slate-800" : ""}>
            <Share2 className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Overview Card */}
        <Card className={cn("border-none shadow-lg", darkMode ? "bg-slate-800 text-slate-100" : "bg-white")}>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-medium text-orange-500">Case Study</span>
            </div>
            <CardTitle className="text-2xl leading-tight">{caseStudy.title}</CardTitle>
            <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>15 min read</span>
              </div>
              <div className={cn("px-2 py-0.5 rounded text-xs font-medium", 
                caseStudy.difficulty === 'advanced' ? "bg-red-100 text-red-700" : 
                caseStudy.difficulty === 'intermediate' ? "bg-yellow-100 text-yellow-700" : 
                "bg-green-100 text-green-700"
              )}>
                {caseStudy.difficulty || 'Intermediate'}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className={cn("leading-relaxed", darkMode ? "text-slate-300" : "text-gray-700")} style={{ fontSize: `${fontSize}px`, lineHeight: lineSpacing }}>
              {caseStudy.scenario}
            </p>
          </CardContent>
        </Card>

        {/* Expandable Sections */}
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="challenge" className={cn("border rounded-lg px-4", darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-gray-200")}>
            <AccordionTrigger className={cn("hover:no-underline py-4 font-semibold text-lg", darkMode ? "text-slate-100" : "text-slate-900")}>
              The Challenge
            </AccordionTrigger>
            <AccordionContent className={cn("pt-2 pb-4", darkMode ? "text-slate-300" : "text-gray-700")} style={{ fontSize: `${fontSize}px`, lineHeight: lineSpacing }}>
              {caseStudy.requirements || "Analyze the customer's financial situation and propose a leasing structure that maximizes tax benefits while minimizing cash flow impact."}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="solution" className={cn("border rounded-lg px-4", darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-gray-200")}>
            <AccordionTrigger className={cn("hover:no-underline py-4 font-semibold text-lg", darkMode ? "text-slate-100" : "text-slate-900")}>
              Proposed Solution
            </AccordionTrigger>
            <AccordionContent className={cn("pt-2 pb-4", darkMode ? "text-slate-300" : "text-gray-700")} style={{ fontSize: `${fontSize}px`, lineHeight: lineSpacing }}>
              {caseStudy.analysisFramework || "Utilize a Fair Market Value (FMV) lease to lower monthly payments and shift obsolescence risk to the lessor."}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="results" className={cn("border rounded-lg px-4", darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-gray-200")}>
            <AccordionTrigger className={cn("hover:no-underline py-4 font-semibold text-lg", darkMode ? "text-slate-100" : "text-slate-900")}>
              Expected Results
            </AccordionTrigger>
            <AccordionContent className={cn("pt-2 pb-4", darkMode ? "text-slate-300" : "text-gray-700")} style={{ fontSize: `${fontSize}px`, lineHeight: lineSpacing }}>
              {caseStudy.expectedOutcome || "Customer achieves 15% lower TCO compared to loan financing and maintains debt covenants."}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Quiz Section */}
        <Card className={cn("border-none shadow-md overflow-hidden", darkMode ? "bg-slate-800" : "bg-blue-50")}>
          <div className="h-2 bg-blue-200 w-full">
            <div className="h-full bg-blue-600" style={{ width: `${quizProgress}%` }}></div>
          </div>
          <CardContent className="p-6">
            <h3 className={cn("font-bold text-lg mb-2", darkMode ? "text-slate-100" : "text-blue-900")}>Test Your Knowledge</h3>
            <p className={cn("text-sm mb-4", darkMode ? "text-slate-400" : "text-blue-700")}>
              Complete the case study quiz to earn your badge.
            </p>
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white gap-2"
              onClick={() => navigate(`/mobile/quiz/${caseStudy.lessonId || '1'}`)} // Fallback to lesson 1 if no lessonId
            >
              Start Quiz <ArrowRight className="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Completion Button */}
        {!completed ? (
          <Button 
            className="w-full py-6 text-lg bg-green-600 hover:bg-green-700 text-white shadow-lg"
            onClick={markAsComplete}
          >
            Mark as Read
          </Button>
        ) : (
          <div className="flex items-center justify-center gap-2 text-green-600 font-bold p-4 bg-green-50 rounded-lg border border-green-200">
            <CheckCircle className="w-6 h-6" />
            <span>Case Study Completed</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileCaseStudyScreen;