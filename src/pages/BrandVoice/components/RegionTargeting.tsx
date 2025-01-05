import React, { useState, useMemo } from 'react';
import { Globe, Search } from 'lucide-react';
import { useBrandVoiceStore } from '../../../store/brandVoiceStore';

const countries = [
  { id: 'us', name: 'United States', language: 'en', flag: '🇺🇸' },
  { id: 'fr', name: 'France', language: 'fr', flag: '🇫🇷' },
  { id: 'es', name: 'Spain', language: 'es', flag: '🇪🇸' },
  { id: 'de', name: 'Germany', language: 'de', flag: '🇩🇪' },
  { id: 'it', name: 'Italy', language: 'it', flag: '🇮🇹' },
  { id: 'pt', name: 'Portugal', language: 'pt', flag: '🇵🇹' },
  { id: 'br', name: 'Brazil', language: 'pt', flag: '🇧🇷' },
  { id: 'nl', name: 'Netherlands', language: 'nl', flag: '🇳🇱' },
  { id: 'jp', name: 'Japan', language: 'ja', flag: '🇯🇵' },
  { id: 'kr', name: 'South Korea', language: 'ko', flag: '🇰🇷' },
  { id: 'cn', name: 'China', language: 'zh', flag: '🇨🇳' },
  { id: 'ca', name: 'Canada', language: 'en', flag: '🇨🇦' },
  { id: 'au', name: 'Australia', language: 'en', flag: '🇦🇺' },
  { id: 'gb', name: 'United Kingdom', language: 'en', flag: '🇬🇧' },
  { id: 'ie', name: 'Ireland', language: 'en', flag: '🇮🇪' },
  { id: 'mx', name: 'Mexico', language: 'es', flag: '🇲🇽' },
  { id: 'ar', name: 'Argentina', language: 'es', flag: '🇦🇷' },
  { id: 'ch', name: 'Switzerland', language: 'de', flag: '🇨🇭' },
  { id: 'at', name: 'Austria', language: 'de', flag: '🇦🇹' },
  { id: 'be', name: 'Belgium', language: 'nl', flag: '🇧🇪' },
];

const RegionTargeting = () => {
  const { 
    setPrimaryLanguage,
    targetCountries = [],
    setTargetCountries = (countries: string[]) => console.log(countries)
  } = useBrandVoiceStore();

  const [searchQuery, setSearchQuery] = useState('');

  const filteredCountries = useMemo(() => {
    return countries.filter(country => 
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.id.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const toggleCountry = (countryId: string) => {
    const country = countries.find(c => c.id === countryId);
    if (!country) return;

    if (targetCountries.includes(countryId)) {
      setTargetCountries(targetCountries.filter(id => id !== countryId));
    } else {
      setTargetCountries([...targetCountries, countryId]);
      // Set the language of the first selected country as primary
      if (targetCountries.length === 0) {
        setPrimaryLanguage(country.language);
      }
    }
  };

  return (
    <div className="bg-white dark:bg-dark-secondary border border-slate-200/60 dark:border-border-dark rounded-lg shadow-[0_8px_16px_-6px_rgba(15,23,42,0.08)] dark:shadow-dark-sm p-6">
      <div className="flex items-center gap-2 mb-6">
        <Globe className="text-primary dark:text-accent-blue" size={20} />
        <h3 className="font-semibold text-slate-900 dark:text-text-primary">Target Market</h3>
      </div>

      <div className="space-y-6">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-text-tertiary" size={18} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search countries..."
            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-dark-tertiary 
                     border border-slate-200 dark:border-border-dark rounded-lg 
                     text-slate-900 dark:text-text-primary placeholder-slate-400 dark:placeholder-text-tertiary
                     focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent-blue"
          />
        </div>

        {/* Country Selection */}
        <div className="max-h-[300px] overflow-y-auto space-y-2 pr-2 
                      scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-border-dark 
                      scrollbar-track-transparent">
          {filteredCountries.map(country => (
            <button
              key={country.id}
              onClick={() => toggleCountry(country.id)}
              className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all
                ${targetCountries.includes(country.id)
                  ? 'border-primary dark:border-accent-blue bg-primary/5 dark:bg-accent-blue/5 text-primary dark:text-accent-blue'
                  : 'border-slate-200 dark:border-border-dark text-slate-900 dark:text-text-primary hover:border-primary dark:hover:border-accent-blue'
                }`}
            >
              <span className="text-xl">{country.flag}</span>
              <span>{country.name}</span>
            </button>
          ))}
        </div>

        {/* Info Box */}
        <div className="p-3 bg-slate-50 dark:bg-dark-tertiary rounded-lg border border-slate-200 dark:border-border-dark">
          <p className="text-sm text-slate-600 dark:text-text-secondary">
            Content will be optimized for selected countries and their primary languages while maintaining your brand voice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegionTargeting;