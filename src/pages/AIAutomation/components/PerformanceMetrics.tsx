import React from 'react';
import { RefreshCcw, UserPlus, MessageSquare } from 'lucide-react';

interface Props {
  platforms: string[];
}

const PerformanceMetrics: React.FC<Props> = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-white dark:bg-dark-secondary border border-slate-200/60 dark:border-border-dark rounded-lg shadow-[0_8px_16px_-6px_rgba(15,23,42,0.08)] dark:shadow-dark-sm p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 dark:bg-accent-blue/10 rounded-lg">
            <RefreshCcw size={18} className="text-primary dark:text-accent-blue" />
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-text-secondary">Actions Taken</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-text-primary">-</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-dark-secondary border border-slate-200/60 dark:border-border-dark rounded-lg shadow-[0_8px_16px_-6px_rgba(15,23,42,0.08)] dark:shadow-dark-sm p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 dark:bg-accent-blue/10 rounded-lg">
            <UserPlus size={18} className="text-primary dark:text-accent-blue" />
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-text-secondary">Follower Growth</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-text-primary">-</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-dark-secondary border border-slate-200/60 dark:border-border-dark rounded-lg shadow-[0_8px_16px_-6px_rgba(15,23,42,0.08)] dark:shadow-dark-sm p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 dark:bg-accent-blue/10 rounded-lg">
            <MessageSquare size={18} className="text-primary dark:text-accent-blue" />
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-text-secondary">Comments Generated</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-text-primary">-</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;