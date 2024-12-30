import React from 'react';
import { TrendingUp, Users, Bot } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { formatNumber, formatPercent } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value?: number;
  change?: number;
  icon: React.ElementType;
  loading?: boolean;
}

const MetricCard = ({ title, value, change, icon: Icon, loading }: MetricCardProps) => {
  if (loading) {
    return (
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <Icon className="h-4 w-4 text-gray-500" />
        </CardHeader>
        <CardContent>
          <div className="h-7 bg-gray-200 rounded animate-pulse mb-1" />
          <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
        </CardContent>
      </Card>
    );
  }

  if (typeof value === 'undefined' || typeof change === 'undefined') {
    return (
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <Icon className="h-4 w-4 text-gray-500" />
        </CardHeader>
        <CardContent>
          <div className="text-center text-gray-500">No data available</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-gray-500" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{formatNumber(value)}</div>
        <p className={`text-xs ${change > 0 ? 'text-green-600' : 'text-red-600'}`}>
          {formatPercent(change)} from last month
        </p>
      </CardContent>
    </Card>
  );
};

interface MetricsGridProps {
  loading?: boolean;
  data?: {
    engagement: number;
    engagementChange: number;
    users: number;
    usersChange: number;
    aiActions: number;
    aiActionsChange: number;
  };
}

export default function MetricsGrid({ loading, data }: MetricsGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <MetricCard
        title="Total Engagement"
        value={data?.engagement}
        change={data?.engagementChange}
        icon={TrendingUp}
        loading={loading}
      />
      <MetricCard
        title="Active Users"
        value={data?.users}
        change={data?.usersChange}
        icon={Users}
        loading={loading}
      />
      <MetricCard
        title="AI Actions"
        value={data?.aiActions}
        change={data?.aiActionsChange}
        icon={Bot}
        loading={loading}
      />
    </div>
  );
}