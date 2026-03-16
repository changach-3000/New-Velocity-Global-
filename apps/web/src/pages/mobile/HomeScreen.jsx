import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlayCircle, Award, Clock, Zap, ChevronRight, Bell } from 'lucide-react';

const HomeScreen = () => {
  const { currentUser } = useAuth();

  return (
    <div className="p-4 space-y-6 pb-20">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${currentUser?.id || 'user'}`} />
            <AvatarFallback>ST</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm text-gray-500">Welcome back,</p>
            <h1 className="font-bold text-lg text-slate-900">{currentUser?.full_name || 'Student'}</h1>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-6 h-6 text-gray-600" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="bg-blue-600 text-white border-none">
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <Zap className="w-5 h-5 text-blue-200" />
              <span className="text-xs font-medium bg-blue-500/50 px-2 py-0.5 rounded">Streak</span>
            </div>
            <div className="text-2xl font-bold">5 Days</div>
            <p className="text-xs text-blue-100 mt-1">Keep it up!</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <Clock className="w-5 h-5 text-orange-500" />
              <span className="text-xs font-medium bg-orange-100 text-orange-700 px-2 py-0.5 rounded">This Week</span>
            </div>
            <div className="text-2xl font-bold text-slate-900">4.5h</div>
            <p className="text-xs text-gray-500 mt-1">Study time</p>
          </CardContent>
        </Card>
      </div>

      {/* Today's Goal */}
      <Card>
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-slate-900">Today's Goal</h3>
            <span className="text-xs text-gray-500">45/60 mins</span>
          </div>
          <Progress value={75} className="h-2 mb-2" />
          <p className="text-xs text-gray-500">You're 75% of the way to your daily goal!</p>
        </CardContent>
      </Card>

      {/* Next Lesson */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-bold text-lg text-slate-900">Up Next</h2>
          <Link to="/mobile/lessons" className="text-sm text-blue-600">View All</Link>
        </div>
        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-4">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                <PlayCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900">Lesson 3: Interest Deduction</h3>
                <p className="text-sm text-gray-500 mb-3">Optimization Strategies</p>
                <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <Link to="/mobile/lessons/3">Continue Learning</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" className="h-auto py-3 flex flex-col gap-1" asChild>
          <Link to="/mobile/quiz/3">
            <Award className="w-5 h-5 text-purple-500" />
            <span>Take Quiz</span>
          </Link>
        </Button>
        <Button variant="outline" className="h-auto py-3 flex flex-col gap-1" asChild>
          <Link to="/mobile/resources">
            <FolderOpen className="w-5 h-5 text-green-500" />
            <span>Materials</span>
          </Link>
        </Button>
      </div>

      {/* Recent Achievements */}
      <div>
        <h2 className="font-bold text-lg text-slate-900 mb-3">Recent Achievements</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="min-w-[120px] bg-white border rounded-lg p-3 flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mb-2">
                <Award className="w-5 h-5 text-yellow-600" />
              </div>
              <p className="text-xs font-semibold">Quiz Master</p>
              <p className="text-[10px] text-gray-500">Scored 100%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Missing import fix
import { FolderOpen } from 'lucide-react';

export default HomeScreen;