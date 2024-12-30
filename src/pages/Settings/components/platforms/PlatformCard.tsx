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
    <div className="p-4 border border-gray-200 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${platform.color}`}>
            <Icon size={20} />
          </div>
          <div>
            <h3 className="font-medium">{platform.name}</h3>
            <p className="text-sm text-gray-500">
              {platform.connected ? platform.accountName : 'Not connected'}
            </p>
          </div>
        </div>
        
        {platform.connected ? (
          <button
            onClick={() => onDisconnect(platform.id)}
            className="text-sm text-red-600 hover:text-red-700"
          >
            Disconnect
          </button>
        ) : (
          <button
            onClick={() => onReconnect(platform.id)}
            className="flex items-center gap-2 px-3 py-1.5 text-sm border border-gray-200 rounded-lg hover:border-primary transition-colors"
          >
            <ExternalLink size={14} />
            Connect
          </button>
        )}
      </div>
      
      {platform.connected && platform.lastSync && (
        <p className="text-xs text-gray-500 mt-2">
          Last synced: {new Date(platform.lastSync).toLocaleString()}
        </p>
      )}
    </div>
  );
};

export default PlatformCard;