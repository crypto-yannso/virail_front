import React, { useState } from 'react';
import ModeToggle from './components/ModeToggle';
import ContentTypeSelector from './components/ContentTypeSelector';
import PlatformSelector from '../../components/shared/PlatformSelector';
import ToneSelector from './components/ToneSelector';
import TopicInput from './components/TopicInput';
import ContentPreview from './components/ContentPreview';
import ThreadGenerationTab from './components/ThreadGenerationTab';
import { usePlatformStore } from '../../store/platformStore';
import { Send, SplitSquareHorizontal } from 'lucide-react';

const ContentCreation = () => {
  const { selectedPlatforms, togglePlatform } = usePlatformStore();
  const [activeTab, setActiveTab] = useState<'single' | 'thread'>('single');
  const [loading, setLoading] = useState(false);

  const handlePost = async () => {
    setLoading(true);
    try {
      // Implement post logic
      console.log('Posting content...');
    } catch (error) {
      console.error('Failed to post:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerate = async () => {
    setLoading(true);
    try {
      // Implement thread generation logic
      console.log('Generating thread...');
    } catch (error) {
      console.error('Failed to generate:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pb-6">
      {/* Action Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => {
            setActiveTab('single');
            handlePost();
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-display transition-all duration-300 ${
            activeTab === 'single'
              ? 'bg-primary/10 dark:bg-accent-blue/10 text-primary dark:text-accent-blue'
              : 'bg-dark-secondary dark:bg-dark-tertiary text-text-secondary hover:bg-dark-tertiary dark:hover:bg-dark-secondary/80'
          }`}
          disabled={loading}
        >
          <Send size={18} />
          <span>Single Post</span>
        </button>
        <button
          onClick={() => {
            setActiveTab('thread');
            handleGenerate();
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-display transition-all duration-300 ${
            activeTab === 'thread'
              ? 'bg-primary/10 dark:bg-accent-blue/10 text-primary dark:text-accent-blue'
              : 'bg-dark-secondary dark:bg-dark-tertiary text-text-secondary hover:bg-dark-tertiary dark:hover:bg-dark-secondary/80'
          }`}
          disabled={loading}
        >
          <SplitSquareHorizontal size={18} />
          <span>{loading ? 'Generating...' : 'Generate Thread'}</span>
        </button>
      </div>

      {/* Content Area */}
      {activeTab === 'single' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
          <div className="sticky top-[8vh] h-[calc(92vh-2rem)]">
            <ContentPreview platforms={selectedPlatforms} />
          </div>
        </div>
      ) : (
        <ThreadGenerationTab />
      )}
    </div>
  );
};

export default ContentCreation;