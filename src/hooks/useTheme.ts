import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    console.log('Initial theme from localStorage:', saved);
    const shouldBeDark = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    console.log('Initial isDark value:', shouldBeDark);
    return shouldBeDark;
  });

  useEffect(() => {
    console.log('Applying theme to document:', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = () => {
    console.log('Toggle theme called, current isDark:', isDark);
    setIsDark(prev => {
      const newValue = !prev;
      localStorage.setItem('theme', newValue ? 'dark' : 'light');
      return newValue;
    });
  };

  return {
    isDark,
    toggleTheme
  };
}; 