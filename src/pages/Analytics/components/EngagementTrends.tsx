import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useDashboardData } from '../../../hooks/useDashboardData';

const EngagementTrends = () => {
  const { data, isLoading } = useDashboardData();

  if (isLoading) {
    return <div className="h-[400px] bg-white dark:bg-dark-secondary border border-slate-200/60 dark:border-border-dark rounded-lg shadow-[0_8px_16px_-6px_rgba(15,23,42,0.08)] dark:shadow-dark-sm animate-pulse" />;
  }

  return (
    <div className="bg-white dark:bg-dark-secondary border border-slate-200/60 dark:border-border-dark rounded-lg shadow-[0_8px_16px_-6px_rgba(15,23,42,0.08)] dark:shadow-dark-sm p-6">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-text-primary mb-6">Engagement Trends</h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" className="dark:opacity-20" />
            <XAxis 
              dataKey="date" 
              stroke="#64748B"
              className="dark:text-text-secondary"
            />
            <YAxis 
              stroke="#64748B"
              className="dark:text-text-secondary"
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white',
                border: '1px solid #E2E8F0',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
              }}
              className="dark:bg-dark-secondary dark:border-border-dark dark:text-text-primary"
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="engagement" 
              stroke="#3B82F6" 
              strokeWidth={2}
              name="Engagement"
              dot={false}
              activeDot={{ r: 4, className: "dark:fill-accent-blue" }}
            />
            <Line 
              type="monotone" 
              dataKey="reach" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              name="Reach"
              dot={false}
              activeDot={{ r: 4, className: "dark:fill-accent-purple" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EngagementTrends;