import React from 'react';
import { Bell } from 'lucide-react';

const notifications = [
  { id: 'comments', label: 'New Comments', description: 'Get notified when someone comments on your post' },
  { id: 'mentions', label: 'Mentions', description: 'Get notified when someone mentions you' },
  { id: 'analytics', label: 'Analytics Updates', description: 'Receive weekly analytics reports' },
  { id: 'ai', label: 'AI Activities', description: 'Get notified about AI-generated content and activities' },
];

const NotificationSettings = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <Bell size={20} className="text-primary" />
        <h2 className="text-lg font-semibold">Notification Settings</h2>
      </div>
      
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div key={notification.id} className="flex items-start justify-between">
            <div>
              <h3 className="font-medium">{notification.label}</h3>
              <p className="text-sm text-gray-500">{notification.description}</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationSettings;