import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Award, Star, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BadgeShowcase from '@/components/BadgeShowcase';
import BadgeProgress from '@/components/BadgeProgress';
import useVendorLeasingBadgeTracker from '@/hooks/useVendorLeasingBadgeTracker';
import { Loader2 } from 'lucide-react';

const VendorLeasingBadgesPage = () => {
  const { earnedBadges, badgeMetadata, getBadgeProgress, loading } = useVendorLeasingBadgeTracker();
  const progress = getBadgeProgress();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <Link to="/vendor-leasing-course" className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600 mb-2">
              <ChevronLeft className="h-4 w-4 mr-1" /> Back to Course
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Award className="h-8 w-8 text-amber-500" />
              Your Achievements
            </h1>
            <p className="text-gray-600 mt-1">
              Track your progress and view earned badges from the Vendor Leasing Masterclass.
            </p>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-full text-blue-600">
              <Trophy className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Total Earned</p>
              <p className="text-2xl font-bold text-gray-900">{progress.earned} / {progress.total}</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="p-3 bg-green-100 rounded-full text-green-600">
              <Star className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Completion Rate</p>
              <p className="text-2xl font-bold text-gray-900">{progress.percentage}%</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 rounded-xl shadow-md text-white flex flex-col justify-center">
            <p className="text-purple-100 text-sm font-medium mb-1">Next Milestone</p>
            <p className="text-lg font-bold">
              {progress.percentage === 100 
                ? "All Badges Earned! 🎉" 
                : "Keep learning to unlock more!"}
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Showcase */}
          <div className="lg:col-span-2">
            <BadgeShowcase 
              earnedBadges={earnedBadges} 
              allBadges={badgeMetadata} 
              className="h-full"
            />
          </div>

          {/* Sidebar Progress */}
          <div className="lg:col-span-1">
            <BadgeProgress progressData={progress} />
            
            <div className="mt-6 bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-2">Why Earn Badges?</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li className="flex items-start gap-2">
                  <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Demonstrate your mastery of complex leasing concepts
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Track your learning milestones effectively
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Showcase your expertise on your professional profile
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorLeasingBadgesPage;