import React from 'react';
import { PageHeader } from '@/components/layout/page-header';
import UserInfo from './components/UserInfo';
import AccountSettings from './components/AccountSettings';
import ActivityLog from './components/ActivityLog';
import { useTranslation } from '../../hooks/useTranslation';

const Profile = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <PageHeader title={t('profile.title')} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <UserInfo />
          <AccountSettings />
        </div>
        <div>
          <ActivityLog />
        </div>
      </div>
    </div>
  );
};

export default Profile;