import React, { useState, useEffect } from 'react';
import { Bot, Settings } from 'lucide-react';
import { useStore } from '../../../store/useStore';

const useScrollOpacity = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(0, 1 - (scrollY / 100));
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return opacity;
};

const AutomationHeader = () => {
  const { aiStatus } = useStore();
  const opacity = useScrollOpacity();
  
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mb-6">
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">AI Automation Control</h1>
        <div className={`px-3 py-1 rounded-full text-sm flex items-center gap-2 ${
          aiStatus.status === 'active' ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400' :
          aiStatus.status === 'paused' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400' :
          'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400'
        }`}>
          <span className={`w-2 h-2 rounded-full ${
            aiStatus.status === 'active' ? 'bg-green-500' :
            aiStatus.status === 'paused' ? 'bg-yellow-500' :
            'bg-red-500'
          }`} />
          <span className="hidden sm:inline">
            {aiStatus.status.charAt(0).toUpperCase() + aiStatus.status.slice(1)}
          </span>
        </div>
      </div>
      <button 
        style={{ opacity: window.innerWidth < 640 ? opacity : 1 }}
        className="flex items-center justify-center gap-1 px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-primary-600 dark:bg-accent-blue hover:bg-primary-700 dark:hover:bg-accent-darkBlue text-white text-xs sm:text-base transition-all w-24 sm:w-auto">
        <Bot size={14} className="sm:hidden" />
        <Bot size={18} className="hidden sm:block" />
        <span className="hidden sm:inline">{aiStatus.status === 'active' ? 'Pause AI' : 'Start AI'}</span>
        <span className="sm:hidden">{aiStatus.status === 'active' ? 'Pause' : 'Start'}</span>
      </button>
    </div>
  );
};

export default AutomationHeader;