import React from 'react';
import { FileText, Image, Video, Mic, Presentation, Mail } from 'lucide-react';
import { useBrandVoiceStore } from '../../../store/brandVoiceStore';

const formats = [
  { id: 'blog', label: 'Blog Posts', icon: FileText, description: 'Long-form articles and blog content' },
  { id: 'social', label: 'Social Media', icon: Image, description: 'Posts, captions, and hashtags' },
  { id: 'video', label: 'Video Scripts', icon: Video, description: 'Video content and scripts' },
  { id: 'podcast', label: 'Podcast Scripts', icon: Mic, description: 'Podcast intros and segments' },
  { id: 'presentation', label: 'Presentations', icon: Presentation, description: 'Slide decks and pitches' },
  { id: 'email', label: 'Email Copy', icon: Mail, description: 'Newsletters and campaigns' },
];

const ContentFormats = () => {
  const { selectedFormats, toggleFormat } = useBrandVoiceStore();

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="font-semibold mb-4">Content Formats</h3>
      <div className="grid grid-cols-2 gap-4">
        {formats.map((format) => {
          const Icon = format.icon;
          const isSelected = selectedFormats.includes(format.id);
          
          return (
            <button
              key={format.id}
              onClick={() => toggleFormat(format.id)}
              className={`p-4 rounded-lg border transition-all ${
                isSelected 
                  ? 'border-primary bg-primary/5 ring-2 ring-primary/20' 
                  : 'border-gray-200 hover:border-primary'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${isSelected ? 'bg-primary/10' : 'bg-gray-100'}`}>
                  <Icon size={20} className={isSelected ? 'text-primary' : 'text-gray-500'} />
                </div>
                <div className="text-left">
                  <div className="font-medium">{format.label}</div>
                  <div className="text-sm text-gray-500 mt-1">{format.description}</div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ContentFormats;