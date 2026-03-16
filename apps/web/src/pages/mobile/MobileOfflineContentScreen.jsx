import React, { useState, useEffect } from 'react';
import { useMobileAuth } from '@/contexts/MobileAuthContext';
import { useMobileSettings } from '@/contexts/MobileSettingsContext';
import pb from '@/lib/pocketbaseClient';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Trash2, CheckCircle, Wifi, WifiOff, FileText, Video } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';

const MobileOfflineContentScreen = () => {
  const { currentUser } = useMobileAuth();
  const { darkMode } = useMobileSettings();
  const { toast } = useToast();

  const [offlineItems, setOfflineItems] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState({}); // { id: progress }

  useEffect(() => {
    if (currentUser) {
      loadData();
    }
  }, [currentUser]);

  const loadData = async () => {
    try {
      // Fetch all available lessons
      const allLessons = await pb.collection('vendor_leasing_lessons').getFullList({
        sort: 'lessonNumber',
        $autoCancel: false
      });
      setLessons(allLessons);

      // Fetch downloaded items
      const downloaded = await pb.collection('mobile_offline_content').getFullList({
        filter: `userId="${currentUser.id}"`,
        $autoCancel: false
      });
      setOfflineItems(downloaded);
    } catch (error) {
      console.error('Error loading offline data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (lesson) => {
    setDownloading(prev => ({ ...prev, [lesson.id]: 0 }));
    
    // Simulate download progress
    const interval = setInterval(() => {
      setDownloading(prev => {
        const current = prev[lesson.id] || 0;
        if (current >= 100) {
          clearInterval(interval);
          completeDownload(lesson);
          return { ...prev, [lesson.id]: undefined }; // Remove from downloading state
        }
        return { ...prev, [lesson.id]: current + 10 };
      });
    }, 200);
  };

  const completeDownload = async (lesson) => {
    try {
      // Save to DB
      const record = await pb.collection('mobile_offline_content').create({
        userId: currentUser.id,
        lessonId: lesson.id,
        contentType: 'lesson',
        fileSize: Math.floor(Math.random() * 50) + 10, // Mock size 10-60MB
        downloadedDate: new Date().toISOString()
      });
      
      // Save content to localStorage (mock offline storage)
      localStorage.setItem(`offline_lesson_${lesson.id}`, JSON.stringify(lesson));
      
      setOfflineItems(prev => [...prev, record]);
      toast({ title: 'Download Complete', description: `${lesson.title} is now available offline.` });
    } catch (error) {
      console.error('Download failed:', error);
      toast({ title: 'Download Failed', variant: 'destructive' });
    }
  };

  const handleDelete = async (itemId, lessonId) => {
    try {
      await pb.collection('mobile_offline_content').delete(itemId);
      localStorage.removeItem(`offline_lesson_${lessonId}`);
      setOfflineItems(prev => prev.filter(item => item.id !== itemId));
      toast({ title: 'Content Removed' });
    } catch (error) {
      console.error('Delete failed:', error);
    }
  };

  const clearAll = async () => {
    if (window.confirm('Delete all offline content?')) {
      try {
        for (const item of offlineItems) {
          await pb.collection('mobile_offline_content').delete(item.id);
          if (item.lessonId) localStorage.removeItem(`offline_lesson_${item.lessonId}`);
        }
        setOfflineItems([]);
        toast({ title: 'All content cleared' });
      } catch (error) {
        console.error('Clear all failed:', error);
      }
    }
  };

  const totalSize = offlineItems.reduce((acc, item) => acc + (item.fileSize || 0), 0);
  const totalStorage = 1024; // Mock 1GB limit

  if (loading) {
    return (
      <div className={cn("min-h-screen flex items-center justify-center", darkMode ? "bg-slate-900" : "bg-gray-50")}>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className={cn("min-h-screen pb-20 transition-colors duration-300", darkMode ? "bg-slate-900 text-slate-100" : "bg-gray-50 text-slate-900")}>
      <div className={cn("sticky top-0 z-10 border-b p-4 backdrop-blur-md flex justify-between items-center", darkMode ? "bg-slate-900/80 border-slate-800" : "bg-white/80 border-gray-200")}>
        <h1 className="font-bold text-xl">Offline Content</h1>
        <div className="flex items-center gap-2 text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
          <Wifi className="w-3 h-3" />
          <span>Online</span>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Storage Usage */}
        <Card className={darkMode ? "bg-slate-800 border-slate-700" : "bg-white"}>
          <CardContent className="p-4">
            <div className="flex justify-between mb-2 text-sm">
              <span className="font-medium">Storage Used</span>
              <span className="text-gray-500">{totalSize} MB / {totalStorage} MB</span>
            </div>
            <Progress value={(totalSize / totalStorage) * 100} className="h-2 mb-2" />
            <div className="flex justify-between text-xs text-gray-500">
              <span>{offlineItems.length} items downloaded</span>
              <Button variant="link" className="h-auto p-0 text-red-500" onClick={clearAll}>Clear All</Button>
            </div>
          </CardContent>
        </Card>

        {/* Content List */}
        <Tabs defaultValue="lessons" className="w-full">
          <TabsList className="w-full grid grid-cols-2 mb-4">
            <TabsTrigger value="lessons">Lessons</TabsTrigger>
            <TabsTrigger value="casestudies">Case Studies</TabsTrigger>
          </TabsList>

          <TabsContent value="lessons" className="space-y-3">
            {lessons.map(lesson => {
              const offlineItem = offlineItems.find(item => item.lessonId === lesson.id);
              const isDownloading = downloading[lesson.id] !== undefined;
              const progress = downloading[lesson.id] || 0;

              return (
                <Card key={lesson.id} className={darkMode ? "bg-slate-800 border-slate-700" : "bg-white"}>
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center shrink-0", 
                      offlineItem ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-500"
                    )}>
                      {offlineItem ? <CheckCircle className="w-5 h-5" /> : <Video className="w-5 h-5" />}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className={cn("font-semibold text-sm truncate", darkMode ? "text-slate-200" : "text-slate-900")}>{lesson.title}</h4>
                      <p className="text-xs text-gray-500">
                        {offlineItem ? `${offlineItem.fileSize} MB • Downloaded` : 'Not downloaded'}
                      </p>
                      {isDownloading && <Progress value={progress} className="h-1 mt-2" />}
                    </div>

                    {offlineItem ? (
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(offlineItem.id, lesson.id)} className="text-red-500 hover:bg-red-50">
                        <Trash2 className="w-5 h-5" />
                      </Button>
                    ) : (
                      <Button variant="ghost" size="icon" onClick={() => handleDownload(lesson)} disabled={isDownloading}>
                        <Download className={cn("w-5 h-5", isDownloading ? "animate-bounce text-blue-500" : "text-gray-400")} />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>

          <TabsContent value="casestudies">
            <div className="text-center py-10 text-gray-500">
              <FileText className="w-12 h-12 mx-auto mb-3 opacity-20" />
              <p>No case studies available for offline download yet.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MobileOfflineContentScreen;