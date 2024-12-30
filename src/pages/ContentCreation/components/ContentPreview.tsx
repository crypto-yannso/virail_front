import React from 'react';
import { RefreshCw, Send } from 'lucide-react';
import { platforms } from '../../../config/platforms';

interface Props {
  platforms: string[];
}

const ContentPreview: React.FC<Props> = ({ platforms: selectedPlatformIds }) => {
  const selectedPlatforms = platforms.filter(p => selectedPlatformIds.includes(p.id));

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Content Preview</h3>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <RefreshCw size={18} className="text-gray-600" />
        </button>
      </div>
      
      <div className="flex-1 border border-gray-200 rounded-lg p-4 mb-4">
        <div contentEditable className="h-full focus:outline-none" suppressContentEditableWarning>
          Click to edit your generated content here...
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="flex gap-2">
          {selectedPlatforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <label key={platform.id} className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                <Icon size={16} />
                <span className="text-sm">{platform.name}</span>
              </label>
            );
          })}
        </div>
        
        <div className="flex gap-3">
          <button className="flex-1 bg-transparent border border-neon-blue/30 hover:border-neon-blue hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] text-black rounded-lg py-2 px-4 flex items-center justify-center gap-2 transition-all duration-300">
            <Send size={18} />
            Post to Selected Platforms
          </button>
          <button className="px-4 py-2 border border-gray-200 rounded-lg hover:border-neon-blue transition-colors">
            Save Draft
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentPreview;