import React from 'react';
import { HardDrive, FileText, Image, Video } from 'lucide-react';

const ResourceStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {['Storage Used', 'Documents', 'Images', 'Videos'].map((label) => (
        <div key={label} className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <HardDrive className="text-primary" size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-600">{label}</p>
              <p className="text-xl font-semibold">-</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResourceStats;