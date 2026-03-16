import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { MobileAuthProvider, useMobileAuth } from '@/contexts/MobileAuthContext';
import { MobileSettingsProvider } from '@/contexts/MobileSettingsContext';
import MobileNavigation from '@/components/mobile/MobileNavigation';
import MobileDashboard from '@/pages/mobile/MobileDashboard';
import LessonsScreen from '@/pages/mobile/LessonsScreen';
import MobileLessonDetail from '@/pages/mobile/MobileLessonDetail';
import MobileProgressScreen from '@/pages/mobile/MobileProgressScreen';
import MobileOfflineContentScreen from '@/pages/mobile/MobileOfflineContentScreen';
import MobileSettingsScreen from '@/pages/mobile/MobileSettingsScreen';
import MobileQuizScreen from '@/pages/mobile/MobileQuizScreen';
import MobileCaseStudyScreen from '@/pages/mobile/MobileCaseStudyScreen';
import StudyGuideScreen from '@/pages/mobile/StudyGuideScreen';
import LoginPage from '@/pages/LoginPage'; // Reusing existing login page, ideally create mobile specific one
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

// Splash Screen Component
const SplashScreen = () => (
  <div className="fixed inset-0 bg-blue-600 flex flex-col items-center justify-center z-[100] text-white">
    <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-xl animate-bounce">
      <span className="text-4xl font-bold text-blue-600">VL</span>
    </div>
    <h1 className="text-2xl font-bold tracking-wider animate-pulse">Vendor Leasing</h1>
    <p className="text-blue-200 mt-2 text-sm">Master Creative Financing</p>
  </div>
);

// Protected Route Wrapper
const MobileProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useMobileAuth();
  
  if (loading) return <div className="min-h-screen bg-gray-50" />;
  if (!isAuthenticated) return <Navigate to="/mobile/login" replace />;
  
  return children;
};

// Main App Content
const MobileAppContent = () => {
  const [showSplash, setShowSplash] = useState(true);
  const location = useLocation();
  
  // Hide splash after 2.5s
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Check if current route should show bottom navigation
  const showNav = ['/mobile/dashboard', '/mobile/lessons', '/mobile/progress', '/mobile/offline', '/mobile/settings'].includes(location.pathname);

  if (showSplash) return <SplashScreen />;

  return (
    <div className="min-h-screen bg-gray-50 md:max-w-md md:mx-auto md:border-x md:shadow-2xl relative overflow-hidden">
      <Routes>
        <Route path="/" element={<Navigate to="/mobile/dashboard" replace />} />
        <Route path="/login" element={<LoginPage />} />
        
        {/* Protected Routes */}
        <Route path="/dashboard" element={<MobileProtectedRoute><MobileDashboard /></MobileProtectedRoute>} />
        <Route path="/lessons" element={<MobileProtectedRoute><LessonsScreen /></MobileProtectedRoute>} />
        <Route path="/lesson/:lessonId" element={<MobileProtectedRoute><MobileLessonDetail /></MobileProtectedRoute>} />
        <Route path="/quiz/:lessonId" element={<MobileProtectedRoute><MobileQuizScreen /></MobileProtectedRoute>} />
        <Route path="/case-study/:id" element={<MobileProtectedRoute><MobileCaseStudyScreen /></MobileProtectedRoute>} />
        <Route path="/study-guide/:id" element={<MobileProtectedRoute><StudyGuideScreen /></MobileProtectedRoute>} />
        <Route path="/progress" element={<MobileProtectedRoute><MobileProgressScreen /></MobileProtectedRoute>} />
        <Route path="/offline" element={<MobileProtectedRoute><MobileOfflineContentScreen /></MobileProtectedRoute>} />
        <Route path="/settings" element={<MobileProtectedRoute><MobileSettingsScreen /></MobileProtectedRoute>} />
        
        <Route path="*" element={<Navigate to="/mobile/dashboard" replace />} />
      </Routes>

      {showNav && <MobileNavigation />}
      <Toaster />
    </div>
  );
};

// Root Component with Providers
const MobileApp = () => {
  return (
    <MobileAuthProvider>
      <MobileSettingsProvider>
        <MobileAppContent />
      </MobileSettingsProvider>
    </MobileAuthProvider>
  );
};

export default MobileApp;