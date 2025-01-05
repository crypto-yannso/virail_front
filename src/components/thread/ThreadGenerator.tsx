import React, { useState } from 'react';
import { SplitSquareHorizontal, Twitter, FileText } from 'lucide-react';
import ThreadPreview from './ThreadPreview';
import { generateThread } from '../../services/threadService';

const ThreadGenerator = () => {
  const [topic, setTopic] = useState('');
  const [platform, setPlatform] = useState<'twitter' | 'reddit'>('twitter');
  const [threadContent, setThreadContent] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!topic) return;
    
    setLoading(true);
    try {
      const content = await generateThread(topic, platform);
      setThreadContent(content);
    } catch (error) {
      console.error('Failed to generate thread:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setPlatform('twitter')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
            platform === 'twitter' 
              ? 'bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400' 
              : 'bg-dark-secondary dark:bg-dark-tertiary text-text-secondary hover:bg-dark-tertiary dark:hover:bg-dark-secondary/80'
          }`}
        >
          <Twitter size={20} />
          <span>X/Twitter Thread</span>
        </button>
        <button
          onClick={() => setPlatform('reddit')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
            platform === 'reddit' 
              ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400' 
              : 'bg-dark-secondary dark:bg-dark-tertiary text-text-secondary hover:bg-dark-tertiary dark:hover:bg-dark-secondary/80'
          }`}
        >
          <FileText size={20} />
          <span>Reddit Post</span>
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-text-primary mb-2">
            What's your topic?
          </label>
          <textarea
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Describe your topic in detail..."
            className="w-full h-32 px-4 py-2 
                      bg-white dark:bg-dark-tertiary 
                      border border-slate-200 dark:border-border-dark 
                      rounded-lg 
                      text-slate-900 dark:text-text-primary
                      placeholder:text-slate-500 dark:placeholder:text-text-secondary
                      focus:outline-none focus:ring-2 
                      focus:ring-primary dark:focus:ring-accent-blue/20
                      focus:border-primary-300/60 dark:focus:border-accent-blue/50
                      resize-none transition-colors"
          />
        </div>

        <button
          onClick={handleGenerate}
          disabled={!topic || loading}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 
                    bg-primary dark:bg-accent-blue 
                    hover:bg-primary-600 dark:hover:bg-accent-blue/90 
                    text-white dark:text-text-primary 
                    rounded-lg 
                    transition-colors 
                    disabled:opacity-50"
        >
          <SplitSquareHorizontal size={20} />
          {loading ? 'Generating...' : 'Generate Thread'}
        </button>
      </div>

      {threadContent.length > 0 && (
        <ThreadPreview content={threadContent} platform={platform} />
      )}
    </div>
  );
};

export default ThreadGenerator;