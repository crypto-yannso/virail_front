import React from 'react';
import { Bot, Settings } from 'lucide-react';
import { useStore } from '../../../store/useStore';

const AutomationHeader = () => {
  const { aiStatus } = useStore();
  
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-semibold text-gray-900">AI Automation Control</h1>
        <div className={`px-3 py-1 rounded-full text-sm flex items-center gap-2 ${
          aiStatus.status === 'active' ? 'bg-green-100 text-green-700' :
          aiStatus.status === 'paused' ? 'bg-yellow-100 text-yellow-700' :
          'bg-red-100 text-red-700'
        }`}>
          <span className={`w-2 h-2 rounded-full ${
            aiStatus.status === 'active' ? 'bg-green-500' :
            aiStatus.status === 'paused' ? 'bg-yellow-500' :
            'bg-red-500'
          }`} />
          {aiStatus.status.charAt(0).toUpperCase() + aiStatus.status.slice(1)}
        </div>
      </div>
      <button className="btn-primary flex items-center gap-2">
        <Bot size={18} />
        {aiStatus.status === 'active' ? 'Pause AI' : 'Start AI'}
      </button>
    </div>
  );
};

export default AutomationHeader;