import React from 'react';
import ModeToggle from './components/ModeToggle';
import ContentTypeSelector from './components/ContentTypeSelector';
import PlatformSelector from '../../components/shared/PlatformSelector';
import ToneSelector from './components/ToneSelector';
import TopicInput from './components/TopicInput';
import ContentPreview from './components/ContentPreview';
import { usePlatformStore } from '../../store/platformStore';

const ContentCreation = () => {
  const { selectedPlatforms, togglePlatform } = usePlatformStore();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Left Panel - Configuration */}
      <div className="space-y-6">
        <ModeToggle />
        <ContentTypeSelector />
        <PlatformSelector 
          selectedPlatforms={selectedPlatforms}
          onSelect={togglePlatform}
          showLimits={true}
        />
        <ToneSelector />
        <TopicInput />
      </div>

      {/* Right Panel - Preview */}
      <div className="sticky top-[8vh] h-[calc(92vh-2rem)]">
        <ContentPreview platforms={selectedPlatforms} />
      </div>
    </div>
  );
};

export default ContentCreation;