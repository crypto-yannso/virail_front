import React from 'react';
import { Bot, Sliders } from 'lucide-react';

const AISettings = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <Bot size={20} className="text-primary" />
        <h2 className="text-lg font-semibold">AI Preferences</h2>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Content Generation Style
          </label>
          <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
            <option>Professional</option>
            <option>Casual</option>
            <option>Creative</option>
            <option>Academic</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            AI Response Speed
          </label>
          <div className="flex items-center gap-4">
            <Sliders size={16} className="text-gray-400" />
            <input
              type="range"
              min="1"
              max="5"
              className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
        
        <div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
            <span>Enable AI suggestions for content improvement</span>
          </label>
        </div>
        
        <div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
            <span>Allow AI to schedule posts automatically</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default AISettings;