import React from 'react';
import { useLanguageStore } from '../../store/languageStore';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
] as const;

const LanguageSelector = () => {
  const { currentLanguage, setLanguage } = useLanguageStore();

  return (
    <select
      value={currentLanguage}
      onChange={(e) => setLanguage(e.target.value as 'en' | 'fr')}
      className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;