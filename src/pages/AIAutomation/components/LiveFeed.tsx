import React from 'react';

interface Props {
  platforms: string[];
}

const LiveFeed: React.FC<Props> = () => {
  return (
    <div className="bg-white dark:bg-dark-secondary border border-slate-200/60 dark:border-border-dark rounded-lg shadow-[0_8px_16px_-6px_rgba(15,23,42,0.08)] dark:shadow-dark-sm p-6">
      <h3 className="font-semibold text-gray-900 dark:text-text-primary mb-4">Recent AI Actions</h3>
      <div className="text-center text-gray-500 dark:text-text-secondary py-4">
        No recent actions
      </div>
    </div>
  );
};

export default LiveFeed;