import React from 'react';
import { Settings } from 'lucide-react';
import { platforms } from '../../data/platforms';
import type { Platform } from '../../types/platform';

interface Props {
  selectedPlatforms: string[];
  onSelect: (platformId: string) => void;
  showLimits?: boolean;
  className?: string;
}

const PlatformSelector = ({ selectedPlatforms, onSelect, showLimits = true, className = '' }: Props) => {
  return (
    <div className={`bg-white dark:bg-dark-secondary border border-slate-200/60 dark:border-border-dark rounded-lg shadow-[0_8px_16px_-6px_rgba(15,23,42,0.08)] dark:shadow-dark-sm p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-slate-900 dark:text-text-primary">Select Platforms</h3>
        <button className="p-2 hover:bg-slate-100 dark:hover:bg-dark-tertiary rounded-lg transition-colors">
          <Settings size={18} className="text-slate-600 dark:text-text-secondary" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {platforms.map((platform) => {
          const Icon = platform.icon;
          const isSelected = selectedPlatforms.includes(platform.id);
          
          return (
            <button
              key={platform.id}
              onClick={() => onSelect(platform.id)}
              className={`p-3 rounded-lg flex items-center gap-2 ${platform.color} ${
                isSelected ? 'ring-2 ring-primary dark:ring-accent-blue' : ''
              } hover:opacity-90 transition-all relative dark:bg-opacity-10`}
            >
              <Icon size={18} className="dark:text-text-primary" />
              <div className="text-left flex-1">
                <div className="dark:text-text-primary">{platform.name}</div>
                {showLimits && (
                  <div className="text-xs opacity-75 dark:text-text-secondary">{platform.limit}</div>
                )}
              </div>
              {platform.connected && (
                <div className="absolute top-1 right-1 w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PlatformSelector;