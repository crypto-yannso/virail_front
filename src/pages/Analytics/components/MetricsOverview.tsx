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
          <div key={i} className="bg-white dark:bg-dark-secondary border border-slate-200/60 dark:border-border-dark rounded-lg shadow-[0_8px_16px_-6px_rgba(15,23,42,0.08)] dark:shadow-dark-sm p-4 animate-pulse">
            <div className="h-4 bg-slate-200 dark:bg-dark-tertiary rounded w-24 mb-2" />
            <div className="h-8 bg-slate-200 dark:bg-dark-tertiary rounded w-16 mb-2" />
            <div className="h-4 bg-slate-200 dark:bg-dark-tertiary rounded w-20" />
          </div>
        ))}
      </div>
    );
  }

  if (!metrics) {
    return (
      <div className="bg-white dark:bg-dark-secondary border border-slate-200/60 dark:border-border-dark rounded-lg shadow-[0_8px_16px_-6px_rgba(15,23,42,0.08)] dark:shadow-dark-sm p-4">
        <p className="text-slate-500 dark:text-text-secondary text-center">No metrics available</p>
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
          <div key={metric.id} className="bg-white dark:bg-dark-secondary border border-slate-200/60 dark:border-border-dark rounded-lg shadow-[0_8px_16px_-6px_rgba(15,23,42,0.08)] dark:shadow-dark-sm p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 dark:text-text-secondary">{metric.title}</p>
                <p className="text-2xl font-semibold text-slate-900 dark:text-text-primary mt-1">{metric.value}</p>
              </div>
              <div className={`p-2 rounded-lg ${
                metric.trend === 'up' 
                  ? 'bg-emerald-100/80 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' 
                  : 'bg-red-100/80 dark:bg-red-900/30 text-red-600 dark:text-red-400'
              }`}>
                <Icon size={20} />
              </div>
            </div>
            <p className={`mt-2 text-sm ${
              metric.trend === 'up'
                ? 'text-emerald-600 dark:text-emerald-400'
                : 'text-red-600 dark:text-red-400'
            }`}>
              {metric.change} from last period
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default MetricsOverview;