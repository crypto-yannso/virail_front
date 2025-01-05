import React from 'react';
import { Sliders, MessageSquare, Repeat2, ThumbsUp } from 'lucide-react';

const InteractionControl = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <Sliders className="text-primary" size={20} />
        <h3 className="font-semibold">Engagement Controls</h3>
      </div>

      <div className="space-y-6">
        {/* Likes Control */}
        <div>
          <label className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <ThumbsUp size={16} className="text-gray-500" />
              <span className="text-sm font-medium">Likes per Day</span>
            </div>
            <span className="text-sm text-gray-500">50</span>
          </label>
          <input
            type="range"
            min="5"
            max="100"
            defaultValue="50"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>5</span>
            <span>100</span>
          </div>
        </div>

        {/* Comments Control */}
        <div>
          <label className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <MessageSquare size={16} className="text-gray-500" />
              <span className="text-sm font-medium">Comments per Day</span>
            </div>
            <span className="text-sm text-gray-500">10</span>
          </label>
          <input
            type="range"
            min="1"
            max="20"
            defaultValue="10"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1</span>
            <span>20</span>
          </div>
        </div>

        {/* Retweets Control */}
        <div>
          <label className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Repeat2 size={16} className="text-gray-500" />
              <span className="text-sm font-medium">Retweets per Day</span>
            </div>
            <span className="text-sm text-gray-500">25</span>
          </label>
          <input
            type="range"
            min="1"
            max="50"
            defaultValue="25"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1</span>
            <span>50</span>
          </div>
        </div>

        {/* Comment Style */}
        <div>
          <label className="block text-sm font-medium mb-2">Comment Style</label>
          <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="professional">Professional</option>
            <option value="casual">Casual</option>
            <option value="sarcastic">Sarcastic</option>
          </select>
        </div>

        {/* GIF Responses */}
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Allow GIF Responses</label>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default InteractionControl;