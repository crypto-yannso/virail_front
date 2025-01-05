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
    <div className="bg-white dark:bg-dark-secondary border border-slate-200/60 dark:border-border-dark rounded-lg shadow-[0_8px_16px_-6px_rgba(15,23,42,0.08)] dark:shadow-dark-sm p-6">
      <div className="flex items-center gap-3 mb-6">
        <Share2 size={24} className="text-primary dark:text-accent-blue" />
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-text-primary">{t('settings.platforms.title')}</h2>
          <p className="text-sm text-slate-500 dark:text-text-secondary">Manage your connected social media platforms</p>
        </div>
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
      
      <p className="text-sm text-slate-500 dark:text-text-secondary mt-6">
        {t('settings.platforms.description')}
      </p>
    </div>
  );
};

export default PlatformSettings;