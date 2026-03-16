import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext.jsx';
import pb from '@/lib/pocketbaseClient';
import EnhancedLessonContent from '@/components/EnhancedLessonContent.jsx';
import { Button } from '@/components/ui/button.jsx';
import { ScrollArea } from '@/components/ui/scroll-area.jsx';
import { Menu, ChevronLeft, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const EnhancedLessonPlayer = () => {
  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  
  const [course, setCourse] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [lessonContent, setLessonContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [completedLessons, setCompletedLessons] = useState(new Set());

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        setLoading(true);
        
        // 1. Fetch Course
        const courseData = await pb.collection('courses').getOne(courseId, { $autoCancel: false });
        setCourse(courseData);

        // 2. Fetch Lessons
        const lessonsResult = await pb.collection('lessons').getFullList({
          filter: `course_id = "${courseId}"`,
          sort: 'order',
          $autoCancel: false,
        });
        setLessons(lessonsResult);

        // 3. Fetch User Progress (Enrollments/LessonProgress)
        if (currentUser) {
          try {
            // Check enrollment
            const enrollments = await pb.collection('enrollments').getFullList({
              filter: `student_id = "${currentUser.id}" && course_id = "${courseId}"`,
              $autoCancel: false,
            });
            
            if (enrollments.length > 0) {
              const enrollment = enrollments[0];
              // Fetch completed lessons from lesson_progress
              const progress = await pb.collection('lesson_progress').getFullList({
                filter: `enrollment_id = "${enrollment.id}" && completed = true`,
                $autoCancel: false,
              });
              
              const completedSet = new Set(progress.map(p => p.lesson_id));
              setCompletedLessons(completedSet);
            }
          } catch (e) {
            console.log("Error fetching progress:", e);
          }
        }

      } catch (err) {
        console.error("Error fetching course data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [courseId, currentUser]);

  useEffect(() => {
    const fetchLessonContent = async () => {
      if (!lessonId) return;
      
      try {
        // Find current lesson object
        const lesson = lessons.find(l => l.id === lessonId);
        setCurrentLesson(lesson);

        if (lesson) {
          // Fetch content
          const contentResult = await pb.collection('lesson_content').getList(1, 1, {
            filter: `lesson_id = "${lessonId}"`,
            $autoCancel: false,
          });
          
          if (contentResult.items.length > 0) {
            setLessonContent(contentResult.items[0]);
          } else {
            setLessonContent(null);
          }
        }
      } catch (err) {
        console.error("Error fetching lesson content:", err);
      }
    };

    if (lessons.length > 0) {
      fetchLessonContent();
    }
  }, [lessonId, lessons]);

  const handleLessonComplete = async () => {
    if (!currentUser || !currentLesson) return;

    try {
      // 1. Find enrollment
      const enrollments = await pb.collection('enrollments').getFullList({
        filter: `student_id = "${currentUser.id}" && course_id = "${courseId}"`,
        $autoCancel: false,
      });

      let enrollmentId;
      if (enrollments.length === 0) {
        // Create enrollment if missing
        const newEnrollment = await pb.collection('enrollments').create({
          student_id: currentUser.id,
          course_id: courseId,
          lessons_completed: 0,
          progress_percentage: 0
        }, { $autoCancel: false });
        enrollmentId = newEnrollment.id;
      } else {
        enrollmentId = enrollments[0].id;
      }

      // 2. Update lesson_progress
      // Check if already exists
      const existingProgress = await pb.collection('lesson_progress').getList(1, 1, {
        filter: `enrollment_id = "${enrollmentId}" && lesson_id = "${currentLesson.id}"`,
        $autoCancel: false,
      });

      if (existingProgress.items.length === 0) {
        await pb.collection('lesson_progress').create({
          enrollment_id: enrollmentId,
          lesson_id: currentLesson.id,
          completed: true,
          completion_date: new Date().toISOString()
        }, { $autoCancel: false });
      } else {
        await pb.collection('lesson_progress').update(existingProgress.items[0].id, {
          completed: true,
          completion_date: new Date().toISOString()
        }, { $autoCancel: false });
      }

      // 3. Update local state
      setCompletedLessons(prev => new Set([...prev, currentLesson.id]));

      // 4. Navigate to next lesson
      const currentIndex = lessons.findIndex(l => l.id === currentLesson.id);
      if (currentIndex < lessons.length - 1) {
        const nextLesson = lessons[currentIndex + 1];
        navigate(`/courses/${courseId}/lessons/${nextLesson.id}`);
      } else {
        // Course completed
        navigate(`/courses/${courseId}`);
      }

    } catch (err) {
      console.error("Error updating progress:", err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4f7ba7]"></div>
      </div>
    );
  }

  if (!course || !currentLesson) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-900">Lesson not found</h2>
          <Button onClick={() => navigate('/courses')} className="mt-4">Back to Courses</Button>
        </div>
      </div>
    );
  }

  const currentIndex = lessons.findIndex(l => l.id === currentLesson.id);
  const isLastLesson = currentIndex === lessons.length - 1;

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar - Desktop */}
      <div className="hidden md:flex w-80 flex-col bg-white border-r border-gray-200 h-full">
        <div className="p-4 border-b border-gray-200">
          <Link to={`/courses/${courseId}`} className="flex items-center text-sm text-gray-500 hover:text-[#4f7ba7] mb-4">
            <ChevronLeft className="w-4 h-4 mr-1" /> Back to Course
          </Link>
          <h2 className="font-bold text-gray-900 line-clamp-2">{course.title}</h2>
          <div className="mt-2 w-full bg-gray-100 rounded-full h-2">
            <div 
              className="bg-[#4f7ba7] h-2 rounded-full transition-all duration-300" 
              style={{ width: `${(completedLessons.size / lessons.length) * 100}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {completedLessons.size} of {lessons.length} lessons completed
          </p>
        </div>
        
        <ScrollArea className="flex-1">
          <div className="p-4 space-y-2">
            {lessons.map((lesson, index) => {
              const isActive = lesson.id === currentLesson.id;
              const isCompleted = completedLessons.has(lesson.id);
              
              return (
                <Link 
                  key={lesson.id} 
                  to={`/courses/${courseId}/lessons/${lesson.id}`}
                  className={cn(
                    "flex items-start gap-3 p-3 rounded-lg transition-colors",
                    isActive ? "bg-blue-50 border border-blue-100" : "hover:bg-gray-50",
                    isCompleted && !isActive ? "text-gray-600" : "text-gray-900"
                  )}
                >
                  <div className="mt-0.5">
                    {isCompleted ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : isActive ? (
                      <div className="w-5 h-5 rounded-full border-2 border-[#4f7ba7] flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#4f7ba7]" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center">
                        <span className="text-[10px] text-gray-500">{index + 1}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className={cn("text-sm font-medium", isActive && "text-[#4f7ba7]")}>
                      {lesson.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{lesson.duration} min</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Mobile Header */}
        <div className="md:hidden bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <Link to={`/courses/${courseId}`} className="text-gray-500">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <h1 className="font-bold text-gray-900 truncate max-w-[200px]">{currentLesson.title}</h1>
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu className="w-6 h-6" />
          </Button>
        </div>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 md:hidden" onClick={() => setSidebarOpen(false)}>
            <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-xl p-4 overflow-y-auto" onClick={e => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-bold text-lg">Course Content</h2>
                <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>Close</Button>
              </div>
              <div className="space-y-2">
                {lessons.map((lesson, index) => (
                  <Link 
                    key={lesson.id} 
                    to={`/courses/${courseId}/lessons/${lesson.id}`}
                    onClick={() => setSidebarOpen(false)}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-lg",
                      lesson.id === currentLesson.id ? "bg-blue-50 text-[#4f7ba7]" : "hover:bg-gray-50"
                    )}
                  >
                    {completedLessons.has(lesson.id) ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <span className="text-xs font-bold text-gray-400 w-4 text-center">{index + 1}</span>
                    )}
                    <span className="text-sm font-medium truncate">{lesson.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Content Area */}
        <ScrollArea className="flex-1 p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            <EnhancedLessonContent 
              lesson={currentLesson}
              content={lessonContent}
              onComplete={handleLessonComplete}
              isLastLesson={isLastLesson}
            />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default EnhancedLessonPlayer;