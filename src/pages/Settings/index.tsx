import React from 'react';
import ProfileSettings from './components/ProfileSettings';
import NotificationSettings from './components/NotificationSettings';
import AISettings from './components/AISettings';
import SecuritySettings from './components/SecuritySettings';
import PlatformSettings from './components/platforms/PlatformSettings';
import LanguageSettings from './components/LanguageSettings';
import AppearanceSettings from './components/AppearanceSettings';
import { useTranslation } from '../../hooks/useTranslation';
import { PageHeader } from '@/components/layout/page-header';

const Settings = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <PageHeader title={t('settings.title')} />
      <AppearanceSettings />
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