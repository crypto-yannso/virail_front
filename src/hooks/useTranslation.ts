import { en } from '../i18n/en';
import { fr } from '../i18n/fr';
import { useLanguageStore } from '../store/languageStore';

const translations = {
  en,
  fr,
};

export const useTranslation = () => {
  const { currentLanguage } = useLanguageStore();
  
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[currentLanguage];
    
    for (const k of keys) {
      value = value?.[k];
      if (!value) break;
    }
    
    return value || key;
  };

  return { t, currentLanguage };
};