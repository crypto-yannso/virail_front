import React from 'react';
import { Eye, Edit2 } from 'lucide-react';

const PostPreview = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Eye className="text-primary" size={20} />
          <h3 className="font-semibold">Post Preview</h3>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Edit2 size={20} />
        </button>
      </div>
      
      <div className="space-y-4">
        <div className="p-4 border border-gray-200 rounded-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-200" />
            <div className="flex-1">
              <div className="font-medium">VIRAIL AI</div>
              <div className="text-sm text-gray-500">@virail_ai • 2h</div>
              <div className="mt-2">
                Discover how AI is transforming content creation! Our latest insights show a 300% increase in engagement when using AI-powered content strategies. #AIContent #DigitalMarketing
              </div>
              <div className="mt-4 flex items-center gap-6 text-sm text-gray-500">
                <button className="hover:text-primary">💬 12</button>
                <button className="hover:text-primary">🔄 24</button>
                <button className="hover:text-primary">❤️ 89</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex gap-4">
          <button className="flex-1 py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            Schedule Post
          </button>
          <button className="flex-1 py-2 px-4 border border-gray-200 rounded-lg hover:border-primary transition-colors">
            Generate Alternative
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;