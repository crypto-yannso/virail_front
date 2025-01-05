import React from 'react';
import { TrendingUp, Users, ExternalLink } from 'lucide-react';
import type { GrowthMetrics } from '../../types/raas';

interface Props {
  metrics: GrowthMetrics;
  title: string;
}

const GrowthMetricsCard = ({ metrics, title }: Props) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="font-semibold mb-4">{title}</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="text-primary" size={20} />
          <div>
            <p className="text-sm text-gray-600">Engagement</p>
            <p className="text-xl font-semibold">{metrics.engagement}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Users className="text-primary" size={20} />
          <div>
            <p className="text-sm text-gray-600">Followers</p>
            <p className="text-xl font-semibold">{metrics.followers}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ExternalLink className="text-primary" size={20} />
          <div>
            <p className="text-sm text-gray-600">Traffic</p>
            <p className="text-xl font-semibold">{metrics.traffic}</p>
          </div>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Weekly Growth</span>
          <span className="text-sm font-medium text-green-600">
            +{metrics.weeklyGrowth}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default GrowthMetricsCard;