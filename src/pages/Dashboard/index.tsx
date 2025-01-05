import React from 'react';
import { PageHeader } from '@/components/layout/page-header';
import { Section } from '@/components/ui/section';
import PerformanceGraph from './components/PerformanceGraph';
import MetricsGrid from './components/MetricsGrid';
import QuickActions from './components/QuickActions';
import ActivityFeed from './components/ActivityFeed';
import { useDashboardData } from '../../hooks/useDashboardData';
import { useTranslation } from '../../hooks/useTranslation';

const Dashboard = () => {
  const { data, loading } = useDashboardData();
  const { t } = useTranslation();

  return (
    <div className="space-y-6 opacity-0 animate-fade-in-smooth">
      <style jsx>{`
        @keyframes fadeInSmooth {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-in-smooth {
          animation: fadeInSmooth 0.4s ease-out forwards;
        }
      `}</style>
      <PageHeader title={t('dashboard.overview')} />
      
      <Section>
        <QuickActions />
      </Section>
      
      <Section>
        <MetricsGrid loading={loading} data={data?.metrics} />
      </Section>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="dashboard-card p-6">
            <PerformanceGraph data={data?.performance} loading={loading} />
          </div>
        </div>
        <div>
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;