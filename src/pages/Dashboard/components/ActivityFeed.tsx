import React from 'react';
import { useActivityFeed } from '../../../hooks/useActivityFeed';

const ActivityFeed: React.FC = () => {
  const { data, loading } = useActivityFeed();

  if (loading) {
    return (
      <div className="dashboard-card p-6">
        <div className="h-4 bg-slate-200 dark:bg-dark-tertiary rounded w-24 mb-4 animate-pulse" />
        <div className="space-y-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-12 bg-slate-200 dark:bg-dark-tertiary rounded animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  if (!data?.length) {
    return (
      <div className="dashboard-card p-6">
        <h2 className="text-lg font-semibold mb-4 text-slate-900 dark:text-text-primary">Recent Activity</h2>
        <p className="text-slate-500 dark:text-text-secondary text-center">No recent activity</p>
      </div>
    );
  }

  return (
    <div className="dashboard-card p-6">
      <h2 className="text-lg font-semibold mb-4 text-slate-900 dark:text-text-primary">Recent Activity</h2>
      <div className="space-y-3">
        {data.map((activity) => (
          <div key={activity.id} 
               className="p-3 bg-slate-50 dark:bg-dark-tertiary 
                          rounded-lg hover:bg-slate-100 dark:hover:bg-dark-quaternary 
                          transition-colors duration-200">
            <p className="text-sm text-slate-800 dark:text-text-primary">{activity.description}</p>
            <p className="text-xs text-slate-500 dark:text-text-secondary mt-1">{activity.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;