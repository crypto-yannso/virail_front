import React from 'react';
import { FileText, Image, Video, Download } from 'lucide-react';

interface Resource {
  id: string;
  name: string;
  type: 'document' | 'image' | 'video';
  size: string;
  date: string;
}

const Library = () => {
  const resourceTypes = [
    { id: 'all', label: 'All Files' },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'images', label: 'Images', icon: Image },
    { id: 'videos', label: 'Videos', icon: Video },
  ];

  return (
    <div className="space-y-6">
      {/* Resource Types */}
      <div className="grid grid-cols-4 gap-4">
        {resourceTypes.map(type => (
          <button
            key={type.id}
            className="p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex flex-col items-center gap-2">
              {type.icon && <type.icon size={24} className="text-gray-600" />}
              <span className="text-sm font-medium">{type.label}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Resource List */}
      <div className="bg-white rounded-lg p-4">
        <div className="text-center text-gray-500 py-8">
          No resources available
        </div>
      </div>
    </div>
  );
};

export default Library;