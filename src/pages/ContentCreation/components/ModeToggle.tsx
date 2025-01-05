import React from 'react';
import { Bot, Pencil } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ModeToggle = () => {
  const navigate = useNavigate();

  const handleAutomaticClick = () => {
    navigate('/automation');
  };

  return (
    <div className="bg-white dark:bg-dark-secondary 
                    border border-slate-200/60 dark:border-border-dark
                    rounded-lg 
                    shadow-[0_8px_16px_-6px_rgba(15,23,42,0.08)] dark:shadow-dark-sm
                    p-6">
      <h3 className="font-semibold mb-4 text-slate-900 dark:text-text-primary">Choose Mode</h3>
      <div className="flex gap-3">
        <button className="flex-1 p-3 bg-white dark:bg-dark-tertiary 
                          border border-accent-blue dark:border-accent-blue/50 
                          rounded-lg flex items-center justify-center gap-2 
                          hover:bg-slate-50 dark:hover:bg-dark-quaternary 
                          hover:border-accent-blue/80 dark:hover:border-accent-blue 
                          transition-all">
          <Pencil size={18} className="text-slate-900 dark:text-text-primary" />
          <span className="text-slate-900 dark:text-text-primary">Semi-Automatic</span>
        </button>
        <button 
          onClick={handleAutomaticClick}
          className="flex-1 p-3 border border-slate-200 dark:border-border-dark 
                     rounded-lg flex items-center justify-center gap-2 
                     text-slate-900 dark:text-text-primary 
                     hover:border-accent-blue dark:hover:border-accent-blue/50 
                     hover:bg-slate-50 dark:hover:bg-dark-tertiary
                     transition-all"
        >
          <Bot size={18} className="text-slate-900 dark:text-text-primary" />
          <span className="text-slate-900 dark:text-text-primary">Automatic</span>
        </button>
      </div>
    </div>
  );
};

export default ModeToggle;