import React, { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext.jsx";
import PocketBase from "pocketbase";
const POCKETBASE_URL = "https://velocity-global-db-v2.onrender.com";
const pb = new PocketBase(POCKETBASE_URL);
import StatsCard from "@/components/StatsCard.jsx";
import CourseCard from "@/components/CourseCard.jsx";
import StreakCard from "@/components/StreakCard.jsx";
import MembershipDashboardWidget from "@/components/MembershipDashboardWidget.jsx";
import {
  BookOpen,
  Award,
  TrendingUp,
  Loader2,
  Lightbulb,
  CheckCircle,
  Sparkles,
  Target,
  PlayCircle,
  ArrowRight,
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";

const CustomerDashboard = () => {
  const { currentUser } = useAuth();
  const [recommendedCourses, setRecommendedCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [trackingData, setTrackingData] = useState([]);
  const [lessonsData, setLessonsData] = useState({});
  const [loading, setLoading] = useState(true);

  const RECOMMENDED_TITLES = [
    "Introduction to IFRS 16",
    "Lease Accounting Standards (IFRS 16 & ASC 842)",
    "Lessee Accounting under IFRS 16",
    "Lessor Accounting under IFRS 16",
    "Transition and Impact Analysis"
  ];

  useEffect(() => {
    const fetchData = async () => {
      if (!currentUser?.id) return;

      try {
        setLoading(true);

        // 1. Fetch All Courses for recommendations
        const allCourses = await pb.collection("courses").getFullList({
          sort: "-created",
          $autoCancel: false,
        });

        const recommended = allCourses.filter((c) =>
          RECOMMENDED_TITLES.includes(c.title),
        );
        setRecommendedCourses(recommended);

        // 2. Fetch Lesson Tracking for current user
        const trackingRecords = await pb
          .collection("lesson_tracking")
          .getFullList({
            filter: `user_id = "${currentUser.id}"`,
            $autoCancel: false,
          });
        setTrackingData(trackingRecords);

        // 3. Fetch Lessons to get duration
        const lessonIds = [...new Set(trackingRecords.map((r) => r.lesson_id))];
        const lessonsMap = {};

        if (lessonIds.length > 0) {
          const allLessons = await pb.collection("lessons").getFullList({
            $autoCancel: false,
          });

          allLessons.forEach((l) => {
            lessonsMap[l.id] = l;
          });
        }
        setLessonsData(lessonsMap);

        // 4. Fetch Enrolled Courses
        const enrollments = await pb.collection("enrollment").getFullList({
          filter: `user_id = "${currentUser.id}"`,
          $autoCancel: false,
        });

        const enrolled = enrollments
          .map((enrollment) => {
            const course = allCourses.find(
              (c) => c.id === enrollment.course_id,
            );
            return course;
          })
          .filter(Boolean); // Remove any null values

        setEnrolledCourses(enrolled);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentUser?.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-500 mx-auto mb-4" />
          <p className="text-slate-400 text-lg font-medium">
            Loading your dashboard...
          </p>
        </div>
      </div>
    );
  }

  // Calculate Stats
  const completedLessons = trackingData.filter((t) => t.completed);
  const inProgressLessons = trackingData.filter((t) => !t.completed);

  // Group tracking by course
  const coursesProgress = {};
  trackingData.forEach((t) => {
    const lesson = lessonsData[t.lesson_id];
    if (lesson && lesson.course_id) {
      if (!coursesProgress[lesson.course_id]) {
        coursesProgress[lesson.course_id] = {
          total: 0,
          completed: 0,
          id: lesson.course_id,
        };
      }
      coursesProgress[lesson.course_id].total++;
      if (t.completed) coursesProgress[lesson.course_id].completed++;
    }
  });

  const completedCoursesCount = Object.values(coursesProgress).filter(
    (c) => c.completed === c.total && c.total > 0,
  ).length;
  const inProgressCoursesCount = Object.values(coursesProgress).filter(
    (c) => c.completed < c.total || c.completed === 0,
  ).length;

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-12 font-sans selection:bg-blue-500 selection:text-white">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-slate-900 via-blue-950/20 to-slate-950 pt-24 pb-32 px-4 relative overflow-hidden border-b border-slate-800/50">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <Sparkles className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
                Dashboard
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-slate-400">
              Welcome back, <br />
              {currentUser?.name || "Valued Customer"}!
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed max-w-2xl mb-8">
              Track your progress, resume your learning, and master the
              essentials of equipment leasing.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4">
              <Link to="/courses">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20 font-semibold gap-2 rounded-full px-8"
                >
                  <BookOpen className="w-4 h-4" />
                  Browse Courses
                </Button>
              </Link>
              <Link to="/courses-lessons">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white font-semibold gap-2 rounded-full px-8"
                >
                  <PlayCircle className="w-4 h-4" />
                  Continue Learning
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-20">
        {/* Membership Widget */}
        <MembershipDashboardWidget />

        {/* Learning Progress Section */}
        <StreakCard className="mb-8" showCourses={true} />

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <motion.div variants={itemVariants}>
            <StatsCard
              title="Lessons Completed"
              value={completedLessons.length}
              icon={CheckCircle}
              className="border-t-4 border-t-emerald-500"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <StatsCard
              title="Courses In Progress"
              value={inProgressCoursesCount}
              icon={TrendingUp}
              className="border-t-4 border-t-blue-500"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <StatsCard
              title="Courses Completed"
              value={completedCoursesCount}
              icon={Award}
              className="border-t-4 border-t-amber-500"
            />
          </motion.div>
        </motion.div>

        {/* Learning Progress */}
        {inProgressLessons.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-slate-800 relative overflow-hidden group hover:border-blue-500/20 transition-colors duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                    <Target className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      Your Progress
                    </h2>
                    <p className="text-slate-400">Keep up the momentum!</p>
                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <div className="text-3xl font-bold text-blue-400">
                    {completedLessons.length}
                  </div>
                  <div className="text-sm text-slate-500">
                    lessons completed
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-3 relative z-10">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300 font-medium">
                    Overall Completion
                  </span>
                  <span className="text-blue-400 font-bold">
                    {trackingData.length > 0
                      ? Math.round(
                          (completedLessons.length / trackingData.length) * 100,
                        )
                      : 0}
                    %
                  </span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden border border-slate-700/50">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${trackingData.length > 0 ? (completedLessons.length / trackingData.length) * 100 : 0}%`,
                    }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-gradient-to-r from-blue-600 to-blue-400 h-3 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                  ></motion.div>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Enrolled Courses Section */}
        {enrolledCourses.length > 0 && (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-16"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    My Enrolled Courses
                  </h2>
                  <p className="text-slate-400">
                    Continue learning from your courses
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
              {enrolledCourses.map((course) => {
                const progressData = coursesProgress[course.id];
                const progressPercentage = progressData
                  ? Math.round(
                      (progressData.completed / progressData.total) * 100,
                    )
                  : 0;

                return (
                 <motion.div key={course.id} variants={itemVariants} className="h-full">
                    <CourseCard
                      course={course}
                      actionLabel="Continue Learning"
                      // progress={
                      //   progressData
                      //     ? {
                      //         progressPercentage: progressPercentage,
                      //         status:
                      //           progressPercentage === 100
                      //             ? "completed"
                      //             : "in_progress",
                      //       }
                      //     : null
                      // }
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        )}

        {/* Recommended Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20">
                <Lightbulb className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Recommended for You
                </h2>
                <p className="text-slate-400">
                  Start with these essential courses
                </p>
              </div>
            </div>
            <Link to="/courses">
              <Button
                variant="ghost"
                className="gap-2 text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {recommendedCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedCourses.map((course, index) => (
                <motion.div key={course.id} variants={itemVariants}>
                  <CourseCard course={course} actionLabel="Start Learning" />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              variants={itemVariants}
              className="bg-slate-900/50 backdrop-blur-sm rounded-2xl shadow-lg p-12 text-center border border-slate-800"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-800 rounded-full mb-4 border border-slate-700">
                <BookOpen className="w-8 h-8 text-slate-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                No Recommendations Yet
              </h3>
              <p className="text-slate-400 mb-6 max-w-md mx-auto">
                Browse our course catalog to find courses that match your
                learning goals
              </p>
              <Link to="/courses">
                <Button className="gap-2 bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20">
                  <BookOpen className="w-4 h-4" />
                  Browse All Courses
                </Button>
              </Link>
            </motion.div>
          )}
        </motion.section>

        {/* Learning Tips */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-2xl shadow-xl p-8 border border-blue-800/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>

            <div className="flex items-start gap-6 relative z-10">
              <div className="p-4 bg-blue-500/20 rounded-2xl backdrop-blur-sm border border-blue-400/20 shrink-0">
                <Sparkles className="w-8 h-8 text-blue-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 text-white">
                  Pro Tip for Success
                </h3>
                <p className="text-blue-100/80 leading-relaxed text-lg">
                  Consistency is key. Completing just one lesson per day builds
                  a powerful learning habit. Equipment leasing concepts are best
                  retained through regular, focused study sessions rather than
                  cramming.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default CustomerDashboard;
