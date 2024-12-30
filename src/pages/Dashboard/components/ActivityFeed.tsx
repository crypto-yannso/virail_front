import React from 'react';
import { useActivityFeed } from '../../../hooks/useActivityFeed';

const ActivityFeed: React.FC = () => {
  const { data, loading } = useActivityFeed();

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="h-4 bg-gray-200 rounded w-24 mb-4" />
        <div className="space-y-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-12 bg-gray-200 rounded animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  if (!data?.length) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <p className="text-gray-500 text-center">No recent activity</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-3">
        {data.map((activity) => (
          <div key={activity.id} className="p-3 bg-gray-50 rounded-lg">
            <p className="text-sm">{activity.description}</p>
            <p className="text-xs text-gray-500 mt-1">{activity.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;