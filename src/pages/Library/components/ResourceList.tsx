import React from 'react';
import { FileText, Image, Video, Calendar, Download } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';

interface Resource {
  id: string;
  name: string;
  type: 'document' | 'image' | 'video';
  size: string;
  date: string;
}

const ResourceList = () => {
  const { t } = useTranslation();
  const [resources] = React.useState<Resource[]>([]);

  const getIcon = (type: Resource['type']) => {
    switch (type) {
      case 'document': return FileText;
      case 'image': return Image;
      case 'video': return Video;
    }
  };

  if (!resources.length) {
    return (
      <div className="bg-white rounded-lg p-8 text-center">
        <p className="text-gray-500">{t('library.noResources')}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg divide-y">
      {resources.map((resource) => {
        const Icon = getIcon(resource.type);
        return (
          <div key={resource.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gray-100 rounded-lg">
                <Icon size={20} className="text-gray-600" />
              </div>
              <div>
                <h3 className="font-medium">{resource.name}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{resource.size}</span>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{resource.date}</span>
                  </div>
                </div>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Download size={18} className="text-gray-600" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ResourceList;