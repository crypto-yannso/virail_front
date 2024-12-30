import React from 'react';
import { Globe } from 'lucide-react';
import LanguageSelector from '../../../components/language/LanguageSelector';
import { useTranslation } from '../../../hooks/useTranslation';

const LanguageSettings = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
      <div className="flex items-center gap-2 mb-6">
        <Globe size={20} className="text-primary" />
        <h2 className="text-lg font-semibold">{t('settings.language.title')}</h2>
      </div>
      
      <div className="flex items-center gap-4">
        <LanguageSelector />
        <p className="text-sm text-gray-500">
          {t('settings.language.description')}
        </p>
      </div>
    </div>
  );
};

export default LanguageSettings;