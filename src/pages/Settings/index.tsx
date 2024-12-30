import React from 'react';
import ProfileSettings from './components/ProfileSettings';
import NotificationSettings from './components/NotificationSettings';
import AISettings from './components/AISettings';
import SecuritySettings from './components/SecuritySettings';
import PlatformSettings from './components/platforms/PlatformSettings';
import LanguageSettings from './components/LanguageSettings';
import { useTranslation } from '../../hooks/useTranslation';

const Settings = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">{t('settings.title')}</h1>
      <LanguageSettings />
      <ProfileSettings />
      <PlatformSettings />
      <NotificationSettings />
      <AISettings />
      <SecuritySettings />
    </div>
  );
};

export default Settings;