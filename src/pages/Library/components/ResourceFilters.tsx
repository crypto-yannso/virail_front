import React from 'react';
import { Filter } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';

const ResourceFilters = () => {
  const { t } = useTranslation();

  const filters = {
    type: ['all', 'documents', 'images', 'videos'],
    date: ['any', 'today', 'week', 'month'],
  };

  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="flex items-center gap-2 mb-4">
        <Filter size={18} className="text-gray-600" />
        <h2 className="font-medium">{t('library.filters')}</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            {t('library.fileType')}
          </label>
          <select className="w-full p-2 border rounded-lg">
            {filters.type.map(type => (
              <option key={type} value={type}>
                {t(`library.types.${type}`)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            {t('library.date')}
          </label>
          <select className="w-full p-2 border rounded-lg">
            {filters.date.map(period => (
              <option key={period} value={period}>
                {t(`library.dates.${period}`)}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ResourceFilters;