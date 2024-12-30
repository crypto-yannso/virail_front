import React from 'react';
import { TrendingUp, Users, MessageSquare, Share2 } from 'lucide-react';

interface MetricsOverviewProps {
  metrics?: {
    engagement: { value: string; change: string; trend: 'up' | 'down' };
    followers: { value: string; change: string; trend: 'up' | 'down' };
    comments: { value: string; change: string; trend: 'up' | 'down' };
    shares: { value: string; change: string; trend: 'up' | 'down' };
  };
  loading?: boolean;
}

const MetricsOverview: React.FC<MetricsOverviewProps> = ({ metrics, loading = false }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white p-4 rounded-lg shadow-sm animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-24 mb-2" />
            <div className="h-8 bg-gray-200 rounded w-16 mb-2" />
            <div className="h-4 bg-gray-200 rounded w-20" />
          </div>
        ))}
      </div>
    );
  }

  if (!metrics) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <p className="text-gray-500 text-center">No metrics available</p>
      </div>
    );
  }

  const metricsConfig = [
    {
      id: 'engagement',
      title: 'Engagement Rate',
      icon: TrendingUp,
      ...metrics.engagement
    },
    {
      id: 'followers',
      title: 'Total Followers',
      icon: Users,
      ...metrics.followers
    },
    {
      id: 'comments',
      title: 'Comments',
      icon: MessageSquare,
      ...metrics.comments
    },
    {
      id: 'shares',
      title: 'Shares',
      icon: Share2,
      ...metrics.shares
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {metricsConfig.map((metric) => {
        const Icon = metric.icon;
        return (
          <div key={metric.id} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{metric.title}</p>
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

export default MetricsOverview;