import React from 'react';
import MetricsOverview from './components/MetricsOverview';
import EngagementTrends from './components/EngagementTrends';
import AudienceStats from './components/AudienceStats';
import ContentPerformance from './components/ContentPerformance';
import { useAnalytics } from '../../hooks/useAnalytics';
import { PageHeader } from '@/components/layout/page-header';

const Analytics = () => {
  const { metrics, loading } = useAnalytics();

  return (
    <div className="space-y-6">
      <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center gap-4">
        <PageHeader title="Analytics Overview" />
        <select className="input w-full xs:w-auto">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 3 months</option>
        </select>
      </div>
      
      {/* Metrics Overview */}
      <MetricsOverview metrics={metrics} loading={loading} />
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <EngagementTrends />
        </div>
        <div>
          <AudienceStats />
        </div>
      </div>
      
      {/* Content Performance */}
      <ContentPerformance />
    </div>
  );
};

export default Analytics;