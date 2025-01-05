import React from 'react';
import { Shield, Key } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';

const AccountSettings = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-dark-secondary p-6 rounded-lg shadow-sm dark:shadow-dark-sm">
      <h3 className="text-lg font-semibold mb-6 text-slate-900 dark:text-text-primary">{t('profile.accountSettings')}</h3>
      
      <div className="space-y-6">
        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-dark-tertiary rounded-lg">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 dark:bg-accent-blue/10 rounded-lg">
              <Key size={18} className="text-primary dark:text-accent-blue" />
            </div>
            <div>
              <p className="font-medium text-slate-900 dark:text-text-primary">{t('profile.password')}</p>
              <p className="text-sm text-slate-500 dark:text-text-secondary">{t('profile.lastChanged')}: 30 days ago</p>
            </div>
          </div>
          <button className="text-sm text-primary dark:text-accent-blue hover:text-primary/80 dark:hover:text-accent-blue/80">
            {t('profile.change')}
          </button>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-dark-tertiary rounded-lg">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 dark:bg-accent-blue/10 rounded-lg">
              <Shield size={18} className="text-primary dark:text-accent-blue" />
            </div>
            <div>
              <p className="font-medium text-slate-900 dark:text-text-primary">{t('profile.twoFactor')}</p>
              <p className="text-sm text-slate-500 dark:text-text-secondary">{t('profile.notEnabled')}</p>
            </div>
          </div>
          <button className="text-sm text-primary dark:text-accent-blue hover:text-primary/80 dark:hover:text-accent-blue/80">
            {t('profile.enable')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;