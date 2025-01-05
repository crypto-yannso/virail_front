import React from 'react';
import { useBrandVoiceStore } from '../../../store/brandVoiceStore';
import type { ToneAdjective } from '../../../types/brandVoice';

const toneOptions: ToneAdjective[] = [
  'Professional',
  'Playful',
  'Authoritative',
  'Inspirational',
  'Friendly',
  'Sarcastic',
];

const ToneSelector = () => {
  const { selectedTones, formality, setTones, setFormality } = useBrandVoiceStore();

  const handleToneToggle = (tone: ToneAdjective) => {
    if (selectedTones.includes(tone)) {
      setTones(selectedTones.filter(t => t !== tone));
    } else if (selectedTones.length < 3) {
      setTones([...selectedTones, tone]);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="font-semibold mb-4">How Should Your Brand Sound?</h3>
      
      <div className="grid grid-cols-2 gap-3 mb-6">
        {toneOptions.map((tone) => (
          <button
            key={tone}
            onClick={() => handleToneToggle(tone)}
            className={`p-3 rounded-lg border transition-colors ${
              selectedTones.includes(tone)
                ? 'border-primary bg-primary/10 text-primary'
                : 'border-gray-200 hover:border-primary'
            }`}
          >
            {tone}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        <label className="block text-sm text-gray-600">Formality Scale</label>
        <input
          type="range"
          min="1"
          max="3"
          value={formality}
          onChange={(e) => setFormality(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
        />
        <div className="flex justify-between text-sm text-gray-500">
          <span>Formal</span>
          <span>Balanced</span>
          <span>Casual</span>
        </div>
      </div>
    </div>
  );
};

export default ToneSelector;