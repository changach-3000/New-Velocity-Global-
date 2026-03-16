import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PocketBase from 'pocketbase';
const POCKETBASE_URL = 'https://velocity-global-db-v2.onrender.com';
const pb = new PocketBase(POCKETBASE_URL);
// import pb from '@/lib/pocketbaseClient';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { useEnrollmentCheck } from '@/hooks/useEnrollmentCheck';
import { useProgressTracking } from '@/hooks/useProgressTracking';
import { motion } from 'framer-motion';
import { Clock, User, CheckCircle, ShoppingCart, Loader2, ArrowLeft, AlertCircle, RefreshCw, PlayCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import DownloadSyllabusButton from '@/components/DownloadSyllabusButton';
import { logDataFlow } from '@/utils/DataFlowLogger';

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart, cartItems } = useCart();
  const { currentUser } = useAuth();
  const { toast } = useToast();
  
  const { getCourseProgress, getResumePoint, getTotalTimeSpent, getProgressData } = useProgressTracking();

  // Use enrollment check hook
  const {
    isEnrolled,
    loading: enrollmentLoading,
    error: enrollmentError,
    checkEnrollment
  } = useEnrollmentCheck(id, currentUser);

  const isInCart = cartItems.some((item) => item.id === id);

  useEffect(() => {
    fetchCourseData();
  }, [id]);

  const fetchCourseData = async () => {
    if (!id) return;

    try {
      setLoading(true);
      setError(null);

      // Fetch Course with specific 404 handling
      try {
        const record = await pb.collection('courses').getOne(id, { $autoCancel: false });
        setCourse(record);
        logDataFlow('CourseDetail:CourseFetched', record, { id });
      } catch (err) {
        if (err.status === 404) {
          throw new Error("Course not found");
        }
        throw err;
      }

      // Fetch Lessons
      try {
        const lessonsData = await pb.collection('lessons').getFullList({
          filter: `course_id = "${id}"`,
          sort: 'order',
          $autoCancel: false
        });
        setLessons(lessonsData);
        logDataFlow('CourseDetail:LessonsFetched', lessonsData, { courseId: id });
      } catch (err) {
        console.warn("Could not fetch lessons or no lessons found:", err);
        setLessons([]); // Don't fail the whole page if lessons fail
      }

    } catch (err) {
      console.error("Error fetching course details:", err);
      setError(err.message || "Failed to load course details.");
      logDataFlow('CourseDetail:Error', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    if (isInCart) {
      toast({
        title: 'Already in cart',
        description: 'This course is already in your shopping cart.',
      });
      return;
    }
    addToCart(course);
    toast({
      title: 'Added to cart!',
      description: `${course.title} has been added to your cart.`,
    });
  };

  const handleContinueLearning = () => {
    const resumePoint = getResumePoint(id);
    if (resumePoint && resumePoint.lessonId) {
      navigate(`/lesson/${resumePoint.lessonId}`);
    } else if (lessons.length > 0) {
      navigate(`/lesson/${lessons[0].id}`);
    } else {
      toast({
        title: 'No lessons available',
        description: 'This course currently has no lessons.',
        variant: 'destructive'
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-[#3b82f6] animate-spin mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Loading course details...</p>
        </div>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-xl shadow-lg max-w-md">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <p className="text-red-600 text-lg font-semibold mb-2">Course not found</p>
          <p className="text-gray-600 mb-4">{error === "Course not found" ? "The course you are looking for does not exist or has been removed." : error}</p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" onClick={fetchCourseData}>
              <RefreshCw className="w-4 h-4 mr-2" /> Retry
            </Button>
            <Link to="/courses" className="text-[#3b82f6] hover:underline flex items-center">
              Back to Courses
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const learningOutcomes = course.learning_outcomes
    ? course.learning_outcomes.split('\n').filter((item) => item.trim())
    : [];

  const progressPercentage = getCourseProgress(id, lessons.length);
  const isCourseComplete = progressPercentage === 100;
  
  // Calculate estimated time remaining based on total time spent and progress
  const totalTimeSpent = getProgressData().totalTimeSpent || 0;
  let estimatedTimeText = course.duration_hours ? `${course.duration_hours} hours` : 'Self-paced';
  
  if (progressPercentage > 0 && progressPercentage < 100 && totalTimeSpent > 0) {
    const estimatedTotalMinutes = (totalTimeSpent / progressPercentage) * 100;
    const remainingMinutes = Math.max(0, estimatedTotalMinutes - totalTimeSpent);
    const remainingHours = Math.round(remainingMinutes / 60);
    if (remainingHours > 0) {
      estimatedTimeText = `~${remainingHours} hours remaining`;
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{`${course.title} - Master the Art of Leasing`}</title>
        <meta name="description" content={course.description || `Learn ${course.title} with ${course.instructor_name}`} />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/courses" className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Courses
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {course.title}
          </motion.h1>

          <div className="mt-6">
            <DownloadSyllabusButton
              course={course}
              lessons={lessons}
              className="bg-white/10 text-white border-white/20 hover:bg-white/20"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
            >
              <img
                src={course.image_url || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200'}
                alt={course.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-[#1e3a8a]">Course Description</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">{course.description}</p>

                {learningOutcomes.length > 0 && (
                  <>
                    <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">What You'll Learn</h3>
                    <ul className="space-y-3">
                      {learningOutcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </motion.div>

            {/* Curriculum Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Course Curriculum</h2>
              {lessons.length > 0 ? (
                <div className="space-y-3">
                  {lessons.map((lesson, idx) => (
                    <div key={lesson.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="flex items-center gap-3">
                        <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                          {idx + 1}
                        </span>
                        <div>
                          <p className="font-medium text-gray-900">{lesson.title}</p>
                          <p className="text-xs text-gray-500 capitalize">{lesson.content_type}</p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{lesson.duration ? `${lesson.duration} min` : ''}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">Curriculum details coming soon.</p>
              )}
            </motion.div>

            {/* Instructor Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Your Instructor</h2>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-[#3b82f6] rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  {course.instructor_name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.instructor_name}</h3>
                  <p className="text-gray-600 leading-relaxed">{course.instructor_bio}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl shadow-lg p-8 sticky top-8"
            >
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-[#1e3a8a] mb-2">
                  ${course.price?.toFixed(2)}
                </div>
                <p className="text-gray-600">One-time payment</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-gray-700">
                  <Clock className="w-5 h-5 text-[#3b82f6]" />
                  <span>{estimatedTimeText}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <User className="w-5 h-5 text-[#3b82f6]" />
                  <span>Expert instructor</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#3b82f6]" />
                  <span>Full lifetime access</span>
                </div>
              </div>

              {/* Progress Bar for Enrolled Users */}
              {isEnrolled && !enrollmentLoading && (
                <div className="mb-6">
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-gray-700">Course Progress</span>
                    <span className="text-blue-600">{progressPercentage}%</span>
                  </div>
                  <Progress value={progressPercentage} className="h-2 bg-gray-100" indicatorClassName="bg-blue-600" />
                </div>
              )}

              {/* Dynamic Button based on Enrollment */}
              {enrollmentLoading ? (
                <Button disabled className="w-full py-6">
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  Checking Access...
                </Button>
              ) : isEnrolled ? (
                <Button 
                  onClick={handleContinueLearning}
                  className={`w-full py-6 text-lg font-bold shadow-lg hover:shadow-xl gap-2 ${isCourseComplete ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-blue-600 hover:bg-blue-700'}`}
                >
                  {isCourseComplete ? <CheckCircle className="w-6 h-6" /> : <PlayCircle className="w-6 h-6" />}
                  {isCourseComplete ? 'Completed — Review Course' : 'Continue Learning'}
                </Button>
              ) : (
                <Link to={`/checkout?courseId=${course.id}`}>
                  <Button className="w-full py-6 text-lg font-bold bg-[#3b82f6] hover:bg-[#1e3a8a] shadow-lg hover:shadow-xl gap-2">
                    <ShoppingCart className="w-6 h-6" />
                    Buy Course
                  </Button>
                </Link>
              )}

              {!isEnrolled && !enrollmentLoading && (
                <button
                  onClick={handleAddToCart}
                  disabled={isInCart}
                  className={`w-full mt-3 py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${isInCart
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-[#3b82f6] hover:bg-blue-50 border border-[#3b82f6]'
                    }`}
                >
                  {isInCart ? 'Already in Cart' : 'Add to Cart'}
                </button>
              )}

              {enrollmentError && (
                <div className="mt-4 text-xs text-red-500 text-center">
                  Error checking enrollment status. <button onClick={checkEnrollment} className="underline">Retry</button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;