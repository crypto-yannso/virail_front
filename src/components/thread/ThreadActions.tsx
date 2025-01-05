import React from 'react';
import { Send, SplitSquareHorizontal } from 'lucide-react';

interface Props {
  onPost?: () => void;
  onGenerate?: () => void;
  loading?: boolean;
  type: 'single' | 'thread';
}

const ThreadActions: React.FC<Props> = ({ onPost, onGenerate, loading, type }) => {
  return (
    <div className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-[calc(15vw+1rem)] md:right-6 flex items-center justify-center z-40">
      <div className="w-full max-w-md flex gap-3">
        {type === 'single' ? (
          <button 
            onClick={onPost}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-display 
                     bg-transparent border border-neon-blue/30 hover:border-neon-blue 
                     hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300"
          >
            <Send size={18} />
            <span>Post Now</span>
          </button>
        ) : (
          <button
            onClick={onGenerate}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-display 
                     bg-transparent border border-neon-blue/30 hover:border-neon-blue 
                     hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300"
          >
            <SplitSquareHorizontal size={18} />
            <span>{loading ? 'Generating...' : 'Generate Thread'}</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ThreadActions;