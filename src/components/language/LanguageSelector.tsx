import React from 'react';
import { useLanguageStore } from '../../store/languageStore';
import { Check } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
] as const;

const LanguageSelector = () => {
  const { currentLanguage, setLanguage } = useLanguageStore();
  const [isOpen, setIsOpen] = React.useState(false);

  const selectedLanguage = languages.find(lang => lang.code === currentLanguage);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 w-full px-4 py-2.5 bg-white dark:bg-dark-tertiary border border-slate-200 dark:border-border-dark rounded-lg text-slate-900 dark:text-text-primary hover:border-primary dark:hover:border-accent-blue transition-all"
      >
        <span className="text-lg">{selectedLanguage?.flag}</span>
        <span className="flex-1 text-left">{selectedLanguage?.name}</span>
        <svg 
          className={`w-4 h-4 text-slate-400 dark:text-text-secondary transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-30" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute z-40 mt-2 w-full py-1 bg-white dark:bg-dark-secondary border border-slate-200 dark:border-border-dark rounded-lg shadow-lg dark:shadow-dark-lg">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-slate-50 dark:hover:bg-dark-tertiary transition-colors"
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="flex-1 text-slate-900 dark:text-text-primary">{lang.name}</span>
                {currentLanguage === lang.code && (
                  <Check size={16} className="text-primary dark:text-accent-blue" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSelector;