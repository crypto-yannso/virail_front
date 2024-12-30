import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '00:00', engagement: 15, region: 'APAC' },
  { time: '03:00', engagement: 25, region: 'APAC' },
  { time: '06:00', engagement: 45, region: 'APAC' },
  { time: '09:00', engagement: 30, region: 'APAC' },
  { time: '12:00', engagement: 20, region: 'APAC' },
  { time: '15:00', engagement: 35, region: 'APAC' },
  { time: '18:00', engagement: 50, region: 'APAC' },
  { time: '21:00', engagement: 40, region: 'APAC' },
];

const RegionInsights = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="font-semibold mb-6">Regional Engagement Times</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="engagement" fill="#00F0FF" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 p-4 bg-primary/5 rounded-lg">
        <p className="text-sm">
          <span className="font-medium">AI Recommendation:</span> Schedule posts between 
          18:00-19:00 local time for maximum engagement in this region.
        </p>
      </div>
    </div>
  );
};

export default RegionInsights;