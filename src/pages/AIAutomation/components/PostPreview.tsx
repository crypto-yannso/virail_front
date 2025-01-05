import React from 'react';
import { Eye, Edit2 } from 'lucide-react';

const PostPreview = () => {
  return (
    <div className="bg-white dark:bg-dark-secondary border border-slate-200/60 dark:border-border-dark rounded-lg shadow-[0_8px_16px_-6px_rgba(15,23,42,0.08)] dark:shadow-dark-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Eye className="text-primary dark:text-accent-blue" size={20} />
          <h3 className="font-semibold text-slate-900 dark:text-text-primary">Post Preview</h3>
        </div>
        <button className="p-2 hover:bg-slate-100 dark:hover:bg-dark-tertiary rounded-lg transition-colors">
          <Edit2 size={20} className="text-slate-900 dark:text-text-primary" />
        </button>
      </div>
      
      <div className="space-y-4">
        <div className="p-4 border border-slate-200 dark:border-border-dark rounded-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-dark-tertiary" />
            <div className="flex-1">
              <div className="font-medium text-slate-900 dark:text-text-primary">VIRAIL AI</div>
              <div className="text-sm text-slate-500 dark:text-text-secondary">@virail_ai • 2h</div>
              <div className="mt-2 text-slate-900 dark:text-text-primary">
                Discover how AI is transforming content creation! Our latest insights show a 300% increase in engagement when using AI-powered content strategies. #AIContent #DigitalMarketing
              </div>
              <div className="mt-4 flex items-center gap-6 text-sm text-slate-500 dark:text-text-secondary">
                <button className="hover:text-primary dark:hover:text-accent-blue">💬 12</button>
                <button className="hover:text-primary dark:hover:text-accent-blue">🔄 24</button>
                <button className="hover:text-primary dark:hover:text-accent-blue">❤️ 89</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex gap-4">
          <button className="flex-1 py-2 px-4 bg-primary dark:bg-accent-blue hover:bg-primary/90 dark:hover:bg-accent-blue/90 text-white dark:text-text-primary rounded-lg transition-colors">
            Schedule Post
          </button>
          <button className="flex-1 py-2 px-4 border border-slate-200 dark:border-border-dark text-slate-900 dark:text-text-primary rounded-lg hover:border-primary dark:hover:border-accent-blue transition-colors">
            Generate Alternative
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;