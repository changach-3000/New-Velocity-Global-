import React, { useState, useEffect } from 'react';
import { useMobileAuth } from '@/contexts/MobileAuthContext';
import { useMobileSettings } from '@/contexts/MobileSettingsContext';
import { useNotifications } from '@/hooks/useNotifications';
import pb from '@/lib/pocketbaseClient';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell, Moon, Type, Download, User, LogOut, Trash2, Shield, Info, RefreshCw } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';

const MobileSettingsScreen = () => {
  const { currentUser, logout, syncWithWeb } = useMobileAuth();
  const { darkMode, setDarkMode, fontSize, setFontSize, lineSpacing, setLineSpacing } = useMobileSettings();
  const { preferences, savePreferences, requestPermission } = useNotifications(currentUser?.id);
  const { toast } = useToast();

  const [localPrefs, setLocalPrefs] = useState(preferences);
  const [syncing, setSyncing] = useState(false);

  useEffect(() => {
    setLocalPrefs(preferences);
  }, [preferences]);

  const handleNotificationToggle = async (key) => {
    const newPrefs = { ...localPrefs, [key]: !localPrefs[key] };
    setLocalPrefs(newPrefs);
    try {
      await savePreferences(newPrefs);
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to save preference', variant: 'destructive' });
    }
  };

  const handleSync = async () => {
    setSyncing(true);
    try {
      await syncWithWeb();
      toast({ title: 'Synced', description: 'Data synchronized successfully' });
    } catch (error) {
      toast({ title: 'Error', description: 'Sync failed', variant: 'destructive' });
    } finally {
      setSyncing(false);
    }
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      logout();
    }
  };

  const handleDeleteAccount = async () => {
    if (window.confirm('WARNING: This will permanently delete your account. This action cannot be undone. Are you sure?')) {
      try {
        await pb.collection('users').delete(currentUser.id);
        logout();
      } catch (error) {
        toast({ title: 'Error', description: 'Failed to delete account', variant: 'destructive' });
      }
    }
  };

  return (
    <div className={cn("min-h-screen pb-20 transition-colors duration-300", darkMode ? "bg-slate-900 text-slate-100" : "bg-gray-50 text-slate-900")}>
      <div className={cn("sticky top-0 z-10 border-b p-4 backdrop-blur-md", darkMode ? "bg-slate-900/80 border-slate-800" : "bg-white/80 border-gray-200")}>
        <h1 className="font-bold text-xl">Settings</h1>
      </div>

      <div className="p-4 space-y-6">
        {/* Account Section */}
        <section>
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 px-1">Account</h2>
          <Card className={darkMode ? "bg-slate-800 border-slate-700" : "bg-white"}>
            <CardContent className="p-0 divide-y divide-gray-100 dark:divide-slate-700">
              <div className="p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                  {currentUser?.name?.charAt(0) || currentUser?.email?.charAt(0) || 'U'}
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className={cn("font-bold truncate", darkMode ? "text-slate-100" : "text-slate-900")}>{currentUser?.name || 'User'}</p>
                  <p className="text-sm text-gray-500 truncate">{currentUser?.email}</p>
                </div>
              </div>
              <div className="p-4">
                <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50" onClick={handleLogout}>
                  <LogOut className="w-4 h-4 mr-2" /> Log Out
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Display Section */}
        <section>
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 px-1">Display</h2>
          <Card className={darkMode ? "bg-slate-800 border-slate-700" : "bg-white"}>
            <CardContent className="p-0 divide-y divide-gray-100 dark:divide-slate-700">
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Moon className="w-5 h-5 text-gray-500" />
                  <span className={darkMode ? "text-slate-200" : "text-slate-700"}>Dark Mode</span>
                </div>
                <Switch checked={darkMode} onCheckedChange={setDarkMode} />
              </div>
              <div className="p-4 space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <Type className="w-5 h-5 text-gray-500" />
                  <span className={darkMode ? "text-slate-200" : "text-slate-700"}>Font Size ({fontSize}px)</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs">A</span>
                  <Slider 
                    value={[fontSize]} 
                    min={12} 
                    max={24} 
                    step={1} 
                    onValueChange={(val) => setFontSize(val[0])} 
                    className="flex-1"
                  />
                  <span className="text-lg">A</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Notifications Section */}
        <section>
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 px-1">Notifications</h2>
          <Card className={darkMode ? "bg-slate-800 border-slate-700" : "bg-white"}>
            <CardContent className="p-0 divide-y divide-gray-100 dark:divide-slate-700">
              <div className="p-4">
                <Button variant="outline" size="sm" className="w-full mb-2" onClick={requestPermission}>
                  Enable Push Notifications
                </Button>
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className={darkMode ? "text-slate-200" : "text-slate-700"}>Lesson Reminders</span>
                <Switch checked={localPrefs.lessonReminders} onCheckedChange={() => handleNotificationToggle('lessonReminders')} />
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className={darkMode ? "text-slate-200" : "text-slate-700"}>Quiz Reminders</span>
                <Switch checked={localPrefs.quizReminders} onCheckedChange={() => handleNotificationToggle('quizReminders')} />
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className={darkMode ? "text-slate-200" : "text-slate-700"}>Motivational Alerts</span>
                <Switch checked={localPrefs.motivationalNotifications} onCheckedChange={() => handleNotificationToggle('motivationalNotifications')} />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Data & Sync */}
        <section>
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 px-1">Data & Sync</h2>
          <Card className={darkMode ? "bg-slate-800 border-slate-700" : "bg-white"}>
            <CardContent className="p-0 divide-y divide-gray-100 dark:divide-slate-700">
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <RefreshCw className={cn("w-5 h-5 text-gray-500", syncing ? "animate-spin" : "")} />
                  <div>
                    <p className={darkMode ? "text-slate-200" : "text-slate-700"}>Sync Data</p>
                    <p className="text-xs text-gray-500">Last synced: Just now</p>
                  </div>
                </div>
                <Button size="sm" variant="outline" onClick={handleSync} disabled={syncing}>
                  Sync Now
                </Button>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Download className="w-5 h-5 text-gray-500" />
                  <span className={darkMode ? "text-slate-200" : "text-slate-700"}>Offline Content</span>
                </div>
                <span className="text-sm text-gray-500">125 MB used</span>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Danger Zone */}
        <section>
          <Button variant="ghost" className="w-full text-red-500 hover:text-red-600 hover:bg-red-50" onClick={handleDeleteAccount}>
            <Trash2 className="w-4 h-4 mr-2" /> Delete Account
          </Button>
          <div className="mt-6 text-center text-xs text-gray-400">
            <p>Version 1.0.0 (Build 1024)</p>
            <div className="flex justify-center gap-4 mt-2">
              <span className="underline cursor-pointer">Privacy Policy</span>
              <span className="underline cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MobileSettingsScreen;