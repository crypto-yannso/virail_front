import React from 'react';
import { Sliders, Zap, Hash } from 'lucide-react';
import { useAutomationStore } from '../../../store/automationStore';

const AIControls = () => {
  const { settings, updateSettings, applyChanges } = useAutomationStore();

  const handleFrequencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSettings({ postingFrequency: Number(e.target.value) });
  };

  const handleCreativityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSettings({ contentCreativity: Number(e.target.value) });
  };

  const handleTopicAdd = () => {
    const topic = prompt('Enter new topic (with #):');
    if (topic && topic.startsWith('#')) {
      updateSettings({ 
        activeTopics: [...settings.activeTopics, topic] 
      });
    }
  };

  const handleTopicRemove = (topic: string) => {
    updateSettings({
      activeTopics: settings.activeTopics.filter(t => t !== topic)
    });
  };

  const handleApplyChanges = async () => {
    try {
      await applyChanges();
    } catch (error) {
      console.error('Failed to apply changes:', error);
    }
  };

  return (
    <div className="bg-cyber-darker/80 backdrop-blur-xl rounded-lg border border-white/10 p-6">
      <div className="flex items-center gap-2 mb-6">
        <Sliders className="text-neon-blue" size={20} />
        <h3 className="font-display text-black">AI Controls</h3>
      </div>

      <div className="space-y-6">
        <div>
          <label className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-black">Posting Frequency</span>
            <span className="text-sm text-black/70">{settings.postingFrequency} posts/day</span>
          </label>
          <input
            type="range"
            min="1"
            max="8"
            value={settings.postingFrequency}
            onChange={handleFrequencyChange}
            className="w-full h-2 bg-cyber-dark rounded-lg appearance-none cursor-pointer accent-neon-blue"
          />
          <div className="flex justify-between text-xs text-black/70 mt-1">
            <span>Low</span>
            <span>High</span>
          </div>
        </div>

        <div>
          <label className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-black">Content Creativity</span>
            <span className="text-sm text-black/70">
              {settings.contentCreativity === 1 ? 'Conservative' : 
               settings.contentCreativity === 2 ? 'Balanced' : 'Creative'}
            </span>
          </label>
          <input
            type="range"
            min="1"
            max="3"
            value={settings.contentCreativity}
            onChange={handleCreativityChange}
            className="w-full h-2 bg-cyber-dark rounded-lg appearance-none cursor-pointer accent-neon-blue"
          />
          <div className="flex justify-between text-xs text-black/70 mt-1">
            <span>Conservative</span>
            <span>Creative</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-black mb-2">Active Topics</label>
          <div className="flex flex-wrap gap-2">
            {settings.activeTopics.map((tag) => (
              <div
                key={tag}
                onClick={() => handleTopicRemove(tag)}
                className="px-3 py-1 bg-cyber-dark rounded-full text-sm flex items-center gap-2 group hover:bg-cyber-light hover:text-black transition-colors cursor-pointer"
              >
                <Hash size={14} />
                <span className="text-black">{tag}</span>
              </div>
            ))}
            <button 
              onClick={handleTopicAdd}
              className="px-3 py-1 border border-dashed border-white/20 rounded-full text-sm text-black hover:border-neon-blue transition-colors"
            >
              Add Topic
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10">
          <button 
            onClick={handleApplyChanges}
            className="w-full btn-cyber flex items-center justify-center gap-2"
          >
            <Zap size={18} />
            <span className="text-black">Apply Changes</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIControls;