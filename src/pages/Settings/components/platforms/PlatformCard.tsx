import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { ConnectedPlatform } from '../../../../types/platform';

interface Props {
  platform: ConnectedPlatform;
  onDisconnect: (id: string) => void;
  onReconnect: (id: string) => void;
}

const PlatformCard = ({ platform, onDisconnect, onReconnect }: Props) => {
  const Icon = platform.icon;
  
  return (
    <div className="p-4 bg-slate-100 dark:bg-dark-tertiary rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${platform.color}`}>
            <Icon size={20} />
          </div>
          <div>
            <h3 className="font-medium text-slate-900 dark:text-text-primary">{platform.name}</h3>
            <p className="text-sm text-slate-500 dark:text-text-secondary">
              {platform.connected ? platform.accountName : 'Not connected'}
            </p>
          </div>
        </div>
        
        {platform.connected ? (
          <button
            onClick={() => onDisconnect(platform.id)}
            className="text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
          >
            Disconnect
          </button>
        ) : (
          <button
            onClick={() => onReconnect(platform.id)}
            className="text-sm text-primary dark:text-accent-blue hover:text-primary/80 dark:hover:text-accent-blue/80 flex items-center gap-1"
          >
            <ExternalLink size={16} />
            Connect
          </button>
        )}
      </div>
    </div>
  );
};

export default PlatformCard;