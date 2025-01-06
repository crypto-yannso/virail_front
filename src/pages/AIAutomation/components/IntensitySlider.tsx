import React, { useState, useEffect } from 'react';
import { Gauge } from 'lucide-react';

const IntensitySlider = () => {
  const [value, setValue] = useState(2);

  useEffect(() => {
    // Met à jour la variable CSS pour l'effet de progression
    const progress = ((value - 1) / 2) * 100;
    document.documentElement.style.setProperty('--range-progress', `${progress}%`);
  }, [value]);

  return (
    <div className="card p-6">
      <div className="flex items-center gap-2 mb-4">
        <Gauge className="text-primary-500 dark:text-accent-blue" size={20} />
        <h3 className="font-semibold text-slate-900 dark:text-text-primary">Automation Intensity</h3>
      </div>
      <div className="space-y-4">
        <input
          type="range"
          min="1"
          max="3"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full slider-primary"
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