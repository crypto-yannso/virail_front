import React from 'react';
import { Twitter, Linkedin, Instagram, BookOpen } from 'lucide-react';

const platforms = [
  { id: 'twitter', name: 'Twitter/X', icon: Twitter, color: 'bg-purple-100 text-purple-600', limit: '280 characters' },
  { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, color: 'bg-blue-100 text-blue-600', limit: '3000 characters' },
  { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'bg-green-100 text-green-600', limit: '2200 characters' },
  { id: 'medium', name: 'Medium', icon: BookOpen, color: 'bg-yellow-100 text-yellow-600', limit: 'Unlimited' },
];

const PlatformSelector = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="font-semibold mb-4">Where Will This Be Posted?</h3>
      <div className="grid grid-cols-2 gap-3">
        {platforms.map((platform) => {
          const Icon = platform.icon;
          return (
            <button
              key={platform.id}
              className={`p-3 rounded-lg flex items-center justify-center gap-2 ${platform.color} hover:opacity-90 transition-opacity`}
            >
              <Icon size={18} />
              <div className="text-left">
                <div>{platform.name}</div>
                <div className="text-xs opacity-75">{platform.limit}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PlatformSelector;