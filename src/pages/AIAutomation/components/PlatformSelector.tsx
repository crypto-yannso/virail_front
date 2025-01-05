import React from 'react';
import { Twitter, Linkedin, Instagram, BookOpen } from 'lucide-react';

const platforms = [
  { id: 'twitter', name: 'Twitter/X', icon: Twitter, color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' },
  { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
  { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' },
  { id: 'medium', name: 'Medium', icon: BookOpen, color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400' },
];

const PlatformSelector = () => {
  return (
    <div className="bg-white dark:bg-dark-secondary border border-slate-200/60 dark:border-border-dark rounded-lg shadow-[0_8px_16px_-6px_rgba(15,23,42,0.08)] dark:shadow-dark-sm p-6">
      <h3 className="font-semibold text-slate-900 dark:text-text-primary mb-4">Where Should VIRAIL Focus?</h3>
      <div className="grid grid-cols-2 gap-3 mb-4">
        {platforms.map((platform) => {
          const Icon = platform.icon;
          return (
            <button
              key={platform.id}
              className={`p-3 rounded-lg flex items-center justify-center gap-2 ${platform.color} hover:opacity-90 transition-opacity`}
            >
              <Icon size={18} />
              <span>{platform.name}</span>
            </button>
          );
        })}
      </div>
      <label className="flex items-center justify-between cursor-pointer">
        <span className="text-sm text-slate-900 dark:text-text-primary">Let AI Choose for Me</span>
        <div className="relative inline-flex items-center">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-11 h-6 bg-slate-200 dark:bg-dark-tertiary peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-accent-blue/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white dark:after:bg-dark-secondary after:border-slate-300 dark:after:border-border-dark after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary dark:peer-checked:bg-accent-blue"></div>
        </div>
      </label>
    </div>
  );
};

export default PlatformSelector;