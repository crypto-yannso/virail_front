import React from 'react';
import { Bot, Sliders } from 'lucide-react';

const AISettings = () => {
  return (
    <div className="bg-white dark:bg-dark-secondary border border-slate-200/60 dark:border-border-dark rounded-lg shadow-[0_8px_16px_-6px_rgba(15,23,42,0.08)] dark:shadow-dark-sm p-6">
      <div className="flex items-center gap-2 mb-6">
        <Bot size={20} className="text-slate-600 dark:text-text-secondary" />
        <h2 className="text-lg font-semibold text-slate-900 dark:text-text-primary">AI Preferences</h2>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-900 dark:text-text-primary mb-2">
            Content Generation Style
          </label>
          <div className="relative">
            <select 
              className="w-full p-2 bg-slate-100 dark:bg-dark-tertiary border border-slate-200 dark:border-border-dark rounded-lg text-slate-900 dark:text-text-primary focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent-blue appearance-none"
            >
              <option className="bg-white dark:bg-dark-secondary">Professional</option>
              <option className="bg-white dark:bg-dark-secondary">Casual</option>
              <option className="bg-white dark:bg-dark-secondary">Creative</option>
              <option className="bg-white dark:bg-dark-secondary">Academic</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 text-slate-400 dark:text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-900 dark:text-text-primary mb-2">
            AI Response Speed
          </label>
          <div className="flex items-center gap-4">
            <Sliders size={16} className="text-slate-400 dark:text-text-secondary" />
            <input
              type="range"
              min="1"
              max="5"
              className="flex-1 h-2 bg-slate-200 dark:bg-dark-tertiary rounded-lg appearance-none cursor-pointer accent-primary dark:accent-accent-blue"
            />
          </div>
        </div>
        
        <div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="checkbox" 
              className="rounded border-slate-300 dark:border-border-dark text-primary dark:text-accent-blue focus:ring-primary dark:focus:ring-accent-blue/20" 
            />
            <span className="text-slate-900 dark:text-text-primary">Enable AI suggestions for content improvement</span>
          </label>
        </div>
        
        <div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="checkbox" 
              className="rounded border-slate-300 dark:border-border-dark text-primary dark:text-accent-blue focus:ring-primary dark:focus:ring-accent-blue/20" 
            />
            <span className="text-slate-900 dark:text-text-primary">Allow AI to schedule posts automatically</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default AISettings;