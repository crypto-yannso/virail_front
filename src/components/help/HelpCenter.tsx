import React from 'react';
import { HelpCircle, Book, MessageCircle, Coffee, X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const HelpCenter = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  const helpItems = [
    { icon: Book, label: 'Documentation', description: 'Learn how to use VIRAIL' },
    { icon: MessageCircle, label: 'Support', description: 'Get help from our team' },
    { icon: Coffee, label: 'Community', description: 'Join our community' },
  ];

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />
      <div className="fixed bottom-20 left-4 right-4 md:left-[calc(15vw+1rem)] md:right-6 bg-white rounded-lg shadow-lg z-50 p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <HelpCircle className="text-primary" size={20} />
            <h2 className="text-lg font-semibold">Help Center</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {helpItems.map(({ icon: Icon, label, description }) => (
            <button
              key={label}
              className="p-4 text-left border border-gray-200 rounded-lg hover:border-primary transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon size={18} className="text-primary" />
                </div>
                <span className="font-medium">{label}</span>
              </div>
              <p className="text-sm text-gray-500">{description}</p>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default HelpCenter;