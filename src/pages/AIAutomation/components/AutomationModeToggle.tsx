import React from 'react';
import { Bot, Settings } from 'lucide-react';
import { useAutomationStore } from '../../../store/automationStore';

const AutomationModeToggle = () => {
  const { settings, toggleMode } = useAutomationStore();
  const isAutomatic = settings.mode === 'automatic';

  return (
    <div className="flex items-center gap-4">
      <div className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
        isAutomatic ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'
      }`}>
        <Bot size={18} />
        <span>Automatic</span>
      </div>
      <button
        onClick={toggleMode}
        className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
          !isAutomatic ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'
        }`}
      >
        <Settings size={18} />
        <span>Manual</span>
      </button>
    </div>
  );
};

export default AutomationModeToggle;