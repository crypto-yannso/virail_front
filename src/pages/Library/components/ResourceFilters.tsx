import React from 'react';
import { Filter } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';
import { useResourceStore } from '../../../store/resourceStore';

const ResourceFilters = () => {
  const { t } = useTranslation();
  const { selectedType, selectedDate, setSelectedType, setSelectedDate } = useResourceStore();

  const filters = {
    type: [
      { id: 'all', label: 'All Files' },
      { id: 'document', label: 'Documents' },
      { id: 'image', label: 'Images' },
      { id: 'video', label: 'Videos' },
    ],
    date: [
      { id: 'any', label: 'Any Time' },
      { id: 'today', label: 'Today' },
      { id: 'week', label: 'This Week' },
      { id: 'month', label: 'This Month' },
    ],
  };

  return (
    <div className="bg-white dark:bg-dark-secondary border border-slate-200/60 dark:border-border-dark rounded-lg shadow-[0_8px_16px_-6px_rgba(15,23,42,0.08)] dark:shadow-dark-sm p-4">
      <div className="flex items-center gap-2 mb-4">
        <Filter size={18} className="text-slate-600 dark:text-text-secondary" />
        <h2 className="font-medium text-slate-900 dark:text-text-primary">{t('library.filters')}</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-900 dark:text-text-primary mb-2">
            File Type
          </label>
          <div className="relative">
            <select 
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full p-2 bg-slate-100 dark:bg-dark-tertiary border border-slate-200 dark:border-border-dark rounded-lg text-slate-900 dark:text-text-primary focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent-blue appearance-none"
            >
              {filters.type.map(type => (
                <option key={type.id} value={type.id} className="bg-white dark:bg-dark-secondary">
                  {type.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 text-slate-400 dark:text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-900 dark:text-text-primary mb-2">
            Date Added
          </label>
          <div className="relative">
            <select 
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full p-2 bg-slate-100 dark:bg-dark-tertiary border border-slate-200 dark:border-border-dark rounded-lg text-slate-900 dark:text-text-primary focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent-blue appearance-none"
            >
              {filters.date.map(date => (
                <option key={date.id} value={date.id} className="bg-white dark:bg-dark-secondary">
                  {date.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 text-slate-400 dark:text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceFilters;