import React from 'react';
import { Languages, Check } from 'lucide-react';

const LanguageTranslation = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <Languages className="text-primary" size={20} />
        <h3 className="font-semibold">AI Translation</h3>
      </div>

      <div className="space-y-4">
        <div className="p-4 border border-gray-200 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium">Original (English)</span>
            <span className="text-sm text-gray-500">150 characters</span>
          </div>
          <textarea 
            className="w-full h-24 p-3 bg-gray-50 rounded-lg resize-none"
            placeholder="Enter your content here..."
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {['Japanese', 'Korean', 'Mandarin'].map((lang) => (
            <div key={lang} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">{lang}</span>
                <Check size={16} className="text-green-500" />
              </div>
              <p className="text-sm text-gray-600">AI translated & culturally adapted</p>
            </div>
          ))}
        </div>

        <button className="w-full py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
          Translate & Adapt for All Regions
        </button>
      </div>
    </div>
  );
};

export default LanguageTranslation;