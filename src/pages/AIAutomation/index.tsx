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
    <div className="min-h-screen bg-white dark:bg-dark-primary">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-24 md:pb-20 relative">
        {/* Background overlay to prevent white overscroll */}
        <div className="fixed inset-0 bg-white dark:bg-dark-primary -z-50"></div>
        
        {/* Left Panel - Goal Setting */}
        <div className="space-y-6 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white dark:from-dark-tertiary dark:to-dark-secondary rounded-lg -z-10 shadow-xl dark:shadow-[0_4px_20px_-3px_rgba(0,0,0,0.4)] border border-slate-200/60 dark:border-border-dark"></div>
          <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-accent-blue/5 dark:to-transparent rounded-lg -z-10"></div>
          <GoalSelector />
          <IntensitySlider />
          <PlatformSelector 
            selectedPlatforms={selectedPlatforms}
            onSelect={togglePlatform}
            showLimits={false}
            className="border-slate-200 shadow-md dark:border-border-darker dark:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)]"
          />
          <ResourceUploader />
        </div>

        {/* Right Panel - Results & Monitoring */}
        <div className="space-y-6 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white dark:from-dark-tertiary dark:to-dark-secondary rounded-lg -z-10 shadow-xl dark:shadow-[0_4px_20px_-3px_rgba(0,0,0,0.4)] border border-slate-200/60 dark:border-border-dark"></div>
          <div className="absolute inset-0 dark:bg-gradient-to-tl dark:from-accent-blue/5 dark:to-transparent rounded-lg -z-10"></div>
          <PerformanceMetrics platforms={selectedPlatforms} />
          <LiveFeed platforms={selectedPlatforms} />
        </div>

        {/* Fixed Action Button */}
        <div className="fixed bottom-20 md:bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:-translate-x-0 md:right-6 z-40">
          <button 
            onClick={handleToggleAutomation}
            className={`flex items-center justify-center gap-1.5 py-2 px-4 rounded-lg font-display 
                      uppercase tracking-wider text-sm transition-all duration-300
                      shadow-[0_4px_14px_0_rgba(0,0,0,0.08)] dark:shadow-[0_4px_14px_0_rgba(0,0,0,0.3)]
                      backdrop-blur-xl ${
                        isActive 
                          ? 'bg-red-500/15 text-red-700 border border-red-500 hover:bg-red-500/25 hover:border-red-600 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/50 dark:hover:bg-red-500/20 dark:hover:border-red-400 dark:hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]' 
                          : 'bg-primary-600/15 text-primary-700 border border-primary-500 hover:bg-primary-600/25 hover:border-primary-600 hover:shadow-[0_0_20px_rgba(74,144,226,0.4)] dark:bg-accent-blue/10 dark:text-accent-blue dark:border-accent-blue/50 dark:hover:bg-accent-blue/20 dark:hover:border-accent-blue/80 dark:hover:shadow-[0_0_30px_rgba(74,144,226,0.3)]'
                      }`}
          >
            <div className={`w-6 h-6 rounded-full flex items-center justify-center 
                          transition-transform duration-300 ${
                            isActive 
                              ? 'bg-red-100 dark:bg-red-500/20 dark:shadow-[inset_0_0_8px_rgba(239,68,68,0.3)]' 
                              : 'bg-primary-100 dark:bg-accent-blue/20 dark:shadow-[inset_0_0_8px_rgba(74,144,226,0.3)]'
                          }`}>
              {isActive ? <Pause size={14} className="text-red-700 dark:text-red-400" /> : <Play size={14} className="text-primary-700 dark:text-accent-blue" />}
            </div>
            <span>{isActive ? 'Pause' : 'Start'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAutomation;