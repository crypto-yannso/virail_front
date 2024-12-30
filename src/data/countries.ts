import type { Country } from '../types/country';

export const countries: Country[] = [
  {
    id: 'us',
    name: 'United States',
    code: 'US',
    languages: ['English'],
    timezone: 'UTC-5 to UTC-8',
    population: 331002651,
    marketSize: 'large',
  },
  {
    id: 'jp',
    name: 'Japan',
    code: 'JP',
    languages: ['Japanese'],
    timezone: 'UTC+9',
    population: 125836021,
    marketSize: 'large',
  },
  {
    id: 'fr',
    name: 'France',
    code: 'FR',
    languages: ['French'],
    timezone: 'UTC+1',
    population: 65273511,
    marketSize: 'large',
  },
  {
    id: 'de',
    name: 'Germany',
    code: 'DE',
    languages: ['German'],
    timezone: 'UTC+1',
    population: 83783942,
    marketSize: 'large',
  },
  // Add more countries as needed
];