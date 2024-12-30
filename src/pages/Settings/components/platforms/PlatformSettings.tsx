import React from 'react';
import { Share2 } from 'lucide-react';
import PlatformCard from './PlatformCard';
import { usePlatformStore } from '../../../../store/platformStore';
import { useTranslation } from '../../../../hooks/useTranslation';

const PlatformSettings = () => {
  const { t } = useTranslation();
  const { platforms, connectPlatform, disconnectPlatform } = usePlatformStore();

  const handleDisconnect = async (platformId: string) => {
    try {
      await disconnectPlatform(platformId);
    } catch (error) {
      console.error('Failed to disconnect platform:', error);
    }
  };

  const handleReconnect = async (platformId: string) => {
    try {
      await connectPlatform(platformId);
    } catch (error) {
      console.error('Failed to connect platform:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <Share2 size={20} className="text-primary" />
        <h2 className="text-lg font-semibold">{t('settings.platforms.title')}</h2>
      </div>
      
      <div className="space-y-4">
        {platforms.map((platform) => (
          <PlatformCard
            key={platform.id}
            platform={platform}
            onDisconnect={handleDisconnect}
            onReconnect={handleReconnect}
          />
        ))}
      </div>
      
      <p className="text-sm text-gray-500 mt-6">
        {t('settings.platforms.description')}
      </p>
    </div>
  );
};

export default PlatformSettings;