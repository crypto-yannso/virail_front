import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { type: 'Images', engagement: 854, posts: 23 },
  { type: 'Videos', engagement: 1200, posts: 15 },
  { type: 'Articles', engagement: 650, posts: 18 },
  { type: 'Stories', engagement: 950, posts: 45 },
];

const ContentAnalytics = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-6">Content Performance</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="engagement" fill="#007BFF" />
            <Bar dataKey="posts" fill="#5B21B6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ContentAnalytics;