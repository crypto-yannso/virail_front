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
        <PageHeader title="Analytics Overview" className="text-slate-900 dark:text-text-primary" />
        <div className="relative w-full xs:w-auto">
          <select className="w-full p-2 bg-slate-100 dark:bg-dark-tertiary border border-slate-200 dark:border-border-dark rounded-lg text-slate-900 dark:text-text-primary focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent-blue appearance-none">
            <option className="bg-white dark:bg-dark-secondary">Last 7 days</option>
            <option className="bg-white dark:bg-dark-secondary">Last 30 days</option>
            <option className="bg-white dark:bg-dark-secondary">Last 3 months</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 text-slate-400 dark:text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
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