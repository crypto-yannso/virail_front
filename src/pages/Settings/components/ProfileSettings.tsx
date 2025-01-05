import React from 'react';
import { User, Mail, Globe } from 'lucide-react';

const ProfileSettings = () => {
  return (
    <div className="bg-white dark:bg-dark-secondary border border-slate-200/60 dark:border-border-dark rounded-lg shadow-[0_8px_16px_-6px_rgba(15,23,42,0.08)] dark:shadow-dark-sm p-6">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-text-primary mb-6">Profile Settings</h2>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-slate-200 dark:bg-dark-tertiary flex items-center justify-center">
            <User size={32} className="text-slate-400 dark:text-text-secondary" />
          </div>
          <button className="px-4 py-2 border border-slate-200 dark:border-border-dark rounded-lg hover:border-primary dark:hover:border-accent-blue transition-colors text-slate-900 dark:text-text-primary">
            Change Avatar
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-900 dark:text-text-primary mb-1">Display Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-slate-100 dark:bg-dark-tertiary border border-slate-200 dark:border-border-dark rounded-lg text-slate-900 dark:text-text-primary focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent-blue"
              defaultValue="John Doe"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-900 dark:text-text-primary mb-1">Email</label>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-slate-400 dark:text-text-secondary" />
              <input
                type="email"
                className="flex-1 px-4 py-2 bg-slate-100 dark:bg-dark-tertiary border border-slate-200 dark:border-border-dark rounded-lg text-slate-900 dark:text-text-primary focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent-blue"
                defaultValue="john@example.com"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-900 dark:text-text-primary mb-1">Website</label>
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-slate-400 dark:text-text-secondary" />
              <input
                type="url"
                className="flex-1 px-4 py-2 bg-slate-100 dark:bg-dark-tertiary border border-slate-200 dark:border-border-dark rounded-lg text-slate-900 dark:text-text-primary focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent-blue"
                defaultValue="https://example.com"
              />
            </div>
          </div>
        </div>

        <button className="px-4 py-2 bg-primary dark:bg-accent-blue text-white rounded-lg hover:bg-primary/90 dark:hover:bg-accent-blue/90 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfileSettings;