import React from 'react';
import { useBrandVoiceStore } from '../../../store/brandVoiceStore';

const BrandDescription = () => {
  const { description, setDescription } = useBrandVoiceStore();

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="font-semibold mb-4">Describe Your Brand in One Sentence</h3>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        maxLength={140}
        placeholder="We are a tech-driven SaaS platform that simplifies marketing"
        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <p className="text-sm text-gray-500 mt-2">
        {140 - description.length} characters remaining
      </p>
    </div>
  );
};

export default BrandDescription;