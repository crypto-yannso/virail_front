import React from 'react';
import { RefreshCw, Send } from 'lucide-react';
import { platforms } from '../../../data/platforms';

interface Props {
  platforms: string[];
}

const ContentPreview: React.FC<Props> = ({ platforms: selectedPlatformIds }) => {
  const selectedPlatforms = platforms.filter(p => selectedPlatformIds.includes(p.id));

  return (
    <div className="bg-white dark:bg-dark-secondary 
                    border border-slate-200/60 dark:border-border-dark
                    rounded-lg 
                    shadow-[0_8px_16px_-6px_rgba(15,23,42,0.08)] dark:shadow-dark-sm
                    p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-slate-900 dark:text-text-primary">Content Preview</h3>
        <button className="p-2 hover:bg-slate-100 dark:hover:bg-dark-tertiary rounded-lg transition-colors">
          <RefreshCw size={18} className="text-slate-600 dark:text-text-secondary" />
        </button>
      </div>
      
      <div className="flex-1 border border-slate-200 dark:border-border-dark rounded-lg p-4 mb-4">
        <div 
          contentEditable 
          className="h-full focus:outline-none text-slate-800 dark:text-text-primary" 
          suppressContentEditableWarning
        >
          Click to edit your generated content here...
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="flex gap-2">
          {selectedPlatforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <label key={platform.id} className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  className="rounded border-slate-300 dark:border-border-dark 
                            text-primary dark:text-accent-blue 
                            focus:ring-primary dark:focus:ring-accent-blue/20
                            dark:bg-dark-tertiary" 
                />
                <Icon size={16} className="text-slate-700 dark:text-text-primary" />
                <span className="text-sm text-slate-700 dark:text-text-primary">{platform.name}</span>
              </label>
            );
          })}
        </div>
        
        <div className="flex gap-3">
          <button className="flex-1 bg-transparent border border-accent-blue/30 
                            hover:border-accent-blue hover:shadow-dark-glow 
                            text-slate-900 dark:text-text-primary 
                            rounded-lg py-2 px-4 
                            flex items-center justify-center gap-2 
                            transition-all duration-300">
            <Send size={18} />
            Post to Selected Platforms
          </button>
          <button className="px-4 py-2 border border-slate-200 dark:border-border-dark 
                            rounded-lg hover:border-accent-blue dark:hover:border-accent-blue/50 
                            text-slate-700 dark:text-text-primary
                            transition-colors">
            Save Draft
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentPreview;