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
    <div className="bg-white dark:bg-dark-secondary p-6 rounded-lg shadow-sm dark:shadow-dark-sm">
      <div className="flex items-center gap-2 mb-6">
        <Clock size={20} className="text-primary dark:text-accent-blue" />
        <h3 className="text-lg font-semibold text-slate-900 dark:text-text-primary">{t('profile.recentActivity')}</h3>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="p-3 bg-gray-50 dark:bg-dark-tertiary rounded-lg">
            <p className="font-medium text-slate-900 dark:text-text-primary">{activity.action}</p>
            <div className="flex items-center justify-between mt-1 text-sm text-slate-500 dark:text-text-secondary">
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