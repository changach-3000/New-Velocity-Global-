import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import pb from '@/lib/pocketbaseClient';
import { Loader2, Clock, Award, BookOpen, PlayCircle, TrendingUp, Target, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Components
import LearningPathwayCard from '@/components/LearningPathwayCard';
import BadgeShowcase from '@/components/BadgeShowcase';
import ResourcesSection from '@/components/ResourcesSection';

const StudentDashboard = () => {
  const { currentUser, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // Data states
  const [enrollments, setEnrollments] = useState([]);
  const [studentBadges, setStudentBadges] = useState([]);
  const [allBadges, setAllBadges] = useState([]);
  const [pathways, setPathways] = useState([]);
  const [progressMap, setProgressMap] = useState({}); // Map enrollmentId -> { started: bool, completedLessons: number, totalLessons: number }

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login?redirect=/dashboard');
      return;
    }
    fetchDashboardData();
  }, [isAuthenticated, navigate]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);

      // 1. Fetch Enrollments with expanded course data
      const enrollmentsData = await pb.collection('enrollments').getFullList({
        filter: `student_id = "${currentUser.id}"`,
        expand: 'course',
        sort: '-last_accessed',
        $autoCancel: false,
      });

      // 2. Fetch Lesson Tracking to calculate progress
      // We fetch all lesson_tracking records for the user
      let allTracking = [];
      try {
        allTracking = await pb.collection('lesson_tracking').getFullList({
          filter: `user_id = "${currentUser.id}"`,
          $autoCancel: false
        });
      } catch (err) {
        // Could not fetch lesson tracking
      }

      // Process progress data
      const progressMapping = {};
      
      enrollmentsData.forEach(enrollment => {
        const enrollmentTracking = allTracking.filter(t => t.enrollment_id === enrollment.id);
        const completedCount = enrollmentTracking.filter(t => t.completed).length;
        const totalLessons = enrollment.total_lessons || enrollment.expand?.course?.total_lessons || 10; // Fallback
        
        // Calculate percentage based on tracking records
        const calculatedPercentage = totalLessons > 0 
          ? Math.round((completedCount / totalLessons) * 100) 
          : 0;

        progressMapping[enrollment.id] = {
          started: enrollmentTracking.length > 0,
          completedLessons: completedCount,
          totalLessons: totalLessons,
          percentage: Math.min(calculatedPercentage, 100) // Cap at 100%
        };
      });
      setProgressMap(progressMapping);

      // 3. Fetch Student Badges with expanded badge data
      const studentBadgesData = await pb.collection('student_badges').getFullList({
        filter: `student_id = "${currentUser.id}"`,
        expand: 'badge',
        sort: '-earned_date',
        $autoCancel: false,
      });

      // 4. Fetch All Badges (for showcase stats)
      const allBadgesData = await pb.collection('badges').getFullList({
        sort: 'points',
        $autoCancel: false,
      });

      // 5. Fetch Pathways
      const pathwaysData = await pb.collection('pathways').getFullList({
        sort: 'name',
        $autoCancel: false,
      });

      setEnrollments(enrollmentsData);
      setStudentBadges(studentBadgesData);
      setAllBadges(allBadgesData);
      setPathways(pathwaysData);

    } catch (error) {
      // Error fetching dashboard data
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) return null;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  // Derived Stats
  const completedCourses = enrollments.filter(e => {
    const progress = progressMap[e.id];
    return progress?.percentage === 100;
  }).length;
  
  // "In Progress" means started (has tracking records) but not 100% complete
  const inProgressCourses = enrollments.filter(e => {
    const progress = progressMap[e.id];
    return progress?.started && progress?.percentage < 100;
  }).length;

  const totalHours = enrollments.reduce((sum, e) => sum + (e.lessons_completed || 0) * 0.5, 0);
  const coursesList = enrollments.map(e => e.expand?.course).filter(Boolean);
  
  const averageProgress = enrollments.length > 0
    ? Math.round(enrollments.reduce((sum, e) => sum + (progressMap[e.id]?.percentage || 0), 0) / enrollments.length)
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Helmet>
        <title>Dashboard - Master the Art of Leasing</title>
      </Helmet>

      {/* 1. Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-12 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Welcome Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="text-blue-200 text-sm font-medium uppercase tracking-wider">Your Learning Hub</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              Welcome back, {currentUser?.name || currentUser?.full_name || 'Student'}!
            </h1>
            <p className="text-blue-100 text-lg">
              Continue your journey to mastering equipment leasing
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-center justify-between mb-3">
                <BookOpen className="w-8 h-8 text-blue-200" />
                <div className="bg-blue-500/30 px-2 py-1 rounded-full">
                  <TrendingUp className="w-4 h-4 text-blue-100" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">{enrollments.length}</div>
              <div className="text-sm text-blue-200">Total Courses</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-center justify-between mb-3">
                <Target className="w-8 h-8 text-green-300" />
                <div className="bg-green-500/30 px-2 py-1 rounded-full">
                  <span className="text-xs font-bold text-green-100">{averageProgress}%</span>
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">{completedCourses}</div>
              <div className="text-sm text-blue-200">Completed</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-center justify-between mb-3">
                <Award className="w-8 h-8 text-amber-300" />
                <div className="bg-amber-500/30 px-2 py-1 rounded-full">
                  <Sparkles className="w-4 h-4 text-amber-100" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">{studentBadges.length}</div>
              <div className="text-sm text-blue-200">Badges Earned</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-center justify-between mb-3">
                <Clock className="w-8 h-8 text-purple-300" />
                <div className="bg-purple-500/30 px-2 py-1 rounded-full">
                  <span className="text-xs font-bold text-purple-100">Time</span>
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">{Math.round(totalHours)}h</div>
              <div className="text-sm text-blue-200">Learning Time</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* 2. Continue Learning - Quick Access */}
        {inProgressCourses > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-6">
              <PlayCircle className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Continue Learning</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {enrollments
                .filter(e => {
                  const progress = progressMap[e.id];
                  return progress?.started && progress?.percentage < 100;
                })
                .slice(0, 2)
                .map((enrollment) => {
                  const course = enrollment.expand?.course;
                  if (!course) return null;
                  const progress = progressMap[enrollment.id];

                  return (
                    <Card key={enrollment.id} className="bg-gradient-to-br from-blue-50 to-white border-0 shadow-lg hover:shadow-xl transition-all">
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                            {course.title.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">{course.title}</h3>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-sm text-gray-600">
                                <span>Progress</span>
                                <span className="font-semibold text-blue-700">{progress?.percentage || 0}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all"
                                  style={{ width: `${progress?.percentage || 0}%` }}
                                ></div>
                              </div>
                            </div>
                            <Link to={`/course/${course.id}`}>
                              <Button size="sm" className="mt-3 bg-blue-600 hover:bg-blue-700">
                                Continue →
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
            </div>
          </section>
        )}

        {/* 3. My Courses Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">My Courses</h2>
              <p className="text-gray-600">All your enrolled courses in one place</p>
            </div>
            <Link to="/courses-lessons">
              <Button variant="outline" className="gap-2">
                <BookOpen className="w-4 h-4" />
                Browse Catalog
              </Button>
            </Link>
          </div>

          {enrollments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrollments.map((enrollment) => {
                const course = enrollment.expand?.course;
                if (!course) return null;
                const progress = progressMap[enrollment.id];
                const isCompleted = progress?.percentage === 100;

                return (
                  <Card key={enrollment.id} className="group flex flex-col h-full hover:shadow-xl transition-all border-0 shadow-lg overflow-hidden">
                    {/* Course Image */}
                    <div className="h-48 bg-gray-200 relative overflow-hidden">
                      {isCompleted && (
                        <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10 flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          Completed
                        </div>
                      )}
                      {course.image_url ? (
                        <img
                          src={course.image_url}
                          alt={course.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-4xl font-bold">
                          {course.title.charAt(0)}
                        </div>
                      )}
                    </div>

                    <CardContent className="flex-1 flex flex-col p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-4">
                        Enrolled {new Date(enrollment.created).toLocaleDateString()}
                      </p>

                      <div className="mt-auto space-y-4">
                        {/* Progress Bar */}
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Progress</span>
                            <span className="font-semibold text-gray-900">{progress?.percentage || 0}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                              className={`h-2.5 rounded-full transition-all ${isCompleted
                                  ? 'bg-gradient-to-r from-green-500 to-green-600'
                                  : 'bg-gradient-to-r from-blue-500 to-blue-600'
                                }`}
                              style={{ width: `${progress?.percentage || 0}%` }}
                            ></div>
                          </div>
                        </div>

                        <Link to={`/course/${course.id}`}>
                          <Button className="w-full gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                            <PlayCircle className="w-4 h-4" />
                            {isCompleted ? 'Review Course' : 'Continue Learning'}
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <Card className="text-center py-16 bg-white border-0 shadow-lg">
              <CardContent>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  <BookOpen className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses yet</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Start your learning journey by enrolling in your first course
                </p>
                <Link to="/courses-lessons">
                  <Button size="lg" className="gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                    <BookOpen className="w-5 h-5" />
                    Browse Course Catalog
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </section>

        {/* 4. Learning Pathways */}
        {pathways.length > 0 && (
          <section>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Recommended Pathways</h2>
              <p className="text-gray-600">Curated learning tracks for your career growth</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pathways.map((pathway) => (
                <LearningPathwayCard key={pathway.id} pathway={pathway} />
              ))}
            </div>
          </section>
        )}

        {/* 5. Badge Showcase */}
        <section>
          <BadgeShowcase earnedBadges={studentBadges} allBadges={allBadges} />
        </section>

        {/* 6. Resources Section */}
        {coursesList.length > 0 && (
          <section>
            <ResourcesSection courses={coursesList} />
          </section>
        )}

      </div>
    </div>
  );
};

export default StudentDashboard;