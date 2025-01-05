import React, { useState } from 'react';
import { Globe, Users, Clock, TrendingUp, Search } from 'lucide-react';
import { countries } from '../../data/countries';
import { formatNumber } from '../../lib/utils';

interface Props {
  selectedCountry: string | null;
  onSelect: (countryId: string) => void;
}

// Color mapping for different market sizes
const marketColors = {
  small: 'bg-emerald-100 text-emerald-600',
  medium: 'bg-violet-100 text-violet-600',
  large: 'bg-amber-100 text-amber-600'
};

const CountrySelector = ({ selectedCountry, onSelect }: Props) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCountries = countries.filter(country => 
    country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    country.languages.some(lang => lang.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const selectedCountryData = selectedCountry 
    ? countries.find(c => c.id === selectedCountry)
    : null;

  return (
    <div>
      {/* Search Bar */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search countries or languages..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-indigo-50/50 border-2 border-indigo-100 rounded-lg 
                     focus:outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200 
                     placeholder:text-indigo-400"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-400" size={18} />
      </div>

      {/* Selected Country Summary */}
      {selectedCountryData && (
        <div className="mb-4 p-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg border border-indigo-100">
          <p className="text-sm text-indigo-900">
            <span className="font-medium">Target Market:</span>{' '}
            {selectedCountryData.name} with a reach of{' '}
            <span className="font-semibold text-purple-600">{formatNumber(selectedCountryData.population)}</span> people
          </p>
        </div>
      )}

      {/* Country Grid */}
      <div className="grid gap-4">
        {filteredCountries.map((country) => (
          <div 
            key={country.id}
            onClick={() => onSelect(country.id)}
            className={`p-4 rounded-lg cursor-pointer transition-all ${
              selectedCountry === country.id
                ? 'bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 shadow-lg shadow-indigo-100/50'
                : 'bg-white border-2 border-gray-100 hover:border-indigo-200 hover:shadow-md hover:shadow-indigo-100/30'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${
                  selectedCountry === country.id
                    ? 'bg-gradient-to-r from-indigo-100 to-purple-100' 
                    : 'bg-gray-50'
                }`}>
                  <Globe size={20} className={
                    selectedCountry === country.id
                      ? 'text-indigo-600'
                      : 'text-gray-600'
                  } />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{country.name}</h4>
                  <p className="text-sm text-indigo-600">
                    {country.languages.join(', ')}
                  </p>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-sm font-medium ${marketColors[country.marketSize]}`}>
                {country.code}
              </span>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="flex items-center gap-2 text-sm">
                <Users size={16} className="text-emerald-500" />
                <span className="text-emerald-900">{formatNumber(country.population)}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock size={16} className="text-violet-500" />
                <span className="text-violet-900">{country.timezone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp size={16} className="text-amber-500" />
                <span className="text-amber-900">{country.marketSize} market</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCountries.length === 0 && (
        <div className="text-center py-8 bg-indigo-50/50 rounded-lg border-2 border-dashed border-indigo-100">
          <p className="text-indigo-600">No countries found matching your search</p>
        </div>
      )}
    </div>
  );
};

export default CountrySelector;