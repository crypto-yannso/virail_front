import React from 'react';
import { Copy, Share2 } from 'lucide-react';

interface Props {
  content: string[];
  platform: 'twitter' | 'reddit';
}

const ThreadPreview: React.FC<Props> = ({ content, platform }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content.join('\n\n'));
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold">Generated Thread</h3>
        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Copy size={20} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Share2 size={20} />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {content.map((post, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg ${
              platform === 'twitter' ? 'bg-sky-50' : 'bg-orange-50'
            }`}
          >
            <p className="whitespace-pre-wrap">{post}</p>
            {platform === 'twitter' && index > 0 && (
              <div className="text-sm text-gray-500 mt-2">
                {index + 1}/{content.length}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreadPreview;