import React from 'react';
import { Globe, Languages } from 'lucide-react';
import { useBrandVoiceStore } from '../../../store/brandVoiceStore';
import CountrySelector from '../../../components/country/CountrySelector';

const RegionTargeting = () => {
  const { 
    targetCountries,
    toggleCountry,
    primaryLanguage, 
    setPrimaryLanguage 
  } = useBrandVoiceStore();

  const selectedCountry = targetCountries.find(country => country.enabled)?.id || null;

  return (
    <div className="bg-gradient-to-br from-white to-indigo-50/30 p-6 rounded-lg shadow-lg border border-indigo-100">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg">
          <Globe className="text-indigo-600" size={20} />
        </div>
        <h3 className="font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Target Market Settings
        </h3>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-indigo-900 mb-2">Primary Language</label>
          <select 
            value={primaryLanguage}
            onChange={(e) => setPrimaryLanguage(e.target.value)}
            className="w-full px-3 py-2 bg-white border-2 border-indigo-100 rounded-lg 
                     focus:outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200
                     text-indigo-600"
          >
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="es">Spanish</option>
            <option value="ja">Japanese</option>
          </select>
        </div>

        <CountrySelector 
          selectedCountry={selectedCountry}
          onSelect={toggleCountry}
        />

        <div className="p-4 bg-gradient-to-r from-purple-100/50 to-indigo-100/50 rounded-lg border border-purple-200">
          <p className="text-sm text-indigo-900">
            <span className="font-medium text-purple-700">AI Assistant:</span>{' '}
            Content will be automatically translated and culturally adapted for your target market 
            while maintaining your brand voice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegionTargeting;