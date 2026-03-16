import React, { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Moon, Sun, Menu } from 'lucide-react';
import StyleGuideComponentShowcase from './StyleGuideComponentShowcase';
import ColorPaletteAnalysis from '../audit/ColorPaletteAnalysis';
import TypographyAnalysis from '../audit/TypographyAnalysis';
import SpacingAnalysis from '../audit/SpacingAnalysis';
import { useAuditData } from '@/hooks/useAuditData';

const StyleGuide = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { data } = useAuditData();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const sections = [
    { id: 'intro', title: 'Introduction' },
    { id: 'colors', title: 'Color Palette' },
    { id: 'typography', title: 'Typography' },
    { id: 'spacing', title: 'Spacing System' },
    { id: 'buttons', title: 'Buttons' },
    { id: 'forms', title: 'Forms' },
    { id: 'badges', title: 'Badges' },
    { id: 'cards', title: 'Cards' },
    { id: 'navigation', title: 'Navigation' },
    { id: 'accessibility', title: 'Accessibility' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 ${darkMode ? 'dark' : ''}`}>
      {/* Top Bar */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="font-bold text-xl">Design System</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            <Input placeholder="Search documentation..." className="pl-8" />
          </div>
          <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="w-64 border-r bg-white dark:bg-gray-900 hidden md:block">
            <ScrollArea className="h-full py-6 px-4">
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="w-full text-left px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </ScrollArea>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-4xl mx-auto space-y-16 pb-20">
            
            {/* Introduction */}
            <section id="intro" className="scroll-mt-20">
              <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Introduction</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                This style guide serves as the single source of truth for our application's design system. 
                It defines the core visual elements, components, and patterns used to build consistent and accessible user interfaces.
              </p>
            </section>

            {/* Colors */}
            <section id="colors" className="scroll-mt-20">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Color Palette</h2>
              {data ? (
                <ColorPaletteAnalysis colors={data.colors} />
              ) : (
                <p>Loading color data...</p>
              )}
            </section>

            {/* Typography */}
            <section id="typography" className="scroll-mt-20">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Typography</h2>
              {data ? (
                <TypographyAnalysis typography={data.typography} />
              ) : (
                <p>Loading typography data...</p>
              )}
            </section>

            {/* Spacing */}
            <section id="spacing" className="scroll-mt-20">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Spacing System</h2>
              {data ? (
                <SpacingAnalysis spacing={data.spacing} />
              ) : (
                <p>Loading spacing data...</p>
              )}
            </section>

            {/* Components */}
            <StyleGuideComponentShowcase />

          </div>
        </main>
      </div>
    </div>
  );
};

export default StyleGuide;