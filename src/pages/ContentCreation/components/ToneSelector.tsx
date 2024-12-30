import React from 'react';
import { Sliders } from 'lucide-react';

const ToneSelector = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="font-semibold mb-4">Adjust Tone of Voice</h3>
      <div className="space-y-4">
        <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
          <option>Professional</option>
          <option>Casual</option>
          <option>Sarcastic</option>
        </select>
        
        <div>
          <label className="block text-sm text-gray-600 mb-2">Formality Scale</label>
          <input
            type="range"
            min="1"
            max="3"
            defaultValue="2"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>Formal</span>
            <span>Balanced</span>
            <span>Informal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToneSelector;