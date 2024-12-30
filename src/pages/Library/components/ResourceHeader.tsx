import React from 'react';
import { Upload } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';

const ResourceHeader = () => {
  const { t } = useTranslation();
  
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-semibold">{t('library.title')}</h1>
      <button className="btn-primary flex items-center gap-2">
        <Upload size={18} />
        {t('library.upload')}
      </button>
    </div>
  );
};

export default ResourceHeader;