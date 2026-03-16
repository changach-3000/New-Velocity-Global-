import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Switch } from '@/components/ui/switch';
import { LogOut, Settings, Bell, Moon, Globe, Shield, HelpCircle } from 'lucide-react';

const ProfileScreen = () => {
  const { currentUser, logout } = useAuth();

  const MenuItem = ({ icon: Icon, label, value, toggle }) => (
    <div className="flex items-center justify-between p-4 bg-white border-b last:border-0">
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 text-gray-500" />
        <span className="text-sm font-medium text-slate-700">{label}</span>
      </div>
      {toggle ? (
        <Switch />
      ) : (
        <span className="text-sm text-gray-400">{value}</span>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header Profile */}
      <div className="bg-white p-6 flex flex-col items-center border-b">
        <Avatar className="w-24 h-24 mb-4">
          <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${currentUser?.id || 'user'}`} />
          <AvatarFallback>ST</AvatarFallback>
        </Avatar>
        <h2 className="text-xl font-bold text-slate-900">{currentUser?.full_name || 'Student Name'}</h2>
        <p className="text-gray-500 text-sm">{currentUser?.email || 'student@example.com'}</p>
        <Button variant="outline" size="sm" className="mt-4 rounded-full px-6">Edit Profile</Button>
      </div>

      <div className="mt-6 space-y-6">
        {/* Preferences */}
        <div>
          <h3 className="px-4 text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Preferences</h3>
          <div className="border-y border-gray-200">
            <MenuItem icon={Bell} label="Notifications" toggle />
            <MenuItem icon={Moon} label="Dark Mode" toggle />
            <MenuItem icon={Globe} label="Language" value="English" />
          </div>
        </div>

        {/* App Settings */}
        <div>
          <h3 className="px-4 text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">App Settings</h3>
          <div className="border-y border-gray-200">
            <MenuItem icon={Settings} label="Video Quality" value="Auto" />
            <MenuItem icon={Shield} label="Privacy Policy" />
            <MenuItem icon={HelpCircle} label="Support" />
          </div>
        </div>

        <div className="px-4">
          <Button 
            variant="destructive" 
            className="w-full gap-2"
            onClick={logout}
          >
            <LogOut className="w-4 h-4" /> Log Out
          </Button>
          <p className="text-center text-xs text-gray-400 mt-4">Version 1.0.0</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;