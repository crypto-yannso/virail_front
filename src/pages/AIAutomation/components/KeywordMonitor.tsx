import React from 'react';
import { Hash, Plus } from 'lucide-react';

const keywords = [
  { id: 1, term: '#AI', volume: 'High', trend: 'up' },
  { id: 2, term: '#MachineLearning', volume: 'Medium', trend: 'up' },
  { id: 3, term: '#DataScience', volume: 'High', trend: 'stable' },
  { id: 4, term: '#Innovation', volume: 'Low', trend: 'down' },
];

const KeywordMonitor = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Hash className="text-primary" size={20} />
          <h3 className="font-semibold">Keyword Monitor</h3>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Plus size={20} />
        </button>
      </div>
      
      <div className="space-y-4">
        {keywords.map((keyword) => (
          <div
            key={keyword.id}
            className="p-3 border border-gray-200 rounded-lg hover:border-primary transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{keyword.term}</span>
              <span className={`text-sm ${
                keyword.trend === 'up' ? 'text-green-500' : 
                keyword.trend === 'down' ? 'text-red-500' : 
                'text-gray-500'
              }`}>
                {keyword.volume}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 p-2 border border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-primary hover:text-primary transition-colors">
        Add Keyword
      </button>
    </div>
  );
};

export default KeywordMonitor;