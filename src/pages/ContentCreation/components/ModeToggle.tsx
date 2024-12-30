import React from 'react';
import { Bot, Pencil } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ModeToggle = () => {
  const navigate = useNavigate();

  const handleAutomaticClick = () => {
    navigate('/automation');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="font-semibold mb-4 text-black">Choose Mode</h3>
      <div className="flex gap-3">
        <button className="flex-1 p-3 bg-white border border-neon-blue rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 hover:border-neon-blue/80 transition-all">
          <Pencil size={18} className="text-black" />
          <span className="text-black">Semi-Automatic</span>
        </button>
        <button 
          onClick={handleAutomaticClick}
          className="flex-1 p-3 border border-gray-200 rounded-lg flex items-center justify-center gap-2 text-black hover:border-neon-blue transition-colors"
        >
          <Bot size={18} />
          <span className="text-black">Automatic</span>
        </button>
      </div>
    </div>
  );
};

export default ModeToggle;