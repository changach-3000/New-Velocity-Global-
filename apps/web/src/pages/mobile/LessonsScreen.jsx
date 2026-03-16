import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search, PlayCircle, CheckCircle2, ChevronLeft, Download, FileText, Settings, SkipBack, SkipForward, Play, Pause, Subtitles as Captions } from 'lucide-react';

const LessonsScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Mock Data
  const lessons = [
    { id: 1, title: 'Fundamentals of Leasing', duration: '45m', progress: 100, status: 'Completed' },
    { id: 2, title: 'Depreciation Strategies', duration: '60m', progress: 100, status: 'Completed' },
    { id: 3, title: 'Interest Deduction Optimization', duration: '55m', progress: 45, status: 'In Progress' },
    { id: 4, title: 'Lease Classification', duration: '50m', progress: 0, status: 'Not Started' },
    { id: 5, title: 'Sale-Leaseback Transactions', duration: '65m', progress: 0, status: 'Not Started' },
  ];

  // Detail View
  if (id) {
    const lesson = lessons.find(l => l.id === parseInt(id)) || lessons[0];
    return (
      <div className="flex flex-col h-screen bg-white pb-16">
        {/* Video Player Area */}
        <div className="bg-black aspect-video relative flex items-center justify-center">
          <div className="absolute top-4 left-4 z-10">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={() => navigate('/mobile/lessons')}>
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </div>
          <div className="text-white text-center">
            <PlayCircle className="w-16 h-16 mx-auto opacity-80" />
            <p className="mt-2 font-medium">Video Player Placeholder</p>
          </div>
          {/* Controls Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="flex items-center justify-between text-white mb-2">
              <span className="text-xs">12:45</span>
              <div className="flex-1 mx-3 h-1 bg-gray-600 rounded-full">
                <div className="w-1/3 h-full bg-blue-500 rounded-full"></div>
              </div>
              <span className="text-xs">{lesson.duration}</span>
            </div>
            <div className="flex items-center justify-between text-white">
              <div className="flex gap-4">
                <SkipBack className="w-5 h-5" />
                <Play className="w-5 h-5 fill-current" />
                <SkipForward className="w-5 h-5" />
              </div>
              <div className="flex gap-4">
                <span className="text-xs font-bold border border-white/50 rounded px-1">1x</span>
                <Captions className="w-5 h-5" />
                <Settings className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="p-4 border-b">
            <h1 className="font-bold text-xl text-slate-900 mb-1">{lesson.title}</h1>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Lesson {lesson.id}</span>
              <Button size="sm" variant="outline" className="h-8 gap-2">
                <Download className="w-4 h-4" /> Download
              </Button>
            </div>
          </div>

          <Tabs defaultValue="content" className="flex-1 flex flex-col">
            <TabsList className="grid grid-cols-3 px-4 pt-2">
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>
            
            <ScrollArea className="flex-1">
              <TabsContent value="content" className="p-4 space-y-4">
                <div className="prose prose-sm max-w-none">
                  <h3>Overview</h3>
                  <p>In this lesson, we will cover the fundamental strategies for optimizing interest deductions under Section 163(j). We'll explore the 30% ATI limitation and exceptions for small businesses.</p>
                  <h3>Key Topics</h3>
                  <ul>
                    <li>Section 163(j) Limitation Calculation</li>
                    <li>Adjusted Taxable Income (ATI)</li>
                    <li>Floor Plan Financing Interest</li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="notes" className="p-4">
                <textarea 
                  className="w-full h-64 p-3 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Take notes here..."
                ></textarea>
              </TabsContent>
              
              <TabsContent value="resources" className="p-4 space-y-3">
                <Card className="bg-gray-50">
                  <CardContent className="p-3 flex items-center gap-3">
                    <FileText className="w-5 h-5 text-blue-500" />
                    <div className="flex-1">
                      <p className="font-medium text-sm">Study Guide</p>
                      <p className="text-xs text-gray-500">PDF • 2.4 MB</p>
                    </div>
                    <Button size="sm" variant="ghost" asChild>
                      <Link to={`/mobile/study-guide/${id}`}>Open</Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="bg-gray-50">
                  <CardContent className="p-3 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <div className="flex-1">
                      <p className="font-medium text-sm">Lesson Quiz</p>
                      <p className="text-xs text-gray-500">15 Questions</p>
                    </div>
                    <Button size="sm" variant="ghost" asChild>
                      <Link to={`/mobile/quiz/${id}`}>Start</Link>
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </ScrollArea>
          </Tabs>
        </div>
      </div>
    );
  }

  // List View
  return (
    <div className="p-4 pb-20 space-y-4">
      <h1 className="text-2xl font-bold text-slate-900">Lessons</h1>
      
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input 
          placeholder="Search lessons..." 
          className="pl-9"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="space-y-3">
        {lessons.filter(l => l.title.toLowerCase().includes(searchQuery.toLowerCase())).map((lesson) => (
          <Link to={`/mobile/lessons/${lesson.id}`} key={lesson.id}>
            <Card className="active:scale-95 transition-transform">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={lesson.status === 'Completed' ? 'default' : 'secondary'} className={lesson.status === 'Completed' ? 'bg-green-500' : ''}>
                    {lesson.status}
                  </Badge>
                  <span className="text-xs text-gray-500">{lesson.duration}</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{lesson.id}. {lesson.title}</h3>
                <div className="flex items-center gap-2 mt-3">
                  <Progress value={lesson.progress} className="h-1.5 flex-1" />
                  <span className="text-xs font-medium text-gray-600">{lesson.progress}%</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LessonsScreen;