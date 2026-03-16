
import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AuthProvider } from '@/contexts/AuthContext.jsx';
import { CartProvider } from '@/contexts/CartContext.jsx';
import { CourseDataProvider } from '@/contexts/CourseDataContext.jsx';
import ChatBotProvider from '@/components/ChatBot/ChatBotProvider.jsx';
import { Toaster } from '@/components/ui/toaster.jsx';
import ScrollToTop from '@/components/ScrollToTop.jsx';
import ErrorBoundary from '@/components/ErrorBoundary.jsx';
import ProtectedRoute from '@/components/ProtectedRoute.jsx';
import { runDataAudit } from '@/utils/DataAuditUtility.js';

// Core Components
import Header from '@/components/Header.jsx';
import HomePage from '@/components/HomePage.jsx';
import DashboardRouter from '@/components/DashboardRouter.jsx';

// Auth Pages
import LoginPage from '@/pages/LoginPage.jsx';
import SignupPage from '@/pages/SignupPage.jsx';
import PasswordResetPage from '@/pages/PasswordResetPage.jsx';
import UserProfilePage from '@/pages/UserProfilePage.jsx';

// Existing Pages
import CourseCatalog from '@/pages/CourseCatalog.jsx';
import CourseDetail from '@/pages/CourseDetail.jsx';
import CourseView from '@/pages/CourseView.jsx';
import EnhancedLessonPlayer from '@/pages/EnhancedLessonPlayer.jsx';
import StudentDashboard from '@/pages/StudentDashboard.jsx';
import ShoppingCart from '@/pages/ShoppingCart.jsx';
import CheckoutPage from '@/pages/CheckoutPage.jsx';
import SuccessPage from '@/pages/SuccessPage.jsx';
import CancelPage from '@/pages/CancelPage.jsx';
import AnswerKeyPage from '@/pages/AnswerKeyPage.jsx';
import AdminLessonCreator from '@/pages/AdminLessonCreator.jsx';
import DiagnosticPage from '@/pages/DiagnosticPage.jsx';
import ContactUsPage from '@/pages/ContactUsPage.jsx';
import AboutUsPage from '@/pages/AboutUsPage.jsx';
import ForTeamsPage from '@/pages/ForTeamsPage.jsx';

// Membership Pages
import MembershipPage from '@/pages/MembershipPage.jsx';
import SeminarsPage from '@/pages/SeminarsPage.jsx';
import PaymentSuccessPage from '@/pages/PaymentSuccessPage.jsx';
import PaymentCancelPage from '@/pages/PaymentCancelPage.jsx';

// New Lesson System Pages
import CourseLessonsOverview from '@/pages/CourseLessonsOverview.jsx';
import CourseLessonsPage from '@/pages/CourseLessonsPage.jsx';
import LessonDetailPage from '@/pages/LessonDetailPage.jsx';
import CoursePurchasePage from '@/pages/CoursePurchasePage.jsx';

// New Course Components
import CourseLandingPage from '@/components/CourseLandingPage.jsx';
import LessonListPage from '@/components/LessonListPage.jsx';
import LessonDetailPageComponent from '@/components/LessonDetailPage.jsx';
import StudyGuidePage from '@/components/StudyGuidePage.jsx';
import QuizPage from '@/components/QuizPage.jsx';
import CaseStudyPage from '@/components/CaseStudyPage.jsx';
import ResourcesPage from '@/components/ResourcesPage.jsx';
import CourseProgressDashboard from '@/components/CourseProgressDashboard.jsx';

// Vendor Leasing Course
import VendorLeasingCourse from '@/components/VendorLeasingCourse.jsx';
import ResourceLibrary from '@/pages/ResourceLibrary.jsx';
import VendorLeasingBadgesPage from '@/pages/VendorLeasingBadgesPage.jsx';
import ProgressTrackingPage from '@/pages/ProgressTrackingPage.jsx';

// Audit & Style Guide Routes
import AuditDashboard from '@/components/audit/AuditDashboard.jsx';
import StyleGuide from '@/components/style-guide/StyleGuide.jsx';
import CourseConsistencyDashboard from '@/pages/CourseConsistencyDashboard.jsx';

// Progress Tracking Pages
import StudentProgressDashboard from '@/pages/StudentProgressDashboard.jsx';
import LessonProgressTracking from '@/pages/LessonProgressTracking.jsx';
import AssessmentTracking from '@/pages/AssessmentTracking.jsx';
import CaseStudyTracking from '@/pages/CaseStudyTracking.jsx';
import CapstoneProjectTracking from '@/pages/CapstoneProjectTracking.jsx';
import EngagementActivityTracking from '@/pages/EngagementActivityTracking.jsx';
import LearningOutcomesAssessment from '@/pages/LearningOutcomesAssessment.jsx';
import PerformanceAnalyticsInsights from '@/pages/PerformanceAnalyticsInsights.jsx';
import PeerComparisonAnalytics from '@/pages/PeerComparisonAnalytics.jsx';
import AtRiskAssessment from '@/pages/AtRiskAssessment.jsx';

// Role Landing Page
import RoleLandingPage from '@/pages/RoleLandingPage.jsx';

// Mobile App
import MobileApp from '@/pages/mobile/MobileApp.jsx';

// Demo Pages
import QuizDemoPage from '@/pages/QuizDemoPage.jsx';

// Loading Fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4f7ba7]"></div>
  </div>
);

// Data Audit Runner Component
const DataAuditRunner = () => {
  useEffect(() => {
    // Run audit on mount to verify data integrity
    runDataAudit().catch(err => console.error("Audit failed on startup:", err));
  }, []);
  return null;
};


function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <CartProvider>
          <CourseDataProvider>
            <ChatBotProvider>
              <Router>
                <ScrollToTop />
                <DataAuditRunner />
                <Helmet>
                  <title>Mastering the Art of Equipment Leasing</title>
                  <meta name="description" content="Master professional skills with expert-led courses in equipment finance" />
                </Helmet>

                <div className="min-h-screen bg-gray-50">
                  {/* Hide Header on Mobile App routes */}
                  <Routes>
                    <Route path="/mobile/*" element={null} />
                    <Route path="*" element={<Header />} />
                  </Routes>

                  <Suspense fallback={<PageLoader />}>
                    <Routes>
                      {/* Public Routes */}
                      <Route path="/" element={<HomePage />} />
                      <Route path="/login" element={<LoginPage />} />
                      <Route path="/signup" element={<SignupPage />} />
                      <Route path="/password-reset" element={<PasswordResetPage />} />
                      <Route path="/courses" element={<CourseCatalog />} />
                      <Route path="/courses/:id" element={<CourseDetail />} />
                      <Route path="/contact-us" element={<ContactUsPage />} />
                      <Route path="/about-us" element={<AboutUsPage />} />
                      <Route path="/for-teams" element={<ForTeamsPage />} />
                      <Route path="/seminars" element={<SeminarsPage />} />
                      <Route path="/membership" element={<MembershipPage />} />

                      {/* Role Landing Page Route */}
                      <Route path="/role/:roleId" element={<RoleLandingPage />} />

                      {/* New Lesson System Routes */}
                      <Route path="/courses-lessons" element={<CourseLessonsOverview />} />
                      <Route path="/course/:course_id" element={<CourseLessonsPage />} />
                      <Route path="/lesson/:lesson_id" element={<LessonDetailPage />} />
                      <Route path="/course/:courseId/purchase" element={<CoursePurchasePage />} />

                      {/* Protected Routes */}
                      <Route path="/dashboard" element={
                        <ProtectedRoute>
                          <DashboardRouter />
                        </ProtectedRoute>
                      } />
                      <Route path="/profile" element={
                        <ProtectedRoute>
                          <UserProfilePage />
                        </ProtectedRoute>
                      } />
                      <Route path="/membership/success" element={
                        <ProtectedRoute>
                          <PaymentSuccessPage />
                        </ProtectedRoute>
                      } />
                      <Route path="/membership/cancel" element={
                        <ProtectedRoute>
                          <PaymentCancelPage />
                        </ProtectedRoute>
                      } />

                      {/* Legacy Dashboard Route */}
                      <Route path="/student-dashboard" element={
                        <ProtectedRoute>
                          <StudentDashboard />
                        </ProtectedRoute>
                      } />

                      {/* Course Routes */}
                      <Route path="/courses/:courseId/view" element={<CourseView />} />
                      <Route path="/courses/:courseId/lessons/:lessonId" element={<EnhancedLessonPlayer />} />

                      {/* Commerce Routes */}
                      <Route path="/cart" element={<ShoppingCart />} />
                      <Route path="/checkout" element={<CheckoutPage />} />
                      <Route path="/success" element={<SuccessPage />} />
                      <Route path="/cancel" element={<CancelPage />} />

                      {/* Admin & Tools */}
                      <Route path="/answer-key/:courseId/:lessonId" element={<AnswerKeyPage />} />
                      <Route path="/admin/create-lessons" element={<AdminLessonCreator />} />
                      <Route path="/diagnostic" element={<DiagnosticPage />} />

                      {/* Vendor Leasing Course Route */}
                      <Route path="/vendor-leasing-course" element={<VendorLeasingCourse />} />
                      <Route path="/vendor-leasing-resources" element={<ResourceLibrary />} />
                      <Route path="/vendor-leasing-badges" element={<VendorLeasingBadgesPage />} />
                      <Route path="/vendor-leasing/progress" element={<ProgressTrackingPage />} />

                      {/* Audit & Style Guide Routes - Public as requested */}
                      <Route path="/audit" element={<AuditDashboard />} />
                      <Route path="/style-guide" element={<StyleGuide />} />
                      <Route path="/course-consistency-dashboard" element={<CourseConsistencyDashboard />} />

                      {/* New Tax Optimization Course Routes */}
                      <Route path="/course/tax-optimization" element={<CourseLandingPage />} />
                      <Route path="/course/tax-optimization/lessons" element={<LessonListPage />} />
                      <Route path="/course/tax-optimization/lesson/:id" element={<LessonDetailPageComponent />} />
                      <Route path="/course/tax-optimization/study-guide/:id" element={<StudyGuidePage />} />
                      <Route path="/course/tax-optimization/quiz/:id" element={<QuizPage />} />
                      <Route path="/course/tax-optimization/case-study/:id" element={<CaseStudyPage />} />
                      <Route path="/course/tax-optimization/resources" element={<ResourcesPage />} />
                      <Route path="/course/tax-optimization/progress" element={<CourseProgressDashboard />} />

                      {/* Progress Tracking Routes */}
                      <Route path="/progress/dashboard" element={<StudentProgressDashboard />} />
                      <Route path="/progress/lessons" element={<LessonProgressTracking />} />
                      <Route path="/progress/assessments" element={<AssessmentTracking />} />
                      <Route path="/progress/case-studies" element={<CaseStudyTracking />} />
                      <Route path="/progress/capstone" element={<CapstoneProjectTracking />} />
                      <Route path="/progress/engagement" element={<EngagementActivityTracking />} />
                      <Route path="/progress/learning-outcomes" element={<LearningOutcomesAssessment />} />
                      <Route path="/progress/analytics" element={<PerformanceAnalyticsInsights />} />
                      <Route path="/progress/peer-comparison" element={<PeerComparisonAnalytics />} />
                      <Route path="/progress/risk-assessment" element={<AtRiskAssessment />} />

                      {/* Mobile App Routes */}
                      <Route path="/mobile/*" element={<MobileApp />} />

                      {/* Demo Routes */}
                      <Route path="/quiz-demo" element={<QuizDemoPage />} />
                    </Routes>
                  </Suspense>
                  <Toaster />
                </div>
              </Router>
            </ChatBotProvider>
          </CourseDataProvider>
        </CartProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
