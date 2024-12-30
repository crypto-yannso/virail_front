import React from 'react';
import { ListChecks, MoreVertical, Clock } from 'lucide-react';

const queuedPosts = [
  { id: 1, title: 'AI Technology Trends 2024', time: '14:00', status: 'ready' },
  { id: 2, title: 'Machine Learning Best Practices', time: '16:30', status: 'draft' },
  { id: 3, title: 'Future of Automation', time: '18:00', status: 'ready' },
];

const ContentQueue = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <ListChecks className="text-primary" size={20} />
          <h3 className="font-semibold">Content Queue</h3>
        </div>
        <button className="text-sm text-primary hover:text-primary/80">
          View All
        </button>
      </div>

      <div className="space-y-3">
        {queuedPosts.map((post) => (
          <div
            key={post.id}
            className="p-4 border border-gray-100 rounded-lg hover:border-primary transition-all group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${
                  post.status === 'ready' ? 'bg-green-500' : 'bg-yellow-500'
                }`} />
                <div>
                  <h4 className="font-medium text-gray-900">{post.title}</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                    <Clock size={14} />
                    <span>{post.time}</span>
                  </div>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreVertical size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 py-2 border border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-primary hover:text-primary transition-colors">
        Add Manual Post
      </button>
    </div>
  );
};

export default ContentQueue;