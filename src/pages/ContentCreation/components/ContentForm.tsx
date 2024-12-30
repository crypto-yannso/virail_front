import React from 'react';
import { Wand2 } from 'lucide-react';
import ToneSelector from './ToneSelector';

const ContentForm = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Create Content</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Content Title
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter title..."
          />
        </div>
        
        <ToneSelector />
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Content Body
          </label>
          <textarea
            className="w-full h-48 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            placeholder="Start writing..."
          />
        </div>

        <button
          type="button"
          className="w-full btn-primary flex items-center justify-center gap-2"
        >
          <Wand2 size={18} />
          Generate with AI
        </button>
      </form>
    </div>
  );
}

export default ContentForm;