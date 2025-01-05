import React, { useState } from 'react';
import { Sliders } from 'lucide-react';

const ToneSelector = () => {
  const [toneValue, setToneValue] = useState(50);
  const [formalityValue, setFormalityValue] = useState(50);

  const getToneLabel = (value: number) => {
    if (value < 33) return 'Professional';
    if (value < 66) return 'Casual';
    return 'Sarcastic';
  };

  const getFormalityLabel = (value: number) => {
    if (value < 33) return 'Formal';
    if (value < 66) return 'Balanced';
    return 'Informal';
  };

  return (
    <div className="bg-white dark:bg-dark-secondary 
                    border border-slate-200/60 dark:border-border-dark
                    rounded-lg 
                    shadow-[0_8px_16px_-6px_rgba(15,23,42,0.08)] dark:shadow-dark-sm
                    p-6">
      <h3 className="font-semibold mb-4 text-slate-900 dark:text-text-primary">Adjust Tone of Voice</h3>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm text-slate-600 dark:text-text-secondary">Tone Scale</label>
            <span className="text-sm font-medium text-slate-700 dark:text-text-primary">{getToneLabel(toneValue)}</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={toneValue}
            onChange={(e) => setToneValue(parseInt(e.target.value))}
            className="w-full h-2 
                     bg-slate-200 dark:bg-dark-tertiary 
                     rounded-lg appearance-none cursor-pointer 
                     accent-primary dark:accent-accent-blue
                     transition-all duration-150"
          />
          <div className="flex justify-between text-sm text-slate-500 dark:text-text-secondary mt-1">
            <span>Professional</span>
            <span>Casual</span>
            <span>Sarcastic</span>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm text-slate-600 dark:text-text-secondary">Formality Scale</label>
            <span className="text-sm font-medium text-slate-700 dark:text-text-primary">{getFormalityLabel(formalityValue)}</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={formalityValue}
            onChange={(e) => setFormalityValue(parseInt(e.target.value))}
            className="w-full h-2 
                     bg-slate-200 dark:bg-dark-tertiary 
                     rounded-lg appearance-none cursor-pointer 
                     accent-primary dark:accent-accent-blue
                     transition-all duration-150"
          />
          <div className="flex justify-between text-sm text-slate-500 dark:text-text-secondary mt-1">
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