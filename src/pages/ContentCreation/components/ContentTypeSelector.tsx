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
    <div className="bg-white dark:bg-dark-secondary 
                    border border-slate-200/60 dark:border-border-dark
                    rounded-lg 
                    shadow-[0_8px_16px_-6px_rgba(15,23,42,0.08)] dark:shadow-dark-sm
                    p-6">
      <h3 className="font-semibold mb-4 text-slate-900 dark:text-text-primary">What Type of Content?</h3>
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
                  ? 'bg-transparent border border-accent-blue dark:border-accent-blue/50 text-slate-900 dark:text-text-primary shadow-[0_0_10px_rgba(0,240,255,0.2)] dark:shadow-dark-glow' 
                  : 'border border-slate-200 dark:border-border-dark text-slate-900 dark:text-text-primary hover:border-accent-blue dark:hover:border-accent-blue/50'
              }`}
            >
              <Icon size={18} className="text-slate-900 dark:text-text-primary" />
              <span className="text-slate-900 dark:text-text-primary">{type.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ContentTypeSelector;