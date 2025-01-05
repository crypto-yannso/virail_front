import React from 'react';
import { Globe, Users, Clock, TrendingUp } from 'lucide-react';

const regions = [
  {
    id: 'asia-pacific',
    name: 'Asia Pacific',
    languages: ['Japanese', 'Korean', 'Mandarin'],
    population: '2.2B+',
    timezone: 'UTC+8/9',
    growth: '+24%'
  },
  {
    id: 'europe',
    name: 'Europe',
    languages: ['German', 'French', 'Italian'],
    population: '750M+',
    timezone: 'UTC+1/2',
    growth: '+18%'
  },
  {
    id: 'latin-america',
    name: 'Latin America',
    languages: ['Spanish', 'Portuguese'],
    population: '650M+',
    timezone: 'UTC-3/5',
    growth: '+29%'
  }
];

const RegionSelector = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="font-semibold mb-4">Target Regions</h3>
      <div className="grid gap-4">
        {regions.map((region) => (
          <div 
            key={region.id}
            className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors cursor-pointer"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Globe size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{region.name}</h4>
                  <p className="text-sm text-gray-500">
                    {region.languages.join(', ')}
                  </p>
                </div>
              </div>
              <span className="text-green-600 text-sm font-medium">
                {region.growth}
              </span>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Users size={16} />
                <span>{region.population}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock size={16} />
                <span>{region.timezone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <TrendingUp size={16} />
                <span>High Potential</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegionSelector;