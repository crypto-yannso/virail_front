import React from 'react';
import { Tag } from 'lucide-react';

const TopicInput = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="font-semibold mb-4">What's the Topic?</h3>
      <div className="space-y-4">
        <textarea
          placeholder="Describe your topic in 1-2 sentences..."
          className="w-full h-24 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        />
        
        <div className="flex items-center gap-2">
          <Tag size={16} className="text-gray-400" />
          <input
            type="text"
            placeholder="Add keywords separated by commas..."
            className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default TopicInput;