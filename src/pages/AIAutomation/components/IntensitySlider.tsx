import React, { useState } from 'react';
import { Gauge } from 'lucide-react';

const IntensitySlider = () => {
  const [value, setValue] = useState(50);

  const getIntensityLabel = (value: number) => {
    if (value < 33) return 'Light';
    if (value < 66) return 'Balanced';
    return 'Aggressive';
  };

  return (
    <div className="bg-white dark:bg-dark-secondary 
                    border border-slate-200/60 dark:border-border-dark
                    rounded-lg 
                    shadow-[0_8px_16px_-6px_rgba(15,23,42,0.08)] dark:shadow-dark-sm
                    p-6">
      <div className="flex items-center gap-2 mb-4">
        <Gauge className="text-primary-500 dark:text-accent-blue" size={20} />
        <h3 className="font-semibold text-slate-900 dark:text-text-primary">Automation Intensity</h3>
      </div>
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm text-slate-600 dark:text-text-secondary">Intensity Scale</label>
          <span className="text-sm font-medium text-slate-700 dark:text-text-primary">{getIntensityLabel(value)}</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
          className="w-full h-2 
                   bg-slate-200 dark:bg-dark-tertiary 
                   rounded-lg appearance-none cursor-pointer 
                   accent-primary dark:accent-accent-blue
                   transition-all duration-150"
        />
        <div className="flex justify-between text-sm text-slate-500 dark:text-text-secondary mt-1">
          <span>Light</span>
          <span>Balanced</span>
          <span>Aggressive</span>
        </div>
      </div>
    </div>
  );
};

export default IntensitySlider;