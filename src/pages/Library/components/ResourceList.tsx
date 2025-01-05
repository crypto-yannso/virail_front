import React from 'react';
import { FileText, Image, Video, Calendar, Download, Trash2 } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';
import { useResourceStore } from '../../../store/resourceStore';

const ResourceList = () => {
  const { t } = useTranslation();
  const { getFilteredResources, removeResource } = useResourceStore();
  const resources = getFilteredResources();

  const getIcon = (type: 'document' | 'image' | 'video') => {
    switch (type) {
      case 'document': return FileText;
      case 'image': return Image;
      case 'video': return Video;
    }
  };

  const handleDownload = (resource: { url: string, name: string }) => {
    const a = document.createElement('a');
    a.href = resource.url;
    a.download = resource.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  if (!resources.length) {
    return (
      <div className="bg-white dark:bg-dark-secondary border border-slate-200/60 dark:border-border-dark rounded-lg p-8 text-center">
        <p className="text-slate-500 dark:text-text-secondary">{t('library.noResources')}</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-dark-secondary border border-slate-200/60 dark:border-border-dark rounded-lg divide-y divide-slate-200 dark:divide-border-dark">
      {resources.map((resource) => {
        const Icon = getIcon(resource.type);
        return (
          <div key={resource.id} className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-dark-tertiary">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-slate-100 dark:bg-dark-tertiary rounded-lg">
                <Icon size={20} className="text-slate-600 dark:text-text-secondary" />
              </div>
              <div>
                <h3 className="font-medium text-slate-900 dark:text-text-primary">{resource.name}</h3>
                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-text-secondary">
                  <span>{resource.size}</span>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} className="text-slate-500 dark:text-text-secondary" />
                    <span>{new Date(resource.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => handleDownload(resource)}
                className="p-2 hover:bg-slate-100 dark:hover:bg-dark-quaternary rounded-lg"
              >
                <Download size={18} className="text-slate-600 dark:text-text-secondary" />
              </button>
              <button 
                onClick={() => removeResource(resource.id)}
                className="p-2 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg group"
              >
                <Trash2 size={18} className="text-slate-600 dark:text-text-secondary group-hover:text-red-500 dark:group-hover:text-red-400" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResourceList;