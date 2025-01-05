import React from 'react';
import { Globe } from 'lucide-react';
import LanguageSelector from '../../../components/language/LanguageSelector';
import { useTranslation } from '../../../hooks/useTranslation';

const LanguageSettings = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-dark-secondary border border-slate-200/60 dark:border-border-dark rounded-lg shadow-[0_8px_16px_-6px_rgba(15,23,42,0.08)] dark:shadow-dark-sm p-6">
      <div className="flex items-center gap-2 mb-6">
        <Globe size={20} className="text-slate-600 dark:text-text-secondary" />
        <h2 className="text-lg font-semibold text-slate-900 dark:text-text-primary">{t('settings.language.title')}</h2>
      </div>
      
      <div className="flex items-center gap-4">
        <LanguageSelector />
        <p className="text-sm text-slate-500 dark:text-text-secondary">
          {t('settings.language.description')}
        </p>
      </div>
    </div>
  );
};

export default LanguageSettings;