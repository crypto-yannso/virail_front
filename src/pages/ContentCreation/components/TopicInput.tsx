import React from 'react';
import { Sparkles } from 'lucide-react';

const TopicInput = () => {
  return (
    <div className="bg-white dark:bg-dark-secondary 
                    border border-slate-200/60 dark:border-border-dark
                    rounded-lg 
                    shadow-[0_8px_16px_-6px_rgba(15,23,42,0.08)] dark:shadow-dark-sm
                    p-6">
      <h3 className="font-semibold mb-4 text-slate-900 dark:text-text-primary">What's the Topic?</h3>
      <div className="space-y-4">
        <textarea
          placeholder="Enter your topic or idea..."
          className="w-full h-32 px-4 py-3 
                     bg-white dark:bg-dark-tertiary 
                     border border-slate-200 dark:border-border-dark 
                     rounded-lg 
                     text-slate-900 dark:text-text-primary
                     placeholder-slate-400 dark:placeholder-text-secondary
                     focus:outline-none focus:ring-2 
                     focus:ring-primary dark:focus:ring-accent-blue/20
                     focus:border-primary-300/60 dark:focus:border-accent-blue/50
                     transition-colors"
        />
        <button className="w-full flex items-center justify-center gap-2 
                          px-4 py-2 
                          bg-primary dark:bg-accent-blue 
                          hover:bg-primary-600 dark:hover:bg-accent-blue/90
                          text-white 
                          rounded-lg 
                          transition-colors">
          <Sparkles className="w-4 h-4" />
          <span>Generate Ideas</span>
        </button>
      </div>
    </div>
  );
};

export default TopicInput;