import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  trend: 'up' | 'down';
}

const MetricCard = ({ title, value, change, icon: Icon, trend }: MetricCardProps) => {
  return (
    <div className="dashboard-card p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-600 dark:text-text-secondary">{title}</p>
          <h3 className="text-2xl font-semibold mt-1 text-slate-900 dark:text-text-primary">{value}</h3>
        </div>
        <div className={`p-2 rounded-lg ${
          trend === 'up' 
            ? 'bg-emerald-100 dark:bg-accent-green/20' 
            : 'bg-red-100 dark:bg-accent-red/20'
        }`}>
          <Icon 
            size={20} 
            className={`icon-float ${trend === 'up' 
              ? 'text-emerald-600 dark:text-accent-green' 
              : 'text-red-600 dark:text-accent-red'
            }`} 
          />
        </div>
      </div>
      <div className={`mt-2 text-sm ${
        trend === 'up' 
          ? 'text-emerald-600 dark:text-accent-green' 
          : 'text-red-600 dark:text-accent-red'
      }`}>
        {change} from last month
      </div>
    </div>
  );
};

export default MetricCard;