import React from 'react';
import { Wand2 } from 'lucide-react';
import ToneSelector from './ToneSelector';

const ContentForm = () => {
  return (
    <div className="bg-white dark:bg-dark-secondary 
                    border border-slate-200/60 dark:border-border-dark
                    rounded-lg 
                    shadow-[0_8px_16px_-6px_rgba(15,23,42,0.08)] dark:shadow-dark-sm
                    p-6">
      <h2 className="text-xl font-semibold mb-6 text-slate-900 dark:text-text-primary">Create Content</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-text-primary mb-2">
            Content Title
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg 
                      bg-white dark:bg-dark-tertiary 
                      border border-slate-200 dark:border-border-dark 
                      text-slate-900 dark:text-text-primary
                      placeholder:text-slate-500 dark:placeholder:text-text-secondary
                      focus:outline-none focus:ring-2 
                      focus:ring-primary dark:focus:ring-accent-blue/20
                      focus:border-primary-300/60 dark:focus:border-accent-blue/50
                      transition-colors"
            placeholder="Enter title..."
          />
        </div>
        
        <ToneSelector />
        
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-text-primary mb-2">
            Content Body
          </label>
          <textarea
            className="w-full h-48 px-4 py-2 rounded-lg 
                      bg-white dark:bg-dark-tertiary 
                      border border-slate-200 dark:border-border-dark 
                      text-slate-900 dark:text-text-primary
                      placeholder:text-slate-500 dark:placeholder:text-text-secondary
                      focus:outline-none focus:ring-2 
                      focus:ring-primary dark:focus:ring-accent-blue/20
                      focus:border-primary-300/60 dark:focus:border-accent-blue/50
                      resize-none transition-colors"
            placeholder="Start writing..."
          />
        </div>

        <button
          type="button"
          className="w-full bg-primary-600 dark:bg-accent-blue
                     hover:bg-primary-700 dark:hover:bg-accent-blue/90
                     text-white dark:text-text-primary
                     font-semibold rounded-lg px-4 py-2.5
                     shadow-[0_4px_12px_-6px_rgba(99,102,241,0.4)] dark:shadow-dark-sm
                     hover:shadow-[0_6px_16px_-6px_rgba(99,102,241,0.5)] dark:hover:shadow-dark-glow
                     disabled:opacity-50 disabled:cursor-not-allowed
                     transition-all duration-300
                     flex items-center justify-center gap-2"
        >
          <Wand2 size={18} />
          Generate with AI
        </button>
      </form>
    </div>
  );
}

export default ContentForm;