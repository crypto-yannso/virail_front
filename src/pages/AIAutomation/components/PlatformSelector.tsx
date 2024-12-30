import React from 'react';
import { Twitter, Linkedin, Instagram, BookOpen } from 'lucide-react';

const platforms = [
  { id: 'twitter', name: 'Twitter/X', icon: Twitter, color: 'bg-purple-100 text-purple-600' },
  { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, color: 'bg-blue-100 text-blue-600' },
  { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'bg-green-100 text-green-600' },
  { id: 'medium', name: 'Medium', icon: BookOpen, color: 'bg-yellow-100 text-yellow-600' },
];

const PlatformSelector = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="font-semibold mb-4">Where Should VIRAIL Focus?</h3>
      <div className="grid grid-cols-2 gap-3 mb-4">
        {platforms.map((platform) => {
          const Icon = platform.icon;
          return (
            <button
              key={platform.id}
              className={`p-3 rounded-lg flex items-center justify-center gap-2 ${platform.color} hover:opacity-90 transition-opacity`}
            >
              <Icon size={18} />
              <span>{platform.name}</span>
            </button>
          );
        })}
      </div>
      <label className="flex items-center justify-between cursor-pointer">
        <span className="text-sm">Let AI Choose for Me</span>
        <div className="relative inline-flex items-center">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
        </div>
      </label>
    </div>
  );
};

export default PlatformSelector;