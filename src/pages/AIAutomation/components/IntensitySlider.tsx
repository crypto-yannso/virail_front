import React from 'react';
import { Gauge } from 'lucide-react';

const IntensitySlider = () => {
  return (
    <div className="bg-white dark:bg-dark-secondary border border-slate-200/60 dark:border-border-dark rounded-lg shadow-[0_8px_16px_-6px_rgba(15,23,42,0.08)] dark:shadow-dark-sm p-6">
      <div className="flex items-center gap-2 mb-4">
        <Gauge className="text-primary dark:text-accent-blue" size={20} />
        <h3 className="font-semibold text-slate-900 dark:text-text-primary">Automation Intensity</h3>
      </div>
      <div className="space-y-4">
        <input
          type="range"
          min="1"
          max="3"
          defaultValue="2"
          className="w-full h-2 bg-slate-200 dark:bg-dark-tertiary rounded-lg appearance-none cursor-pointer accent-primary dark:accent-accent-blue"
        />
        <div className="flex justify-between text-sm text-slate-500 dark:text-text-secondary">
          <span>Light</span>
          <span>Balanced</span>
          <span>Aggressive</span>
        </div>
      </div>
    </div>
  );
};

export default IntensitySlider;