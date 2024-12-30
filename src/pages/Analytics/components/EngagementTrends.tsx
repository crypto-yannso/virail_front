import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useDashboardData } from '../../../hooks/useDashboardData';

const EngagementTrends = () => {
  const { data, isLoading } = useDashboardData();

  if (isLoading) {
    return <div className="h-[400px] bg-white rounded-lg animate-pulse" />;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-6">Engagement Trends</h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="engagement" 
              stroke="#007BFF" 
              strokeWidth={2}
              name="Engagement"
            />
            <Line 
              type="monotone" 
              dataKey="reach" 
              stroke="#5B21B6" 
              strokeWidth={2}
              name="Reach"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EngagementTrends;