import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BookOpen, BarChart2, Download, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useMobileSettings } from '@/contexts/MobileSettingsContext';

const MobileNavigation = () => {
  const { darkMode } = useMobileSettings();
  
  const navItems = [
    { path: '/mobile/dashboard', icon: Home, label: 'Home' },
    { path: '/mobile/lessons', icon: BookOpen, label: 'Lessons' },
    { path: '/mobile/progress', icon: BarChart2, label: 'Progress' },
    { path: '/mobile/offline', icon: Download, label: 'Offline' },
    { path: '/mobile/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className={cn(
      "fixed bottom-0 left-0 right-0 border-t z-50 pb-safe transition-colors duration-300",
      darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-gray-200"
    )}>
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => cn(
                "flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors",
                isActive 
                  ? "text-blue-600" 
                  : darkMode ? "text-slate-400 hover:text-slate-200" : "text-gray-500 hover:text-gray-900"
              )}
            >
              <Icon className="w-6 h-6" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNavigation;