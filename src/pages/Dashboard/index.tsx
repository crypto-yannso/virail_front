import React from 'react';
import { PageHeader } from '@/components/layout/page-header';
import { Section } from '@/components/ui/section';
import PerformanceGraph from './components/PerformanceGraph';
import MetricsGrid from './components/MetricsGrid';
import QuickActions from './components/QuickActions';
import ActivityFeed from './components/ActivityFeed';
import ContentTypeChart from './components/ContentTypeChart';
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
          <PerformanceGraph data={data?.performance} loading={loading} />
        </div>
        <div>
          <ActivityFeed />
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ContentTypeChart loading={loading} />
          <div className="dashboard-card p-6">
            <h2 className="text-lg font-semibold mb-4">Distribution Géographique</h2>
            <div className="h-[400px] flex items-center justify-center text-gray-500">
              Carte à venir...
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Dashboard;