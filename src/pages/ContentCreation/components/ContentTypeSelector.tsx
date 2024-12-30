import React from 'react';
import { Type, Image, Link } from 'lucide-react';

const types = [
  { id: 'text', label: 'Text', icon: Type },
  { id: 'image', label: 'Image', icon: Image },
  { id: 'link', label: 'Link', icon: Link },
];

const ContentTypeSelector = () => {
  const [selectedType, setSelectedType] = React.useState('text');

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="font-semibold mb-4 text-black">What Type of Content?</h3>
      <div className="flex gap-2">
        {types.map((type) => {
          const Icon = type.icon;
          const isSelected = type.id === selectedType;
          
          return (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`flex-1 p-3 rounded-lg flex items-center justify-center gap-2 transition-all ${
                isSelected 
                  ? 'bg-transparent border border-neon-blue text-black shadow-[0_0_10px_rgba(0,240,255,0.2)]' 
                  : 'border border-gray-200 text-black hover:border-neon-blue'
              }`}
            >
              <Icon size={18} className="text-black" />
              <span className="text-black">{type.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ContentTypeSelector;