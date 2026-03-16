import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import pb from '@/lib/pocketbaseClient';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2, Menu, X, ChevronLeft, AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import VideoLesson from '@/components/VideoLesson';
import TextLesson from '@/components/TextLesson';
import QuizLesson from '@/components/QuizLesson';
import AssignmentLesson from '@/components/AssignmentLesson';
import CurriculumSidebar from '@/components/CurriculumSidebar';
import LessonNavigation from '@/components/LessonNavigation';
import ProgressBar from '@/components/ProgressBar';
import LessonResources from '@/components/LessonResources';

const LessonPlayer = () => {
  const { courseId, lessonId } = useParams();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [course, setCourse] = useState(null);
  const [lesson, setLesson] = useState(null);
  const [lessonContent, setLessonContent] = useState(null);
  const [allLessons, setAllLessons] = useState([]);
  const [completedLessonIds, setCompletedLessonIds] = useState([]);
  const [enrollment, setEnrollment] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Related Content
  const [quizzes, setQuizzes] = useState([]);
  const [caseStudies, setCaseStudies] = useState([]);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    loadLessonData();
  }, [courseId, lessonId, currentUser]);

  const loadLessonData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // 1. Fetch Course
      const courseData = await pb.collection('courses').getOne(courseId, { $autoCancel: false });
      setCourse(courseData);

      // 2. Fetch All Lessons for Sidebar
      const lessonsData = await pb.collection('lessons').getFullList({
        filter: `course_id = "${courseId}"`,
        sort: 'order',
        $autoCancel: false
      });
      setAllLessons(lessonsData);

      // 3. Fetch Current Lesson
      const currentLesson = await pb.collection('lessons').getOne(lessonId, { $autoCancel: false });
      setLesson(currentLesson);

      // 4. Fetch Lesson Content
      try {
        const contentList = await pb.collection('lesson_content').getList(1, 1, {
          filter: `lesson_id = "${lessonId}"`,
          $autoCancel: false
        });
        setLessonContent(contentList.items[0] || null);
      } catch (e) {
        console.warn("Lesson content fetch failed or empty", e);
      }

      // 5. Fetch Related Content (Quizzes, Case Studies, Resources)
      // Removed Glossaries fetch as per audit requirements
      const [quizList, caseStudyList, resourceList] = await Promise.all([
        pb.collection('quizzes').getFullList({ filter: `lesson_id = "${lessonId}"`, $autoCancel: false }).catch(() => []),
        pb.collection('case_studies').getFullList({ filter: `course_module = "${lessonId}"`, $autoCancel: false }).catch(() => []),
        pb.collection('lesson_resources').getFullList({ filter: `lesson_id = "${lessonId}"`, $autoCancel: false }).catch(() => [])
      ]);

      setQuizzes(quizList);
      setCaseStudies(caseStudyList);
      setResources(resourceList);

      // 6. Fetch Enrollment & Progress
      if (currentUser) {
        const enrollments = await pb.collection('enrollments').getList(1, 1, {
          filter: `student_id = "${currentUser.id}" && course_id = "${courseId}"`,
          $autoCancel: false
        });
        
        if (enrollments.items.length > 0) {
          const enroll = enrollments.items[0];
          setEnrollment(enroll);
          
          // Fetch completed lessons
          const progressRecords = await pb.collection('lesson_progress').getFullList({
            filter: `enrollment_id = "${enroll.id}" && completed = true`,
            $autoCancel: false
          });
          setCompletedLessonIds(progressRecords.map(p => p.lesson_id));
          
          // Update last accessed
          await pb.collection('enrollments').update(enroll.id, {
            last_accessed: new Date(),
            last_accessed_lesson: lessonId,
            last_accessed_date: new Date()
          }, { $autoCancel: false });
        }
      }

    } catch (error) {
      console.error("Error loading lesson:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLessonComplete = async () => {
    if (!enrollment || completedLessonIds.includes(lessonId)) return;

    try {
      const existingProgress = await pb.collection('lesson_progress').getList(1, 1, {
        filter: `enrollment_id = "${enrollment.id}" && lesson_id = "${lessonId}"`,
        $autoCancel: false
      });

      if (existingProgress.items.length > 0) {
        await pb.collection('lesson_progress').update(existingProgress.items[0].id, {
          completed: true,
          completion_date: new Date()
        }, { $autoCancel: false });
      } else {
        await pb.collection('lesson_progress').create({
          enrollment_id: enrollment.id,
          lesson_id: lessonId,
          completed: true,
          completion_date: new Date()
        }, { $autoCancel: false });
      }

      setCompletedLessonIds(prev => [...prev, lessonId]);

      const newCompletedCount = completedLessonIds.length + 1;
      const totalLessons = allLessons.length;
      const percentage = Math.round((newCompletedCount / totalLessons) * 100);

      await pb.collection('enrollments').update(enrollment.id, {
        lessons_completed: newCompletedCount,
        progress_percentage: percentage,
        completion_percentage: percentage
      }, { $autoCancel: false });

    } catch (error) {
      console.error("Error marking lesson complete:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-12 h-12 text-[#1e3a8a] animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">Failed to load lesson</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <Button onClick={loadLessonData} className="gap-2">
            <RefreshCw className="w-4 h-4" /> Retry
          </Button>
        </div>
      </div>
    );
  }

  if (!lesson) return <div>Lesson not found</div>;

  const currentIndex = allLessons.findIndex(l => l.id === lessonId);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;
  const progressPercentage = Math.round((completedLessonIds.length / allLessons.length) * 100);

  return (
    <div className="flex h-[calc(100vh-64px)] bg-gray-50 overflow-hidden">
      <Helmet>
        <title>{`${lesson.title} - ${course?.title}`}</title>
      </Helmet>

      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden fixed bottom-4 right-4 z-50">
        <Button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="rounded-full w-12 h-12 shadow-lg bg-[#1e3a8a]"
        >
          {sidebarOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-40 w-80 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <CurriculumSidebar 
          course={course}
          lessons={allLessons}
          currentLessonId={lessonId}
          completedLessonIds={completedLessonIds}
          progress={progressPercentage}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto w-full" onClick={() => setSidebarOpen(false)}>
        <div className="max-w-4xl mx-auto px-4 py-8">
          
          {/* Header */}
          <div className="mb-8">
            <Link to={`/courses/${courseId}`} className="inline-flex items-center text-sm text-gray-500 hover:text-[#1e3a8a] mb-4">
              <ChevronLeft className="w-4 h-4 mr-1" /> Back to Course Home
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{lesson.title}</h1>
            <ProgressBar current={currentIndex + 1} total={allLessons.length} />
          </div>

          {/* Lesson Content Tabs */}
          <Tabs defaultValue="content" className="w-full mb-8">
            <TabsList className="grid w-full grid-cols-4 mb-4">
              <TabsTrigger value="content">Lesson</TabsTrigger>
              <TabsTrigger value="quiz" disabled={quizzes.length === 0}>Quiz</TabsTrigger>
              <TabsTrigger value="casestudy" disabled={caseStudies.length === 0}>Case Study</TabsTrigger>
              <TabsTrigger value="resources" disabled={resources.length === 0}>Resources</TabsTrigger>
            </TabsList>

            <TabsContent value="content" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8 min-h-[400px]">
              {lesson.content_type === 'video' && (
                <VideoLesson content={lessonContent} onComplete={handleLessonComplete} />
              )}
              {lesson.content_type === 'text' && (
                <TextLesson content={lessonContent} onComplete={handleLessonComplete} />
              )}
              {lesson.content_type === 'quiz' && (
                <QuizLesson lessonId={lessonId} onComplete={handleLessonComplete} />
              )}
              {lesson.content_type === 'assignment' && (
                <AssignmentLesson lessonId={lessonId} onComplete={handleLessonComplete} />
              )}
              {!lessonContent && !['quiz', 'assignment'].includes(lesson.content_type) && (
                <div className="text-center py-12">
                  <p className="text-gray-500">Content not available for this lesson.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="quiz">
              {quizzes.map(quiz => (
                <div key={quiz.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-4">
                  <h3 className="text-xl font-bold mb-4">{quiz.title}</h3>
                  <QuizLesson lessonId={lessonId} quizId={quiz.id} onComplete={handleLessonComplete} />
                </div>
              ))}
            </TabsContent>

            <TabsContent value="casestudy">
              {caseStudies.map(study => (
                <div key={study.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-4">
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-gray-700 mb-4">{study.scenario}</p>
                  <Button variant="outline">View Full Case Study</Button>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="resources">
              <LessonResources 
                resources={resources} 
                lessonContentRecord={lessonContent} 
              />
            </TabsContent>
          </Tabs>

          {/* Navigation */}
          <LessonNavigation 
            prevLesson={prevLesson} 
            nextLesson={nextLesson} 
            courseId={courseId} 
          />

        </div>
      </div>
    </div>
  );
};

export default LessonPlayer;