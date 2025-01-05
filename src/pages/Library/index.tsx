import React from 'react';
import { FileText, Image, Video } from 'lucide-react';
import { useResourceStore } from '../../store/resourceStore';
import ResourceStats from './components/ResourceStats';
import ResourceList from './components/ResourceList';
import ResourceFilters from './components/ResourceFilters';
import UploadZone from './components/UploadZone';

const Library = () => {
  const { setSelectedType } = useResourceStore();

  const resourceTypes = [
    { id: 'all', label: 'All Files' },
    { id: 'document', label: 'Documents', icon: FileText },
    { id: 'image', label: 'Images', icon: Image },
    { id: 'video', label: 'Videos', icon: Video },
  ];

  return (
    <div className="space-y-6">
      {/* Resource Stats */}
      <ResourceStats />

      {/* Resource Types */}
      <div className="grid grid-cols-4 gap-4">
        {resourceTypes.map(type => (
          <button
            key={type.id}
            onClick={() => setSelectedType(type.id)}
            className="p-4 bg-white dark:bg-dark-secondary border border-slate-200/60 dark:border-border-dark 
                     rounded-lg hover:bg-slate-50 dark:hover:bg-dark-tertiary transition-colors"
          >
            <div className="flex flex-col items-center gap-2">
              {type.icon && <type.icon size={24} className="text-slate-600 dark:text-text-secondary" />}
              <span className="text-sm font-medium text-slate-900 dark:text-text-primary">{type.label}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
        {/* Left Sidebar */}
        <div className="space-y-6">
          <ResourceFilters />
          <UploadZone />
        </div>

        {/* Main Content */}
        <ResourceList />
      </div>
    </div>
  );
};

export default Library;