import React from 'react';
import { RefreshCcw, UserPlus, MessageSquare } from 'lucide-react';

interface Props {
  platforms: string[];
}

const PerformanceMetrics: React.FC<Props> = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <RefreshCcw size={18} className="text-primary" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Actions Taken</p>
            <p className="text-xl font-semibold">-</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <UserPlus size={18} className="text-primary" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Follower Growth</p>
            <p className="text-xl font-semibold">-</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <MessageSquare size={18} className="text-primary" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Comments Generated</p>
            <p className="text-xl font-semibold">-</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;