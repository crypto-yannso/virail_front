import React from 'react';
import { FileText, Image, Video } from 'lucide-react';

const ResourceGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-white p-6 rounded-lg shadow-sm text-center">
        <p className="text-gray-500">No resources available</p>
      </div>
    </div>
  );
};

export default ResourceGrid;