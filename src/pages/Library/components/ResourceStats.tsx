import React from 'react';
import { HardDrive, FileText, Image, Video } from 'lucide-react';
import { useResourceStore } from '../../../store/resourceStore';
import { formatBytes } from '../../../utils/formatters';

const ResourceStats = () => {
  const { resources, totalStorage } = useResourceStore();

  const stats = [
    {
      label: 'Storage Used',
      value: formatBytes(totalStorage),
      icon: HardDrive,
    },
    {
      label: 'Documents',
      value: resources.filter(r => r.type === 'document').length,
      icon: FileText,
    },
    {
      label: 'Images',
      value: resources.filter(r => r.type === 'image').length,
      icon: Image,
    },
    {
      label: 'Videos',
      value: resources.filter(r => r.type === 'video').length,
      icon: Video,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white dark:bg-dark-secondary border border-slate-200/60 dark:border-border-dark rounded-lg shadow-[0_8px_16px_-6px_rgba(15,23,42,0.08)] dark:shadow-dark-sm p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 dark:bg-accent-blue/10 rounded-lg">
              <stat.icon className="text-primary dark:text-accent-blue" size={20} />
            </div>
            <div>
              <p className="text-sm text-slate-600 dark:text-text-secondary">{stat.label}</p>
              <p className="text-xl font-semibold text-slate-900 dark:text-text-primary">
                {typeof stat.value === 'number' ? stat.value : stat.value || '-'}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResourceStats;