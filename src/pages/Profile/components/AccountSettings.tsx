import React from 'react';
import { Shield, Key } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';

const AccountSettings = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-6">{t('profile.accountSettings')}</h3>
      
      <div className="space-y-6">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Key size={18} className="text-primary" />
            </div>
            <div>
              <p className="font-medium">{t('profile.password')}</p>
              <p className="text-sm text-gray-500">{t('profile.lastChanged')}: 30 days ago</p>
            </div>
          </div>
          <button className="text-sm text-primary hover:text-primary/80">
            {t('profile.change')}
          </button>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Shield size={18} className="text-primary" />
            </div>
            <div>
              <p className="font-medium">{t('profile.twoFactor')}</p>
              <p className="text-sm text-gray-500">{t('profile.notEnabled')}</p>
            </div>
          </div>
          <button className="text-sm text-primary hover:text-primary/80">
            {t('profile.enable')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;