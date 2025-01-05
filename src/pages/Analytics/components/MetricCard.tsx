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
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
        <div className={`p-2 rounded-lg ${trend === 'up' ? 'bg-green-100' : 'bg-red-100'}`}>
          <Icon size={20} className={trend === 'up' ? 'text-green-600' : 'text-red-600'} />
        </div>
      </div>
      <p className={`mt-2 text-sm ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
        {change} from last period
      </p>
    </div>
  );
};

export default MetricCard;