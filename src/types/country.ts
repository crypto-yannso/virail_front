export interface Country {
  id: string;
  name: string;
  code: string;
  languages: string[];
  timezone: string;
  population: number;
  marketSize: 'small' | 'medium' | 'large';
  culturalNotes?: string[];
}

export interface CountryMetrics {
  reachPotential: number;
  engagementRate: number;
  competitionLevel: 'low' | 'medium' | 'high';
  bestPostingTimes: string[];
  popularPlatforms: string[];
}

export interface TargetCountry extends Country {
  enabled: boolean;
  metrics?: CountryMetrics;
}