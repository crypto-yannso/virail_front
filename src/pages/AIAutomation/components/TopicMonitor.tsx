import React from 'react';
import { Hash, TrendingUp, AlertCircle } from 'lucide-react';

const topics = [
  { id: 1, name: '#AI', volume: 'High', trend: 'up', alert: false },
  { id: 2, name: '#MachineLearning', volume: 'Medium', trend: 'up', alert: true },
  { id: 3, name: '#Innovation', volume: 'High', trend: 'stable', alert: false },
  { id: 4, name: '#Tech', volume: 'Medium', trend: 'down', alert: false },
];

const TopicMonitor = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Hash className="text-primary" size={20} />
          <h3 className="font-semibold">Topic Monitor</h3>
        </div>
        <button className="text-sm text-primary hover:text-primary/80">
          Add Topic
        </button>
      </div>

      <div className="space-y-3">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="p-4 border border-gray-100 rounded-lg hover:border-primary transition-all group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{topic.name}</span>
                  {topic.alert && (
                    <AlertCircle size={16} className="text-yellow-500" />
                  )}
                </div>
                <span className={`text-sm ${
                  topic.trend === 'up' ? 'text-green-500' :
                  topic.trend === 'down' ? 'text-red-500' :
                  'text-gray-500'
                }`}>
                  {topic.volume}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp size={16} className={
                  topic.trend === 'up' ? 'text-green-500' :
                  topic.trend === 'down' ? 'text-red-500' :
                  'text-gray-500'
                } />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicMonitor;