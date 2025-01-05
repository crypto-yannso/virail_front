import React from 'react';
import { TrendingUp, Users, MessageSquare, Share2 } from 'lucide-react';

const metrics = [
  { id: 'engagement', label: 'Engagement Rate', value: '8.2%', change: '+2.1%', trend: 'up', icon: TrendingUp },
  { id: 'followers', label: 'Total Followers', value: '12.5K', change: '+856', trend: 'up', icon: Users },
  { id: 'comments', label: 'Comments', value: '1,203', change: '-5.3%', trend: 'down', icon: MessageSquare },
  { id: 'shares', label: 'Shares', value: '3,845', change: '+12.4%', trend: 'up', icon: Share2 },
];

const PerformanceMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <div key={metric.id} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{metric.label}</p>
                <p className="text-2xl font-semibold mt-1">{metric.value}</p>
              </div>
              <div className={`p-2 rounded-lg ${metric.trend === 'up' ? 'bg-green-100' : 'bg-red-100'}`}>
                <Icon size={20} className={metric.trend === 'up' ? 'text-green-600' : 'text-red-600'} />
              </div>
            </div>
            <p className={`mt-2 text-sm ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
              {metric.change} from last period
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default PerformanceMetrics;