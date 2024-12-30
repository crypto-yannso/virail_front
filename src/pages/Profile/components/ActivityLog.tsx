import React from 'react';
import { Clock } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';

const ActivityLog = () => {
  const { t } = useTranslation();

  const activities = [
    { id: 1, action: 'Login', time: '2 hours ago', location: 'San Francisco, CA' },
    { id: 2, action: 'Password changed', time: '30 days ago', location: 'San Francisco, CA' },
    { id: 3, action: 'Profile updated', time: '2 months ago', location: 'San Francisco, CA' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <Clock size={20} className="text-primary" />
        <h3 className="text-lg font-semibold">{t('profile.recentActivity')}</h3>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="p-3 bg-gray-50 rounded-lg">
            <p className="font-medium">{activity.action}</p>
            <div className="flex items-center justify-between mt-1 text-sm text-gray-500">
              <span>{activity.time}</span>
              <span>{activity.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityLog;