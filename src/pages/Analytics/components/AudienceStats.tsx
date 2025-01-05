import React from 'react';

const AudienceStats = () => {
  return (
    <div className="bg-white dark:bg-dark-secondary border border-slate-200/60 dark:border-border-dark rounded-lg shadow-[0_8px_16px_-6px_rgba(15,23,42,0.08)] dark:shadow-dark-sm p-6">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-text-primary mb-6">Audience Demographics</h2>
      <div className="h-[300px] flex items-center justify-center">
        <p className="text-slate-500 dark:text-text-secondary">No audience data available</p>
      </div>
    </div>
  );
};

export default AudienceStats;