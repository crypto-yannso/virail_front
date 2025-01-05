import React from 'react';
import { Search, Menu } from 'lucide-react';
import { useStore } from '../../store/useStore';

const AIStatusIndicator = () => {
  const aiStatus = useStore((state) => state.aiStatus);
  
  const statusColors = {
    active: 'bg-green-500',
    paused: 'bg-orange-500',
    disabled: 'bg-red-500',
  };

  return (
    <div className="flex items-center space-x-2">
      <div className={`w-3 h-3 rounded-full ${statusColors[aiStatus.status]}`} />
      <span className="text-sm capitalize hidden sm:inline">{aiStatus.status}</span>
    </div>
  );
};

const Topbar = () => {
  const { toggleRightPanel } = useStore();

  return (
    <header className="h-[8vh] fixed top-0 right-0 left-0 md:left-[15vw] bg-white dark:bg-dark-primary border-b border-gray-200 dark:border-border-dark px-4 md:px-6 flex items-center justify-between z-40">
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleRightPanel}
          className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-dark-tertiary rounded-lg transition-colors"
        >
          <Menu size={20} className="text-slate-900 dark:text-text-primary" />
        </button>
        <AIStatusIndicator />
      </div>

      <div className="flex-1 max-w-2xl mx-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-200 dark:border-border-dark bg-white dark:bg-dark-tertiary focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent-blue text-slate-900 dark:text-text-primary placeholder-gray-400 dark:placeholder-text-secondary"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-text-secondary" size={18} />
        </div>
      </div>
    </header>
  );
};

export default Topbar;