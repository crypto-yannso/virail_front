import React from 'react';
import GoalSelector from './components/GoalSelector';
import IntensitySlider from './components/IntensitySlider';
import PlatformSelector from '../../components/shared/PlatformSelector';
import ResourceUploader from './components/ResourceUploader';
import PerformanceMetrics from './components/PerformanceMetrics';
import LiveFeed from './components/LiveFeed';
import { Play, Pause } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { usePlatformStore } from '../../store/platformStore';

const AIAutomation = () => {
  const { aiStatus, toggleAI } = useStore();
  const { selectedPlatforms, togglePlatform } = usePlatformStore();
  const isActive = aiStatus.status === 'active';

  const handleToggleAutomation = async () => {
    try {
      await toggleAI();
    } catch (error) {
      console.error('Failed to toggle automation:', error);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-24 md:pb-20">
      {/* Left Panel - Goal Setting */}
      <div className="space-y-6">
        <GoalSelector />
        <IntensitySlider />
        <PlatformSelector 
          selectedPlatforms={selectedPlatforms}
          onSelect={togglePlatform}
          showLimits={false}
        />
        <ResourceUploader />
      </div>

      {/* Right Panel - Results & Monitoring */}
      <div className="space-y-6">
        <PerformanceMetrics platforms={selectedPlatforms} />
        <LiveFeed platforms={selectedPlatforms} />
      </div>

      {/* Fixed Action Button */}
      <div className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-[calc(15vw+1rem)] md:right-6 flex items-center justify-center z-40">
        <button 
          onClick={handleToggleAutomation}
          className={`w-full max-w-md flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-display uppercase tracking-wider
                     bg-transparent border transition-all duration-300 ${
                       isActive 
                         ? 'border-red-500 hover:border-red-600 hover:shadow-[0_0_20px_rgba(255,0,0,0.3)]' 
                         : 'border-neon-blue/30 hover:border-neon-blue hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]'
                     }`}
        >
          {isActive ? <Pause size={18} /> : <Play size={18} />}
          <span className="font-display tracking-wider">{isActive ? 'Pause Automation' : 'Start Automation'}</span>
        </button>
      </div>
    </div>
  );
};

export default AIAutomation;