import React from 'react';
import { Settings } from 'lucide-react';
import { usePlatformStore } from '../../store/platformStore';
import type { Platform } from '../../types/platform';

interface Props {
  selectedPlatforms: string[];
  onSelect: (platformId: string) => void;
  showLimits?: boolean;
  className?: string;
}

const PlatformSelector = ({ selectedPlatforms, onSelect, showLimits = true, className = '' }: Props) => {
  const { platforms } = usePlatformStore();

  return (
    <div className={`bg-white p-6 rounded-lg shadow-sm ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Select Platforms</h3>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Settings size={18} className="text-gray-600" />
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
                isSelected ? 'ring-2 ring-primary' : ''
              } hover:opacity-90 transition-all relative`}
            >
              <Icon size={18} />
              <div className="text-left flex-1">
                <div>{platform.name}</div>
                {showLimits && (
                  <div className="text-xs opacity-75">{platform.limit}</div>
                )}
              </div>
              {platform.connected && (
                <div className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PlatformSelector;