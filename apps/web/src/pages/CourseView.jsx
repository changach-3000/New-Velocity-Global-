import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PocketBase from 'pocketbase';
const POCKETBASE_URL = 'https://velocity-global-db-v2.onrender.com';
const pb = new PocketBase(POCKETBASE_URL);
import { useAuth } from '@/contexts/AuthContext';
import { Loader2, Clock, BookOpen, User, CheckCircle, PlayCircle, Lock, AlertCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DownloadSyllabusButton from '@/components/DownloadSyllabusButton';

const CourseView = () => {
  const { courseId } = useParams();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [course, setCourse] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [enrollment, setEnrollment] = useState(null);
  const completedLessonIds = (() => {
    try {
      return new Set(JSON.parse(localStorage.getItem('completedLessons') || '[]'));
    } catch { return new Set(); }
  })();
  const completedCount = lessons.filter(l => completedLessonIds.has(l.id)).length;
  const totalLessons = lessons.length;
  const allComplete = totalLessons > 0 && completedCount === totalLessons;

  useEffect(() => {
    loadCourseData();
  }, [courseId, currentUser]);

  const loadCourseData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Task 3: Fetch Course with error handling
      try {
        const courseData = await pb.collection('courses').getOne(courseId, { $autoCancel: false });
        setCourse(courseData);
      } catch (err) {
        if (err.status === 404) {
          throw new Error("Course not found");
        }
        throw err;
      }

      // 2. Fetch Lessons
      try {
        const lessonsData = await pb.collection('lessons').getFullList({
          filter: `course_id = "${courseId}"`,
          sort: 'order',
          $autoCancel: false
        });
        setLessons(lessonsData);
      } catch (err) {
        console.warn("Error fetching lessons:", err);
        setLessons([]);
      }

      // 3. Check Enrollment
      if (currentUser) {
        try {
          const enrollments = await pb.collection('enrollment').getList(1, 1, {
            filter: `user_id = "${currentUser.id}" && course_id = "${courseId}"`,
            $autoCancel: false
          });

          if (enrollments.items.length > 0) {
            const enroll = enrollments.items[0];
            setEnrollment(enroll);

            // Fetch progress
            const progressRecords = await pb.collection('lesson_progress').getFullList({
              filter: `enrollment_id = "${enroll.id}" && completed = true`,
              $autoCancel: false
            });
          }
        } catch (err) {
          console.error("Error checking enrollment:", err);
        }
      }

    } catch (error) {
      console.error("Error loading course:", error);
      setError(error.message || "Failed to load course data");
    } finally {
      setLoading(false);
    }
  };

  const handleStartLearning = () => {
    if (!enrollment) {
      // If not enrolled, redirect to checkout (or create enrollment if free - assuming paid for now)
      // For this demo, let's assume we need to buy it
      navigate('/cart'); // Or add to cart logic
      return;
    }

    // Resume from last accessed or start first lesson
    const targetLessonId = enrollment.last_accessed_lesson || (lessons.length > 0 ? lessons[0].id : null);
    if (targetLessonId) {
      navigate(`/courses/${courseId}/lessons/${targetLessonId}`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-12 h-12 text-[#1e3a8a] animate-spin" />
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-xl shadow-lg max-w-md">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">Course Not Found</h2>
          <p className="text-gray-600 mb-6">{error === "Course not found" ? "The course you requested could not be found." : error}</p>
          <Link to="/courses">
            <Button className="gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Courses
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <Helmet>
        <title>{`${course.title} - Overview`}</title>
      </Helmet>

      {/* Hero Section */}
      <div className="bg-[#1e3a8a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="text-blue-200 text-sm font-medium mb-4 flex items-center gap-2">
                <Link to="/courses" className="hover:text-white transition-colors">Courses</Link>
                <span>/</span>
                <span className="text-white truncate">{course.title}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{course.title}</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl">{course.description}</p>

              <div className="flex flex-wrap gap-6 text-sm font-medium text-blue-200 mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{course.instructor_name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration_hours || 0} Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  <span>{lessons.length} Lessons</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={handleStartLearning}
                  className="bg-white text-[#1e3a8a] hover:bg-blue-50 text-lg px-8 py-6 font-bold rounded-lg shadow-lg transition-all transform hover:-translate-y-1"
                >
                  {enrollment ? 'Continue Learning' : 'Enroll Now'}
                </Button>

                {/* Syllabus Download Button in Header */}
                <DownloadSyllabusButton
                  course={course}
                  lessons={lessons}
                  className="bg-blue-800 text-white border-blue-700 hover:bg-blue-700 h-auto py-6"
                />
              </div>
            </div>

            <div className="w-full md:w-1/3 lg:w-1/4">
              <div className="bg-white p-2 rounded-xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src={course.image_url || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800'}
                  alt={course.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">

            {totalLessons > 0 && (
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${Math.round((completedCount / totalLessons) * 100)}%` }}
                  />
                </div>
                <span className="whitespace-nowrap font-medium">
                  {allComplete ? '✅ Completed' : `${completedCount} / ${totalLessons} lessons`}
                </span>
              </div>
            )}

            {/* Learning Outcomes */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.learning_outcomes ? (
                    // Assuming JSON string or simple text, handling both safely
                    (() => {
                      try {
                        const outcomes = JSON.parse(course.learning_outcomes);
                        return Array.isArray(outcomes) ? outcomes.map((outcome, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{outcome}</span>
                          </div>
                        )) : <p>{course.learning_outcomes}</p>;
                      } catch (e) {
                        return <p className="text-gray-700">{course.learning_outcomes}</p>;
                      }
                    })()
                  ) : (
                    <p className="text-gray-500 italic">No learning outcomes listed.</p>
                  )}
                </div>
              </div>
            </section>

            {/* Instructor Bio */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Instructor</h2>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 flex items-start gap-6">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-gray-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.instructor_name}</h3>
                  <p className="text-gray-600 leading-relaxed">{course.instructor_bio || "Expert instructor in the field."}</p>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar - Curriculum */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden sticky top-24">
              <div className="p-6 border-b border-gray-200 bg-gray-50">
                <h3 className="font-bold text-gray-900 text-lg">Course Curriculum</h3>
                <p className="text-sm text-gray-500 mt-1">{lessons.length} Lessons</p>
              </div>
              <div className="divide-y divide-gray-100 max-h-[600px] overflow-y-auto">
                {lessons.map((lesson, index) => {
                  const isCompleted = completedLessonIds.includes(lesson.id);
                  const isLocked = !enrollment && index > 0; // Lock all except first preview if not enrolled

                  return (
                    <div
                      key={lesson.id}
                      className={`p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors ${isLocked ? 'opacity-60' : ''}`}
                    >
                      <div className="flex-shrink-0 text-gray-400">
                        {isCompleted ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : isLocked ? (
                          <Lock className="w-5 h-5" />
                        ) : (
                          <PlayCircle className="w-5 h-5" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{index + 1}. {lesson.title}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{lesson.duration ? `${lesson.duration} min` : lesson.content_type}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CourseView;