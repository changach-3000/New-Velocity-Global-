import React, { createContext, useContext, useState, useEffect } from 'react';

const MobileSettingsContext = createContext();

export const useMobileSettings = () => {
  const context = useContext(MobileSettingsContext);
  if (!context) {
    throw new Error('useMobileSettings must be used within a MobileSettingsProvider');
  }
  return context;
};

export const MobileSettingsProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('mobile_darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  const [fontSize, setFontSize] = useState(() => {
    const saved = localStorage.getItem('mobile_fontSize');
    return saved ? parseInt(saved) : 16; // Default 16px
  });

  const [lineSpacing, setLineSpacing] = useState(() => {
    const saved = localStorage.getItem('mobile_lineSpacing');
    return saved ? parseFloat(saved) : 1.5; // Default 1.5
  });

  useEffect(() => {
    localStorage.setItem('mobile_darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('mobile_fontSize', fontSize.toString());
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem('mobile_lineSpacing', lineSpacing.toString());
  }, [lineSpacing]);

  const value = {
    darkMode,
    setDarkMode,
    fontSize,
    setFontSize,
    lineSpacing,
    setLineSpacing
  };

  return (
    <MobileSettingsContext.Provider value={value}>
      {children}
    </MobileSettingsContext.Provider>
  );
};