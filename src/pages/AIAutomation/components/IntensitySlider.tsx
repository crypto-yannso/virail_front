import React from 'react';
import { Gauge } from 'lucide-react';

const IntensitySlider = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="font-semibold mb-4">Automation Intensity</h3>
      <div className="space-y-4">
        <input
          type="range"
          min="1"
          max="3"
          defaultValue="2"
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
        />
        <div className="flex justify-between text-sm text-gray-500">
          <span>Light</span>
          <span>Balanced</span>
          <span>Aggressive</span>
        </div>
      </div>
    </div>
  );
};

export default IntensitySlider;